import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { useLocalization } from '../context/LocalizationContext';
import { useCurrency } from '../context/CurrencyContext';
import { useBooking } from '../context/BookingContext';
import { COMPANY_INFO } from '../data/wojhatData';
import { THEME } from '../styles/theme';

export const ContactScreen: React.FC = () => {
  const { language, toggleLanguage, isRTL, t } = useLocalization();
  const { currency, setCurrency } = useCurrency();
  const { createWhatsAppLink } = useBooking();

  const handleCall = () => {
    Linking.openURL(`tel:${COMPANY_INFO.phone}`).catch(() => {});
  };

  const handleWhatsApp = () => {
    const msg = language === 'ar'
      ? 'مرحباً، أود التواصل مع فريق وجهات للسفر والسياحة.'
      : 'Hello, I would like to contact Wojhat Travel & Tourism.';
    Linking.openURL(createWhatsAppLink(msg)).catch(() => {});
  };

  const handleEmail = () => {
    Linking.openURL(`mailto:${COMPANY_INFO.email}`).catch(() => {});
  };

  const handleOpenWebsite = () => {
    Linking.openURL(COMPANY_INFO.website).catch(() => {});
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
      {/* Brand Header Box */}
      <View style={styles.brandBox}>
        <View style={styles.logoBadge}>
          <Text style={styles.logoText}>W</Text>
        </View>
        <Text style={styles.brandName}>{COMPANY_INFO.nameEn}</Text>
        <Text style={styles.brandNameAr}>{COMPANY_INFO.nameAr}</Text>
        <Text style={styles.slogan}>
          {language === 'ar' ? COMPANY_INFO.taglineAr : COMPANY_INFO.taglineEn}
        </Text>
      </View>

      {/* Quick Action Buttons */}
      <View style={styles.actionRow}>
        <TouchableOpacity onPress={handleWhatsApp} style={styles.waCard}>
          <Text style={styles.actionIcon}>💬</Text>
          <Text style={styles.actionTitle}>WhatsApp</Text>
          <Text style={styles.actionSub}>+966 550 238 226</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleCall} style={styles.phoneCard}>
          <Text style={styles.actionIcon}>📞</Text>
          <Text style={styles.actionTitle}>{t('callUs')}</Text>
          <Text style={styles.actionSub}>Direct Support</Text>
        </TouchableOpacity>
      </View>

      {/* Office Details */}
      <View style={styles.detailCard}>
        <Text style={[styles.cardHeading, isRTL && styles.textRtl]}>📍 {t('ourOffice')}</Text>
        <Text style={[styles.cardText, isRTL && styles.textRtl]}>
          {language === 'ar' ? COMPANY_INFO.headquartersAr : COMPANY_INFO.headquartersEn}
        </Text>
        <Text style={[styles.cardNote, isRTL && styles.textRtl]}>
          Emaar Square, Al Fayhaa, King Abdullah Road, Jeddah
        </Text>
      </View>

      {/* Operating Hours */}
      <View style={styles.detailCard}>
        <Text style={[styles.cardHeading, isRTL && styles.textRtl]}>⏰ {t('workingHours')}</Text>
        <Text style={[styles.cardText, isRTL && styles.textRtl]}>
          {language === 'ar' ? COMPANY_INFO.workingHoursAr : COMPANY_INFO.workingHoursEn}
        </Text>
      </View>

      {/* Email & Website */}
      <View style={styles.detailCard}>
        <TouchableOpacity onPress={handleEmail} style={styles.linkRow}>
          <Text style={styles.linkIcon}>✉️</Text>
          <View style={styles.linkCol}>
            <Text style={styles.linkLabel}>{t('emailUs')}</Text>
            <Text style={styles.linkValue}>{COMPANY_INFO.email}</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.divider} />

        <TouchableOpacity onPress={handleOpenWebsite} style={styles.linkRow}>
          <Text style={styles.linkIcon}>🌐</Text>
          <View style={styles.linkCol}>
            <Text style={styles.linkLabel}>Official Website</Text>
            <Text style={styles.linkValue}>wojhat.com.sa</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* App Preferences */}
      <View style={styles.detailCard}>
        <Text style={[styles.cardHeading, isRTL && styles.textRtl]}>
          ⚙️ {language === 'ar' ? 'إعدادات التطبيق' : 'Application Settings'}
        </Text>

        <View style={styles.prefRow}>
          <Text style={styles.prefLabel}>{language === 'ar' ? 'اللغة' : 'Language'}</Text>
          <TouchableOpacity onPress={toggleLanguage} style={styles.prefBtn}>
            <Text style={styles.prefBtnText}>{language === 'ar' ? 'العربية (RTL)' : 'English (LTR)'}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.prefRow}>
          <Text style={styles.prefLabel}>{language === 'ar' ? 'العملة المعروضة' : 'Display Currency'}</Text>
          <View style={styles.currencyBtns}>
            {(['SAR', 'USD', 'EUR'] as const).map(c => (
              <TouchableOpacity
                key={c}
                onPress={() => setCurrency(c)}
                style={[styles.cBtn, currency === c && styles.activeCBtn]}
              >
                <Text style={[styles.cBtnText, currency === c && styles.activeCBtnText]}>{c}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>

      {/* License Info */}
      <View style={styles.licenseCard}>
        <Text style={styles.licenseText}>{COMPANY_INFO.license}</Text>
        <Text style={styles.licenseText}>Commercial Registration: {COMPANY_INFO.crNumber}</Text>
        <Text style={styles.versionText}>Wojhat Mobile App v2.4.0 (Build 2026.11) • iOS & Android Ready</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.colors.backgroundDark,
  },
  scroll: {
    padding: 16,
    paddingBottom: 40,
    gap: 14,
  },
  brandBox: {
    backgroundColor: THEME.colors.primaryDark,
    borderRadius: THEME.radii.lg,
    padding: 24,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: THEME.colors.surfaceBorder,
  },
  logoBadge: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: THEME.colors.accentGold,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    ...THEME.shadows.goldGlow,
  },
  logoText: {
    fontSize: 32,
    fontWeight: '900',
    color: THEME.colors.primaryDark,
  },
  brandName: {
    color: THEME.colors.textLight,
    fontSize: 18,
    fontWeight: '800',
    letterSpacing: 1,
  },
  brandNameAr: {
    color: THEME.colors.accentGold,
    fontSize: 16,
    fontWeight: '700',
    marginTop: 2,
    marginBottom: 6,
  },
  slogan: {
    color: '#94A3B8',
    fontSize: 12,
    textAlign: 'center',
  },
  actionRow: {
    flexDirection: 'row',
    gap: 12,
  },
  waCard: {
    flex: 1,
    backgroundColor: '#075E54',
    padding: 16,
    borderRadius: THEME.radii.md,
    alignItems: 'center',
  },
  phoneCard: {
    flex: 1,
    backgroundColor: THEME.colors.surfaceDark,
    padding: 16,
    borderRadius: THEME.radii.md,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  actionIcon: {
    fontSize: 24,
    marginBottom: 4,
  },
  actionTitle: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '800',
  },
  actionSub: {
    color: '#CBD5E1',
    fontSize: 11,
    marginTop: 2,
  },
  detailCard: {
    backgroundColor: THEME.colors.surfaceDark,
    borderRadius: THEME.radii.md,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
  },
  cardHeading: {
    color: THEME.colors.accentGoldLight,
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 6,
  },
  cardText: {
    color: THEME.colors.textLight,
    fontSize: 13,
    lineHeight: 20,
  },
  cardNote: {
    color: '#94A3B8',
    fontSize: 11,
    marginTop: 4,
  },
  linkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 6,
  },
  linkIcon: {
    fontSize: 20,
  },
  linkCol: {
    flex: 1,
  },
  linkLabel: {
    color: '#94A3B8',
    fontSize: 11,
  },
  linkValue: {
    color: THEME.colors.accentGoldLight,
    fontSize: 13,
    fontWeight: '700',
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.06)',
    marginVertical: 10,
  },
  prefRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  prefLabel: {
    color: '#E2E8F0',
    fontSize: 13,
  },
  prefBtn: {
    backgroundColor: 'rgba(197, 168, 128, 0.2)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: THEME.radii.pill,
    borderWidth: 1,
    borderColor: THEME.colors.accentGold,
  },
  prefBtnText: {
    color: THEME.colors.accentGoldLight,
    fontSize: 12,
    fontWeight: '700',
  },
  currencyBtns: {
    flexDirection: 'row',
    gap: 6,
  },
  cBtn: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: THEME.radii.sm,
    backgroundColor: 'rgba(255,255,255,0.08)',
  },
  activeCBtn: {
    backgroundColor: THEME.colors.accentGold,
  },
  cBtnText: {
    color: '#CBD5E1',
    fontSize: 11,
    fontWeight: '700',
  },
  activeCBtnText: {
    color: THEME.colors.primaryDark,
  },
  licenseCard: {
    alignItems: 'center',
    paddingVertical: 16,
    gap: 4,
  },
  licenseText: {
    color: '#64748B',
    fontSize: 11,
  },
  versionText: {
    color: '#475569',
    fontSize: 10,
    marginTop: 6,
  },
  textRtl: {
    textAlign: 'right',
  },
});
