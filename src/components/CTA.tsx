import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contato" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="relative rounded-[32px] md:rounded-[48px] overflow-hidden bg-gradient-to-br from-[#0A2535] to-[#0D3345] p-8 md:p-24 text-center">
          {/* Animated Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary-teal/10 blur-[80px] md:blur-[120px] rounded-full animate-pulse-soft -z-0" />
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl md:text-6xl leading-tight"
            >
              Pronto para Começar Sua Recuperação?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/70 text-base md:text-xl font-light"
            >
              Entre em contato agora e agende sua avaliação domiciliar gratuita em Campinas.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="pt-4"
            >
              <a
                href="https://wa.me/5519988665949"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto items-center justify-center space-x-3 bg-white text-[#0D3345] px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-base md:text-xl hover:scale-105 hover:bg-primary-teal transition-all active:scale-95 group shadow-2xl"
              >
                <MessageCircle className="group-hover:rotate-12 transition-transform" />
                <span>Falar no WhatsApp agora</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
