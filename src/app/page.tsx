import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';

const Starfield = dynamic(() => import('@/components/Starfield'), { loading: () => null });
const CreativeBackground = dynamic(() => import('@/components/CreativeBackground'), { loading: () => null });
const Mission = dynamic(() => import('@/components/Mission'), { loading: () => null });
const Stats = dynamic(() => import('@/components/Stats'), { loading: () => null });
const HowItWorks = dynamic(() => import('@/components/HowItWorks'), { loading: () => null });
const TalentCategories = dynamic(() => import('@/components/TalentCategories'), { loading: () => null });
const TalentShowcase = dynamic(() => import('@/components/TalentShowcase'), { loading: () => null });

export default function Home() {
  return (
    <SmoothScroll>
      <main className="relative min-h-screen bg-black text-white selection:bg-cyan-500/30">
        <Starfield />
        <CreativeBackground />
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <Mission />
          <Stats />
          <HowItWorks />
          <TalentCategories />
          <TalentShowcase />
          <Footer />
        </div>
      </main>
    </SmoothScroll>
  );
}
