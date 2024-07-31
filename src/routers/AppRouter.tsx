import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import Home from '@pages/Home';
import Loan from '@pages/Loan';
import NotFound from '@pages/NotFound';
import LoanScoring from '@pages/LoanScoring';
import LoanDocument from '@pages/LoanDocument';
import LoanDocumentSign from '@pages/LoanDocumentSign';
import LoanDocumentCode from '@pages/LoanDocumentCode';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'credit-card',
        element: <Loan />,
      },
      {
        path: 'credit-card/:applicationId',
        element: <LoanScoring />,
      },
      {
        path: 'credit-card/:applicationId/document',
        element: <LoanDocument />,
      },
      {
        path: 'credit-card/:applicationId/document/sign',
        element: <LoanDocumentSign />,
      },
      {
        path: 'credit-card/:applicationId/document/code',
        element: <LoanDocumentCode />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
