import { clients, pressMentions } from '@/data/clients';

export function Marquee() {
  // Duplicate the list so the seamless loop works
  const clientTrack = [...clients, ...clients];
  const pressTrack = [...pressMentions, ...pressMentions];

  return (
    <section
      aria-label="Clients and press"
      className="bg-surface border-y border-line py-10"
    >
      {/* Clients row */}
      <div className="container-x mb-2 flex items-center justify-center">
        <span className="text-label text-ink-500">Trusted by businesses worldwide</span>
      </div>
      <div className="marquee-mask overflow-hidden">
        <ul className="marquee-track px-6 list-none" aria-hidden="true">
          {clientTrack.map((client, i) => (
            <li
              key={`${client.id}-${i}`}
              className="wordmark"
              title={`${client.name} — ${client.industry}`}
            >
              {client.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Press row */}
      <div className="container-x mt-8 mb-2 flex items-center justify-center">
        <span className="text-label text-ink-500">As featured in</span>
      </div>
      <div className="marquee-mask overflow-hidden">
        <ul className="marquee-track marquee-track-rev px-6 list-none" aria-hidden="true">
          {pressTrack.map((pub, i) => (
            <li
              key={`${pub.id}-${i}`}
              className="wordmark"
            >
              {pub.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
