import React from 'react';
import { CheckboxProps } from './types';
import './DocumentCheckbox.scss';

const DocumentCheckbox: React.FC<CheckboxProps> = ({ label, isChecked, onChange }) => (
  <label className='document-checkbox__label'>
    <input
      className='document-checkbox__input'
      type='checkbox'
      checked={isChecked}
      onChange={onChange}
    />
    {label}
  </label>
);

export default DocumentCheckbox;
