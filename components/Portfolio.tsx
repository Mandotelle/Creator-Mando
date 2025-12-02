import React from 'react';
import { Section } from './ui/Section';
import { Play } from 'lucide-react';

const examples = [
  { title: "Restaurant Sfeer", cat: "Horeca", img: "https://picsum.photos/400/700?random=101" },
  { title: "Recruitment Ad", cat: "Diensten", img: "https://picsum.photos/400/700?random=102" },
  { title: "Product Launch", cat: "Retail", img: "https://picsum.photos/400/700?random=103" },
  { title: "Event Recap", cat: "Events", img: "https://picsum.photos/400/700?random=104" },
];

export const Portfolio: React.FC = () => {
  return (
    <Section id="portfolio" darker>
      <div className="flex flex-col md:flex-row justify-between items-end mb-12">
        <div>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase mb-2">
            Recent <span className="text-stroke-white text-transparent bg-clip-text bg-white/10">Werk</span>
          </h2>
          <p className="text-gray-400">Content die stopt met scrollen.</p>
        </div>
        <a href="#contact" className="hidden md:block text-mando-red font-bold hover:underline underline-offset-4">
          Bekijk alle cases &rarr;
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {examples.map((item, idx) => (
          <div key={idx} className="group relative aspect-[9/16] bg-gray-800 rounded-lg overflow-hidden cursor-pointer">
            <img 
              src={item.img} 
              alt={item.title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-90" />
            
            {/* Play Button */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform scale-50 group-hover:scale-100 duration-300">
               <Play className="text-white fill-white ml-1" size={24} />
            </div>

            <div className="absolute bottom-0 left-0 p-4 w-full">
              <span className="text-xs font-bold text-mando-yellow uppercase tracking-wider mb-1 block">{item.cat}</span>
              <h3 className="text-white font-bold text-sm md:text-lg leading-tight">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 text-center md:hidden">
         <a href="#contact" className="text-mando-red font-bold hover:underline underline-offset-4">
          Bekijk alle cases &rarr;
        </a>
      </div>
    </Section>
  );
};