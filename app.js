// Authentic WOJHAT Travel Data from wojhat.com.sa
const DATA = {
  company: {
    nameEn: "WOJHAT Travel & Tourism",
    nameAr: "شركة وجهات للسفر والسياحة",
    taglineEn: "Curated Journeys, Tailored to Perfection",
    taglineAr: "وجهتك الأولى لرحلات فاخرة ومصممة خصيصاً",
    hqEn: "Suite 504, E8 Building, Emaar Square, Al Fayhaa, Jeddah, Saudi Arabia",
    hqAr: "مكتب 504، مبنى E8، إعمار سكوير، حي الفيحاء، طريق الملك عبدالله، جدة",
    phone: "+966 550 238 226",
    whatsapp: "+966550238226",
    email: "info@wojhat.com.sa",
    website: "https://wojhat.com.sa",
    hoursEn: "Sunday - Thursday: 9:00 AM - 6:00 PM (24/7 VIP Concierge)",
    hoursAr: "الأحد - الخميس: 9:00 صباحاً - 6:00 مساءً (دعم كونسيرج 24/7)"
  },
  destinations: [
    {
      id: "alula",
      nameEn: "AlUla",
      nameAr: "العُلا",
      category: "saudi",
      regionEn: "North-West Saudi Arabia",
      regionAr: "شمال غرب المملكة",
      taglineEn: "The World's Largest Living Museum",
      taglineAr: "أكبر متحف حي مفتوح في العالم",
      descEn: "AlUla is an extraordinary oasis of monumental Nabataean tombs at Hegra (Saudi Arabia's first UNESCO site), mirror-clad architectural marvel Maraya, and dramatic sandstone canyons.",
      descAr: "واحة تاريخية مذهلة تضم مقابر الأنباط الشامخة في الحِجر (أول موقع لليونسكو في المملكة)، وقاعة مرايا العاكسة المبهرة، وتشكيلات صخرية وجبال رملية استثنائية.",
      image: "https://images.unsplash.com/photo-1578895101408-1a36b834405b?auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      season: { en: "October to April", ar: "أكتوبر إلى أبريل" },
      climate: { en: "Pleasant mild winters (12°C - 24°C)", ar: "مناخ صحراوي معتدل شتاءً (12-24°م)" },
      highlightsEn: ["Hegra UNESCO Tombs & Elephant Rock", "Maraya Concert Hall & Ashar Valley", "Old Town Heritage Walk with local Rawi", "Stargazing dinner setup"],
      highlightsAr: ["موقع الحجر ومقبرة قصر الفريد وصخرة الفيل", "مسرح مرايا ومنتجعات وادي عشار", "جولة البلدة القديمة مع الرواة المحليين", "جلسة رصد النجوم وعشاء صحراوي فاخر"]
    },
    {
      id: "jeddah",
      nameEn: "Jeddah",
      nameAr: "جدة",
      category: "saudi",
      regionEn: "Western Coast (Red Sea)",
      regionAr: "عروس البحر الأحمر",
      taglineEn: "Bride of the Red Sea & Historic Gateway",
      taglineAr: "عروس البحر الأحمر وبوابة الحرمين الشريفين",
      descEn: "Where centuries of maritime trade meet luxury corniche living. Home to UNESCO-inscribed Al-Balad coral houses, bustling art scenes, and pristine Red Sea coral reefs.",
      descAr: "حيث يلتقي التاريخ العريق مع الحداثة الفاخرة. تشتهر بحي البلد التراثي المدرج باليونسكو، والواجهة البحرية، ورحلات اليخوت والغوص في البحر الأحمر.",
      image: "https://images.unsplash.com/photo-1580835239846-5bb9ce03c8c3?auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      season: { en: "November to March", ar: "نوفمبر إلى مارس" },
      climate: { en: "Warm coastal breeze (20°C - 29°C)", ar: "نسيم بحري معتدل شتاءً (20-29°م)" },
      highlightsEn: ["Historic Al-Balad & Roshan wooden architecture", "Private Red Sea yacht charters & diving", "Jeddah Corniche & King Fahd Fountain", "Emaar Square luxury business district"],
      highlightsAr: ["حي البلد التاريخي والرواشين العتيقة", "رحلات اليخوت الخاصة والغوص بالبحر الأحمر", "كورنيش جدة ونافورة الملك فهد", "حي إعمار سكوير ومراكز التسوق الفاخرة"]
    },
    {
      id: "riyadh",
      nameEn: "Riyadh",
      nameAr: "الرياض",
      category: "saudi",
      regionEn: "Central Capital",
      regionAr: "المنطقة الوسطى (عاصمة المملكة)",
      taglineEn: "The Pulsing Capital of Vision & Heritage",
      taglineAr: "عاصمة المستقبل ومهد الدولة السعودية",
      descEn: "A visionary global metropolis pulsing with modern ambition, Michelin-starred culinary dining, and ancestral roots at UNESCO-listed Diriyah At-Turaif.",
      descAr: "عاصمة عالمية نابضة بالطموح تجمع بين ناطحات السحاب المضيئة والتاريخ التليد في حي الطريف بالدرعية، مهد الدولة السعودية الأولى.",
      image: "https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?auto=format&fit=crop&w=800&q=80",
      rating: 4.85,
      season: { en: "October to March (Riyadh Season)", ar: "أكتوبر إلى مارس (موسم الرياض)" },
      climate: { en: "Cool crisp evenings (10°C - 22°C)", ar: "طقس شتوي منعش ليلاً (10-22°م)" },
      highlightsEn: ["Diriyah At-Turaif UNESCO palace district", "Kingdom Centre Sky Bridge panorama", "Edge of the World (Jebel Fihrayn)", "Boulevard World experiences"],
      highlightsAr: ["حي الطريف التاريخي بالدرعية المسجل باليونسكو", "جسر المشاهدة المعلق ببرج المملكة", "حافة العالم (مطل جبل فهرين)", "فعاليات بوليفارد وورلد العالمية"]
    },
    {
      id: "switzerland",
      nameEn: "Switzerland & The Alps",
      nameAr: "سويسرا وجبال الألب",
      category: "international",
      regionEn: "Central Europe",
      regionAr: "وسط أوروبا",
      taglineEn: "Glacial Lakes, Alpine Peaks & Pure Luxury",
      taglineAr: "بحيرات الألب، القمم الثلجية والفخامة الهادئة",
      descEn: "The benchmark of bespoke travel: crystalline glacial lakes, scenic first-class trains to Jungfraujoch, and world-renowned Swiss palace hotel hospitality.",
      descAr: "عنوان الفخامة الأوروبية وسحر الطبيعة الخلابة: بحيرات جليدية صافية، قطارات بانورامية لقمة يونغفراويوخ، وإقامة في فنادق القصور التاريخية.",
      image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80",
      rating: 4.95,
      season: { en: "May to October (Lakes) & Dec-Feb (Ski)", ar: "مايو إلى أكتوبر، وديسمبر للتزلج" },
      climate: { en: "Refreshing European alpine weather", ar: "صيف أوروبي منعش، وشتاء ثلجي ساحر" },
      highlightsEn: ["Private Lake Geneva & Lucerne boat charters", "Jungfraujoch Top of Europe cogwheel railway", "Chalet stays in Zermatt facing Matterhorn", "Private Mercedes VIP chauffeur throughout"],
      highlightsAr: ["جولات باليخوت الخاصة في جنيف ولوتسيرن", "قطار يونغفراويوخ لأعلى قمة في أوروبا", "شاليهات زيرمات المطلة على الماترهورن", "سائق خاص وسيارة مرسيدس طوال الرحلة"]
    },
    {
      id: "maldives",
      nameEn: "The Maldives",
      nameAr: "جزر المالديف",
      category: "international",
      regionEn: "Indian Ocean",
      regionAr: "المحيط الهندي",
      taglineEn: "Overwater Villas & Private Island Sanctuaries",
      taglineAr: "جزر الفردوس وفلل فوق المياه الفيروزية",
      descEn: "The ultimate luxury honeymoon and romantic retreat. Private overwater infinity pool villas, underwater gourmet dining, and seaplane transfers.",
      descAr: "الملاذ الأمثل للاسترخاء وشهر العسل الفاخر. فلل عائمة بمسبح خاص، مطاعم تحت سطح البحر، وطائرة مائية فوق المياه الفيروزية.",
      image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80",
      rating: 4.98,
      season: { en: "November to April (Dry Season)", ar: "من نوفمبر إلى أبريل" },
      climate: { en: "Sunny tropical climate (28°C - 31°C)", ar: "استوائي مشمس ودافئ طوال العام" },
      highlightsEn: ["Scenic seaplane flights over coral atolls", "Private overwater sunset villa with glass floor", "Floating pool breakfast & couple spa ritual", "Private sandbank dinner under the stars"],
      highlightsAr: ["رحلات الطائرة المائية فوق الجزر والشعاب", "فيلا عائمة مع مسبح خاص وأرضيات زجاجية", "إفطار عائم في المسبح وجلسة سبا للأزواج", "عشاء خاص على جزيرة رملية منعزلة"]
    }
  ],
  packages: [
    {
      id: "wojhat-family",
      titleEn: "Signature Family Holiday Escape",
      titleAr: "باقة العائلة المميزة من وجهات",
      type: "family",
      dest: { en: "Jeddah & Red Sea Coast", ar: "جدة وساحل البحر الأحمر" },
      days: 5,
      nights: 4,
      priceSAR: 4850,
      badge: { en: "Best Seller for Families", ar: "الأكثر طلباً للعائلات" },
      image: "https://images.unsplash.com/photo-1580835239846-5bb9ce03c8c3?auto=format&fit=crop&w=800&q=80",
      descEn: "5 Days / 4 Nights of family joy. Luxury 5-star suites, private luxury van transfers, historic Al-Balad tour with storyteller, and private Red Sea yacht charter.",
      descAr: "إقامة 5 أيام / 4 ليالٍ ممتعة لكل الأعمار. أجنحة عائلية فاخرة (5 نجوم)، توصيل خاص بسيارة فان VIP، جولة بالبلد مع راوٍ تاريخي، ورحلة يخت خاصة.",
      inclusionsEn: [
        "4 Nights in 5-Star Luxury Family Suite overlooking Red Sea",
        "Daily international buffet breakfast for all members",
        "Private VIP Mercedes V-Class airport transfers & chauffeur",
        "Private 4-hour yacht charter with snorkeling gear & lunch",
        "Guided Al-Balad walking tour & heritage tasting"
      ],
      inclusionsAr: [
        "إقامة 4 ليالٍ في جناح عائلي فاخر 5 نجوم بإطلالة بحرية",
        "بوفيه إفطار فاخر يومي لجميع أفراد الأسرة",
        "توصيل خاص بسيارة مرسيدس فان VIP وسائق طوال الجولات",
        "رحلة يخت خاصة في البحر الأحمر لمدة 4 ساعات مع غداء",
        "جولة ممتعة في حي البلد مع راوٍ تاريخي للعائلة"
      ],
      itinerary: [
        { day: 1, titleEn: "VIP Airport Meet & Check-In", titleAr: "الوصول والاستقبال الفاخر بالمطار", descEn: "Private transfer to 5-star hotel, welcome refreshments, and evening corniche walk.", descAr: "استقبال VIP من صالة المطار، التوصيل للفندق واستلام الجناح، وجولة حرة على الكورنيش." },
        { day: 2, titleEn: "Historic Al-Balad & Heritage Walk", titleAr: "استكشاف حي البلد التراثي", descEn: "Explore coral stone architecture, Beit Nassif, and traditional spice souqs.", descAr: "زيارة بيوت الرواشين التاريخية وبيت نصيف وأسواق التوابل والعطور العريقة." },
        { day: 3, titleEn: "Private Yacht & Coral Reef Cruise", titleAr: "رحلة اليخت الخاص والسنوركلينج", descEn: "Sail into the crystal waters of Obhur Marina, swim, and enjoy catered lunch onboard.", descAr: "الإبحار من مارينا أبحر والسباحة في مياه البحر الأحمر وتناول وجبة الغداء باليخت." },
        { day: 4, titleEn: "Art Promenade & Shopping", titleAr: "بروميناد الفنون والتسوق الفاخر", descEn: "Visit high-end boutiques, shopping centers, and dinner by the King Fahd Fountain.", descAr: "زيارة الواجهة البحرية والتسوق، وعشاء فاخر بإطلالة على نافورة الملك فهد." },
        { day: 5, titleEn: "Leisure Morning & Departure", titleAr: "صباح استرخائي والتوديع للمطار", descEn: "Late checkout and chauffeured airport transfer with priority assistance.", descAr: "إفطار هادئ ثم التوصيل بسيارة خاصة للمطار مع تسهيل إجراءات السفر." }
      ]
    },
    {
      id: "wojhat-alula",
      titleEn: "AlUla Ancient Wonders & Desert Luxury",
      titleAr: "روائع العلا وسحر الفخامة الصحراوية",
      type: "luxury",
      dest: { en: "AlUla Oasis & Ashar Valley", ar: "العلا ووادي عشار" },
      days: 4,
      nights: 3,
      priceSAR: 7900,
      badge: { en: "Ultra-Luxury VIP Experience", ar: "تجربة VIP فائقة الفخامة" },
      image: "https://images.unsplash.com/photo-1578895101408-1a36b834405b?auto=format&fit=crop&w=800&q=80",
      descEn: "4 Days / 3 Nights. Private villa at Habitas or Banyan Tree, vintage Land Rover tour of Hegra UNESCO tombs, and private stargazing dinner at Elephant Rock.",
      descAr: "إقامة 4 أيام / 3 ليالٍ في فلل وادي عشار الفاخرة (بانيان تري أو هابيتاس)، جولات لاند روفر كلاسيكية في الحِجر، وعشاء خاص تحت النجوم عند صخرة الفيل.",
      inclusionsEn: [
        "3 Nights in Ultra-Luxury Desert Pool Villa at Ashar Valley",
        "Private vintage Land Rover 4x4 with certified archaeologist guide",
        "VIP admission to Hegra, Dadan, Jabal Ikmah, and Maraya",
        "Private candlelit dinner at Elephant Rock with astronomer",
        "Roundtrip VIP airport transfers from AlUla Airport (ULH)"
      ],
      inclusionsAr: [
        "إقامة 3 ليالٍ في فيلا صحراوية فاخرة بمسبح خاص في وادي عشار",
        "جيب لاند روفر كلاسيكي خاص مع مرشد آثار وخبير تاريخي",
        "تذاكر VIP لدخول الحِجر، دادان، جبل عكمة، ومسرح مرايا",
        "عشاء خاص فاخر عند صخرة الفيل مع جلسة رصد النجوم",
        "توصيل VIP خاص من وإلى مطار العلا الدولي"
      ],
      itinerary: [
        { day: 1, titleEn: "Arrival & Ashar Valley Villa Check-In", titleAr: "الوصول لوادي عشار واستلام الفيلا", descEn: "Chauffeured canyon transfer to Banyan Tree AlUla. Welcome dinner at Maraya.", descAr: "نقل فاخر بين الجبال إلى المنتجع، وعشاء ترحيبي في قاعة مرايا العالمية." },
        { day: 2, titleEn: "Hegra UNESCO Tombs & Stargazing", titleAr: "استكشاف الحِجر ورصد النجوم", descEn: "Private tour of Nabataean royal tombs followed by desert night stargazing.", descAr: "جولة خاصة في مقابر مدائن صالح الأثرية، تليها جلسة عشاء ورصد النجوم مع فلكي." },
        { day: 3, titleEn: "Dadan, Jabal Ikmah & Old Town", titleAr: "دادان، جبل عكمة والبلدة القديمة", descEn: "Discover ancient inscriptions and evening artisan souqs in AlUla Old Town.", descAr: "زيارة نقوش جبل عكمة الصخرية وجولة مسائية في دكاكين ومقاهي بلدة العلا التراثية." },
        { day: 4, titleEn: "Sunrise Yoga & Departure", titleAr: "شروق الشمس والتوديع الفاخر", descEn: "Canyon wellness session, organic breakfast, and private airport transfer.", descAr: "جلسة استرخاء صباحية وإفطار عضوي، ثم النقل بسيارة خاصة للمطار للمغادرة." }
      ]
    },
    {
      id: "wojhat-swiss",
      titleEn: "Swiss Alps & Glacial Lakes Grand Tour",
      titleAr: "جراند تور سويسرا: جبال الألب والبحيرات",
      type: "luxury",
      dest: { en: "Geneva, Interlaken & Lucerne", ar: "جنيف، إنترلاكن، لوتسيرن" },
      days: 7,
      nights: 6,
      priceSAR: 15800,
      badge: { en: "European Prestige", ar: "الفخامة الأوروبية الرفيعة" },
      image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80",
      descEn: "7 Days / 6 Nights across Switzerland. 5-Star palace hotels, first-class Jungfraujoch panoramic train, and private Mercedes chauffeur throughout.",
      descAr: "رحلة أسطورية 7 أيام / 6 ليالٍ. إقامة في أرقى فنادق القصور السويسرية، قطار يونغفراويوخ البانورامي بالدرجة الأولى، وسائق وسيارة مرسيدس خاصة طوال الرحلة.",
      inclusionsEn: [
        "6 Nights in Leading 5-Star Luxury Hotels (Geneva, Interlaken, Lucerne)",
        "Dedicated private Mercedes V-Class with multilingual chauffeur",
        "1st Class Swiss Scenic Train passes & Jungfraujoch Top of Europe",
        "Private 2-hour classic wooden boat cruise on Lake Lucerne",
        "Comprehensive Schengen visa filing support by Wojhat"
      ],
      inclusionsAr: [
        "إقامة 6 ليالٍ في فنادق 5 نجوم عريقة بجنيف وإنترلاكن ولوتسيرن",
        "سيارة مرسيدس خاصة وسائق يتحدث العربية طوال الرحلة",
        "تذاكر قطارات بانورامية بالدرجة الأولى وصعود قمة يونغفراويوخ",
        "جولة بقارب خشبي كلاسيكي خاص في بحيرة لوتسيرن",
        "مساعدة شاملة لاستخراج تأشيرة الشنغن من مستشاري وجهات"
      ],
      itinerary: [
        { day: 1, titleEn: "Geneva Arrival & Lake Promenade", titleAr: "الوصول لجنيف وكورنيش البحيرة", descEn: "Private transfer to lakefront palace hotel. Evening stroll around Jet d'Eau.", descAr: "استقبال بالمرسيدس الخاصة، استلام الغرفة بفندق القصر، وجولة حول النافورة الشهيرة." },
        { day: 2, titleEn: "Chillon Castle & Transfer to Interlaken", titleAr: "قلعة شيلون والانتقال لإنترلاكن", descEn: "Drive along the Swiss Riviera, visit fairytale castle, arrive in Interlaken.", descAr: "القيادة بمحاذاة بحيرة جنيف وزيارة قلعة شيلون، ثم الوصول لمنتجع إنترلاكن." },
        { day: 3, titleEn: "Jungfraujoch: Top of Europe", titleAr: "قمة يونغفراويوخ أعلى قمة قطار", descEn: "Eiger Express cableway and cogwheel train to 3,454m snow-capped summit.", descAr: "صعود تلفريك إيجر إكسبريس وقطار القمة لاستكشاف قصر الجليد ونهر أليتش المتجمد." },
        { day: 4, titleEn: "Lake Brienz & Giessbach Falls", titleAr: "بحيرة برينز وشلالات جيس باخ", descEn: "Cruise turquoise glacial waters and explore wood-carving artisan village.", descAr: "جولة بحرية في مياه بحيرة برينز وزيارة شلالات جيس باخ الساحرة وسط الطبيعة." },
        { day: 5, titleEn: "Scenic Drive to Lucerne & Chapel Bridge", titleAr: "الانتقال للوتسيرن وجسر الكابيل", descEn: "Cross Brunig mountain pass, walk 14th-century wooden Chapel Bridge.", descAr: "القيادة عبر الممر الجبلي للوتسيرن وزيارة جسر الكابيل الخشبي الشهير والتسوق." },
        { day: 6, titleEn: "Mount Pilatus & Private Yacht Cruise", titleAr: "جبل بيلاتوس واليخت في لوتسيرن", descEn: "Dragon Ride cable car to summit, afternoon champagne boat cruise.", descAr: "صعود تلفريك التنين لجبل بيلاتوس، تليها جولة بحرية خاصة في بحيرة لوتسيرن." },
        { day: 7, titleEn: "Zurich Airport Transfer & Departure", titleAr: "التوصيل لمطار زيورخ والتوديع", descEn: "Morning alpine breakfast, private chauffeur transfer to Zurich Airport.", descAr: "إفطار بالشرفة الجبلية، ثم التوصيل بسيارة مرسيدس خاصة لمطار زيورخ للمغادرة." }
      ]
    }
  ],
  services: [
    {
      id: "vip",
      titleEn: "VIP Concierge & Luxury Meet & Assist",
      titleAr: "خدمات كبار الشخصيات والاستقبال الفاخر (VIP)",
      descEn: "Seamless executive arrival, fast-track customs, private airport lounges, and luxury chauffeur transfers in Saudi Arabia and worldwide.",
      descAr: "استقبال وتوديع استثنائي بالمطارات، إنهاء إجراءات الجوازات بصالات كبار الشخصيات، وسيارات فاخرة مع سائقين معتمدين.",
      image: "https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&w=800&q=80",
      turnaround: { en: "Instant confirmation", ar: "تأكيد فوري" },
      featuresEn: ["Fast-track customs in Jeddah, Riyadh & worldwide", "Fleet of Mercedes S-Class, Maybach, Escalade", "Private jet charters & luxury yacht leasing"],
      featuresAr: ["إنهاء إجراءات الجوازات السريعة بالمطارات", "أسطول مرسيدس إس كلاس، مايباخ، كاديلاك إسكاليد", "حجوزات وتنسيق الطيران الخاص واليخوت"]
    },
    {
      id: "hajj",
      titleEn: "Hajj & Umrah Luxury Consultancy",
      titleAr: "استشارات الحج والعمرة الفاخرة",
      descEn: "Direct Kaaba-view 5-star suites, Haramain High-Speed Train business class tickets, and private chauffeured transfers.",
      descAr: "أجنحة مطلة مباشرة على الكعبة المشرفة، قطار الحرمين السريع درجة رجال الأعمال، وتنقلات خاصة بين جدة ومكة والمدينة.",
      image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=800&q=80",
      turnaround: { en: "24-48 Hours", ar: "خلال 24-48 ساعة" },
      featuresEn: ["Fairmont Clock Royal Tower & Raffles suites", "Luggage handling & Haramain train reservations", "Private Madinah historical Ziyarat tours"],
      featuresAr: ["أجنحة برج الساعة وفيرمونت ورافلز المطلة على الكعبة", "توصيل الأمتعة وحجوزات قطار الحرمين السريع", "جولات المزارات النبوية التاريخية بالمدينة"]
    },
    {
      id: "visa",
      titleEn: "Global Visa Consultancy & e-Visas",
      titleAr: "خدمات واستشارات التأشيرات الدولية",
      descEn: "End-to-end dossier preparation for Schengen, UK, USA, Japan, and Saudi tourist / business visas.",
      descAr: "تجهيز كامل لملفات تأشيرات الشنغن وبريطانيا وأمريكا، وإصدار التأشيرة السياحية السعودية الفورية.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
      turnaround: { en: "Fast-track processing", ar: "إنجاز سريع معتمد" },
      featuresEn: ["Schengen, UK, US B1/B2 appointment scheduling", "Saudi Tourist e-Visa & GCC resident visas", "Approved travel insurance issuance"],
      featuresAr: ["حجز المواعيد المبكرة بشنغن وبريطانيا وأمريكا", "إصدار التأشيرة السياحية السعودية فورياً", "وثائق التأمين الطبي الدولي المعتمدة"]
    },
    {
      id: "corporate",
      titleEn: "Corporate & Delegation Travel Management",
      titleAr: "سياحة الأعمال والمؤتمرات والوفود المؤسسية",
      descEn: "Turnkey corporate solutions, executive fleet logistics, protocol management, and centralized corporate billing.",
      descAr: "حلول متكاملة لإدارة رحلات الشركات وسفريات الوفود والمؤتمرات والمعارض بفواتير موحدة ومدراء حسابات بجدة.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      turnaround: { en: "Corporate SLA: 2 Hours", ar: "استجابة سريعة خلال ساعتين" },
      featuresEn: ["Dedicated account manager at Emaar Square, Jeddah", "Priority flight ticketing & corporate hotel rates", "Conference halls & VIP delegation protocol"],
      featuresAr: ["مدير حساب مخصص في مقرنا بإعمار سكوير جدة", "أسعار شركات تفضيلية ومرونة التعديل والإلغاء", "تجهيز قاعات المؤتمرات ومراسم استقبال الوفود"]
    }
  ]
};

// State
let currentLang = 'ar'; // Default Arabic (RTL) for Saudi market, switchable to English
let currentCurrency = 'SAR';
let currentTab = 'home';
let selectedPackageForModal = null;
let currentDevice = 'ios'; // 'ios' or 'android'

// Exchange Rates relative to SAR
const RATES = {
  SAR: 1.0,
  USD: 1 / 3.75,
  EUR: 1 / 4.05
};

function formatPrice(amountSAR) {
  const converted = Math.round(amountSAR * RATES[currentCurrency]);
  if (currentCurrency === 'SAR') {
    return currentLang === 'ar' ? `${converted.toLocaleString()} ر.س` : `${converted.toLocaleString()} SAR`;
  } else if (currentCurrency === 'USD') {
    return `$${converted.toLocaleString()}`;
  } else {
    return `€${converted.toLocaleString()}`;
  }
}

function updateClock() {
  const now = new Date();
  const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const clockEl = document.getElementById('statusClock');
  if (clockEl) clockEl.innerText = timeStr;
}
setInterval(updateClock, 1000);
updateClock();

// RENDER HOME SCREEN
function renderHomeScreen() {
  const isAr = currentLang === 'ar';
  const heroDest = DATA.destinations[0];

  let html = `
    <!-- Hero Banner -->
    <div class="hero-card">
      <img src="${heroDest.image}" class="hero-bg" alt="Wojhat Hero" />
      <div class="hero-gradient"></div>
      <div class="hero-body">
        <span class="hero-tag">WOJHAT LUXURY TRAVEL</span>
        <h2 class="hero-title">${isAr ? 'رحلات استثنائية، مصممة لأدق التفاصيل' : 'Curated Journeys, Tailored to Perfection'}</h2>
        <p class="hero-desc">${isAr ? 'اكتشف روعة المملكة العربية السعودية وأرقى الوجهات العالمية مع خبراء السياحة الفاخرة.' : 'Discover Saudi Arabia’s historic wonders and pristine coasts alongside bespoke global getaways.'}</p>
        <div class="hero-cta">
          <button class="btn-primary" onclick="switchTab('custom')">${isAr ? 'صمم رحلتك الفاخرة' : 'Design Custom Trip'}</button>
          <button class="btn-whatsapp" onclick="openWhatsAppGeneral()">💬 WhatsApp</button>
        </div>
      </div>
    </div>

    <!-- Search Section -->
    <div class="search-container">
      <div class="search-bar">
        <span>🔍</span>
        <input type="text" class="search-input" id="homeSearch" placeholder="${isAr ? 'ابحث عن وجهة، باقة سياحية، أو مدينة...' : 'Search destinations, packages, cities...'}" oninput="handleSearch(this.value)" />
      </div>
    </div>

    <!-- Quick Category Pills -->
    <div class="category-scroll">
      <div class="cat-pill active" onclick="switchTab('destinations')">🇸🇦 ${isAr ? 'وجهات السعودية' : 'Saudi Arabia'}</div>
      <div class="cat-pill" onclick="switchTab('packages')">✨ ${isAr ? 'باقات السفر' : 'Holiday Packages'}</div>
      <div class="cat-pill" onclick="switchTab('services')">👑 ${isAr ? 'خدمات VIP' : 'VIP Concierge'}</div>
      <div class="cat-pill" onclick="switchTab('custom')">🎯 ${isAr ? 'صمم رحلتك' : 'Tailor-Made'}</div>
    </div>

    <!-- Featured Saudi Destinations Header -->
    <div class="section-header">
      <div>
        <div class="section-title">${isAr ? 'اكتشف وجهات السعودية' : 'Discover Saudi Arabia'}</div>
        <div class="section-sub">${isAr ? 'أصالة التراث، روعة البحر الأحمر، وسحر العلا' : 'Living heritage, pristine coral reefs & desert wonders'}</div>
      </div>
      <div class="view-all" onclick="switchTab('destinations')">${isAr ? 'عرض الكل ←' : 'View All →'}</div>
    </div>

    <!-- Featured Destinations List -->
    <div class="cards-list" id="destListHome">
      ${DATA.destinations.slice(0, 3).map(d => renderDestCard(d)).join('')}
    </div>

    <!-- Callout Banner -->
    <div class="callout-box">
      <span class="hero-tag">EXCLUSIVE SERVICE</span>
      <div class="callout-title">${isAr ? 'صمم رحلتك الفاخرة الخاصة' : 'Design Your Bespoke Journey'}</div>
      <div class="callout-sub">${isAr ? 'شاركنا رغباتك وسيقوم مصممو الرحلات في وجهات بإعداد برنامج خاص بك ومصمم حسب رغبتك.' : 'Tell our travel designers your dreams and we will craft a private itinerary tailored exclusively for you.'}</div>
      <button class="btn-primary" onclick="switchTab('custom')">${isAr ? 'ابدأ التصميم الآن ➔' : 'Start Designing ➔'}</button>
    </div>

    <!-- Featured Packages Header -->
    <div class="section-header">
      <div>
        <div class="section-title">${isAr ? 'باقات السفر المختارة' : 'Curated Travel Packages'}</div>
        <div class="section-sub">${isAr ? 'برامج متكاملة مع فنادق 5 نجوم وسيارات خاصة' : 'All-inclusive luxury with 5-star suites & private chauffeurs'}</div>
      </div>
      <div class="view-all" onclick="switchTab('packages')">${isAr ? 'عرض الكل ←' : 'View All →'}</div>
    </div>

    <!-- Featured Packages List -->
    <div class="cards-list">
      ${DATA.packages.map(p => renderPkgCard(p)).join('')}
    </div>

    <!-- Footer Office Card -->
    <div style="padding: 24px 16px; text-align: center; border-top: 1px solid rgba(255,255,255,0.08); margin-top: 20px;">
      <div style="font-weight: 800; font-size: 14px; color: var(--gold);">${isAr ? DATA.company.nameAr : DATA.company.nameEn}</div>
      <div style="font-size: 11px; color: var(--text-muted); margin-top: 4px;">📍 ${isAr ? DATA.company.hqAr : DATA.company.hqEn}</div>
      <div style="font-size: 11px; color: var(--text-sub); margin-top: 2px;">📞 ${DATA.company.phone} | ✉️ ${DATA.company.email}</div>
      <div style="font-size: 10px; color: #475569; margin-top: 8px;">Tourism License: 73103291 • CR: 4030388902</div>
    </div>
  `;

  document.getElementById('viewportContent').innerHTML = html;
}

// Render Destination Card
function renderDestCard(d) {
  const isAr = currentLang === 'ar';
  const name = isAr ? d.nameAr : d.nameEn;
  const region = isAr ? d.regionAr : d.regionEn;
  const tagline = isAr ? d.taglineAr : d.taglineEn;
  const season = isAr ? d.season.ar : d.season.en;

  return `
    <div class="dest-card" onclick="openDestinationDetail('${d.id}')">
      <img src="${d.image}" class="dest-img" alt="${name}" />
      <div class="dest-overlay"></div>
      <div class="dest-top-row">
        <span class="dest-badge">${d.category === 'saudi' ? '🇸🇦 السعودية' : '🌍 دولي'}</span>
        <span class="dest-rating">★ ${d.rating}</span>
      </div>
      <div class="dest-content">
        <div class="dest-region">${region}</div>
        <div class="dest-name">${name}</div>
        <div class="dest-tagline">${tagline}</div>
        <div class="footer-row">
          <span>🗓 ${season}</span>
          <span style="color: var(--gold); font-weight: bold;">${isAr ? 'التفاصيل ←' : 'Details →'}</span>
        </div>
      </div>
    </div>
  `;
}

// Render Package Card
function renderPkgCard(p) {
  const isAr = currentLang === 'ar';
  const title = isAr ? p.titleAr : p.titleEn;
  const destName = isAr ? p.dest.ar : p.dest.en;
  const badge = isAr ? p.badge.ar : p.badge.en;
  const desc = isAr ? p.descAr : p.descEn;
  const inclusions = isAr ? p.inclusionsAr : p.inclusionsEn;

  return `
    <div class="pkg-card" onclick="openPackageDetail('${p.id}')">
      <div class="pkg-img-wrap">
        <img src="${p.image}" class="pkg-img" alt="${title}" />
        <span class="pkg-pill-left">${badge}</span>
        <span class="pkg-pill-right">⏱ ${p.days} ${isAr ? 'أيام' : 'Days'} / ${p.nights} ${isAr ? 'ليالٍ' : 'Nights'}</span>
      </div>
      <div class="pkg-body">
        <div class="pkg-dest">${destName}</div>
        <div class="pkg-title">${title}</div>
        <div class="pkg-desc">${desc}</div>

        <div class="inclusions-preview">
          ${inclusions.slice(0, 2).map(inc => `
            <div class="inc-item">
              <span class="inc-icon">✓</span>
              <span>${inc}</span>
            </div>
          `).join('')}
        </div>

        <div class="pkg-footer">
          <div class="pkg-price-col">
            <span class="pkg-price-label">${isAr ? 'للشخص الواحد' : 'per person'}</span>
            <span class="pkg-price-val">${formatPrice(p.priceSAR)}</span>
          </div>
          <button class="pkg-book-btn" onclick="event.stopPropagation(); openBookingModal('${p.id}')">
            ${isAr ? 'احجز الآن' : 'Book Now'}
          </button>
        </div>
      </div>
    </div>
  `;
}

// RENDER DESTINATIONS TAB
function renderDestinationsScreen(filter = 'all') {
  const isAr = currentLang === 'ar';
  const list = DATA.destinations.filter(d => filter === 'all' || d.category === filter);

  let html = `
    <div style="padding: 14px 14px 4px;">
      <h2 style="font-size: 20px; font-weight: 800; color: #fff;">${isAr ? 'الوجهات السياحية' : 'Destinations'}</h2>
      <p style="font-size: 11px; color: var(--text-muted); margin-top: 2px;">${isAr ? 'استكشف وجهاتنا المختارة بعناية في المملكة وحول العالم' : 'Handpicked luxury destinations across Saudi Arabia & global hubs'}</p>
      
      <!-- Filter Chips -->
      <div style="display: flex; gap: 8px; margin: 12px 0;">
        <div class="cat-pill ${filter === 'all' ? 'active' : ''}" onclick="renderDestinationsScreen('all')">${isAr ? 'الكل' : 'All'}</div>
        <div class="cat-pill ${filter === 'saudi' ? 'active' : ''}" onclick="renderDestinationsScreen('saudi')">🇸🇦 ${isAr ? 'داخل المملكة' : 'Saudi Arabia'}</div>
        <div class="cat-pill ${filter === 'international' ? 'active' : ''}" onclick="renderDestinationsScreen('international')">🌍 ${isAr ? 'وجهات دولية' : 'International'}</div>
      </div>
    </div>

    <div class="cards-list">
      ${list.map(d => renderDestCard(d)).join('')}
    </div>
  `;

  document.getElementById('viewportContent').innerHTML = html;
}

// RENDER PACKAGES TAB
function renderPackagesScreen(filter = 'all') {
  const isAr = currentLang === 'ar';
  const list = DATA.packages.filter(p => filter === 'all' || p.type === filter);

  let html = `
    <div style="padding: 14px 14px 4px;">
      <h2 style="font-size: 20px; font-weight: 800; color: #fff;">${isAr ? 'باقات السفر والعطلات' : 'Travel Packages'}</h2>
      <p style="font-size: 11px; color: var(--text-muted); margin-top: 2px;">${isAr ? 'باقات سفر متكاملة مع فنادق 5 نجوم وسيارات خاصة' : 'All-inclusive luxury journeys with 5-star hotels & private transfers'}</p>
      
      <div style="display: flex; gap: 8px; margin: 12px 0; overflow-x: auto;">
        <div class="cat-pill ${filter === 'all' ? 'active' : ''}" onclick="renderPackagesScreen('all')">${isAr ? 'الكل' : 'All'}</div>
        <div class="cat-pill ${filter === 'family' ? 'active' : ''}" onclick="renderPackagesScreen('family')">👨‍👩‍👦 ${isAr ? 'عائلية' : 'Family'}</div>
        <div class="cat-pill ${filter === 'luxury' ? 'active' : ''}" onclick="renderPackagesScreen('luxury')">💍 ${isAr ? 'فخامة وشهر عسل' : 'Luxury'}</div>
      </div>
    </div>

    <div class="cards-list">
      ${list.map(p => renderPkgCard(p)).join('')}
    </div>
  `;

  document.getElementById('viewportContent').innerHTML = html;
}

// RENDER SERVICES TAB
function renderServicesScreen() {
  const isAr = currentLang === 'ar';

  let html = `
    <div style="padding: 14px 14px 4px;">
      <h2 style="font-size: 20px; font-weight: 800; color: #fff;">${isAr ? 'خدمات كبار الشخصيات (VIP)' : 'VIP Concierge Services'}</h2>
      <p style="font-size: 11px; color: var(--text-muted); margin-top: 2px;">${isAr ? 'خدمات كونسيرج راقية لرجال الأعمال والعائلات وكبار الشخصيات' : 'Executive concierge solutions for VIPs, families, and corporations'}</p>
    </div>

    <div class="cards-list">
      ${DATA.services.map(s => {
        const title = isAr ? s.titleAr : s.titleEn;
        const desc = isAr ? s.descAr : s.descEn;
        const turnaround = isAr ? s.turnaround.ar : s.turnaround.en;
        const features = isAr ? s.featuresAr : s.featuresEn;

        return `
          <div class="srv-card">
            <img src="${s.image}" class="srv-img" alt="${title}" />
            <div class="srv-body">
              <div class="srv-title">${title}</div>
              <div class="srv-desc">${desc}</div>
              <div class="srv-features">
                ${features.map(f => `
                  <div class="srv-feat-item">
                    <span style="color: var(--gold);">◆</span>
                    <span>${f}</span>
                  </div>
                `).join('')}
              </div>
              <div class="srv-footer">
                <span class="srv-turnaround">⚡ ${turnaround}</span>
                <button class="srv-action" onclick="openWhatsAppService('${title}')">
                  ${isAr ? 'طلب الخدمة عبر واتساب' : 'Inquire on WhatsApp'}
                </button>
              </div>
            </div>
          </div>
        `;
      }).join('')}

      <div class="callout-box" style="margin: 6px 0 20px;">
        <div class="callout-title">🏢 ${isAr ? 'إدارة سفريات الشركات والوفود' : 'Corporate Travel Management'}</div>
        <div class="callout-sub">${isAr ? 'يوفر فريق وجهات في إعمار سكوير بجدة مدراء حسابات مخصصين لخدمتكم وإدارة سفرياتكم المؤسسية.' : 'Our corporate account directors at Emaar Square, Jeddah provide turnkey travel management and protocol logistics.'}</div>
        <div style="font-size: 12px; font-weight: bold; color: var(--gold);">✉️ corporate@wojhat.com.sa</div>
      </div>
    </div>
  `;

  document.getElementById('viewportContent').innerHTML = html;
}

// RENDER CUSTOM TRIP SCREEN
function renderCustomTripScreen() {
  const isAr = currentLang === 'ar';

  let html = `
    <div style="padding: 14px 14px 4px;">
      <span class="hero-tag">TAILOR-MADE BY WOJHAT</span>
      <h2 style="font-size: 20px; font-weight: 800; color: #fff;">${isAr ? 'صمم رحلتك الفاخرة الخاصة' : 'Design Your Bespoke Journey'}</h2>
      <p style="font-size: 11px; color: var(--text-muted); margin-top: 2px;">${isAr ? 'شاركنا رغباتك وسيقوم مصممو الرحلات في وجهات بإعداد برنامج خاص بك ومصمم حسب رغبتك وميزانيتك.' : 'Tell our travel designers your dreams and we will craft a private itinerary tailored exclusively for you.'}</p>
    </div>

    <div class="custom-form">
      <div class="form-group">
        <label class="form-label">1. ${isAr ? 'نوع الوجهة المفضلة' : 'Destination Preference'}</label>
        <div class="chips-row">
          <div class="form-chip active" id="chipSaudi" onclick="selectType(this)">🇸🇦 ${isAr ? 'داخل المملكة' : 'Saudi Arabia'}</div>
          <div class="form-chip" id="chipIntl" onclick="selectType(this)">🌍 ${isAr ? 'وجهات دولية' : 'International'}</div>
          <div class="form-chip" id="chipBoth" onclick="selectType(this)">✨ ${isAr ? 'الاثنان معاً' : 'Both'}</div>
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">2. ${isAr ? 'اختر الوجهات المرغوبة' : 'Preferred Destinations'}</label>
        <div class="chips-row">
          <div class="form-chip active" onclick="this.classList.toggle('active')">العلا / AlUla</div>
          <div class="form-chip active" onclick="this.classList.toggle('active')">جدة / Jeddah</div>
          <div class="form-chip" onclick="this.classList.toggle('active')">الرياض / Riyadh</div>
          <div class="form-chip" onclick="this.classList.toggle('active')">سويسرا / Switzerland</div>
          <div class="form-chip" onclick="this.classList.toggle('active')">المالديف / Maldives</div>
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">3. ${isAr ? 'نمط الرحلة' : 'Travel Style'}</label>
        <div class="chips-row">
          <div class="form-chip active" onclick="selectChip(this)">Luxury VIP</div>
          <div class="form-chip" onclick="selectChip(this)">Family Fun</div>
          <div class="form-chip" onclick="selectChip(this)">Honeymoon</div>
          <div class="form-chip" onclick="selectChip(this)">Heritage & Culture</div>
        </div>
      </div>

      <div style="display: flex; gap: 10px;">
        <div class="form-group" style="flex: 1;">
          <label class="form-label">${isAr ? 'مدة الرحلة (بالأيام)' : 'Duration (Days)'}</label>
          <div class="counter-row">
            <button class="c-btn" onclick="updateCounter('durVal', -1)">-</button>
            <span class="c-val" id="durVal">5</span>
            <button class="c-btn" onclick="updateCounter('durVal', 1)">+</button>
          </div>
        </div>

        <div class="form-group" style="flex: 1;">
          <label class="form-label">${isAr ? 'عدد المسافرين' : 'Travelers'}</label>
          <div class="counter-row">
            <button class="c-btn" onclick="updateCounter('travVal', -1)">-</button>
            <span class="c-val" id="travVal">2</span>
            <button class="c-btn" onclick="updateCounter('travVal', 1)">+</button>
          </div>
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">4. ${isAr ? 'معلومات التواصل' : 'Contact Information'}</label>
        <input type="text" id="custName" class="form-input" placeholder="${isAr ? 'الاسم الكريم *' : 'Full Name *'}" />
        <input type="tel" id="custPhone" class="form-input" placeholder="${isAr ? 'رقم الهاتف / واتساب *' : 'Phone / WhatsApp *'}" value="+966 5" />
        <textarea id="custNotes" class="form-input" style="height: 60px; resize: none;" placeholder="${isAr ? 'أي متطلبات خاصة بالرحلة أو الفنادق...' : 'Special requirements or preferences...'}"></textarea>
      </div>

      <button class="btn-primary" style="padding: 12px; width: 100%;" onclick="submitCustomTripForm()">
        💬 ${isAr ? 'إرسال الطلب لمستشار وجهات' : 'Submit to Wojhat Concierge'}
      </button>
    </div>
  `;

  document.getElementById('viewportContent').innerHTML = html;
}

// RENDER CONTACT & OFFICE SCREEN
function renderContactScreen() {
  const isAr = currentLang === 'ar';

  let html = `
    <div style="padding: 16px; display: flex; flex-direction: column; gap: 14px;">
      <!-- Brand Box -->
      <div style="background: var(--surface); border: 1px solid var(--surface-border); border-radius: 16px; padding: 20px; text-align: center;">
        <div style="width: 50px; height: 50px; border-radius: 25px; background: var(--gold); color: var(--primary-dark); font-size: 26px; font-weight: 900; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 8px;">W</div>
        <div style="color: #fff; font-size: 16px; font-weight: 800;">${DATA.company.nameEn}</div>
        <div style="color: var(--gold); font-size: 14px; font-weight: 700; margin-top: 2px;">${DATA.company.nameAr}</div>
        <div style="color: var(--text-muted); font-size: 11px; margin-top: 6px;">${isAr ? DATA.company.taglineAr : DATA.company.taglineEn}</div>
      </div>

      <!-- Quick Contact Actions -->
      <div style="display: flex; gap: 10px;">
        <div style="flex: 1; background: #075E54; border-radius: 12px; padding: 14px; text-align: center; cursor: pointer;" onclick="openWhatsAppGeneral()">
          <div style="font-size: 20px;">💬</div>
          <div style="color: #fff; font-size: 13px; font-weight: 800; margin-top: 2px;">WhatsApp</div>
          <div style="color: #A7F3D0; font-size: 10px;">+966 550 238 226</div>
        </div>

        <div style="flex: 1; background: var(--surface); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 14px; text-align: center; cursor: pointer;" onclick="window.location.href='tel:+966550238226'">
          <div style="font-size: 20px;">📞</div>
          <div style="color: #fff; font-size: 13px; font-weight: 800; margin-top: 2px;">${isAr ? 'اتصل بنا' : 'Call Us'}</div>
          <div style="color: var(--text-sub); font-size: 10px;">Direct Support</div>
        </div>
      </div>

      <!-- Office Address -->
      <div style="background: var(--surface); border-radius: 12px; padding: 14px; border: 1px solid rgba(255,255,255,0.06);">
        <div style="color: var(--gold-light); font-size: 13px; font-weight: 700; margin-bottom: 4px;">📍 ${isAr ? 'المقر الرئيسي' : 'Headquarters'}</div>
        <div style="color: #fff; font-size: 12px; line-height: 1.5;">${isAr ? DATA.company.hqAr : DATA.company.hqEn}</div>
        <div style="color: var(--text-muted); font-size: 10px; margin-top: 4px;">Office 504, E8 Building, Emaar Square, Jeddah</div>
      </div>

      <!-- Working Hours -->
      <div style="background: var(--surface); border-radius: 12px; padding: 14px; border: 1px solid rgba(255,255,255,0.06);">
        <div style="color: var(--gold-light); font-size: 13px; font-weight: 700; margin-bottom: 4px;">⏰ ${isAr ? 'أوقات العمل' : 'Working Hours'}</div>
        <div style="color: #fff; font-size: 12px;">${isAr ? DATA.company.hoursAr : DATA.company.hoursEn}</div>
      </div>

      <!-- App Preference Switchers -->
      <div style="background: var(--surface); border-radius: 12px; padding: 14px; border: 1px solid rgba(255,255,255,0.06);">
        <div style="color: var(--gold-light); font-size: 13px; font-weight: 700; margin-bottom: 8px;">⚙️ ${isAr ? 'تفضيلات التطبيق' : 'App Settings'}</div>
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 6px 0;">
          <span style="font-size: 12px; color: #fff;">${isAr ? 'اللغة' : 'Language'}</span>
          <button class="tool-pill gold" onclick="toggleLanguage()">${isAr ? 'English (LTR)' : 'العربية (RTL)'}</button>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 6px 0;">
          <span style="font-size: 12px; color: #fff;">${isAr ? 'العملة' : 'Currency'}</span>
          <div style="display: flex; gap: 4px;">
            <button class="tool-pill ${currentCurrency === 'SAR' ? 'gold' : ''}" onclick="setCurrency('SAR')">SAR</button>
            <button class="tool-pill ${currentCurrency === 'USD' ? 'gold' : ''}" onclick="setCurrency('USD')">USD</button>
            <button class="tool-pill ${currentCurrency === 'EUR' ? 'gold' : ''}" onclick="setCurrency('EUR')">EUR</button>
          </div>
        </div>
      </div>

      <div style="text-align: center; font-size: 10px; color: #64748B; margin-top: 10px;">
        Tourism License: 73103291 • CR: 4030388902<br>
        Wojhat Mobile App v2.4 • Native iOS & Android Ready
      </div>
    </div>
  `;

  document.getElementById('viewportContent').innerHTML = html;
}

// DESTINATION DETAIL VIEW
function openDestinationDetail(id) {
  const d = DATA.destinations.find(item => item.id === id);
  if (!d) return;

  const isAr = currentLang === 'ar';
  const name = isAr ? d.nameAr : d.nameEn;
  const region = isAr ? d.regionAr : d.regionEn;
  const desc = isAr ? d.descAr : d.descEn;
  const highlights = isAr ? d.highlightsAr : d.highlightsEn;
  const season = isAr ? d.season.ar : d.season.en;
  const climate = isAr ? d.climate.ar : d.climate.en;

  const relatedPackages = DATA.packages.filter(p => p.id.includes(d.id) || d.id === 'jeddah' && p.id === 'wojhat-family');

  let html = `
    <div class="detail-hero">
      <img src="${d.image}" class="detail-img" alt="${name}" />
      <div class="dest-overlay"></div>
      <button class="detail-back-btn" onclick="closeDetailView()">${isAr ? '→' : '←'}</button>
      <div style="position: absolute; bottom: 14px; left: 16px; right: 16px; z-index: 5;">
        <span class="dest-badge">${d.category === 'saudi' ? '🇸🇦 المملكة العربية السعودية' : '🌍 رحلة دولية'}</span>
        <h1 style="color: #fff; font-size: 24px; font-weight: 900; margin: 4px 0 2px;">${name}</h1>
        <div style="color: var(--gold); font-size: 11px;">${region}</div>
      </div>
    </div>

    <div class="detail-body">
      <div class="metrics-row">
        <div class="metric-box">
          <div class="metric-title">🗓 ${isAr ? 'أفضل وقت' : 'Best Season'}</div>
          <div class="metric-val" style="font-size: 11px;">${season}</div>
        </div>
        <div class="metric-box">
          <div class="metric-title">🌤 ${isAr ? 'الطقس' : 'Climate'}</div>
          <div class="metric-val" style="font-size: 11px;">${climate}</div>
        </div>
      </div>

      <div class="section-title" style="margin-bottom: 6px;">${isAr ? 'نبذة عن الوجهة' : 'Overview'}</div>
      <p style="font-size: 12px; color: var(--text-sub); line-height: 1.6; margin-bottom: 14px;">${desc}</p>

      <div class="section-title" style="margin-bottom: 8px;">${isAr ? 'أبرز مميزات الزيارة' : 'Key Highlights'}</div>
      <div style="display: flex; flex-direction: column; gap: 6px; margin-bottom: 16px;">
        ${highlights.map(h => `
          <div class="highlight-item" style="display: flex; align-items: center; gap: 8px; font-size: 12px; color: #fff;">
            <span style="color: var(--gold);">✦</span>
            <span>${h}</span>
          </div>
        `).join('')}
      </div>

      ${relatedPackages.length > 0 ? `
        <div class="section-title" style="margin-bottom: 8px;">${isAr ? 'الباقات السياحية المتوفرة' : 'Available Packages'}</div>
        <div class="cards-list">
          ${relatedPackages.map(p => renderPkgCard(p)).join('')}
        </div>
      ` : ''}

      <div style="margin-top: 20px; display: flex; flex-direction: column; gap: 10px;">
        <button class="btn-whatsapp" style="justify-content: center; padding: 12px;" onclick="openWhatsAppDestination('${name}')">
          💬 ${isAr ? 'استفسار عبر واتساب عن ' + name : 'Inquire on WhatsApp'}
        </button>
        <button class="btn-primary" style="padding: 12px;" onclick="closeDetailView(); switchTab('custom')">
          ${isAr ? 'تصميم رحلة مخصصة إلى ' + name : 'Design Custom Trip to ' + name}
        </button>
      </div>
    </div>
  `;

  const detailView = document.getElementById('detailView');
  detailView.innerHTML = html;
  detailView.classList.add('active');
  detailView.scrollTop = 0;
}

// PACKAGE DETAIL VIEW
function openPackageDetail(id) {
  const p = DATA.packages.find(item => item.id === id);
  if (!p) return;

  const isAr = currentLang === 'ar';
  const title = isAr ? p.titleAr : p.titleEn;
  const destName = isAr ? p.dest.ar : p.dest.en;
  const desc = isAr ? p.descAr : p.descEn;
  const inclusions = isAr ? p.inclusionsAr : p.inclusionsEn;

  let html = `
    <div class="detail-hero">
      <img src="${p.image}" class="detail-img" alt="${title}" />
      <div class="dest-overlay"></div>
      <button class="detail-back-btn" onclick="closeDetailView()">${isAr ? '→' : '←'}</button>
      <div style="position: absolute; bottom: 14px; left: 16px; right: 16px; z-index: 5;">
        <span class="pkg-pill-left" style="position: static; margin-bottom: 4px; display: inline-block;">${isAr ? p.badge.ar : p.badge.en}</span>
        <h1 style="color: #fff; font-size: 20px; font-weight: 900; line-height: 1.2; margin: 4px 0 2px;">${title}</h1>
        <div style="color: var(--gold); font-size: 11px;">${destName}</div>
      </div>
    </div>

    <div class="detail-body">
      <div class="metrics-row">
        <div class="metric-box">
          <div class="metric-title">${isAr ? 'المدة' : 'Duration'}</div>
          <div class="metric-val">${p.days} ${isAr ? 'أيام' : 'Days'} / ${p.nights} ${isAr ? 'ليالٍ' : 'Nights'}</div>
        </div>
        <div class="metric-box">
          <div class="metric-title">${isAr ? 'السعر للشخص' : 'Price / Person'}</div>
          <div class="metric-val" style="color: var(--gold);">${formatPrice(p.priceSAR)}</div>
        </div>
      </div>

      <div class="section-title" style="margin-bottom: 6px;">${isAr ? 'تفاصيل الباقة' : 'Overview'}</div>
      <p style="font-size: 12px; color: var(--text-sub); line-height: 1.5; margin-bottom: 14px;">${desc}</p>

      <div class="section-title" style="margin-bottom: 8px;">${isAr ? 'ما تشمله الباقة' : 'What is Included'}</div>
      <div style="background: var(--surface); border-radius: 12px; padding: 12px; display: flex; flex-direction: column; gap: 8px; margin-bottom: 16px; border: 1px solid rgba(16, 185, 129, 0.2);">
        ${inclusions.map(inc => `
          <div style="display: flex; align-items: center; gap: 8px; font-size: 11px; color: #fff;">
            <span style="color: var(--emerald); font-weight: bold;">✓</span>
            <span>${inc}</span>
          </div>
        `).join('')}
      </div>

      <div class="section-title" style="margin-bottom: 8px;">${isAr ? 'جدول الرحلة يوماً بيوم' : 'Day-by-Day Itinerary'}</div>
      <div class="day-timeline">
        ${p.itinerary.map(day => `
          <div class="day-card">
            <div class="day-header">
              <span class="day-badge">${isAr ? 'اليوم ' + day.day : 'Day ' + day.day}</span>
              <span class="day-title">${isAr ? day.titleAr : day.titleEn}</span>
            </div>
            <div class="day-desc">${isAr ? day.descAr : day.descEn}</div>
          </div>
        `).join('')}
      </div>

      <div style="margin-top: 20px; display: flex; gap: 10px;">
        <button class="btn-whatsapp" style="flex: 1; justify-content: center;" onclick="openWhatsAppPackage('${title}')">
          💬 WhatsApp
        </button>
        <button class="btn-primary" style="flex: 2; padding: 12px;" onclick="openBookingModal('${p.id}')">
          ${isAr ? 'احجز هذه الباقة' : 'Book This Package'}
        </button>
      </div>
    </div>
  `;

  const detailView = document.getElementById('detailView');
  detailView.innerHTML = html;
  detailView.classList.add('active');
  detailView.scrollTop = 0;
}

function closeDetailView() {
  document.getElementById('detailView').classList.remove('active');
}

// BOOKING MODAL
function openBookingModal(pkgId) {
  selectedPackageForModal = DATA.packages.find(p => p.id === pkgId) || DATA.packages[0];
  const isAr = currentLang === 'ar';
  const title = isAr ? selectedPackageForModal.titleAr : selectedPackageForModal.titleEn;

  document.getElementById('modalPkgTitle').innerText = title;
  document.getElementById('modalPriceVal').innerText = formatPrice(selectedPackageForModal.priceSAR * 2);
  document.getElementById('bookingModal').classList.add('active');
}

function closeBookingModal() {
  document.getElementById('bookingModal').classList.remove('active');
}

function handleModalSubmit(sendWhatsApp) {
  const name = document.getElementById('bookName').value;
  const phone = document.getElementById('bookPhone').value;
  const isAr = currentLang === 'ar';

  if (!name || !phone) {
    alert(isAr ? 'الرجاء إدخال الاسم ورقم الجوال' : 'Please provide your name and phone number');
    return;
  }

  const pkgTitle = isAr ? selectedPackageForModal.titleAr : selectedPackageForModal.titleEn;
  const message = `*طلب حجز باقة سياحية من تطبيق وجهات* ✈️
• الباقة: ${pkgTitle}
• الاسم: ${name}
• الجوال: ${phone}
• المقدر: ${formatPrice(selectedPackageForModal.priceSAR * 2)}`;

  if (sendWhatsApp) {
    const link = `https://wa.me/966550238226?text=${encodeURIComponent(message)}`;
    window.open(link, '_blank');
  }

  alert(isAr ? 'تم استلام طلبكم بنجاح! سيتواصل معكم مستشار السفر في أقرب وقت.' : 'Thank you! A Wojhat Travel Specialist will contact you shortly.');
  closeBookingModal();
}

// CUSTOM TRIP SUBMISSION
function submitCustomTripForm() {
  const name = document.getElementById('custName').value;
  const phone = document.getElementById('custPhone').value;
  const isAr = currentLang === 'ar';

  if (!name || !phone) {
    alert(isAr ? 'الرجاء إدخال الاسم ورقم الجوال' : 'Please provide your name and phone number');
    return;
  }

  const dur = document.getElementById('durVal').innerText;
  const trav = document.getElementById('travVal').innerText;
  const notes = document.getElementById('custNotes').value;

  const msg = `*طلب تصميم رحلة خاصة جديدة من تطبيق وجهات* 🌟
• الاسم: ${name}
• الجوال: ${phone}
• المدة: ${dur} أيام
• عدد المسافرين: ${trav}
• الملاحظات: ${notes || 'لا يوجد'}`;

  const link = `https://wa.me/966550238226?text=${encodeURIComponent(msg)}`;
  window.open(link, '_blank');
  alert(isAr ? 'تم إرسال الطلب بنجاح إلى كونسيرج وجهات!' : 'Request submitted successfully to Wojhat Concierge!');
}

// WHATSAPP HELPER DISPATCHERS
function openWhatsAppGeneral() {
  const isAr = currentLang === 'ar';
  const msg = isAr ? 'السلام عليكم، أود الاستفسار عن باقات وخدمات وجهات للسفر والسياحة.' : 'Hello, I would like to inquire about Wojhat Travel and Tourism packages.';
  window.open(`https://wa.me/966550238226?text=${encodeURIComponent(msg)}`, '_blank');
}

function openWhatsAppDestination(destName) {
  const isAr = currentLang === 'ar';
  const msg = isAr ? `السلام عليكم، أود الاستفسار عن تنظيم رحلة سياحية إلى (${destName}) عبر وجهات.` : `Hello, I would like to inquire about booking a tour to (${destName}) with Wojhat.`;
  window.open(`https://wa.me/966550238226?text=${encodeURIComponent(msg)}`, '_blank');
}

function openWhatsAppPackage(pkgTitle) {
  const isAr = currentLang === 'ar';
  const msg = isAr ? `مرحباً، أود الاستفسار وحجز باقة: (${pkgTitle}).` : `Hello, I would like to inquire about and book package: (${pkgTitle}).`;
  window.open(`https://wa.me/966550238226?text=${encodeURIComponent(msg)}`, '_blank');
}

function openWhatsAppService(srvTitle) {
  const isAr = currentLang === 'ar';
  const msg = isAr ? `مرحباً وجهات، أود الاستفسار عن خدمة: (${srvTitle}).` : `Hello Wojhat, I would like to inquire about service: (${srvTitle}).`;
  window.open(`https://wa.me/966550238226?text=${encodeURIComponent(msg)}`, '_blank');
}

// TAB NAVIGATION
function switchTab(tab) {
  currentTab = tab;
  closeDetailView();

  document.querySelectorAll('.nav-tab').forEach(el => el.classList.remove('active'));
  const activeBtn = document.getElementById(`nav-${tab}`);
  if (activeBtn) activeBtn.classList.add('active');

  switch (tab) {
    case 'home':
      renderHomeScreen();
      break;
    case 'destinations':
      renderDestinationsScreen();
      break;
    case 'packages':
      renderPackagesScreen();
      break;
    case 'custom':
      renderCustomTripScreen();
      break;
    case 'services':
      renderServicesScreen();
      break;
    case 'contact':
      renderContactScreen();
      break;
  }
}

// LANGUAGE & CURRENCY SWITCHERS
function toggleLanguage() {
  currentLang = currentLang === 'ar' ? 'en' : 'ar';
  const isAr = currentLang === 'ar';

  document.documentElement.setAttribute('dir', isAr ? 'rtl' : 'ltr');
  document.documentElement.setAttribute('lang', currentLang);

  document.getElementById('headerTitle').innerText = isAr ? 'وجهات للسفر' : 'WOJHAT Travel';
  document.getElementById('headerSub').innerText = isAr ? 'للسفر والسياحة' : 'Travel & Tourism';
  document.getElementById('langToggleBtn').innerText = isAr ? 'English' : 'عربي';

  // Update tabs label
  document.getElementById('tabExploreText').innerText = isAr ? 'الرئيسية' : 'Explore';
  document.getElementById('tabDestText').innerText = isAr ? 'الوجهات' : 'Destinations';
  document.getElementById('tabPkgText').innerText = isAr ? 'الباقات' : 'Packages';
  document.getElementById('tabCustomText').innerText = isAr ? 'صمم رحلتك' : 'Tailor-Made';
  document.getElementById('tabSrvText').innerText = isAr ? 'خدمات VIP' : 'Services';
  document.getElementById('tabContactText').innerText = isAr ? 'تواصل معنا' : 'Contact';

  switchTab(currentTab);
}

function cycleCurrency() {
  if (currentCurrency === 'SAR') setCurrency('USD');
  else if (currentCurrency === 'USD') setCurrency('EUR');
  else setCurrency('SAR');
}

function setCurrency(c) {
  currentCurrency = c;
  document.getElementById('currencyToggleBtn').innerText = c;
  switchTab(currentTab);
}

// DEVICE SHELL TOGGLE (iPhone 16 Pro vs Android Galaxy)
function setDevice(device) {
  currentDevice = device;
  const frame = document.getElementById('deviceFrame');
  const btnIos = document.getElementById('btnIos');
  const btnAndroid = document.getElementById('btnAndroid');

  if (device === 'android') {
    frame.classList.add('android');
    btnAndroid.classList.add('active');
    btnIos.classList.remove('active');
  } else {
    frame.classList.remove('android');
    btnIos.classList.add('active');
    btnAndroid.classList.remove('active');
  }
}

// COUNTER UTILITIES
function updateCounter(id, delta) {
  const el = document.getElementById(id);
  let val = parseInt(el.innerText, 10);
  val = Math.max(1, val + delta);
  el.innerText = val;
}

function selectChip(el) {
  el.parentElement.querySelectorAll('.form-chip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
}

function selectType(el) {
  selectChip(el);
}

// SEARCH FILTER
function handleSearch(val) {
  if (!val) {
    document.getElementById('destListHome').innerHTML = DATA.destinations.slice(0, 3).map(d => renderDestCard(d)).join('');
    return;
  }
  const q = val.toLowerCase();
  const filtered = DATA.destinations.filter(d => 
    d.nameEn.toLowerCase().includes(q) || 
    d.nameAr.includes(q) || 
    d.regionEn.toLowerCase().includes(q) ||
    d.regionAr.includes(q)
  );
  document.getElementById('destListHome').innerHTML = filtered.map(d => renderDestCard(d)).join('');
}

// INITIAL BOOT
document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.setAttribute('dir', 'rtl');
  renderHomeScreen();
});
