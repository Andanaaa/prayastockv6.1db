import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Layout from './components/Layout';
import StockPage from './pages/StockPage';
import AddItemPage from './pages/AddItemPage';
import IncomingPage from './pages/IncomingPage';
import ReturnPage from './pages/ReturnPage';
import SalesPage from './pages/SalesPage';
import ReportsPage from './pages/ReportsPage';
import BorrowPage from './pages/BorrowPage';

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/stock" replace />} />
          <Route path="/stock" element={<StockPage />} />
          <Route path="/add" element={<AddItemPage />} />
          <Route path="/in" element={<IncomingPage />} />
          <Route path="/return" element={<ReturnPage />} />
          <Route path="/sales" element={<SalesPage />} />
          <Route path="/borrow" element={<BorrowPage />} />
          <Route path="/reports" element={<ReportsPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;