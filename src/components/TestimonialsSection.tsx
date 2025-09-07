import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      name: "Arjun Sharma",
      role: "Co-founder, TechVenture",
      year: "2023 Graduate",
      quote: "Enigma E-Cell transformed my perspective on entrepreneurship. The mentorship, resources, and network I gained here were instrumental in launching my startup. The community support is unmatched.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Priya Nair",
      role: "Product Manager, Microsoft",
      year: "2022 Graduate", 
      quote: "Being part of E-Cell taught me leadership, innovation, and how to think strategically. The experiences I gained here directly shaped my career trajectory and entrepreneurial mindset.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c913?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Rohit Kumar",
      role: "Startup Founder",
      year: "Current Member",
      quote: "The community support and resources available through E-Cell are incredible. It's more than just a club - it's a launchpad for dreams and a catalyst for innovation.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('testimonials');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  // Auto-play carousel
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [isPaused, testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="inline-flex items-center px-4 py-2 bg-[#542b2c]/10 rounded-full mb-6">
            <span className="text-sm text-[#542b2c] font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
              What People Say
            </span>
          </div>
          <h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Stories of 
            <span className="bg-gradient-to-r from-[#542b2c] to-[#8b5a5b] bg-clip-text text-transparent"> Transformation</span>
          </h2>
          <p 
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Hear from our community members about how Enigma E-Cell has shaped their entrepreneurial journeys and career paths.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div 
          className={`relative max-w-4xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-800 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <Card className="bg-gradient-to-br from-white to-gray-50/50 border-none shadow-2xl mx-4">
                    <CardContent className="p-8 md:p-12 text-center">
                      {/* Quote Icon */}
                      <Quote className="h-12 w-12 text-[#8b5a5b]/20 mx-auto mb-6" />
                      
                      {/* Rating */}
                      <div className="flex justify-center mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                        ))}
                      </div>

                      {/* Quote */}
                      <blockquote 
                        className="text-xl md:text-2xl text-gray-800 italic leading-relaxed mb-8"
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                      >
                        "{testimonial.quote}"
                      </blockquote>

                      {/* Author */}
                      <div className="flex items-center justify-center space-x-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover border-4 border-[#8b5a5b]/20"
                        />
                        <div className="text-left">
                          <h4 
                            className="text-lg font-bold text-gray-900"
                            style={{ fontFamily: 'Poppins, sans-serif' }}
                          >
                            {testimonial.name}
                          </h4>
                          <p 
                            className="text-[#542b2c] font-medium"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          >
                            {testimonial.role}
                          </p>
                          <p className="text-sm text-gray-500">{testimonial.year}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white/90 backdrop-blur-sm border-gray-200 hover:border-[#8b5a5b] hover:bg-white shadow-lg"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white/90 backdrop-blur-sm border-gray-200 hover:border-[#8b5a5b] hover:bg-white shadow-lg"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-gradient-to-r from-[#542b2c] to-[#8b5a5b] w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <p 
            className="text-lg text-gray-600 mb-6"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Ready to write your own success story?
          </p>
          <Button 
            className="bg-gradient-to-r from-[#542b2c] to-[#8b5a5b] hover:from-[#8b5a5b] hover:to-[#542b2c] text-white px-8 py-3 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Join Our Community
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;