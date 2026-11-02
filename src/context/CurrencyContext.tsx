import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Currency } from '../types';

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  formatPrice: (amountInSAR: number) => string;
  convertFromSAR: (amountInSAR: number) => number;
}

// 1 USD ~ 3.75 SAR, 1 EUR ~ 4.05 SAR, 1 GBP ~ 4.75 SAR
const RATES: Record<Currency, number> = {
  SAR: 1.0,
  USD: 1 / 3.75,
  EUR: 1 / 4.05,
  GBP: 1 / 4.75
};

const SYMBOLS: Record<Currency, { en: string; ar: string }> = {
  SAR: { en: 'SAR', ar: 'ر.س' },
  USD: { en: '$', ar: '$' },
  EUR: { en: '€', ar: '€' },
  GBP: { en: '£', ar: '£' },
};

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const CurrencyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currency, setCurrency] = useState<Currency>('SAR');

  const convertFromSAR = (amountInSAR: number): number => {
    return Math.round(amountInSAR * RATES[currency]);
  };

  const formatPrice = (amountInSAR: number): string => {
    const converted = convertFromSAR(amountInSAR);
    const formatted = converted.toLocaleString();
    return `${formatted} ${currency}`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatPrice, convertFromSAR }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};
