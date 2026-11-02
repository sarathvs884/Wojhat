export type Language = 'en' | 'ar';
export type Currency = 'SAR' | 'USD' | 'EUR' | 'GBP';

export type DestinationCategory = 'saudi' | 'international';
export type SaudiRegion = 'Western (Jeddah, Makkah, Madinah)' | 'Central (Riyadh, Diriyah)' | 'North-West (AlUla, Tabuk, NEOM)' | 'Southern (Abha, Asir)' | 'Eastern (Al-Ahsa, Dammam)';

export interface Destination {
  id: string;
  nameEn: string;
  nameAr: string;
  category: DestinationCategory;
  regionEn: string;
  regionAr: string;
  taglineEn: string;
  taglineAr: string;
  descriptionEn: string;
  descriptionAr: string;
  image: string;
  heroImage: string;
  gallery: string[];
  bestTimeToVisit: {
    en: string;
    ar: string;
  };
  highlightsEn: string[];
  highlightsAr: string[];
  climateEn: string;
  climateAr: string;
  rating: number;
  reviewCount: number;
  featured: boolean;
  latitude: number;
  longitude: number;
}

export type PackageType = 'family' | 'luxury_honeymoon' | 'adventure' | 'cultural' | 'vip_bespoke';

export interface ItineraryDay {
  day: number;
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  mealsIncluded: string[];
  stayHotelEn?: string;
  stayHotelAr?: string;
}

export interface TravelPackage {
  id: string;
  titleEn: string;
  titleAr: string;
  type: PackageType;
  destinationId: string;
  destinationNameEn: string;
  destinationNameAr: string;
  durationDays: number;
  durationNights: number;
  pricePerPersonSAR: number;
  badgeEn: string;
  badgeAr: string;
  coverImage: string;
  descriptionEn: string;
  descriptionAr: string;
  inclusionsEn: string[];
  inclusionsAr: string[];
  exclusionsEn: string[];
  exclusionsAr: string[];
  itinerary: ItineraryDay[];
  featured: boolean;
  minGroupSize: number;
  maxGroupSize: number;
}

export interface WojhatService {
  id: string;
  titleEn: string;
  titleAr: string;
  shortDescEn: string;
  shortDescAr: string;
  detailedDescEn: string;
  detailedDescAr: string;
  icon: string;
  image: string;
  featuresEn: string[];
  featuresAr: string[];
  turnaroundTimeEn: string;
  turnaroundTimeAr: string;
}

export interface BookingRequest {
  id: string;
  packageId?: string;
  serviceId?: string;
  destinationId?: string;
  titleEn: string;
  fullName: string;
  email: string;
  phone: string;
  travelDate: string;
  numberOfAdults: number;
  numberOfChildren: number;
  specialRequests?: string;
  totalEstimateSAR: number;
  currency: Currency;
  status: 'pending' | 'confirmed' | 'contacted';
  createdAt: string;
}

export interface CustomTripInquiry {
  destinationType: 'saudi' | 'international' | 'both';
  preferredDestinations: string[];
  tripDurationDays: number;
  travelStyle: 'Luxury VIP' | 'Family Fun' | 'Honeymoon Romantic' | 'Adventure & Nature' | 'Heritage & Culture';
  accommodationLevel: '5-Star Ultra Luxury' | '5-Star Classic' | 'Boutique Heritage' | '4-Star Premium';
  budgetLevelSAR: string;
  departureCity: string;
  approximateTravelDate: string;
  numberOfTravelers: number;
  includePrivateChauffeur: boolean;
  includeVIPAirportMeet: boolean;
  fullName: string;
  phoneWhatsApp: string;
  email: string;
  notes: string;
}
