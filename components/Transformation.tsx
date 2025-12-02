import React from 'react';
import { Section } from './ui/Section';

export const Transformation: React.FC = () => {
  return (
    <Section className="py-16 md:py-24 border-b border-white/5">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-5xl font-black text-white leading-tight">
          VAN <span className="text-gray-500 line-through decoration-mando-red decoration-2">"WE POSTEN SOMS IETS"</span> NAAR EEN CONSTANTE STROOM VAN <span className="text-mando-red">PROFESSIONELE SHORT-FORM VIDEO'S</span> DIE KLANTEN AANTREKKEN.
        </h2>
      </div>
    </Section>
  );
};