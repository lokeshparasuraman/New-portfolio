'use client'
import { useState } from "react";
import {FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const [open, setOpen] = useState(false);
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/lokeshparasuraman', icon: FaGithub },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/lokesh-parasuraman-02a88a22a', icon: FaLinkedin },
    { name: 'Instagram', url: 'https://www.instagram.com/iamloki_14', icon: FaInstagram },
    { name: 'LeetCode', url: 'https://leetcode.com/u/lokeshparasuraman', icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.901-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z" />
      </svg>
    )},
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
