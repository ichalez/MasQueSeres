
import React from 'react';
import { LOGO_URL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 space-y-8">
            <div className="flex items-center gap-3">
              <img src={LOGO_URL} alt="Logo" className="h-10 w-auto invert brightness-0" />
              <span className="brand-font text-2xl font-bold text-white tracking-tight">Más que seres</span>
            </div>
            <p className="text-lg max-w-sm leading-relaxed">
              Descubriendo la profundidad de lo que nos hace humanos, episodio a episodio.
            </p>
            <div className="flex gap-4">
              {['youtube', 'instagram', 'spotify', 'twitter'].map(social => (
                <a key={social} href="#" className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all">
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-current opacity-70"></div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Podcast</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Episodios</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Invitados</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Playlist Recomendada</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Donaciones</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contenido</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Blog de Reflexión</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Newsletter</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Sobre el proyecto</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Contacto</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© 2024 Más que seres Podcast. Todos los derechos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Privacidad</a>
            <a href="#" className="hover:text-white">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
