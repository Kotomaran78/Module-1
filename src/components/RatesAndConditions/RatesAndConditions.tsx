import React from 'react';
import './RatesAndConditions.scss';
import { ratesAndConditionsData } from './constants';

const RatesAndConditions: React.FC = () => (
  <div className='rates-and-conditions'>
    <table className='rates-and-conditions__table'>
      <tbody>
        {ratesAndConditionsData.map((item) => (
          <tr key={item.title}>
            <td>{item.title}</td>
            <td>
              {item.detail.split('\n').map((line) => (
                <React.Fragment key={line}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default RatesAndConditions;
