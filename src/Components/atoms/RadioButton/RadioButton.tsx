import React from 'react'
import Label from 'Components/atoms/Label/index'
import { IRadioButton } from './RadioButton.model'
import { 
    StyledRadioButton,
    StyledWrapper,
} from './RadioButton.styled'


const RadioButton = ({ 
    id, 
    name, 
    label, 
    value, 
    onBlur, 
    checked, 
    onChange,
    ...props 
}: IRadioButton): JSX.Element=> {
    
    return (
        <StyledWrapper data-testid="RadioButton" {...props}>
            <StyledRadioButton 
                id={id} 
                name={name} 
                type='radio' 
                value={value}
                onBlur={onBlur} 
                onChange={onChange} 
                checked={checked}
            />
            <Label text={label} forText={id}/>
        </StyledWrapper>
    )
}

export default RadioButton;