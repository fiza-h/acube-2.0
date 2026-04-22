import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import CreativeBackground from '@/components/CreativeBackground';
import SmoothScroll from '@/components/SmoothScroll';
import Starfield from '@/components/Starfield';

const Mission = dynamic(() => import('@/components/Mission'));
const Stats = dynamic(() => import('@/components/Stats'));
const HowItWorks = dynamic(() => import('@/components/HowItWorks'));
const TalentCategories = dynamic(() => import('@/components/TalentCategories'));
const TalentShowcase = dynamic(() => import('@/components/TalentShowcase'));

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
