import React from 'react';
import { Section } from './ui/Section';
import { FileText, Camera, Wand2, Share2 } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    title: "1. Concept & Script",
    desc: "We bepalen de 'hook' en boodschap. Ik schrijf het script dat jouw doelgroep triggert."
  },
  {
    icon: Camera,
    title: "2. Shoot op Locatie",
    desc: "Ik kom langs. Efficiënt filmen met professionele gear. Jij hoeft alleen je ding te doen."
  },
  {
    icon: Wand2,
    title: "3. AI Magic & Edit",
    desc: "Montage, color grading, subtitles en AI visuals om het verhaal visueel sterk te maken."
  },
  {
    icon: Share2,
    title: "4. Levering & Posten",
    desc: "Je ontvangt kant-en-klare verticals (Reels/TikToks) die je direct kunt uploaden."
  }
];

export const Process: React.FC = () => {
  return (
    <Section id="process">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-black text-white uppercase">
          Van Script tot <span className="text-mando-blue">Scherm</span>
        </h2>
        <p className="text-gray-400 mt-4 text-lg">Geen gedoe. Een gestroomlijnd proces voor drukbezette ondernemers.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <div key={index} className="relative group">
            {/* Connecting line for desktop */}
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-8 left-1/2 w-full h-[2px] bg-gradient-to-r from-gray-800 to-transparent -z-10" />
            )}
            
            <div className="bg-mando-card border border-white/5 p-6 rounded-xl hover:bg-white/5 transition-colors h-full flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-mando-dark border border-white/10 rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:border-mando-blue/50 transition-colors">
                <step.icon size={32} className="text-white group-hover:text-mando-blue transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <div className="inline-block bg-white/5 border border-white/10 rounded-full px-6 py-2">
          <p className="text-gray-300 font-medium">✨ Full-service: Ik regel alles, jij focust op je business.</p>
        </div>
      </div>
    </Section>
  );
};