import React from 'react';
import Navigation from '../sections/Navigation';
import Footer from '../sections/Footer';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => (
  <div className="min-h-screen bg-[#03020f] text-white">
    <Navigation />
    <main>{children}</main>
    <Footer />
  </div>
);

export default PageLayout;
