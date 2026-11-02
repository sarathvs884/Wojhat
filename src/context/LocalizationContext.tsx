import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Language } from '../types';

interface LocalizationContextType {
  language: Language;
  isRTL: boolean;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    appName: 'WOJHAT Travel',
    appSubtitle: 'Curated Journeys, Tailored to Perfection',
    explore: 'Explore',
    destinations: 'Destinations',
    packages: 'Packages',
    customTrip: 'Tailor-Made',
    services: 'VIP Services',
    contact: 'Contact Us',
    searchPlaceholder: 'Search destinations, packages, cities...',
    saudiDestinations: 'Discover Saudi Arabia',
    saudiDestinationsSub: 'Living heritage, pristine coral reefs & desert wonders',
    internationalDestinations: 'Global Getaways',
    internationalDestinationsSub: 'Bespoke international itineraries crafted for luxury',
    featuredPackages: 'Curated Travel Packages',
    featuredPackagesSub: 'Handcrafted itineraries for families, couples, and VIPs',
    viewAll: 'View All',
    days: 'Days',
    nights: 'Nights',
    sar: 'SAR',
    usd: 'USD',
    eur: 'EUR',
    perPerson: 'per person',
    bookNow: 'Book Now',
    inquireViaWhatsApp: 'WhatsApp Inquiry',
    planCustomJourney: 'Design Your Custom Trip',
    allDestinations: 'All Destinations',
    saudiOnly: 'Saudi Arabia',
    internationalOnly: 'International',
    highlights: 'Trip Highlights',
    itineraryOverview: 'Day-by-Day Itinerary',
    inclusions: 'What is Included',
    exclusions: 'Not Included',
    bestSeason: 'Best Time to Visit',
    climate: 'Climate & Weather',
    overview: 'Overview',
    ourOffice: 'Our Headquarters',
    officeAddress: 'Office 504, E8 Building, Emaar Square, Jeddah',
    callUs: 'Call Us',
    emailUs: 'Email',
    workingHours: 'Working Hours',
    customTripTitle: 'Design Your Bespoke Journey',
    customTripDesc: 'Tell our travel designers your dreams and we will craft a private itinerary tailored exclusively for you.',
    destinationPreference: 'Destination Type',
    travelDates: 'Estimated Travel Date',
    durationDays: 'Duration (Days)',
    travelStyle: 'Travel Style',
    accommodationPref: 'Accommodation Preference',
    numberOfTravelers: 'Number of Travelers',
    includeChauffeur: 'Include Private Chauffeur & Mercedes',
    includeAirportVIP: 'Include VIP Airport Meet & Assist',
    fullName: 'Full Name',
    phoneWhatsApp: 'Phone / WhatsApp',
    emailAddress: 'Email Address',
    specialNotes: 'Special Requests / Preferences',
    submitInquiry: 'Send Request to Wojhat Concierge',
    requestSubmitted: 'Thank you! A Wojhat Travel Designer will contact you shortly.',
    rating: 'Rating',
    reviews: 'Reviews',
    all: 'All',
    family: 'Family',
    luxury: 'Luxury & Honeymoon',
    adventure: 'Adventure',
    cultural: 'Culture & Heritage',
    vipBespoke: 'VIP Concierge',
    switchLang: 'العربية',
    directAssistance: 'Direct VIP Assistance',
    talkToSpecialist: 'Speak with our travel consultants in Jeddah',
    saveFavorite: 'Saved to Favorites',
    removeFavorite: 'Removed from Favorites',
  },
  ar: {
    appName: 'وجهات للسفر والسياحة',
    appSubtitle: 'وجهتك الأولى لرحلات فاخرة ومصممة خصيصاً',
    explore: 'الرئيسية',
    destinations: 'الوجهات',
    packages: 'الباقات',
    customTrip: 'صمم رحلتك',
    services: 'خدمات VIP',
    contact: 'تواصل معنا',
    searchPlaceholder: 'ابحث عن وجهة، باقة سياحية، أو مدينة...',
    saudiDestinations: 'اكتشف وجهات السعودية',
    saudiDestinationsSub: 'أصالة التراث، روعة البحر الأحمر، وسحر الطبيعة البكر',
    internationalDestinations: 'وجهات عالمية فاخرة',
    internationalDestinationsSub: 'برامج سياحية دولية مصممة لأرقى درجات الرفاهية',
    featuredPackages: 'باقات السفر المختارة',
    featuredPackagesSub: 'برامج متكاملة للعائلات وشهر العسل وكبار الشخصيات',
    viewAll: 'عرض الكل',
    days: 'أيام',
    nights: 'ليالٍ',
    sar: 'ريال',
    usd: 'دولار',
    eur: 'يورو',
    perPerson: 'للشخص الواحد',
    bookNow: 'احجز الآن',
    inquireViaWhatsApp: 'استفسار عبر واتساب',
    planCustomJourney: 'صمم رحلتك المخصصة',
    allDestinations: 'جميع الوجهات',
    saudiOnly: 'داخل المملكة',
    internationalOnly: 'وجهات دولية',
    highlights: 'أبرز مميزات الرحلة',
    itineraryOverview: 'جدول الرحلة يوماً بيوم',
    inclusions: 'الباقة تشمل',
    exclusions: 'الباقة لا تشمل',
    bestSeason: 'أفضل وقت للزيارة',
    climate: 'الطقس والمناخ',
    overview: 'نبذة عن الوجهة',
    ourOffice: 'مقرنا الرئيسي',
    officeAddress: 'مكتب 504، مبنى E8، إعمار سكوير، جدة',
    callUs: 'اتصل بنا',
    emailUs: 'البريد الإلكتروني',
    workingHours: 'أوقات العمل',
    customTripTitle: 'صمم رحلتك الفاخرة الخاصة',
    customTripDesc: 'شاركنا رغباتك وسيقوم مصممو الرحلات في وجهات بإعداد برنامج خاص بك ومصمم حسب رغبتك وميزانيتك.',
    destinationPreference: 'نوع الوجهة المفضلة',
    travelDates: 'تاريخ السفر التقريبي',
    durationDays: 'مدة الرحلة (بالأيام)',
    travelStyle: 'نمط الرحلة',
    accommodationPref: 'مستوى الإقامة المفضل',
    numberOfTravelers: 'عدد المسافرين',
    includeChauffeur: 'إضافة سيارة مرسيدس خاصة مع سائق',
    includeAirportVIP: 'إضافة خدمة الاستقبال والتوديع VIP بالمطار',
    fullName: 'الاسم الكريم',
    phoneWhatsApp: 'رقم الهاتف / واتساب',
    emailAddress: 'البريد الإلكتروني',
    specialNotes: 'ملاحظات وتفضيلات خاصة',
    submitInquiry: 'إرسال الطلب لمستشار وجهات',
    requestSubmitted: 'تم استلام طلبكم بنجاح! سيتواصل معكم مستشار السفر في أقرب وقت.',
    rating: 'التقييم',
    reviews: 'تقييم',
    all: 'الكل',
    family: 'عائلية',
    luxury: 'شهر عسل وفخامة',
    adventure: 'مغامرات وطبيعة',
    cultural: 'ثقافة وتراث',
    vipBespoke: 'خدمات VIP خاصة',
    switchLang: 'English',
    directAssistance: 'مساعدة مباشرة من خبرائنا',
    talkToSpecialist: 'تواصل مباشرة مع استشاريي وجهات في جدة',
    saveFavorite: 'تم الحفظ في المفضلة',
    removeFavorite: 'تم الحذف من المفضلة',
  }
};

const LocalizationContext = createContext<LocalizationContextType | undefined>(undefined);

export const LocalizationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ar'); // Default to Arabic as primary Saudi market, with seamless English toggle

  const isRTL = language === 'ar';

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'ar' ? 'en' : 'ar'));
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LocalizationContext.Provider value={{ language, isRTL, setLanguage, toggleLanguage, t }}>
      {children}
    </LocalizationContext.Provider>
  );
};

export const useLocalization = () => {
  const context = useContext(LocalizationContext);
  if (!context) {
    throw new Error('useLocalization must be used within a LocalizationProvider');
  }
  return context;
};
