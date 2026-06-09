import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-28 pb-16 lg:py-0 overflow-hidden">
      <ParticleBackground />
      
      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-center">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col space-y-6"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-primary-teal/30 bg-primary-teal/5 text-primary-teal text-sm font-medium w-fit animate-pulse-soft">
            <span className="text-lg">✦</span>
            <span>Fisioterapia de Alta Qualidade</span>
          </div>
          
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-[72px] leading-[1.1] tracking-tight">
            Recuperação e Cuidado <br />
            <span className="text-primary-teal italic">no Conforto do Seu Lar</span>
          </h1>
          
          <p className="text-text-secondary text-lg md:text-xl max-w-xl font-light leading-relaxed">
            Atendimento domiciliar humanizado e personalizado em Campinas para adultos e idosos. 
            Tratamento especializado em neurologia, dor e reabilitação.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="https://wa.me/5519988665949"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center space-x-2 bg-primary-teal text-primary-dark px-8 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_25px_rgba(45,212,191,0.5)] transition-all active:scale-95"
            >
              <span>Falar pelo WhatsApp</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#especialidades"
              className="flex items-center justify-center px-8 py-4 rounded-full border border-white/20 hover:bg-white/5 transition-colors font-medium"
            >
              Conhecer os serviços
            </a>
          </div>

          <div className="flex items-center space-x-3 pt-6">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" />
              ))}
            </div>
            <span className="text-sm font-semibold tracking-wide">5,0</span>
            <span className="text-sm text-text-secondary">| 3 avaliações no Google</span>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative group"
        >
          <div className="absolute -inset-4 bg-primary-teal/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="relative rounded-[40px] overflow-hidden border border-white/10 shadow-2xl glass">
            <img
              src="https://i.ibb.co/xqJBfnz6/Whats-App-Image-2026-05-23-at-07-46-23.jpg"
              alt="Fisioterapia Domiciliar"
              className="w-full h-full object-cover aspect-square md:aspect-[4/5] lg:aspect-square group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-6 right-6 glass px-6 py-3 rounded-2xl flex flex-col">
              <span className="text-primary-teal text-xs font-bold uppercase tracking-widest text-center">Atendimento</span>
              <span className="text-xl font-display">Domiciliar</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-50"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Conheça os serviços</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-px h-10 bg-gradient-to-b from-primary-teal to-transparent"
        />
      </motion.div>
    </section>
  );
}
