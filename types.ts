
export interface Guest {
  name: string;
  role: string;
  photo: string;
  bio: string;
}

export interface Episode {
  id: string;
  youtubeId: string;
  title: string;
  description: string;
  summary: string;
  date: string;
  duration: string;
  thumbnail: string;
  guest?: Guest;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image: string;
  category: string;
}

export type ViewState = 'home' | 'episodes' | 'blog' | 'episode-detail' | 'blog-detail' | 'assistant';
