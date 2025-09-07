import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Linkedin, Instagram, Github, Mail } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

const TeamSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const teamMembers = [
    {
      name: "Aarav Patel",
      role: "President",
      year: "Final Year CSE",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      social: {
        linkedin: "#",
        instagram: "#",
        email: "president@ecell.nmit.ac.in"
      }
    },
    {
      name: "Priya Sharma",
      role: "Vice President",
      year: "Pre-Final CSE",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c913?w=200&h=200&fit=crop&crop=face",
      social: {
        linkedin: "#",
        instagram: "#",
        email: "vp@ecell.nmit.ac.in"
      }
    },
    {
      name: "Arjun Kumar",
      role: "Technical Head",
      year: "Final Year ECE",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
      social: {
        linkedin: "#",
        github: "#",
        email: "tech@ecell.nmit.ac.in"
      }
    },
    {
      name: "Ananya Singh",
      role: "Design Head",
      year: "Pre-Final ISE",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
      social: {
        linkedin: "#",
        instagram: "#",
        email: "design@ecell.nmit.ac.in"
      }
    },
    {
      name: "Rohan Gupta",
      role: "Marketing Head",
      year: "Final Year MBA",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
      social: {
        linkedin: "#",
        instagram: "#",
        email: "marketing@ecell.nmit.ac.in"
      }
    },
    {
      name: "Kavya Nair",
      role: "Events Head",
      year: "Pre-Final ME",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face",
      social: {
        linkedin: "#",
        instagram: "#",
        email: "events@ecell.nmit.ac.in"
      }
    },
    {
      name: "Vikram Rao",
      role: "Sponsorship Head",
      year: "Final Year CE",
      image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=200&h=200&fit=crop&crop=face",
      social: {
        linkedin: "#",
        email: "sponsorship@ecell.nmit.ac.in"
      }
    },
    {
      name: "Sneha Reddy",
      role: "Social Media Head",
      year: "Pre-Final BBA",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=200&h=200&fit=crop&crop=face",
      social: {
        linkedin: "#",
        instagram: "#",
        email: "social@ecell.nmit.ac.in"
      }
    }
  ];

  const itemsPerSlide = 4;
  const totalSlides = Math.ceil(teamMembers.length / itemsPerSlide);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('team');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentSlideMembers = () => {
    const startIndex = currentSlide * itemsPerSlide;
    return teamMembers.slice(startIndex, startIndex + itemsPerSlide);
  };

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'linkedin': return <Linkedin className="h-4 w-4" />;
      case 'instagram': return <Instagram className="h-4 w-4" />;
      case 'github': return <Github className="h-4 w-4" />;
      case 'email': return <Mail className="h-4 w-4" />;
      default: return null;
    }
  };

  return (
    <section id="team" className="py-20 bg-gradient-to-b from-gray-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="inline-flex items-center px-4 py-2 bg-[#6C4BF6]/10 rounded-full mb-6">
            <span className="text-sm text-[#6C4BF6] font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
              Our Team
            </span>
          </div>
          <h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Meet the Visionaries
            <span className="bg-gradient-to-r from-[#2B2D8C] to-[#6C4BF6] bg-clip-text text-transparent"> Behind Enigma</span>
          </h2>
          <p 
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Our diverse team of passionate leaders, innovators, and changemakers who drive the entrepreneurial 
            spirit at NMIT and make extraordinary things happen.
          </p>
        </div>

        {/* Team Slider */}
        <div className={`relative transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          
          {/* Team Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {getCurrentSlideMembers().map((member, index) => (
              <Card 
                key={`${currentSlide}-${index}`}
                className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white border-gray-100 hover:border-[#6C4BF6]/30 overflow-hidden"
              >
                <CardContent className="p-6 text-center">
                  {/* Profile Image */}
                  <div className="relative mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-gray-100 group-hover:border-[#6C4BF6]/30 transition-all duration-300"
                    />
                    
                    {/* Social Links Overlay */}
                    <div className="absolute inset-0 rounded-full bg-[#2B2D8C]/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                      <div className="flex space-x-3">
                        {Object.entries(member.social).map(([platform, link]) => (
                          <a
                            key={platform}
                            href={link}
                            className="bg-white/20 hover:bg-white/30 p-2 rounded-full text-white hover:text-[#6C4BF6] transition-all duration-200 transform hover:scale-110"
                          >
                            {getSocialIcon(platform)}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Member Info */}
                  <h3 
                    className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#2B2D8C] transition-colors duration-300"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {member.name}
                  </h3>
                  <p 
                    className="text-[#6C4BF6] font-semibold mb-1"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-500">{member.year}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="bg-white/90 backdrop-blur-sm border-gray-200 hover:border-[#6C4BF6] hover:bg-white shadow-lg disabled:opacity-50"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            {/* Slide Indicators */}
            <div className="flex space-x-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-gradient-to-r from-[#2B2D8C] to-[#6C4BF6] w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              disabled={currentSlide === totalSlides - 1}
              className="bg-white/90 backdrop-blur-sm border-gray-200 hover:border-[#6C4BF6] hover:bg-white shadow-lg disabled:opacity-50"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Join Team CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="bg-gradient-to-r from-[#2B2D8C]/5 to-[#6C4BF6]/10 rounded-3xl p-8 md:p-12">
            <h3 
              className="text-2xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Ready to Join Our Team?
            </h3>
            <p 
              className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              We're always looking for passionate individuals who share our vision of innovation and entrepreneurship. 
              Join us in shaping the future of NMIT's startup ecosystem.
            </p>
            <Button 
              className="bg-gradient-to-r from-[#2B2D8C] to-[#6C4BF6] hover:from-[#6C4BF6] hover:to-[#2B2D8C] text-white px-8 py-3 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Apply to Join Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;