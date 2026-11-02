import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal, ScrollView, Linking } from 'react-native';
import { TravelPackage } from '../types';
import { useLocalization } from '../context/LocalizationContext';
import { useCurrency } from '../context/CurrencyContext';
import { useBooking } from '../context/BookingContext';
import { THEME } from '../styles/theme';

interface BookingModalProps {
  visible: boolean;
  onClose: () => void;
  travelPackage?: TravelPackage;
}

export const BookingModal: React.FC<BookingModalProps> = ({ visible, onClose, travelPackage }) => {
  const { language, isRTL, t } = useLocalization();
  const { currency, formatPrice } = useCurrency();
  const { addBooking, createWhatsAppLink } = useBooking();

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [travelDate, setTravelDate] = useState('2026-12-15');
  const [adults, setAdults] = useState(2);
  const [childrenCount, setChildrenCount] = useState(0);
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!travelPackage) return null;

  const pkgTitle = language === 'ar' ? travelPackage.titleAr : travelPackage.titleEn;
  const totalSAR = travelPackage.pricePerPersonSAR * adults + (travelPackage.pricePerPersonSAR * 0.5 * childrenCount);

  const handleSubmit = (sendWhatsApp: boolean) => {
    if (!fullName || !phone) {
      alert(language === 'ar' ? 'الرجاء إدخال الاسم ورقم الجوال' : 'Please provide your name and phone number');
      return;
    }

    addBooking({
      packageId: travelPackage.id,
      titleEn: travelPackage.titleEn,
      fullName,
      email: '',
      phone,
      travelDate,
      numberOfAdults: adults,
      numberOfChildren: childrenCount,
      specialRequests: notes,
      totalEstimateSAR: totalSAR,
      currency
    });

    if (sendWhatsApp) {
      const waMsg = `*طلب حجز باقة سياحية من تطبيق وجهات* 🌟
• الباقة: ${pkgTitle}
• الاسم: ${fullName}
• الجوال: ${phone}
• التاريخ المطلوب: ${travelDate}
• البالغين: ${adults}
• الأطفال: ${childrenCount}
• التكلفة التقديرية: ${formatPrice(totalSAR)}
• الملاحظات: ${notes || 'لا يوجد'}`;

      const link = createWhatsAppLink(waMsg);
      Linking.openURL(link).catch(() => {});
    }

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={true} onRequestClose={onClose}>
      <View style={styles.backdrop}>
        <View style={styles.modalContent}>
          <View style={[styles.header, isRTL && styles.headerRtl]}>
            <Text style={styles.modalTitle}>{t('bookNow')}</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
              <Text style={styles.closeText}>✕</Text>
            </TouchableOpacity>
          </View>

          {submitted ? (
            <View style={styles.successBox}>
              <Text style={styles.successIcon}>✓</Text>
              <Text style={styles.successText}>{t('requestSubmitted')}</Text>
            </View>
          ) : (
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
              <View style={styles.packageSummary}>
                <Text style={styles.summaryTitle}>{pkgTitle}</Text>
                <Text style={styles.summaryDuration}>
                  ⏱ {travelPackage.durationDays} {t('days')} / {travelPackage.durationNights} {t('nights')}
                </Text>
              </View>

              <Text style={[styles.label, isRTL && styles.textRtl]}>{t('fullName')} *</Text>
              <TextInput
                style={[styles.input, isRTL && styles.textRtl]}
                value={fullName}
                onChangeText={setFullName}
                placeholder={language === 'ar' ? 'محمد العبدالله' : 'Mohammed Al-Abdullah'}
                placeholderTextColor="#64748B"
              />

              <Text style={[styles.label, isRTL && styles.textRtl]}>{t('phoneWhatsApp')} *</Text>
              <TextInput
                style={[styles.input, isRTL && styles.textRtl]}
                value={phone}
                onChangeText={setPhone}
                placeholder="+966 5X XXX XXXX"
                keyboardType="phone-pad"
                placeholderTextColor="#64748B"
              />

              <Text style={[styles.label, isRTL && styles.textRtl]}>{t('travelDates')}</Text>
              <TextInput
                style={[styles.input, isRTL && styles.textRtl]}
                value={travelDate}
                onChangeText={setTravelDate}
                placeholder="YYYY-MM-DD"
                placeholderTextColor="#64748B"
              />

              {/* Counters */}
              <View style={styles.counterRow}>
                <View style={styles.counterBox}>
                  <Text style={styles.counterLabel}>{language === 'ar' ? 'البالغين' : 'Adults'}</Text>
                  <View style={styles.counterControls}>
                    <TouchableOpacity onPress={() => setAdults(Math.max(1, adults - 1))} style={styles.btnSmall}>
                      <Text style={styles.btnText}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.counterValue}>{adults}</Text>
                    <TouchableOpacity onPress={() => setAdults(adults + 1)} style={styles.btnSmall}>
                      <Text style={styles.btnText}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.counterBox}>
                  <Text style={styles.counterLabel}>{language === 'ar' ? 'الأطفال' : 'Children'}</Text>
                  <View style={styles.counterControls}>
                    <TouchableOpacity onPress={() => setChildrenCount(Math.max(0, childrenCount - 1))} style={styles.btnSmall}>
                      <Text style={styles.btnText}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.counterValue}>{childrenCount}</Text>
                    <TouchableOpacity onPress={() => setChildrenCount(childrenCount + 1)} style={styles.btnSmall}>
                      <Text style={styles.btnText}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              <Text style={[styles.label, isRTL && styles.textRtl]}>{t('specialNotes')}</Text>
              <TextInput
                style={[styles.input, styles.textArea, isRTL && styles.textRtl]}
                value={notes}
                onChangeText={setNotes}
                placeholder={language === 'ar' ? 'أي متطلبات خاصة بالرحلة أو الفندق...' : 'Any dietary, flight or room preferences...'}
                multiline
                numberOfLines={3}
                placeholderTextColor="#64748B"
              />

              <View style={styles.priceEstimateBox}>
                <Text style={styles.estimateLabel}>{language === 'ar' ? 'المجموع التقديري' : 'Estimated Total'}:</Text>
                <Text style={styles.estimateValue}>{formatPrice(totalSAR)}</Text>
              </View>

              <TouchableOpacity onPress={() => handleSubmit(true)} style={styles.whatsappButton}>
                <Text style={styles.whatsappButtonText}>💬 {t('inquireViaWhatsApp')}</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handleSubmit(false)} style={styles.submitButton}>
                <Text style={styles.submitButtonText}>{t('submitInquiry')}</Text>
              </TouchableOpacity>
            </ScrollView>
          )}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.75)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: THEME.colors.primaryDark,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 20,
    maxHeight: '90%',
    borderWidth: 1,
    borderColor: THEME.colors.surfaceBorder,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerRtl: {
    flexDirection: 'row-reverse',
  },
  modalTitle: {
    color: THEME.colors.accentGold,
    fontSize: 18,
    fontWeight: '800',
  },
  closeBtn: {
    padding: 6,
  },
  closeText: {
    color: '#94A3B8',
    fontSize: 20,
  },
  scroll: {
    paddingBottom: 24,
  },
  packageSummary: {
    backgroundColor: THEME.colors.surfaceDark,
    padding: 14,
    borderRadius: THEME.radii.md,
    marginBottom: 16,
    borderLeftWidth: 4,
    borderLeftColor: THEME.colors.accentGold,
  },
  summaryTitle: {
    color: THEME.colors.textLight,
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 4,
  },
  summaryDuration: {
    color: THEME.colors.textMuted,
    fontSize: 12,
  },
  label: {
    color: '#CBD5E1',
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 6,
  },
  textRtl: {
    textAlign: 'right',
  },
  input: {
    backgroundColor: THEME.colors.surfaceDark,
    borderRadius: THEME.radii.md,
    paddingHorizontal: 14,
    paddingVertical: 10,
    color: THEME.colors.textLight,
    fontSize: 14,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    marginBottom: 14,
  },
  textArea: {
    height: 70,
    textAlignVertical: 'top',
  },
  counterRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 14,
  },
  counterBox: {
    flex: 1,
    backgroundColor: THEME.colors.surfaceDark,
    padding: 10,
    borderRadius: THEME.radii.md,
    alignItems: 'center',
  },
  counterLabel: {
    color: '#CBD5E1',
    fontSize: 12,
    marginBottom: 6,
  },
  counterControls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  btnSmall: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: 'rgba(255,255,255,0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: THEME.colors.textLight,
    fontSize: 16,
    fontWeight: 'bold',
  },
  counterValue: {
    color: THEME.colors.accentGold,
    fontSize: 16,
    fontWeight: '700',
  },
  priceEstimateBox: {
    backgroundColor: 'rgba(197, 168, 128, 0.12)',
    padding: 12,
    borderRadius: THEME.radii.md,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'rgba(197, 168, 128, 0.3)',
  },
  estimateLabel: {
    color: THEME.colors.textLight,
    fontWeight: '600',
  },
  estimateValue: {
    color: THEME.colors.accentGoldLight,
    fontSize: 18,
    fontWeight: '800',
  },
  whatsappButton: {
    backgroundColor: '#25D366',
    paddingVertical: 13,
    borderRadius: THEME.radii.pill,
    alignItems: 'center',
    marginBottom: 10,
  },
  whatsappButtonText: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 14,
  },
  submitButton: {
    backgroundColor: THEME.colors.accentGold,
    paddingVertical: 13,
    borderRadius: THEME.radii.pill,
    alignItems: 'center',
  },
  submitButtonText: {
    color: THEME.colors.primaryDark,
    fontWeight: '800',
    fontSize: 14,
  },
  successBox: {
    padding: 40,
    alignItems: 'center',
  },
  successIcon: {
    fontSize: 48,
    color: THEME.colors.accentEmerald,
    marginBottom: 16,
  },
  successText: {
    color: THEME.colors.textLight,
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
  },
});
