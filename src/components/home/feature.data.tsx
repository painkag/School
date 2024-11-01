import React, { ReactNode } from 'react'
import ArtTrackIcon from '@mui/icons-material/ArtTrack'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'

interface Data {
  title: string
  description: string
  icon?: ReactNode
}

export const data: Data[] = [
  {
    title: 'Acesso Fácil',
    description: 'Na Escola Casinha Verde, você pode chegar fácil e rápido para aprender brincando!',
    icon: <ArtTrackIcon />,
  },
  {
    title: 'Preços Acessíveis',
    description: 'Oferecemos um ensino de qualidade que cabe no seu bolso, para que todos possam aprender!',
    icon: <AttachMoneyIcon />,
  },
  {
    title: 'Horários Flexíveis',
    description: 'Você pode escolher os melhores horários para estudar e brincar, do jeito que preferir!',
    icon: <LocalLibraryIcon />,
  },
  {
    title: 'Acompanhamento com Educadores',
    description: 'Nossos professores estão sempre prontos para ajudar e brincar com você, garantindo que aprenda se divertindo!',
    icon: <ContactSupportIcon />,
  }
  ,
]
