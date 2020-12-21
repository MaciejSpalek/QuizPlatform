import styled from 'styled-components';
import colors from 'styles/colors';

export const StyledButton = styled.button.attrs(props => ({
    isDisabled: props.disabled
}))`
    position: relative;
    min-height: 45px;
    max-width: 300px;
    font-size: 24px;
    font-weight: bold;
    font-size: 22px;
    background-color: ${({isDisabled}) => isDisabled ? colors.DarkGreen : colors.BasicGreen};
    color: ${({isDisabled}) => isDisabled ? colors.Gray60 : colors.White};
    text-shadow: 1px 1px 0px rgba(0, 0, 0, .5);
    border-radius: 5px;
    border: none;
    overflow: hidden;
    padding: 0 5px;
    margin: 5px 0;
    cursor: pointer;
`;
