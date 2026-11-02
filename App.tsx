import React from 'react';
import { LocalizationProvider } from './src/context/LocalizationContext';
import { CurrencyProvider } from './src/context/CurrencyContext';
import { BookingProvider } from './src/context/BookingContext';
import { AppNavigator } from './src/navigation/AppNavigator';

export default function App() {
  return (
    <LocalizationProvider>
      <CurrencyProvider>
        <BookingProvider>
          <AppNavigator />
        </BookingProvider>
      </CurrencyProvider>
    </LocalizationProvider>
  );
}
