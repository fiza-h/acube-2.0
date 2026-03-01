import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Mission from '@/components/Mission';
import Stats from '@/components/Stats';
import HowItWorks from '@/components/HowItWorks';
import TalentCategories from '@/components/TalentCategories';
import TalentShowcase from '@/components/TalentShowcase';

import Footer from '@/components/Footer';
import CreativeBackground from '@/components/CreativeBackground';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-cyan-500/30 relative">
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
  );
}
