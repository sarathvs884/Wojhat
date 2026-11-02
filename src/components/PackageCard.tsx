import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { TravelPackage } from '../types';
import { useLocalization } from '../context/LocalizationContext';
import { useCurrency } from '../context/CurrencyContext';
import { THEME } from '../styles/theme';

interface PackageCardProps {
  travelPackage: TravelPackage;
  onPress: () => void;
  onBookPress?: () => void;
}

export const PackageCard: React.FC<PackageCardProps> = ({ travelPackage, onPress, onBookPress }) => {
  const { language, isRTL, t } = useLocalization();
  const { formatPrice } = useCurrency();

  const title = language === 'ar' ? travelPackage.titleAr : travelPackage.titleEn;
  const destination = language === 'ar' ? travelPackage.destinationNameAr : travelPackage.destinationNameEn;
  const badge = language === 'ar' ? travelPackage.badgeAr : travelPackage.badgeEn;
  const description = language === 'ar' ? travelPackage.descriptionAr : travelPackage.descriptionEn;

  return (
    <TouchableOpacity activeOpacity={0.92} onPress={onPress} style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: travelPackage.coverImage }} style={styles.coverImage} resizeMode="cover" />
        <View style={[styles.badgeContainer, isRTL && styles.badgeContainerRtl]}>
          <Text style={styles.badgeText}>{badge}</Text>
        </View>
        <View style={styles.durationPill}>
          <Text style={styles.durationText}>
            ⏱ {travelPackage.durationDays} {t('days')} / {travelPackage.durationNights} {t('nights')}
          </Text>
        </View>
      </View>

      <View style={[styles.body, isRTL && styles.bodyRtl]}>
        <Text style={styles.destinationName}>{destination}</Text>
        <Text style={styles.packageTitle} numberOfLines={2}>{title}</Text>
        <Text style={styles.description} numberOfLines={2}>{description}</Text>

        <View style={[styles.highlightsContainer, isRTL && styles.highlightsContainerRtl]}>
          {(language === 'ar' ? travelPackage.inclusionsAr : travelPackage.inclusionsEn).slice(0, 2).map((inc, index) => (
            <View key={index} style={[styles.highlightItem, isRTL && styles.highlightItemRtl]}>
              <Text style={styles.checkIcon}>✓</Text>
              <Text style={styles.highlightText} numberOfLines={1}>{inc}</Text>
            </View>
          ))}
        </View>

        <View style={[styles.divider, isRTL && styles.dividerRtl]} />

        <View style={[styles.priceAndActionRow, isRTL && styles.priceAndActionRowRtl]}>
          <View style={[styles.priceColumn, isRTL && styles.priceColumnRtl]}>
            <Text style={styles.priceLabel}>{t('perPerson')}</Text>
            <Text style={styles.priceValue}>{formatPrice(travelPackage.pricePerPersonSAR)}</Text>
          </View>

          <TouchableOpacity
            onPress={onBookPress || onPress}
            style={styles.bookButton}
            activeOpacity={0.85}
          >
            <Text style={styles.bookButtonText}>{t('bookNow')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: THEME.colors.surfaceDark,
    borderRadius: THEME.radii.lg,
    overflow: 'hidden',
    marginBottom: 18,
    borderWidth: 1,
    borderColor: THEME.colors.surfaceBorder,
    ...THEME.shadows.card,
  },
  imageContainer: {
    height: 180,
    width: '100%',
    position: 'relative',
  },
  coverImage: {
    width: '100%',
    height: '100%',
  },
  badgeContainer: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: THEME.colors.accentGold,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: THEME.radii.pill,
  },
  badgeContainerRtl: {
    left: undefined,
    right: 12,
  },
  badgeText: {
    color: THEME.colors.primaryDark,
    fontSize: 11,
    fontWeight: '800',
  },
  durationPill: {
    position: 'absolute',
    bottom: 12,
    right: 12,
    backgroundColor: 'rgba(15, 37, 55, 0.88)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: THEME.radii.pill,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  durationText: {
    color: '#E2E8F0',
    fontSize: 11,
    fontWeight: '600',
  },
  body: {
    padding: 16,
  },
  bodyRtl: {
    alignItems: 'flex-end',
  },
  destinationName: {
    color: THEME.colors.accentGold,
    fontSize: 11,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  packageTitle: {
    color: THEME.colors.textLight,
    fontSize: 17,
    fontWeight: '800',
    marginBottom: 6,
    lineHeight: 22,
  },
  description: {
    color: THEME.colors.textMuted,
    fontSize: 12,
    lineHeight: 18,
    marginBottom: 12,
  },
  highlightsContainer: {
    gap: 6,
    marginBottom: 12,
    width: '100%',
  },
  highlightsContainerRtl: {
    alignItems: 'flex-end',
  },
  highlightItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  highlightItemRtl: {
    flexDirection: 'row-reverse',
  },
  checkIcon: {
    color: THEME.colors.accentEmerald,
    fontWeight: 'bold',
    fontSize: 12,
  },
  highlightText: {
    color: '#CBD5E1',
    fontSize: 11,
    flex: 1,
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.08)',
    marginVertical: 12,
    width: '100%',
  },
  dividerRtl: {},
  priceAndActionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  priceAndActionRowRtl: {
    flexDirection: 'row-reverse',
  },
  priceColumn: {
    justifyContent: 'center',
  },
  priceColumnRtl: {
    alignItems: 'flex-end',
  },
  priceLabel: {
    color: THEME.colors.textMuted,
    fontSize: 10,
    textTransform: 'uppercase',
  },
  priceValue: {
    color: THEME.colors.accentGoldLight,
    fontSize: 18,
    fontWeight: '800',
  },
  bookButton: {
    backgroundColor: THEME.colors.accentGold,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: THEME.radii.pill,
    ...THEME.shadows.goldGlow,
  },
  bookButtonText: {
    color: THEME.colors.primaryDark,
    fontSize: 13,
    fontWeight: '800',
  },
});
