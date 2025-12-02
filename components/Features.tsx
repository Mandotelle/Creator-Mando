import React from 'react';
import { Section } from './ui/Section';
import { Clapperboard, Wand2, Layers } from 'lucide-react';

const benefits = [
  {
    icon: Clapperboard,
    title: "Full-service: van script tot social-ready video",
    desc: "Ik bedenk het concept, schrijf het script, kom langs om te filmen en lever alles kant-en-klaar op voor Reels, TikTok en YouTube Shorts. Jij hoeft alleen nog maar op “posten” te klikken."
  },
  {
    icon: Wand2,
    title: "AI visuals die overtuigen, niet nep aanvoelen",
    desc: "We starten altijd met echte beelden van jouw bedrijf. Daarna gebruik ik AI alleen om het verhaal sterker te maken: extra visuals, dynamiek en sfeer – zonder dat het eruitziet als een goedkope filter."
  },
  {
    icon: Layers,
    title: "Meer content uit één shootdag",
    desc: "In plaats van één losse video haal je meerdere short-form clips uit één draaidag. Je kunt ze verspreid inzetten op al je kanalen, in campagnes en op je website."
  }
];

export const Features: React.FC = () => {
  return (
    <Section id="benefits" darker>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="bg-mando-card border border-white/5 p-8 rounded-2xl hover:border-mando-red/50 transition-colors group">
              <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-mando-red">
                <benefit.icon size={32} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 leading-tight">{benefit.title}</h3>
              <p className="text-gray-400 leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};