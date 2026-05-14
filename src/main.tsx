import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from './components/ui/sonner';
import { CurrencyProvider } from './lib/CurrencyContext';
import { CartProvider, useCart } from './lib/CartContext';
import { CartDrawer } from './components/site/CartDrawer';
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
import ShopPage from './routes/shop';

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
      <CurrencyProvider>
        <CartProvider>
          <AppContent />
        </CartProvider>
      </CurrencyProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

function AppContent() {
  const { cart, cartOpen, setCartOpen, updateQty, remove } = useCart();
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-conditions" element={<TermsConditionsPage />} />
        <Route path="/shipping-policy" element={<ShippingPolicyPage />} />
        <Route path="/cancellation-refund" element={<CancellationRefundPage />} />
      </Routes>
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} items={cart} updateQty={updateQty} remove={remove} />
      <Toaster />
    </BrowserRouter>
  );
}
