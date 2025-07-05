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
      
      <div className="relative px-4 sm:px-6 md:px-[10%] py-8 md:py-12">
        <div className="">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-8">
            
            {/* Brand Section */}
            <div className="lg:col-span-2 sm:col-span-2 text-center sm:text-center lg:text-left">
              <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent mb-3 md:mb-4">
                Ramesh Sapkota
              </h3>
              <p className="text-gray-400 mb-3 md:mb-4 leading-relaxed text-sm sm:text-base">
                Aspiring Java Developer passionate about backend development, Spring Boot, 
                and building scalable software solutions. Currently pursuing my degree and 
                continuously learning new technologies.
              </p>
              <div className="flex items-center justify-center sm:justify-center lg:justify-start gap-2 text-gray-400 mb-2 text-sm sm:text-base">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>Itahari, Nepal</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className='sm:ml-0 text-center sm:text-center lg:text-left'>
              <h4 className="text-base sm:text-lg font-semibold text-white mb-3 md:mb-4">Quick Links</h4>
              <ul className="space-y-1 sm:space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block text-sm sm:text-base"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="sm:col-span-1 text-center sm:text-center lg:text-left">
              <h4 className="text-base sm:text-lg font-semibold text-white mb-3 md:mb-4">Let's Connect</h4>
              <div className="space-y-2 sm:space-y-3">
                <a 
                  href="mailto:rameshsapkota900@gmail.com"
                  className="flex items-center justify-center sm:justify-center lg:justify-start gap-2 text-gray-400 hover:text-white transition-colors duration-300 group"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span className="text-xs sm:text-sm break-all group-hover:break-normal">rameshsapkota900@gmail.com</span>
                </a>
                <a 
                  href="https://wa.me/9779824065478"
                  className="flex items-center justify-center sm:justify-center lg:justify-start gap-2 text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">+977 9824065478</span>
                </a>
              </div>

              {/* Social Media Icons */}
              <div className="flex justify-center sm:justify-center lg:justify-start gap-3 sm:gap-4 mt-4 sm:mt-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full bg-white/5 border border-white/10 transition-all duration-300 hover:scale-110 hover:bg-white/10 ${social.color}`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 pt-6 sm:pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
              
              {/* Copyright */}
              <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-gray-400 text-xs sm:text-sm text-center sm:text-left">
                <span className="flex items-center gap-1 sm:gap-2">
                  © {currentYear} Ramesh Sapkota. Made with
                  <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 animate-pulse" />
                  in Nepal
                </span>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-gray-400 text-xs sm:text-sm text-center sm:text-right mr-12">
                <span className="whitespace-nowrap">Built with React, Email API & Firebase</span>
                <div className="flex gap-1 sm:gap-2">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse delay-100"></div>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-500 rounded-full animate-pulse delay-200"></div>
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
