import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/rameshsapkota900",
      color: "hover:text-gray-300"
    },
    {
      name: "LinkedIn", 
      icon: Linkedin,
      url: "https://www.linkedin.com/in/ramesh-sapkota-3aa24b329",
      color: "hover:text-blue-400"
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:rameshsapkota900@gmail.com",
      color: "hover:text-red-400"
    },
    {
      name: "WhatsApp",
      icon: Phone,
      url: "https://wa.me/9779824065478",
      color: "hover:text-green-400"
    }
  ];

  const quickLinks = [
    { name: "Home", href: "#Home" },
    { name: "About", href: "#About" },
    { name: "Portfolio", href: "#Portofolio" },
    { name: "Contact", href: "#Contact" }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#030014] to-[#0a0a23] border-t border-white/10">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-blue-600/5 blur-3xl" />
      </div>
      
      <div className="relative md:px-[10%] px-[5%] py-12">
        <div className="">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            
            {/* Brand Section */}
            <div className="lg:col-span-2 ml-16 mr-16">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent mb-4">
                Ramesh Sapkota
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Aspiring Java Developer passionate about backend development, Spring Boot, 
                and building scalable software solutions. Currently pursuing my degree and 
                continuously learning new technologies.
              </p>
              <div className="flex items-center gap-2 text-gray-400 mb-2 ml-2.5">
                <MapPin className="w-4 h-4" />
                <span>Itahari, Nepal</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className='ml-16'>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Let's Connect</h4>
              <div className="space-y-3">
                <a 
                  href="mailto:rameshsapkota900@gmail.com"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">rameshsapkota900@gmail.com</span>
                </a>
                <a 
                  href="https://wa.me/9779824065478"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+977 9824065478</span>
                </a>
              </div>

              {/* Social Media Icons */}
              <div className="flex gap-4 mt-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full bg-white/5 border border-white/10 transition-all duration-300 hover:scale-110 hover:bg-white/10 ${social.color}`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              
              {/* Copyright */}
              <div className="flex items-center gap-2 text-gray-400 text-sm ml-16">
                <span>© {currentYear} Ramesh Sapkota. Made with</span>
                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                <span>in Nepal</span>
              </div>

              {/* Tech Stack */}
              <div className="flex items-center gap-4 text-gray-400 text-sm mr-14">
                <span>Built with React, Email API & Firebase</span>
                <div className="flex gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse delay-100"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse delay-200"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
