import { Target, Users, Lightbulb, Trophy, Rocket, BookOpen, Quote } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { useEffect, useState } from 'react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: <Rocket className="h-8 w-8 text-[#542b2c]" />,
      title: "Startup Incubation",
      description: "From ideation to execution, we provide comprehensive support to transform innovative ideas into successful ventures."
    },
    {
      icon: <BookOpen className="h-8 w-8 text-[#8b5a5b]" />,
      title: "Skill Development",
      description: "Regular workshops, seminars, and training programs to enhance entrepreneurial and technical capabilities."
    },
    {
      icon: <Trophy className="h-8 w-8 text-[#542b2c]" />,
      title: "Competitions & Events",
      description: "Organizing hackathons, pitch competitions, and innovation challenges to showcase talent and creativity."
    },
    {
      icon: <Users className="h-8 w-8 text-[#8b5a5b]" />,
      title: "Community Building",
      description: "Fostering a vibrant ecosystem of entrepreneurs, mentors, and industry experts for collaboration."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-[#542b2c]" />,
      title: "Innovation Hub",
      description: "Providing resources, mentorship, and infrastructure to support cutting-edge research and development."
    },
    {
      icon: <Target className="h-8 w-8 text-[#8b5a5b]" />,
      title: "Strategic Guidance",
      description: "Expert mentorship and strategic advice from successful entrepreneurs and industry leaders."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Ratan Tata Quote Block */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="relative max-w-4xl mx-auto">
            <Quote className="absolute -top-4 -left-4 h-12 w-12 text-[#8b5a5b]/20 transform -rotate-12" />
            <blockquote 
              className="text-2xl md:text-3xl font-medium text-gray-800 italic leading-relaxed mb-6"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              "Business need to go beyond the interest of their companies to the communities they serve."
            </blockquote>
            <cite className="text-lg text-[#542b2c] font-semibold">— Ratan Tata</cite>
            <Quote className="absolute -bottom-4 -right-4 h-12 w-12 text-[#542b2c]/20 transform rotate-12" />
          </div>
        </div>

        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="inline-flex items-center px-4 py-2 bg-[#542b2c]/10 rounded-full mb-6">
            <span className="text-sm text-[#542b2c] font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
              About Enigma E-Cell
            </span>
          </div>
          <h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Fostering Innovation at 
            <span className="bg-gradient-to-r from-[#542b2c] to-[#8b5a5b] bg-clip-text text-transparent"> NMIT</span>
          </h2>
          <p 
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Enigma E-Cell is NMIT's premier entrepreneurship and innovation hub, dedicated to nurturing the next generation 
            of entrepreneurs and innovators. We provide a comprehensive ecosystem where groundbreaking ideas are transformed 
            into impactful ventures that drive positive change in society.
          </p>
        </div>

        {/* Mission Statement */}
        <div className={`mb-16 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <Card className="bg-gradient-to-r from-[#542b2c]/5 to-[#8b5a5b]/10 border-none shadow-xl">
            <CardContent className="p-8 text-center">
              <h3 
                className="text-2xl font-bold text-gray-900 mb-4"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Our Mission
              </h3>
              <p 
                className="text-lg text-gray-700 leading-relaxed"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                To create a dynamic ecosystem where innovative ideas flourish, entrepreneurial spirits thrive, and students 
                are empowered to transform their visions into impactful ventures. We bridge the gap between academic learning 
                and real-world application, fostering a culture of innovation that extends beyond campus boundaries.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white/80 backdrop-blur-sm border-gray-100 hover:border-[#8b5a5b]/30 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-br from-[#542b2c]/10 to-[#8b5a5b]/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                </div>
                <h3 
                  className="text-xl font-semibold text-gray-900 mb-3"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {feature.title}
                </h3>
                <p 
                  className="text-gray-600 leading-relaxed"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className={`bg-gradient-to-r from-[#542b2c] to-[#8b5a5b] rounded-3xl p-8 md:p-12 text-white transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="text-center mb-8">
            <h3 
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Our Impact Story
            </h3>
            <p 
              className="text-blue-100 text-lg"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Building a legacy of innovation and entrepreneurship at NMIT
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '500+', label: 'Active Members', sublabel: 'Growing community' },
              { number: '50+', label: 'Events Hosted', sublabel: 'This academic year' },
              { number: '25+', label: 'Startup Ideas', sublabel: 'Currently incubating' },
              { number: '15+', label: 'Success Stories', sublabel: 'Alumni ventures' }
            ].map((stat, index) => (
              <div key={index} className="transform hover:scale-105 transition-transform duration-300">
                <div 
                  className="text-3xl md:text-4xl font-bold mb-2"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {stat.number}
                </div>
                <div 
                  className="text-lg font-medium mb-1"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {stat.label}
                </div>
                <div className="text-sm text-blue-200">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;