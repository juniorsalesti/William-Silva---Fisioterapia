import { motion } from 'motion/react';
import { Brain, Home, Activity, RotateCcw, Zap, Scale } from 'lucide-react';

const specialties = [
  {
    icon: <Brain />,
    title: 'Fisioterapia Neurofuncional',
    desc: 'Tratamento especializado para condições neurológicas como pós-AVC, Parkinson e distúrbios do movimento.'
  },
  {
    icon: <Home />,
    title: 'Atendimento Domiciliar',
    desc: 'Fisioterapia completa realizada no conforto e segurança da sua casa.'
  },
  {
    icon: <Activity />,
    title: 'Tratamento da Dor',
    desc: 'Técnicas modernas para alívio e controle da dor crônica e aguda.'
  },
  {
    icon: <RotateCcw />,
    title: 'Reabilitação Pós-AVC',
    desc: 'Reabilitação progressiva com foco em funcionalidade e independência.'
  },
  {
    icon: <Scale />,
    title: 'Reabilitação Vestibular',
    desc: 'Tratamento de tontura, vertigem e desequilíbrio postural.'
  },
  {
    icon: <Zap />,
    title: 'Neuromodulação Não Invasiva',
    desc: 'Técnicas avançadas para estimulação e recuperação neurológica.'
  }
];

export default function Specialties() {
  return (
    <section id="especialidades" className="py-16 md:py-24 bg-primary-dark">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-12 md:mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display text-center"
          >
            O Que Eu Trato
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-1 bg-primary-teal rounded-full"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((spec, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass p-8 rounded-[24px] group border border-white/5 transition-all duration-300 glass-hover"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary-teal/10 flex items-center justify-center text-primary-teal mb-6 group-hover:scale-110 group-hover:bg-primary-teal group-hover:text-primary-dark transition-all duration-300">
                {spec.icon}
              </div>
              <h3 className="text-xl font-display mb-3 group-hover:text-primary-teal transition-colors">
                {spec.title}
              </h3>
              <p className="text-text-secondary leading-relaxed text-sm">
                {spec.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
