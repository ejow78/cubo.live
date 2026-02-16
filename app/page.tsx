import Hero from '@/components/Hero';
import Timelapse from '@/components/Timelapse';
import Portfolio from '@/components/Portfolio';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white selection:bg-purple-500 selection:text-white">
      <Hero />
      <Timelapse />
      <Portfolio />
      <Footer />
    </main>
  );
}
