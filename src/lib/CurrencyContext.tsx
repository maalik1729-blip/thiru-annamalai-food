import React, { createContext, useContext, useState, useEffect } from "react";

export type CurrencyCode = "INR" | "USD" | "EUR" | "GBP" | "AUD" | "SGD" | "AED";

interface CurrencyInfo {
  code: CurrencyCode;
  symbol: string;
  rate: number; // Exchange rate relative to INR
}

// Exchange rates (approximate, for demonstration)
export const currencies: Record<CurrencyCode, CurrencyInfo> = {
  INR: { code: "INR", symbol: "₹", rate: 1 },
  USD: { code: "USD", symbol: "$", rate: 0.012 },
  EUR: { code: "EUR", symbol: "€", rate: 0.011 },
  GBP: { code: "GBP", symbol: "£", rate: 0.0095 },
  AUD: { code: "AUD", symbol: "A$", rate: 0.018 },
  SGD: { code: "SGD", symbol: "S$", rate: 0.016 },
  AED: { code: "AED", symbol: "د.إ", rate: 0.044 },
};

interface CurrencyContextType {
  currency: CurrencyInfo;
  setCurrency: (code: CurrencyCode) => void;
  formatPrice: (priceInINR: number) => string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currencyCode, setCurrencyCode] = useState<CurrencyCode>("INR");

  // Load saved currency on mount
  useEffect(() => {
    const saved = localStorage.getItem("selected_currency") as CurrencyCode;
    if (saved && currencies[saved]) {
      setCurrencyCode(saved);
    }
  }, []);

  const setCurrency = (code: CurrencyCode) => {
    setCurrencyCode(code);
    localStorage.setItem("selected_currency", code);
  };

  const formatPrice = (priceInINR: number) => {
    const info = currencies[currencyCode];
    const converted = priceInINR * info.rate;
    
    // Format based on currency
    if (currencyCode === "INR") {
      return `${info.symbol}${Math.round(converted)}`;
    }
    
    // Use 2 decimal places for other currencies
    return `${info.symbol}${converted.toFixed(2)}`;
  };

  return (
    <CurrencyContext.Provider value={{ currency: currencies[currencyCode], setCurrency, formatPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return context;
}
