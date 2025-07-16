import React from 'react';
import { Shield, Award, CheckCircle, Star, Zap, Globe } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      icon: Shield,
      title: "ISO 9001:2008",
      description: "Système de management de la qualité",
      details: "Installation et fourniture des solutions d'électricité industrielle et d'automatisme",
      certifier: "SGS International",
      color: "from-green-500 to-emerald-500",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: Award,
      title: "ISO 14001",
      description: "Système de management de l'environnement",
      details: "Engagement environnemental et développement durable",
      certifier: "SGS International",
      color: "from-blue-500 to-cyan-500",
      image: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: CheckCircle,
      title: "OHSAS 18001",
      description: "Système de management de la sécurité au travail",
      details: "Sécurité et santé au travail selon les standards internationaux",
      certifier: "SGS International",
      color: "from-orange-500 to-red-500",
      image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const agreements = [
    {
      title: "Agréé Électricité MT/BT",
      organization: "O.N.E.E",
      description: "Moyenne et Basse Tension",
      icon: Zap
    },
    {
      title: "Agréé MT/HT",
      organization: "LYDEC",
      description: "Moyenne et Haute Tension",
      icon: Shield
    },
    {
      title: "Qualifié Ministère",
      organization: "Équipement et Transport",
      description: "Électricité, Automatisme, Hydraulique",
      icon: Globe
    }
  ];

  return (
    <section id="certifications" className="py-24 bg-white dark:bg-gradient-to-br dark:from-slate-900 dark:via-black dark:to-slate-800 relative overflow-hidden text-gray-900 dark:text-white transition-colors duration-500">
      {/* Futuristic background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-600/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating certification badges */}
      <div className="absolute inset-0 opacity-10">
        <Award className="absolute top-1/4 right-1/4 w-16 h-16 text-blue-400 animate-pulse" />
        <Shield className="absolute bottom-1/4 left-1/4 w-12 h-12 text-green-400 animate-pulse delay-700" />
        <CheckCircle className="absolute top-3/4 right-1/3 w-14 h-14 text-orange-400 animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full border border-green-500/30 mb-8 backdrop-blur-sm">
            <Shield className="w-5 h-5 text-green-400 mr-2" />
            <span className="text-green-300 text-sm font-medium">Excellence Certifiée Internationalement</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold text-black mb-8 dark:text-white">
            Nos <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Reconnaissance internationale de notre expertise et engagement qualité, sécurité et environnement
          </p>
        </div>

        {/* ISO Certifications with Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-blue-500/20 rounded-3xl overflow-hidden hover:border-green-500/40 hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-500 transform hover:-translate-y-4"
            >
              {/* Certification Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent"></div>
                
                {/* Floating Icon */}
                <div className={`absolute top-4 right-4 w-16 h-16 bg-gradient-to-br ${cert.color} rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300`}>
                  <cert.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-white text-center mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
                  {cert.title}
                </h3>
                <p className="text-blue-300 text-center mb-4 font-semibold">{cert.description}</p>
                <p className="text-gray-400 text-center text-sm mb-6 leading-relaxed">{cert.details}</p>
                
                <div className="text-center">
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30">
                    <Star className="w-4 h-4 mr-2 text-yellow-400" />
                    <span className="text-blue-300 text-sm">Certifié par {cert.certifier}</span>
                  </div>
                </div>

                {/* Futuristic bottom accent */}
                <div className={`mt-6 h-1 bg-gradient-to-r ${cert.color} rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Agreements Section */}
        <div className="bg-gradient-to-r from-slate-900/60 to-slate-800/60 backdrop-blur-xl border border-blue-500/20 rounded-3xl p-12 mb-16">
          <h3 className="text-4xl font-bold text-white text-center mb-12">Agréments & Qualifications</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {agreements.map((agreement, index) => (
              <div
                key={index}
                className="group bg-slate-800/50 border border-blue-500/20 rounded-2xl p-8 hover:border-purple-500/40 hover:bg-slate-700/50 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <agreement.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-white text-center mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                  {agreement.title}
                </h4>
                <p className="text-blue-300 font-medium text-center mb-2">{agreement.organization}</p>
                <p className="text-gray-400 text-sm text-center">{agreement.description}</p>

                {/* Status indicator */}
                <div className="flex items-center justify-center mt-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse mr-2"></div>
                  <span className="text-green-400 text-xs font-medium">ACTIF</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Quality Management System */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-green-600/10 border border-blue-500/30 rounded-3xl p-12 backdrop-blur-sm relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-6 left-6 w-12 h-12 border-2 border-blue-400 rounded-full"></div>
              <div className="absolute bottom-6 right-6 w-8 h-8 border-2 border-green-400 rotate-45"></div>
              <div className="absolute top-1/2 right-1/4 w-16 h-16 border border-purple-400 rounded-full"></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-4xl font-bold text-white mb-6">Système de Management QSE</h3>
              <p className="text-gray-300 max-w-5xl mx-auto leading-relaxed text-lg">
                PRO SYSTEM accompagne ses clients dans l'étude, le choix de solutions, les réalisations et les services après-vente 
                dans le cadre d'un système de management Qualité, Sécurité et Environnement rigoureux et certifié selon les plus hauts standards internationaux.
              </p>
              
              <div className="mt-8 flex items-center justify-center space-x-8">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-medium">Qualité</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-blue-400 rounded-full animate-pulse delay-300"></div>
                  <span className="text-blue-400 font-medium">Sécurité</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-purple-400 rounded-full animate-pulse delay-600"></div>
                  <span className="text-purple-400 font-medium">Environnement</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;