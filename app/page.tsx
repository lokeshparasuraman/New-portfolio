import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';


export default function Home() {
  return (
    <>
     <Navbar />
          <div className="pointer-events-none fixed top-0 left-1/2 z-40 h-24 w-full -translate-x-1/2">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none absolute inset-0 z-10 opacity-100" style={{backdropFilter:'blur(3px)', WebkitMaskImage:'linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)'}}></div>
              <div className="pointer-events-none absolute inset-0 z-20 opacity-100" style={{backdropFilter:'blur(5px)', WebkitMaskImage:'linear-gradient(to top, rgba(0,0,0,0) 60%, rgba(0,0,0,1) 85%, rgba(0,0,0,1) 100%)'}}></div>
            </div>
          </div>
          <main className="min-h-screen animate-gradient bg-gradient-to-br from-[#0a192f] via-[#1a1a2e] to-[#232946]">
            <Hero />
            <About />
            <Skills />
            <Projects /> 
          </main>
      <Footer />
    </>
  );
}
