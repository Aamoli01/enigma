import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook, ExternalLink, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { 
      icon: <Linkedin className="h-5 w-5" />, 
      href: "#", 
      label: "LinkedIn",
      color: "hover:text-blue-600"
    },
    { 
      icon: <Instagram className="h-5 w-5" />, 
      href: "#", 
      label: "Instagram",
      color: "hover:text-pink-500"
    },
    { 
      icon: <Facebook className="h-5 w-5" />, 
      href: "#", 
      label: "Facebook",
      color: "hover:text-blue-500"
    }
  ];

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Events", href: "#events" },
    { name: "Team", href: "#team" },
    { name: "Blog", href: "#" },
    { name: "Annual Report", href: "#" }
  ];

  const scrollToSection = (sectionId: string) => {
    if (sectionId.startsWith('#')) {
      const element = document.getElementById(sectionId.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer id="contact" className="bg-gradient-to-br from-[#542b2c] via-[#8b5a5b] to-[#542b2c] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 
                  className="text-3xl font-bold text-white mb-2"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  ENIGMA E-CELL
                </h3>
                <p 
                  className="text-blue-100 text-lg"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  The Entrepreneurship Cell of NMIT
                </p>
              </div>
              
              <p 
                className="text-blue-100 leading-relaxed mb-6 max-w-md"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Fostering innovation and entrepreneurship at NMIT. Join us in building the next generation 
                of successful startups and business leaders who will shape tomorrow's world.
              </p>
              
              {/* Social Media Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`bg-white/10 backdrop-blur-sm hover:bg-white/20 p-3 rounded-xl transition-all duration-300 group hover:scale-110 ${social.color}`}
                    aria-label={social.label}
                  >
                    <div className="text-white group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 
                className="text-lg font-semibold mb-6 text-white"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-blue-100 hover:text-white transition-colors duration-200 flex items-center group"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {link.name}
                      <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 
                className="text-lg font-semibold mb-6 text-white"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Contact Us
              </h4>
              <div className="space-y-4">
                
                {/* Email - Exact as specified */}
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-300 flex-shrink-0" />
                  <a 
                    href="mailto:ecell@nmit.ac.in" 
                    className="text-blue-100 hover:text-white transition-colors font-medium"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    ecell@nmit.ac.in
                  </a>
                </div>
                
                {/* Address */}
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-blue-300 flex-shrink-0 mt-0.5" />
                  <div className="text-blue-100" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <p>Nitte Meenakshi Institute of Technology</p>
                    <p>Yelahanka, Bangalore - 560064</p>
                    <p>Karnataka, India</p>
                  </div>
                </div>
                
                {/* Phone */}
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-300 flex-shrink-0" />
                  <a 
                    href="tel:+919876543210" 
                    className="text-blue-100 hover:text-white transition-colors"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="border-t border-white/20 pt-8 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8">
              <div className="text-center md:text-left md:flex md:items-center md:justify-between">
                <div className="mb-4 md:mb-0">
                  <h4 
                    className="text-xl font-semibold text-white mb-2"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    Stay Connected
                  </h4>
                  <p 
                    className="text-blue-100"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Get the latest updates on events, workshops, and opportunities.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  />
                  <button 
                    className="px-6 py-3 bg-white text-[#2B2D8C] hover:bg-blue-50 rounded-lg font-medium transition-all duration-300 hover:shadow-lg transform hover:scale-105"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section - Exact footer credits as specified */}
          <div className="border-t border-white/20 pt-8">
            <div className="text-center">
              {/* Footer Credits - Exact as specified */}
              <p 
                className="text-blue-100 mb-2"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Designed by ENIGMA team • © ENIGMA • Made with <Heart className="inline h-4 w-4 text-red-400 fill-current mx-1" /> love.
              </p>
              <p className="text-blue-300 text-sm">
                © 2025 Enigma E-Cell, NMIT. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;