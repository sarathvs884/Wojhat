import React, { createContext, useContext, useState, ReactNode } from 'react';
import { BookingRequest, CustomTripInquiry } from '../types';
import { COMPANY_INFO } from '../data/wojhatData';

interface BookingContextType {
  bookings: BookingRequest[];
  favorites: string[];
  addBooking: (booking: Omit<BookingRequest, 'id' | 'createdAt' | 'status'>) => void;
  toggleFavorite: (id: string) => boolean;
  isFavorite: (id: string) => boolean;
  createWhatsAppLink: (message: string) => string;
  submitCustomTrip: (inquiry: CustomTripInquiry) => string;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [bookings, setBookings] = useState<BookingRequest[]>([]);
  const [favorites, setFavorites] = useState<string[]>(['alula', 'wojhat-family-package']);

  const addBooking = (bookingData: Omit<BookingRequest, 'id' | 'createdAt' | 'status'>) => {
    const newBooking: BookingRequest = {
      ...bookingData,
      id: 'WOJ-' + Math.floor(100000 + Math.random() * 900000),
      createdAt: new Date().toISOString(),
      status: 'pending'
    };
    setBookings(prev => [newBooking, ...prev]);
  };

  const toggleFavorite = (id: string): boolean => {
    let nowFavorite = false;
    setFavorites(prev => {
      if (prev.includes(id)) {
        nowFavorite = false;
        return prev.filter(item => item !== id);
      } else {
        nowFavorite = true;
        return [...prev, id];
      }
    });
    return nowFavorite;
  };

  const isFavorite = (id: string): boolean => favorites.includes(id);

  const createWhatsAppLink = (message: string): string => {
    const cleanNumber = COMPANY_INFO.whatsapp.replace(/\D/g, '');
    const encoded = encodeURIComponent(message);
    return `https://wa.me/${cleanNumber}?text=${encoded}`;
  };

  const submitCustomTrip = (inquiry: CustomTripInquiry): string => {
    const summary = `*طلب تصميم رحلة خاصة جديدة من تطبيق وجهات* ✈️
• الاسم: ${inquiry.fullName}
• الجوال: ${inquiry.phoneWhatsApp}
• الوجهة: ${inquiry.preferredDestinations.join(', ')} (${inquiry.destinationType})
• المدة: ${inquiry.tripDurationDays} أيام
• النمط: ${inquiry.travelStyle}
• الفندق المفضل: ${inquiry.accommodationLevel}
• الميزانية المقدرة: ${inquiry.budgetLevelSAR}
• عدد المسافرين: ${inquiry.numberOfTravelers}
• سيارة وسائق خاص: ${inquiry.includePrivateChauffeur ? 'نعم' : 'لا'}
• استقبال وتوديع VIP: ${inquiry.includeVIPAirportMeet ? 'نعم' : 'لا'}
• ملاحظات: ${inquiry.notes || 'لا يوجد'}`;

    return createWhatsAppLink(summary);
  };

  return (
    <BookingContext.Provider
      value={{
        bookings,
        favorites,
        addBooking,
        toggleFavorite,
        isFavorite,
        createWhatsAppLink,
        submitCustomTrip
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};
