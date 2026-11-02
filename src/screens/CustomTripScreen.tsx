import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet, Switch, Linking } from 'react-native';
import { useLocalization } from '../context/LocalizationContext';
import { useBooking } from '../context/BookingContext';
import { DESTINATIONS } from '../data/wojhatData';
import { THEME } from '../styles/theme';

export const CustomTripScreen: React.FC = () => {
  const { language, isRTL, t } = useLocalization();
  const { submitCustomTrip } = useBooking();

  const [destinationType, setDestinationType] = useState<'saudi' | 'international' | 'both'>('saudi');
  const [selectedDestinations, setSelectedDestinations] = useState<string[]>(['AlUla']);
  const [duration, setDuration] = useState(5);
  const [travelStyle, setTravelStyle] = useState<'Luxury VIP' | 'Family Fun' | 'Honeymoon Romantic' | 'Adventure & Nature' | 'Heritage & Culture'>('Luxury VIP');
  const [accommodation, setAccommodation] = useState<'5-Star Ultra Luxury' | '5-Star Classic' | 'Boutique Heritage' | '4-Star Premium'>('5-Star Ultra Luxury');
  const [travelers, setTravelers] = useState(2);
  const [budget, setBudget] = useState('15,000 - 30,000 SAR');
  const [chauffeur, setChauffeur] = useState(true);
  const [vipAirport, setVipAirport] = useState(true);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const toggleDestSelection = (name: string) => {
    if (selectedDestinations.includes(name)) {
      if (selectedDestinations.length > 1) {
        setSelectedDestinations(selectedDestinations.filter(d => d !== name));
      }
    } else {
      setSelectedDestinations([...selectedDestinations, name]);
    }
  };

  const handleSubmit = () => {
    if (!fullName || !phone) {
      alert(language === 'ar' ? 'الرجاء إدخال الاسم ورقم الجوال' : 'Please provide your name and phone number');
      return;
    }

    const waLink = submitCustomTrip({
      destinationType,
      preferredDestinations: selectedDestinations,
      tripDurationDays: duration,
      travelStyle,
      accommodationLevel: accommodation,
      budgetLevelSAR: budget,
      departureCity: 'Jeddah / Riyadh',
      approximateTravelDate: '2026-12-20',
      numberOfTravelers: travelers,
      includePrivateChauffeur: chauffeur,
      includeVIPAirportMeet: vipAirport,
      fullName,
      phoneWhatsApp: phone,
      email: '',
      notes
    });

    Linking.openURL(waLink).catch(() => {});
    setSubmitted(true);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <View style={styles.badgePill}>
          <Text style={styles.badgeText}>TAILOR-MADE BY WOJHAT</Text>
        </View>
        <Text style={[styles.title, isRTL && styles.textRtl]}>{t('customTripTitle')}</Text>
        <Text style={[styles.desc, isRTL && styles.textRtl]}>{t('customTripDesc')}</Text>
      </View>

      {submitted ? (
        <View style={styles.successCard}>
          <Text style={styles.successIcon}>✓</Text>
          <Text style={styles.successTitle}>{t('requestSubmitted')}</Text>
          <Text style={styles.successSub}>
            {language === 'ar'
              ? 'تم فتح المحادثة عبر واتساب مع كونسيرج وجهات في إعمار سكوير جدة.'
              : 'A WhatsApp conversation has been initiated with Wojhat Concierge in Jeddah.'}
          </Text>
          <TouchableOpacity onPress={() => setSubmitted(false)} style={styles.restartBtn}>
            <Text style={styles.restartBtnText}>{language === 'ar' ? 'تصميم رحلة أخرى' : 'Design Another Trip'}</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.form}>
          {/* 1. Destination Type */}
          <Text style={[styles.sectionTitle, isRTL && styles.textRtl]}>1. {t('destinationPreference')}</Text>
          <View style={[styles.typeRow, isRTL && styles.typeRowRtl]}>
            {(['saudi', 'international', 'both'] as const).map(type => (
              <TouchableOpacity
                key={type}
                onPress={() => setDestinationType(type)}
                style={[styles.typeBtn, destinationType === type && styles.activeTypeBtn]}
              >
                <Text style={[styles.typeBtnText, destinationType === type && styles.activeTypeText]}>
                  {type === 'saudi' ? '🇸🇦 داخل المملكة' : type === 'international' ? '🌍 وجهات دولية' : '✨ الاثنان معاً'}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* 2. Choose destinations */}
          <Text style={[styles.sectionTitle, isRTL && styles.textRtl]}>2. {language === 'ar' ? 'اختر الوجهات المرغوبة' : 'Select Desired Destinations'}</Text>
          <View style={styles.destWrap}>
            {DESTINATIONS.map(d => {
              const dName = language === 'ar' ? d.nameAr : d.nameEn;
              const isSel = selectedDestinations.includes(d.nameEn) || selectedDestinations.includes(d.nameAr);
              return (
                <TouchableOpacity
                  key={d.id}
                  onPress={() => toggleDestSelection(language === 'ar' ? d.nameAr : d.nameEn)}
                  style={[styles.destChip, isSel && styles.activeDestChip]}
                >
                  <Text style={[styles.destChipText, isSel && styles.activeDestText]}>
                    {isSel ? '✓ ' : '+ '}
                    {dName}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          {/* 3. Travel Style */}
          <Text style={[styles.sectionTitle, isRTL && styles.textRtl]}>3. {t('travelStyle')}</Text>
          <View style={styles.chipsWrap}>
            {(['Luxury VIP', 'Family Fun', 'Honeymoon Romantic', 'Adventure & Nature', 'Heritage & Culture'] as const).map(style => (
              <TouchableOpacity
                key={style}
                onPress={() => setTravelStyle(style)}
                style={[styles.chip, travelStyle === style && styles.activeChip]}
              >
                <Text style={[styles.chipText, travelStyle === style && styles.activeChipText]}>{style}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* 4. Hotel Category */}
          <Text style={[styles.sectionTitle, isRTL && styles.textRtl]}>4. {t('accommodationPref')}</Text>
          <View style={styles.chipsWrap}>
            {(['5-Star Ultra Luxury', '5-Star Classic', 'Boutique Heritage', '4-Star Premium'] as const).map(acc => (
              <TouchableOpacity
                key={acc}
                onPress={() => setAccommodation(acc)}
                style={[styles.chip, accommodation === acc && styles.activeChip]}
              >
                <Text style={[styles.chipText, accommodation === acc && styles.activeChipText]}>{acc}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* 5. Duration & Travelers */}
          <View style={styles.inlineRow}>
            <View style={styles.halfCol}>
              <Text style={styles.inlineLabel}>{t('durationDays')}</Text>
              <View style={styles.counterBox}>
                <TouchableOpacity onPress={() => setDuration(Math.max(2, duration - 1))} style={styles.cBtn}>
                  <Text style={styles.cBtnText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.cVal}>{duration}</Text>
                <TouchableOpacity onPress={() => setDuration(duration + 1)} style={styles.cBtn}>
                  <Text style={styles.cBtnText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.halfCol}>
              <Text style={styles.inlineLabel}>{t('numberOfTravelers')}</Text>
              <View style={styles.counterBox}>
                <TouchableOpacity onPress={() => setTravelers(Math.max(1, travelers - 1))} style={styles.cBtn}>
                  <Text style={styles.cBtnText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.cVal}>{travelers}</Text>
                <TouchableOpacity onPress={() => setTravelers(travelers + 1)} style={styles.cBtn}>
                  <Text style={styles.cBtnText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* 6. VIP Add-ons */}
          <View style={styles.switchRow}>
            <Text style={styles.switchLabel}>🚗 {t('includeChauffeur')}</Text>
            <Switch
              value={chauffeur}
              onValueChange={setChauffeur}
              trackColor={{ false: '#334155', true: THEME.colors.accentGold }}
            />
          </View>

          <View style={styles.switchRow}>
            <Text style={styles.switchLabel}>👑 {t('includeAirportVIP')}</Text>
            <Switch
              value={vipAirport}
              onValueChange={setVipAirport}
              trackColor={{ false: '#334155', true: THEME.colors.accentGold }}
            />
          </View>

          {/* 7. Contact Details */}
          <Text style={[styles.sectionTitle, isRTL && styles.textRtl]}>
            5. {language === 'ar' ? 'معلومات التواصل' : 'Contact Information'}
          </Text>

          <TextInput
            style={[styles.input, isRTL && styles.textRtl]}
            placeholder={`${t('fullName')} *`}
            placeholderTextColor="#64748B"
            value={fullName}
            onChangeText={setFullName}
          />

          <TextInput
            style={[styles.input, isRTL && styles.textRtl]}
            placeholder={`${t('phoneWhatsApp')} *`}
            placeholderTextColor="#64748B"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
          />

          <TextInput
            style={[styles.input, styles.textArea, isRTL && styles.textRtl]}
            placeholder={t('specialNotes')}
            placeholderTextColor="#64748B"
            multiline
            numberOfLines={3}
            value={notes}
            onChangeText={setNotes}
          />

          <TouchableOpacity onPress={handleSubmit} style={styles.submitBtn}>
            <Text style={styles.submitBtnText}>💬 {t('submitInquiry')}</Text>
          </TouchableOpacity>
        </View>
      )}
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
  },
  header: {
    backgroundColor: THEME.colors.primaryDark,
    padding: 18,
    borderRadius: THEME.radii.lg,
    borderWidth: 1,
    borderColor: THEME.colors.surfaceBorder,
    marginBottom: 20,
  },
  badgePill: {
    backgroundColor: 'rgba(197, 168, 128, 0.2)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: THEME.radii.pill,
    alignSelf: 'flex-start',
    marginBottom: 8,
    borderWidth: 1,
    borderColor: THEME.colors.accentGold,
  },
  badgeText: {
    color: THEME.colors.accentGoldLight,
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1,
  },
  title: {
    color: THEME.colors.textLight,
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 6,
  },
  desc: {
    color: '#CBD5E1',
    fontSize: 12,
    lineHeight: 18,
  },
  form: {
    gap: 16,
  },
  sectionTitle: {
    color: THEME.colors.accentGoldLight,
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 4,
  },
  typeRow: {
    flexDirection: 'row',
    gap: 8,
  },
  typeRowRtl: {
    flexDirection: 'row-reverse',
  },
  typeBtn: {
    flex: 1,
    backgroundColor: THEME.colors.surfaceDark,
    paddingVertical: 10,
    borderRadius: THEME.radii.md,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  activeTypeBtn: {
    backgroundColor: THEME.colors.accentGold,
    borderColor: THEME.colors.accentGold,
  },
  typeBtnText: {
    color: '#E2E8F0',
    fontSize: 11,
    fontWeight: '600',
  },
  activeTypeText: {
    color: THEME.colors.primaryDark,
    fontWeight: '800',
  },
  destWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  destChip: {
    backgroundColor: THEME.colors.surfaceDark,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: THEME.radii.pill,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  activeDestChip: {
    backgroundColor: 'rgba(197, 168, 128, 0.25)',
    borderColor: THEME.colors.accentGold,
  },
  destChipText: {
    color: '#CBD5E1',
    fontSize: 12,
  },
  activeDestText: {
    color: THEME.colors.accentGoldLight,
    fontWeight: '700',
  },
  chipsWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  chip: {
    backgroundColor: THEME.colors.surfaceDark,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: THEME.radii.md,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  activeChip: {
    backgroundColor: THEME.colors.accentGold,
    borderColor: THEME.colors.accentGold,
  },
  chipText: {
    color: '#CBD5E1',
    fontSize: 12,
  },
  activeChipText: {
    color: THEME.colors.primaryDark,
    fontWeight: '800',
  },
  inlineRow: {
    flexDirection: 'row',
    gap: 12,
  },
  halfCol: {
    flex: 1,
  },
  inlineLabel: {
    color: '#CBD5E1',
    fontSize: 12,
    marginBottom: 6,
  },
  counterBox: {
    backgroundColor: THEME.colors.surfaceDark,
    borderRadius: THEME.radii.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 6,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  cBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(255,255,255,0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cBtnText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cVal: {
    color: THEME.colors.accentGold,
    fontSize: 16,
    fontWeight: '800',
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: THEME.colors.surfaceDark,
    padding: 12,
    borderRadius: THEME.radii.md,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
  },
  switchLabel: {
    color: '#E2E8F0',
    fontSize: 12,
    flex: 1,
  },
  input: {
    backgroundColor: THEME.colors.surfaceDark,
    borderRadius: THEME.radii.md,
    paddingHorizontal: 14,
    paddingVertical: 12,
    color: THEME.colors.textLight,
    fontSize: 13,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  textArea: {
    height: 70,
    textAlignVertical: 'top',
  },
  submitBtn: {
    backgroundColor: THEME.colors.accentGold,
    paddingVertical: 14,
    borderRadius: THEME.radii.pill,
    alignItems: 'center',
    marginTop: 10,
    ...THEME.shadows.goldGlow,
  },
  submitBtnText: {
    color: THEME.colors.primaryDark,
    fontSize: 14,
    fontWeight: '800',
  },
  successCard: {
    backgroundColor: THEME.colors.surfaceDark,
    padding: 30,
    borderRadius: THEME.radii.lg,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: THEME.colors.accentEmerald,
  },
  successIcon: {
    fontSize: 48,
    color: THEME.colors.accentEmerald,
    marginBottom: 12,
  },
  successTitle: {
    color: THEME.colors.textLight,
    fontSize: 18,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 8,
  },
  successSub: {
    color: '#94A3B8',
    fontSize: 12,
    textAlign: 'center',
    lineHeight: 18,
    marginBottom: 20,
  },
  restartBtn: {
    backgroundColor: THEME.colors.accentGold,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: THEME.radii.pill,
  },
  restartBtnText: {
    color: THEME.colors.primaryDark,
    fontSize: 13,
    fontWeight: '800',
  },
  textRtl: {
    textAlign: 'right',
  },
});
