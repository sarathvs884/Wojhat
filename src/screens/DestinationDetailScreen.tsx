import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { Destination, TravelPackage } from '../types';
import { useLocalization } from '../context/LocalizationContext';
import { useBooking } from '../context/BookingContext';
import { PACKAGES } from '../data/wojhatData';
import { PackageCard } from '../components/PackageCard';
import { THEME } from '../styles/theme';

interface DestinationDetailScreenProps {
  destination: Destination;
  onBack: () => void;
  onSelectPackage: (pkg: TravelPackage) => void;
  onNavigateToCustomTrip: () => void;
}

export const DestinationDetailScreen: React.FC<DestinationDetailScreenProps> = ({
  destination,
  onBack,
  onSelectPackage,
  onNavigateToCustomTrip
}) => {
  const { language, isRTL, t } = useLocalization();
  const { isFavorite, toggleFavorite, createWhatsAppLink } = useBooking();

  const name = language === 'ar' ? destination.nameAr : destination.nameEn;
  const tagline = language === 'ar' ? destination.taglineAr : destination.taglineEn;
  const description = language === 'ar' ? destination.descriptionAr : destination.descriptionEn;
  const region = language === 'ar' ? destination.regionAr : destination.regionEn;
  const highlights = language === 'ar' ? destination.highlightsAr : destination.highlightsEn;
  const bestTime = language === 'ar' ? destination.bestTimeToVisit.ar : destination.bestTimeToVisit.en;
  const climate = language === 'ar' ? destination.climateAr : destination.climateEn;

  const destinationPackages = PACKAGES.filter(p => p.destinationId === destination.id);
  const favorited = isFavorite(destination.id);

  const handleWhatsAppInquiry = () => {
    const msg = language === 'ar'
      ? `مرحباً، أود الاستفسار عن تنظيم رحلة سياحية إلى (${name}) عبر شركة وجهات.`
      : `Hello, I would like to inquire about booking a luxury trip to (${name}) with Wojhat Travel.`;
    Linking.openURL(createWhatsAppLink(msg)).catch(() => {});
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Hero Image */}
      <View style={styles.heroWrapper}>
        <Image source={{ uri: destination.heroImage || destination.image }} style={styles.heroImg} />
        <View style={styles.gradient} />

        {/* Top Floating Buttons */}
        <View style={[styles.floatingBar, isRTL && styles.floatingBarRtl]}>
          <TouchableOpacity onPress={onBack} style={styles.circleBtn}>
            <Text style={styles.btnIcon}>{isRTL ? '→' : '←'}</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => toggleFavorite(destination.id)} style={styles.circleBtn}>
            <Text style={[styles.btnIcon, favorited && styles.heartActive]}>
              {favorited ? '♥' : '♡'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Title overlay */}
        <View style={[styles.heroInfo, isRTL && styles.heroInfoRtl]}>
          <View style={styles.categoryBadge}>
            <Text style={styles.categoryText}>
              {destination.category === 'saudi' ? '🇸🇦 Kingdom of Saudi Arabia' : '🌍 International Tour'}
            </Text>
          </View>
          <Text style={styles.heroTitle}>{name}</Text>
          <Text style={styles.heroTagline}>{tagline}</Text>
        </View>
      </View>

      <View style={styles.content}>
        {/* Quick Info Grid */}
        <View style={[styles.infoGrid, isRTL && styles.infoGridRtl]}>
          <View style={styles.infoBox}>
            <Text style={styles.infoIcon}>🗓</Text>
            <Text style={styles.infoTitle}>{t('bestSeason')}</Text>
            <Text style={styles.infoDesc}>{bestTime}</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.infoIcon}>🌤</Text>
            <Text style={styles.infoTitle}>{t('climate')}</Text>
            <Text style={styles.infoDesc}>{climate}</Text>
          </View>
        </View>

        {/* Overview */}
        <Text style={[styles.sectionHeading, isRTL && styles.textRtl]}>{t('overview')}</Text>
        <Text style={[styles.description, isRTL && styles.textRtl]}>{description}</Text>

        {/* Highlights */}
        <Text style={[styles.sectionHeading, isRTL && styles.textRtl]}>{t('highlights')}</Text>
        <View style={styles.highlightsList}>
          {highlights.map((h, i) => (
            <View key={i} style={[styles.hlItem, isRTL && styles.hlItemRtl]}>
              <Text style={styles.hlIcon}>✦</Text>
              <Text style={[styles.hlText, isRTL && styles.textRtl]}>{h}</Text>
            </View>
          ))}
        </View>

        {/* Photo Gallery Strip */}
        {destination.gallery && destination.gallery.length > 0 && (
          <>
            <Text style={[styles.sectionHeading, isRTL && styles.textRtl]}>
              {language === 'ar' ? 'معرض الصور' : 'Photo Gallery'}
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.galleryScroll}>
              {destination.gallery.map((img, idx) => (
                <Image key={idx} source={{ uri: img }} style={styles.galleryThumb} />
              ))}
            </ScrollView>
          </>
        )}

        {/* Available Packages */}
        {destinationPackages.length > 0 && (
          <View style={styles.packagesSection}>
            <Text style={[styles.sectionHeading, isRTL && styles.textRtl]}>
              {language === 'ar' ? `باقات ${name} المتاحة` : `Available Packages for ${name}`}
            </Text>
            {destinationPackages.map(pkg => (
              <PackageCard
                key={pkg.id}
                travelPackage={pkg}
                onPress={() => onSelectPackage(pkg)}
              />
            ))}
          </View>
        )}

        {/* Call to action */}
        <View style={styles.actionSection}>
          <TouchableOpacity onPress={handleWhatsAppInquiry} style={styles.whatsappActionBtn}>
            <Text style={styles.actionBtnText}>💬 {t('inquireViaWhatsApp')}</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={onNavigateToCustomTrip} style={styles.customActionBtn}>
            <Text style={styles.customBtnText}>{t('planCustomJourney')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.colors.backgroundDark,
  },
  heroWrapper: {
    height: 340,
    width: '100%',
    position: 'relative',
    justifyContent: 'space-between',
  },
  heroImg: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(10, 25, 38, 0.6)',
  },
  floatingBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    zIndex: 10,
  },
  floatingBarRtl: {
    flexDirection: 'row-reverse',
  },
  circleBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(15, 37, 55, 0.75)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  btnIcon: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  heartActive: {
    color: '#EF4444',
  },
  heroInfo: {
    padding: 20,
    zIndex: 2,
  },
  heroInfoRtl: {
    alignItems: 'flex-end',
  },
  categoryBadge: {
    backgroundColor: 'rgba(197, 168, 128, 0.25)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: THEME.radii.pill,
    alignSelf: 'flex-start',
    marginBottom: 6,
    borderWidth: 1,
    borderColor: THEME.colors.accentGold,
  },
  categoryText: {
    color: THEME.colors.accentGoldLight,
    fontSize: 10,
    fontWeight: '700',
  },
  heroTitle: {
    color: THEME.colors.textLight,
    fontSize: 28,
    fontWeight: '900',
    marginBottom: 4,
  },
  heroTagline: {
    color: '#CBD5E1',
    fontSize: 13,
  },
  content: {
    padding: 16,
  },
  infoGrid: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
  },
  infoGridRtl: {
    flexDirection: 'row-reverse',
  },
  infoBox: {
    flex: 1,
    backgroundColor: THEME.colors.surfaceDark,
    padding: 14,
    borderRadius: THEME.radii.md,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
  },
  infoIcon: {
    fontSize: 18,
    marginBottom: 4,
  },
  infoTitle: {
    color: THEME.colors.accentGold,
    fontSize: 11,
    fontWeight: '700',
    marginBottom: 4,
  },
  infoDesc: {
    color: THEME.colors.textLight,
    fontSize: 12,
  },
  sectionHeading: {
    color: THEME.colors.textLight,
    fontSize: 18,
    fontWeight: '800',
    marginTop: 14,
    marginBottom: 10,
  },
  description: {
    color: '#CBD5E1',
    fontSize: 13,
    lineHeight: 22,
    marginBottom: 14,
  },
  highlightsList: {
    gap: 8,
    marginBottom: 18,
  },
  hlItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
  },
  hlItemRtl: {
    flexDirection: 'row-reverse',
  },
  hlIcon: {
    color: THEME.colors.accentGold,
    fontSize: 14,
    marginTop: 2,
  },
  hlText: {
    color: '#E2E8F0',
    fontSize: 13,
    lineHeight: 20,
    flex: 1,
  },
  galleryScroll: {
    gap: 10,
    marginBottom: 20,
  },
  galleryThumb: {
    width: 140,
    height: 100,
    borderRadius: THEME.radii.md,
  },
  packagesSection: {
    marginTop: 10,
  },
  actionSection: {
    gap: 12,
    marginTop: 20,
    marginBottom: 30,
  },
  whatsappActionBtn: {
    backgroundColor: '#25D366',
    paddingVertical: 14,
    borderRadius: THEME.radii.pill,
    alignItems: 'center',
  },
  actionBtnText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '800',
  },
  customActionBtn: {
    backgroundColor: THEME.colors.accentGold,
    paddingVertical: 14,
    borderRadius: THEME.radii.pill,
    alignItems: 'center',
  },
  customBtnText: {
    color: THEME.colors.primaryDark,
    fontSize: 14,
    fontWeight: '800',
  },
  textRtl: {
    textAlign: 'right',
  },
});
