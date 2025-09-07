import { ArrowRight, CheckCircle, Star, Users } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

const JoinSection = () => {
  const benefits = [
    "Access to exclusive workshops and mentorship programs",
    "Networking opportunities with industry leaders",
    "Participation in hackathons and competitions",
    "Resources for startup development and funding",
    "Certificate of participation and leadership roles",
    "Alumni network of successful entrepreneurs"
  ];

  const testimonials = [
    {
      name: "Arjun Sharma",
      role: "Co-founder, TechVenture",
      year: "2023 Graduate",
      quote: "Enigma E-Cell gave me the platform and confidence to launch my startup. The mentorship and networking opportunities were invaluable.",
      rating: 5
    },
    {
      name: "Priya Nair",
      role: "Product Manager, Microsoft",
      year: "2022 Graduate",
      quote: "Being part of E-Cell taught me leadership, innovation, and how to think like an entrepreneur. It shaped my career path completely.",
      rating: 5
    },
    {
      name: "Rohit Kumar",
      role: "Startup Founder",
      year: "Current Member",
      quote: "The community support and resources available through E-Cell are incredible. It's more than just a club - it's a launchpad for dreams.",
      rating: 5
    }
  ];

  return (
    <section id="join" className="py-20 bg-gradient-to-b from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full mb-6">
            <span className="text-sm text-purple-800 font-medium">Join Our Community</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Transform
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Your Ideas?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Join NMIT's most dynamic entrepreneurship community and turn your innovative ideas into successful ventures. Your entrepreneurial journey starts here.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 group">
              Join Enigma E-Cell Now
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="outline" className="border-2 border-gray-300 hover:border-blue-500 bg-white/70 backdrop-blur-sm px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              Learn More About Membership
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="flex justify-center items-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-blue-600" />
              <span>500+ Active Members</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-yellow-500" />
              <span>4.9/5 Member Satisfaction</span>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Why Join Enigma E-Cell?</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-white/70 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 leading-relaxed">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">What Our Members Say</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 italic mb-4 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-blue-600">{testimonial.role}</p>
                    <p className="text-xs text-gray-500">{testimonial.year}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Your Entrepreneurial Journey Awaits</h3>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Don't just dream about changing the world – take the first step towards making it happen. Join Enigma E-Cell and be part of NMIT's most innovative community.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-10 py-4 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 group">
              Start Your Journey Today
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="text-sm text-gray-400">
            Registration opens for new academic year • No prior experience required • All NMIT students welcome
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;