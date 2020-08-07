import React from 'react'
import { StyledForm } from './index.styled'

interface Props {
    children: React.ReactNode
}
  
const FormTemplate: React.FC<Props> = ({ children})=> {
    return (
        <StyledForm>
            {children}
        </StyledForm>
    )
}

export default FormTemplate