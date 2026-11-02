import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Destination } from '../types';
import { useLocalization } from '../context/LocalizationContext';
import { THEME } from '../styles/theme';

interface DestinationCardProps {
  destination: Destination;
  onPress: () => void;
  featured?: boolean;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({ destination, onPress, featured }) => {
  const { language, isRTL, t } = useLocalization();

  const name = language === 'ar' ? destination.nameAr : destination.nameEn;
  const tagline = language === 'ar' ? destination.taglineAr : destination.taglineEn;
  const region = language === 'ar' ? destination.regionAr : destination.regionEn;

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={[
        styles.cardContainer,
        featured ? styles.featuredCard : styles.regularCard
      ]}
    >
      <Image
        source={{ uri: featured ? destination.heroImage : destination.image }}
        style={featured ? styles.featuredImage : styles.regularImage}
        resizeMode="cover"
      />
      <View style={styles.gradientOverlay} />

      <View style={[styles.badgeRow, isRTL && styles.badgeRowRtl]}>
        <View style={styles.categoryBadge}>
          <Text style={styles.categoryBadgeText}>
            {destination.category === 'saudi' ? '🇸🇦 Saudi Arabia' : '🌍 International'}
          </Text>
        </View>
        <View style={styles.ratingBadge}>
          <Text style={styles.ratingText}>★ {destination.rating}</Text>
        </View>
      </View>

      <View style={[styles.contentContainer, isRTL && styles.contentContainerRtl]}>
        <Text style={styles.regionText}>{region}</Text>
        <Text style={styles.titleText}>{name}</Text>
        <Text numberOfLines={2} style={styles.taglineText}>
          {tagline}
        </Text>

        <View style={[styles.footerRow, isRTL && styles.footerRowRtl]}>
          <Text style={styles.bestTimeText}>
            🗓 {language === 'ar' ? destination.bestTimeToVisit.ar : destination.bestTimeToVisit.en}
          </Text>
          <Text style={styles.viewDetailsText}>{t('viewAll')} →</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: THEME.radii.lg,
    overflow: 'hidden',
    backgroundColor: THEME.colors.surfaceDark,
    marginVertical: 8,
    position: 'relative',
    borderWidth: 1,
    borderColor: THEME.colors.surfaceBorder,
    ...THEME.shadows.card,
  },
  featuredCard: {
    height: 260,
    width: '100%',
  },
  regularCard: {
    height: 220,
    width: '100%',
  },
  featuredImage: {
    width: '100%',
    height: '100%',
  },
  regularImage: {
    width: '100%',
    height: '100%',
  },
  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(10, 25, 38, 0.55)',
  },
  badgeRow: {
    position: 'absolute',
    top: 14,
    left: 14,
    right: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 2,
  },
  badgeRowRtl: {
    flexDirection: 'row-reverse',
  },
  categoryBadge: {
    backgroundColor: 'rgba(15, 37, 55, 0.85)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: THEME.radii.pill,
    borderWidth: 1,
    borderColor: THEME.colors.accentGold,
  },
  categoryBadgeText: {
    color: THEME.colors.accentGoldLight,
    fontSize: 11,
    fontWeight: '700',
  },
  ratingBadge: {
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: THEME.radii.pill,
  },
  ratingText: {
    color: '#FBBF24',
    fontSize: 12,
    fontWeight: '700',
  },
  contentContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    zIndex: 2,
    backgroundColor: 'rgba(10, 25, 38, 0.85)',
  },
  contentContainerRtl: {
    alignItems: 'flex-end',
  },
  regionText: {
    color: THEME.colors.accentGold,
    fontSize: 11,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    marginBottom: 2,
  },
  titleText: {
    color: THEME.colors.textLight,
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 4,
  },
  taglineText: {
    color: THEME.colors.textMuted,
    fontSize: 12,
    lineHeight: 16,
    marginBottom: 10,
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
  },
  footerRowRtl: {
    flexDirection: 'row-reverse',
  },
  bestTimeText: {
    color: '#CBD5E1',
    fontSize: 11,
  },
  viewDetailsText: {
    color: THEME.colors.accentGold,
    fontSize: 12,
    fontWeight: '700',
  },
});
