import React from 'react';
import { StyledIconButton, StyledIcon } from './IconButton.styled';
import { IIconButton } from './IconButton.model';

const IconButton = ({ icon, type, handleOnClick, ...props }: IIconButton): JSX.Element => {
    return (
        <StyledIconButton data-testid="IconButton" type={type} onClick={handleOnClick} {...props}>
            {icon && <StyledIcon icon={['fas', 'male']}/>}
        </StyledIconButton>
    )
}

export default IconButton;  