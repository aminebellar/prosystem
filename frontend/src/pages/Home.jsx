import React, { useState, useEffect } from 'react';
import { ArrowRight, Shield, Award, Cpu, Zap, CircuitBoard, Play, Pause } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "L'Avenir de l'Automatisme",
      subtitle: "Industriel 4.0",
      description: "Intégrateur officiel Schneider Electric, pionnier de l'automatisme et l'électricité industrielle."
    },
    {
      title: "Innovation Technologique",
      subtitle: "Solutions Intelligentes",
      description: "25+ années d'expertise en automatisme industriel avec certifications ISO internationales."
    },
    {
      title: "Excellence Certifiée",
      subtitle: "Qualité Garantie",
      description: "Triple certification ISO 9001, ISO 14001 et OHSAS 18001 pour une qualité exceptionnelle."
    }
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, slides.length]);

  const parallaxStyle = {
    transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
  };

  return (
    <section id="home" className="min-h-screen bg-white dark:bg-gradient-to-br dark:from-slate-900 dark:via-blue-900 dark:to-purple-900 relative overflow-hidden text-gray-900 dark:text-white transition-colors duration-500">
      {/* Interactive animated background elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 dark:bg-blue-500/20 rounded-full blur-3xl animate-pulse cursor-pointer hover:bg-blue-500/30 transition-all duration-500"
          style={parallaxStyle}
          onClick={() => setIsPlaying(!isPlaying)}
        ></div>
        <div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-200/20 dark:bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000 cursor-pointer hover:bg-cyan-500/30 transition-all duration-500"
          style={{ transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)` }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-200/10 dark:bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-500 cursor-pointer hover:bg-purple-600/20 transition-all duration-500"
          style={parallaxStyle}
        ></div>
      </div>

      {/* Interactive floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-200/30 dark:bg-blue-400/30 rounded-full animate-bounce cursor-pointer hover:bg-blue-400/60 hover:scale-150 transition-all duration-300"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
            onClick={() => {
              // Create ripple effect
              const ripple = document.createElement('div');
              ripple.className = 'absolute w-20 h-20 bg-blue-200/20 dark:bg-blue-400/20 rounded-full animate-ping pointer-events-none';
              ripple.style.left = '-40px';
              ripple.style.top = '-40px';
              document.body.appendChild(ripple);
              setTimeout(() => ripple.remove(), 1000);
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 w-[80%] mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center">
          {/* Interactive play/pause control */}
          <div className="mb-8 flex justify-center">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100/20 to-purple-100/20 dark:from-blue-500/20 dark:to-purple-500/20 rounded-full border border-blue-500/30 mb-6 backdrop-blur-sm hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300"
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 text-blue-400 mr-2 group-hover:scale-110 transition-transform" />
              ) : (
                <Play className="w-5 h-5 text-blue-400 mr-2 group-hover:scale-110 transition-transform" />
              )}
              <span className="text-blue-700 dark:text-blue-300 text-sm font-medium">25+ Années d'Innovation Technologique</span>
              <Zap className="w-4 h-4 text-purple-400 ml-2 animate-pulse group-hover:animate-bounce" />
            </button>
          </div>

          {/* Interactive slide content */}
          <div className="relative h-96 mb-10">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 transform ${
                  index === currentSlide 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-10 scale-95'
                }`}
              >
                <h1 className="text-6xl md:text-8xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
                  {slide.title}
                  <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                    {slide.subtitle}
                  </span>
                </h1>
                <p className="text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  {slide.description}
                </p>
              </div>
            ))}
          </div>

          {/* Interactive slide indicators */}
          <div className="flex justify-center space-x-3 mb-10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-blue-400 scale-125' 
                    : 'bg-gray-600 hover:bg-gray-400 hover:scale-110'
                }`}
              />
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <Link to="/services">
              <button
                className="group bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 text-white px-10 py-5 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/30 border border-blue-400/20 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span className="flex items-center relative z-10">
                   Découvrir nos Services
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </span>
              </button>
            </Link>
            <Link to="/certifications">
              <button
                className="group border-2 border-purple-500 text-purple-400 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white px-10 py-5 rounded-2xl font-semibold transition-all duration-300 backdrop-blur-sm relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <span className="relative z-10">Nos Certifications</span>
              </button>
            </Link>
          </div>

          {/* Interactive feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Cpu, title: "Automatisme Intelligent", desc: "Systèmes de contrôle-commande industriel et supervision avancée avec IA intégrée", color: "blue" },
              { icon: Shield, title: "Sécurité Maximale", desc: "Installations ultra-sécurisées conformes aux normes internationales les plus strictes", color: "emerald" },
              { icon: Award, title: "Excellence Certifiée", desc: "Triple certification ISO 9001, ISO 14001 et OHSAS 18001 pour une qualité garantie", color: "purple" }
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-100/60 to-slate-200/60 dark:from-slate-800/60 dark:to-slate-900/60 backdrop-blur-lg border border-blue-500/30 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-blue-500/20 cursor-pointer"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-12px) rotateX(5deg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) rotateX(0)';
                }}
              >
                <div className="relative mb-6">
                  <item.icon className={`w-16 h-16 text-${item.color}-400 mx-auto group-hover:text-purple-400 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12`} />
                  <CircuitBoard className="w-8 h-8 text-cyan-400 absolute -top-2 -right-2 animate-pulse group-hover:animate-spin" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 group-hover:text-gray-300 transition-colors duration-300">{item.desc}</p>
                
                {/* Interactive progress bar */}
                <div className="mt-4 h-1 bg-gray-700 rounded-full overflow-hidden">
                  <div className={`h-full bg-gradient-to-r from-${item.color}-400 to-purple-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive wave with hover effect */}
      <div className="absolute bottom-0 left-0 right-0 cursor-pointer group">
        <svg viewBox="0 0 1200 120" fill="none" className="w-full h-20 transition-all duration-300 group-hover:h-24">
          <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" fill="url(#gradient)" className="group-hover:animate-pulse" />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="50%" stopColor="#334155" />
              <stop offset="100%" stopColor="#1e293b" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Hero;