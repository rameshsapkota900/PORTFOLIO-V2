import React from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { Mail, MessageSquare, Share2, ExternalLink, Github, Linkedin, Instagram, Youtube, Phone } from "lucide-react";

const Komentar = () => {    React.useEffect(() => {
        AOS.init({
            once: false,
            duration: 1000,
        });
    }, []);

    const socialLinks = [
        {
            name: "LinkedIn",
            icon: Linkedin,
            url: "https://www.linkedin.com/in/ramesh-sapkota-3aa24b329",
            color: "#0A66C2",
            text: "Connect on LinkedIn"
        },
        {
            name: "GitHub",
            icon: Github,
            url: "https://github.com/rameshsapkota900",
            color: "#ffffff",
            text: "Follow on GitHub"
        },
        {
            name: "WhatsApp",
            icon: Phone,
            url: "https://wa.me/9779824065478",
            color: "#25D366",
            text: "Chat on WhatsApp"
        },
        {
            name: "Instagram",
            icon: Instagram,
            url: "https://www.instagram.com/rameshsapkota900/",
            color: "#E4405F",
            text: "Follow on Instagram"
        },
        {
            name: "YouTube",
            icon: Youtube,
            url: "https://youtube.com/@rameshff900?si=VDv_1s0Kjk59g1OU",
            color: "#FF0000",
            text: "Subscribe on YouTube"
        }
    ];

    return (
        <div className="w-full h-full p-4">
            <div className="flex justify-between items-start mb-8">
                <div>
                    <h2 className="text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] to-[#6366f1]">
                        Connect With Me
                    </h2>
                    <p className="text-gray-400">
                        Let's connect and collaborate on exciting projects together.
                    </p>
                </div>
                <Share2 className="w-10 h-10 text-[#a855f7] opacity-50" />
            </div>

            <div className="space-y-4 mt-8">
                {socialLinks.map((link, index) => (
                    <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 p-4 rounded-xl bg-white/10 border border-white/20
                                 hover:bg-white/15 hover:border-white/30 transition-all duration-300"
                        data-aos="fade-up"
                        data-aos-delay={100 + (index * 100)}
                    >
                        <div className="p-3 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors duration-300">
                            <link.icon
                                className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
                                style={{ color: link.color }}
                            />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold text-white">{link.name}</h3>
                            <p className="text-gray-400 text-sm">{link.text}</p>
                        </div>
                        <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors duration-300" />
                    </a>
                ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-center text-gray-400 text-sm">
                    Looking forward to connecting with you!
                </p>
            </div>
        </div>
    );
};

export default Komentar;
