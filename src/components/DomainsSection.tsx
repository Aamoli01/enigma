import { Code2, Palette, Megaphone, Share2, DollarSign, BarChart3 } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const DomainsSection = () => {
  const domains = [
    {
      icon: <Code2 className="h-10 w-10 text-blue-600" />,
      title: "Technology",
      description: "Full-stack development, AI/ML, blockchain, and emerging tech solutions for innovative startups.",
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100"
    },
    {
      icon: <Palette className="h-10 w-10 text-purple-600" />,
      title: "Design",
      description: "UI/UX design, brand identity, and creative solutions that make products stand out in the market.",
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-purple-100"
    },
    {
      icon: <Megaphone className="h-10 w-10 text-pink-600" />,
      title: "PR & Marketing",
      description: "Strategic marketing campaigns, public relations, and brand building for startup success.",
      color: "from-pink-500 to-pink-600",
      bgColor: "from-pink-50 to-pink-100"
    },
    {
      icon: <Share2 className="h-10 w-10 text-indigo-600" />,
      title: "Social Media",
      description: "Content creation, community management, and digital presence optimization across platforms.",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "from-indigo-50 to-indigo-100"
    },
    {
      icon: <DollarSign className="h-10 w-10 text-green-600" />,
      title: "Sponsorship",
      description: "Partnership development, funding acquisition, and investor relations for sustainable growth.",
      color: "from-green-500 to-green-600",
      bgColor: "from-green-50 to-green-100"
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-orange-600" />,
      title: "Strategy & Analysis",
      description: "Market research, business strategy, and data-driven insights for informed decision making.",
      color: "from-orange-500 to-orange-600",
      bgColor: "from-orange-50 to-orange-100"
    }
  ];

  return (
    <section id="domains" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full mb-6">
            <span className="text-sm text-purple-800 font-medium">Our Teams & Domains</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Diverse Expertise,
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> United Vision</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our multi-disciplinary teams work together to provide comprehensive support for every aspect of your entrepreneurial journey, from technical development to market strategy.
          </p>
        </div>

        {/* Domains Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {domains.map((domain, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white border-none overflow-hidden">
              <CardContent className="p-0">
                {/* Header with gradient */}
                <div className={`bg-gradient-to-r ${domain.bgColor} p-6 group-hover:from-white group-hover:to-gray-50 transition-all duration-300`}>
                  <div className={`inline-flex p-4 bg-gradient-to-r ${domain.color} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {domain.icon}
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {domain.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {domain.description}
                  </p>
                  
                  {/* Join Team Button */}
                  <button className={`inline-flex items-center text-sm font-medium bg-gradient-to-r ${domain.color} bg-clip-text text-transparent hover:underline transition-all duration-200`}>
                    Join {domain.title} Team →
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Structure Info */}
        <div className="mt-20 bg-gradient-to-r from-gray-900 to-blue-900 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Join a Domain That Excites You</h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Whether you're a tech enthusiast, creative designer, or business strategist, there's a place for you in our diverse community of innovators.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl font-bold text-blue-400 mb-2">6</div>
              <div className="text-lg font-medium mb-1">Specialized Domains</div>
              <div className="text-sm text-gray-300">Each with unique focus areas</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-lg font-medium mb-1">Team Leads</div>
              <div className="text-sm text-gray-300">Experienced mentors</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
              <div className="text-lg font-medium mb-1">Collaboration</div>
              <div className="text-sm text-gray-300">Cross-domain projects</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DomainsSection;