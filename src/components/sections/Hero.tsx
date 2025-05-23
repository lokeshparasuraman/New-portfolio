'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

const basePath = process.env.NODE_ENV === 'production' ? '/New-portfolio' : '';
const Hero = () => {
  const titles = ["Web Developer", "React Enthusiast", "MERN Stack Learner"];
  const [currentTitle, setCurrentTitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
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
              I am <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 hover:from-pink-600 hover:to-purple-400 transition-all duration-300">Lokesh</span>
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
              className="text-gray-400 leading-relaxed mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              I am a passionate web developer specializing in building responsive and interactive web applications using <span className="text-purple-400 font-semibold">React</span>, <span className="text-purple-400 font-semibold">Tailwind CSS</span>, <span className="text-purple-400 font-semibold">Express.js</span>, and <span className="text-purple-400 font-semibold">MongoDB</span>.
            </motion.p>
            
          </motion.div>

          <motion.div 
            className="relative h-[400px] w-[400px] mx-auto group"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-3xl group-hover:blur-2xl transition-all duration-300"></div>
            <motion.div 
              className="relative h-full w-full rounded-full overflow-hidden ring-4 ring-purple-500/30 shadow-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={`${basePath}/lokesh.jpg`}
                alt="Lokesh's Profile"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
