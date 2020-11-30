import React from 'react';
import { IMultiStepForm } from './MultiStepForm.model';
import {
    StyledContainer,
    StyledForm,
    StyledPagination
} from './MultiStepForm.styled';

const MultiStepform = ({ 
    children, 
    counter, 
    handleLeftButton, 
    handleRightButton, 
    onSubmit 
}: IMultiStepForm): JSX.Element => {
    
    const steps = children.length;
    const getCurrentChild = () => children[counter - 1];

    return (
        <StyledContainer>
            <StyledForm onSubmit={onSubmit}>
                {getCurrentChild()}
            </StyledForm>
            <StyledPagination 
                steps={steps} 
                counter={counter}
                handleLeftButton={handleLeftButton}
                handleRightButton={handleRightButton}
            />
        </StyledContainer>
    )
}

export default MultiStepform
