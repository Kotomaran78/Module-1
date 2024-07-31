import React from 'react';
import { CheckboxProps } from './types';
import './Checkbox.scss';

const Checkbox: React.FC<CheckboxProps> = ({ label, isChecked, onChange }) => (
  <label className='checkbox__label'>
    <input
      className='checkbox__input'
      type='checkbox'
      checked={isChecked}
      onChange={onChange}
    />
    {label}
  </label>
);

export default Checkbox;
