import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Maria Fernanda",
    age: "58 anos",
    text: "William é um profissional excepcional. Minha mãe se recuperou do AVC muito mais rápido do que esperávamos, com muito carinho e dedicação.",
    avatar: "https://i.pravatar.cc/150?u=maria"
  },
  {
    name: "Carlos Eduardo",
    age: "67 anos",
    text: "Tratamento domiciliar de altíssima qualidade. William chegou pontual, foi atencioso e os resultados vieram rápido. Recomendo muito!",
    avatar: "https://i.pravatar.cc/150?u=carlos"
  },
  {
    name: "Ana Paula",
    age: "45 anos",
    text: "Meu pai tinha muita tontura e em poucas sessões já estava muito melhor. Atendimento humanizado e eficaz. Nota 10!",
    avatar: "https://i.pravatar.cc/150?u=ana"
  }
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-primary-dark/50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-12 md:mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-display text-center">O Que Dizem Meus Pacientes</h2>
          <div className="flex items-center space-x-2">
            <span className="font-bold text-xl">5,0</span>
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="glass p-8 rounded-[32px] relative"
            >
              <Quote className="absolute top-6 right-8 text-primary-teal/20" size={40} />
              <div className="flex text-yellow-500 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-text-secondary leading-relaxed mb-8 italic">
                "{t.text}"
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full border border-primary-teal/20 bg-primary-teal/5 flex items-center justify-center text-primary-teal font-semibold text-sm">
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-bold">{t.name}</div>
                  <div className="text-xs text-text-secondary uppercase tracking-widest">{t.age}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
