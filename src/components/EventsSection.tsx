import { Calendar, MapPin, Users, Clock, ArrowRight, Quote } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { useEffect, useState } from 'react';

const EventsSection = () => {
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

    const element = document.getElementById('events');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const events = [
    {
      title: "IDEATHON",
      description: "Innovation meets execution in our flagship 24-hour ideation marathon",
      date: "March 15-16, 2025",
      status: "upcoming",
      participants: "150+ teams expected",
      image: "https://images.unsplash.com/photo-1503252947848-7338d3f92f31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWNrYXRob24lMjBjb21wZXRpdGlvbiUyMHByb2dyYW1taW5nfGVufDF8fHx8MTc1NzE3NTQ2NXww&ixlib=rb-4.1.0&q=80&w=1080",
      cta: "Participate"
    },
    {
      title: "INCEPTION",
      description: "Startup showcase and networking event with industry leaders",
      date: "February 20, 2025",
      status: "upcoming",
      participants: "200+ attendees",
      image: "https://images.unsplash.com/photo-1559223669-d7bb31d71f26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN1bW1pdCUyMGNvbmZlcmVuY2UlMjBzdGFnZXxlbnwxfHx8fDE3NTcxNzU0Njl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      cta: "View"
    },
    {
      title: "WORKSHOPS",
      description: "Skill-building sessions on entrepreneurship, tech, and innovation",
      date: "Ongoing",
      status: "active",
      participants: "300+ learners",
      image: "https://images.unsplash.com/photo-1695066964145-245927509533?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwd29ya3Nob3AlMjBzdHVkZW50cyUyMGNvZGluZ3xlbnwxfHx8fDE3NTcxNzU0NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      cta: "View"
    },
    {
      title: "E-SUMMIT",
      description: "Our premier entrepreneurship summit featuring industry titans",
      date: "Coming Soon",
      status: "launches-soon",
      participants: "500+ expected",
      image: "https://images.unsplash.com/photo-1559223669-d7bb31d71f26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN1bW1pdCUyMGNvbmZlcmVuY2UlMjBzdGFnZXxlbnwxfHx8fDE3NTcxNzU0Njl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      cta: "View",
      highlight: "Launches Soon!"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming': return 'bg-green-100 text-green-800';
      case 'active': return 'bg-blue-100 text-blue-800';
      case 'launches-soon': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="events" className="py-20 bg-gradient-to-b from-gray-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="inline-flex items-center px-4 py-2 bg-[#8b5a5b]/10 rounded-full mb-6">
            <span className="text-sm text-[#8b5a5b] font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
              Events & Programs
            </span>
          </div>
          <h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Where Innovation
            <span className="bg-gradient-to-r from-[#542b2c] to-[#8b5a5b] bg-clip-text text-transparent"> Takes Flight</span>
          </h2>
          <p 
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            From ideation marathons to industry summits, our events create transformative experiences that bridge 
            the gap between academic learning and entrepreneurial success.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {events.map((event, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden bg-white border-gray-100 hover:border-[#8b5a5b]/30 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              <div className="relative">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge className={getStatusColor(event.status)}>
                    {event.highlight || event.status.replace('-', ' ')}
                  </Badge>
                </div>
                {event.highlight && (
                  <div className="absolute inset-0 bg-gradient-to-t from-[#8b5a5b]/20 to-transparent"></div>
                )}
              </div>
              
              <CardContent className="p-6">
                <h3 
                  className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#542b2c] transition-colors duration-300"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {event.title}
                </h3>
                <p 
                  className="text-gray-600 mb-4 leading-relaxed text-sm"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {event.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-2 text-[#542b2c]" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="h-4 w-4 mr-2 text-[#8b5a5b]" />
                    {event.participants}
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-gradient-to-r from-[#542b2c] to-[#8b5a5b] hover:from-[#8b5a5b] hover:to-[#542b2c] group/btn transform hover:scale-105 transition-all duration-300"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {event.cta}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Ritesh Agarwal Quote */}
        <div className={`text-center mb-16 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="relative max-w-3xl mx-auto bg-gradient-to-r from-[#542b2c]/5 to-[#8b5a5b]/10 rounded-3xl p-8 border border-[#8b5a5b]/20">
            <Quote className="absolute -top-4 -left-4 h-10 w-10 text-[#8b5a5b]/30" />
            <blockquote 
              className="text-lg md:text-xl font-medium text-gray-800 italic leading-relaxed mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              "build something a 100 people absolutely love using."
            </blockquote>
            <cite className="text-[#542b2c] font-semibold">— Ritesh Agarwal</cite>
            <Quote className="absolute -bottom-4 -right-4 h-10 w-10 text-[#542b2c]/30 rotate-180" />
          </div>
        </div>

        {/* Event Stats */}
        <div className={`bg-gradient-to-r from-[#542b2c] to-[#8b5a5b] rounded-3xl p-8 md:p-12 text-white transition-all duration-1000 delay-900 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="text-center mb-8">
            <h3 
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Event Impact & Reach
            </h3>
            <p 
              className="text-blue-100 text-lg"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Creating memorable experiences that drive innovation and collaboration
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '50+', label: 'Events Hosted', sublabel: 'This year' },
              { number: '2000+', label: 'Participants', sublabel: 'Total reach' },
              { number: '₹10L+', label: 'Prize Pool', sublabel: 'Distributed' },
              { number: '100+', label: 'Industry Experts', sublabel: 'Featured speakers' }
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

export default EventsSection;