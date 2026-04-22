import type { Metadata } from 'next';
import type { LucideIcon } from 'lucide-react';
import {
  Bug,
  CalendarDays,
  CheckCircle2,
  Code2,
  CreditCard,
  Headset,
  Keyboard,
  Layers3,
  LifeBuoy,
  Rocket,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import Footer from '@/components/Footer';
import LampDemo, { HeroSignalGrid } from '@/components/lamp-demo';
import Navbar from '@/components/Navbar';

type SupportVisualVariant = 'pulse' | 'grid' | 'code' | 'shield' | 'aurora' | 'orbit';
type PricingVisualVariant = 'session' | 'monthly' | 'team';

export const metadata: Metadata = {
  title: 'Talspace Vibe Support | Real-Time Engineering Help',
  description:
    'Get real-time engineering help for AI-built products. Fix blockers fast and keep shipping.',
};

const calendlyUrl = 'https://calendly.com/absaarmalik15/30min';
const fallbackEmail = 'mailto:team@talspace.org?subject=Talspace%20Vibe%20Support';

const trustSignals = [
  'Cursor debugging',
  'Lovable rescue',
  'Replit cleanup',
  'v0 production pass',
  'Feature delivery',
  'Architecture reset',
  'Recurring support',
  'Founder-friendly',
];

const diagnosticProblems = [
  'You can build the feature, but the bug will not go away.',
  'The product works in demos, then breaks in real use.',
  'AI writes more code, but you trust it less.',
];

const diagnosticPatches = [
  'Fix the blocker with a real engineer.',
  'Clean up the code behind the fix.',
  'Keep shipping without adding more mess.',
];

const workflowSteps = [
  {
    title: 'Book a pairing session',
    copy: 'Pick a time. Bring the bug, build, or feature that is blocking you.',
    icon: CalendarDays,
  },
  {
    title: 'Share the context',
    copy: 'Share the repo, stack, prompt flow, or a quick screen recording.',
    icon: Headset,
  },
  {
    title: 'Pair and ship',
    copy: 'Fix the blocker and leave with a clear next step.',
    icon: Rocket,
  },
];

const supportAreas: Array<{
  title: string;
  copy: string;
  icon: LucideIcon;
  eyebrow: string;
  className: string;
  visual: SupportVisualVariant;
}> = [
  {
    title: 'Bug fixing',
    copy: 'Fix broken flows, flaky features, and hard bugs.',
    icon: Bug,
    eyebrow: 'Fast unblock',
    className: 'md:col-span-3 xl:col-span-2',
    visual: 'pulse',
  },
  {
    title: 'Architecture cleanup',
    copy: 'Tidy the structure before it turns into a rewrite.',
    icon: Layers3,
    eyebrow: 'Stability layer',
    className: 'md:col-span-3 xl:col-span-2',
    visual: 'grid',
  },
  {
    title: 'Feature delivery',
    copy: 'Ship the next feature with better structure and fewer surprises.',
    icon: Code2,
    eyebrow: 'Ship faster',
    className: 'md:col-span-2 xl:col-span-2',
    visual: 'code',
  },
  {
    title: 'Production hardening',
    copy: 'Make the product safer before real users hit it.',
    icon: ShieldCheck,
    eyebrow: 'Risk control',
    className: 'md:col-span-2 xl:col-span-2',
    visual: 'shield',
  },
  {
    title: 'AI workflow support',
    copy: 'Turn AI output into code you can keep using.',
    icon: Sparkles,
    eyebrow: 'AI-native',
    className: 'md:col-span-4 xl:col-span-2',
    visual: 'aurora',
  },
  {
    title: 'Monthly momentum',
    copy: 'Get ongoing help when your team needs steady momentum.',
    icon: LifeBuoy,
    eyebrow: 'Recurring',
    className: 'md:col-span-2 xl:col-span-2',
    visual: 'orbit',
  },
];

const accessPlans: Array<{
  name: string;
  price: string;
  label: string;
  summary: string;
  bullets: string[];
  highlighted: boolean;
  icon: LucideIcon;
  visual: PricingVisualVariant;
}> = [
  {
    name: 'One-off session',
    price: '$149',
    label: 'Fastest start',
    summary: 'One live session for one urgent blocker.',
    bullets: [
      '1 live 60-minute session',
      'Repo or screen-share review',
      'Clear next steps after the call',
    ],
    highlighted: false,
    icon: CreditCard,
    visual: 'session',
  },
  {
    name: 'Monthly support',
    price: '$199/mo',
    label: 'Recommended',
    summary: 'Ongoing help for founders who need support, not a full-time developer.',
    bullets: [
      '2 live 45-minute sessions per month',
      'Async support between sessions',
      'Priority booking for new issues',
    ],
    highlighted: true,
    icon: Keyboard,
    visual: 'monthly',
  },
  {
    name: 'Team / custom plan',
    price: 'From $799/mo',
    label: 'Scale path',
    summary: 'Best for bigger teams or heavier usage.',
    bullets: [
      'Weekly support rhythm',
      'Higher response priority',
      'Custom scope for small startup teams',
    ],
    highlighted: false,
    icon: Layers3,
    visual: 'team',
  },
];

const faqItems = [
  {
    question: 'Who is this for?',
    answer:
      'Founders, indie builders, and startup teams using AI tools.',
  },
  {
    question: 'What kind of tools or stacks do you support?',
    answer:
      'Modern web products, AI-assisted builds, and custom codebases.',
  },
  {
    question: 'What happens in a pairing session?',
    answer:
      'We review the blocker, fix what we can, and agree on the next step.',
  },
  {
    question: 'When should I choose monthly support?',
    answer:
      'Choose it when your team keeps running into the same issues every week.',
  },
  {
    question: 'What if one session is not enough?',
    answer:
      'Start with one session, then move to monthly support if you need more help.',
  },
];

export default function VibeCodingPage() {
  const featuredPlan = accessPlans.find((plan) => plan.highlighted) ?? accessPlans[1];
  const supportingPlans = accessPlans.filter((plan) => plan.name !== featuredPlan.name);

  return (
    <main className="min-h-screen bg-black text-white selection:bg-cyan-500/30 selection:text-white">
      <Navbar />

      <section
        id="vibe-hero"
        className="relative isolate overflow-hidden px-6 pb-20 pt-28 lg:px-16 lg:pb-24 xl:px-24"
      >
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(30,58,138,0.15)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,rgba(12,74,110,0.15)_0%,transparent_40%)]" />
        <HeroSignalGrid />
        <div className="pointer-events-none absolute inset-x-6 top-24 -z-10 h-px bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent md:inset-x-16 xl:inset-x-24" />
        <div className="pointer-events-none absolute -left-24 top-20 -z-10 h-80 w-80 rounded-full bg-cyan-400/7 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 bottom-10 -z-10 h-96 w-96 rounded-full bg-sky-400/7 blur-3xl" />

        <div className="relative z-10 mx-auto flex min-h-[calc(90svh-3.5rem)] max-w-[1440px] flex-col justify-center gap-8">
          <LampDemo bookingUrl={calendlyUrl} />

          <MarqueeStrip items={trustSignals} />
        </div>
      </section>

      <section
        id="problem-solution"
        className="relative overflow-hidden border-t border-white/5 px-6 py-20 md:py-24"
      >
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_-10%,rgba(30,58,138,0.14),transparent_34%),radial-gradient(circle_at_82%_18%,rgba(12,74,110,0.12),transparent_26%),linear-gradient(180deg,rgba(2,6,23,0.72)_0%,rgba(2,6,23,0.9)_22%,#000_100%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-20 bg-gradient-to-b from-cyan-200/4 to-transparent" />
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-35 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:32px_32px]" />

        <div className="mx-auto max-w-[1440px]">
          <SectionIntro
            eyebrow="From Chaos To Momentum"
            title="From messy builds to steady shipping."
            copy="Less guesswork. More progress."
          />

          <TransformationBoard />
        </div>
      </section>

      <section id="how-it-works" className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <SectionIntro
            eyebrow="How It Works"
            title="How it works"
            copy="Book, share context, and fix the blocker."
          />

          <div className="grid gap-5 md:grid-cols-3">
            {workflowSteps.map((step, index) => (
              <ProcessCard key={step.title} step={step} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/5 bg-zinc-950/60 px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <SectionIntro
            eyebrow="What We Help With"
            title="What we help with"
            copy="The main places AI-built products get stuck."
          />

          <div className="grid auto-rows-[minmax(220px,1fr)] gap-5 md:grid-cols-6">
            {supportAreas.map((area) => (
              <SupportCard key={area.title} area={area} />
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <SectionIntro
            eyebrow="Pricing"
            title="Start with the support you need."
            copy="Clear pricing for founders who need help, not a full-time hire."
          />

          <div className="grid gap-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
            <PricingCard plan={featuredPlan} featured />

            <div className="grid gap-5">
              {supportingPlans.map((plan) => (
                <PricingCard key={plan.name} plan={plan} />
              ))}

              <div className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(8,145,178,0.12),rgba(2,6,23,0.7))] p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-300/70">
                  Why this structure
                </p>
                <h3 className="mt-4 font-sans text-2xl tracking-tight text-white">
                  Get real engineering help without jumping to a $2k developer hire.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                  Start with one blocker, move to monthly support if it helps, and upgrade only if your team needs more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="border-y border-white/5 bg-zinc-950/60 px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <SectionIntro
            eyebrow="FAQ"
            title="FAQ"
            copy="Short answers to the main questions."
          />

          <div className="grid gap-4 md:grid-cols-2">
            {faqItems.map((item) => (
              <FaqCard key={item.question} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="rounded-[2rem] border border-cyan-300/20 bg-[linear-gradient(135deg,rgba(8,145,178,0.18),rgba(2,6,23,0.95))] p-8 shadow-[0_0_60px_rgba(6,182,212,0.08)] md:p-12">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.35em] text-cyan-200/80">
              Final CTA
            </p>
            <h2 className="max-w-3xl font-sans text-4xl tracking-tight text-white md:text-6xl">
              Need help now? Book a session.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-300 md:text-lg">
              Bring the blocker, the repo, or the product context. We will take it from there.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-cyan-200 px-7 py-4 text-sm font-semibold text-cyan-950 transition-transform hover:scale-[1.02] active:scale-95"
              >
                Book Call
              </a>
              <a
                href={fallbackEmail}
                className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-black/30 px-7 py-4 text-sm font-medium text-white transition-colors hover:bg-white/[0.08]"
              >
                Email Team
              </a>
            </div>

            <p className="mt-4 text-sm text-cyan-100/80">
              Prefer email first? Use the contact options below.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function SectionIntro({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <div className="mb-12 max-w-3xl">
      <p className="mb-4 font-mono text-xs uppercase tracking-[0.35em] text-cyan-300/70">
        {eyebrow}
      </p>
      <h2 className="font-sans text-4xl tracking-tight text-white md:text-6xl">{title}</h2>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">{copy}</p>
    </div>
  );
}

function TransformationBoard() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(2,6,23,0.92),rgba(1,4,14,0.96))] p-6 shadow-[0_0_60px_rgba(8,145,178,0.08)] md:p-8 xl:p-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(248,113,113,0.08),transparent_24%),radial-gradient(circle_at_82%_30%,rgba(34,211,238,0.1),transparent_26%),linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:auto,auto,34px_34px,34px_34px]" />
      <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/10 to-transparent lg:block" />

        <div className="relative grid gap-6 lg:grid-cols-[minmax(0,1fr)_120px_minmax(0,1fr)] lg:items-stretch">
        <div className="rounded-[1.75rem] border border-red-300/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(8,11,26,0.82))] p-6 md:p-7">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-red-200/80">
            Before
          </p>
          <TransformationVisual tone="before" />
          <h3 className="mt-4 max-w-lg font-sans text-3xl tracking-tight text-white md:text-4xl">
            Fast builds can turn into fragile systems.
          </h3>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-400">
            You move fast, then lose time to bugs and shaky code.
          </p>

          <div className="mt-8 space-y-3">
            {diagnosticProblems.map((item, index) => (
              <div
                key={item}
                className="flex items-start gap-4 rounded-2xl border border-white/8 bg-black/25 px-4 py-4"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-red-300/25 bg-red-300/10 font-mono text-[11px] text-red-100">
                  0{index + 1}
                </div>
                <div>
                  <p className="text-sm leading-relaxed text-zinc-200">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden items-center justify-center lg:flex">
          <div className="flex h-full w-full flex-col items-center justify-center">
            <div className="flex h-18 w-18 items-center justify-center rounded-full border border-cyan-300/25 bg-cyan-300/10 shadow-[0_0_28px_rgba(34,211,238,0.18)]">
              <Rocket className="h-7 w-7 text-cyan-200" />
            </div>
            <div className="mt-4 rounded-full border border-cyan-300/15 bg-cyan-300/8 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.35em] text-cyan-200/90">
              Pair Live
            </div>
            <p className="mt-4 max-w-[12rem] text-center text-sm leading-relaxed text-zinc-400">
              Fix the blocker and leave with a clear next step.
            </p>
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-cyan-300/25 bg-[linear-gradient(180deg,rgba(34,211,238,0.05),rgba(8,11,26,0.82))] p-6 md:p-7">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-cyan-300/85">
            After
          </p>
          <TransformationVisual tone="after" />
          <h3 className="mt-4 max-w-lg font-sans text-3xl tracking-tight text-white md:text-4xl">
            Pair live with an engineer and keep shipping.
          </h3>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-400">
            Get direct help now, plus cleaner code behind the fix.
          </p>

          <div className="mt-8 grid gap-3">
            {diagnosticPatches.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-cyan-300/12 bg-cyan-300/[0.04] px-4 py-4"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                  <p className="text-sm leading-relaxed text-zinc-200">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative mt-6 grid gap-3 md:grid-cols-3">
        <TransformationTag
          label="Live debugging"
          copy="Fix the real blocker."
        />
        <TransformationTag
          label="Architecture cleanup"
          copy="Reduce mess while you fix it."
        />
        <TransformationTag
          label="Clear next step"
          copy="Know what to do next."
        />
      </div>
    </div>
  );
}

function TransformationVisual({ tone }: { tone: 'before' | 'after' }) {
  if (tone === 'before') {
    return (
      <div className="mt-6 relative h-32 overflow-hidden rounded-[1.35rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(2,6,23,0.78))]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute left-3 right-3 top-4 h-px rotate-[6deg] bg-gradient-to-r from-transparent via-red-200/45 to-transparent" />
        <div className="absolute left-6 right-10 top-10 h-px -rotate-[8deg] bg-gradient-to-r from-transparent via-red-300/35 to-transparent" />
        <div className="absolute left-10 right-5 top-16 h-px rotate-[11deg] bg-gradient-to-r from-transparent via-red-200/30 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-3">
          <div className="rounded-2xl border border-red-300/15 bg-red-300/8 p-3">
            <div className="h-2 w-16 rounded-full bg-red-200/35" />
            <div className="mt-2 h-2 w-10 rounded-full bg-white/10" />
          </div>
          <div className="translate-y-4 rounded-2xl border border-white/8 bg-white/[0.03] p-3">
            <div className="h-2 w-12 rounded-full bg-white/10" />
            <div className="mt-2 h-2 w-8 rounded-full bg-red-200/25" />
          </div>
          <div className="-translate-y-1 rounded-2xl border border-white/8 bg-white/[0.03] p-3">
            <div className="h-2 w-14 rounded-full bg-white/10" />
            <div className="mt-2 h-2 w-9 rounded-full bg-red-200/20" />
          </div>
        </div>
        <div className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-red-200/25 bg-red-300/10">
          <Bug className="h-4 w-4 text-red-200" />
        </div>
      </div>
    );
  }

  return (
    <div className="mt-6 relative h-32 overflow-hidden rounded-[1.35rem] border border-white/10 bg-[linear-gradient(180deg,rgba(34,211,238,0.07),rgba(2,6,23,0.78))]">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute left-4 right-4 top-6 h-px bg-gradient-to-r from-transparent via-cyan-200/40 to-transparent" />
      <div className="absolute left-1/2 top-6 h-20 w-px -translate-x-1/2 bg-gradient-to-b from-cyan-200/50 to-transparent" />
      <div className="absolute left-[22%] top-[28%] h-3 w-3 rounded-full bg-cyan-200 shadow-[0_0_18px_rgba(103,232,249,0.6)]" />
      <div className="absolute left-1/2 top-[42%] h-3 w-3 -translate-x-1/2 rounded-full bg-cyan-200 shadow-[0_0_18px_rgba(103,232,249,0.6)]" />
      <div className="absolute right-[20%] top-[28%] h-3 w-3 rounded-full bg-cyan-200 shadow-[0_0_18px_rgba(103,232,249,0.6)]" />
      <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-3">
        <div className="rounded-2xl border border-cyan-300/18 bg-cyan-300/[0.07] p-3">
          <div className="h-2 w-16 rounded-full bg-cyan-200/35" />
          <div className="mt-2 h-2 w-10 rounded-full bg-white/10" />
        </div>
        <div className="-translate-y-3 rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.09] p-3 shadow-[0_0_20px_rgba(34,211,238,0.08)]">
          <div className="h-2 w-14 rounded-full bg-cyan-200/45" />
          <div className="mt-2 h-2 w-9 rounded-full bg-white/10" />
        </div>
        <div className="rounded-2xl border border-cyan-300/18 bg-cyan-300/[0.07] p-3">
          <div className="h-2 w-12 rounded-full bg-cyan-200/35" />
          <div className="mt-2 h-2 w-8 rounded-full bg-white/10" />
        </div>
      </div>
      <div className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-cyan-200/25 bg-cyan-300/10">
        <CheckCircle2 className="h-4 w-4 text-cyan-200" />
      </div>
    </div>
  );
}

function TransformationTag({
  label,
  copy,
}: {
  label: string;
  copy: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4">
      <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-300/70">
        {label}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-zinc-300">{copy}</p>
    </div>
  );
}

function ProcessCard({
  step,
  index,
}: {
  step: (typeof workflowSteps)[number];
  index: number;
}) {
  return (
    <div className="rounded-[1.75rem] border border-white/10 bg-zinc-950/70 p-6 backdrop-blur-sm">
      <div className="flex items-center justify-between gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10">
          <step.icon className="h-5 w-5 text-cyan-200" />
        </div>
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-zinc-500">
          0{index + 1}
        </span>
      </div>
      <h3 className="mt-6 font-sans text-2xl tracking-tight text-white">{step.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-zinc-400">{step.copy}</p>
    </div>
  );
}

function SupportCard({
  area,
}: {
  area: {
    title: string;
    copy: string;
    icon: LucideIcon;
    eyebrow: string;
    className: string;
    visual: SupportVisualVariant;
  };
}) {
  const Icon = area.icon;

  return (
    <div
      className={`group rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(2,6,23,0.72))] p-6 transition-transform hover:-translate-y-1 ${area.className}`}
    >
      <SupportVisual variant={area.visual} />
      <div className="mt-6 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10">
          <Icon className="h-5 w-5 text-cyan-300" />
        </div>
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-300/70">
          {area.eyebrow}
        </p>
      </div>
      <h3 className="mt-5 font-sans text-2xl tracking-tight text-white">{area.title}</h3>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-zinc-400">{area.copy}</p>
    </div>
  );
}

function PricingCard({
  plan,
  featured = false,
}: {
  plan: (typeof accessPlans)[number];
  featured?: boolean;
}) {
  const Icon = plan.icon;

  return (
    <div
      className={`rounded-[1.75rem] border p-6 ${
        featured
          ? 'border-cyan-300/35 bg-[linear-gradient(180deg,rgba(34,211,238,0.16),rgba(2,6,23,0.85))] shadow-[0_0_36px_rgba(34,211,238,0.08)]'
          : plan.highlighted
            ? 'border-cyan-300/35 bg-cyan-300/10 shadow-[0_0_36px_rgba(34,211,238,0.08)]'
          : 'border-white/10 bg-zinc-950/70'
      }`}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/30">
          <Icon
            className={`h-5 w-5 ${
              featured || plan.highlighted ? 'text-cyan-200' : 'text-cyan-300'
            }`}
          />
        </div>
        <span
          className={`rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] ${
            featured || plan.highlighted
              ? 'bg-cyan-200 text-cyan-950'
              : 'border border-white/10 text-zinc-400'
          }`}
        >
          {plan.label}
        </span>
      </div>

      <PricingVisual visual={plan.visual} featured={featured || plan.highlighted} />

      <h3
        className={`mt-6 font-sans tracking-tight text-white ${
          featured ? 'text-4xl md:text-5xl' : 'text-3xl'
        }`}
      >
        {plan.name}
      </h3>
      <p
        className={`mt-3 font-sans tracking-tight text-white ${
          featured ? 'text-5xl md:text-6xl' : 'text-4xl'
        }`}
      >
        {plan.price}
      </p>
      <p
        className={`mt-4 leading-relaxed text-zinc-300 ${
          featured ? 'max-w-xl text-base' : 'text-sm'
        }`}
      >
        {plan.summary}
      </p>

      {featured ? (
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-cyan-100/85">
          Best for startups that want real engineering help without paying for a full-time developer.
        </p>
      ) : null}

      <ul className={`space-y-3 ${featured ? 'mt-8' : 'mt-6'}`}>
        {plan.bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-3 text-sm text-zinc-300">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      {featured ? (
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-cyan-200 px-6 py-3 text-sm font-semibold text-cyan-950 transition-transform hover:scale-[1.02] active:scale-95"
          >
            Book Monthly Support Call
          </a>
          <a
            href="#fallback-contact"
            className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-black/20 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/[0.08]"
          >
            Ask About Fit
          </a>
        </div>
      ) : null}
    </div>
  );
}

function PricingVisual({
  visual,
  featured,
}: {
  visual: PricingVisualVariant;
  featured: boolean;
}) {
  if (visual === 'session') {
    return (
      <div className="mt-6 relative h-28 overflow-hidden rounded-[1.35rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(2,6,23,0.55))]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:26px_26px]" />
        <div className="absolute inset-x-4 top-4 flex items-center justify-between">
          <div className="rounded-full border border-red-300/20 bg-red-300/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-red-100">
            One blocker
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-red-300/20 bg-red-300/10">
            <Bug className="h-4 w-4 text-red-200" />
          </div>
        </div>
        <div className="absolute left-4 right-4 top-14 rounded-[1.1rem] border border-white/8 bg-black/25 p-3">
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-red-200" />
            <div className="h-2 w-24 rounded-full bg-red-200/45" />
          </div>
          <div className="mt-3 flex items-center gap-3">
            <div className="h-10 flex-1 rounded-xl border border-red-300/10 bg-red-300/[0.05]" />
            <div className="flex h-10 w-12 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/10">
              <Rocket className="h-4 w-4 text-cyan-200" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (visual === 'monthly') {
    return (
      <div
        className={`mt-6 relative h-32 overflow-hidden rounded-[1.35rem] border ${
          featured ? 'border-cyan-300/25' : 'border-white/10'
        } bg-[linear-gradient(180deg,rgba(34,211,238,0.08),rgba(2,6,23,0.55))]`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(103,232,249,0.18),transparent_24%),linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:auto,24px_24px,24px_24px]" />
        <div className="absolute inset-x-4 top-4 flex items-center justify-between">
          <div className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-200">
            Monthly rhythm
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/10">
            <CalendarDays className="h-4 w-4 text-cyan-200" />
          </div>
        </div>
        <div className="absolute left-4 right-4 top-14 grid grid-cols-4 gap-2">
          {[1, 2, 3, 4].map((week) => (
            <div
              key={week}
              className={`rounded-xl border p-2 ${
                week <= 2
                  ? 'border-cyan-300/18 bg-cyan-300/[0.08]'
                  : 'border-white/8 bg-white/[0.03]'
              }`}
            >
              <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-400">
                W{week}
              </div>
              <div
                className={`mt-2 h-8 rounded-lg ${
                  week <= 2 ? 'bg-cyan-300/18' : 'bg-white/[0.04]'
                }`}
              />
            </div>
          ))}
        </div>
        <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
          <div className="h-2 flex-1 rounded-full bg-white/10" />
          <div className="h-2 w-16 rounded-full bg-cyan-200/45" />
          <div className="h-2 w-10 rounded-full bg-white/10" />
        </div>
      </div>
    );
  }

  return (
    <div className="mt-6 relative h-28 overflow-hidden rounded-[1.35rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(2,6,23,0.55))]">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:28px_28px]" />
      <div className="absolute inset-x-4 top-4 flex items-center justify-between">
        <div className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-300">
          Team coverage
        </div>
        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/10">
          <Layers3 className="h-4 w-4 text-cyan-200" />
        </div>
      </div>
      <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-3">
        <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-3">
          <div className="h-2 w-10 rounded-full bg-white/10" />
          <div className="mt-2 h-8 rounded-lg bg-white/[0.04]" />
        </div>
        <div className="-translate-y-3 rounded-2xl border border-cyan-300/18 bg-cyan-300/[0.08] p-3 shadow-[0_0_20px_rgba(34,211,238,0.08)]">
          <div className="h-2 w-12 rounded-full bg-cyan-200/35" />
          <div className="mt-2 h-10 rounded-lg bg-cyan-300/16" />
        </div>
        <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-3">
          <div className="h-2 w-8 rounded-full bg-white/10" />
          <div className="mt-2 h-8 rounded-lg bg-white/[0.04]" />
        </div>
      </div>
    </div>
  );
}

function FaqCard({
  item,
}: {
  item: (typeof faqItems)[number];
}) {
  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-black/30 p-6">
      <h3 className="font-sans text-2xl tracking-tight text-white">{item.question}</h3>
      <p className="mt-3 text-sm leading-relaxed text-zinc-400">{item.answer}</p>
    </div>
  );
}

function MarqueeStrip({ items }: { items: string[] }) {
  const loopItems = [...items, ...items];

  return (
    <div className="mx-auto w-full max-w-[1440px] overflow-hidden rounded-full border border-white/10 bg-white/[0.025] py-2.5">
      <div className="animate-marquee flex min-w-max items-center gap-3 px-3">
        {loopItems.map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="flex items-center gap-2 rounded-full border border-white/8 bg-black/25 px-4 py-2"
          >
            <span className="h-2 w-2 rounded-full bg-cyan-300" />
            <span className="whitespace-nowrap text-sm text-zinc-300">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SupportVisual({
  variant,
}: {
  variant: SupportVisualVariant;
}) {
  if (variant === 'pulse') {
    return (
      <div className="relative h-28 overflow-hidden rounded-[1.35rem] border border-white/10 bg-[radial-gradient(circle_at_30%_35%,rgba(34,211,238,0.2),transparent_28%),linear-gradient(180deg,rgba(8,145,178,0.08),rgba(2,6,23,0.3))]">
        <div className="absolute left-5 top-5 h-16 w-16 rounded-full border border-cyan-300/30 bg-cyan-300/10" />
        <div className="absolute left-9 top-9 h-8 w-8 rounded-full bg-cyan-200/80 blur-[2px]" />
        <div className="absolute right-5 top-6 space-y-2">
          <div className="h-2 w-24 rounded-full bg-white/10" />
          <div className="h-2 w-20 rounded-full bg-cyan-300/20" />
          <div className="h-2 w-16 rounded-full bg-white/10" />
        </div>
      </div>
    );
  }

  if (variant === 'grid') {
    return (
      <div className="relative h-28 overflow-hidden rounded-[1.35rem] border border-white/10 bg-[linear-gradient(180deg,rgba(6,182,212,0.08),rgba(2,6,23,0.35))]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:28px_28px]" />
        <div className="absolute bottom-4 left-4 right-4 flex gap-2">
          <div className="h-16 flex-1 rounded-2xl border border-cyan-300/20 bg-cyan-300/10" />
          <div className="h-12 flex-1 rounded-2xl border border-white/10 bg-white/[0.04]" />
          <div className="h-20 flex-1 rounded-2xl border border-white/10 bg-white/[0.04]" />
        </div>
      </div>
    );
  }

  if (variant === 'code') {
    return (
      <div className="relative h-28 overflow-hidden rounded-[1.35rem] border border-white/10 bg-black/45 px-4 py-3 font-mono text-[11px] text-zinc-400">
        <div className="space-y-2">
          <div className="h-2 w-24 rounded-full bg-cyan-300/20" />
          <div className="h-2 w-40 rounded-full bg-white/10" />
          <div className="h-2 w-32 rounded-full bg-white/10" />
          <div className="h-2 w-28 rounded-full bg-cyan-300/20" />
        </div>
        <div className="absolute bottom-3 right-4 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-cyan-200">
          Ship
        </div>
      </div>
    );
  }

  if (variant === 'shield') {
    return (
      <div className="relative h-28 overflow-hidden rounded-[1.35rem] border border-white/10 bg-[radial-gradient(circle_at_50%_0%,rgba(125,211,252,0.14),transparent_36%),linear-gradient(180deg,rgba(2,132,199,0.1),rgba(2,6,23,0.32))]">
        <div className="absolute left-1/2 top-4 h-16 w-16 -translate-x-1/2 rounded-[1.35rem] border border-cyan-300/25 bg-cyan-300/10" />
        <div className="absolute left-1/2 top-9 h-6 w-6 -translate-x-1/2 rounded-full bg-cyan-200/80" />
        <div className="absolute bottom-4 left-1/2 h-px w-32 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-300/35 to-transparent" />
      </div>
    );
  }

  if (variant === 'aurora') {
    return (
      <div className="relative h-28 overflow-hidden rounded-[1.35rem] border border-white/10 bg-black/35">
        <div className="animate-aurora absolute inset-0 bg-[linear-gradient(120deg,transparent_10%,rgba(34,211,238,0.16),transparent_40%),linear-gradient(300deg,transparent_10%,rgba(96,165,250,0.14),transparent_42%),radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.12),transparent_35%)] bg-[length:180%_180%,150%_150%,100%_100%]" />
        <div className="absolute inset-x-4 bottom-4 flex items-end gap-2">
          <div className="h-8 flex-1 rounded-full bg-white/10" />
          <div className="h-12 flex-1 rounded-full bg-cyan-300/20" />
          <div className="h-6 flex-1 rounded-full bg-white/10" />
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-28 overflow-hidden rounded-[1.35rem] border border-white/10 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.14),transparent_34%),linear-gradient(180deg,rgba(15,23,42,0.18),rgba(2,6,23,0.34))]">
      <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/25" />
      <div className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
      <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-200" />
    </div>
  );
}
