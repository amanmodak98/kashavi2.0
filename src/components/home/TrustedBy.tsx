'use client';

export function TrustedBy() {
  const stats = [
    { value: '50+', label: 'Projects Delivered' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '6', label: 'Industries' },
    { value: '+200%', label: 'Avg Revenue Growth' }
  ];

  return (
    <section className="py-12 bg-white border-y border-stone-200">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-8">
          <p className="text-sm font-medium text-stone-500 uppercase tracking-wider">
            Trusted by businesses worldwide
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-black text-orange-500 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-stone-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
