import type { Course } from '@/interfaces/course'

export const data: Array<Course> = [
  {
    id: 1,
    cover: '/images/Myphotos/pimbo.JPG',
    title: 'Brincadeiras e Atividades Criativas',
    rating: 5,
    ratingCount: 8,
    // price: 25,
    category: 'Educação Infantil',
  },
  {
    id: 2,
    cover: '/images/courses/pintura.jpeg',
    title: 'Descobrindo o Mundo das Cores',
    rating: 5,
    ratingCount: 15,
    // price: 20,
    category: 'Educação Infantil',
  },
  
  // Fundamental I (6 a 10 anos)
  {
    id: 3,
    cover: '/images/courses/pintura2.jpeg',
    title: 'Aventuras na Matemática',
    rating: 4,
    ratingCount: 7,
    // price: 30,
    category: 'Fundamental I',
  },
  {
    id: 4,
    cover: '/images/Myphotos/luta.JPG',
    title: 'Histórias do Mundo: Aprendendo com Diversão',
    rating: 4,
    ratingCount: 12,
    // price: 30,
    category: 'Fundamental I',
  },
  {
    id: 5,
    cover: '/images/Myphotos/criancasGrupo.JPG',
    title: 'Explorando a Natureza: Ciência Divertida',
    rating: 4,
    ratingCount: 32,
    // price: 35,
    category: 'Fundamental I',
  },
  {
    id: 6,
    cover: '/images/Myphotos/note.JPG',
    title: 'Arte e Criatividade: Projetos Divertidos',
    rating: 5,
    ratingCount: 14,
    // price: 35,
    category: 'Fundamental I',
  },
  {
    id: 7,
    cover: '/images/Myphotos/luta.JPG',
    title: 'Lutas e Movimento: Aprendendo com Diversão',
    rating: 4,
    ratingCount: 6,
    // price: 25,
    category: 'Fundamental I',
  },
]
