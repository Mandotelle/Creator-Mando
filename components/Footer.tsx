import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex justify-center items-center gap-2 mb-4">
           <div className="w-6 h-6 bg-mando-red rounded-sm rotate-3 flex items-center justify-center">
            <span className="text-white font-black text-sm">C</span>
          </div>
          <span className="font-bold text-white tracking-tight">MANDO.</span>
        </div>
        <p className="text-gray-600 text-sm">
          &copy; 2025 Creator Mando. Alle rechten voorbehouden. <br/>
          Gevestigd in Nederland.
        </p>
      </div>
    </footer>
  );
};