import styled from 'styled-components';
import Button from 'Components/atoms/Button';
import { FlexColumn } from 'styles/mixins';


export const StyledContainer = styled.div`
    ${FlexColumn};
    height: 100%;
    background-color: white;
    overflow: auto;
`

export const StyledWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 1fr);
    width: 100%;
    background-color: white;
`

export const StyledButton = styled(Button)`
    width: 100%;
`;