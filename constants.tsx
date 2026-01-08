
import { Episode, BlogPost } from './types';

export const LOGO_URL = "https://static.wixstatic.com/media/893963_1350a58a6988448eb529949646467323~mv2.png/v1/fill/w_925,h_1044,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202025-01-26%20at%2016_55_37.png";

export const EPISODES: Episode[] = [
  {
    id: '4',
    youtubeId: 'dQw4w9WgXcQ', // ID de ejemplo, sustituir por el real
    title: 'Tantra: El camino de la presencia absoluta',
    description: 'Exploramos con Madur la verdadera esencia del Tantra más allá de los mitos occidentales.',
    summary: 'En este episodio nos sumergimos en una conversación transformadora con Madur sobre el Tantra como una tecnología de conciencia. Desmitificamos la visión puramente sexual para entenderlo como una práctica de presencia total, donde cada sensación y cada momento se convierten en una puerta hacia lo sagrado y la conexión profunda con el otro.',
    date: '05 Nov, 2023',
    duration: '58:40',
    thumbnail: 'https://images.unsplash.com/photo-1545389336-cf09bd822c56?q=80&w=1964&auto=format&fit=crop',
    guest: {
      name: 'Madur',
      role: 'Maestro de Tantra y Meditación',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop',
      bio: 'Con más de 20 años de experiencia guiando retiros de autoconocimiento, Madur integra la sabiduría oriental con la psicología moderna para sanar la relación con el cuerpo y la intimidad.'
    }
  },
  {
    id: '1',
    youtubeId: '9bZkp7q19f0',
    title: 'La Vulnerabilidad como Superpoder',
    description: 'En este episodio exploramos por qué mostrar nuestras grietas nos hace más fuertes.',
    summary: 'Hoy conversamos sobre cómo la honestidad radical transforma nuestras relaciones y nuestra salud mental. Analizamos por qué nos da miedo ser vistos tal como somos y cómo superar esa barrera para conectar desde la esencia.',
    date: '15 Oct, 2023',
    duration: '45:20',
    thumbnail: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=2070&auto=format&fit=crop',
    guest: {
      name: 'Dra. Elena Ruiz',
      role: 'Psicóloga Clínica y Escritora',
      photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop',
      bio: 'Experta en terapia de aceptación y compromiso, Elena ha dedicado 15 años a estudiar la resiliencia humana.'
    }
  },
  {
    id: '2',
    youtubeId: 'dQw4w9WgXcQ',
    title: 'El Arte del Silencio Interior',
    description: 'Descubrimos técnicas milenarias adaptadas a la vida moderna.',
    summary: 'Vivimos en un mundo saturado de ruido. En esta charla, exploramos cómo crear espacios de quietud mental sin necesidad de aislarnos de la sociedad.',
    date: '22 Oct, 2023',
    duration: '38:15',
    thumbnail: 'https://images.unsplash.com/photo-1499209974431-9dac3adaf471?q=80&w=2070&auto=format&fit=crop',
    guest: {
      name: 'Marc Soler',
      role: 'Instructor de Mindfulness',
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop',
      bio: 'Fundador del centro Quietud, Marc enseña a directivos y artistas a encontrar su centro en el caos cotidiano.'
    }
  },
  {
    id: '3',
    youtubeId: 'L_jWHffIx5E',
    title: 'Conectando con el "Ser"',
    description: '¿Somos lo que hacemos o somos lo que sentimos?',
    summary: 'Una inmersión profunda en la ontología del lenguaje y la identidad personal para entender qué nos define realmente más allá de nuestra profesión.',
    date: '29 Oct, 2023',
    duration: '52:04',
    thumbnail: 'https://images.unsplash.com/photo-1518063319789-7217e6706b04?q=80&w=1974&auto=format&fit=crop',
    guest: {
      name: 'Dra. Clara Méndez',
      role: 'Filósofa y Consultora',
      photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop',
      bio: 'Investigadora especializada en la búsqueda de sentido en la posmodernidad y autora del best-seller "Identidad Líquida".'
    }
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: '5 Pasos para una introspección efectiva',
    excerpt: 'Aprender a mirar hacia adentro es una habilidad que se entrena. Aquí te enseñamos cómo empezar tu diario de reflexión.',
    content: 'La introspección no es solo pensar, es observar con curiosidad...',
    date: '12 Oct, 2023',
    author: 'Equipo Más que seres',
    image: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=2070&auto=format&fit=crop',
    category: 'Crecimiento'
  },
  {
    id: 'b2',
    title: 'La ciencia detrás de la conexión humana',
    excerpt: '¿Por qué nos sentimos tan bien cuando conectamos profundamente con alguien? La oxitocina y la psicología social tienen la respuesta.',
    content: 'Los seres humanos somos animales sociales por naturaleza...',
    date: '18 Oct, 2023',
    author: 'Dr. Alejandro M.',
    image: 'https://images.unsplash.com/photo-1521791136366-3e91374ba23f?q=80&w=2069&auto=format&fit=crop',
    category: 'Ciencia'
  },
  {
    id: 'b3',
    title: 'Escuchar para entender, no para responder',
    excerpt: 'La mayoría de nosotros escuchamos esperando nuestro turno para hablar. Cambia tu forma de relacionarte con la escucha activa.',
    content: 'La escucha activa es un regalo que le haces a la otra persona...',
    date: '25 Oct, 2023',
    author: 'Marta Soler',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
    category: 'Comunicación'
  }
];
