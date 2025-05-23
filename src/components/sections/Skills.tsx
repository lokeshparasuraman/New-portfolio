'use client';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaGithub, FaHtml5, FaCss3Alt, FaJs, FaGitAlt} from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiVercel, SiMongodb, SiPostgresql, SiExpress,} from 'react-icons/si';

const skills = [
  { name: 'React', icon: <FaReact className="text-cyan-400" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-black dark:text-white" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" /> },
  { name: 'TailwindCSS', icon: <SiTailwindcss className="text-cyan-500" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-400" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
  { name: 'Express.js', icon: <SiExpress className="text-gray-400" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-700" /> },
  { name: 'Git', icon: <FaGitAlt className="text-orange-600" /> },
  { name: 'GitHub', icon: <FaGithub className="text-white" /> },
  { name: 'Vercel', icon: <SiVercel className="text-black dark:text-white" /> },
];

const iconVariants = {
  initial: { y: 30, opacity: 0 },
  animate: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: i * 0.07, type: 'spring', stiffness: 120 }
  })
};

const Skills = () => (
  <section id="experience" className="py-20 bg-black text-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center text-[#ccd6f6] hover:text-[#64ffda] transition-colors">Skills Stack</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            className="flex flex-col items-center bg-[#112240] rounded-xl shadow-lg p-6 hover:scale-110 transition-transform duration-300 w-32 h-32"
            custom={i}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={iconVariants}
          >
            <span className="text-5xl mb-2">{skill.icon}</span>
            <span className="text-base text-[#ccd6f6] mt-2">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;