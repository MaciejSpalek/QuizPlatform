import React from 'react';
import Select from './Select';
import { ISelectInput } from './SelectInput.model';

const SelectInput = ({ options, handleOnClick, selectCaption, selectedColor, selectedIconName, type }: ISelectInput): JSX.Element => {
  return ( 
    <Select 
      handleOnClick={handleOnClick} 
      options={options} 
      selectCaption={selectCaption} 
      selectedIconName={selectedIconName} 
      selectedColor={selectedColor}
      type={type} 
    />
  )
};

export default SelectInput;
