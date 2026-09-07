import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { projects, categoryColors } from '../projectsData';

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const project = projects.find(p => p.caseStudySlug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px] bg-neutral-900 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover opacity-40"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-transparent" />

        <div className="relative h-full max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col justify-end pb-16">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Back to Projects</span>
          </Link>

          <div
            className="inline-block px-4 py-2 rounded-lg text-white text-sm font-bold uppercase tracking-wider mb-4 w-fit"
            style={{ backgroundColor: categoryColors[project.category] }}
          >
            {project.category}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
            {project.title}
          </h1>

          <p className="text-xl md:text-2xl text-neutral-300 mb-6">
            {project.tagline}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1.5 bg-white/10 backdrop-blur-sm text-white rounded-lg text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-orange-600 transition-all w-fit"
            >
              <span>Visit Live Site</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
          )}
        </div>
      </div>

      {/* Overview Section */}
      <div className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div>
              <h3 className="text-sm font-bold text-neutral-500 uppercase tracking-wider mb-2">Client</h3>
              <p className="text-lg font-semibold text-neutral-900">{project.client || 'Confidential'}</p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-neutral-500 uppercase tracking-wider mb-2">Year</h3>
              <p className="text-lg font-semibold text-neutral-900">{project.year}</p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-neutral-500 uppercase tracking-wider mb-2">Category</h3>
              <p className="text-lg font-semibold text-neutral-900 capitalize">{project.category}</p>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-black text-neutral-900 mb-6">
            Project Overview
          </h2>
          <p className="text-lg text-neutral-700 leading-relaxed mb-12">
            {project.description}
          </p>

          {/* Results Metrics */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {project.results.map((result, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border-2 text-center"
                style={{
                  borderColor: `${categoryColors[project.category]}30`,
                  backgroundColor: `${categoryColors[project.category]}08`
                }}
              >
                <div className="text-4xl md:text-5xl font-black mb-2" style={{ color: categoryColors[project.category] }}>
                  {result.value}
                </div>
                <div className="text-sm text-neutral-600 font-medium">{result.metric}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Challenge Section */}
      {project.challenge && (
        <div className="py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <h2 className="text-3xl md:text-4xl font-black text-neutral-900 mb-6">
              The Challenge
            </h2>
            <p className="text-lg text-neutral-700 leading-relaxed">
              {project.challenge}
            </p>
          </div>
        </div>
      )}

      {/* Solution Section */}
      {project.solution && (
        <div className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <h2 className="text-3xl md:text-4xl font-black text-neutral-900 mb-6">
              Our Solution
            </h2>
            <p className="text-lg text-neutral-700 leading-relaxed mb-8">
              {project.solution}
            </p>

            <div className="mt-12">
              <h3 className="text-xl font-bold text-neutral-900 mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, i) => (
                  <div
                    key={i}
                    className="px-4 py-2.5 rounded-xl font-medium"
                    style={{
                      backgroundColor: `${categoryColors[project.category]}15`,
                      color: categoryColors[project.category]
                    }}
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Results Section */}
      <div className="py-16 md:py-20 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-12">
            Results That Matter
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {project.results.map((result, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl md:text-6xl font-black text-primary mb-3">
                  {result.value}
                </div>
                <div className="text-neutral-300 font-semibold">{result.metric}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-neutral-900 mb-6">
            Ready to achieve similar results?
          </h2>
          <p className="text-lg text-neutral-600 mb-8">
            Let's discuss how we can help your business grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold text-lg rounded-xl hover:bg-orange-600 transition-all"
            >
              <span>Start Your Project</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-neutral-100 text-neutral-900 font-semibold text-lg rounded-xl hover:bg-neutral-200 transition-all"
            >
              <span>View All Projects</span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

// Generate static params for all projects
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.caseStudySlug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find(p => p.caseStudySlug === params.slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} - Case Study | Kashavi Infotech`,
    description: project.description,
  };
}
