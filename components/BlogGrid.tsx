
import React from 'react';
import { BlogPost } from '../types';

interface BlogGridProps {
  posts: BlogPost[];
  onSelect: (post: BlogPost) => void;
}

const BlogGrid: React.FC<BlogGridProps> = ({ posts, onSelect }) => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">El Rincón de la Reflexión</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">Exploramos los temas del podcast con mayor profundidad en nuestros artículos semanales.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {posts.map((post) => (
            <div 
              key={post.id} 
              className="flex flex-col md:flex-row gap-8 items-center cursor-pointer group"
              onClick={() => onSelect(post)}
            >
              <div className="w-full md:w-1/2 aspect-[4/3] rounded-3xl overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="w-full md:w-1/2 space-y-4">
                <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-[10px] font-bold uppercase tracking-widest">{post.category}</span>
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-cyan-600 transition-colors">{post.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center gap-3 pt-2">
                  <div className="w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 font-bold text-[10px]">
                    {post.author[0]}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">{post.author}</p>
                    <p className="text-[10px] text-slate-400">{post.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;
