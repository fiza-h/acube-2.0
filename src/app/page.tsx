import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import TalentCategories from '@/components/TalentCategories';
import TalentShowcase from '@/components/TalentShowcase';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white selection:bg-white/20">
      <Navbar />
      <Hero />
      <HowItWorks />
      <TalentCategories />
      <TalentShowcase />
      <Footer />
    </main>
  );
}
