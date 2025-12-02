import React from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { Calendar } from 'lucide-react';

export const Contact: React.FC = () => {
  const openCalendly = (e: React.MouseEvent) => {
    e.preventDefault();
    if ((window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({ url: 'https://calendly.com/armandotellerias/30min' });
    }
  };

  return (
    <Section id="contact" darker className="pt-0">
      <div className="bg-gradient-to-b from-zinc-900 to-black border border-white/10 rounded-3xl p-8 md:p-16 text-center max-w-4xl mx-auto relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-mando-red/10 blur-[100px] rounded-full pointer-events-none" />

        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 relative z-10">
          KLAAR VOOR AI VIDEO'S DIE JE MARKETING <span className="text-mando-red">WÉL STERKER MAKEN?</span>
        </h2>
        
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto relative z-10">
          Vertel kort wat je doet en waar je zichtbaarder wilt worden. Ik denk met je mee over een short-form strategie die past bij jouw bedrijf.
        </p>

        <div className="relative z-10 flex justify-center">
          <Button onClick={openCalendly} className="text-lg bg-mando-red hover:bg-red-600 px-12 py-5">
            Boek een call met Mando <Calendar size={20} className="ml-2" />
          </Button>
        </div>
      </div>
    </Section>
  );
};