import { motion } from 'motion/react';
import { Check } from 'lucide-react';

export default function About() {
  const differentials = [
    'Atendimento exclusivamente domiciliar',
    'Abordagem humanizada e personalizada',
    'Especialista em neurologia e dor',
    'Regiões: Cambuí, Taquaral, Sousas e arredores'
  ];

  return (
    <section id="sobre" className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-1.5 h-3/4 bg-primary-teal rounded-full hidden md:block" />
            <div className="rounded-[40px] overflow-hidden border border-white/5 shadow-2xl max-w-md mx-auto lg:max-w-none">
              <img
                src="https://i.ibb.co/d4j8cxjZ/Whats-App-Image-2026-05-23-at-06-07-38.jpg"
                alt="William Silva"
                className="w-full object-cover aspect-[4/5] hover:scale-105 transition-transform duration-700"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Background Decoration */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary-teal/10 blur-3xl rounded-full -z-10" />
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-5xl font-display mb-6">Quem é William Silva</h2>
              <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-4 font-light">
                Fisioterapeuta especializado em neurologia e atendimento domiciliar, 
                atuando em Campinas há anos com compromisso com a qualidade e 
                humanização no cuidado.
              </p>
              <p className="text-text-secondary text-base md:text-lg leading-relaxed font-light">
                Meu objetivo é levar reabilitação de alto nível diretamente para sua casa, 
                com um tratamento personalizado que respeita suas limitações e 
                potencializa sua recuperação.
              </p>
            </div>

            <div className="grid gap-4">
              {differentials.map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-teal/20 flex items-center justify-center">
                    <Check size={14} className="text-primary-teal" />
                  </div>
                  <span className="text-sm md:text-base font-medium tracking-wide">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/5519988665949"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full sm:w-auto text-center bg-primary-teal text-primary-dark px-10 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_20px_rgba(45,212,191,0.3)] hover:scale-105 transition-all"
              >
                Agendar Avaliação
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
