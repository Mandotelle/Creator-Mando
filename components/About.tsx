import React from 'react';
import { Section } from './ui/Section';

export const About: React.FC = () => {
  return (
    <Section id="about" darker className="border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-mando-card to-black border border-white/10 rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl md:text-4xl font-black text-white mb-6">
            Waarom deze aanpak werkt voor <span className="text-mando-red">jouw bedrijf</span>
          </h2>
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              Je krijgt in één persoon een videograaf, editor én AI-specialist. Dat betekent studio-niveau short-form content zonder agency-prijzen of tien verschillende contactpersonen.
            </p>
            <p>
              We combineren real footage op locatie met slimme AI visuals, waardoor je video’s er grootser uitzien dan de meeste concurrenten in jouw markt.
            </p>
          </div>
          
          <div className="mt-8 flex flex-wrap gap-3">
             <span className="px-4 py-2 bg-white/5 rounded-full text-sm text-white font-bold border border-white/10">1 Contactpersoon</span>
             <span className="px-4 py-2 bg-white/5 rounded-full text-sm text-white font-bold border border-white/10">Studio Kwaliteit</span>
             <span className="px-4 py-2 bg-white/5 rounded-full text-sm text-white font-bold border border-white/10">Snel Schakelen</span>
          </div>
        </div>
      </div>
    </Section>
  );
};