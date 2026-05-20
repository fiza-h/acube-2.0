'use client';

const credentials = [
    'IOI Finalists',
    'ICPC World Competitors',
    'Ex-Founders',
    'Hackathon Champions',
    'Codeforces Grandmasters',
    'Olympiad Medalists',
    'Open Source Contributors',
    'AI-Augmented Builders',
];

const Ticker = () => {
    return (
        <div className="border-t border-b border-white/10 py-3.5 overflow-hidden whitespace-nowrap mt-8">
            <div className="inline-block animate-ticker">
                {/* Duplicate credentials twice for seamless loop */}
                {[...credentials, ...credentials].map((credential, index) => (
                    <span
                        key={index}
                        className="font-mono text-[11px] tracking-[0.1em] uppercase text-zinc-500 mx-10"
                    >
                        <span className="text-cyan-400 mr-2">✦</span>
                        {credential}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Ticker;
