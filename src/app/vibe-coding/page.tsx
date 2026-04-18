import type { Metadata } from 'next';
import Image from 'next/image';
import {
  ArrowRight,
  Bolt,
  CheckCircle2,
  Code2,
  CreditCard,
  Keyboard,
  Rocket,
  ShieldCheck,
  Star,
  Terminal,
  UserPlus,
  X,
} from 'lucide-react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Talspace Vibe Coding | Ship Like a Pro',
  description:
    'Pair with senior engineers in real time and turn vibe-coded prototypes into production-ready products.',
};

const diagnosticProblems = [
  'Bugs you cannot debug',
  'Messy architecture',
  'Features that do not scale',
];

const diagnosticPatches = [
  'Fix issues instantly',
  'Get architecture right from day one',
  'Turn rough code into production-ready systems',
];

const workflowSteps = [
  {
    title: 'Build Fast',
    copy: 'Use your usual tools: Cursor, GPT, etc.',
    code: 'STEP_01 // INITIATE',
    icon: Bolt,
  },
  {
    title: 'Get Paired',
    copy: 'Connect with an engineer instantly.',
    code: 'STEP_02 // SYNCING',
    icon: UserPlus,
  },
  {
    title: 'Build Together',
    copy: 'Debug, refine, and improve in real time.',
    code: 'STEP_03 // REFINE',
    icon: Code2,
  },
  {
    title: 'Ship Better',
    copy: 'From "it works" to "it scales".',
    code: 'STEP_04 // RELEASE',
    icon: Rocket,
  },
];

const accessPlans = [
  {
    name: 'Pay per session',
    price: 'Start small',
    label: 'Flexible',
    highlighted: false,
  },
  {
    name: 'Ongoing access',
    price: 'Scale as you grow',
    label: 'Pool access',
    highlighted: true,
  },
];

const builders = ['Indie hackers', 'Non-technical founders', 'Startup teams', 'Product managers'];

const proofQuotes = [
  'Like having a senior engineer on demand.',
  'Helped us ship in days, not weeks.',
];

export default function VibeCodingPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-cyan-500/30 selection:text-white">
      <Navbar />

      <section id="terminal" className="relative flex min-h-[calc(100svh-3.5rem)] items-center overflow-hidden px-6 pb-16 pt-28 lg:px-16 lg:pb-20 lg:pt-24 xl:px-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(8,145,178,0.12),transparent_42%)]" />
        <div className="absolute left-0 right-0 top-[30%] h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
        <div className="absolute bottom-[-10rem] left-[-8rem] h-80 w-80 rounded-full bg-cyan-400/5 blur-3xl" />
        <div className="mx-auto w-full max-w-[1440px]">
          <div className="mx-auto max-w-5xl text-center">
            <h1 className="font-sans text-[clamp(3.25rem,9vw,7.25rem)] leading-[0.94] tracking-tight text-zinc-100">
              <span className="block">Build fast</span>
              <span className="block bg-gradient-to-br from-cyan-100 to-cyan-400 bg-clip-text text-transparent">
                with vibe coding
              </span>
              <span className="block">Ship like a pro.</span>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-base font-light leading-relaxed text-zinc-400 md:text-lg xl:text-xl">
              Pair with experienced engineers in real time. Turn quick builds into stable,
              production-ready products.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://calendly.com/absaarmalik15/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-br from-cyan-200 to-cyan-400 px-8 py-4 text-sm font-medium text-cyan-950 transition-all hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] active:scale-95"
              >
                Get Paired
              </a>
              <a
                href="#mission"
                className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-black/40 px-8 py-4 text-sm font-medium text-cyan-300 backdrop-blur-sm transition-colors hover:bg-white/5"
              >
                See How It Works
              </a>
            </div>
          </div>

          <div className="relative mx-auto mt-12 max-w-6xl overflow-hidden rounded-lg border border-white/10 bg-zinc-950/75 backdrop-blur-xl lg:mt-14">
            <div className="flex h-8 items-center gap-2 border-b border-white/10 bg-black/60 px-4">
              <span className="h-2 w-2 rounded-full bg-red-500/60" />
              <span className="h-2 w-2 rounded-full bg-yellow-500/60" />
              <span className="h-2 w-2 rounded-full bg-green-500/60" />
              <span className="ml-4 font-mono text-[10px] tracking-widest text-zinc-500">
                LIVE_PAIRING_SESSION.sh
              </span>
            </div>

            <div className="relative p-5 md:p-6 lg:p-8">
              <div className="absolute inset-y-1/2 left-0 right-0 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent md:block" />
              <div className="relative grid gap-4 md:grid-cols-12 md:items-center">
                <div className="space-y-3 font-mono text-sm text-zinc-400 md:col-span-4">
                  <p>
                    <span className="text-cyan-400">builder@talspace:</span>
                    <span className="text-cyan-100">~</span>$ npx create-vibe-app
                  </p>
                  <p className="text-cyan-200">Vibe coding gets you moving fast...</p>
                  <p className="text-zinc-500">But things break.</p>
                </div>

                <div className="rounded-lg border border-cyan-400/20 bg-white/5 p-4 md:col-span-5">
                  <p className="mb-1 text-xs font-medium text-cyan-100">ENGINEER_01</p>
                  <p className="text-xs italic leading-normal text-zinc-300">
                    &quot;Let&apos;s fix the issue instantly and get the architecture right from
                    day one.&quot;
                  </p>
                </div>

                <div className="rounded-lg border border-cyan-300/40 bg-cyan-300/10 p-4 md:col-span-3 md:justify-self-end">
                  <p className="mb-1 text-right text-xs font-medium text-cyan-300">YOU</p>
                  <p className="text-xs leading-normal text-zinc-200">
                    &quot;No hiring. No delays. Just progress.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="mission" className="border-y border-white/5 bg-black px-6 py-24 md:py-32">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-10 md:flex-row md:gap-12">
          <DiagnosticPanel
            tone="error"
            label="DIAGNOSTIC: CRITICAL"
            title="Fast Builds. Fragile Systems."
            copy="Vibe coding gets you moving fast, but things break. You are stuck between speed and reliability."
            items={diagnosticProblems}
          />

          <div className="hidden flex-col items-center justify-center gap-4 py-8 lg:flex">
            <div className="w-px flex-1 bg-gradient-to-b from-transparent via-zinc-700 to-transparent" />
            <ArrowRight className="h-5 w-5 rotate-90 text-cyan-200" />
            <div className="w-px flex-1 bg-gradient-to-b from-transparent via-zinc-700 to-transparent" />
          </div>

          <DiagnosticPanel
            tone="patch"
            label="PATCH: DEPLOYED"
            title="Real Engineers. Real-Time Help."
            copy="Work alongside experienced developers while you build. No hiring. No delays. Just progress."
            items={diagnosticPatches}
          />
        </div>
      </section>

      <section id="nodes" className="relative overflow-hidden px-6 py-24 md:py-32">
        <div className="mx-auto mb-20 max-w-[1440px] text-center">
          <h2 className="mb-4 font-sans text-4xl tracking-tight text-white md:text-6xl">
            How It Works
          </h2>
          <p className="mx-auto max-w-2xl text-zinc-500">
            Build fast, get paired, build together, and ship better.
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute bottom-0 left-8 top-0 w-px bg-gradient-to-b from-cyan-300 via-cyan-300/20 to-transparent md:left-1/2" />
          <div className="relative space-y-20 md:space-y-24">
            {workflowSteps.map((step, index) => (
              <WorkflowStep key={step.title} step={step} reverse={index % 2 === 1} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/5 bg-black px-6 py-24 md:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-6 md:grid-cols-12 md:auto-rows-[250px]">
            <div className="relative min-h-[360px] overflow-hidden rounded-lg bg-zinc-950 p-8 md:col-span-8 md:row-span-2">
              <Image
                src="/vibe-coding-network.png"
                alt="Abstract digital network with cyan circuit lines"
                fill
                sizes="(min-width: 768px) 66vw, 100vw"
                className="object-cover opacity-25 transition-transform duration-700 hover:scale-105"
              />
              <div className="relative z-10 flex h-full flex-col justify-end">
                <span className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-cyan-100">
                  Who It&apos;s For
                </span>
                <h3 className="mb-5 font-sans text-4xl text-white">For Builders Who Move Fast</h3>
                <div className="flex max-w-xl flex-wrap gap-2">
                  {builders.map((builder) => (
                    <span
                      key={builder}
                      className="rounded-lg border border-cyan-300/15 bg-black/40 px-3 py-1.5 text-sm text-zinc-300"
                    >
                      {builder}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <MetricTile
              icon={Terminal}
              title="Speed + Reliability"
              copy="Keep the speed of vibe coding. Add the reliability of experienced engineers."
            />
            <MetricTile
              icon={Code2}
              title="Built with Talspace"
              copy={proofQuotes[0]}
            />
            <StatTile value="Build faster." label="SHIP_CLEANER" />
            <StatTile value="Scale confidently." label="GROW_READY" highlight />
            <MetricTile
              icon={ShieldCheck}
              title="Built with Talspace"
              copy={proofQuotes[1]}
            />
          </div>
        </div>
      </section>

      <section id="pricing" className="px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="mb-8 font-sans text-5xl leading-[0.95] tracking-tight text-white md:text-7xl">
              Stop
              <br />
              debugging
              <br />
              <span className="text-cyan-200">alone.</span>
            </h2>
            <p className="mb-8 max-w-xl text-lg font-light leading-relaxed text-zinc-400">
              Build faster with someone who knows what they are doing.
            </p>

            <div className="space-y-4">
              {accessPlans.map((plan) => (
                <div
                  key={plan.name}
                  className={`flex items-center gap-4 rounded-lg p-4 ${
                    plan.highlighted ? 'bg-cyan-300 text-cyan-950' : 'border border-white/10 bg-black/40'
                  }`}
                >
                  {plan.highlighted ? <Star className="h-5 w-5" /> : <CreditCard className="h-5 w-5 text-cyan-300" />}
                  <div className="flex-1">
                    <p className="text-sm font-medium">{plan.name}</p>
                    <p className={`text-xs ${plan.highlighted ? 'opacity-70' : 'text-zinc-500'}`}>{plan.price}</p>
                  </div>
                  <span className={`font-mono text-[10px] ${plan.highlighted ? '' : 'text-cyan-300/50'}`}>
                    {plan.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative p-1">
            <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="relative flex flex-col items-center gap-8 rounded-lg border border-white/10 bg-zinc-950/70 p-8 text-center backdrop-blur-sm md:p-12">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border border-cyan-300/20 bg-zinc-950">
                <Keyboard className="h-12 w-12 text-cyan-300" />
              </div>
              <h3 className="font-sans text-3xl font-medium tracking-tight text-white">Flexible Access</h3>
              <p className="max-w-sm text-zinc-400">
                Pay per session or get ongoing access to a pool of engineers. Start small. Scale
                as you grow.
              </p>
              <a
                href="https://calendly.com/absaarmalik15/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-lg bg-gradient-to-r from-cyan-200 to-cyan-400 py-5 text-sm font-medium text-cyan-950 transition-transform hover:scale-[1.02] active:scale-95"
              >
                Get Paired Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function DiagnosticPanel({
  tone,
  label,
  title,
  copy,
  items,
}: {
  tone: 'error' | 'patch';
  label: string;
  title: string;
  copy: string;
  items: string[];
}) {
  const isPatch = tone === 'patch';

  return (
    <div
      className={`flex-1 rounded-lg border border-white/10 border-l-4 bg-zinc-950/70 p-8 backdrop-blur-sm ${
        isPatch ? 'border-cyan-300/60' : 'border-red-300/60'
      }`}
    >
      <span className={`mb-4 block font-mono text-xs uppercase tracking-widest ${isPatch ? 'text-cyan-300' : 'text-red-200'}`}>
        {label}
      </span>
      <h3 className="mb-4 font-sans text-3xl font-medium text-white">{title}</h3>
      <p className="mb-8 font-light leading-relaxed text-zinc-400">{copy}</p>
      <ul className="space-y-4 font-mono text-sm">
        {items.map((item) => (
          <li key={item} className={`flex items-center gap-3 ${isPatch ? 'text-cyan-200' : 'text-red-200'}`}>
            {isPatch ? <CheckCircle2 className="h-4 w-4" /> : <X className="h-4 w-4" />}
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function WorkflowStep({
  step,
  reverse,
}: {
  step: (typeof workflowSteps)[number];
  reverse: boolean;
}) {
  return (
    <div className={`relative flex flex-col items-start gap-6 md:items-center ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
      <div className={`hidden md:block md:w-1/2 ${reverse ? 'pl-12 text-left' : 'pr-12 text-right'}`}>
        <h4 className="font-sans text-2xl font-medium text-white">{step.title}</h4>
        <p className="mt-2 text-sm text-zinc-500">{step.copy}</p>
      </div>

      <div className="z-10 ml-0 flex h-16 w-16 items-center justify-center rounded-full border-2 border-cyan-300 bg-black shadow-[0_0_20px_rgba(34,211,238,0.35)] md:ml-0">
        <step.icon className="h-6 w-6 text-cyan-300" />
      </div>

      <div className={`pl-24 md:w-1/2 md:pl-12 ${reverse ? 'md:pr-12 md:text-right' : ''}`}>
        <div className="md:hidden">
          <h4 className="font-sans text-2xl font-medium text-white">{step.title}</h4>
          <p className="mt-2 text-sm text-zinc-500">{step.copy}</p>
        </div>
        <div className="mt-4 font-mono text-xs uppercase tracking-widest text-cyan-300/60">{step.code}</div>
      </div>
    </div>
  );
}

function MetricTile({
  icon: Icon,
  title,
  copy,
}: {
  icon: typeof Terminal;
  title: string;
  copy: string;
}) {
  return (
    <div className="rounded-lg border border-white/10 bg-zinc-950/70 p-8 md:col-span-4">
      <Icon className="mb-4 h-7 w-7 text-cyan-300" />
      <h4 className="mb-2 font-sans text-xl font-medium text-white">{title}</h4>
      <p className="text-sm leading-relaxed text-zinc-500">{copy}</p>
    </div>
  );
}

function StatTile({
  value,
  label,
  highlight = false,
}: {
  value: string;
  label: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`flex flex-col justify-between rounded-lg p-8 md:col-span-4 ${
        highlight ? 'bg-cyan-300 text-cyan-950' : 'border border-white/10 bg-zinc-950/70 text-cyan-300'
      }`}
    >
      <p className="font-mono text-3xl font-medium">{value}</p>
      <p className={`font-mono text-xs uppercase tracking-widest ${highlight ? '' : 'text-zinc-500'}`}>{label}</p>
    </div>
  );
}
