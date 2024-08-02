import React, { useState } from 'react';
import './DocumentTable.scss';
import { DocumentTableProps, PaymentSchedule } from './types';
import ArrowIcon from '@assets/icons/DocumentTableUp.svg';

const DocumentTable: React.FC<DocumentTableProps> = ({ data }) => {
  const [sortConfig, setSortConfig] = useState<{
    key: keyof PaymentSchedule;
    direction: 'ascending' | 'descending';
  } | null>(null);

  const sortedData = React.useMemo(() => {
    if (!sortConfig) return data;
    return [...data].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
  }, [data, sortConfig]);

  const requestSort = (key: keyof PaymentSchedule) => {
    let direction: 'ascending' | 'descending' = 'descending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'descending') {
      direction = 'ascending';
    }
    setSortConfig({ key, direction });
  };

  return (
    <section className='document-table'>
      <table className='document-table__table'>
        <thead>
          <tr>
            {[
              'number',
              'date',
              'totalPayment',
              'interestPayment',
              'debtPayment',
              'remainingDebt',
            ].map((key) => (
              <th key={key} onClick={() => requestSort(key as keyof PaymentSchedule)}>
                {key.toUpperCase()}
                <span
                  className={`sort-icon ${sortConfig?.key === key && sortConfig.direction === 'descending' ? 'descending' : 'ascending'}`}
                >
                  <img src={ArrowIcon} alt='Arrow icon' />
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item, index) => (
            <tr key={index}>
              <td>{item.number}</td>
              <td>{item.date}</td>
              <td>{item.totalPayment}</td>
              <td>{item.interestPayment}</td>
              <td>{item.debtPayment}</td>
              <td>{item.remainingDebt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default DocumentTable;
