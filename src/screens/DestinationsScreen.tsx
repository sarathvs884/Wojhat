import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { useLocalization } from '../context/LocalizationContext';
import { DESTINATIONS } from '../data/wojhatData';
import { DestinationCard } from '../components/DestinationCard';
import { Destination } from '../types';
import { THEME } from '../styles/theme';

interface DestinationsScreenProps {
  onSelectDestination: (dest: Destination) => void;
}

export const DestinationsScreen: React.FC<DestinationsScreenProps> = ({ onSelectDestination }) => {
  const { language, isRTL, t } = useLocalization();
  const [filterCategory, setFilterCategory] = useState<'all' | 'saudi' | 'international'>('all');
  const [search, setSearch] = useState('');

  const filtered = DESTINATIONS.filter(dest => {
    const matchesCategory = filterCategory === 'all' || dest.category === filterCategory;
    const q = search.toLowerCase();
    const matchesSearch =
      dest.nameEn.toLowerCase().includes(q) ||
      dest.nameAr.includes(q) ||
      dest.regionEn.toLowerCase().includes(q) ||
      dest.regionAr.includes(q);
    return matchesCategory && matchesSearch;
  });

  return (
    <View style={styles.container}>
      <View style={styles.headerArea}>
        <Text style={[styles.heading, isRTL && styles.textRtl]}>{t('destinations')}</Text>
        <Text style={[styles.subheading, isRTL && styles.textRtl]}>
          {language === 'ar' ? 'استكشف وجهاتنا المختارة بعناية في المملكة وحول العالم' : 'Handpicked destinations across Saudi Arabia & the globe'}
        </Text>

        {/* Search */}
        <View style={[styles.searchBar, isRTL && styles.searchBarRtl]}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={[styles.searchInput, isRTL && styles.textRtl]}
            placeholder={t('searchPlaceholder')}
            placeholderTextColor="#64748B"
            value={search}
            onChangeText={setSearch}
          />
        </View>

        {/* Filter Pills */}
        <View style={[styles.filterRow, isRTL && styles.filterRowRtl]}>
          <TouchableOpacity
            onPress={() => setFilterCategory('all')}
            style={[styles.pill, filterCategory === 'all' && styles.activePill]}
          >
            <Text style={[styles.pillText, filterCategory === 'all' && styles.activePillText]}>
              {t('allDestinations')}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setFilterCategory('saudi')}
            style={[styles.pill, filterCategory === 'saudi' && styles.activePill]}
          >
            <Text style={[styles.pillText, filterCategory === 'saudi' && styles.activePillText]}>
              🇸🇦 {t('saudiOnly')}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setFilterCategory('international')}
            style={[styles.pill, filterCategory === 'international' && styles.activePill]}
          >
            <Text style={[styles.pillText, filterCategory === 'international' && styles.activePillText]}>
              🌍 {t('internationalOnly')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollList} showsVerticalScrollIndicator={false}>
        <Text style={[styles.resultCount, isRTL && styles.textRtl]}>
          {filtered.length} {language === 'ar' ? 'وجهات متوفرة' : 'destinations available'}
        </Text>

        {filtered.map(dest => (
          <DestinationCard
            key={dest.id}
            destination={dest}
            featured={dest.featured}
            onPress={() => onSelectDestination(dest)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.colors.backgroundDark,
  },
  headerArea: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 10,
    backgroundColor: THEME.colors.primaryDark,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.06)',
  },
  heading: {
    color: THEME.colors.textLight,
    fontSize: 22,
    fontWeight: '800',
  },
  subheading: {
    color: THEME.colors.textMuted,
    fontSize: 12,
    marginTop: 2,
    marginBottom: 12,
  },
  searchBar: {
    backgroundColor: THEME.colors.surfaceDark,
    borderRadius: THEME.radii.pill,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    height: 44,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  searchBarRtl: {
    flexDirection: 'row-reverse',
  },
  searchIcon: {
    fontSize: 14,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    color: THEME.colors.textLight,
    fontSize: 13,
  },
  filterRow: {
    flexDirection: 'row',
    gap: 8,
  },
  filterRowRtl: {
    flexDirection: 'row-reverse',
  },
  pill: {
    paddingHorizontal: 12,
    paddingVertical: 6,
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
  scrollList: {
    padding: 16,
    paddingBottom: 32,
  },
  resultCount: {
    color: THEME.colors.accentGold,
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 10,
  },
  textRtl: {
    textAlign: 'right',
  },
});
