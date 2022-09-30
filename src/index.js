import React from 'react';
import ReactDOM from 'react-dom/client';
import AdminDash from './AdminDash';
import ManagerDash from './ManagerDash';
import SummaryC from './SummaryC';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AdminDash />
  </React.StrictMode>
);