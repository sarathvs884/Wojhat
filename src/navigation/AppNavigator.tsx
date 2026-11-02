import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { useLocalization } from '../context/LocalizationContext';
import { Header } from '../components/Header';
import { HomeScreen } from '../screens/HomeScreen';
import { DestinationsScreen } from '../screens/DestinationsScreen';
import { DestinationDetailScreen } from '../screens/DestinationDetailScreen';
import { PackagesScreen } from '../screens/PackagesScreen';
import { PackageDetailScreen } from '../screens/PackageDetailScreen';
import { ServicesScreen } from '../screens/ServicesScreen';
import { CustomTripScreen } from '../screens/CustomTripScreen';
import { ContactScreen } from '../screens/ContactScreen';
import { Destination, TravelPackage } from '../types';
import { THEME } from '../styles/theme';

export type TabType = 'home' | 'destinations' | 'packages' | 'custom' | 'services' | 'contact';

export const AppNavigator: React.FC = () => {
  const { language, isRTL, t } = useLocalization();

  const [currentTab, setCurrentTab] = useState<TabType>('home');
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<TravelPackage | null>(null);

  const handleSelectDestination = (dest: Destination) => {
    setSelectedDestination(dest);
    setSelectedPackage(null);
  };

  const handleSelectPackage = (pkg: TravelPackage) => {
    setSelectedPackage(pkg);
    setSelectedDestination(null);
  };

  const renderActiveScreen = () => {
    if (selectedDestination) {
      return (
        <DestinationDetailScreen
          destination={selectedDestination}
          onBack={() => setSelectedDestination(null)}
          onSelectPackage={handleSelectPackage}
          onNavigateToCustomTrip={() => {
            setSelectedDestination(null);
            setCurrentTab('custom');
          }}
        />
      );
    }

    if (selectedPackage) {
      return (
        <PackageDetailScreen
          travelPackage={selectedPackage}
          onBack={() => setSelectedPackage(null)}
        />
      );
    }

    switch (currentTab) {
      case 'home':
        return (
          <HomeScreen
            onNavigateToDestinations={() => setCurrentTab('destinations')}
            onNavigateToPackages={() => setCurrentTab('packages')}
            onNavigateToServices={() => setCurrentTab('services')}
            onNavigateToCustomTrip={() => setCurrentTab('custom')}
            onSelectDestination={handleSelectDestination}
            onSelectPackage={handleSelectPackage}
          />
        );
      case 'destinations':
        return <DestinationsScreen onSelectDestination={handleSelectDestination} />;
      case 'packages':
        return <PackagesScreen onSelectPackage={handleSelectPackage} />;
      case 'custom':
        return <CustomTripScreen />;
      case 'services':
        return <ServicesScreen />;
      case 'contact':
        return <ContactScreen />;
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={THEME.colors.primaryDark} />
      <Header />

      <View style={styles.screenContainer}>
        {renderActiveScreen()}
      </View>

      {/* Bottom Tab Bar */}
      <View style={[styles.tabBar, isRTL && styles.tabBarRtl]}>
        <TouchableOpacity
          onPress={() => {
            setSelectedDestination(null);
            setSelectedPackage(null);
            setCurrentTab('home');
          }}
          style={styles.tabItem}
        >
          <Text style={[styles.tabIcon, currentTab === 'home' && styles.activeTabIcon]}>🏛</Text>
          <Text style={[styles.tabText, currentTab === 'home' && styles.activeTabText]}>
            {t('explore')}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setSelectedDestination(null);
            setSelectedPackage(null);
            setCurrentTab('destinations');
          }}
          style={styles.tabItem}
        >
          <Text style={[styles.tabIcon, currentTab === 'destinations' && styles.activeTabIcon]}>🗺</Text>
          <Text style={[styles.tabText, currentTab === 'destinations' && styles.activeTabText]}>
            {t('destinations')}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setSelectedDestination(null);
            setSelectedPackage(null);
            setCurrentTab('packages');
          }}
          style={styles.tabItem}
        >
          <Text style={[styles.tabIcon, currentTab === 'packages' && styles.activeTabIcon]}>✨</Text>
          <Text style={[styles.tabText, currentTab === 'packages' && styles.activeTabText]}>
            {t('packages')}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setSelectedDestination(null);
            setSelectedPackage(null);
            setCurrentTab('custom');
          }}
          style={styles.tabItem}
        >
          <View style={styles.centerPill}>
            <Text style={styles.centerPillIcon}>✦</Text>
          </View>
          <Text style={[styles.tabText, currentTab === 'custom' && styles.activeTabText]}>
            {t('customTrip')}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setSelectedDestination(null);
            setSelectedPackage(null);
            setCurrentTab('services');
          }}
          style={styles.tabItem}
        >
          <Text style={[styles.tabIcon, currentTab === 'services' && styles.activeTabIcon]}>👑</Text>
          <Text style={[styles.tabText, currentTab === 'services' && styles.activeTabText]}>
            {t('services')}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setSelectedDestination(null);
            setSelectedPackage(null);
            setCurrentTab('contact');
          }}
          style={styles.tabItem}
        >
          <Text style={[styles.tabIcon, currentTab === 'contact' && styles.activeTabIcon]}>🏢</Text>
          <Text style={[styles.tabText, currentTab === 'contact' && styles.activeTabText]}>
            {t('contact')}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: THEME.colors.primaryDark,
  },
  screenContainer: {
    flex: 1,
    backgroundColor: THEME.colors.backgroundDark,
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: THEME.colors.primaryDark,
    borderTopWidth: 1,
    borderTopColor: THEME.colors.surfaceBorder,
    paddingVertical: 8,
    paddingHorizontal: 6,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tabBarRtl: {
    flexDirection: 'row-reverse',
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  tabIcon: {
    fontSize: 18,
    marginBottom: 3,
    color: '#64748B',
  },
  activeTabIcon: {
    color: THEME.colors.accentGold,
  },
  tabText: {
    fontSize: 10,
    fontWeight: '600',
    color: '#64748B',
  },
  activeTabText: {
    color: THEME.colors.accentGold,
    fontWeight: '800',
  },
  centerPill: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: THEME.colors.accentGold,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 2,
  },
  centerPillIcon: {
    color: THEME.colors.primaryDark,
    fontSize: 14,
    fontWeight: 'bold',
  },
});
