import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// Rate limiting store (in-memory for now, use Redis in production)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  service: z.string().min(1, 'Please select a service'),
  budget: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000),
});

type ContactFormData = z.infer<typeof contactSchema>;

// Simple rate limiting (5 requests per IP per hour)
function checkRateLimit(ip: string): { allowed: boolean; resetTime?: number } {
  const now = Date.now();
  const limit = rateLimitStore.get(ip);

  if (!limit || now > limit.resetTime) {
    // Reset or create new limit
    rateLimitStore.set(ip, {
      count: 1,
      resetTime: now + 60 * 60 * 1000, // 1 hour
    });
    return { allowed: true };
  }

  if (limit.count >= 5) {
    return { allowed: false, resetTime: limit.resetTime };
  }

  limit.count++;
  return { allowed: true };
}

// Send email (placeholder - integrate with your email service)
async function sendEmail(data: ContactFormData): Promise<boolean> {
  // TODO: Integrate with your email service (SendGrid, Resend, Nodemailer, etc.)
  // Example with Resend:
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: 'onboarding@resend.dev',
  //   to: 'hello@kashaviinfotech.com',
  //   subject: `New Contact Form Submission from ${data.name}`,
  //   html: `...`,
  // });

  console.log('Contact form submission:', data);

  // For now, return true to simulate success
  // Replace this with actual email sending logic
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';

    // Check rate limit
    const rateLimit = checkRateLimit(ip);
    if (!rateLimit.allowed) {
      const resetIn = rateLimit.resetTime ? Math.ceil((rateLimit.resetTime - Date.now()) / 1000 / 60) : 60;
      return NextResponse.json(
        { error: `Too many requests. Please try again in ${resetIn} minutes.` },
        { status: 429 }
      );
    }

    // Parse and validate request body
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    // Send email
    const emailSent = await sendEmail(validatedData);

    if (!emailSent) {
      return NextResponse.json(
        { error: 'Failed to send message. Please try again later.' },
        { status: 500 }
      );
    }

    // Success response
    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for contacting us! We will get back to you within 24 hours.'
      },
      { status: 200 }
    );

  } catch (error) {
    // Validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.issues },
        { status: 400 }
      );
    }

    // Generic error
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}

// OPTIONS handler for CORS preflight
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Allow': 'POST, OPTIONS',
    },
  });
}
