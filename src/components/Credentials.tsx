import { motion } from 'motion/react';
import { Star, CheckCircle, MapPin, Home } from 'lucide-react';

export default function Credentials() {
  const items = [
    { icon: <Star className="text-primary-teal" />, value: '5,0 ★', label: 'Avaliação Google' },
    { icon: <CheckCircle className="text-primary-teal" />, value: '3+', label: 'Avaliações verificadas' },
    { icon: <MapPin className="text-primary-teal" />, value: 'Campinas', label: 'Região atendida' },
    { icon: <Home className="text-primary-teal" />, value: 'Atendimento', label: 'Domiciliar & Humanizado' },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemAnim = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="border-y border-primary-teal/20 bg-primary-teal/[0.03] py-8 overflow-hidden">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-4"
      >
        {items.map((item, index) => (
          <motion.div key={index} variants={itemAnim} className="flex items-center space-x-3 text-center md:text-left min-w-[150px]">
            <div className="p-2 rounded-full bg-primary-teal/10">
              {item.icon}
            </div>
            <div>
              <div className="font-bold text-lg leading-tight">{item.value}</div>
              <div className="text-text-secondary text-xs uppercase tracking-wider">{item.label}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
