import { Instagram, Phone, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-primary-dark pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="font-display text-2xl">William Silva</span>
              <span className="text-primary-teal text-xs uppercase tracking-widest font-medium">Fisioterapia</span>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
              Cuidado especializado onde você precisa. Reabilitação humanizada com foco em resultados reais.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-primary-teal">Navegação</h4>
            <ul className="space-y-4 text-sm text-text-secondary">
              {['Início', 'Especialidades', 'Sobre', 'Depoimentos', 'Contato'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="hover:text-primary-teal transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-primary-teal">Contato</h4>
            <ul className="space-y-4 text-sm text-text-secondary">
              <li className="flex items-center space-x-3">
                <Phone size={16} className="text-primary-teal" />
                <span>(19) 98866-5949</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin size={16} className="text-primary-teal" />
                <span>Campinas – SP</span>
              </li>
              <li className="flex items-center space-x-3">
                <Clock size={16} className="text-primary-teal" />
                <span>Atendimento até 19h</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-primary-teal">Social</h4>
            <a
              href="https://instagram.com/fisiowilliamsilva"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-text-secondary hover:text-primary-teal transition-colors"
            >
              <Instagram size={20} />
              <span className="text-sm">@fisiowilliamsilva</span>
            </a>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-text-secondary text-xs">
            © {year} William Silva — Fisioterapia Domiciliar e Neurofuncional
          </p>
          <div className="flex space-x-6 text-[10px] uppercase tracking-widest text-white/30">
            <span>Desenvolvido com sofisticação</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
