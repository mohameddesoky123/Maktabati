import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhatYouGet from '@/components/WhatYouGet';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import PdfPreview from '@/components/PdfPreview';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import Faq from '@/components/Faq';
import FinalCta from '@/components/FinalCta';
import Footer from '@/components/Footer';
import CheckoutPage from '@/components/CheckoutPage';
import PaymentProcessing from '@/components/PaymentProcessing';
import PaymentFailed from '@/components/PaymentFailed';
import PaymentSuccess from '@/components/PaymentSuccess';
import PdfDownload from '@/components/PdfDownload';

type Page = 'landing' | 'checkout' | 'processing' | 'failed' | 'success' | 'download';

function generateOrderId() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ0123456789';
  let id = '';
  for (let i = 0; i < 8; i++) {
    id += chars[Math.floor(Math.random() * chars.length)];
  }
  return id;
}

export default function App() {
  const [page, setPage] = useState<Page>('landing');
  const [orderId, setOrderId] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const goToCheckout = () => setPage('checkout');
  const goToPreview = () => {
    document.querySelector('#preview')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleProceedToPayment = () => {
    setPage('processing');
    // Simulate payment processing
    setTimeout(() => {
      // Simulate 85% success rate for demo
      const success = Math.random() > 0.15;
      if (success) {
        setOrderId(generateOrderId());
        setPage('success');
      } else {
        setPage('failed');
      }
    }, 3000);
  };

  const handleRetry = () => {
    setPage('processing');
    setTimeout(() => {
      const success = Math.random() > 0.15;
      if (success) {
        setOrderId(generateOrderId());
        setPage('success');
      } else {
        setPage('failed');
      }
    }, 3000);
  };

  const handleDownload = () => setPage('download');

  const backToStore = () => setPage('landing');

  if (page === 'checkout') {
    return <CheckoutPage onBack={backToStore} onProceedToPayment={handleProceedToPayment} />;
  }

  if (page === 'processing') {
    return <PaymentProcessing />;
  }

  if (page === 'failed') {
    return <PaymentFailed onRetry={handleRetry} onBackToStore={backToStore} />;
  }

  if (page === 'success') {
    return (
      <PaymentSuccess
        orderId={orderId}
        onDownload={handleDownload}
        onBackToStore={backToStore}
      />
    );
  }

  if (page === 'download') {
    return <PdfDownload onBackToStore={backToStore} />;
  }

  return (
    <div className="min-h-screen bg-navy-50/30">
      <Navbar onBuyClick={goToCheckout} />
      <main>
        <Hero onBuyClick={goToCheckout} onPreviewClick={goToPreview} />
        <WhatYouGet />
        <Features onBuyClick={goToCheckout} />
        <HowItWorks />
        <PdfPreview />
        <Pricing onBuyClick={goToCheckout} />
        <Testimonials />
        <Faq />
        <FinalCta onBuyClick={goToCheckout} />
      </main>
      <Footer />
    </div>
  );
}
