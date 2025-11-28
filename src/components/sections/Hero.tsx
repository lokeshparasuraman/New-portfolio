'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const Hero = () => {
const titles = ["Web Developer", "Software Developer", "MERN Stack Developer"];

const [currentTitle, setCurrentTitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <section id='home' className="min-h-screen flex items-center pt-16 bg-black text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-6xl font-extrabold mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 hover:from-pink-600 hover:to-purple-400 transition-all duration-300">I&apos;m Lokesh</span>
            </motion.h1>
            <motion.h2 
              className="text-xl md:text-2xl text-gray-400 font-medium mb-4 italic tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {titles[currentTitle]}
            </motion.h2>
            <motion.p 
              className="text-white-400 leading-relaxed mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              I am a passionate Software developer specializing in building responsive and interactive web applications using <span className="text-purple-400 font-semibold">React</span>, <span className="text-purple-400 font-semibold">Tailwind CSS</span>, <span className="text-purple-400 font-semibold">Express.js</span>, and <span className="text-purple-400 font-semibold">MongoDB</span>.
            </motion.p>
            
            <motion.div
              className="flex space-x-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
             
            </motion.div>
          </motion.div>

         <motion.div 
            className="relative h-[400px] w-[400px] mx-auto group"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
             <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-3xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative w-full max-w-md mx-auto group">
              <div className="relative w-[400px] h-[400px] mx-auto hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 opacity-40 blur-2xl group-hover:opacity-60 group-hover:blur-xl hover:opacity-80 transition-all duration-500 rounded-full"></div> 
                <div className="relative w-full h-full rounded-full overflow-hidden  border-gradient-to-r from-purple-400 via-pink-300 to-blue-400 shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300">
                  <Image
                    src={`${basePath}/lokesh.jpg`}
                    alt="Lokesh"
                    fill
                    priority
                    className="object-cover transition-transform duration-500 hover:scale-110 hover:rotate-3" 
                  />
                </div>
              </div>
            </div>
          </motion.div>


        </div>
      </div>
    </section>
  );
};

export default Hero;
