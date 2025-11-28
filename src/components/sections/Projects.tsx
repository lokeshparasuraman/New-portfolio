'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const basePath = process.env.NODE_ENV === 'production' ? '/New-portfolio' : '';

const projects = [
  {
    title: 'Flight booking',
    description: 'An AI-powered flight booking platform that helps users search, compare, and book flights instantly with a seamless and modern UI.',
    tech: ['React', 'Tailwind CSS', 'TypeScript','Express','Postgre sql'],
    image: `${basePath}/flyfast.png`,
    link: 'https://flight-bookings.vercel.app/'
  },
  
  {
    title: 'Chain Of Custody',
    description: 'A web application to Manage the evidence of law and authority using blockChain for avoiding tampering of the evidences.',
    tech: ['React', 'Node.js', 'MongoDB', 'HTML', 'CSS', 'Python'],
    image: `${basePath}/Chain-of-custody.jpg`,
    link: 'https://github.com/lokeshparasuraman/CHAIN-OF-CUSTODY'
  },
  {
    title: 'Weather App',
    description: 'A weather application that provides real-time weather information for any location.',
    tech: ['React', 'Weather API', 'CSS'],
    image: `${basePath}/weather.png`,
    link: 'https://main--weather-app-react-kannan.netlify.app/'
  },
  {
    title: 'Todo Summarizer',
    description: 'Full stack application that summarizes and categorizes tasks using OpenAI API and Slack API.',
    tech: ['React', 'Node js','MongoDB','OpenAI API', 'Slack API'],
    image: `${basePath}/Todo-Summarizer.png`,
    link: 'https://github.com/lokeshparasuraman/todo-summarize'
  }
];

const cardVariants = {
  offscreen: { opacity: 0, y: 60 },
  onscreen: { opacity: 1, y: 0, transition: { type: 'spring', bounce: 0.2, duration: 0.8 } }
};

const Projects = () => {
  return (
    <section id="portfolio" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#ccd6f6] hover:text-[#64ffda] transition-colors">Projects Worked</h2>
        <p className="text-center mb-12 text-[#d642cc] font-bold text-xl font-hairline">Check out some of my work here</p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-[#112240] rounded-xl overflow-hidden border border-[#233554] hover:border-[#64ffda] transition-all duration-300 shadow-lg group"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              whileHover={{ scale: 1.03, boxShadow: '0 8px 32px 0 #64ffda33' }}
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#64ffda] opacity-10"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#ccd6f6]">{project.title}</h3>
                <p className="text-[#8892b0] mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[#233554] text-[#64ffda] rounded-full text-sm hover:bg-[#2a4163] transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 border border-[#64ffda] text-[#64ffda] rounded-lg hover:bg-[#64ffda]/10 transition-colors"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;