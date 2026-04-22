'use client';

import type { ReactNode } from 'react';
import { m } from 'motion/react';
import { cn } from '@/lib/utils';

export const LampContainer = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        'relative z-0 flex w-full flex-col items-center justify-center overflow-hidden',
        className
      )}
    >
      <div className="absolute inset-0 isolate z-0">
        <m.div
          initial={{ opacity: 0.5, width: '15rem' }}
          whileInView={{ opacity: 1, width: '30rem' }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute right-1/2 top-0 h-56 w-[30rem] overflow-visible bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute bottom-0 left-0 z-20 h-40 w-full bg-slate-950/90 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute bottom-0 left-0 z-20 h-full w-40 bg-slate-950/90 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </m.div>
        <m.div
          initial={{ opacity: 0.5, width: '15rem' }}
          whileInView={{ opacity: 1, width: '30rem' }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute left-1/2 top-0 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute bottom-0 right-0 z-20 h-full w-40 bg-slate-950/90 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute bottom-0 right-0 z-20 h-40 w-full bg-slate-950/90 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </m.div>
        <div className="absolute top-40 h-48 w-full scale-x-150 bg-slate-950/90 blur-2xl" />
        <div className="absolute top-32 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md" />
        <div className="absolute left-1/2 top-24 z-50 h-36 w-[28rem] -translate-x-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl" />
        <m.div
          initial={{ width: '8rem' }}
          whileInView={{ width: '16rem' }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className="absolute left-1/2 top-28 z-30 h-36 w-64 -translate-x-1/2 rounded-full bg-cyan-400 blur-2xl"
        />
        <m.div
          initial={{ width: '15rem' }}
          whileInView={{ width: '30rem' }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className="absolute left-1/2 top-24 z-50 h-0.5 w-[30rem] -translate-x-1/2 bg-cyan-400"
        />

        <div className="absolute inset-x-0 top-0 z-40 h-28 bg-slate-950/90" />
      </div>

      <div className="relative z-50 flex w-full flex-col items-center px-5 pb-10 pt-24">
        {children}
      </div>
    </div>
  );
};
