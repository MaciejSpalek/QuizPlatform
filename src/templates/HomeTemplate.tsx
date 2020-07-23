import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.main`
    height: 100%;
`

interface Props {
  children: React.ReactNode;
}

const HomeTemplate: React.FC<Props> = ({ children }) => (
  <StyledContainer>
    {children} 
  </StyledContainer>
);

export default HomeTemplate;