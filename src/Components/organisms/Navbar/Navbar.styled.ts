import styled from 'styled-components';
import colors from 'styles/colors';
import { FlexCenter } from 'styles/mixins';

export const StyledNavbar = styled.nav`
    ${FlexCenter};
    justify-content: space-between;
    /* background-color: ${colors.Gray80}; */
    height: 60px;
    padding: 10px;
`;