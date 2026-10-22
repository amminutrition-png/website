import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import OrderModal from './components/OrderModal';
import Lightbox from './components/Lightbox';
import PolicyModal from './components/PolicyModal';
import { productData } from './data/productData';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname || '/');
  const [quantity, setQuantity] = useState(1);
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [activePolicyKey, setActivePolicyKey] = useState(null);

  // Synchronize browser history / popstate
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (path) => {
    if (path !== currentPath) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const isAboutPage = currentPath === '/about';

  return (
    <div className="app-root">
      {/* Shared Site Header */}
      <Header 
        currentPath={currentPath} 
        onNavigate={handleNavigate} 
        onOpenOrder={() => setOrderModalOpen(true)} 
      />

      {/* Main Page View */}
      {isAboutPage ? (
        <AboutPage onNavigate={handleNavigate} />
      ) : (
        <HomePage 
          quantity={quantity} 
          setQuantity={setQuantity} 
          onOpenOrder={() => setOrderModalOpen(true)}
          onOpenLightbox={handleOpenLightbox}
        />
      )}

      {/* Shared Site Footer (Identical on Page 1 and Page 2) */}
      <Footer 
        onNavigate={handleNavigate} 
        onOpenPolicy={(policy) => setActivePolicyKey(policy)} 
      />

      {/* Global WhatsApp Order Modal */}
      <OrderModal 
        isOpen={orderModalOpen} 
        onClose={() => setOrderModalOpen(false)} 
        initialQuantity={quantity} 
      />

      {/* Product Image Lightbox Viewer */}
      <Lightbox 
        isOpen={lightboxOpen} 
        images={productData.gallery} 
        activeIndex={lightboxIndex} 
        onSelectIndex={setLightboxIndex} 
        onClose={() => setLightboxOpen(false)} 
      />

      {/* Business Policy Modal */}
      <PolicyModal 
        policyKey={activePolicyKey} 
        onClose={() => setActivePolicyKey(null)} 
      />
    </div>
  );
}
