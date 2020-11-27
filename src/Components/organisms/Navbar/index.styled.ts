import styled from 'styled-components'
import { FlexCenter } from '../../../theme/Mixins'

export const StyledNavbar = styled.nav`
    ${FlexCenter};
    justify-content: space-between;
    background-color: ${({theme}) => theme.colors.grayscale[1]};
    height: 60px;
    padding: 10px;
`