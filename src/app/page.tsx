import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Ticker from '@/components/Ticker';
import Stats from '@/components/Stats';
import Traits from '@/components/Traits';
import VettingProcess from '@/components/VettingProcess';
import TalentShowcase from '@/components/TalentShowcase';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Ticker />
      <Stats />
      <Traits />
      <VettingProcess />
      <TalentShowcase />
      <Footer />
    </main>
  );
}
