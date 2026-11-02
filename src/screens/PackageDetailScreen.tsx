import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { TravelPackage } from '../types';
import { useLocalization } from '../context/LocalizationContext';
import { useCurrency } from '../context/CurrencyContext';
import { useBooking } from '../context/BookingContext';
import { BookingModal } from '../components/BookingModal';
import { THEME } from '../styles/theme';

interface PackageDetailScreenProps {
  travelPackage: TravelPackage;
  onBack: () => void;
}

export const PackageDetailScreen: React.FC<PackageDetailScreenProps> = ({ travelPackage, onBack }) => {
  const { language, isRTL, t } = useLocalization();
  const { formatPrice } = useCurrency();
  const { createWhatsAppLink } = useBooking();
  const [modalVisible, setModalVisible] = useState(false);

  const title = language === 'ar' ? travelPackage.titleAr : travelPackage.titleEn;
  const destination = language === 'ar' ? travelPackage.destinationNameAr : travelPackage.destinationNameEn;
  const description = language === 'ar' ? travelPackage.descriptionAr : travelPackage.descriptionEn;
  const inclusions = language === 'ar' ? travelPackage.inclusionsAr : travelPackage.inclusionsEn;
  const exclusions = language === 'ar' ? travelPackage.exclusionsAr : travelPackage.exclusionsEn;
  const badge = language === 'ar' ? travelPackage.badgeAr : travelPackage.badgeEn;

  const handleWhatsAppInquiry = () => {
    const msg = language === 'ar'
      ? `مرحباً، أود حجز أو الاستفسار عن تفاصيل (${title}) بسعر ${formatPrice(travelPackage.pricePerPersonSAR)} للشخص.`
      : `Hello, I would like to inquire about booking (${title}) priced at ${formatPrice(travelPackage.pricePerPersonSAR)} per person.`;
    Linking.openURL(createWhatsAppLink(msg)).catch(() => {});
  };

  return (
    <View style={styles.outerContainer}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Cover Hero */}
        <View style={styles.heroContainer}>
          <Image source={{ uri: travelPackage.coverImage }} style={styles.heroImage} />
          <View style={styles.overlay} />

          <TouchableOpacity onPress={onBack} style={[styles.backCircle, isRTL && styles.backCircleRtl]}>
            <Text style={styles.backIcon}>{isRTL ? '→' : '←'}</Text>
          </TouchableOpacity>

          <View style={[styles.heroInfo, isRTL && styles.heroInfoRtl]}>
            <View style={styles.badgePill}>
              <Text style={styles.badgeText}>{badge}</Text>
            </View>
            <Text style={styles.destinationName}>{destination}</Text>
            <Text style={styles.packageTitle}>{title}</Text>
          </View>
        </View>

        <View style={styles.content}>
          {/* Quick Metrics */}
          <View style={[styles.metricsRow, isRTL && styles.metricsRowRtl]}>
            <View style={styles.metricCard}>
              <Text style={styles.metricLabel}>{t('days')} / {t('nights')}</Text>
              <Text style={styles.metricValue}>{travelPackage.durationDays}D / {travelPackage.durationNights}N</Text>
            </View>
            <View style={styles.metricCard}>
              <Text style={styles.metricLabel}>{t('perPerson')}</Text>
              <Text style={styles.metricValueGold}>{formatPrice(travelPackage.pricePerPersonSAR)}</Text>
            </View>
            <View style={styles.metricCard}>
              <Text style={styles.metricLabel}>{language === 'ar' ? 'حجم المجموعة' : 'Group Size'}</Text>
              <Text style={styles.metricValue}>{travelPackage.minGroupSize} - {travelPackage.maxGroupSize}</Text>
            </View>
          </View>

          {/* Description */}
          <Text style={[styles.sectionHeading, isRTL && styles.textRtl]}>{t('overview')}</Text>
          <Text style={[styles.description, isRTL && styles.textRtl]}>{description}</Text>

          {/* What is Included */}
          <Text style={[styles.sectionHeading, isRTL && styles.textRtl]}>{t('inclusions')}</Text>
          <View style={styles.inclusionsCard}>
            {inclusions.map((inc, i) => (
              <View key={i} style={[styles.itemRow, isRTL && styles.itemRowRtl]}>
                <Text style={styles.checkIcon}>✓</Text>
                <Text style={[styles.itemText, isRTL && styles.textRtl]}>{inc}</Text>
              </View>
            ))}
          </View>

          {/* What is Not Included */}
          {exclusions && exclusions.length > 0 && (
            <>
              <Text style={[styles.sectionHeading, isRTL && styles.textRtl]}>{t('exclusions')}</Text>
              <View style={styles.exclusionsCard}>
                {exclusions.map((exc, i) => (
                  <View key={i} style={[styles.itemRow, isRTL && styles.itemRowRtl]}>
                    <Text style={styles.crossIcon}>✕</Text>
                    <Text style={[styles.itemTextMuted, isRTL && styles.textRtl]}>{exc}</Text>
                  </View>
                ))}
              </View>
            </>
          )}

          {/* Day-by-Day Itinerary */}
          <Text style={[styles.sectionHeading, isRTL && styles.textRtl]}>{t('itineraryOverview')}</Text>
          <View style={styles.itineraryWrapper}>
            {travelPackage.itinerary.map(day => (
              <View key={day.day} style={styles.dayCard}>
                <View style={[styles.dayHeader, isRTL && styles.dayHeaderRtl]}>
                  <View style={styles.dayBadge}>
                    <Text style={styles.dayBadgeText}>{language === 'ar' ? `اليوم ${day.day}` : `Day ${day.day}`}</Text>
                  </View>
                  <Text style={[styles.dayTitle, isRTL && styles.textRtl]}>
                    {language === 'ar' ? day.titleAr : day.titleEn}
                  </Text>
                </View>

                <Text style={[styles.dayDesc, isRTL && styles.textRtl]}>
                  {language === 'ar' ? day.descriptionAr : day.descriptionEn}
                </Text>

                {day.stayHotelEn && (
                  <View style={[styles.hotelRow, isRTL && styles.hotelRowRtl]}>
                    <Text style={styles.hotelIcon}>🏨</Text>
                    <Text style={styles.hotelName}>
                      {language === 'ar' ? day.stayHotelAr : day.stayHotelEn}
                    </Text>
                  </View>
                )}

                {day.mealsIncluded && day.mealsIncluded.length > 0 && (
                  <View style={[styles.mealsRow, isRTL && styles.mealsRowRtl]}>
                    <Text style={styles.mealIcon}>🍽</Text>
                    <Text style={styles.mealText}>{day.mealsIncluded.join(' • ')}</Text>
                  </View>
                )}
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Floating Bottom Sticky Bar */}
      <View style={[styles.bottomBar, isRTL && styles.bottomBarRtl]}>
        <View style={styles.bottomPriceCol}>
          <Text style={styles.bottomPriceLabel}>{t('perPerson')}</Text>
          <Text style={styles.bottomPriceVal}>{formatPrice(travelPackage.pricePerPersonSAR)}</Text>
        </View>

        <View style={[styles.bottomBtnGroup, isRTL && styles.bottomBtnGroupRtl]}>
          <TouchableOpacity onPress={handleWhatsAppInquiry} style={styles.waBtn}>
            <Text style={styles.waBtnText}>💬</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.bookBtn}>
            <Text style={styles.bookBtnText}>{t('bookNow')}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <BookingModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        travelPackage={travelPackage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: THEME.colors.backgroundDark,
  },
  container: {
    flex: 1,
  },
  heroContainer: {
    height: 320,
    width: '100%',
    position: 'relative',
    justifyContent: 'space-between',
  },
  heroImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(10, 25, 38, 0.65)',
  },
  backCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: 'rgba(15, 37, 55, 0.75)',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 16,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  backCircleRtl: {
    alignSelf: 'flex-end',
  },
  backIcon: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  heroInfo: {
    padding: 20,
  },
  heroInfoRtl: {
    alignItems: 'flex-end',
  },
  badgePill: {
    backgroundColor: THEME.colors.accentGold,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: THEME.radii.pill,
    alignSelf: 'flex-start',
    marginBottom: 6,
  },
  badgeText: {
    color: THEME.colors.primaryDark,
    fontSize: 10,
    fontWeight: '800',
  },
  destinationName: {
    color: THEME.colors.accentGoldLight,
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  packageTitle: {
    color: THEME.colors.textLight,
    fontSize: 22,
    fontWeight: '900',
    marginTop: 4,
  },
  content: {
    padding: 16,
    paddingBottom: 90,
  },
  metricsRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
  },
  metricsRowRtl: {
    flexDirection: 'row-reverse',
  },
  metricCard: {
    flex: 1,
    backgroundColor: THEME.colors.surfaceDark,
    borderRadius: THEME.radii.md,
    padding: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
  },
  metricLabel: {
    color: '#94A3B8',
    fontSize: 10,
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  metricValue: {
    color: THEME.colors.textLight,
    fontSize: 13,
    fontWeight: '700',
  },
  metricValueGold: {
    color: THEME.colors.accentGoldLight,
    fontSize: 14,
    fontWeight: '800',
  },
  sectionHeading: {
    color: THEME.colors.textLight,
    fontSize: 17,
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
  inclusionsCard: {
    backgroundColor: THEME.colors.surfaceDark,
    borderRadius: THEME.radii.md,
    padding: 14,
    gap: 8,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: 'rgba(16, 185, 129, 0.25)',
  },
  exclusionsCard: {
    backgroundColor: THEME.colors.surfaceDark,
    borderRadius: THEME.radii.md,
    padding: 14,
    gap: 8,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: 'rgba(239, 68, 68, 0.2)',
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  itemRowRtl: {
    flexDirection: 'row-reverse',
  },
  checkIcon: {
    color: THEME.colors.accentEmerald,
    fontWeight: 'bold',
  },
  crossIcon: {
    color: '#F87171',
    fontWeight: 'bold',
  },
  itemText: {
    color: '#E2E8F0',
    fontSize: 12,
    flex: 1,
  },
  itemTextMuted: {
    color: '#94A3B8',
    fontSize: 12,
    flex: 1,
  },
  itineraryWrapper: {
    gap: 12,
  },
  dayCard: {
    backgroundColor: THEME.colors.surfaceDark,
    borderRadius: THEME.radii.md,
    padding: 14,
    borderWidth: 1,
    borderColor: THEME.colors.surfaceBorder,
  },
  dayHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 8,
  },
  dayHeaderRtl: {
    flexDirection: 'row-reverse',
  },
  dayBadge: {
    backgroundColor: THEME.colors.accentGold,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: THEME.radii.pill,
  },
  dayBadgeText: {
    color: THEME.colors.primaryDark,
    fontSize: 11,
    fontWeight: '800',
  },
  dayTitle: {
    color: THEME.colors.textLight,
    fontSize: 14,
    fontWeight: '700',
    flex: 1,
  },
  dayDesc: {
    color: '#CBD5E1',
    fontSize: 12,
    lineHeight: 18,
    marginBottom: 8,
  },
  hotelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 4,
  },
  hotelRowRtl: {
    flexDirection: 'row-reverse',
  },
  hotelIcon: {
    fontSize: 12,
  },
  hotelName: {
    color: THEME.colors.accentGoldLight,
    fontSize: 11,
    fontWeight: '600',
  },
  mealsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 2,
  },
  mealsRowRtl: {
    flexDirection: 'row-reverse',
  },
  mealIcon: {
    fontSize: 11,
  },
  mealText: {
    color: '#94A3B8',
    fontSize: 11,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: THEME.colors.primaryDark,
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: THEME.colors.surfaceBorder,
  },
  bottomBarRtl: {
    flexDirection: 'row-reverse',
  },
  bottomPriceCol: {
    justifyContent: 'center',
  },
  bottomPriceLabel: {
    color: '#94A3B8',
    fontSize: 10,
    textTransform: 'uppercase',
  },
  bottomPriceVal: {
    color: THEME.colors.accentGoldLight,
    fontSize: 17,
    fontWeight: '800',
  },
  bottomBtnGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  bottomBtnGroupRtl: {
    flexDirection: 'row-reverse',
  },
  waBtn: {
    backgroundColor: '#25D366',
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  waBtnText: {
    fontSize: 20,
    color: '#FFFFFF',
  },
  bookBtn: {
    backgroundColor: THEME.colors.accentGold,
    paddingHorizontal: 22,
    paddingVertical: 12,
    borderRadius: THEME.radii.pill,
    ...THEME.shadows.goldGlow,
  },
  bookBtnText: {
    color: THEME.colors.primaryDark,
    fontSize: 13,
    fontWeight: '800',
  },
  textRtl: {
    textAlign: 'right',
  },
});
