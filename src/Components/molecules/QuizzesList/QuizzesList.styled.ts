import styled from 'styled-components';
import colors from 'styles/colors';
import { FlexColumn } from 'styles/mixins';

export const StyledList = styled.ul`
    position: absolute;
    top: 60px;
    left: 0;
    ${FlexColumn};
    width: 100%;
    height: calc(100vh - 60px - 60px);
    padding: 10px;
    overflow: auto;
    justify-content: flex-start;
    background-color: ${colors.White};
`;


export const StyledListItem = styled.li`
    width: 100%;
    margin: 5px 0;
`;
