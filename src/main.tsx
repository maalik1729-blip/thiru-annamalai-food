import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from './components/ui/sonner';
import './styles.css';

// Import route components
import HomePage from './routes/index';
import CheckoutPage from './routes/checkout';
import ProductDetailsPage from './routes/product';
import OrderConfirmationPage from './routes/order-confirmation';
import PrivacyPolicyPage from './routes/privacy-policy';
import TermsConditionsPage from './routes/terms-conditions';
import ShippingPolicyPage from './routes/shipping-policy';
import CancellationRefundPage from './routes/cancellation-refund';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-conditions" element={<TermsConditionsPage />} />
          <Route path="/shipping-policy" element={<ShippingPolicyPage />} />
          <Route path="/cancellation-refund" element={<CancellationRefundPage />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </QueryClientProvider>
  </React.StrictMode>
);
