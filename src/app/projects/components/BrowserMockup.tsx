import Image from 'next/image';
import Link from 'next/link';

interface BrowserMockupProps {
  image: string;
  title: string;
  liveUrl?: string;
  category: string;
  categoryColor: string;
}

export function BrowserMockup({ image, title, liveUrl, category, categoryColor }: BrowserMockupProps) {
  return (
    <div className="relative group">
      {/* Browser Window */}
      <div className="relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 group-hover:shadow-3xl group-hover:-translate-y-1">
        {/* Browser Chrome */}
        <div className="bg-neutral-800 h-10 flex items-center px-4 gap-3">
          {/* Traffic Lights */}
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>

          {/* Address Bar */}
          <div className="flex-1 bg-neutral-700 h-6 rounded-md flex items-center px-3 gap-2">
            <svg className="w-3 h-3 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span className="text-xs text-neutral-400 truncate font-mono">
              {liveUrl ? liveUrl.replace('https://', '').replace('http://', '') : `${category}.example.com`}
            </span>
          </div>
        </div>

        {/* Screenshot Area */}
        <div className="relative aspect-[16/10] bg-white overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 50vw"
          />

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-12">
            {liveUrl && (
              <Link
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-neutral-900 font-bold text-lg rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 translate-y-4 group-hover:translate-y-0"
              >
                <span>Visit Live Website</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Depth Shadow */}
      <div
        className="absolute -inset-4 blur-3xl opacity-20 -z-10 transition-opacity duration-700 group-hover:opacity-30"
        style={{ backgroundColor: categoryColor }}
      />
    </div>
  );
}
