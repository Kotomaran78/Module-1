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

// import React, { useState } from 'react';
// // import UpArrow from '@assets/icons/DocumentTableUp.svg';
// // import DownArrow from '@assets/icons/DocumentTableDown.svg';

// interface PaymentSchedule {
//   number: number;
//   date: string;
//   totalPayment: number;
//   interestPayment: number;
//   debtPayment: number;
//   remainingDebt: number;
// }

// interface DocumentTableProps {
//   data: PaymentSchedule[];
// }

// interface SortConfig {
//   key: keyof PaymentSchedule | null;
//   direction: 'asc' | 'desc';
// }

// const DocumentTable: React.FC<DocumentTableProps> = ({ data }) => {
//   const [sortConfig, setSortConfig] = useState<SortConfig>({ key: null, direction: 'asc' });

//   const sortedData = React.useMemo(() => {
//     if (sortConfig.key) {
//       return [...data].sort((a, b) => {
//         if (a[sortConfig.key!] < b[sortConfig.key!]) {
//           return sortConfig.direction === 'asc' ? -1 : 1;
//         }
//         if (a[sortConfig.key!] > b[sortConfig.key!]) {
//           return sortConfig.direction === 'asc' ? 1 : -1;
//         }
//         return 0;
//       });
//     }
//     return data;
//   }, [data, sortConfig]);

//   const requestSort = (key: keyof PaymentSchedule) => {
//     let direction: 'asc' | 'desc' = 'asc';
//     if (sortConfig.key === key && sortConfig.direction === 'asc') {
//       direction = 'desc';
//     }
//     setSortConfig({ key, direction });
//   };

//   const getSortDirectionIcon = (key: keyof PaymentSchedule) => {
//     if (sortConfig.key === key) {
//       // return sortConfig.direction === 'asc' ? <UpArrow /> : <DownArrow />;
//       return sortConfig.direction === 'asc' ? '▲' : '▼';
//     }
//     // return <UpArrow />;
//     return '▲';
//   };

//   return (
//     <div style={{ overflowX: 'auto' }}>
//       <table>
//         <thead>
//           <tr>
//             <th onClick={() => requestSort('number')}>
//               NUMBER {getSortDirectionIcon('number')}
//             </th>
//             <th onClick={() => requestSort('date')}>
//               DATE {getSortDirectionIcon('date')}
//             </th>
//             <th onClick={() => requestSort('totalPayment')}>
//               TOTAL PAYMENT {getSortDirectionIcon('totalPayment')}
//             </th>
//             <th onClick={() => requestSort('interestPayment')}>
//               INTEREST PAYMENT {getSortDirectionIcon('interestPayment')}
//             </th>
//             <th onClick={() => requestSort('debtPayment')}>
//               DEBT PAYMENT {getSortDirectionIcon('debtPayment')}
//             </th>
//             <th onClick={() => requestSort('remainingDebt')}>
//               REMAINING DEBT {getSortDirectionIcon('remainingDebt')}
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           {sortedData.map((row, index) => (
//             <tr key={index}>
//               <td>{row.number}</td>
//               <td>{row.date}</td>
//               <td>{row.totalPayment}</td>
//               <td>{row.interestPayment}</td>
//               <td>{row.debtPayment}</td>
//               <td>{row.remainingDebt}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default DocumentTable;

// import React, { useState } from 'react';
// import './DocumentTable.scss';
// import { DocumentTableProps, PaymentSchedule } from './types';
// import ArrowIcon from '@assets/icons/DocumentTableUp.svg';

// const DocumentTable: React.FC<DocumentTableProps> = ({ data }) => {
//   const [sortConfig, setSortConfig] = useState<{
//     key: keyof PaymentSchedule;
//     direction: 'ascending' | 'descending';
//   } | null>(null);
//   const [sortedData, setSortedData] = useState<PaymentSchedule[]>(data);

//   const requestSort = (key: keyof PaymentSchedule) => {
//     // let direction: 'ascending' | 'descending' = 'ascending';
//     // if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
//     //   direction = 'descending';
//     // }

//     let direction: 'ascending' | 'descending' = 'descending';
//     if (sortConfig && sortConfig.key === key && sortConfig.direction === 'descending') {
//       direction = 'ascending';
//     }

//     console.log(sortedData);
//     console.log(direction);

//     const sorted = [...data].sort((a, b) => {
//       if (a[key] < b[key]) {
//         return direction === 'ascending' ? -1 : 1;
//       }
//       if (a[key] > b[key]) {
//         return direction === 'ascending' ? 1 : -1;
//       }
//       return 0;
//     });

//     console.log(sorted);

//     setSortConfig({ key, direction });
//     setSortedData(sorted);
//   };

//   return (
//     <section className="document-table">
//       <table className="document-table__table">
//         <thead>
//           <tr>
//             {[
//               'number',
//               'date',
//               'totalPayment',
//               'interestPayment',
//               'debtPayment',
//               'remainingDebt',
//             ].map((key) => (
//               <th key={key} onClick={() => requestSort(key as keyof PaymentSchedule)}>
//                 {key.toUpperCase()}
//                 <span className={`sort-icon ${sortConfig?.key === key && sortConfig.direction === 'descending' ? 'descending' : 'ascending'}`}>
//                   <img src={ArrowIcon} alt="Arrow icon" />
//                 </span>
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {sortedData.map((item, index) => (
//             <tr key={index}>
//               <td>{item.number}</td>
//               <td>{item.date}</td>
//               <td>{item.totalPayment}</td>
//               <td>{item.interestPayment}</td>
//               <td>{item.debtPayment}</td>
//               <td>{item.remainingDebt}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </section>
//   );
// };

// export default DocumentTable;
