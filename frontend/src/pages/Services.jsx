import React, { useState, useRef, useEffect } from "react";
import {
  Settings,
  Zap,
  Monitor,
  Wrench,
  Shield,
  BookOpen,
  Cpu,
  Network,
  ChevronLeft,
  ChevronRight,
  Eye,
} from "lucide-react";

const Services = () => {
  const [activeService, setActiveService] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
 const [hoveredFeature, setHoveredFeature] = useState(null);
  const sectionRef = useRef(null);

  const services = [
    {
      icon: Settings,
      title: "Automatisme Industriel",
      description:
        "Systèmes de contrôle-commande, API, télégestion et supervision complète",
      features: [
        "Programmation API",
        "Système de supervision",
        "Télégestion",
        "Instrumentation",
      ],
      image:
        "https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-blue-500 to-cyan-500",
      stats: { projects: "150+", efficiency: "95%", uptime: "99.9%" },
    },
    {
      icon: Zap,
      title: "Installations Électriques",
      description:
        "Distributions électriques HT/BT, postes de transformation et éclairage",
      features: [
        "Distribution HT/BT",
        "Postes de transformation",
        "Éclairage industriel",
        "Pré-câblage",
      ],
      image:
        "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-yellow-500 to-orange-500",
      stats: { projects: "200+", power: "50MW", installations: "300+" },
    },
    {
      icon: Monitor,
      title: "Supervision & Contrôle",
      description:
        "Solutions de monitoring et contrôle en temps réel des installations",
      features: [
        "Télésurveillance",
        "Monitoring temps réel",
        "Tableaux de bord",
        "Alertes automatiques",
      ],
      image:
        "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-purple-500 to-pink-500",
      stats: { systems: "100+", response: "<1s", availability: "24/7" },
    },
    {
      icon: Wrench,
      title: "Maintenance",
      description:
        "Contrats de maintenance préventive et curative pour tous équipements",
      features: [
        "Maintenance préventive",
        "Maintenance curative",
        "Conduite d'équipements",
        "Support 24/7",
      ],
      image:
        "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-green-500 to-emerald-500",
      stats: { contracts: "80+", mttr: "2h", satisfaction: "98%" },
    },
    {
      icon: Shield,
      title: "Ingénierie & Conseil",
      description:
        "Études techniques, conception et architecture de solutions sur mesure",
      features: [
        "Études techniques",
        "Conception",
        "Architecture",
        "Conseil expert",
      ],
      image:
        "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-indigo-500 to-blue-500",
      stats: { studies: "120+", accuracy: "99%", delivery: "On-time" },
    },
    {
      icon: BookOpen,
      title: "Formation",
      description:
        "Transfert de connaissances et formation technique spécialisée",
      features: [
        "Formation technique",
        "Transfert de savoir",
        "Certification",
        "Support continu",
      ],
      image:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-red-500 to-pink-500",
      stats: { trainees: "500+", courses: "25+", success: "95%" },
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const nextService = () => {
    setActiveService((prev) => (prev + 1) % services.length);
  };

  const prevService = () => {
    setActiveService((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-24 bg-white dark:bg-gradient-to-br dark:from-slate-800 dark:via-slate-900 dark:to-black relative overflow-hidden text-gray-900 dark:text-white transition-colors duration-500"
    >
      {/* Interactive background elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full animate-pulse cursor-pointer hover:bg-blue-400/60 hover:scale-300 transition-all duration-300"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
            onClick={(e) => {
              // Create expanding circle effect
              const circle = document.createElement("div");
              circle.className =
                "absolute w-40 h-40 border-2 border-blue-400/30 rounded-full animate-ping pointer-events-none";
              circle.style.left = "-80px";
              circle.style.top = "-80px";
              e.currentTarget.appendChild(circle);
              setTimeout(() => circle.remove(), 1000);
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-[60%] mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30 mb-8 backdrop-blur-sm hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300 cursor-pointer group">
            <Settings className="w-5 h-5 text-blue-400 mr-2 group-hover:rotate-180 transition-transform duration-500" />
            <span className="text-blue-300 text-sm font-medium">
              Solutions Technologiques Avancées
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-8">
            Nos{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Solutions complètes d'automatisme et d'électricité industrielle avec
            plus de 25 ans d'expertise technologique
          </p>
        </div>

        {/* Interactive Service Showcase */}
        <div className="mb-16">
          <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-blue-500/20 rounded-3xl overflow-hidden">
            {/* Light mode background */}
            <div className="absolute inset-0 bg-white dark:bg-transparent z-0" />
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Service Image with Interactive Elements */}
              <div className="relative h-96 lg:h-auto overflow-hidden group">
                <img
                  src={services[activeService].image}
                  alt={services[activeService].title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 to-transparent"></div>

                {/* Interactive overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white/20 backdrop-blur-sm rounded-full p-4 hover:bg-white/30 transition-all duration-300 transform hover:scale-110">
                    <Eye className="w-8 h-8 text-white" />
                  </button>
                </div>

                {/* Navigation arrows */}
                <button
                  onClick={prevService}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 backdrop-blur-sm rounded-full p-3 hover:bg-black/70 transition-all duration-300 hover:scale-110"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button
                  onClick={nextService}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 backdrop-blur-sm rounded-full p-3 hover:bg-black/70 transition-all duration-300 hover:scale-110"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </div>

              {/* Service Details */}
              <div className="p-12 relative z-10">
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${services[activeService].gradient} rounded-2xl flex items-center justify-center mb-6 hover:scale-110 transition-transform duration-300 cursor-pointer`}
                >
                  {React.createElement(services[activeService].icon, {
                    className: "w-10 h-10 text-white",
                  })}
                </div>

                <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  {services[activeService].title}
                </h3>
                <p className="text-gray-800 dark:text-white mb-8 text-lg leading-relaxed">
                  {services[activeService].description}
                </p>

                {/* Interactive Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {Object.entries(services[activeService].stats).map(
                    ([key, value], index) => (
                      <div
                        key={key}
                        className="text-center p-4 bg-slate-800/50 rounded-xl hover:bg-slate-700/50 transition-all duration-300 cursor-pointer transform hover:scale-105"
                      >
                        <div className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-1">
                          {value}
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-200 uppercase tracking-wide">
                          {key}
                        </div>
                      </div>
                    )
                  )}
                </div>

                {/* Interactive Features */}
                <div className="space-y-3">
                  {services[activeService].features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center p-4 bg-slate-800/50 rounded-xl hover:bg-slate-700/50 transition-all duration-300 cursor-pointer transform hover:translate-x-2"
                      onMouseEnter={() => setHoveredFeature(index)}
                      onMouseLeave={() => setHoveredFeature(null)}
                    >
                      <div
                        className={`w-3 h-3 bg-gradient-to-r ${services[activeService].gradient} rounded-full mr-4 transition-all duration-300 ${hoveredFeature === index ? "animate-pulse scale-150" : ""}`}
                      ></div>
                      <span className="text-gray-800 dark:text-white font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Service Navigation Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveService(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeService
                      ? "bg-blue-400 scale-125"
                      : "bg-gray-600 hover:bg-gray-400 hover:scale-110"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-blue-500/20 rounded-3xl overflow-hidden hover:border-purple-500/40 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 transform hover:-translate-y-4 cursor-pointer ${
                index === activeService ? 'ring-2 ring-blue-400/50 scale-105' : ''
              }`}
              onClick={() => setActiveService(index)}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-16px) rotateY(5deg)';
              }}
              onMouseLeave={e => {
                if (index !== activeService) {
                  e.currentTarget.style.transform = 'translateY(0) rotateY(0)';
                }
              }}
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                {/* Floating Icon */}
                <div className={`absolute top-4 right-4 w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {React.createElement(service.icon, { className: "w-8 h-8 text-white" })}
                </div>
                {/* Interactive pulse effect */}
                <div className="absolute top-4 right-4 w-16 h-16 rounded-2xl border-2 border-white/20 animate-pulse group-hover:animate-ping"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">{service.description}</p>
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center p-3 bg-slate-800/50 rounded-xl hover:bg-slate-700/50 transition-all duration-200 transform hover:translate-x-1"
                    >
                      <div className={`w-3 h-3 bg-gradient-to-r ${service.gradient} rounded-full mr-4 animate-pulse`}></div>
                      <span className="text-gray-300 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                {/* Interactive progress bar */}
                <div className={`mt-6 h-1 bg-gradient-to-r ${service.gradient} rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300`}>
                  <div className="h-full bg-white/20 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Interactive Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 border border-blue-500/30 rounded-3xl p-10 backdrop-blur-sm relative overflow-hidden group hover:border-purple-500/50 transition-all duration-500">
            {/* Interactive background pattern */}
            <div className="absolute inset-0 opacity-10">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-blue-400 rounded-full animate-pulse"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`
                  }}
                />
              ))}
            </div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                Prêt pour l'Industrie 4.0 ?
              </h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto group-hover:text-gray-200 transition-colors duration-300">
                Transformez votre infrastructure industrielle avec nos solutions technologiques de pointe
              </p>
              <button className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 text-white px-10 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl relative overflow-hidden group/btn">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                <span className="relative z-10">Demander une Consultation</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;