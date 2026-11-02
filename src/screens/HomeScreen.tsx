import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet, Image, Linking } from 'react-native';
import { useLocalization } from '../context/LocalizationContext';
import { useCurrency } from '../context/CurrencyContext';
import { useBooking } from '../context/BookingContext';
import { DESTINATIONS, PACKAGES, SERVICES, TESTIMONIALS, COMPANY_INFO } from '../data/wojhatData';
import { DestinationCard } from '../components/DestinationCard';
import { PackageCard } from '../components/PackageCard';
import { BookingModal } from '../components/BookingModal';
import { TravelPackage, Destination } from '../types';
import { THEME } from '../styles/theme';

interface HomeScreenProps {
  onNavigateToDestinations: () => void;
  onNavigateToPackages: () => void;
  onNavigateToServices: () => void;
  onNavigateToCustomTrip: () => void;
  onSelectDestination: (dest: Destination) => void;
  onSelectPackage: (pkg: TravelPackage) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onNavigateToDestinations,
  onNavigateToPackages,
  onNavigateToServices,
  onNavigateToCustomTrip,
  onSelectDestination,
  onSelectPackage
}) => {
  const { language, isRTL, t } = useLocalization();
  const { createWhatsAppLink } = useBooking();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBookingPkg, setSelectedBookingPkg] = useState<TravelPackage | undefined>(undefined);
  const [bookingModalVisible, setBookingModalVisible] = useState(false);

  const filteredDestinations = DESTINATIONS.filter(d => {
    const q = searchQuery.toLowerCase();
    return d.nameEn.toLowerCase().includes(q) || d.nameAr.includes(q);
  });

  const featuredDestinations = filteredDestinations.filter(d => d.featured).slice(0, 3);
  const featuredPackages = PACKAGES.filter(p => p.featured).slice(0, 3);

  const openWhatsAppGeneral = () => {
    const msg = language === 'ar'
      ? 'السلام عليكم، أود الاستفسار عن باقات وخدمات وجهات للسفر والسياحة.'
      : 'Hello, I would like to inquire about Wojhat Travel and Tourism packages and VIP services.';
    Linking.openURL(createWhatsAppLink(msg)).catch(() => {});
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Hero Banner */}
      <View style={styles.heroContainer}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1578895101408-1a36b834405b?auto=format&fit=crop&w=1600&q=80' }}
          style={styles.heroImage}
        />
        <View style={styles.heroOverlay} />

        <View style={[styles.heroContent, isRTL && styles.heroContentRtl]}>
          <View style={styles.heroBadge}>
            <Text style={styles.heroBadgeText}>WOJHAT LUXURY TRAVEL</Text>
          </View>
          <Text style={[styles.heroTitle, isRTL && styles.textRtl]}>
            {language === 'ar' ? 'رحلات استثنائية، مصممة لأدق التفاصيل' : 'Curated Journeys, Tailored to Perfection'}
          </Text>
          <Text style={[styles.heroSub, isRTL && styles.textRtl]}>
            {language === 'ar'
              ? 'اكتشف روعة المملكة العربية السعودية وأرقى الوجهات العالمية مع خبراء السياحة الفاخرة.'
              : 'Discover Saudi Arabia’s historic wonders and pristine coasts alongside bespoke global getaways.'}
          </Text>

          {/* Quick CTA row */}
          <View style={[styles.heroCtaRow, isRTL && styles.heroCtaRowRtl]}>
            <TouchableOpacity onPress={onNavigateToCustomTrip} style={styles.primaryCta}>
              <Text style={styles.primaryCtaText}>{t('planCustomJourney')}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={openWhatsAppGeneral} style={styles.whatsappCta}>
              <Text style={styles.whatsappCtaText}>💬 WhatsApp</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Search Input Bar */}
      <View style={styles.searchSection}>
        <View style={[styles.searchBar, isRTL && styles.searchBarRtl]}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={[styles.searchInput, isRTL && styles.textRtl]}
            placeholder={t('searchPlaceholder')}
            placeholderTextColor="#64748B"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          {searchQuery ? (
            <TouchableOpacity onPress={() => setSearchQuery('')}>
              <Text style={styles.clearIcon}>✕</Text>
            </TouchableOpacity>
          ) : null}
        </View>
      </View>

      {/* Quick Category Badges */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoryScroll}>
        <TouchableOpacity onPress={onNavigateToDestinations} style={[styles.catPill, styles.activeCatPill]}>
          <Text style={styles.catPillText}>🇸🇦 {language === 'ar' ? 'وجهات السعودية' : 'Saudi Arabia'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onNavigateToPackages} style={styles.catPill}>
          <Text style={styles.catPillText}>✨ {language === 'ar' ? 'باقات السفر' : 'Holiday Packages'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onNavigateToServices} style={styles.catPill}>
          <Text style={styles.catPillText}>👑 {language === 'ar' ? 'خدمات VIP' : 'VIP Concierge'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onNavigateToCustomTrip} style={styles.catPill}>
          <Text style={styles.catPillText}>🎯 {language === 'ar' ? 'صمم رحلتك' : 'Tailor-Made'}</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Featured Destinations Section */}
      <View style={styles.sectionHeader}>
        <View>
          <Text style={[styles.sectionTitle, isRTL && styles.textRtl]}>{t('saudiDestinations')}</Text>
          <Text style={[styles.sectionSub, isRTL && styles.textRtl]}>{t('saudiDestinationsSub')}</Text>
        </View>
        <TouchableOpacity onPress={onNavigateToDestinations}>
          <Text style={styles.viewAllBtn}>{t('viewAll')} →</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsWrapper}>
        {featuredDestinations.map(destination => (
          <DestinationCard
            key={destination.id}
            destination={destination}
            featured={destination.id === 'alula'}
            onPress={() => onSelectDestination(destination)}
          />
        ))}
      </View>

      {/* Featured Packages Section */}
      <View style={styles.sectionHeader}>
        <View>
          <Text style={[styles.sectionTitle, isRTL && styles.textRtl]}>{t('featuredPackages')}</Text>
          <Text style={[styles.sectionSub, isRTL && styles.textRtl]}>{t('featuredPackagesSub')}</Text>
        </View>
        <TouchableOpacity onPress={onNavigateToPackages}>
          <Text style={styles.viewAllBtn}>{t('viewAll')} →</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsWrapper}>
        {featuredPackages.map(pkg => (
          <PackageCard
            key={pkg.id}
            travelPackage={pkg}
            onPress={() => onSelectPackage(pkg)}
            onBookPress={() => {
              setSelectedBookingPkg(pkg);
              setBookingModalVisible(true);
            }}
          />
        ))}
      </View>

      {/* Custom Journey Callout Banner */}
      <View style={styles.calloutCard}>
        <View style={styles.calloutGlow} />
        <Text style={[styles.calloutTag, isRTL && styles.textRtl]}>EXCLUSIVE SERVICE</Text>
        <Text style={[styles.calloutTitle, isRTL && styles.textRtl]}>{t('customTripTitle')}</Text>
        <Text style={[styles.calloutDesc, isRTL && styles.textRtl]}>{t('customTripDesc')}</Text>
        <TouchableOpacity onPress={onNavigateToCustomTrip} style={styles.calloutBtn}>
          <Text style={styles.calloutBtnText}>{t('planCustomJourney')} ➔</Text>
        </TouchableOpacity>
      </View>

      {/* VIP Services Strip */}
      <View style={styles.sectionHeader}>
        <View>
          <Text style={[styles.sectionTitle, isRTL && styles.textRtl]}>{t('services')}</Text>
          <Text style={[styles.sectionSub, isRTL && styles.textRtl]}>
            {language === 'ar' ? 'حلول متكاملة للمسافر العصري وكبار الشخصيات' : 'Seamless luxury handling & executive solutions'}
          </Text>
        </View>
        <TouchableOpacity onPress={onNavigateToServices}>
          <Text style={styles.viewAllBtn}>{t('viewAll')} →</Text>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.servicesScroll}>
        {SERVICES.slice(0, 4).map(srv => (
          <TouchableOpacity
            key={srv.id}
            onPress={onNavigateToServices}
            style={styles.serviceMiniCard}
            activeOpacity={0.88}
          >
            <Image source={{ uri: srv.image }} style={styles.serviceMiniImg} />
            <View style={styles.serviceMiniOverlay} />
            <Text style={styles.serviceMiniTitle} numberOfLines={2}>
              {language === 'ar' ? srv.titleAr : srv.titleEn}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Testimonials */}
      <View style={styles.testimonialSection}>
        <Text style={[styles.sectionTitle, isRTL && styles.textRtl]}>
          {language === 'ar' ? 'آراء عملاء وجهات' : 'Client Testimonials'}
        </Text>
        {TESTIMONIALS.map(tst => (
          <View key={tst.id} style={styles.testimonialCard}>
            <View style={[styles.tstHeader, isRTL && styles.tstHeaderRtl]}>
              <View>
                <Text style={styles.tstAuthor}>{language === 'ar' ? tst.authorAr : tst.authorEn}</Text>
                <Text style={styles.tstRole}>{language === 'ar' ? tst.roleAr : tst.roleEn}</Text>
              </View>
              <Text style={styles.tstStars}>★★★★★</Text>
            </View>
            <Text style={[styles.tstComment, isRTL && styles.textRtl]}>
              "{language === 'ar' ? tst.commentAr : tst.commentEn}"
            </Text>
          </View>
        ))}
      </View>

      {/* Footer Details */}
      <View style={styles.footerBrand}>
        <Text style={styles.footerName}>{COMPANY_INFO.nameEn}</Text>
        <Text style={styles.footerNameAr}>{COMPANY_INFO.nameAr}</Text>
        <Text style={styles.footerAddress}>📍 {language === 'ar' ? COMPANY_INFO.headquartersAr : COMPANY_INFO.headquartersEn}</Text>
        <Text style={styles.footerContact}>📞 {COMPANY_INFO.phone} | ✉️ {COMPANY_INFO.email}</Text>
        <Text style={styles.footerLicense}>{COMPANY_INFO.license}</Text>
      </View>

      {/* Booking Modal */}
      <BookingModal
        visible={bookingModalVisible}
        onClose={() => setBookingModalVisible(false)}
        travelPackage={selectedBookingPkg}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.colors.backgroundDark,
  },
  heroContainer: {
    height: 380,
    width: '100%',
    position: 'relative',
    justifyContent: 'flex-end',
  },
  heroImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(10, 25, 38, 0.68)',
  },
  heroContent: {
    padding: 20,
    paddingBottom: 28,
  },
  heroContentRtl: {
    alignItems: 'flex-end',
  },
  heroBadge: {
    backgroundColor: 'rgba(197, 168, 128, 0.25)',
    borderWidth: 1,
    borderColor: THEME.colors.accentGold,
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: THEME.radii.pill,
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  heroBadgeText: {
    color: THEME.colors.accentGoldLight,
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1,
  },
  heroTitle: {
    color: THEME.colors.textLight,
    fontSize: 24,
    fontWeight: '900',
    marginBottom: 8,
    lineHeight: 32,
  },
  heroSub: {
    color: '#CBD5E1',
    fontSize: 13,
    lineHeight: 20,
    marginBottom: 18,
  },
  heroCtaRow: {
    flexDirection: 'row',
    gap: 12,
  },
  heroCtaRowRtl: {
    flexDirection: 'row-reverse',
  },
  primaryCta: {
    backgroundColor: THEME.colors.accentGold,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: THEME.radii.pill,
    ...THEME.shadows.goldGlow,
  },
  primaryCtaText: {
    color: THEME.colors.primaryDark,
    fontSize: 13,
    fontWeight: '800',
  },
  whatsappCta: {
    backgroundColor: '#25D366',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: THEME.radii.pill,
  },
  whatsappCtaText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '800',
  },
  searchSection: {
    paddingHorizontal: 16,
    marginTop: -20,
    zIndex: 10,
  },
  searchBar: {
    backgroundColor: THEME.colors.surfaceDark,
    borderRadius: THEME.radii.xl,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 48,
    borderWidth: 1,
    borderColor: THEME.colors.surfaceBorder,
    ...THEME.shadows.card,
  },
  searchBarRtl: {
    flexDirection: 'row-reverse',
  },
  searchIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  clearIcon: {
    color: '#94A3B8',
    fontSize: 14,
    padding: 4,
  },
  searchInput: {
    flex: 1,
    color: THEME.colors.textLight,
    fontSize: 14,
  },
  categoryScroll: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    gap: 8,
  },
  catPill: {
    backgroundColor: THEME.colors.surfaceDark,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: THEME.radii.pill,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  activeCatPill: {
    backgroundColor: 'rgba(197, 168, 128, 0.2)',
    borderColor: THEME.colors.accentGold,
  },
  catPillText: {
    color: THEME.colors.textLight,
    fontSize: 12,
    fontWeight: '700',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 16,
    marginTop: 18,
    marginBottom: 12,
  },
  sectionTitle: {
    color: THEME.colors.textLight,
    fontSize: 19,
    fontWeight: '800',
  },
  sectionSub: {
    color: THEME.colors.textMuted,
    fontSize: 12,
    marginTop: 2,
  },
  viewAllBtn: {
    color: THEME.colors.accentGold,
    fontSize: 13,
    fontWeight: '700',
  },
  cardsWrapper: {
    paddingHorizontal: 16,
  },
  calloutCard: {
    margin: 16,
    backgroundColor: THEME.colors.primaryDark,
    padding: 22,
    borderRadius: THEME.radii.lg,
    borderWidth: 1,
    borderColor: THEME.colors.accentGold,
    position: 'relative',
    overflow: 'hidden',
  },
  calloutGlow: {
    position: 'absolute',
    top: -50,
    right: -50,
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: 'rgba(197, 168, 128, 0.15)',
  },
  calloutTag: {
    color: THEME.colors.accentGold,
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1,
    marginBottom: 6,
  },
  calloutTitle: {
    color: THEME.colors.textLight,
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 8,
  },
  calloutDesc: {
    color: '#CBD5E1',
    fontSize: 13,
    lineHeight: 20,
    marginBottom: 16,
  },
  calloutBtn: {
    backgroundColor: THEME.colors.accentGold,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: THEME.radii.pill,
    alignSelf: 'flex-start',
  },
  calloutBtnText: {
    color: THEME.colors.primaryDark,
    fontSize: 13,
    fontWeight: '800',
  },
  servicesScroll: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    gap: 12,
  },
  serviceMiniCard: {
    width: 170,
    height: 130,
    borderRadius: THEME.radii.md,
    overflow: 'hidden',
    position: 'relative',
    justifyContent: 'flex-end',
    padding: 10,
    borderWidth: 1,
    borderColor: THEME.colors.surfaceBorder,
  },
  serviceMiniImg: {
    ...StyleSheet.absoluteFillObject,
  },
  serviceMiniOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(10, 25, 38, 0.65)',
  },
  serviceMiniTitle: {
    color: THEME.colors.textLight,
    fontSize: 13,
    fontWeight: '700',
    lineHeight: 18,
  },
  testimonialSection: {
    paddingHorizontal: 16,
    marginTop: 24,
  },
  testimonialCard: {
    backgroundColor: THEME.colors.surfaceDark,
    borderRadius: THEME.radii.md,
    padding: 16,
    marginTop: 12,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
  },
  tstHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  tstHeaderRtl: {
    flexDirection: 'row-reverse',
  },
  tstAuthor: {
    color: THEME.colors.textLight,
    fontSize: 14,
    fontWeight: '700',
  },
  tstRole: {
    color: THEME.colors.accentGold,
    fontSize: 11,
  },
  tstStars: {
    color: '#FBBF24',
    fontSize: 12,
  },
  tstComment: {
    color: '#94A3B8',
    fontSize: 12,
    lineHeight: 18,
    fontStyle: 'italic',
  },
  footerBrand: {
    alignItems: 'center',
    paddingVertical: 32,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.08)',
    marginTop: 24,
  },
  footerName: {
    color: THEME.colors.textLight,
    fontSize: 16,
    fontWeight: '800',
    letterSpacing: 1,
  },
  footerNameAr: {
    color: THEME.colors.accentGold,
    fontSize: 14,
    fontWeight: '700',
    marginTop: 2,
    marginBottom: 10,
  },
  footerAddress: {
    color: '#94A3B8',
    fontSize: 11,
    textAlign: 'center',
    marginBottom: 4,
  },
  footerContact: {
    color: '#CBD5E1',
    fontSize: 11,
    marginBottom: 4,
  },
  footerLicense: {
    color: '#64748B',
    fontSize: 10,
  },
  textRtl: {
    textAlign: 'right',
  },
});
