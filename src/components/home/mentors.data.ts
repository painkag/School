import type { Mentor } from '@/interfaces/mentor'

export const data: Array<Mentor> = [
  {
    id: 1,
    photo: '/images/Myphotos/sueliF.JPG',
    name: 'Jhon Dwirian',
    category: 'Educação Infantil',
    description:
      'Um educador apaixonado que se dedica a ensinar crianças com métodos divertidos e interativos, promovendo o aprendizado desde cedo.',
    company: {
      name: 'Casinha Verde',
      logo: '/images/companies/grab.png',
    },
  },
  {
    id: 2,
    photo: '/images/mentors/jonas-kakaroto-KIPqvvTOC1s-unsplash.jpg',
    name: 'Leon S Kennedy',
    category: 'Ciências',
    description:
      'Especialista em tornar a ciência divertida e acessível para crianças, utilizando experimentos práticos e interativos.',
    company: {
      name: 'Casinha Verde',
      logo: '/images/companies/google.png',
    },
  },
  {
    id: 3,
    photo: '/images/mentors/noah-buscher-8A7fD6Y5VF8-unsplash.jpg',
    name: 'Nguyễn Thuy',
    category: 'Tecnologia e Inovação',
    description:
      'Mentor focado em ensinar crianças sobre as tecnologias do futuro, incentivando a criatividade e a curiosidade.',
    company: {
      name: 'Casinha Verde',
      logo: '/images/companies/airbnb.png',
    },
  },
  {
    id: 4,
    photo: '/images/mentors/philip-martin-5aGUyCW_PJw-unsplash.jpg',
    name: 'Rizki Known',
    category: 'Desenvolvimento Pessoal',
    description:
      'Um mentor dedicado a ajudar crianças a desenvolverem suas habilidades emocionais e sociais, promovendo um ambiente de aprendizado positivo.',
    company: {
      name: 'Casinha Verde',
      logo: '/images/companies/microsoft.png',
    },
  }
  ,
]
