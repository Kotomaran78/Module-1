import React from 'react';
import { PrescoringFormSelectProps } from './types';
import './PrescoringFormSelect.scss'
import HappyBox from '@assets/img/HappyBox.png';
import TrueIcon from '@assets/icons/Check_fill.svg';
import FalseIcon from '@assets/icons/Close_round_fill.svg';

const PrescoringFormSelect: React.FC<PrescoringFormSelectProps> = ({ results, onSelect }) => (
  <div className='prescoring-form-select'>
    {results.map((result, index) => (
      <div className='prescoring-form-select__card' key={index}>
        <img className='prescoring-form-select__img' src={HappyBox} alt='Happy box image' />
        <p className='prescoring-form-select__card-item'>
          Requested amount: {result.requestedAmount} ₽
        </p>
        <p className='prescoring-form-select__card-item'>Total amount: {result.totalAmount} ₽</p>
        <p className='prescoring-form-select__card-item'>For {result.term} months</p>
        <p className='prescoring-form-select__card-item'>
          Monthly payment: {result.monthlyPayment} ₽
        </p>
        <p className='prescoring-form-select__card-item'>Your rate: {result.rate}%</p>
        <div className='prescoring-form-select__card-item-block'>
          <p>Insurance included</p>
          {result.isInsuranceEnabled ? (
            <img src={TrueIcon} alt='True icon' />
          ) : (
            <img src={FalseIcon} alt='False icon' />
          )}
        </div>
        <div className='prescoring-form-select__card-item-block'>
          <p>Salary client</p>
          {result.isSalaryClient ? (
            <img src={TrueIcon} alt='True icon' />
          ) : (
            <img src={FalseIcon} alt='False icon' />
          )}
        </div>
        <button className='prescoring-form-select__button' onClick={() => onSelect(result)}>
          Select
        </button>
      </div>
    ))}
  </div>
);

export default PrescoringFormSelect;
