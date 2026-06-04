import type { FC } from 'react';
import { TIERS, STATS, HOW_IT_WORKS } from '@/data/content';

const HeroSection: FC = () => (
  <section className="flex flex-col items-center justify-center min-h-screen text-center px-6 py-24">
    <p className="text-brand-accent text-sm tracking-widest uppercase mb-4">De-ASI-INTERFACE Ecosystem</p>
    <h1 className="text-5xl md:text-7xl font-bold glow mb-6">
      Trade By Second
    </h1>
    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-10">
      Precision-timed trading intelligence. A single second is the difference between alpha and noise.
    </p>
    <div className="flex gap-4 flex-wrap justify-center">
      <a
        href="#tiers"
        className="bg-brand-accent text-black font-bold px-8 py-3 rounded-lg hover:brightness-110 transition"
      >
        View Subscription Tiers
      </a>
      <a
        href="#how-it-works"
        className="border border-brand-accent text-brand-accent px-8 py-3 rounded-lg hover:bg-brand-accent hover:text-black transition"
      >
        How It Works
      </a>
    </div>
  </section>
);

const StatsSection: FC = () => (
  <section className="py-16 px-6 border-y border-white/10">
    <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      {STATS.map((stat) => (
        <div key={stat.label}>
          <p className="text-3xl font-bold text-brand-accent">{stat.value}</p>
          <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
        </div>
      ))}
    </div>
  </section>
);

const TiersSection: FC = () => (
  <section id="tiers" className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-4">Subscription Tiers</h2>
      <p className="text-center text-gray-400 mb-14">
        Start where you are. Scale as you grow.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {TIERS.map((tier) => (
          <div key={tier.name} className={`card p-8 flex flex-col ${tier.featured ? 'border-brand-gold' : ''}` }>
            <p className="text-2xl mb-1">{tier.icon}</p>
            <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
            <p className="text-brand-accent font-bold text-xl mb-4">{tier.price}</p>
            <p className="text-gray-400 text-sm mb-6">{tier.target}</p>
            <ul className="space-y-2 flex-1">
              {tier.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <span className="text-brand-accent mt-0.5">✓</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a
              href="mailto:contact@de-asi-interface.io"
              className="mt-8 block text-center bg-brand-accent text-black font-bold py-3 rounded-lg hover:brightness-110 transition"
            >
              Get Started
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const HowItWorksSection: FC = () => (
  <section id="how-it-works" className="py-24 px-6 bg-brand-muted/30">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-14">How It Works</h2>
      <ol className="space-y-8">
        {HOW_IT_WORKS.map((step, i) => (
          <li key={step.title} className="flex gap-6 items-start">
            <span className="text-brand-accent font-bold text-3xl w-10 shrink-0">{i + 1}</span>
            <div>
              <h3 className="text-xl font-bold mb-1">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

const Footer: FC = () => (
  <footer className="py-12 px-6 border-t border-white/10 text-center text-gray-500 text-sm">
    <p className="mb-2">
      Powered by the{' '}
      <a href="https://github.com/De-ASI-INTERFACE" className="text-brand-accent hover:underline">
        De-ASI-INTERFACE
      </a>{' '}
      ecosystem · Built in Akron, Ohio · Engineered for global markets.
    </p>
    <p>Trade By Second is an active trading intelligence service. Trading involves risk; deploy capital responsibly.</p>
  </footer>
);

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <TiersSection />
      <HowItWorksSection />
      <Footer />
    </main>
  );
}
