import React from 'react';
import { Section } from './ui/Section';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Voor het eerst hadden we Reels die écht professioneel aanvoelden. Klanten zeiden letterlijk: ‘Wow, ziet er strak uit.’",
    author: "Eigenaar restaurant",
    type: "Horeca"
  },
  {
    quote: "Mando dacht mee over het script, filmde alles in één middag en leverde meerdere video’s op die we nog steeds gebruiken in campagnes.",
    author: "Manager",
    type: "Beveiligingsbedrijf"
  },
  {
    quote: "Ik vond AI altijd een beetje nep ogen, maar de combinatie van echte beelden en AI visuals werkt super. Het voelt gewoon als high-end video.",
    author: "Directeur",
    type: "Dienstverlenend bedrijf"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <Section id="testimonials">
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((item, idx) => (
          <div key={idx} className="bg-mando-card border border-white/5 p-8 rounded-2xl relative">
            <Quote className="text-mando-red/20 absolute top-6 right-6" size={48} />
            <p className="text-gray-300 text-lg mb-6 italic relative z-10">"{item.quote}"</p>
            <div>
              <p className="text-white font-bold">{item.author}</p>
              <p className="text-sm text-mando-yellow uppercase tracking-wide">{item.type}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};