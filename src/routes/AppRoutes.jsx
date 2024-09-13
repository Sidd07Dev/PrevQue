import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ResultsPage from '../pages/ResultsPage';
import PaperDetailPage from '../pages/PaperDetailPage';
import NotFoundPage from '../pages/NotFoundPage';
import ContactUs from '../components/ContacUs';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Home Page Route */}
      <Route path="/" element={<HomePage />} />

      {/* Results Page Route */}
      <Route path="/questions" element={<ResultsPage />} />

      {/* Results Page Route */}
      <Route path="/contact" element={<ContactUs />} />

      {/* Paper Detail Page Route */}
      <Route path="/paper/:id" element={<PaperDetailPage />} />

      {/* 404 Not Found Route */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
