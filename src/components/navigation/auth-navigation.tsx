import React, { FC } from 'react'
import Box from '@mui/material/Box'
import { StyledButton } from '@/components/styled-button'

const AuthNavigation: FC = () => {
  return (
    <Box sx={{ '& button:first-of-type': { mr: 2 } }}>
      <StyledButton disableHoverEffect={true} variant="outlined">
        Entrar
      </StyledButton>
      <StyledButton disableHoverEffect={true}>Criar conta</StyledButton>
    </Box>
  )
}

export default AuthNavigation
