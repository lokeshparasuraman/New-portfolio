'use client';
import { motion } from 'framer-motion';
import {
  Sparkles,
  GraduationCap,
  Code2,
  Rocket,
  BookOpenCheck,
  Target,
} from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-black via-[#0a192f] to-black text-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-14 tracking-wide text-white hover:text-[#64ffda] transition-colors duration-300"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-[#112240] border border-[#233554] rounded-2xl p-8 md:p-12 shadow-lg hover:shadow-[#64ffda]/30 transition-shadow duration-500"
        >
          <ul className="space-y-6 text-lg text-[#ccd6f6] leading-relaxed">
            <li className="flex gap-4 items-start hover:text-[#00ffaa] transition-colors duration-300">
              <Sparkles className="min-w-[24px] mt-1 text-cyan-400" />
              <span>Web development is more than a skill — it’s a creative passion that drives me to build meaningful interfaces.</span>
            </li>
            <li className="flex gap-4 items-start hover:text-[#00ffaa] transition-colors duration-300">
              <GraduationCap className="min-w-[24px] mt-1 text-emerald-400" />
              <span>
                Graduated from <span className="text-[#64ffda] font-medium">Coimbatore Institute of Engineering and Technology</span>,
                where I built a solid foundation in problem-solving and design thinking.
              </span>
            </li>
            <li className="flex gap-4 items-start hover:text-[#00ffaa] transition-colors duration-300">
              <Code2 className="min-w-[24px] mt-1 text-pink-400" />
              <span>
                My journey includes deep dives into <span className="text-[#64ffda]">React</span>, <span className="text-[#64ffda]">Tailwind CSS</span>,
                and full-stack development with <span className="text-[#64ffda]">Node.js</span> and <span className="text-[#64ffda]">MongoDB</span>.
              </span>
            </li>
            <li className="flex gap-4 items-start hover:text-[#00ffaa] transition-colors duration-300">
              <Rocket className="min-w-[24px] mt-1 text-orange-400" />
              <span>Nothing excites me more than turning clean designs into high-performance, user-friendly apps.</span>
            </li>
            <li className="flex gap-4 items-start hover:text-[#00ffaa] transition-colors duration-300">
              <BookOpenCheck className="min-w-[24px] mt-1 text-violet-400" />
              <span>Learning never stops — I stay sharp through constant experimentation, side projects, and community collaboration.</span>
            </li>
            <li className="flex gap-4 items-start hover:text-[#00ffaa] transition-colors duration-300">
              <Target className="min-w-[24px] mt-1 text-yellow-300" />
              <span>To build intuitive digital solutions that make life easier, smarter, and more connected.</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
