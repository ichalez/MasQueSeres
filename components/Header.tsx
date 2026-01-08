
import React from 'react';
import { ViewState } from '../types';
import { LOGO_URL } from '../constants';

interface HeaderProps {
  setView: (view: ViewState) => void;
  currentView: ViewState;
}

const Header: React.FC<HeaderProps> = ({ setView, currentView }) => {
  return (
    <header className="sticky top-0 z-50 glass-nav border-b border-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => setView('home')}
          >
            <img 
              src={LOGO_URL} 
              alt="Más que seres Logo" 
              className="h-12 w-auto group-hover:scale-105 transition-transform"
            />
            <div className="hidden sm:block">
              <span className="brand-font text-xl font-bold text-slate-900 tracking-tight">Más que seres</span>
              <p className="text-[10px] text-cyan-600 uppercase tracking-widest font-medium leading-none">Profundidad & Conexión</p>
            </div>
          </div>

          <nav className="flex gap-8">
            <button 
              onClick={() => setView('home')}
              className={`text-sm font-medium transition-colors hover:text-cyan-600 ${currentView === 'home' ? 'text-cyan-600' : 'text-slate-600'}`}
            >
              Inicio
            </button>
            <button 
              onClick={() => setView('episodes')}
              className={`text-sm font-medium transition-colors hover:text-cyan-600 ${currentView === 'episodes' ? 'text-cyan-600' : 'text-slate-600'}`}
            >
              Episodios
            </button>
            <button 
              onClick={() => setView('blog')}
              className={`text-sm font-medium transition-colors hover:text-cyan-600 ${currentView === 'blog' ? 'text-cyan-600' : 'text-slate-600'}`}
            >
              Blog
            </button>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a 
              href="https://spotify.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#1DB954] text-white rounded-full text-xs font-bold hover:bg-[#1ed760] transition-colors"
            >
              Spotify
            </a>
            <button 
              onClick={() => setView('assistant')}
              className="px-4 py-2 bg-slate-900 text-white rounded-full text-xs font-bold hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200"
            >
              Asistente AI
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
