import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Zap, Network, CheckCircle, AlertCircle, User, Building, MessageSquare } from 'lucide-react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');
  const [focusedField, setFocusedField] = useState(null);
  const [typingEffect, setTypingEffect] = useState('');
  const [errors, setErrors] = useState({});

  const typingText = "Connectons-nous pour l'Avenir Industriel...";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setTypingEffect(typingText.slice(0, index));
      index++;
      if (index > typingText.length) {
        index = 0;
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

    const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrors({});
    try {
      await axios.post('http://127.0.0.1:8000/api/contact', formData);
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch (error) {
      setIsSubmitting(false);
      setSubmitStatus('error');
      if (error.response && error.response.data && error.response.data.errors) {
        setErrors(error.response.data.errors);
        console.log(error.response.data.errors);
      }
    }
  };

  const openGoogleMaps = () => {
    window.open('https://www.google.com/maps?q=33.596557,-7.595056', '_blank');
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresse",
      content: (
        <a
          href="https://www.google.com/maps?q=33.596543,-7.595135"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center font-semibold text-blue-400 hover:text-blue-300 underline hover:no-underline transition-colors duration-200 text-base md:text-lg"
        >
          <MapPin className="w-5 h-5 mr-2 text-blue-500" />
          13 Rue Rocroy 7 ème étage, Bélvédère - Casablanca
        </a>
      ),
      subtitle: "Spécialiste en automatisme et électricité industrielle",
      gradient: "from-blue-500 to-cyan-500",
      image: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      icon: Mail,
      title: "Email",
      content: "prosystem@prosystem.ma",
      subtitle: "Réponse sous 24h",
      gradient: "from-purple-500 to-pink-500",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      icon: Phone,
      title: "Téléphone",
      content: "05222-40050",
      subtitle: "Support technique disponible",
      gradient: "from-green-500 to-emerald-500",
      image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-white dark:bg-gradient-to-br dark:from-slate-900 dark:via-black dark:to-slate-800 relative overflow-hidden text-gray-900 dark:text-white transition-colors duration-500">
      {/* Interactive background elements */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 dark:bg-blue-400/20 rounded-full animate-pulse cursor-pointer hover:bg-blue-400/60 hover:scale-300 transition-all duration-300"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
            onClick={(e) => {
              // Create expanding wave effect
              const wave = document.createElement('div');
              wave.className = 'absolute w-20 h-20 border border-blue-400/30 rounded-full animate-ping pointer-events-none';
              wave.style.left = '-40px';
              wave.style.top = '-40px';
              e.currentTarget.appendChild(wave);
              setTimeout(() => wave.remove(), 1000);
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-[60%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 dark:from-blue-500/30 dark:to-purple-500/30 rounded-full border border-blue-500/30 mb-8 backdrop-blur-sm hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300 cursor-pointer group">
            <Mail className="w-5 h-5 text-blue-400 mr-2 group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-blue-300 text-sm font-medium">{typingEffect}</span>
            <span className="animate-pulse">|</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-8">
            Contactez <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Nous</span>
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            PRO SYSTEM reste à votre disposition pour étudier vos besoins et vous présenter les solutions technologiques les plus adaptées
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Enhanced Interactive Contact Information */}
          <div className="space-y-10">
            <div className="bg-gradient-to-br from-slate-100/60 to-slate-200/60 dark:from-slate-800/60 dark:to-slate-900/60 backdrop-blur-xl border border-blue-500/20 rounded-3xl p-10 hover:border-purple-500/40 transition-all duration-300">
              <div className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-100 via-cyan-100 to-purple-100 dark:from-blue-500 dark:via-cyan-500 dark:to-purple-500">
                <MapPin className="w-7 h-7 text-blue-500 dark:text-white drop-shadow" />
                <span className="text-blue-900 dark:text-white text-2xl font-bold tracking-wide">Adresse</span>
              </div>
              <div className="relative z-10 px-8 py-6 flex flex-col items-start gap-3">
                <div className="bg-slate-200/80 border border-blue-400/30 dark:bg-slate-800/80 rounded-xl px-6 py-4 shadow-md flex flex-col md:flex-row md:items-center gap-2 w-full">
                  <span className="text-lg md:text-xl font-semibold text-blue-900 dark:text-blue-200 flex-1">
                    13 Rue Rocroy 7 ème étage, Bélvédère - Casablanca
                  </span>
                  <a
                    href="https://www.google.com/maps?q=33.596543,-7.595135"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-400 to-cyan-400 dark:from-blue-500 dark:to-cyan-500 text-white font-medium rounded-lg shadow hover:from-blue-600 hover:to-cyan-600 transition-colors duration-200 mt-2 md:mt-0"
                  >
                    <MapPin className="w-5 h-5" />
                    Voir sur la carte
                  </a>
                </div>
              </div>
            </div>

            {/* Enhanced Interactive Expertise Areas */}
            <div className="bg-gradient-to-br from-slate-100/60 to-slate-200/60 dark:from-slate-800/60 dark:to-slate-900/60 backdrop-blur-xl border border-blue-500/20 rounded-3xl p-10 hover:border-purple-500/40 transition-all duration-300">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                <div className="w-2 h-8 bg-gradient-to-b from-purple-400 to-cyan-400 rounded-full mr-4 animate-pulse"></div>
                Domaines d'Expertise
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "Automatisme industriel", image: "https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=200" },
                  { name: "Électricité MT/BT", image: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=200" },
                  { name: "Supervision", image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=200" },
                  { name: "Télégestion", image: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=200" },
                  { name: "Maintenance", image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=200" },
                  { name: "Formation", image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200" },
                  { name: "Groupes électrogènes", image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=200" },
                  { name: "Gestion d'énergie", image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=200" }
                ].map((domain, index) => (
                  <div 
                    key={index} 
                    className="group relative flex items-center space-x-3 p-4 bg-slate-900/50 rounded-xl hover:bg-slate-800/70 transition-all duration-300 cursor-pointer transform hover:translate-x-2 overflow-hidden"
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0 opacity-5 group-hover:opacity-15 transition-opacity duration-300">
                      <img 
                        src={domain.image} 
                        alt={domain.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="relative z-10 flex items-center space-x-3">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse group-hover:scale-150 transition-transform duration-300"></div>
                      <span className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300">{domain.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Interactive Contact Form */}
          <div className="bg-gradient-to-br from-slate-100/60 to-slate-200/60 dark:from-slate-800/60 dark:to-slate-900/60 backdrop-blur-xl border border-blue-500/20 rounded-3xl p-10 hover:border-purple-500/40 transition-all duration-300 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-4 left-4 w-8 h-8 border-2 border-blue-400 rotate-45 animate-pulse"></div>
              <div className="absolute bottom-4 right-4 w-6 h-6 border-2 border-purple-400 rotate-12 animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 right-1/4 w-12 h-12 border border-cyan-400 rounded-full animate-pulse delay-500"></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                <div className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-400 rounded-full mr-4 animate-pulse"></div>
                Demande de Devis
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-900 dark:text-gray-300 mb-3 flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      Nom
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-6 py-4 bg-white dark:bg-slate-900/50 border rounded-2xl text-black dark:text-white placeholder-gray-400 focus:outline-none transition-all duration-300 backdrop-blur-sm ${
                        focusedField === 'name' ? 'border-purple-500 shadow-lg shadow-purple-500/20' : 'border-blue-500/20'
                      } ${errors.name ? 'border-red-500' : ''}`}
                      placeholder="Votre nom"
                      required
                    />
                    {focusedField === 'name' && (
                      <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                    )}
                    {errors.name && (
                      <div className="text-red-500 text-xs mt-1">{errors.name[0]}</div>
                    )}
                  </div>
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-900 dark:text-gray-300 mb-3 flex items-center">
                      <Building className="w-4 h-4 mr-2" />
                      Entreprise
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('company')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-6 py-4 bg-white dark:bg-slate-900/50 border rounded-2xl text-black dark:text-white placeholder-gray-400 focus:outline-none transition-all duration-300 backdrop-blur-sm ${
                        focusedField === 'company' ? 'border-purple-500 shadow-lg shadow-purple-500/20' : 'border-blue-500/20'
                      } ${errors.company ? 'border-red-500' : ''}`}
                      placeholder="Nom de l'entreprise"
                    />
                    {focusedField === 'company' && (
                      <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                    )}
                    {errors.company && (
                      <div className="text-red-500 text-xs mt-1">{errors.company[0]}</div>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-900 dark:text-gray-300 mb-3 flex items-center">
                      <Mail className="w-4 h-4 mr-2" />
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-6 py-4 bg-white dark:bg-slate-900/50 border rounded-2xl text-black dark:text-white placeholder-gray-400 focus:outline-none transition-all duration-300 backdrop-blur-sm text-base md:text-sm lg:text-base ${
                        focusedField === 'email' ? 'border-purple-500 shadow-lg shadow-purple-500/20' : 'border-blue-500/20'
                      } ${errors.email ? 'border-red-500' : ''}`}
                      placeholder="votre@email.com"
                      required
                      style={{ fontSize: '0.95rem', minWidth: '0', width: '100%' }}
                    />
                    {focusedField === 'email' && (
                      <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                    )}
                    {errors.email && (
                      <div className="text-red-500 text-xs mt-1">{errors.email[0]}</div>
                    )}
                  </div>
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-900 dark:text-gray-300 mb-3 flex items-center">
                      <Phone className="w-4 h-4 mr-2" />
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-6 py-4 bg-white dark:bg-slate-900/50 border rounded-2xl text-black dark:text-white placeholder-gray-400 focus:outline-none transition-all duration-300 backdrop-blur-sm ${
                        focusedField === 'phone' ? 'border-purple-500 shadow-lg shadow-purple-500/20' : 'border-blue-500/20'
                      } ${errors.phone ? 'border-red-500' : ''}`}
                      placeholder="+212 ..."
                    />
                    {focusedField === 'phone' && (
                      <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                    )}
                    {errors.phone && (
                      <div className="text-red-500 text-xs mt-1">{errors.phone[0]}</div>
                    )}
                  </div>
                </div>

                <div className="relative">
                  <label className="block text-sm font-medium text-gray-900 dark:text-gray-300 mb-3">Service demandé</label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('service')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-6 py-4 bg-white dark:bg-slate-900/50 border rounded-2xl text-black dark:text-white focus:outline-none transition-all duration-300 backdrop-blur-sm ${
                      focusedField === 'service' ? 'border-purple-500 shadow-lg shadow-purple-500/20' : 'border-blue-500/20'
                    } ${errors.service ? 'border-red-500' : ''}`}
                  >
                    <option value="">Sélectionnez un service</option>
                    <option value="automatisme">Automatisme industriel</option>
                    <option value="electricite">Installations électriques</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="formation">Formation</option>
                    <option value="conseil">Ingénierie & Conseil</option>
                  </select>
                  {focusedField === 'service' && (
                    <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                  )}
                  {errors.service && (
                    <div className="text-red-500 text-xs mt-1">{errors.service[0]}</div>
                  )}
                </div>

                <div className="relative">
                  <label className="block text-sm font-medium text-gray-900 dark:text-gray-300 mb-3 flex items-center">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    rows={5}
                    className={`w-full px-6 py-4 bg-white dark:bg-slate-900/50 border rounded-2xl text-black dark:text-white placeholder-gray-400 focus:outline-none transition-all duration-300 resize-none backdrop-blur-sm ${
                      focusedField === 'message' ? 'border-purple-500 shadow-lg shadow-purple-500/20' : 'border-blue-500/20'
                    } ${errors.message ? 'border-red-500' : ''}`}
                    placeholder="Décrivez votre projet ou vos besoins..."
                    required
                  ></textarea>
                  {focusedField === 'message' && (
                    <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                  )}
                  {errors.message && (
                    <div className="text-red-500 text-xs mt-1">{errors.message[0]}</div>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-10 py-5 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center border border-blue-400/20 relative overflow-hidden ${
                    isSubmitting
                      ? 'bg-gray-600 cursor-not-allowed'
                      : submitStatus === 'success'
                      ? 'bg-green-600 hover:bg-green-700'
                      : 'bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 hover:shadow-blue-500/30 dark:from-blue-600 dark:via-purple-600 dark:to-blue-700 dark:hover:from-blue-700 dark:hover:via-purple-700 dark:hover:to-blue-800'
                  }`}
                >
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  
                  <span className="flex items-center relative z-10 text-white">
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                        Envoi en cours...
                      </>
                    ) : submitStatus === 'success' ? (
                      <>
                        <CheckCircle className="w-6 h-6 mr-3" />
                        Message envoyé !
                      </>
                    ) : (
                      <>
                        Envoyer la demande
                        <Send className="ml-3 w-6 h-6" />
                      </>
                    )}
                  </span>
                </button>

                {submitStatus === 'success' && (
                  <div className="text-center p-4 bg-green-500/20 border border-green-500/30 rounded-2xl">
                    <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
                    <p className="text-green-300">Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.</p>
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="text-center p-4 bg-red-500/20 border border-red-500/30 rounded-2xl mt-4">
                    <AlertCircle className="w-8 h-8 text-red-400 mx-auto mb-2" />
                    <p className="text-red-300">Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer plus tard.</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Enhanced Interactive Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-50/10 via-purple-50/10 to-cyan-50/10 dark:from-blue-600/10 dark:via-purple-600/10 dark:to-cyan-600/10 border border-blue-500/30 rounded-3xl p-12 backdrop-blur-sm relative overflow-hidden group hover:border-purple-500/50 transition-all duration-500">
            {/* Interactive background elements */}
            <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
              {[...Array(20)].map((_, i) => (
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
              <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                Prêt à Transformer votre Infrastructure ?
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto text-lg group-hover:text-gray-200 transition-colors duration-300">
                Rejoignez les leaders industriels qui font confiance à PRO SYSTEM pour leurs solutions d'automatisme
              </p>
              <div className="flex items-center justify-center space-x-8">
                {[
                  { value: "25+", label: "Années d'Expérience", icon: Zap, color: "blue" },
                  { value: "500+", label: "Projets Réalisés", icon: CheckCircle, color: "purple" },
                  { value: "24/7", label: "Support Technique", icon: Clock, color: "cyan" }
                ].map((stat, index) => (
                  <div key={index} className="text-center group/stat cursor-pointer transform hover:scale-110 transition-all duration-300">
                    <div className={`w-16 h-16 bg-gradient-to-br from-${stat.color}-200 to-${stat.color}-300 dark:from-${stat.color}-500 dark:to-${stat.color}-600 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover/stat:rotate-12 transition-transform duration-300`}>
                      <stat.icon className={`w-8 h-8 ${stat.color === 'blue' ? 'text-blue-500' : stat.color === 'purple' ? 'text-purple-500' : 'text-cyan-500'} dark:text-white`} />
                    </div>
                    <div className={`text-3xl font-bold text-${stat.color}-700 dark:text-${stat.color}-400 mb-1 group-hover/stat:animate-pulse`}>{stat.value}</div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm group-hover/stat:text-gray-300 transition-colors duration-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;