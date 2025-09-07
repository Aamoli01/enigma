import { useEffect } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import EventsSection from './components/EventsSection';
import TestimonialsSection from './components/TestimonialsSection';
import TeamSection from './components/TeamSection';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    // Add smooth scrolling to the entire document
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add custom CSS for animations
    const style = document.createElement('style');
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap');
      
      * {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      }
      
      h1, h2, h3, h4, h5, h6 {
        font-family: 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif;
      }
      
      /* Custom scrollbar */
      ::-webkit-scrollbar {
        width: 8px;
      }
      
      ::-webkit-scrollbar-track {
        background: #f1f1f1;
      }
      
      ::-webkit-scrollbar-thumb {
        background: linear-gradient(135deg, #542b2c, #8b5a5b);
        border-radius: 4px;
      }
      
      ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(135deg, #8b5a5b, #542b2c);
      }
      
      /* Smooth transitions for all elements */
      * {
        transition: all 0.3s ease;
      }
      
      /* Custom selection color */
      ::selection {
        background: linear-gradient(135deg, #542b2c, #8b5a5b);
        color: white;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white antialiased">
      {/* Sticky Navigation */}
      <Navigation />
      
      {/* Main Content - Single Scrollable Page */}
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* About Section with Ratan Tata Quote */}
        <AboutSection />
        
        {/* Events Section with 4 specified events */}
        <EventsSection />
        
        {/* Testimonials Carousel */}
        <TestimonialsSection />
        

      </main>
      
      {/* Footer with Contact Info */}
      <Footer />
    </div>
  );
}