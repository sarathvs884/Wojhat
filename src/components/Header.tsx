import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useLocalization } from '../context/LocalizationContext';
import { useCurrency } from '../context/CurrencyContext';
import { THEME } from '../styles/theme';

interface HeaderProps {
  title?: string;
  showBack?: boolean;
  onBack?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ title, showBack, onBack }) => {
  const { language, toggleLanguage, t, isRTL } = useLocalization();
  const { currency, setCurrency } = useCurrency();

  const cycleCurrency = () => {
    if (currency === 'SAR') setCurrency('USD');
    else if (currency === 'USD') setCurrency('EUR');
    else setCurrency('SAR');
  };

  return (
    <View style={[styles.headerContainer, isRTL && styles.rtlContainer]}>
      <View style={styles.leftSection}>
        {showBack && onBack ? (
          <TouchableOpacity onPress={onBack} style={styles.backButton}>
            <Text style={styles.backText}>{isRTL ? '→' : '←'}</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.brandBadge}>
            <Text style={styles.brandLetter}>W</Text>
          </View>
        )}
        <View style={styles.titleWrapper}>
          <Text style={styles.brandTitle}>{title || t('appName')}</Text>
          <Text style={styles.brandSubtitle}>
            {language === 'ar' ? 'للسفر والسياحة' : 'Travel & Tourism'}
          </Text>
        </View>
      </View>

      <View style={styles.rightSection}>
        {/* Currency Switcher */}
        <TouchableOpacity onPress={cycleCurrency} style={styles.pillButton}>
          <Text style={styles.pillText}>{currency}</Text>
        </TouchableOpacity>

        {/* Language Switcher */}
        <TouchableOpacity onPress={toggleLanguage} style={[styles.pillButton, styles.goldPill]}>
          <Text style={styles.goldPillText}>{language === 'ar' ? 'EN' : 'عربي'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingTop: 12,
    paddingBottom: 14,
    backgroundColor: THEME.colors.primaryDark,
    borderBottomWidth: 1,
    borderBottomColor: THEME.colors.surfaceBorder,
  },
  rtlContainer: {
    flexDirection: 'row-reverse',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  brandBadge: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: THEME.colors.accentGold,
    justifyContent: 'center',
    alignItems: 'center',
  },
  brandLetter: {
    fontSize: 20,
    fontWeight: 'bold',
    color: THEME.colors.primaryDark,
  },
  backButton: {
    padding: 8,
  },
  backText: {
    fontSize: 22,
    color: THEME.colors.accentGold,
    fontWeight: 'bold',
  },
  titleWrapper: {
    justifyContent: 'center',
  },
  brandTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: THEME.colors.textLight,
    letterSpacing: 0.5,
  },
  brandSubtitle: {
    fontSize: 11,
    color: THEME.colors.accentGold,
    fontWeight: '500',
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  pillButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: THEME.radii.pill,
    backgroundColor: THEME.colors.surfaceDark,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.15)',
  },
  pillText: {
    fontSize: 12,
    fontWeight: '600',
    color: THEME.colors.textLight,
  },
  goldPill: {
    backgroundColor: THEME.colors.accentGold,
    borderColor: THEME.colors.accentGold,
  },
  goldPillText: {
    fontSize: 12,
    fontWeight: '700',
    color: THEME.colors.primaryDark,
  },
});
