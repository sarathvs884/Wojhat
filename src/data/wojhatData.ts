import { Destination, TravelPackage, WojhatService } from '../types';

export const COMPANY_INFO = {
  nameEn: 'WOJHAT Travel & Tourism',
  nameAr: 'شركة وجهات للسفر والسياحة',
  taglineEn: 'Curated Journeys, Tailored to Perfection',
  taglineAr: 'وجهتك الأولى لرحلات فاخرة ومصممة خصيصاً',
  headquartersEn: 'Suite 504, E8 Building, Emaar Square, Al Fayhaa, King Abdullah Road, Jeddah, Saudi Arabia',
  headquartersAr: 'مكتب 504، مبنى E8، إعمار سكوير، حي الفيحاء، طريق الملك عبدالله، جدة، المملكة العربية السعودية',
  phone: '+966 550 238 226',
  whatsapp: '+966550238226',
  email: 'info@wojhat.com.sa',
  website: 'https://wojhat.com.sa',
  workingHoursEn: 'Sunday - Thursday: 9:00 AM - 6:00 PM (24/7 VIP Concierge Support)',
  workingHoursAr: 'الأحد - الخميس: 9:00 صباحاً - 6:00 مساءً (دعم كونسيرج VIP على مدار الساعة)',
  crNumber: '4030388902',
  license: 'Tourism License: 73103291',
  socialMedia: {
    instagram: 'https://instagram.com/wojhat.sa',
    twitter: 'https://twitter.com/wojhat_sa',
    linkedin: 'https://linkedin.com/company/wojhat',
  }
};

export const DESTINATIONS: Destination[] = [
  {
    id: 'alula',
    nameEn: 'AlUla',
    nameAr: 'العُلا',
    category: 'saudi',
    regionEn: 'North-West (Madinah Region)',
    regionAr: 'شمال غرب المملكة',
    taglineEn: "The World's Largest Living Museum",
    taglineAr: 'أكبر متحف حي مفتوح في العالم',
    descriptionEn: 'AlUla is an extraordinary oasis of heritage, monumental Nabataean tombs at Hegra (Saudi Arabia’s first UNESCO World Heritage Site), mirror-clad architectural marvel Maraya, and dramatic sandstone canyon geology.',
    descriptionAr: 'واحة تاريخية مذهلة تضم مقابر الأنباط الشامخة في الحجر (أول موقع لليونسكو في المملكة)، وقاعة مرايا ذات العمارة العاكسة المبهرة، وتشكيلات صخرية وجبال رملية استثنائية.',
    image: 'https://images.unsplash.com/photo-1578895101408-1a36b834405b?auto=format&fit=crop&w=1000&q=80',
    heroImage: 'https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1578895101408-1a36b834405b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80'
    ],
    bestTimeToVisit: {
      en: 'October to April',
      ar: 'من أكتوبر إلى أبريل'
    },
    highlightsEn: [
      'Hegra UNESCO Archaeological Site & Tomb of Lihyan',
      'Elephant Rock (Jabal AlFil) sunset dinner',
      'Maraya Concert Hall & Ashar Valley luxury resorts',
      'Old Town guided heritage walk with local Rawi'
    ],
    highlightsAr: [
      'موقع الحِجر الأثري ومقبرة لحيان بن كوزا (اليونسكو)',
      'صخرة الفيل والاستمتاع بمشاهد الغروب الساحرة',
      'مسرح مرايا ومنتجعات وادي عشار الفاخرة',
      'جولة استكشاف البلدة القديمة مع الرواة المحليين'
    ],
    climateEn: 'Desert climate: pleasant mild winters (10°C - 24°C)',
    climateAr: 'مناخ صحراوي معتدل ولطيف شتاءً (10 - 24 درجة مئوية)',
    rating: 4.9,
    reviewCount: 342,
    featured: true,
    latitude: 26.6167,
    longitude: 37.9167
  },
  {
    id: 'jeddah',
    nameEn: 'Jeddah',
    nameAr: 'جدة',
    category: 'saudi',
    regionEn: 'Western Province (Red Sea)',
    regionAr: 'المنطقة الغربية (عروس البحر الأحمر)',
    taglineEn: 'Bride of the Red Sea & Gateway to the Two Holy Mosques',
    taglineAr: 'عروس البحر الأحمر وبوابة الحرمين الشريفين',
    descriptionEn: 'The historic coastal metropolis where centuries of maritime trade meet futuristic luxury. Home to the UNESCO-listed Al-Balad coral houses, bustling art galleries, corniche sculptures, and world-class diving.',
    descriptionAr: 'المدينة الساحلية التاريخية حيث يلتقي التراث البحري العريق مع الحداثة الفاخرة. تشتهر بحي البلد التاريخي المدرج باليونسكو، وكورنيش جدة الفاتن، ومراكز الفنون، وأنشطة الغوص.',
    image: 'https://images.unsplash.com/photo-1580835239846-5bb9ce03c8c3?auto=format&fit=crop&w=1000&q=80',
    heroImage: 'https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1580835239846-5bb9ce03c8c3?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80'
    ],
    bestTimeToVisit: {
      en: 'November to March',
      ar: 'من نوفمبر إلى مارس'
    },
    highlightsEn: [
      'Historic Al-Balad architecture & Roshan wooden lattices',
      'Jeddah Corniche & King Fahd Fountain',
      'Private Red Sea yacht charters & coral reef diving',
      'Emaar Square business district & luxury shopping'
    ],
    highlightsAr: [
      'حي البلد التاريخي وعمارة الرواشين الخشبية العريقة',
      'كورنيش جدة الواجهة البحرية ونافورة الملك فهد',
      'رحلات اليخوت الخاصة في البحر الأحمر والغوص بين الشعاب',
      'حي إعمار سكوير ومراكز التسوق الفاخرة'
    ],
    climateEn: 'Coastal warm; breezy evenings during winter (19°C - 29°C)',
    climateAr: 'ساحلي دافئ، مع نسيم بحري لطيف في الشتاء (19 - 29 درجة مئوية)',
    rating: 4.8,
    reviewCount: 512,
    featured: true,
    latitude: 21.5433,
    longitude: 39.1728
  },
  {
    id: 'riyadh',
    nameEn: 'Riyadh',
    nameAr: 'الرياض',
    category: 'saudi',
    regionEn: 'Central Province',
    regionAr: 'المنطقة الوسطى (عاصمة المملكة)',
    taglineEn: 'The Pulsing Capital of Vision & Heritage',
    taglineAr: 'عاصمة المستقبل ومهد الدولة السعودية',
    descriptionEn: 'A visionary global metropolis pulsing with ambition, world-class entertainment, Michelin-caliber dining, and deep ancestral roots at Diriyah, the birthplace of the Saudi state.',
    descriptionAr: 'عاصمة عالمية نابضة بالطموح والفعاليات الكبرى، تجمع بين ناطحات السحاب المضيئة والتاريخ التليد في حي الطريف بالدرعية، مهد الدولة السعودية الأولى.',
    image: 'https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?auto=format&fit=crop&w=1000&q=80',
    heroImage: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80'
    ],
    bestTimeToVisit: {
      en: 'October to March (Riyadh Season)',
      ar: 'من أكتوبر إلى مارس (موسم الرياض)'
    },
    highlightsEn: [
      'Diriyah & UNESCO World Heritage Site At-Turaif',
      'Kingdom Centre Sky Bridge panoramic view',
      'Edge of the World (Jebel Fihrayn) dramatic escarpment',
      'Boulevard World and vibrant Riyadh Season festivities'
    ],
    highlightsAr: [
      'حي الطريف التاريخي بالدرعية المسجل في اليونسكو',
      'جسر المشاهدة المعلق ببرج المملكة',
      'حافة العالم (جبل فهرين) والمطل الجبلي الساحر',
      'بوليفارد وورلد وفعاليات موسم الرياض العالمية'
    ],
    climateEn: 'Dry desert climate; cool, crisp winter evenings',
    climateAr: 'صحراوي جاف، معتدل ولطيف نهاراً وبارد منعش ليلاً في الشتاء',
    rating: 4.85,
    reviewCount: 420,
    featured: true,
    latitude: 24.7136,
    longitude: 46.6753
  },
  {
    id: 'red-sea',
    nameEn: 'The Red Sea & Umluj',
    nameAr: 'البحر الأحمر وأملج',
    category: 'saudi',
    regionEn: 'Western Coast',
    regionAr: 'الساحل الغربي',
    taglineEn: 'The Saudi Maldives - Untouched Archipelago',
    taglineAr: 'مالديف السعودية - جزر عذراء وطبيعة بكر',
    descriptionEn: 'Pristine islands, ultra-luxury regenerative resorts, turquoise waters, and thriving marine life featuring rare sea turtles, dolphins, and coral reefs.',
    descriptionAr: 'أرخبيل من الجزر البكر فائقة الجمال مع منتجعات عالمية مستدامة، ومياه تركوازية صافية غنية بالشعاب المرجانية والحياة البحرية النادرة.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=80',
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'
    ],
    bestTimeToVisit: {
      en: 'Year-Round (Best: October - May)',
      ar: 'طوال العام (الأفضل: أكتوبر إلى مايو)'
    },
    highlightsEn: [
      'Private island hopping & secluded beaches',
      'PADI-certified guided snorkeling and scuba diving',
      'Ultra-luxury overwater villas and eco-lodges',
      'Sunset dolphin-watching boat cruises'
    ],
    highlightsAr: [
      'جولات خاصة بين الجزر والشواطئ الرملية البيضاء',
      'رحلات الغوص والسنوركلينج برفقة غواصين معتمدين',
      'فلل عائمة فوق الماء ومنتجعات بيئية فاخرة',
      'رحلات بحرية لمشاهدة الدلافين عند الغروب'
    ],
    climateEn: 'Tropical marine climate with constant coastal breeze',
    climateAr: 'مناخ بحري استوائي مع نسيم عليل طوال اليوم',
    rating: 4.95,
    reviewCount: 189,
    featured: true,
    latitude: 25.0333,
    longitude: 37.2667
  },
  {
    id: 'abha-asir',
    nameEn: 'Abha & Asir Highlands',
    nameAr: 'أبها ومنطقة عسير',
    category: 'saudi',
    regionEn: 'Southern Province',
    regionAr: 'المنطقة الجنوبية',
    taglineEn: 'Clouds, Green Terraces & Foggy Peaks',
    taglineAr: 'سيدة الضباب، الجبال الخضراء والتراث الأصيل',
    descriptionEn: 'Perched thousands of meters above sea level, Asir offers cool mountain breezes, misty pine forests, the ancient stone village of Rijal Almaa, and vibrant Qatt Al-Asiri art.',
    descriptionAr: 'ترتفع آلاف الأمتار فوق سطح البحر، وتتميز بأجوائها الضبابية الباردة صيفاً، ومدرجاتها الخضراء، وقرية رجال ألمع التراثية، وفن القط العسيري المسجل باليونسكو.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80',
    heroImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80'
    ],
    bestTimeToVisit: {
      en: 'June to September (Refreshing summer escape)',
      ar: 'من يونيو إلى سبتمبر (ملاذ صيفي بارد)'
    },
    highlightsEn: [
      'Rijal Almaa Heritage Village (UNESCO Tentative List)',
      'Soudah Mountain Peak (highest in Saudi Arabia)',
      'Cable car rides through misty green canyons',
      'Authentic Southern culinary feast & honey tasting'
    ],
    highlightsAr: [
      'قرية رجال ألمع التراثية وقصورها الحجرية الشاهقة',
      'قمة جبل السودة (أعلى قمة جبلية في السعودية)',
      'تلفريك السودة وعربات السحاب المعلقة فوق الوديان',
      'المأكولات العسيرية الأصيلة وتذوق العسل الجبلي الفاخر'
    ],
    climateEn: 'Cool temperate alpine climate; pleasant 18°C - 25°C in mid-summer',
    climateAr: 'مناخ جبلي معتدل وأمطار موسمية وضباب صيفاً (18 - 25 درجة مئوية)',
    rating: 4.75,
    reviewCount: 230,
    featured: false,
    latitude: 18.2164,
    longitude: 42.5053
  },
  {
    id: 'switzerland',
    nameEn: 'Switzerland & The Alps',
    nameAr: 'سويسرا وجبال الألب',
    category: 'international',
    regionEn: 'Central Europe',
    regionAr: 'وسط أوروبا',
    taglineEn: 'Alpine Lakes, Glaciers & Luxurious Tranquility',
    taglineAr: 'بحيرات الألب، القمم الثلجية والفخامة الهادئة',
    descriptionEn: 'The hallmark of luxury travel: pristine glacial lakes, picturesque alpine villages, world-class watchmakers, and the legendary Swiss hospitality.',
    descriptionAr: 'عنوان الفخامة الأوروبية وسحر الطبيعة الخلابة: بحيرات جليدية صافية، قرى ريفية حالمة، وخدمات ضيافة سويسرية راقية مصممة للعائلات وشهر العسل.',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1000&q=80',
    heroImage: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'
    ],
    bestTimeToVisit: {
      en: 'May to October & Dec-Feb (Ski)',
      ar: 'مايو إلى أكتوبر، وديسمبر إلى فبراير للتزلج'
    },
    highlightsEn: [
      'Private lake cruise on Lake Geneva and Lucerne',
      'Jungfraujoch - Top of Europe scenic train journey',
      'Zermatt & Matterhorn luxury chalet stays',
      'Dedicated private VIP Mercedes transport'
    ],
    highlightsAr: [
      'جولات خاصة باليخوت في بحيرتي جنيف ولوتسيرن',
      'قطار يونغفراويوخ البانورامي لأعلى قمة في أوروبا',
      'إقامة فاخرة في شاليهات زيرمات المطلة على الماترهورن',
      'خدمة سيارات مرسيدس وسائق خاص معتمد طوال الرحلة'
    ],
    climateEn: 'Pleasant European summer, snowy winter wonderland',
    climateAr: 'صيف أوروبي منعش، وشتاء ثلجي ساحر',
    rating: 4.95,
    reviewCount: 380,
    featured: true,
    latitude: 46.8182,
    longitude: 8.2275
  },
  {
    id: 'maldives',
    nameEn: 'The Maldives',
    nameAr: 'جزر المالديف',
    category: 'international',
    regionEn: 'Indian Ocean',
    regionAr: 'المحيط الهندي',
    taglineEn: 'Turquoise Atolls & Private Ocean Havens',
    taglineAr: 'جزر الفردوس وفلل فوق المياه الفيروزية',
    descriptionEn: 'The ultimate luxury honeymoon and relaxation getaway. Overwater villas with private infinity pools, underwater restaurants, and secluded coral atolls.',
    descriptionAr: 'الملاذ الأمثل للاسترخاء وشهر العسل الفاخر. فلل عائمة بمسبح خاص، ومطاعم تحت سطح البحر، وخصوصية تامة بين مياه المحيط الهندي الصافية.',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1000&q=80',
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80'
    ],
    bestTimeToVisit: {
      en: 'November to April (Dry Season)',
      ar: 'من نوفمبر إلى أبريل'
    },
    highlightsEn: [
      'Seaplane transfers over azure atolls',
      'Private overwater sunset villa with glass floor',
      'Floating champagne breakfast in private pool',
      'Manta ray snorkeling and private sandbank dinners'
    ],
    highlightsAr: [
      'رحلة بالطائرة المائية فوق الشعاب المرجانية',
      'فيلا عائمة مع مسبح خاص وأرضيات زجاجية مطلة على البحر',
      'إفطار عائم في المسبح الخاص مع إطلالة بانورامية',
      'سباحة مع أسماك المانتا وعشاء رومانسي على جزيرة رملية خاصة'
    ],
    climateEn: 'Tropical sunny climate (28°C - 31°C)',
    climateAr: 'استوائي مشمس ودافئ طوال العام (28 - 31 درجة مئوية)',
    rating: 4.98,
    reviewCount: 460,
    featured: true,
    latitude: 3.2028,
    longitude: 73.2207
  },
  {
    id: 'japan',
    nameEn: 'Japan (Tokyo & Kyoto)',
    nameAr: 'اليابان (طوكيو وكيوتو)',
    category: 'international',
    regionEn: 'East Asia',
    regionAr: 'شرق آسيا',
    taglineEn: 'Ancient Traditions & Futuristic Harmony',
    taglineAr: 'تناغم التقاليد العريقة والتكنولوجيا المستقبلية',
    descriptionEn: 'From Tokyo’s neon-lit skyline and Michelin culinary art to Kyoto’s serene Zen temples, bamboo groves, and historic Ryokan onsens.',
    descriptionAr: 'من ناطحات سحاب طوكيو المتطورة ومطاعم الميشلان الفاخرة، إلى معابد كيوتو الأثرية، وغابات الخيزران، والينابيع الحارة في نزل الريوكان التقليدية.',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1000&q=80',
    heroImage: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80'
    ],
    bestTimeToVisit: {
      en: 'March-May (Cherry Blossoms) & Oct-Nov (Autumn Foliage)',
      ar: 'مارس-مايو (موسم الكرز) وأكتوبر-نوفمبر (ألوان الخريف)'
    },
    highlightsEn: [
      'Shinkansen bullet train first-class journeys',
      'Exclusive tea ceremony with a Kyoto Geisha master',
      'Private Mount Fuji helicopter tour',
      'Luxury 5-star hotel stays in Ginza & Roppongi'
    ],
    highlightsAr: [
      'السفر بقطار الرصاصة السريع بالدرجة الأولى (الشينكانسن)',
      'مراسم الشاي الياباني التقليدي الخاصة في كيوتو',
      'جولة هليكوبتر خاصة فوق جبل فوجي الشهير',
      'إقامة في فنادق 5 نجوم فاخرة في أحياء جينزا وروبونجي'
    ],
    climateEn: 'Four distinct picturesque seasons',
    climateAr: 'أربعة فصول متمايزة بطبيعة ساحرة',
    rating: 4.9,
    reviewCount: 290,
    featured: false,
    latitude: 35.6762,
    longitude: 139.6503
  }
];

export const PACKAGES: TravelPackage[] = [
  {
    id: 'wojhat-family-package',
    titleEn: 'Signature Family Holiday Escape',
    titleAr: 'باقة العائلة المميزة من وجهات',
    type: 'family',
    destinationId: 'jeddah',
    destinationNameEn: 'Jeddah & Red Sea Coast',
    destinationNameAr: 'جدة وساحل البحر الأحمر',
    durationDays: 5,
    durationNights: 4,
    pricePerPersonSAR: 4850,
    badgeEn: 'Best Seller for Families',
    badgeAr: 'الأكثر طلباً للعائلات',
    coverImage: 'https://images.unsplash.com/photo-1580835239846-5bb9ce03c8c3?auto=format&fit=crop&w=1000&q=80',
    descriptionEn: 'Carefully designed for the comfort and entertainment of every family member. Features luxury 5-star suites, private luxury van airport transfers, interactive historical tours in Al-Balad, private yacht excursion, and kids amusement park access.',
    descriptionAr: 'صممت بعناية لراحة وسعادة كل أفراد العائلة. تتضمن إقامة في أجنحة عائلية فاخرة (5 نجوم)، توصيل خاص بسيارة فان VIP، جولات ممتعة في البلد، رحلة يخت عائلية خاصة، وتذاكر للمدن الترفيهية.',
    inclusionsEn: [
      '4 Nights in a 5-Star Luxury Family Suite with Red Sea view',
      'Daily gourmet international breakfast for all family members',
      'Private VIP Mercedes V-Class airport transfers and daily chauffeur',
      'Private 4-hour Red Sea yacht charter with snacks & snorkeling gear',
      'Guided family walking tour of Historic Al-Balad with storyteller',
      '24/7 dedicated Wojhat family concierge coordinator'
    ],
    inclusionsAr: [
      'إقامة 4 ليالٍ في جناح عائلي فاخر 5 نجوم بإطلالة بحرية',
      'بوفيه إفطار فاخر يومي لجميع أفراد الأسرة',
      'توصيل خاص بسيارة مرسيدس فان VIP وسائق خاص طوال الجولات',
      'رحلة يخت خاصة في البحر الأحمر لمدة 4 ساعات مع سناك ومعدات سنوركلينج',
      'جولة ممتعة في حي البلد مع راوي تاريخي للأطفال والكبار',
      'منسق رحلات كونسيرج مخصص من وجهات على مدار 24 ساعة'
    ],
    exclusionsEn: [
      'Domestic or international flights (available upon request)',
      'Personal shopping and optional water sports',
      'Travel insurance (can be added)'
    ],
    exclusionsAr: [
      'تذاكر الطيران (يمكن إضافتها وحجزها حسب الطلب)',
      'المشتريات الشخصية والأنشطة الإضافية',
      'تأمين السفر (متاح كإضافة اختيارية)'
    ],
    itinerary: [
      {
        day: 1,
        titleEn: 'Arrival in Jeddah & VIP Welcome',
        titleAr: 'الوصول إلى جدة والاستقبال الفاخر',
        descriptionEn: 'Meet & Assist at King Abdulaziz International Airport executive terminal, private chauffeur transfer to 5-star hotel, welcome refreshments, and evening leisure stroll on the corniche.',
        descriptionAr: 'استقبال وتوديع VIP من صالة المطار الفاخرة، نقل خاص بالفندق، استلام الجناح والاستمتاع بمشروبات الترحيب، وجولة مسائية حرة على الكورنيش.',
        mealsIncluded: ['Welcome Dinner'],
        stayHotelEn: 'The Ritz-Carlton Jeddah / Shangri-La',
        stayHotelAr: 'فندق الريتز كارلتون جدة / شانغريلا'
      },
      {
        day: 2,
        titleEn: 'Historic Al-Balad & Cultural Treasures',
        titleAr: 'اكتشاف حي البلد وتاريخ جدة العريق',
        descriptionEn: 'Explore the UNESCO World Heritage site of Al-Balad, Beit Nassif, traditional spice and perfume souqs, and sample authentic Saudi delicacies.',
        descriptionAr: 'جولة مشوقة في أزقة البلد التاريخية، وزيارة بيت نصيف التراثي، وأسواق العطور والبهارات، وتذوق القهوة السعودية والمأكولات الحجازية.',
        mealsIncluded: ['Breakfast', 'Traditional Lunch'],
        stayHotelEn: 'The Ritz-Carlton Jeddah',
        stayHotelAr: 'فندق الريتز كارلتون جدة'
      },
      {
        day: 3,
        titleEn: 'Private Red Sea Yacht Cruise & Marine Adventure',
        titleAr: 'رحلة اليخت الخاص في مياه البحر الأحمر',
        descriptionEn: 'Board a private luxury yacht at Obhur Marina. Sail to pristine sandbanks for swimming, snorkeling, and sunbathing with catered lunch onboard.',
        descriptionAr: 'الانطلاق على متن يخت فاخر خاص من مارينا أبحر، الإبحار نحو الجزر الرملية للسباحة والسنوركلينج وتناول وجبة الغداء الفاخرة على متن اليخت.',
        mealsIncluded: ['Breakfast', 'Yacht Gourmet Lunch'],
        stayHotelEn: 'The Ritz-Carlton Jeddah',
        stayHotelAr: 'فندق الريتز كارلتون جدة'
      },
      {
        day: 4,
        titleEn: 'Modern Jeddah & Entertainment Highlights',
        titleAr: 'جدة الحديثة والتسوق والترفيه',
        descriptionEn: 'Visit the Jeddah Art Promenade, high-end boutiques, luxury shopping malls, and an evening dinner overlooking the Illuminated King Fahd Fountain.',
        descriptionAr: 'زيارة واجهة جدة البحرية وبروميناد الفنون، ومراكز التسوق الفاخرة، وعشاء خاص بإطلالة على نافورة الملك فهد المضاءة.',
        mealsIncluded: ['Breakfast', 'Gourmet Dinner'],
        stayHotelEn: 'The Ritz-Carlton Jeddah',
        stayHotelAr: 'فندق الريتز كارلتون جدة'
      },
      {
        day: 5,
        titleEn: 'Leisure Morning & Departure with VIP Assistance',
        titleAr: 'صباح هادئ والتوديع الفاخر إلى المطار',
        descriptionEn: 'Relaxing breakfast, late checkout, and private chauffeured transfer back to the airport terminal with expedited check-in assistance.',
        descriptionAr: 'إفطار هادئ وتسجيل خروج مرن، ثم التوصيل بسيارة خاصة إلى المطار مع تسهيل إجراءات السفر والوزن.',
        mealsIncluded: ['Breakfast']
      }
    ],
    featured: true,
    minGroupSize: 2,
    maxGroupSize: 8
  },
  {
    id: 'wojhat-alula-luxury',
    titleEn: 'AlUla Ancient Wonders & Desert Luxury',
    titleAr: 'روائع العلا وسحر الفخامة الصحراوية',
    type: 'luxury_honeymoon',
    destinationId: 'alula',
    destinationNameEn: 'AlUla Oasis & Ashar Valley',
    destinationNameAr: 'واحة العلا ووادي عشار',
    durationDays: 4,
    durationNights: 3,
    pricePerPersonSAR: 7900,
    badgeEn: 'Ultra-Luxury VIP Experience',
    badgeAr: 'تجربة VIP فائقة الفخامة',
    coverImage: 'https://images.unsplash.com/photo-1578895101408-1a36b834405b?auto=format&fit=crop&w=1000&q=80',
    descriptionEn: 'An unforgettable escape into thousands of years of Nabataean history, combined with stay at world-renowned luxury desert resorts (Habitas or Banyan Tree AlUla), private vintage Land Rover safari at Hegra, and dinner under the starlit sky.',
    descriptionAr: 'رحلة العمر بين آلاف السنين من عبق التاريخ النبطي، مقترنة بإقامة استثنائية في منتجعات وادي عشار الفاخرة (هابيتاس أو بانيان تري العلا)، وجولات لاند روفر كلاسيكية في الحِجر وعشاء تحت سماء النجوم.',
    inclusionsEn: [
      '3 Nights in an Ultra-Luxury Desert Villa at Ashar Valley with private plunge pool',
      'Private chartered 4x4 Land Rover with dedicated archaeologist guide',
      'VIP passes to Hegra, Dadan, Jabal Ikmah, and Maraya Concert Hall',
      'Private sunset dinner setup at Elephant Rock with stargazing astronomer',
      'Daily curated gourmet breakfast and 3 fine-dining dinners',
      'Roundtrip airport transfers from AlUla International Airport (ULH)'
    ],
    inclusionsAr: [
      'إقامة 3 ليالٍ في فيلا صحراوية فائقة الفخامة بوادي عشار مع مسبح خاص',
      'جيب لاند روفر كلاسيكي خاص مع مرشد آثار وخبير تاريخي معتمد',
      'تذاكر VIP لدخول الحِجر، دادان، جبل عكمة، ومسرح مرايا',
      'جلسة عشاء خاصة فاخرة عند صخرة الفيل مع جلسة رصد النجوم وتلسكوب',
      'إفطار يومي فاخر وثلاث وجبات عشاء في أرقى مطاعم العلا العالمية',
      'توصيل VIP خاص من وإلى مطار العلا الدولي'
    ],
    exclusionsEn: [
      'Flights to/from AlUla',
      'Helicopter tour upgrade (available upon request)',
      'Gratuities and personal souvenirs'
    ],
    exclusionsAr: [
      'تذاكر الطيران إلى العلا',
      'ترقية جولة الهليكوبتر الجوية (متاحة كخيار إضافي)',
      'المقتنيات الشخصية'
    ],
    itinerary: [
      {
        day: 1,
        titleEn: 'Arrival in AlUla & Ashar Valley Retreat',
        titleAr: 'الوصول إلى العلا والاستقرار في وادي عشار',
        descriptionEn: 'Arrive at AlUla Airport, VIP transfer through dramatic sandstone canyons to your villa at Banyan Tree / Habitas. Evening welcome dinner in Maraya restaurant.',
        descriptionAr: 'الوصول لمطار العلا، نقل فاخر بين الجبال الرملية الشاهقة إلى فيلتك في بانيان تري أو هابيتاس، وعشاء ترحيبي في مطعم مرايا.',
        mealsIncluded: ['Dinner'],
        stayHotelEn: 'Banyan Tree AlUla / Habitas AlUla',
        stayHotelAr: 'منتجع بانيان تري العلا / هابيتاس'
      },
      {
        day: 2,
        titleEn: 'Hegra UNESCO Royal Tombs & Stargazing',
        titleAr: 'استكشاف مدائن صالح (الحِجر) ورصد النجوم',
        descriptionEn: 'Morning private vintage Land Rover tour of Hegra including Tomb of Lihyan. Afternoon spa session, followed by private stargazing experience in the desert.',
        descriptionAr: 'جولة صباحية بسيارة لاند روفر كلاسيكية في موقع الحِجر وقصر الفريد. استرخاء بعد الظهر، تليها جلسة عشاء ورصد النجوم مع فلكي محترف.',
        mealsIncluded: ['Breakfast', 'Lunch', 'Desert Dinner'],
        stayHotelEn: 'Banyan Tree AlUla',
        stayHotelAr: 'منتجع بانيان تري العلا'
      },
      {
        day: 3,
        titleEn: 'Dadan, Jabal Ikmah & Old Town Sunset',
        titleAr: 'مملكة دادان، جبل عكمة وغروب البلدة القديمة',
        descriptionEn: 'Discover the open-air library of Jabal Ikmah inscriptions, ancient Dadan tombs, and stroll the vibrant artisan shops and cafes in AlUla Old Town.',
        descriptionAr: 'زيارة مكتبة جبل عكمة الصخرية المفتوحة، مقابر دادان، وجولة مسائية ممتعة بين دكاكين الحرفيين ومقاهي بلدة العلا التراثية.',
        mealsIncluded: ['Breakfast', 'Heritage Lunch', 'Dinner'],
        stayHotelEn: 'Banyan Tree AlUla',
        stayHotelAr: 'منتجع بانيان تري العلا'
      },
      {
        day: 4,
        titleEn: 'Sunrise Yoga / Canyon Walk & Departure',
        titleAr: 'شروق الشمس، جلسة استرخاء والتوديع',
        descriptionEn: 'Morning wellness yoga or scenic canyon walk, healthy organic breakfast, and private chauffeur transfer to AlUla Airport.',
        descriptionAr: 'صباح هادئ مع جلسة يوغا وإفطار عضوي، ثم النقل بسيارة خاصة إلى مطار العلا الدولي للمغادرة.',
        mealsIncluded: ['Breakfast']
      }
    ],
    featured: true,
    minGroupSize: 1,
    maxGroupSize: 4
  },
  {
    id: 'wojhat-maldives-honeymoon',
    titleEn: 'Maldives Overwater Paradise & Romantic Luxury',
    titleAr: 'سحر المالديف وفلل المحيط الرومانسية',
    type: 'luxury_honeymoon',
    destinationId: 'maldives',
    destinationNameEn: 'Private Atoll, Maldives',
    destinationNameAr: 'جزر المالديف الخاصة',
    durationDays: 6,
    durationNights: 5,
    pricePerPersonSAR: 12500,
    badgeEn: 'Ultimate Honeymoon',
    badgeAr: 'باقة شهر العسل الفاخرة',
    coverImage: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1000&q=80',
    descriptionEn: 'Indulge in idyllic romance across crystalline turquoise lagoons. Private ocean villa with infinity pool, scenic seaplane flight, couple spa rituals, and sunset dolphin cruise.',
    descriptionAr: 'عش أجمل لحظات العمر وسط مياه المحيط الهندي الفيروزية. فيلا عائمة فوق الماء بمسبح خاص، طائرة مائية، جلسات سبا للأزواج، ورحلة بحرية مع الدلافين وقت الغروب.',
    inclusionsEn: [
      '5 Nights in a Deluxe Overwater Sunset Pool Villa',
      'All-Inclusive gourmet dining at 4 signature restaurants',
      'Roundtrip scenic seaplane transfer between Malé and resort',
      'Romantic couple massage & aromatherapy treatment',
      'Private sunset cruise with dolphin watching and mocktails',
      'Floating breakfast experience delivered to your private pool'
    ],
    inclusionsAr: [
      'إقامة 5 ليالٍ في فيلا عائمة فوق الماء مع مسبح خاص وإطلالة غروب',
      'باقة طعام كاملة (All-Inclusive) في 4 مطاعم شاطئية وعالمية',
      'طائرة مائية ذهاباً وإياباً من مطار ماليه إلى المنتجع',
      'جلسة مساج وسبا خاصة للأزواج مع زيوت عطرية فاخرة',
      'رحلة بحرية خاصة وقت الغروب لمشاهدة الدلافين',
      'تجربة الإفطار العائم الفاخر في مسبح الفيلا الخاص'
    ],
    exclusionsEn: [
      'International flights from Saudi Arabia (can be booked via Wojhat)',
      'Motorized water sports (jet ski, flyboard)',
      'Scuba diving certification courses'
    ],
    exclusionsAr: [
      'تذاكر الطيران الدولي من السعودية (يمكن إضافتها بأفضل الأسعار عبر وجهات)',
      'الرياضات المائية ذات المحركات (الجيت سكي)',
      'دورات الغوص الاحترافية'
    ],
    itinerary: [
      {
        day: 1,
        titleEn: 'Seaplane Arrival & Overwater Villa Check-In',
        titleAr: 'الوصول بالطائرة المائية واستلام الفيلا العائمة',
        descriptionEn: 'Greeted at Malé Airport private lounge, breathtaking 35-minute seaplane flight over turquoise atolls, and welcome champagne mocktail at your villa.',
        descriptionAr: 'استقبال في صالة كبار الشخصيات بمطار ماليه، رحلة ساحرة بالطائرة المائية لـ 35 دقيقة، واستلام فيلتك العائمة المطلة على الأفق.',
        mealsIncluded: ['Dinner'],
        stayHotelEn: 'Waldorf Astoria Maldives / Anantara Kihavah',
        stayHotelAr: 'والدورف أستوريا المالديف / أنانتارا كيهافاه'
      },
      {
        day: 2,
        titleEn: 'Floating Breakfast & Coral Reef Snorkeling',
        titleAr: 'الإفطار العائم والغوص بين الشعاب المرجانية',
        descriptionEn: 'Wake up to a fresh gourmet breakfast floating in your pool. Afternoon guided snorkeling with marine biologist among turtles and manta rays.',
        descriptionAr: 'الاستيقاظ على إفطار عائم في المسبح الخاص، ثم جولة سنوركلينج برفقة خبير أحياء بحرية لاستكشاف السلاحف والأسماك الملونة.',
        mealsIncluded: ['Floating Breakfast', 'Lunch', 'Dinner'],
        stayHotelEn: 'Waldorf Astoria Maldives',
        stayHotelAr: 'والدورف أستوريا المالديف'
      },
      {
        day: 3,
        titleEn: 'Couple Spa Ritual & Sunset Dolphin Safari',
        titleAr: 'جلسة سبا استرخائية ورحلة الدلافين عند الغروب',
        descriptionEn: 'Enjoy a 90-minute signature couple spa ritual over the water. In the late afternoon, set sail on a private yacht into the open lagoon to spot playful spinner dolphins.',
        descriptionAr: 'جلسة تدليك استرخائية 90 دقيقة في سبا يطفو فوق الماء، تليها رحلة يخت رومانسية لمشاهدة أسراب الدلافين عند مغيب الشمس.',
        mealsIncluded: ['Breakfast', 'Lunch', 'Seafood Dinner'],
        stayHotelEn: 'Waldorf Astoria Maldives',
        stayHotelAr: 'والدورف أستوريا المالديف'
      },
      {
        day: 4,
        titleEn: 'Private Sandbank Dining Experience',
        titleAr: 'عشاء خاص على جزيرة رملية منعزلة',
        descriptionEn: 'A magical day of pure tranquility. In the evening, boat transfer to a secluded private sandbank for a candlelit 5-course dinner under the starry night.',
        descriptionAr: 'يوم للاسترخاء التام، وفي المساء الانتقال بقارب خاص لجزيرة رملية معزولة في قلب المحيط لعشاء رومانسي فاخر على أضواء الشموع.',
        mealsIncluded: ['Breakfast', 'Lunch', 'Sandbank Gourmet Dinner'],
        stayHotelEn: 'Waldorf Astoria Maldives',
        stayHotelAr: 'والدورف أستوريا المالديف'
      },
      {
        day: 5,
        titleEn: 'Underwater Dining & Ocean Kayaking',
        titleAr: 'تجربة المطعم تحت الماء والتجديف الكريستالي',
        descriptionEn: 'Glass-bottom kayaking across crystal shallows, followed by an extraordinary lunch experience inside the resort’s world-famous underwater glass restaurant.',
        descriptionAr: 'جولة تجديف بقوارب كاياك زجاجية شفافة، ثم تجربة غداء أسطورية داخل مطعم يقع بالكامل تحت سطح مياه البحر.',
        mealsIncluded: ['Breakfast', 'Underwater Lunch', 'Dinner'],
        stayHotelEn: 'Waldorf Astoria Maldives',
        stayHotelAr: 'والدورف أستوريا المالديف'
      },
      {
        day: 6,
        titleEn: 'Farewell Paradise & Seaplane Departure',
        titleAr: 'وداع الفردوس والعودة بالطائرة المائية',
        descriptionEn: 'Enjoy a final morning swim in your private pool, leisurely tropical breakfast, and seaplane transfer back to Malé for your connecting flight home.',
        descriptionAr: 'سباحة صباحية أخيرة، وإفطار استوائي لذيذ، ثم ركوب الطائرة المائية إلى ماليه استعداداً لرحلة العودة إلى أرض الوطن.',
        mealsIncluded: ['Breakfast']
      }
    ],
    featured: true,
    minGroupSize: 2,
    maxGroupSize: 2
  },
  {
    id: 'wojhat-riyadh-heritage-modern',
    titleEn: 'Riyadh Vision: Diriyah Heritage & Modern Marvels',
    titleAr: 'رؤية الرياض: تراث الدرعية وعجائب العاصمة',
    type: 'cultural',
    destinationId: 'riyadh',
    destinationNameEn: 'Riyadh & Diriyah',
    destinationNameAr: 'الرياض والدرعية التاريخية',
    durationDays: 3,
    durationNights: 2,
    pricePerPersonSAR: 3600,
    badgeEn: 'Culture & Modernity',
    badgeAr: 'أصالة وحداثة',
    coverImage: 'https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?auto=format&fit=crop&w=1000&q=80',
    descriptionEn: 'Experience the dynamic heart of Saudi Arabia. Explore the UNESCO-inscribed At-Turaif district in Diriyah, Bujairi Terrace dining, Kingdom Centre Sky Bridge, and Boulevard World.',
    descriptionAr: 'عش تجربة نابضة في قلب العاصمة السعودية. استكشف حي الطريف المسجل باليونسكو، وتناول العشاء في مطل البجيري الفاخر، واصعد لجسر برج المملكة وزر بوليفارد وورلد.',
    inclusionsEn: [
      '2 Nights stay in a 5-Star Luxury Hotel in central Riyadh',
      'Private Mercedes-Benz sedan with professional driver at service',
      'VIP At-Turaif & Diriyah heritage tour with local certified guide',
      'Dinner reservation and credit at Bujairi Terrace Michelin-starred restaurant',
      'Fast-track tickets to Kingdom Centre Sky Bridge and Boulevard World',
      'Airport Meet & Assist at King Khalid International Airport (RUH)'
    ],
    inclusionsAr: [
      'إقامة ليلتين في فندق 5 نجوم فاخر في قلب مدينة الرياض',
      'سيارة مرسيدس بنز فاخرة مع سائق خاص تحت الطلب',
      'جولة تراثية VIP في حي الطريف بالدرعية مع مرشد سعودي مرخص',
      'حجز ورصيد عشاء في أرقى مطاعم مطل البجيري المطل على الطريف',
      'تذاكر دخول سريع لجسر برج المملكة وبوليفارد وورلد',
      'خدمة الاستقبال والتوديع الفاخرة في مطار الملك خالد الدولي'
    ],
    exclusionsEn: [
      'Flights to/from Riyadh',
      'Personal shopping in luxury malls',
      'Edge of the World 4x4 expedition (available as optional add-on)'
    ],
    exclusionsAr: [
      'تذاكر الطيران للرياض',
      'المشتريات والتسوق الشخصي',
      'رحلة جبل فهرين حافة العالم (متاحة كإضافة اختيارية)'
    ],
    itinerary: [
      {
        day: 1,
        titleEn: 'Arrival, Kingdom Centre & Boulevard World',
        titleAr: 'الوصول، برج المملكة وبوليفارد وورلد',
        descriptionEn: 'VIP airport transfer, hotel check-in, sunset views from the 300-meter Sky Bridge at Kingdom Centre, and an evening discovering the world pavilions at Boulevard World.',
        descriptionAr: 'استقبال بالمطار، استلام الغرفة، صعود جسر برج المملكة لمشاهدة غروب الرياض من ارتفاع 300 متر، وأمسية ممتعة في بوليفارد وورلد.',
        mealsIncluded: ['Dinner'],
        stayHotelEn: 'Four Seasons Hotel Riyadh / Mansard Riyadh',
        stayHotelAr: 'فندق فور سيزونز الرياض / مانسارد'
      },
      {
        day: 2,
        titleEn: 'Diriyah At-Turaif & Bujairi Terrace Gastronomy',
        titleAr: 'الدرعية التاريخية ومطل البجيري الفاخر',
        descriptionEn: 'Morning visit to the UNESCO mud-brick palaces of At-Turaif, historical galleries, and an exquisite evening dining experience at Bujairi Terrace overlooking the illuminated fortress.',
        descriptionAr: 'جولة صباحية بين قصور الطريف الطينية التاريخية، وزيارة المتاحف التراثية، تليها تجربة عشاء استثنائية في مطل البجيري بإطلالة خلابة.',
        mealsIncluded: ['Breakfast', 'Fine Dining Dinner'],
        stayHotelEn: 'Four Seasons Hotel Riyadh',
        stayHotelAr: 'فندق فور سيزونز الرياض'
      },
      {
        day: 3,
        titleEn: 'National Museum & Departure',
        titleAr: 'المتحف الوطني، سوق الزل والتوديع',
        descriptionEn: 'Visit the architectural masterpiece National Museum of Saudi Arabia, stroll the ancient Souq Al-Zal for antique daggers and oud perfumes, and transfer to RUH airport.',
        descriptionAr: 'زيارة المتحف الوطني السعودي، وجولة في سوق الزل التاريخي للتحف والبشوت والعود، ثم التوصيل إلى مطار الملك خالد للمغادرة.',
        mealsIncluded: ['Breakfast']
      }
    ],
    featured: false,
    minGroupSize: 1,
    maxGroupSize: 6
  },
  {
    id: 'wojhat-swiss-grand-tour',
    titleEn: 'Swiss Alps & Glacial Lakes Grand Luxury Tour',
    titleAr: 'جراند تور سويسرا: جبال الألب والبحيرات الساحرة',
    type: 'luxury_honeymoon',
    destinationId: 'switzerland',
    destinationNameEn: 'Geneva, Interlaken & Lucerne',
    destinationNameAr: 'جنيف، إنترلاكن، ولوتسيرن',
    durationDays: 7,
    durationNights: 6,
    pricePerPersonSAR: 15800,
    badgeEn: 'European Luxury Prestige',
    badgeAr: 'الفخامة الأوروبية الرفيعة',
    coverImage: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1000&q=80',
    descriptionEn: 'A magnificent journey through Swiss natural grandeur. Cruise crystal clear waters in private boats, ride first-class panoramic mountain railways to Jungfraujoch, and stay at prestigious historic grand hotels.',
    descriptionAr: 'رحلة أسطورية عبر الطبيعة السويسرية الساحرة. قوارب خاصة في أنقى البحيرات، قطارات بانورامية بالدرجة الأولى إلى قمة يونغفراويوخ، وإقامة في أفخم فنادق القصور التاريخية.',
    inclusionsEn: [
      '6 Nights in Luxury 5-Star Leading Hotels of the World (Geneva, Interlaken, Lucerne)',
      'Dedicated private Mercedes V-Class with multilingual driver throughout',
      'VIP 1st Class Swiss Panoramic Train tickets & Jungfraujoch Top of Europe',
      'Private 2-hour classic wooden boat cruise on Lake Lucerne',
      'Private chocolate masterclass and Swiss watchmaker atelier visit',
      'Comprehensive Schengen visa support from Wojhat consultants'
    ],
    inclusionsAr: [
      'إقامة 6 ليالٍ في فنادق 5 نجوم عريقة تابعة لمنظمة The Leading Hotels of the World',
      'سيارة مرسيدس VIP خاصة وسائق يتحدث العربية والإنجليزية طوال الرحلة',
      'تذاكر قطارات بانورامية بالدرجة الأولى وصعود قمة يونغفراويوخ الثلجية',
      'جولة بقارب خشبي كلاسيكي خاص في بحيرة لوتسيرن لمدة ساعتين',
      'ورشة عمل خاصة لصناعة الشوكولاتة السويسرية وزيارة صانعي الساعات',
      'دعم كامل وتسهيل استخراج تأشيرة الشنغن من مستشاري وجهات'
    ],
    exclusionsEn: [
      'International roundtrip flights (can be reserved through Wojhat)',
      'Lunches and optional paragliding in Interlaken'
    ],
    exclusionsAr: [
      'تذاكر الطيران الدولية (متاحة للحجز بأسعار مميزة عبر وجهات)',
      'وجبات الغداء والأنشطة الاختيارية كالطيران المظلي في إنترلاكن'
    ],
    itinerary: [
      {
        day: 1,
        titleEn: 'Geneva Arrival & Lake Promenade',
        titleAr: 'الوصول إلى جنيف وكورنيش البحيرة',
        descriptionEn: 'Private chauffeur airport pickup, check in to lakeside palace hotel, afternoon stroll along Jet d’Eau and the Old Town.',
        descriptionAr: 'استقبال بالمطار بسيارة مرسيدس خاصة، استلام الغرفة بفندق القصر المطل على البحيرة، وجولة في جنيف القديمة ومحيط النافورة الشهيرة.',
        mealsIncluded: ['Dinner'],
        stayHotelEn: 'Hotel President Wilson, Geneva',
        stayHotelAr: 'فندق بريزيدنت ويلسون، جنيف'
      },
      {
        day: 2,
        titleEn: 'Montreux, Chillon Castle & Transfer to Interlaken',
        titleAr: 'مونترو، قلعة شيلون والانتقال لإنترلاكن',
        descriptionEn: 'Drive along the Swiss Riviera, visit the fairytale Chateau de Chillon on Lake Geneva, and arrive in the alpine wonderland of Interlaken.',
        descriptionAr: 'القيادة بمحاذاة الريفييرا السويسرية، زيارة قلعة شيلون التاريخية، ثم الوصول إلى منتجع إنترلاكن المحاط بقمم الألب.',
        mealsIncluded: ['Breakfast', 'Dinner'],
        stayHotelEn: 'Victoria-Jungfrau Grand Hotel & Spa',
        stayHotelAr: 'فندق فيكتوريا يونغفراو جراند هوتيل'
      },
      {
        day: 3,
        titleEn: 'Jungfraujoch: The Top of Europe',
        titleAr: 'قمة يونغفراويوخ: أعلى قمة قطار في أوروبا',
        descriptionEn: 'Ascend by the state-of-the-art Eiger Express cable car and cogwheel train to 3,454m. Explore the Ice Palace and breathtaking Aletsch Glacier.',
        descriptionAr: 'صعود مذهل عبر تلفريك إيجر إكسبريس الحديث وقطار القمة إلى ارتفاع 3,454 متر، واستكشاف قصر الجليد ونهر أليتش المتجمد.',
        mealsIncluded: ['Breakfast', 'Mountain Lunch'],
        stayHotelEn: 'Victoria-Jungfrau Grand Hotel & Spa',
        stayHotelAr: 'فندق فيكتوريا يونغفراو جراند هوتيل'
      },
      {
        day: 4,
        titleEn: 'Lake Brienz & Giessbach Waterfalls',
        titleAr: 'بحيرة برينز وشلالات جيس باخ الساحرة',
        descriptionEn: 'Cruise the turquoise waters of Lake Brienz, visit the thundering Giessbach Waterfalls, and explore picturesque wood-carving village of Brienz.',
        descriptionAr: 'جولة بحرية في مياه بحيرة برينز التركوازية، وزيارة شلالات جيس باخ وسط الغابات، واستكشاف قرية برينز الشهيرة بالحرف الخشبية.',
        mealsIncluded: ['Breakfast'],
        stayHotelEn: 'Victoria-Jungfrau Grand Hotel & Spa',
        stayHotelAr: 'فندق فيكتوريا يونغفراو جراند هوتيل'
      },
      {
        day: 5,
        titleEn: 'Scenic Drive to Lucerne & Chapel Bridge',
        titleAr: 'الانتقال إلى لوتسيرن وجسر الكابيل التاريخي',
        descriptionEn: 'Drive over the Brunig mountain pass to Lucerne. Walk the historic covered wooden Chapel Bridge (Kapellbrucke) and luxury shopping for Swiss timepieces.',
        descriptionAr: 'القيادة عبر ممر برونيغ الجبلي إلى لوتسيرن، زيارة جسر الكابيل الخشبي الشهير، وجولة تسوق لأرقى الساعات السويسرية.',
        mealsIncluded: ['Breakfast', 'Dinner'],
        stayHotelEn: 'Buergenstock Hotel & Alpine Spa / Mandarin Oriental Lucerne',
        stayHotelAr: 'منتجع بورغنستوك المعلق / ماندارين أورينتال'
      },
      {
        day: 6,
        titleEn: 'Mount Pilatus Dragon Ride & Private Boat Cruise',
        titleAr: 'جبل بيلاتوس وجولة اليخت الخاص في البحيرة',
        descriptionEn: 'Take the panoramic Dragon Ride cableway up Mount Pilatus, followed by a serene afternoon champagne cruise on Lake Lucerne with the Swiss Alps reflection.',
        descriptionAr: 'صعود تلفريك التنين البانورامي لقمة جبل بيلاتوس، تليها جولة بحرية خاصة في بحيرة لوتسيرن مع إطلالات الجبال المنعكسة في الماء.',
        mealsIncluded: ['Breakfast', 'Special Farewell Dinner'],
        stayHotelEn: 'Buergenstock Hotel & Alpine Spa',
        stayHotelAr: 'منتجع بورغنستوك لوتسيرن'
      },
      {
        day: 7,
        titleEn: 'Zurich Airport Chauffeur Transfer & Departure',
        titleAr: 'التوصيل الخاص لمطار زيورخ والتوديع',
        descriptionEn: 'Morning breakfast on the alpine terrace, private transfer to Zurich International Airport (ZRH) with tax-free shopping refund assistance.',
        descriptionAr: 'إفطار أخير في الشرفة الجبلية، ثم التوصيل بسيارة مرسيدس خاصة لمطار زيورخ مع مساعدة استرداد الضرائب (Tax-Free).',
        mealsIncluded: ['Breakfast']
      }
    ],
    featured: true,
    minGroupSize: 2,
    maxGroupSize: 6
  }
];

export const SERVICES: WojhatService[] = [
  {
    id: 'vip-concierge',
    titleEn: 'VIP Concierge & Luxury Meet & Assist',
    titleAr: 'خدمات كبار الشخصيات والاستقبال الفاخر (VIP)',
    shortDescEn: 'Seamless executive arrival, fast-track customs, private airport lounges, and luxury chauffeur transfers across Saudi Arabia and worldwide.',
    shortDescAr: 'استقبال وتوديع استثنائي بالمطارات، إنهاء إجراءات الجوازات بصالات كبار الشخصيات، وسيارات فاخرة مع سائقين معتمدين.',
    detailedDescEn: 'From private jet charter coordination to white-glove airport tarmac transfers and presidential suite bookings, Wojhat Concierge caters to royalty, dignitaries, executives, and discerning families.',
    detailedDescAr: 'من تنسيق الطيران الخاص واليخوت إلى النقل بسيارات مايباخ وكاديلاك اسكاليد وحجز الأجنحة الملكية، يقدم كونسيرج وجهات أعلى درجات الرفاهية والسرية التامة.',
    icon: 'Crown',
    image: 'https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&w=800&q=80',
    featuresEn: [
      'Fast-track customs & immigration in Riyadh, Jeddah, Dammam & global hubs',
      'Executive luxury fleet: Mercedes S-Class, Maybach, Cadillac Escalade',
      'Private jet chartering and yacht leasing',
      '24/7 dedicated bilingual personal lifestyle concierge'
    ],
    featuresAr: [
      'إنهاء إجراءات السفر والجمارك السريعة في مطارات المملكة والعالم',
      'أسطول سيارات فارهة: مرسيدس إس كلاس، مايباخ، كاديلاك إسكاليد',
      'حجوزات وتنسيق الطيران الخاص واستئجار اليخوت',
      'مساعد شخصي كونسيرج متاح 24/7 طوال الرحلة'
    ],
    turnaroundTimeEn: 'Instant confirmation for airport VIP; 24h for private charters',
    turnaroundTimeAr: 'تأكيد فوري لخدمات المطار، وخلال 24 ساعة للطيران الخاص'
  },
  {
    id: 'hajj-umrah',
    titleEn: 'Hajj & Umrah Luxury Consultancy',
    titleAr: 'استشارات الحج والعمرة الفاخرة',
    shortDescEn: 'Bespoke spiritual pilgrimages with front-row Haram 5-star hotel suites, Haramain high-speed train coordination, and private executive logistics.',
    shortDescAr: 'تنظيم رحلات إيمانية راقية تشمل إقامة في أجنحة مطلة مباشرة على الكعبة المشرفة وتنسيق قطار الحرمين السريع والتنقلات الخاصة.',
    detailedDescEn: 'Wojhat designs personalized spiritual journeys with utmost reverence and attention to comfort. We secure premier accommodations in the Clock Towers and Jabal Omar, private transfers between Makkah, Madinah, and Jeddah, and knowledgeable historical guides for ziyarat tours.',
    detailedDescAr: 'تصمم وجهات رحلات روحانية مريحة ومميزة تراعي أدق التفاصيل لضيوف الرحمن، مع تأمين أفضل الأجنحة المطلة على المسجد الحرام والمسجد النبوي وسيارات خاصة معقمة وسائقين متمرسين.',
    icon: 'Moon',
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=800&q=80',
    featuresEn: [
      'Direct Kaaba view and Haram view 5-star suites (Fairmont, Raffles, Jabal Omar)',
      'Haramain High-Speed Rail Business Class reservations & luggage handling',
      'Private chauffeured transfers between Jeddah, Makkah & Madinah',
      'Private historical Ziyarat tours in Madinah (Quba, Mount Uhud, Seven Mosques)'
    ],
    featuresAr: [
      'أجنحة 5 نجوم بإطلالة مباشرة على الكعبة والحرم (فيرمونت، رافلز، جبل عمر)',
      'حجوزات درجة رجال الأعمال بقطار الحرمين السريع وتوصيل الأمتعة',
      'تنقلات خاصة بسيارات حديثة بين جدة ومكة المكرمة والمدينة المنورة',
      'جولات زيارات تاريخية خاصة في المدينة المنورة برفقة مرشدين مؤهلين'
    ],
    turnaroundTimeEn: '24 - 48 hours for customized pilgrimage itinerary',
    turnaroundTimeAr: '24 - 48 ساعة لإعداد وتأكيد البرنامج الروحاني المخصص'
  },
  {
    id: 'visa-services',
    titleEn: 'Global Visa Consultancy & e-Visa Services',
    titleAr: 'خدمات واستشارات التأشيرات الدولية',
    shortDescEn: 'End-to-end visa application management for Schengen, United Kingdom, United States, Japan, and Saudi tourist/business visas.',
    shortDescAr: 'خدمات شاملة لاستخراج تأشيرات السفر الدولية (شنغن، بريطانيا، أمريكا، اليابان) وتأشيرات الزيارة والسياحة للمملكة.',
    detailedDescEn: 'Navigating visa regulations is effortless with Wojhat. Our accredited visa officers prepare documentation, secure biometric appointments, review insurance policies, and track submissions to minimize delays.',
    detailedDescAr: 'يتولى فريق وجهات المتخصص تدقيق الأوراق وتجهيز ملفات السفارات وحجز المواعيد البيومترية وإصدار وثائق التأمين المعتمدة ومتابعة التأشيرة حتى استلامها.',
    icon: 'FileCheck',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
    featuresEn: [
      'Schengen, UK, US B1/B2, and Canada visa full dossier preparation',
      'Fast-track appointment scheduling assistance',
      'Saudi Arabia Tourist e-Visa, Business Visa, and GCC resident visas',
      'Approved international travel insurance issuance'
    ],
    featuresAr: [
      'تجهيز كامل لملفات تأشيرات الشنغن، بريطانيا، الولايات المتحدة وكندا',
      'مساعدة في حجز المواعيد المبكرة والسريعة لدى مراكز التأشيرات',
      'إصدار التأشيرة السياحية السعودية الفورية وتأشيرات الأعمال والمقيمين بالخليج',
      'إصدار وثائق التأمين الطبي الدولي المعتمدة لدى السفارات'
    ],
    turnaroundTimeEn: 'Document review within 4 business hours; e-Visas within 24-48 hours',
    turnaroundTimeAr: 'تدقيق المستندات خلال 4 ساعات عمل، والتأشيرات الإلكترونية خلال 24-48 ساعة'
  },
  {
    id: 'corporate-travel',
    titleEn: 'Corporate, Business & Delegation Travel',
    titleAr: 'سياحة الأعمال والمؤتمرات والوفود المؤسسية',
    shortDescEn: 'Turnkey travel management for enterprises, diplomatic delegations, government summits, and executive business trips.',
    shortDescAr: 'حلول متكاملة لإدارة رحلات الشركات وسفريات الوفود الرسمية والمؤتمرات والمعارض الكبرى في المملكة وحول العالم.',
    detailedDescEn: 'Wojhat Corporate handles end-to-end travel logistics for corporate entities with consolidated billing, corporate travel policies, priority 24/7 amendments, and event hotel block booking.',
    detailedDescAr: 'تقدم وجهات للأعمال خدمات لوجستية دقيقة تشمل جداول سفر مرنة، فواتير موحدة للشركات، حجز قاعات المؤتمرات والاجتماعات، وسيارات خاصة لرجال الأعمال.',
    icon: 'Briefcase',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    featuresEn: [
      'Dedicated corporate account manager in Jeddah / Riyadh',
      'Consolidated monthly corporate billing & detailed travel reporting',
      'Meeting rooms, exhibition spaces, and protocol logistics',
      'Flexible flight amendments and corporate hotel rate agreements'
    ],
    featuresAr: [
      'مدير حساب مخصص للشركات في جدة والرياض',
      'نظام فوترة موحد وتقارير شهرية مفصلة لحركة السفر للمنشأة',
      'حجز وتجهيز قاعات المؤتمرات وخدمات المراسم والبروتوكول',
      'مرونة عالية في التعديل والإلغاء مع أسعار شركات تفضيلية'
    ],
    turnaroundTimeEn: 'Corporate SLA response within 2 hours',
    turnaroundTimeAr: 'استجابة سريعة وفق اتفاقية مستوى الخدمة خلال ساعتين'
  },
  {
    id: 'tailor-made-luxury',
    titleEn: 'Bespoke Journeys & Custom Itinerary Design',
    titleAr: 'تصميم رحلات السفر المخصصة (Tailor-Made)',
    shortDescEn: 'Craft every detail of your dream vacation around your personal taste, preferred pace, luxury level, and private activities.',
    shortDescAr: 'صمم رحلة أحلامك بدقة متناهية وفق اهتماماتك وجدولك الزمني الخاص مع خبرائنا في وجهات للسفر والسياحة.',
    detailedDescEn: 'No two travelers are the same. Our senior travel designers build bespoke itineraries from scratch, whether it is an anniversary getaway to the Swiss Alps, a private family island retreat, or an adventurous Saudi desert safari.',
    detailedDescAr: 'تؤمن وجهات بأن كل رحلة هي قصة فريدة. يقوم مستشارونا بتصميم مسارات مخصصة بالكامل تشمل أدق التفاصيل من الفنادق المفضلة والأنشطة الخاصة والسيارات حسب رغبتك.',
    icon: 'Compass',
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80',
    featuresEn: [
      'One-on-one consultation with senior Wojhat travel designer',
      'Handpicked 5-star & boutique luxury accommodation options',
      'Exclusive private access to historical sites and unique culinary tables',
      'Interactive mobile itinerary with real-time flight and tour updates'
    ],
    featuresAr: [
      'جلسة استشارة خاصة مع أحد كبار مصممي الرحلات بوجهات',
      'اختيار دقيق لأفخم الفنادق والمنتجعات البوتيكية الفاخرة',
      'دخول خاص وتجارب حصرية في المواقع التاريخية والمطاعم الراقية',
      'جدول رحلة تفاعلي على هاتفك مع تحديثات لحظية'
    ],
    turnaroundTimeEn: 'Custom itinerary draft within 24 hours',
    turnaroundTimeAr: 'مسودة البرنامج المخصص خلال 24 ساعة'
  },
  {
    id: 'medical-tourism',
    titleEn: 'International Medical Tourism Coordination',
    titleAr: 'تنسيق الرحلات العلاجية الدولية',
    shortDescEn: 'Specialized arrangements for medical travel to world-leading clinics in Germany, Switzerland, the UK, and South Korea.',
    shortDescAr: 'ترتيبات متخصصة للرحلات العلاجية لأرقى المستشفيات والمراكز الطبية المعتمدة في ألمانيا وسويسرا وبريطانيا وكوريا.',
    detailedDescEn: 'Wojhat eases the stress of overseas healthcare with compassionate logistics: hospital appointment liaison, medical translation, long-stay family apartments near treatment centers, and medical visa facilitation.',
    detailedDescAr: 'توفر وجهات تنسيقاً متكاملاً للمرضى ومرافقيهم يشمل حجز المواعيد الطبية، الترجمة المتخصصة، شقق فندقية مجهزة بالقرب من المستشفيات، وسيارات مريحة مجهزة.',
    icon: 'HeartPulse',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
    featuresEn: [
      'Liaison with accredited medical institutions in Europe & Asia',
      'Medical visa invitations and expedited processing',
      'Private medical transfers and wheelchair-accessible transport',
      'Professional Arabic medical translators and concierge support'
    ],
    featuresAr: [
      'تنسيق مباشر مع أفضل المستشفيات والمراكز المتخصصة في أوروبا وآسيا',
      'تأمين خطابات الدعوة الطبية واستخراج التأشيرات العلاجية العاجلة',
      'سيارات مجهزة لنقل المرضى وكراسي متحركة وراحة تامة',
      'مترجمون طبيون محترفون يتحدثون العربية لمرافقة المريض'
    ],
    turnaroundTimeEn: 'Initial medical coordination within 48 hours',
    turnaroundTimeAr: 'التنسيق الأولي مع المراكز الطبية خلال 48 ساعة'
  }
];

export const TESTIMONIALS = [
  {
    id: '1',
    authorEn: 'Sheikh Mohammed Al-Otaibi',
    authorAr: 'الشيخ محمد العتيبي',
    roleEn: 'Family Holiday in AlUla & Red Sea',
    roleAr: 'رحلة عائلية في العلا والبحر الأحمر',
    commentEn: 'Wojhat delivered an immaculate VIP experience. The villa at Banyan Tree and the private desert safari for my family was beyond expectations.',
    commentAr: 'تجربة فوق الوصف مع شركة وجهات. الترتيبات في العلا وفيلا بانيان تري والجولة الخاصة كانت على أعلى مستويات الاحترافية والراحة.',
    rating: 5,
    location: 'Riyadh'
  },
  {
    id: '2',
    authorEn: 'Dr. Sarah Al-Ghamdi',
    authorAr: 'د. سارة الغامدي',
    roleEn: 'Swiss Alps Honeymoon Tour',
    roleAr: 'رحلة شهر العسل في سويسرا',
    commentEn: 'Every single transfer, train booking, and panoramic hotel room in Switzerland was arranged with precision. Truly the best luxury travel agency in Saudi Arabia.',
    commentAr: 'كل تفصيلة في رحلتنا لسويسرا كانت مدروسة، من السائق الخاص للفنادق المطلة على البحيرات. أفضل وكالة سفر فاخرة في المملكة بلا منازع.',
    rating: 5,
    location: 'Jeddah'
  },
  {
    id: '3',
    authorEn: 'Eng. Khalid Mansour',
    authorAr: 'م. خالد منصور',
    roleEn: 'Corporate Delegation & Visa Services',
    roleAr: 'وفد أعمال وتأشيرات شنغن',
    commentEn: 'We rely on Wojhat for all our company executive travels and visa logistics. Prompt, reliable, and based right here at Emaar Square Jeddah.',
    commentAr: 'نعتمد على وجهات في كافة سفريات الإدارة التنفيذية واستخراج التأشيرات. سرعة فائقة ومصداقية وموقعهم مميز في إعمار سكوير بجدة.',
    rating: 5,
    location: 'Jeddah'
  }
];
