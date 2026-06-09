import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

export default function Regions() {
  const regions = [
    'Cambuí', 'Taquaral', 'Sousas', 'Nova Campinas', 
    'Barão Geraldo', 'Região Central', 'e arredores'
  ];

  return (
    <section className="py-16 md:py-24 bg-primary-dark">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto glass p-6 md:p-12 rounded-[32px] md:rounded-[40px] text-center space-y-8">
          <div className="inline-flex p-3 rounded-2xl bg-primary-teal/10 text-primary-teal mb-4">
            <MapPin size={32} />
          </div>
          <h2 className="text-3xl md:text-4xl font-display">Atendo em Campinas e Região</h2>
          
          <div className="flex flex-wrap justify-center gap-3">
            {regions.map((region, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="px-6 py-2 rounded-full border border-primary-teal/30 text-sm font-medium hover:bg-primary-teal hover:text-primary-dark transition-all cursor-default"
              >
                {region}
              </motion.span>
            ))}
          </div>

          <div className="pt-6">
            <p className="text-text-secondary mb-6 italic">"Atendimento domiciliar — eu vou até você"</p>
            <a
              href="https://wa.me/5519988665949"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-teal font-bold hover:underline"
            >
              Verificar disponibilidade na sua região →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
