'use client';

import { ArrowRight } from 'lucide-react';
import { m } from 'motion/react';

type LampDemoProps = {
  bookingUrl: string;
  pricingHref?: string;
  fallbackHref?: string;
};

export default function LampDemo({
  bookingUrl,
  pricingHref = '#pricing',
  fallbackHref = '#fallback-contact',
}: LampDemoProps) {
  return (
    <div className="mx-auto flex min-h-[40rem] max-w-3xl flex-col items-center justify-center text-center">
      <m.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.5, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="mb-5 font-mono text-xs uppercase tracking-[0.35em] text-cyan-300/70"
      >
        Talspace Vibe Support
      </m.p>

      <m.h1
        initial={{ opacity: 0.35, y: 72 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.25,
          duration: 0.8,
          ease: 'easeInOut',
        }}
        viewport={{ once: true }}
        className="max-w-3xl bg-gradient-to-b from-white via-zinc-100 to-zinc-500 bg-clip-text text-[clamp(2.9rem,7.3vw,5.6rem)] leading-[0.94] font-medium tracking-tight text-transparent"
      >
        Get unstuck and keep shipping.
      </m.h1>

      <m.p
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-300 md:text-xl"
      >
        Real-time engineering help for AI-built products. Fix blockers fast, clean up fragile
        code, and move forward with confidence.
      </m.p>

      <m.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="mt-8 flex flex-col gap-4 sm:flex-row"
      >
        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-200 to-cyan-400 px-7 py-4 text-sm font-semibold text-cyan-950 transition-transform hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(34,211,238,0.25)] active:scale-95"
        >
          Book a Pairing Session
        </a>
        <a
          href={pricingHref}
          className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] px-7 py-4 text-sm font-medium text-zinc-100 transition-colors hover:bg-white/[0.07]"
        >
          See Pricing
        </a>
      </m.div>

      <m.a
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.58, duration: 0.5, ease: 'easeOut' }}
        viewport={{ once: true }}
        href={fallbackHref}
        className="mt-5 inline-flex items-center gap-2 text-sm text-cyan-300 transition-colors hover:text-cyan-200"
      >
        Prefer email first? Use the fallback contact path
        <ArrowRight className="h-4 w-4" />
      </m.a>
    </div>
  );
}

const signalColumns = ['18%', '36%', '56%', '74%', '92%'];

const signalBeams = [
  {
    top: '14%',
    left: '28%',
    width: '58%',
    rotate: '-15deg',
    opacity: '0.45',
  },
  {
    top: '34%',
    left: '34%',
    width: '50%',
    rotate: '-10deg',
    opacity: '0.4',
  },
  {
    top: '58%',
    left: '40%',
    width: '48%',
    rotate: '2deg',
    opacity: '0.25',
  },
  {
    top: '76%',
    left: '48%',
    width: '38%',
    rotate: '7deg',
    opacity: '0.22',
  },
];

export function HeroSignalGrid() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(30,58,138,0.14),transparent_36%),radial-gradient(circle_at_84%_78%,rgba(12,74,110,0.12),transparent_28%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.028)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.028)_1px,transparent_1px)] bg-[size:78px_78px]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:26px_26px] opacity-80" />

      {signalColumns.map((left, index) => (
        <div
          key={left}
          className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/12 to-transparent"
          style={{ left, opacity: index > 1 ? 0.52 : 0.3 }}
        />
      ))}

      {signalBeams.map((beam, index) => (
        <div
          key={`${beam.top}-${beam.left}`}
          className="absolute h-px bg-gradient-to-r from-transparent via-cyan-100/60 to-transparent"
          style={{
            top: beam.top,
            left: beam.left,
            width: beam.width,
            opacity: Number(beam.opacity) * 0.72,
            transform: `rotate(${beam.rotate})`,
            transformOrigin: 'left center',
            boxShadow: '0 0 14px rgba(34, 211, 238, 0.08)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-300/30 to-transparent blur-sm" />
          <m.div
            initial={{ x: '-8%', opacity: 0 }}
            animate={{ x: ['0%', '100%'], opacity: [0, 0.9, 0] }}
            transition={{
              duration: 6 + index,
              repeat: Infinity,
              repeatDelay: 1.4 + index * 0.2,
              ease: 'linear',
            }}
            className="absolute left-0 top-1/2 h-[3px] w-20 -translate-y-1/2 bg-gradient-to-r from-transparent via-cyan-200 to-transparent blur-[1px]"
          />
        </div>
      ))}

      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#020617]/55 to-transparent" />
    </div>
  );
}
