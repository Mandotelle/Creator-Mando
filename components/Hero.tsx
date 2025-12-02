import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';

export const Hero: React.FC = () => {
  const openCalendly = (e: React.MouseEvent) => {
    e.preventDefault();
    if ((window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({ url: 'https://calendly.com/armandotellerias/30min' });
    }
  };
  
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden bg-mando-black">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-mando-red/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Text */}
        <div className="space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1 text-sm font-medium text-mando-yellow"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mando-yellow opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-mando-yellow"></span>
            </span>
            Nu beschikbaar voor nieuwe projecten
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black leading-tight text-white"
          >
            AI VIDEO & <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mando-red to-white">SHORT-FORM CONTENT</span> <br/>
            DIE JOUW BEDRIJF LAAT OPVALLEN.
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 font-light border-l-4 border-mando-red pl-6"
          >
            Ik help Nederlandse bedrijven met scroll-stopping Reels, gemaakt met een mix van echte beelden + AI visuals.
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <Button onClick={openCalendly} className="group text-lg px-8 py-4">
              Plan een gratis strategiecall <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
          </motion.div>
          
          <div className="pt-8 flex items-center gap-4 text-sm text-gray-500">
             <div className="flex -space-x-3">
               {[1,2,3].map(i => (
                 <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-gray-800 overflow-hidden">
                   <img src={`https://picsum.photos/100/100?random=${i+20}`} alt="client" className="w-full h-full object-cover" />
                 </div>
               ))}
             </div>
             <p>Al 50+ bedrijven geholpen.</p>
          </div>
        </div>

        {/* Right: Phone Mockup */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative flex justify-center md:justify-end"
        >
          {/* Decorative elements behind phone */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[550px] bg-gradient-to-tr from-mando-red to-blue-500 rounded-[40px] blur-2xl opacity-20 animate-pulse-slow"></div>

          {/* Phone Frame */}
          <div className="relative w-[300px] h-[600px] bg-black border-8 border-gray-900 rounded-[40px] shadow-2xl overflow-hidden ring-1 ring-white/10">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-20"></div>
            
            {/* Screen Content */}
            <div className="w-full h-full bg-gray-800 relative">
               <img 
                 src="https://picsum.photos/600/1200?random=1" 
                 alt="Vertical Video Example" 
                 className="w-full h-full object-cover opacity-80"
               />
               
               {/* UI Overlay simulation */}
               <div className="absolute bottom-8 left-4 right-4 z-10">
                 <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-full bg-mando-red"></div>
                    <span className="text-white font-bold text-sm shadow-black drop-shadow-md">@creator.mando</span>
                 </div>
                 <div className="bg-white/10 backdrop-blur-md p-3 rounded-lg border border-white/10">
                    <p className="text-white text-xs font-medium">
                      Dit is hoe jouw bedrijf eruit kan zien op social media 🚀 <span className="text-mando-red">#aivideo #marketing</span>
                    </p>
                 </div>
               </div>
               
               {/* Play button overlay */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                 <Play className="text-white fill-white ml-1" size={32} />
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};