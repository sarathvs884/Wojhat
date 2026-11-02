import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { WojhatService } from '../types';
import { useLocalization } from '../context/LocalizationContext';
import { THEME } from '../styles/theme';

interface ServiceCardProps {
  service: WojhatService;
  onPress: () => void;
  onInquirePress: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onPress, onInquirePress }) => {
  const { language, isRTL, t } = useLocalization();

  const title = language === 'ar' ? service.titleAr : service.titleEn;
  const shortDesc = language === 'ar' ? service.shortDescAr : service.shortDescEn;
  const turnaround = language === 'ar' ? service.turnaroundTimeAr : service.turnaroundTimeEn;

  return (
    <View style={styles.card}>
      <Image source={{ uri: service.image }} style={styles.image} resizeMode="cover" />
      <View style={styles.overlay} />

      <View style={[styles.content, isRTL && styles.contentRtl]}>
        <View style={styles.headerBadge}>
          <Text style={styles.badgeText}>⭐ Wojhat Concierge</Text>
        </View>

        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description} numberOfLines={2}>{shortDesc}</Text>

        <View style={[styles.featuresList, isRTL && styles.featuresListRtl]}>
          {(language === 'ar' ? service.featuresAr : service.featuresEn).slice(0, 3).map((feat, idx) => (
            <View key={idx} style={[styles.featureItem, isRTL && styles.featureItemRtl]}>
              <Text style={styles.bullet}>◆</Text>
              <Text style={styles.featureText} numberOfLines={1}>{feat}</Text>
            </View>
          ))}
        </View>

        <View style={[styles.footer, isRTL && styles.footerRtl]}>
          <Text style={styles.turnaroundText}>⚡ {turnaround}</Text>
          <TouchableOpacity onPress={onInquirePress} style={styles.inquireButton}>
            <Text style={styles.inquireText}>{t('inquireViaWhatsApp')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: THEME.colors.surfaceDark,
    borderRadius: THEME.radii.lg,
    overflow: 'hidden',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: THEME.colors.surfaceBorder,
    ...THEME.shadows.card,
  },
  image: {
    height: 140,
    width: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    height: 140,
    backgroundColor: 'rgba(15, 37, 55, 0.45)',
  },
  content: {
    padding: 16,
  },
  contentRtl: {
    alignItems: 'flex-end',
  },
  headerBadge: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(197, 168, 128, 0.15)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: THEME.radii.pill,
    marginBottom: 6,
    borderWidth: 1,
    borderColor: 'rgba(197, 168, 128, 0.3)',
  },
  badgeText: {
    color: THEME.colors.accentGoldLight,
    fontSize: 10,
    fontWeight: '700',
  },
  title: {
    color: THEME.colors.textLight,
    fontSize: 17,
    fontWeight: '800',
    marginBottom: 6,
  },
  description: {
    color: THEME.colors.textMuted,
    fontSize: 12,
    lineHeight: 18,
    marginBottom: 10,
  },
  featuresList: {
    gap: 4,
    marginBottom: 14,
    width: '100%',
  },
  featuresListRtl: {
    alignItems: 'flex-end',
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  featureItemRtl: {
    flexDirection: 'row-reverse',
  },
  bullet: {
    color: THEME.colors.accentGold,
    fontSize: 9,
  },
  featureText: {
    color: '#E2E8F0',
    fontSize: 11,
    flex: 1,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.08)',
  },
  footerRtl: {
    flexDirection: 'row-reverse',
  },
  turnaroundText: {
    color: THEME.colors.accentGoldLight,
    fontSize: 10,
    fontWeight: '500',
    flex: 1,
  },
  inquireButton: {
    backgroundColor: THEME.colors.accentGold,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: THEME.radii.pill,
  },
  inquireText: {
    color: THEME.colors.primaryDark,
    fontSize: 11,
    fontWeight: '800',
  },
});
