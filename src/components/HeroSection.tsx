import { ArrowRight, Lightbulb, Rocket } from 'lucide-react';
import { Button } from './ui/button';
import { useEffect, useState } from 'react';
import heroImage from 'figma:asset/3696e05a84093aba628a83a0cb9ca9b4b64c2da8.png';
import logoImage from 'figma:asset/8b708cb7940957e72e1bf03100021aa0c10f965b.png';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Your Custom Background Image - No Overlays */}
      <div 
        className="absolute inset-0 bg-cover bg-center transform transition-transform duration-1000"
        style={{
          backgroundImage: `url('${heroImage}')`,
          transform: `translateY(${isVisible ? '0px' : '50px'})`
        }}
      ></div>

      {/* Animated Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-[#542b2c]/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-[#8b5a5b]/10 rounded-full blur-xl animate-float-slow"></div>
      <div className="absolute top-1/2 right-20 w-16 h-16 bg-[#542b2c]/15 rounded-full blur-xl animate-bounce-slow"></div>

      {/* Animated Icons */}
      <div className="absolute top-1/4 left-1/4 animate-float">
        <Lightbulb className="h-8 w-8 text-[#8b5a5b]/20" />
      </div>
      <div className="absolute top-3/4 right-1/4 animate-float-slow">
        <Rocket className="h-10 w-10 text-[#542b2c]/20 rotate-45" />
      </div>

      {/* Main Content */}
      <div className={`relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}>
        
        {/* Badge */}
        <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full mb-8 shadow-lg">

        </div>

        {/* Main Headline - Exact as specified */}



        {/* Removed Logo Image */}

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#542b2c]/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[#8b5a5b] rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(90deg); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;