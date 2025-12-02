import React from 'react';
import { Section } from './ui/Section';

export const Audience: React.FC = () => {
  return (
    <Section id="audience">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-10 uppercase">
          Met wie ik <span className="text-mando-red">werk</span>
        </h2>
        
        <div className="space-y-8">
          <p className="text-xl md:text-2xl text-white font-medium leading-relaxed">
            Ik werk met bedrijven die serieuzer werk willen maken van hun zichtbaarheid op social media.
          </p>
          
          <div className="w-24 h-1 bg-mando-red mx-auto rounded-full opacity-50"></div>
          
          <div className="space-y-6 text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
            <p>
              Je hoeft geen contentteam of ervaring met video te hebben – als jij je bedrijf kent, zorg ik dat jouw verhaal terechtkomt in sterke, professionele short-form video’s.
            </p>
            <p>
              Door projecten in veel verschillende markten weet ik snel wat wel en niet werkt, en vertaal ik jouw aanbod naar content die past bij jouw doelgroep.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};