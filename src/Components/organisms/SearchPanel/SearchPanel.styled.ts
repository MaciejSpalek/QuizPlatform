import styled from 'styled-components';
import colors from 'styles/colors';
import { FlexCenter, FlexColumn } from 'styles/Mixins';


export const StyledForm = styled.form`
    ${FlexCenter};
    height: 60px;
    justify-content: space-between;
    background-color: ${colors.Gray120};
    padding: 10px;
`;

export const StyledInputWrapper = styled.div`
    position: relative;
    ${FlexColumn};
    background-color: ${colors.White};
    border-radius: 5px;
`;
