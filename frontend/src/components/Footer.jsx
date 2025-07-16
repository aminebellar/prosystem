import React from 'react';
import { Zap, Shield, Award, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-blue-500/20 transition-colors duration-500">
      <div className="w-[80%] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <Zap className="w-8 h-8 text-blue-400" />
                <div className="absolute inset-0 w-8 h-8 bg-blue-400/20 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">PRO SYSTEM</h3>
                <p className="text-xs text-blue-300">Industrial Automation Excellence</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Société spécialisée dans l'automatisme et l'électricité industrielle, intégrateur officiel 
              Schneider Electric avec plus de 25 ans d'expérience. Certifiée ISO 9001, ISO 14001 et OHSAS 18001.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 bg-slate-800/50 px-3 py-2 rounded-lg">
                <Shield className="w-4 h-4 text-green-400" />
                <span className="text-sm text-gray-300">ISO 9001</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-800/50 px-3 py-2 rounded-lg">
                <Award className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-gray-300">ISO 14001</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-800/50 px-3 py-2 rounded-lg">
                <Shield className="w-4 h-4 text-orange-400" />
                <span className="text-sm text-gray-300">OHSAS 18001</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                "Automatisme industriel",
                "Installations électriques",
                "Supervision & Contrôle",
                "Maintenance",
                "Ingénierie & Conseil",
                "Formation"
              ].map((service, index) => (
                <li key={index}>
                  <a href="/services" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">13 Rue Rocroy 7 ème étage, Bélvédère - Casablanca</p>
                  <p className="text-gray-500 text-xs">Automatisme & Électricité</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a href="mailto:info@prosystem.ma" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                prosystem@prosystem.ma
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">05222-40050</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-500/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 PRO SYSTEM. Tous droits réservés.
            </p>
            
            <div className="flex items-center space-x-6">
              <span className="text-gray-400 text-sm">Intégrateur officiel:</span>
              <div className="flex items-center space-x-4">
                <div className="bg-green-500/20 px-3 py-1 rounded-full">
                  <span className="text-green-400 text-xs font-semibold">Schneider Electric</span>
                </div>
                <div className="bg-blue-500/20 px-3 py-1 rounded-full">
                  <span className="text-blue-400 text-xs font-semibold">Alkance System</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;