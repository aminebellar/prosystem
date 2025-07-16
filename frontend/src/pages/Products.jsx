import React, { useState, useEffect } from 'react';
import { Cpu, Battery, Gauge, Power, Zap, CircuitBoard, Filter, Search, Star, TrendingUp } from 'lucide-react';
import taqamorocco from '../assets/taqamorocco.png';
import ocp from '../assets/ocp.jpeg';
import lafarge from '../assets/lafarge.png';
import officenationaldelelectricite from '../assets/officenationaldelelectricite.png';
import sosipo from '../assets/sosipo.png';
import copag from '../assets/copag.jpeg';
import marsamaroc from '../assets/marsamaroc.jpeg';
import cosuar from '../assets/cosuar.jpeg';
import ramsa from '../assets/ramsa.png';
import ormvah from '../assets/ormvah.jpeg';
import somas from '../assets/somas.jpeg';
import logo from '../assets/logo.png';
import schneider from '../assets/schneider.png';
// partenaires
import siemens from '../assets/siemens.png';
import abb from '../assets/abb.png';
import allenbrandly from '../assets/allenbrandly.png';
import tts from '../assets/tts.jpeg';
import ardetem from '../assets/ardetem.jpeg';
import danfoss from '../assets/danfoss.png';
import himoinsa from '../assets/himoinsa.png';
import arken from '../assets/arken.png';
// manquants : schneider, cefem, ultraflux (utiliser logo.png)

const clientLogos = {
  'taqa morocco': taqamorocco,
  'ocp': ocp,
  'lafarge': lafarge,
  "office national de l'electricite": officenationaldelelectricite,
  'sosipo': sosipo,
  'copag': copag,
  'marsamaroc': marsamaroc,
  'cosumar': cosuar,
  'ramsa': ramsa,
  'ormvah': ormvah,
  'somas': somas,
};
const partnerLogos = {
  'shneider electric': schneider,
  'siemens': siemens,
  'abb': abb,
  'allen bradley': allenbrandly,
  'tts': tts,
  'ardetem': ardetem,
  'danfoss': danfoss,
  'himoinsa': himoinsa,
  'arken': arken,
};

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [animatedStats, setAnimatedStats] = useState({ projects: 0, power: 0, systems: 0 });
  const [isVisible, setIsVisible] = useState(false);

  const productCategories = [
    {
      icon: Cpu,
      title: "Automatisme",
      description: "Solutions complètes de contrôle industriel",
      image: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800",
      products: [
        "Systèmes Contrôle-commande industriel (API)",
        "Télégestion et Supervision",
        "Instrumentation et Régulation",
        "Armoires automates",
        "Pupitres de commande et terminaux IHM",
        "Sondes de température",
        "Transmetteurs de niveau et pression",
        "Vannes & Électrovannes"
      ],
      gradient: "from-blue-500 to-cyan-500",
      stats: { projects: 150, efficiency: 95, satisfaction: 98 }
    },
    {
      icon: Power,
      title: "Variateurs de Vitesse",
      description: "Gamme complète pour tous types de moteurs",
      image: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800",
      products: [
        "Basse Tension: 0.09 à 1.9MW",
        "Moyenne Tension: 3 à 6.6MW",
        "Courant alternatif / continu",
        "Solutions centralisées et décentralisées",
        "Fonctions automates intégrées",
        "Applications: Pompage, positionnement, synchronisation"
      ],
      gradient: "from-purple-500 to-pink-500",
      stats: { projects: 120, efficiency: 92, satisfaction: 96 }
    },
    {
      icon: Gauge,
      title: "Gestion d'Énergie",
      description: "Maîtrisez vos consommations énergétiques",
      image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800",
      products: [
        "Compteurs d'énergie intelligents",
        "Analyseurs de réseau avancés",
        "Monitoring en temps réel",
        "Optimisation des consommations",
        "Rapports détaillés",
        "Alertes automatiques"
      ],
      gradient: "from-green-500 to-emerald-500",
      stats: { projects: 80, efficiency: 88, satisfaction: 94 }
    },
    {
      icon: Battery,
      title: "Groupes Électrogènes",
      description: "Solutions de secours et principales",
      image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800",
      products: [
        "Puissance: 5KVA à 2200KVA",
        "Fonctionnement principal ou secours",
        "Motorisation: PERKINS, CUMMINS, VOLVO",
        "Alternateurs: LEROY SOMER, STAMFORD",
        "Tableaux de contrôle automatique",
        "Solutions mobiles et stationnaires"
      ],
      gradient: "from-orange-500 to-red-500",
      stats: { projects: 100, efficiency: 90, satisfaction: 97 }
    }
  ];

  const filteredProducts = productCategories[selectedCategory].products.filter(product =>
    product.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate stats
          const stats = productCategories[selectedCategory].stats;
          const duration = 2000;
          const steps = 60;
          const increment = duration / steps;
          
          let step = 0;
          const timer = setInterval(() => {
            step++;
            const progress = step / steps;
            setAnimatedStats({
              projects: Math.floor(stats.projects * progress),
              power: Math.floor(stats.efficiency * progress),
              systems: Math.floor(stats.satisfaction * progress)
            });
            
            if (step >= steps) clearInterval(timer);
          }, increment);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('products');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, [selectedCategory]);

  return (
    <section id="products" className="py-24 bg-white dark:bg-gradient-to-br dark:from-slate-900 dark:via-black dark:to-slate-800 relative overflow-hidden text-gray-900 dark:text-white transition-colors duration-500">
      {/* Interactive background elements */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-200/20 dark:bg-purple-400/20 rounded-full animate-pulse cursor-pointer hover:bg-purple-400/60 hover:scale-500 transition-all duration-300"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
            onClick={(e) => {
              // Create ripple effect
              const ripple = document.createElement('div');
              ripple.className = 'absolute w-32 h-32 border border-purple-200/30 dark:border-purple-400/30 rounded-full animate-ping pointer-events-none';
              ripple.style.left = '-64px';
              ripple.style.top = '-64px';
              e.currentTarget.appendChild(ripple);
              setTimeout(() => ripple.remove(), 1000);
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-100/20 to-cyan-100/20 dark:from-purple-500/30 dark:to-cyan-500/30 rounded-full border border-purple-500/30 mb-8 backdrop-blur-sm hover:from-purple-500/30 hover:to-cyan-500/30 transition-all duration-300 cursor-pointer group">
            <Cpu className="w-5 h-5 text-purple-500 dark:text-purple-400 mr-2 group-hover:rotate-180 transition-transform duration-500" />
            <span className="text-purple-900 dark:text-purple-300 text-sm font-medium">Technologies de Pointe</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold text-black mb-8 dark:text-white">
            Nos <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">Produits</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Gamme complète de solutions industrielles haute performance, intégrateur officiel Schneider Electric
          </p>
        </div>

        {/* Interactive Category Selector */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {productCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(index)}
                className={`group flex items-center px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === index
                    ? `bg-gradient-to-r ${category.gradient} text-white shadow-lg`
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-blue-500/20'
                }`}
              >
                <category.icon className={`w-5 h-5 mr-2 transition-transform duration-300 ${selectedCategory === index ? 'rotate-12' : 'group-hover:rotate-12'}`} />
                {category.title}
              </button>
            ))}
          </div>

          {/* Interactive Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher un produit..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-blue-500/20 rounded-2xl text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-all duration-300 backdrop-blur-sm"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-200"
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* Interactive Product Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Product Details */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-blue-500/20 rounded-3xl p-10 hover:border-purple-500/40 transition-all duration-500">
              <div className="flex items-center mb-8">
                <div className={`w-20 h-20 bg-gradient-to-br ${productCategories[selectedCategory].gradient} rounded-2xl flex items-center justify-center mr-6 hover:scale-110 transition-transform duration-300 cursor-pointer`}>
                  {React.createElement(productCategories[selectedCategory].icon, { className: "w-10 h-10 text-white" })}
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {productCategories[selectedCategory].title}
                  </h3>
                  <p className="text-cyan-300 font-medium">
                    {productCategories[selectedCategory].description}
                  </p>
                </div>
              </div>

              {/* Animated Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-slate-900/50 rounded-xl hover:bg-slate-800/70 transition-all duration-300 cursor-pointer transform hover:scale-105">
                  <div className="text-3xl font-bold text-blue-400 mb-1 flex items-center justify-center">
                    {animatedStats.projects}+
                    <TrendingUp className="w-5 h-5 ml-1 animate-bounce" />
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">Projets</div>
                </div>
                <div className="text-center p-4 bg-slate-900/50 rounded-xl hover:bg-slate-800/70 transition-all duration-300 cursor-pointer transform hover:scale-105">
                  <div className="text-3xl font-bold text-purple-400 mb-1 flex items-center justify-center">
                    {animatedStats.power}%
                    <Star className="w-5 h-5 ml-1 animate-pulse" />
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">Efficacité</div>
                </div>
                <div className="text-center p-4 bg-slate-900/50 rounded-xl hover:bg-slate-800/70 transition-all duration-300 cursor-pointer transform hover:scale-105">
                  <div className="text-3xl font-bold text-cyan-400 mb-1 flex items-center justify-center">
                    {animatedStats.systems}%
                    <Zap className="w-5 h-5 ml-1 animate-pulse" />
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">Satisfaction</div>
                </div>
              </div>

              {/* Interactive Product List */}
              <div className="space-y-3">
                {filteredProducts.map((product, index) => (
                  <div
                    key={index}
                    className="group flex items-start p-4 bg-slate-900/50 rounded-xl hover:bg-slate-800/70 transition-all duration-300 cursor-pointer transform hover:translate-x-2"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = '0 0 20px rgba(59, 130, 246, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div className={`w-3 h-3 bg-gradient-to-r ${productCategories[selectedCategory].gradient} rounded-full mt-2 mr-4 flex-shrink-0 group-hover:animate-pulse group-hover:scale-150 transition-all duration-300`}></div>
                    <span className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-200">{product}</span>
                  </div>
                ))}
              </div>

              {searchTerm && filteredProducts.length === 0 && (
                <div className="text-center py-8">
                  <Filter className="w-12 h-12 text-gray-500 mx-auto mb-4" />
                  <p className="text-gray-400">Aucun produit trouvé pour "{searchTerm}"</p>
                </div>
              )}
            </div>
          </div>

          {/* Interactive Product Image */}
          <div className="relative">
            <div className="group bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-blue-500/20 rounded-3xl overflow-hidden hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500">
              <div className="relative h-96 overflow-hidden">
                <img 
                  src={productCategories[selectedCategory].image} 
                  alt={productCategories[selectedCategory].title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                
                {/* Interactive overlay elements */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    {React.createElement(productCategories[selectedCategory].icon, { className: "w-16 h-16 text-white mx-auto mb-4" })}
                    <p className="text-white text-center font-semibold">
                      {productCategories[selectedCategory].title}
                    </p>
                  </div>
                </div>

                {/* Floating particles */}
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-white/30 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      top: `${20 + Math.random() * 60}%`,
                      left: `${20 + Math.random() * 60}%`,
                      animationDelay: `${Math.random() * 2}s`
                    }}
                  />
                ))}
              </div>

              {/* Interactive progress indicator */}
              <div className={`h-2 bg-gradient-to-r ${productCategories[selectedCategory].gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-300`}>
                <div className="h-full bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Interactive Partners Section */}
        {/* SUPPRIMÉ : Section Partenaires Technologiques */}
        
        {/* Clients Principaux Slider - style partenaires */}
        <div className="mt-20 mb-20">
          <div className="bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10 border border-blue-500/30 rounded-3xl p-12 backdrop-blur-sm relative overflow-hidden hover:border-purple-500/50 transition-all duration-500 group">
            {/* Interactive background pattern */}
            <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-4 h-4 border border-blue-400 rotate-45 animate-pulse"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`
                  }}
                />
              ))}
            </div>
            <div className="relative z-10">
              <h3 className="text-4xl font-bold text-black mb-8 text-center group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                Clients Principaux
              </h3>
              {/* Slider for clients */}
              <div className="overflow-hidden w-full">
                <div className="flex animate-scroll-x whitespace-nowrap gap-8 py-4">
                  {Object.entries(clientLogos).map(([client, img], idx) => (
                    <div key={client+idx} className="flex-shrink-0 w-32 h-32 bg-white/90 rounded-xl flex items-center justify-center text-blue-700 font-bold text-center shadow-lg border border-blue-200 mx-2">
                      <img src={img} alt={client} className="h-16 object-contain" />
                    </div>
                  ))}
                  {/* Duplicate for infinite effect */}
                  {Object.entries(clientLogos).map(([client, img], idx) => (
                    <div key={client+"-dup"+idx} className="flex-shrink-0 w-32 h-32 bg-white/90 rounded-xl flex items-center justify-center text-blue-700 font-bold text-center shadow-lg border border-blue-200 mx-2">
                      <img src={img} alt={client} className="h-16 object-contain" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Section Partenaires restaurée - même style que clients */}
        <div className="mt-16 mb-20">
          <div className="bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10 border border-blue-500/30 rounded-3xl p-12 backdrop-blur-sm relative overflow-hidden hover:border-purple-500/50 transition-all duration-500 group">
            {/* Interactive background pattern */}
            <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-4 h-4 border border-blue-400 rotate-45 animate-pulse"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`
                  }}
                />
              ))}
            </div>
            <div className="relative z-10">
              <h3 className="text-4xl font-bold text-black mb-8 text-center group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                Partenaires
              </h3>
              {/* Slider for partners - même style que clients */}
              <div className="overflow-hidden w-full">
                <div className="flex animate-scroll-x whitespace-nowrap gap-8 py-4">
                  {Object.entries(partnerLogos).map(([partner, img], idx) => (
                    <div key={partner+idx} className="flex-shrink-0 w-32 h-32 bg-white/90 rounded-xl flex items-center justify-center text-blue-700 font-bold text-center shadow-lg border border-blue-200 mx-2">
                      <img src={img} alt={partner} className="h-16 object-contain" />
                    </div>
                  ))}
                  {/* Duplicate for infinite effect */}
                  {Object.entries(partnerLogos).map(([partner, img], idx) => (
                    <div key={partner+"-dup"+idx} className="flex-shrink-0 w-32 h-32 bg-white/90 rounded-xl flex items-center justify-center text-blue-700 font-bold text-center shadow-lg border border-blue-200 mx-2">
                      <img src={img} alt={partner} className="h-16 object-contain" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* SUPPRIMÉ : Section Partenaires (slider) */}
      </div>
    </section>
  );
};

export default Products;