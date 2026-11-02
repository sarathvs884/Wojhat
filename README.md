# WOJHAT Travel & Tourism Mobile Application (Android & iOS)
### Developed from the official analysis and data of [wojhat.com.sa](https://wojhat.com.sa)

---

## 📌 Executive Website Analysis (`wojhat.com.sa`)

**WOJHAT Travel & Tourism (شركة وجهات للسفر والسياحة)** is a premier luxury travel agency and destination management company headquartered in Jeddah, Kingdom of Saudi Arabia.

### Key Corporate & Commercial Identity
- **Headquarters:** Suite 504, E8 Building, Emaar Square, Al Fayhaa, King Abdullah Road, Jeddah, Saudi Arabia
- **Direct Phone / WhatsApp:** `+966 550 238 226`
- **Corporate Inquiries Email:** `info@wojhat.com.sa`
- **Commercial Registration (CR):** `4030388902`
- **Ministry of Tourism License:** `73103291`
- **Core Value Proposition:** *"Curated Journeys, Tailored to Perfection" / "وجهتك الأولى لرحلات فاخرة ومصممة خصيصاً"*

### Core Offerings & Strategic Pillars
1. **Inbound Saudi Tourism ("Discover Saudi Arabia / اكتشف وجهات السعودية"):**
   - **AlUla:** Hegra UNESCO World Heritage tombs, Maraya concert hall, Elephant Rock, Ashar Valley luxury resorts (*Habitas*, *Banyan Tree*).
   - **Jeddah:** Red Sea yacht charters, coral reef diving, UNESCO-listed Al-Balad coral houses, and luxury corniche living.
   - **Riyadh:** Diriyah At-Turaif UNESCO heritage, Kingdom Centre Sky Bridge, Boulevard World, and fine dining at Bujairi Terrace.
   - **The Red Sea & Umluj:** Untouched archipelago, private island hopping, eco-lodges, and marine safaris.
   - **Asir & Abha Highlands:** Misty green mountain peaks, Rijal Almaa heritage village, and cable car excursions.
2. **Outbound Luxury Travel ("Global Destinations / وجهات عالمية"):**
   - **Switzerland & The Alps:** Glacial lake cruises in Geneva and Lucerne, first-class panoramic train passes to Jungfraujoch, and private Mercedes chauffeurs.
   - **The Maldives:** Private overwater sunset pool villas, seaplane transfers, floating breakfasts, and sandbank dining.
   - **Japan (Tokyo & Kyoto):** High-speed bullet trains (Shinkansen), private Mount Fuji helicopter charters, tea ceremonies, and 5-star Ryokans.
3. **Specialized Concierge & Executive Services:**
   - **VIP Airport Meet & Assist:** Fast-track customs clearance, private airport lounge access, and executive tarmac transfers.
   - **Luxury Ground Transfers:** Fleet of Mercedes S-Class, Maybach, and Cadillac Escalade with private bilingual chauffeurs.
   - **Hajj & Umrah Luxury Consultancy:** 5-star suites with direct Kaaba/Haram view (Fairmont, Raffles), Haramain high-speed train coordination, and private Ziyarat tours.
   - **International Visa Consultancy:** Complete dossier preparation and fast-track appointment scheduling for Schengen, UK, US, Canada, Japan, and Saudi tourist e-Visas.
   - **Corporate Travel Management:** Turnkey delegation logistics, consolidated corporate billing, and dedicated account managers at Emaar Square, Jeddah.
   - **Medical Tourism Facilitation:** International healthcare travel coordination to premier clinics in Germany, Switzerland, the UK, and South Korea.

---

## 📱 Mobile Application Architecture (Android & iOS)

The application is architected using **React Native + Expo (TypeScript)** with native Android and iOS manifests, supporting single-codebase distribution to both the **Google Play Store** (`.apk` / `.aab`) and **Apple App Store** (`.ipa`).

### Directory Structure
```
wojhat-travel-app/
├── App.tsx                        # Main application entry with Navigation & Providers
├── app.json                       # Expo config (Android package, iOS bundleIdentifier, schemes)
├── package.json                   # Dependencies and build scripts
├── tsconfig.json                  # TypeScript compiler settings
├── babel.config.js                # Babel configuration
│
├── android/
│   └── app/src/main/
│       └── AndroidManifest.xml   # Android permissions, deep linking (wojhat.com.sa, wojhat://)
│
├── ios/
│   └── WojhatTravel/
│       └── Info.plist            # iOS schemes (whatsapp, tel, mailto), ATS configuration
│
├── src/
│   ├── types/
│   │   └── index.ts               # Complete TypeScript types (Destinations, Packages, Services)
│   ├── data/
│   │   └── wojhatData.ts          # Authentic data extracted from wojhat.com.sa
│   ├── styles/
│   │   └── theme.ts               # Wojhat luxury palette: Midnight Navy (#0F2537), Gold (#C5A880)
│   ├── context/
│   │   ├── LocalizationContext.tsx # Arabic (RTL) / English (LTR) with instant dictionary translation
│   │   ├── CurrencyContext.tsx    # SAR, USD, EUR real-time conversion
│   │   └── BookingContext.tsx     # Bookings, favorites, and WhatsApp dispatch generator
│   ├── navigation/
│   │   └── AppNavigator.tsx       # Bottom tabs navigation and stack coordinators
│   ├── components/
│   │   ├── Header.tsx             # Luxury brand header with quick language/currency toggles
│   │   ├── DestinationCard.tsx    # Responsive card with category tags and ratings
│   │   ├── PackageCard.tsx        # Card with duration, day-by-day teaser, price, and instant book
│   │   ├── ServiceCard.tsx        # Specialized VIP concierge service card
│   │   └── BookingModal.tsx       # Interactive booking & WhatsApp dispatch modal
│   └── screens/
│       ├── HomeScreen.tsx         # Hero banner, featured packages, search, testimonials
│       ├── DestinationsScreen.tsx # Filterable destinations (Saudi Inbound vs Global Outbound)
│       ├── DestinationDetailScreen.tsx # High-res gallery, best season, weather, packages
│       ├── PackagesScreen.tsx     # Curated packages (Family, Luxury, Culture)
│       ├── PackageDetailScreen.tsx # Day-by-day itinerary breakdown, inclusions/exclusions
│       ├── ServicesScreen.tsx     # VIP Concierge, Transfers, Hajj & Umrah, Visas
│       ├── CustomTripScreen.tsx   # Signature Wojhat "Tailor-Made Journey" builder
│       └── ContactScreen.tsx      # Emaar Square Jeddah office, phone, WhatsApp, email
│
└── preview/
    ├── index.html                 # Interactive zero-install Mobile App Simulator
    ├── style.css                  # Modern iOS & Android glassmorphic mobile UI styles
    └── app.js                     # Full interactive engine with authentic Wojhat data
```

---

## 🌟 Key Application Features

1. **Bilingual Localization (العربية / English):**
   - Full Right-to-Left (RTL) layout for Arabic (primary Saudi domestic market).
   - Instant toggle to English (LTR) for international travelers and VIPs.
2. **Currency Converter Engine:**
   - Saudi Riyal (SAR / ر.س), US Dollar (USD / $), and Euro (EUR / €).
3. **One-Tap WhatsApp Concierge Dispatch:**
   - Pre-formats customized inquiry strings directly addressing Wojhat's Jeddah booking office at `+966 550 238 226`.
4. **Signature "Tailor-Made" Journey Builder:**
   - Allows clients to customize destination type (Saudi, International, or Both), select cities, choose travel styles (Luxury VIP, Family Fun, Honeymoon, Cultural), specify duration and party size, toggle Mercedes private chauffeurs and VIP airport meet-and-assist, and receive instant concierge proposals.
5. **Day-by-Day Detailed Itineraries:**
   - Complete daily activity schedules, hotel accommodation notes, and included gourmet meals.
6. **Dual Device Interactive Simulator:**
   - Test in your browser as an **Apple iPhone 16 Pro** (Dynamic Island, iOS UI) or **Samsung Galaxy S24** (Android UI).

---

## 🚀 How to Run & Build the Application

### Option 1: Instant Zero-Install Browser Preview
You can immediately interact with and test the mobile application without installing any tools:
1. Navigate to the `preview/` folder:
   ```
   C:\Users\Admin\.gemini\antigravity\scratch\wojhat-travel-app\preview\index.html
   ```
2. Double-click `index.html` to open it in any web browser (Google Chrome, Microsoft Edge, Mozilla Firefox, or Safari).
3. Switch between **iPhone 16 Pro** and **Android Galaxy S24**, toggle **Arabic RTL / English**, explore destinations, build custom itineraries, and test booking requests.

---

### Option 2: Running with React Native & Expo
Once Node.js (v18+) is installed on your development machine:
1. Open PowerShell or Terminal in the project root:
   ```bash
   cd C:\Users\Admin\.gemini\antigravity\scratch\wojhat-travel-app
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Expo development server:
   ```bash
   npx expo start
   ```
4. **On Physical Mobile Devices:**
   - Install **Expo Go** from the Google Play Store (Android) or Apple App Store (iOS).
   - Scan the QR code shown in the terminal to immediately run the live app on your phone.

---

### Option 3: Generating Standalone Native APK & iOS IPA
To generate release-ready binary packages for Android and iOS app stores:
1. Install EAS CLI:
   ```bash
   npm install -g eas-cli
   eas login
   ```
2. Configure EAS project:
   ```bash
   eas build:configure
   ```
3. **Build Android APK / AAB:**
   ```bash
   eas build -p android --profile production
   ```
4. **Build iOS IPA:**
   ```bash
   eas build -p ios --profile production
   ```

---

## 🏢 Company Contact & Credits
- **Client / Source Platform:** [WOJHAT Travel & Tourism](https://wojhat.com.sa)
- **Address:** Office 504, E8 Building, Emaar Square, Al Fayhaa, Jeddah, Saudi Arabia
- **WhatsApp / Phone:** `+966 550 238 226`
- **Email:** `info@wojhat.com.sa`
