import type { Testimonial } from '@/interfaces/testimonial'
import PersonIcon from '@mui/icons-material/Person';

export const data: Array<Testimonial> = [
  {
    id: 1,
    title: 'Materiais de Aprendizado Detalhados',
    content:
      'As aulas oferecem materiais detalhados que ajudam as crianças a aprenderem de maneira divertida e eficaz, promovendo o desenvolvimento de habilidades desde cedo.',
    user: {
      id: 1,
      name: 'Luis Sera',
      professional: 'Educador',
      photo: 'pessoa.png',
    },
  },
  {
    id: 2,
    title: 'A Melhor Escola para Aprender!',
    content:
      'Na Casinha Verde, as crianças aprendem de forma divertida com atividades práticas que estimulam a criatividade e a curiosidade.',
    user: {
      id: 2,
      name: 'Luan',
      professional: 'Professor',
      photo: 'pessoa.png',
    },
  },
  {
    id: 3,
    title: 'Aulas Super Completas!',
    content:
      'As aulas são completas e abrangem diversos temas, proporcionando uma base sólida para o aprendizado e desenvolvimento das crianças.',
    user: {
      id: 3,
      name: 'Maria',
      professional: 'Educador',
      photo: 'pessoa.png',
    },
  },
  {
    id: 4,
    title: 'Qualidade de Ensino Excelente!',
    content:
      'A Casinha Verde é conhecida pela sua qualidade de ensino, com professores dedicados que tornam as aulas muito agradáveis para os alunos.',
    user: {
      id: 4,
      name: 'Diana Jordan',
      professional: 'Educadora',
      photo: 'pessoa.png',
    },
  },
  {
    id: 5,
    title: 'Materiais de Aprendizado Detalhados!',
    content:
      'Na Casinha Verde, as aulas oferecem materiais ricos e detalhados que ajudam as crianças a aprenderem de maneira interativa e divertida.',
    user: {
      id: 5,
      name: 'Ashley Graham',
      professional: 'Educadora',
      photo: 'pessoa.png',
    },
  }
  ,
]
