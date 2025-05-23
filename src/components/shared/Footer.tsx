'use client'
import { useState } from "react";
import {FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const [open, setOpen] = useState(false);
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/lokeshparasuraman', icon: FaGithub },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/lokesh-parasuraman-02a88a22a', icon: FaLinkedin },
    { name: 'Instagram', url: 'https://www.instagram.com/iamloki_1', icon: FaInstagram },
    { name: 'Mail', url: 'mailto:lokeshofficial0114@gmail.com', icon: FaEnvelope }, 
  ];

  return (
    <footer  className="bg-black text-white py-12 relative">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <button
          className="bg-[#64ffda] text-black px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:bg-[#52e0c4] transition-colors mb-8"
          onClick={() => setOpen(true)}
        >
          Connect Now
        </button>
        <div className="flex space-x-6 text-2xl mb-8">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#64ffda] transition-colors"
                aria-label={link.name}
              >
                <Icon/>
              </a>
            );
          })}
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 w-full">
          <p>© {currentYear} Lokesh Parasuraman</p>
        </div>
      </div>
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={() => setOpen(false)}>
          <div className="bg-[#112240] rounded-xl p-8 w-full max-w-md shadow-2xl relative" onClick={e => e.stopPropagation()}>
            <h3 className="text-2xl font-bold mb-4 text-center">Send a Message</h3>
            <form className="space-y-4">
              <input type="text" name="name" placeholder="Your Name" required className="w-full px-4 py-2 rounded bg-[#233554] text-white focus:outline-none focus:ring-2 focus:ring-[#64ffda]" />
              <input type="email" name="email" placeholder="Your Email" required className="w-full px-4 py-2 rounded bg-[#233554] text-white focus:outline-none focus:ring-2 focus:ring-[#64ffda]" />
              <textarea name="message" placeholder="Your Message" required rows={4} className="w-full px-4 py-2 rounded bg-[#233554] text-white focus:outline-none focus:ring-2 focus:ring-[#64ffda]" />
              <button type="submit" className="bg-[#64ffda] text-black px-6 py-2 rounded font-semibold hover:bg-[#52e0c4] transition-colors w-full">Send Message</button>
            </form>
            <button className="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl" onClick={() => setOpen(false)} aria-label="Close">&times;</button>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
