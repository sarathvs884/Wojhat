import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useLocalization } from '../context/LocalizationContext';
import { PACKAGES } from '../data/wojhatData';
import { PackageCard } from '../components/PackageCard';
import { BookingModal } from '../components/BookingModal';
import { TravelPackage, PackageType } from '../types';
import { THEME } from '../styles/theme';

interface PackagesScreenProps {
  onSelectPackage: (pkg: TravelPackage) => void;
}

export const PackagesScreen: React.FC<PackagesScreenProps> = ({ onSelectPackage }) => {
  const { language, isRTL, t } = useLocalization();
  const [filterType, setFilterType] = useState<string>('all');
  const [selectedBookingPkg, setSelectedBookingPkg] = useState<TravelPackage | undefined>(undefined);
  const [modalVisible, setModalVisible] = useState(false);

  const filteredPackages = PACKAGES.filter(p => {
    if (filterType === 'all') return true;
    return p.type === filterType;
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.title, isRTL && styles.textRtl]}>{t('packages')}</Text>
        <Text style={[styles.subtitle, isRTL && styles.textRtl]}>
          {language === 'ar' ? 'باقات سفر متكاملة مع فنادق 5 نجوم وسيارات خاصة' : 'All-inclusive luxury journeys with 5-star hotels & private transfers'}
        </Text>

        {/* Filter Scroll */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filterScroll}>
          <TouchableOpacity
            onPress={() => setFilterType('all')}
            style={[styles.pill, filterType === 'all' && styles.activePill]}
          >
            <Text style={[styles.pillText, filterType === 'all' && styles.activePillText]}>
              {t('all')}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setFilterType('family')}
            style={[styles.pill, filterType === 'family' && styles.activePill]}
          >
            <Text style={[styles.pillText, filterType === 'family' && styles.activePillText]}>
              👨‍👩‍👦 {t('family')}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setFilterType('luxury_honeymoon')}
            style={[styles.pill, filterType === 'luxury_honeymoon' && styles.activePill]}
          >
            <Text style={[styles.pillText, filterType === 'luxury_honeymoon' && styles.activePillText]}>
              💍 {t('luxury')}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setFilterType('cultural')}
            style={[styles.pill, filterType === 'cultural' && styles.activePill]}
          >
            <Text style={[styles.pillText, filterType === 'cultural' && styles.activePillText]}>
              🏛 {t('cultural')}
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <ScrollView contentContainerStyle={styles.list} showsVerticalScrollIndicator={false}>
        {filteredPackages.map(pkg => (
          <PackageCard
            key={pkg.id}
            travelPackage={pkg}
            onPress={() => onSelectPackage(pkg)}
            onBookPress={() => {
              setSelectedBookingPkg(pkg);
              setModalVisible(true);
            }}
          />
        ))}
      </ScrollView>

      <BookingModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        travelPackage={selectedBookingPkg}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.colors.backgroundDark,
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 10,
    backgroundColor: THEME.colors.primaryDark,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.06)',
  },
  title: {
    color: THEME.colors.textLight,
    fontSize: 22,
    fontWeight: '800',
  },
  subtitle: {
    color: THEME.colors.textMuted,
    fontSize: 12,
    marginTop: 2,
    marginBottom: 12,
  },
  filterScroll: {
    gap: 8,
    paddingVertical: 4,
  },
  pill: {
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: THEME.radii.pill,
    backgroundColor: THEME.colors.surfaceDark,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  activePill: {
    backgroundColor: THEME.colors.accentGold,
    borderColor: THEME.colors.accentGold,
  },
  pillText: {
    color: '#CBD5E1',
    fontSize: 12,
    fontWeight: '600',
  },
  activePillText: {
    color: THEME.colors.primaryDark,
    fontWeight: '800',
  },
  list: {
    padding: 16,
    paddingBottom: 32,
  },
  textRtl: {
    textAlign: 'right',
  },
});
