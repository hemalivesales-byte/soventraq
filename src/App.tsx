import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router';
import ScrollToTop from './components/ScrollToTop';

// Lazy-load all pages so each page's bundle is only loaded when visited
const HomePage      = lazy(() => import('./pages/HomePage'));
const ServicesPage  = lazy(() => import('./pages/ServicesPage'));
const PlatformPage  = lazy(() => import('./pages/PlatformPage'));
const SolutionsPage = lazy(() => import('./pages/SolutionsPage'));
const AboutPage     = lazy(() => import('./pages/AboutPage'));
const ContactPage   = lazy(() => import('./pages/ContactPage'));

const PageSpinner: React.FC = () => (
  <div
    className="min-h-screen flex items-center justify-center"
    style={{ background: '#03020f' }}
  >
    <div
      className="w-10 h-10 rounded-full border-2 border-transparent animate-spin"
      style={{ borderTopColor: '#00f0ff' }}
    />
  </div>
);

const App: React.FC = () => (
  <>
    <ScrollToTop />
    <Suspense fallback={<PageSpinner />}>
      <Routes>
        <Route path="/"          element={<HomePage />} />
        <Route path="/services"  element={<ServicesPage />} />
        <Route path="/platform"  element={<PlatformPage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/about"     element={<AboutPage />} />
        <Route path="/contact"   element={<ContactPage />} />
        {/* Fallback: redirect unknown routes to home */}
        <Route path="*"          element={<HomePage />} />
      </Routes>
    </Suspense>
  </>
);

export default App;
