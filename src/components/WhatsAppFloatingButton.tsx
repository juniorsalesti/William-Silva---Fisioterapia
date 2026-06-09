import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloatingButton() {
  return (
    <motion.a
      href="https://wa.me/5519988665949"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5, type: 'spring' }}
      whileHover={{ scale: 1.1, translateY: -4 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl hover:bg-[#20ba5a] hover:shadow-[0_0_20px_rgba(37,211,102,0.6)] transition-colors duration-300 group"
    >
      {/* Pulse Outer Ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping opacity-75 pointer-events-none -z-10" />
      
      <MessageCircle size={30} className="stroke-[2.5]" />
      
      {/* Tooltip on Hover */}
      <span className="absolute right-16 bg-primary-dark/95 border border-white/10 text-white text-xs font-semibold px-4 py-2 rounded-xl whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none tracking-wide">
        Falar com William Silva
      </span>
    </motion.a>
  );
}
