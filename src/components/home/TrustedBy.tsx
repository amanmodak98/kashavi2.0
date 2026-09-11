export function TrustedBy() {
  const stats = [
    { value: '50+', label: 'Projects Delivered' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '6', label: 'Industries' },
    { value: '+200%', label: 'Avg Revenue Growth' },
  ];

  return (
    <section className="bg-white border-y border-line">
      <div className="container-x py-12 md:py-14">
        <p className="text-center text-label text-ink-500 mb-10">
          Trusted by businesses worldwide
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brand-600 tracking-tight tabular-nums mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-ink-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
