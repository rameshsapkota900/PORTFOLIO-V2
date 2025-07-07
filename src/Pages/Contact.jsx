import React, { useState, useEffect } from "react";
import { Share2, User, Mail, MessageSquare, Send, Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SocialLinks from "../components/SocialLinks";
import Komentar from "../components/Commentar";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";
import { useForm, ValidationError } from "@formspree/react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [displayScale, setDisplayScale] = useState(100);
  const [state, handleFormspreeSubmit] = useForm("mvgrjpan"); // Formspree form ID

  useEffect(() => {
    AOS.init({
      once: false,
    });
    
    // Detect display scale
    const detectDisplayScale = () => {
      // devicePixelRatio is a good approximation of display scale
      const scale = Math.round(window.devicePixelRatio * 100);
      setDisplayScale(scale);
    };

    detectDisplayScale();
    window.addEventListener('resize', detectDisplayScale);

    return () => {
      window.removeEventListener('resize', detectDisplayScale);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Show loading message
    Swal.fire({
      title: 'Sending Message...',
      html: 'Please wait while we send your message',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    // Use Formspree's submit handler
    const formspreeResult = await handleFormspreeSubmit(e);

    if (formspreeResult.succeeded) {
      // Show success message
      Swal.fire({
        title: 'Success!',
        text: 'Your message has been sent successfully!',
        icon: 'success',
        confirmButtonColor: '#6366f1',
        timer: 3000,
        timerProgressBar: true
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } else {
      // Show error message
      Swal.fire({
        title: 'Error!',
        text: 'Something went wrong. Please try again later.',
        icon: 'error',
        confirmButtonColor: '#6366f1'
      });
    }
  };

  return (
    <>
      <div className={`text-center lg:mt-[5%] mt-10 mb-2 ${displayScale > 110 ? "px-4 sm:px-6 lg:px-8" : "sm:px-0 px-[5%]"}`}>
        <h2
          data-aos="fade-down"
          data-aos-duration="1000"
          className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
        >
          <span
            style={{
              color: "#6366f1",
              backgroundImage:
                "linear-gradient(45deg, #6366f1 10%, #a855f7 93%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Contact Me
          </span>
        </h2>
        <p
          data-aos="fade-up"
          data-aos-duration="1100"
          className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2"
        >
          Got a question? Send me a message, and I'll get back to you soon.
        </p>
      </div>

      <div
        className={`min-h-[900px] h-auto py-16 flex items-center justify-center ${
          displayScale > 110 ? "px-4 sm:px-6 lg:px-8" : "px-[5%] md:px-0"
        }`}
        id="Contact"
      >
        <div className={`${
          displayScale > 110 ? "container mx-auto max-w-7xl" : "container px-[1%]"
        } grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8`}>
          <div
            data-aos="fade-right"
            data-aos-duration="1200"
            className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-5 py-12 sm:p-12 transform transition-all duration-300 hover:shadow-[#6366f1]/10"
          >
            <div className="flex justify-between items-start mb-8">
              <div>
                <h2 className="text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
                  Get in Touch
                </h2>
                <p className="text-gray-400">
                  Have something to discuss? Send me a message and let's talk.
                </p>
              </div>
              <Share2 className="w-10 h-10 text-[#6366f1] opacity-50" />
            </div>

            {state.succeeded ? (
              <div className="text-center py-10 space-y-6">
                <div className="flex justify-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#6366f1]/20 to-[#a855f7]/20 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#6366f1]/40 to-[#a855f7]/40 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6366f1] to-[#a855f7] flex items-center justify-center">
                        <Check className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white">Thank you!</h3>
                <p className="text-gray-300 max-w-md mx-auto">
                  Your message has been received. I'll get back to you as soon as possible.
                </p>
                
                <div className="pt-6">
                  <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-[#6366f1] hover:text-[#a855f7] transition-colors duration-300"
                  >
                    <span>Return to homepage</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                
                <button 
                  onClick={() => {
                    window.location.reload();
                  }}
                  className="mt-4 inline-block px-6 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-white transition-all duration-300"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                className="relative group"
              >
                <User className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#6366f1] transition-colors" />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={state.submitting}
                  className="w-full p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all duration-300 hover:border-[#6366f1]/30 disabled:opacity-50"
                  required
                />
                <ValidationError 
                  prefix="Name" 
                  field="name"
                  errors={state.errors}
                  className="text-red-400 text-sm mt-1 pl-2"
                />
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="relative group"
              >
                <Mail className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#6366f1] transition-colors" />
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={state.submitting}
                  className="w-full p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all duration-300 hover:border-[#6366f1]/30 disabled:opacity-50"
                  required
                />
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                  className="text-red-400 text-sm mt-1 pl-2"
                />
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="300"
                className="relative group"
              >
                <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#6366f1] transition-colors" />
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={state.submitting}
                  className="w-full resize-none p-3 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all duration-300 hover:border-[#6366f1]/30 h-80 disabled:opacity-50"
                  required
                />
                <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={state.errors}
                  className="text-red-400 text-sm mt-1 pl-2"
                />
              </div>
              <button
                data-aos="fade-up"
                data-aos-delay="400"
                type="submit"
                disabled={state.submitting}
                className="w-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#6366f1]/20 active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <Send className="w-5 h-5" />
                {state.submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
            )}

            {state.succeeded && (
              <div className="mt-6 p-4 bg-green-500/10 text-green-700 rounded-xl border border-green-500/20">
                <div className="flex items-center gap-3">
                  <Check className="w-6 h-6" />
                  <span className="text-sm md:text-base font-medium">
                    Your message has been sent! I'll get back to you as soon as possible.
                  </span>
                </div>
                <div className="mt-3 text-sm text-gray-500">
                  <ArrowRight className="inline-block w-4 h-4 mr-1 -mt-1" />
                  Tip: You can also reach me on social media for a quicker response.
                </div>
              </div>
            )}

          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="1200"
            className="bg-white/5 backdrop-blur-xl rounded-3xl p-4 py-10 sm:p-10 shadow-2xl transform transition-all duration-300 hover:shadow-[#a855f7]/10 min-h-[400px]"
          >
            <Komentar />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;