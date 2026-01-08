
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import EpisodeGrid from './components/EpisodeGrid';
import BlogGrid from './components/BlogGrid';
import Footer from './components/Footer';
import AssistantView from './components/AssistantView';
import { ViewState, Episode, BlogPost } from './types';
import { EPISODES, BLOG_POSTS } from './constants';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('home');
  const [selectedEpisode, setSelectedEpisode] = useState<Episode | null>(null);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const handleSelectEpisode = (ep: Episode) => {
    setSelectedEpisode(ep);
    setView('episode-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectPost = (post: BlogPost) => {
    setSelectedPost(post);
    setView('blog-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContent = () => {
    switch (view) {
      case 'home':
        return (
          <>
            <Hero onWatchEpisode={handleSelectEpisode} />
            <EpisodeGrid episodes={EPISODES} onSelect={handleSelectEpisode} />
            <BlogGrid posts={BLOG_POSTS} onSelect={handleSelectPost} />
          </>
        );
      case 'episodes':
        return (
          <div className="py-12">
            <EpisodeGrid episodes={EPISODES} onSelect={handleSelectEpisode} title="Archivo de Episodios" />
          </div>
        );
      case 'blog':
        return (
          <div className="py-12">
             <BlogGrid posts={BLOG_POSTS} onSelect={handleSelectPost} />
          </div>
        );
      case 'episode-detail':
        if (!selectedEpisode) return null;
        return (
          <div className="max-w-5xl mx-auto px-4 py-16">
            <div className="mb-10 aspect-video w-full rounded-[2.5rem] overflow-hidden shadow-2xl glow-cyan">
              <iframe 
                width="100%" 
                height="100%" 
                src={`https://www.youtube.com/embed/${selectedEpisode.youtubeId}?autoplay=1`} 
                title={selectedEpisode.title}
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            <div className="space-y-6 max-w-3xl">
              <div className="flex items-center gap-4 text-sm font-bold text-cyan-600 uppercase tracking-widest">
                <span>{selectedEpisode.date}</span>
                <span className="w-1.5 h-1.5 bg-slate-300 rounded-full"></span>
                <span>{selectedEpisode.duration}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900">{selectedEpisode.title}</h1>
              <p className="text-lg text-slate-600 leading-relaxed">{selectedEpisode.description}</p>
              
              <div className="flex gap-4 pt-6">
                 <button className="px-6 py-3 bg-[#1DB954] text-white rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-[#1ed760] transition-all">
                   Escuchar en Spotify
                 </button>
                 <button onClick={() => setView('assistant')} className="px-6 py-3 bg-slate-900 text-white rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-slate-800 transition-all">
                   Reflexionar con AI
                 </button>
              </div>
            </div>
          </div>
        );
      case 'blog-detail':
        if (!selectedPost) return null;
        return (
          <div className="max-w-3xl mx-auto px-4 py-16">
            <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-80 object-cover rounded-[2.5rem] mb-12 shadow-xl" />
            <div className="space-y-6">
              <span className="px-3 py-1 bg-cyan-50 text-cyan-600 rounded-full text-[10px] font-bold uppercase tracking-widest">{selectedPost.category}</span>
              <h1 className="text-5xl font-bold text-slate-900 leading-tight">{selectedPost.title}</h1>
              <div className="flex items-center gap-4 py-4 border-b border-slate-100">
                <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold">{selectedPost.author[0]}</div>
                <div>
                  <p className="text-sm font-bold text-slate-900">{selectedPost.author}</p>
                  <p className="text-xs text-slate-500">{selectedPost.date}</p>
                </div>
              </div>
              <div className="prose prose-slate prose-lg pt-6">
                <p className="text-slate-600 leading-relaxed text-lg">
                  {selectedPost.content}
                </p>
                <p className="text-slate-600 leading-relaxed mt-6">
                  {selectedPost.excerpt} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="bg-slate-50 p-8 rounded-3xl mt-12 border border-slate-100 italic text-slate-600">
                  "La verdadera conexión humana no se encuentra en las similitudes, sino en la profundidad con la que aceptamos nuestras diferencias."
                </div>
              </div>
            </div>
          </div>
        );
      case 'assistant':
        return <AssistantView />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col gradient-bg">
      <Header setView={setView} currentView={view} />
      <main className="flex-1">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
