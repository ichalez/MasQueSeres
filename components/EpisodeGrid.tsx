
import React from 'react';
import { Episode } from '../types';

interface EpisodeGridProps {
  episodes: Episode[];
  onSelect: (ep: Episode) => void;
  title?: string;
}

const EpisodeGrid: React.FC<EpisodeGridProps> = ({ episodes, onSelect, title = "Últimos Episodios" }) => {
  return (
    <section className="py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">{title}</h2>
            <div className="h-1 w-20 bg-cyan-500 rounded-full"></div>
          </div>
          <button className="text-cyan-600 font-bold text-sm hover:underline flex items-center gap-2">
            Ver todos los episodios
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {episodes.map((ep) => (
            <div 
              key={ep.id} 
              className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={ep.thumbnail} 
                  alt={ep.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-4 right-4 px-2 py-1 bg-black/60 backdrop-blur-md rounded text-white text-[10px] font-bold">
                  {ep.duration}
                </div>
                <button 
                  onClick={() => onSelect(ep)}
                  className="absolute inset-0 bg-cyan-900/0 group-hover:bg-cyan-900/20 transition-colors flex items-center justify-center"
                >
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity scale-75 group-hover:scale-100 duration-300">
                    <svg className="w-6 h-6 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                </button>
              </div>
              <div className="p-8">
                <p className="text-xs font-bold text-cyan-600 mb-3 tracking-widest uppercase">{ep.date}</p>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-cyan-600 transition-colors">{ep.title}</h3>
                <p className="text-slate-500 text-sm line-clamp-2 leading-relaxed mb-6">{ep.description}</p>
                <button 
                   onClick={() => onSelect(ep)}
                  className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:gap-3 transition-all"
                >
                  Ver detalles
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EpisodeGrid;
