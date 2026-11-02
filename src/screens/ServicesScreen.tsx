import React from 'react';
import { View, Text, ScrollView, StyleSheet, Linking } from 'react-native';
import { useLocalization } from '../context/LocalizationContext';
import { useBooking } from '../context/BookingContext';
import { SERVICES, COMPANY_INFO } from '../data/wojhatData';
import { ServiceCard } from '../components/ServiceCard';
import { WojhatService } from '../types';
import { THEME } from '../styles/theme';

export const ServicesScreen: React.FC = () => {
  const { language, isRTL, t } = useLocalization();
  const { createWhatsAppLink } = useBooking();

  const handleInquireService = (service: WojhatService) => {
    const srvTitle = language === 'ar' ? service.titleAr : service.titleEn;
    const msg = language === 'ar'
      ? `مرحباً وجهات، أود الاستفسار وطلب خدمة: (${srvTitle}).`
      : `Hello Wojhat, I would like to inquire about: (${srvTitle}).`;
    Linking.openURL(createWhatsAppLink(msg)).catch(() => {});
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.title, isRTL && styles.textRtl]}>{t('services')}</Text>
        <Text style={[styles.subtitle, isRTL && styles.textRtl]}>
          {language === 'ar'
            ? 'خدمات كونسيرج راقية لرجال الأعمال والعائلات وكبار الشخصيات'
            : 'Executive concierge solutions for VIPs, families, and corporations'}
        </Text>
      </View>

      <ScrollView contentContainerStyle={styles.list} showsVerticalScrollIndicator={false}>
        {SERVICES.map(srv => (
          <ServiceCard
            key={srv.id}
            service={srv}
            onPress={() => handleInquireService(srv)}
            onInquirePress={() => handleInquireService(srv)}
          />
        ))}

        <View style={styles.corporateContactBox}>
          <Text style={styles.corpTitle}>
            {language === 'ar' ? 'هل تمثل وفداً رسمياً أو شركة؟' : 'Representing a Corporate Delegation?'}
          </Text>
          <Text style={styles.corpDesc}>
            {language === 'ar'
              ? 'يوفر فريق وجهات في إعمار سكوير بجدة مدراء حسابات مخصصين لخدمتكم وإدارة سفرياتكم المؤسسية.'
              : 'Our corporate account directors at Emaar Square, Jeddah provide turnkey travel management and protocol logistics.'}
          </Text>
          <Text style={styles.corpEmail}>✉️ corporate@wojhat.com.sa</Text>
        </View>
      </ScrollView>
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
  },
  list: {
    padding: 16,
    paddingBottom: 40,
  },
  corporateContactBox: {
    backgroundColor: THEME.colors.surfaceDark,
    borderRadius: THEME.radii.lg,
    padding: 18,
    marginTop: 10,
    borderWidth: 1,
    borderColor: THEME.colors.accentGold,
  },
  corpTitle: {
    color: THEME.colors.accentGold,
    fontSize: 15,
    fontWeight: '800',
    marginBottom: 6,
  },
  corpDesc: {
    color: '#CBD5E1',
    fontSize: 12,
    lineHeight: 18,
    marginBottom: 10,
  },
  corpEmail: {
    color: THEME.colors.accentGoldLight,
    fontSize: 13,
    fontWeight: '700',
  },
  textRtl: {
    textAlign: 'right',
  },
});
