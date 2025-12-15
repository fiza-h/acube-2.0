'use client';

import { useEffect, useRef } from 'react';
import { animate, utils } from 'animejs';
import { m } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface Node {
    x: number;
    y: number;
    element: HTMLElement;
    connections: number[];
}

const NeuralNetworkBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const nodesRef = useRef<Node[]>([]);
    const animationFrameRef = useRef<number | undefined>(undefined);

    useEffect(() => {
        if (!containerRef.current || !canvasRef.current) return;

        const container = containerRef.current;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size
        const updateCanvasSize = () => {
            canvas.width = container.offsetWidth;
            canvas.height = container.offsetHeight;
        };
        updateCanvasSize();
        window.addEventListener('resize', updateCanvasSize);

        // Create nodes
        const nodeCount = 30;
        const nodes: Node[] = [];
        const nodeElements: HTMLElement[] = [];

        for (let i = 0; i < nodeCount; i++) {
            const x = utils.random(50, canvas.width - 50);
            const y = utils.random(50, canvas.height - 50);

            // Create node element
            const nodeEl = document.createElement('div');
            nodeEl.className = 'neural-node absolute rounded-full';
            nodeEl.style.width = '12px';
            nodeEl.style.height = '12px';
            nodeEl.style.left = `${x}px`;
            nodeEl.style.top = `${y}px`;
            nodeEl.style.transform = 'translate(-50%, -50%)';

            // Random node type (input, hidden, output)
            const nodeType = Math.random();
            if (nodeType < 0.3) {
                nodeEl.style.background = 'rgba(59, 130, 246, 0.2)'; // Blue - input
                nodeEl.style.boxShadow = '0 0 15px rgba(59, 130, 246, 0.2)';
            } else if (nodeType < 0.7) {
                nodeEl.style.background = 'rgba(6, 182, 212, 0.2)'; // Cyan - hidden
                nodeEl.style.boxShadow = '0 0 15px rgba(6, 182, 212, 0.2)';
            } else {
                nodeEl.style.background = 'rgba(139, 92, 246, 0.2)'; // Purple - output
                nodeEl.style.boxShadow = '0 0 15px rgba(139, 92, 246, 0.2)';
            }

            container.appendChild(nodeEl);
            nodeElements.push(nodeEl);

            nodes.push({
                x,
                y,
                element: nodeEl,
                connections: [],
            });
        }

        // Create connections (each node connects to 2-4 nearby nodes)
        nodes.forEach((node, i) => {
            const distances = nodes
                .map((other, j) => ({
                    index: j,
                    distance: Math.hypot(other.x - node.x, other.y - node.y),
                }))
                .filter(d => d.index !== i)
                .sort((a, b) => a.distance - b.distance);

            const connectionCount = utils.random(2, 4);
            for (let j = 0; j < connectionCount && j < distances.length; j++) {
                if (!node.connections.includes(distances[j].index)) {
                    node.connections.push(distances[j].index);
                }
            }
        });

        nodesRef.current = nodes;

        // Animate nodes
        nodeElements.forEach((nodeEl, index) => {
            animate(
                nodeEl,
                {
                    scale: [1, utils.random(1.2, 1.8), 1],
                    opacity: [0.3, utils.random(0.4, 0.6), 0.3],
                    easing: 'easeInOutSine',
                    duration: utils.random(2000, 4000),
                    loop: true,
                    delay: index * 100,
                }
            );
        });

        // Draw connections with animation
        let pulseOffset = 0;
        const drawConnections = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            pulseOffset += 0.02;

            nodes.forEach((node) => {
                node.connections.forEach((targetIndex) => {
                    const target = nodes[targetIndex];

                    // Calculate pulse effect
                    const distance = Math.hypot(target.x - node.x, target.y - node.y);
                    const pulse = Math.sin(pulseOffset + distance * 0.01) * 0.5 + 0.5;

                    // Draw connection line
                    ctx.beginPath();
                    ctx.moveTo(node.x, node.y);
                    ctx.lineTo(target.x, target.y);

                    // Gradient for the line
                    const gradient = ctx.createLinearGradient(node.x, node.y, target.x, target.y);
                    gradient.addColorStop(0, `rgba(59, 130, 246, ${0.05 + pulse * 0.1})`);
                    gradient.addColorStop(0.5, `rgba(6, 182, 212, ${0.08 + pulse * 0.15})`);
                    gradient.addColorStop(1, `rgba(139, 92, 246, ${0.05 + pulse * 0.1})`);

                    ctx.strokeStyle = gradient;
                    ctx.lineWidth = 0.5 + pulse * 0.8;
                    ctx.stroke();

                    // Draw data particles flowing through connections
                    if (Math.random() > 0.98) {
                        const particlePos = Math.random();
                        const particleX = node.x + (target.x - node.x) * particlePos;
                        const particleY = node.y + (target.y - node.y) * particlePos;

                        ctx.beginPath();
                        ctx.arc(particleX, particleY, 2, 0, Math.PI * 2);
                        ctx.fillStyle = `rgba(59, 130, 246, ${0.4})`;
                        ctx.shadowBlur = 8;
                        ctx.shadowColor = 'rgba(59, 130, 246, 0.4)';
                        ctx.fill();
                        ctx.shadowBlur = 0;
                    }
                });
            });

            animationFrameRef.current = requestAnimationFrame(drawConnections);
        };

        drawConnections();

        return () => {
            window.removeEventListener('resize', updateCanvasSize);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
            nodeElements.forEach(el => el.remove());
        };
    }, []);

    return (
        <div ref={containerRef} className="absolute inset-0 overflow-hidden">
            <canvas ref={canvasRef} className="absolute inset-0" />
        </div>
    );
};

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-zinc-950">
            {/* Neural Network Background */}
            <NeuralNetworkBackground />

            {/* Dark Overlay for readability */}
            <div className="absolute inset-0 bg-zinc-950/80 z-0" />

            {/* Subtle Spotlight Effects - inspired by vector-ai.co */}
            {/* Top center spotlight */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] z-0">
                <div className="absolute inset-0 bg-cyan-500/[0.08] blur-[120px] rounded-full" />
            </div>

            {/* Left side ambient light */}
            <div className="absolute top-1/3 left-0 w-[500px] h-[500px] z-0">
                <div className="absolute inset-0 bg-cyan-600/[0.05] blur-[100px] rounded-full" />
            </div>

            {/* Right side ambient light */}
            <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] z-0">
                <div className="absolute inset-0 bg-cyan-400/[0.06] blur-[100px] rounded-full" />
            </div>

            {/* Center glow behind content */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] z-0">
                <div className="absolute inset-0 bg-cyan-500/[0.04] blur-[140px] rounded-full" />
            </div>

            {/* Subtle vignette effect */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_transparent_50%,_rgba(0,0,0,0.3)_100%)] z-0" />

            {/* Content */}
            <div className="container mx-auto px-6 z-10 text-center relative">
                <m.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-12 backdrop-blur-sm hover:bg-white/10 transition-colors"
                >
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm text-zinc-300">AI-Powered Talent Matching</span>
                </m.div>

                <m.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white mb-6 max-w-5xl mx-auto leading-tight"
                >
                    Hire world-class remote talent — <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-300 to-cyan-400">build faster</span>, spend smarter.
                </m.h1>

                <m.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg text-zinc-400 mb-10 max-w-3xl mx-auto leading-relaxed"
                >
                    We connect startups with vetted global professionals in tech and beyond, helping you scale at up to 70% lower cost.
                </m.p>

                <m.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
                >
                    <a
                        href="#talent-showcase"
                        className="group bg-white text-zinc-950 px-8 py-4 rounded-full font-bold text-lg hover:bg-zinc-200 transition-all transform hover:scale-105 flex items-center"
                    >
                        Explore Talent
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                        href="https://calendly.com/absaarmalik15/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 rounded-full font-bold text-lg text-white border border-white/20 hover:bg-white/10 transition-all"
                    >
                        Hire Now
                    </a>
                </m.div>
            </div>
        </section>
    );
};

export default Hero;
