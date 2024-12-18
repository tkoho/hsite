import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { FAQPage } from './pages/FAQPage';
import { ContactPage } from './pages/ContactPage';
import { DocumentationPage } from './pages/DocumentationPage';
import { PricingPage } from './pages/PricingPage';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/faqs" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/docs" element={<DocumentationPage />} />
          <Route path="/pricing" element={<PricingPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}