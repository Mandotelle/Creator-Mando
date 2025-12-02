import React, { useState } from 'react';
import { Section } from './ui/Section';
import { Plus, Minus } from 'lucide-react';
import { FaqItem } from '../types';

const faqData: FaqItem[] = [
  {
    question: "Lijkt AI video niet nep?",
    answer: "Nee. Ik gebruik AI voor visuele ondersteuning (B-roll, effecten), niet om jou te vervangen. Jij blijft de menselijke factor, de AI zorgt voor de 'high production value' uitstraling."
  },
  {
    question: "Moet ik zelf in beeld?",
    answer: "Voor de beste connectie met je klant: ja, liefst wel. Maar als je dat écht niet wilt, kunnen we werken met voice-overs en stock/AI-beelden. We kijken wat bij jouw merk past."
  },
  {
    question: "Hoe snel kan ik live?",
    answer: "Na de shoot heb je de eerste versies vaak binnen 48-72 uur. Het hele traject van strategiecall tot eerste video kan in minder dan een week."
  },
  {
    question: "Werkt dit alleen voor Instagram?",
    answer: "Nee! De verticale video's (9:16) die ik maak zijn perfect geoptimaliseerd voor Instagram Reels, TikTok én YouTube Shorts. 3 platforms voor de prijs van 1."
  },
  {
    question: "Wat kost het ongeveer?",
    answer: "Ik werk met pakketten of losse projecten. Omdat ik geen duur kantoorpand of groot team heb, zijn mijn tarieven zeer competitief voor MKB. Vraag een call aan voor een prijsopgave op maat."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-black text-white text-center mb-12 uppercase">Veelgestelde <span className="text-mando-red">Vragen</span></h2>
        
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="border border-white/10 rounded-lg bg-mando-card overflow-hidden transition-all duration-200">
              <button 
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-white text-lg pr-4">{item.question}</span>
                {openIndex === index ? <Minus className="text-mando-red shrink-0" /> : <Plus className="text-gray-500 shrink-0" />}
              </button>
              
              {openIndex === index && (
                <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5 mt-2">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};