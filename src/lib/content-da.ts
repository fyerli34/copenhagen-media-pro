export const siteContent = {
  // Header & Logo
  logo: {
    text: "CPH MEDIA PRO",
    imageUrl: "/logo.png", // Kendi yuvarlak logonuzu buraya ekleyin (örn: "https://your-site.com/logo.jpg")
  },

  // DANCA NAVİGASYON (Danimarka dili)
  navigation: [
    { label: "Forside", href: "#home" },
    { label: "Om os", href: "#about" },
    { label: "Ydelser", href: "#services" },
    { label: "Projekter", href: "#projects" },
    { label: "Kontakt", href: "#contact" },
  ],

  // Hero Section
  hero: {
    title: {
      part1: "FÅ DIN VIRKSOMHED TIL AT VOKSE",
      highlighted: "BEDRE",
      part2: "— VI LEVERER"
    },
    animatedWords: ["BEDRE", "STØRRE", "HURTIGERE"], // Animasyonlu kelimeler
    description: "Med effektive strategier for digital transformation og vores professionelle team arbejder vi som ét for at bringe dit brand op på sit fulde potentiale—og gøre mål, der virker uopnåelige, til hverdag.",
    buttons: {
      primary: "KONTAKT OS",
      secondary: "VORES PROJEKTER"
    }
  },

  // Game Section (2. Section - Oyun Alanı)
  gameSection: {
    enabled: true,
    card: {
      icon: "↗",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      author: {
        name: "Devid Moras",
        role: "Co-Founder",
        avatar: "https://ext.same-assets.com/2539127254/679988458.jpeg"
      }
    },
    // Oyun için iframe URL'i
    gameUrl: "https://cph-game.pages.dev/", // GDevelop oyunu
    // Veya placeholder görseller
    images: [
      "https://ext.same-assets.com/2539127254/2446902132.png",
      "https://ext.same-assets.com/2539127254/3632822893.png"
    ]
  },

  // Scrolling Banner
  scrollingBanner: {
    items: [
      { logoUrl: "/carousel-logos/branddesignlogo.png", text: "BRAND DESIGN" },
      { logoUrl: "https://ugc.same-assets.com/ZJEr6nj5Hlb1bH8zQs68nKThto6wT5lc.png", text: "DIGITAL MARKETING" },
      { logoUrl: "/carousel-logos/wordpresslogo.png", text: "WEB DESIGN" },
      { logoUrl: "/carousel-logos/metasonlogo.png", text: "" }, // Sadece logo, yazı yok
      { logoUrl: "/carousel-logos/googlelogo.png", text: "" }, // Sadece logo, yazı yok
      { logoUrl: "/carousel-logos/tiktokforbusinesslogo.png", text: "" }, // Sadece logo, yazı yok
    ]
  },

  // About Section
  about: {
    title: "LAD OS VOKSE DIT BRAND SAMMEN",
    button: "KONTAKT OS",
    description: {
      main: "COPENHAGEN MEDIA ER EN DIGITAL MARKETINGPARTNER I DANMARK, DER HJÆLPER BRANDS MED AT VOKSE GENNEM SOCIAL MEDIA, INDHOLDSPRODUKTION OG PERFORMANCE-ANNONCER",
      columns: [
        "Vi håndterer dine sociale medier fra A til Z—strategi, contentplan, community management og løbende opslag—så dit brand forbliver synligt, relevant og genkendeligt...",
        "Vi producerer foto- og videomateriale i høj kvalitet og kører resultatorienterede kampagner på tværs af digitale annonceplatforme—så opmærksomhed bliver til målbar vækst..."
      ]
    }
  },

  // Stats
  stats: [
    {
      title: "SAMLEDE VISNINGER PÅ TVÆRS AF VORES KUNDERS DIGITALE AKTIVER",
      value: "4M+",
      image: "https://ext.same-assets.com/2539127254/561533602.jpeg"
    },
    {
      title: "FOTO-, VIDEO- OG DESIGNINDHOLD PRODUCERET FOR BRANDS",
      value: "6K+",
      image: "https://ext.same-assets.com/2539127254/161816732.jpeg"
    }
  ],

  // Partners
  partners: {
    title: "BRANDS VI HAR HJULPET MED AT VOKSE",
    logos: [
      "/markalogo/1.png",
      "/markalogo/2.png",
      "/markalogo/3.png",
      "/markalogo/4.png",
      "/markalogo/5.png",
      "/markalogo/6.png",
      "/markalogo/7.png",
      "/markalogo/8.png",
      "/markalogo/9.png",
      "/markalogo/10.png",
      "/markalogo/11.png",
      "/markalogo/12.png",
      "/markalogo/13.png",
      "/markalogo/14.png",
    ]
  },

  // Services
  services: {
    title: {
      part1: "VORES KONVERTERINGSFOKUSEREDE",
      highlighted: "YDELSER",
      part2: "UNDER DIGITAL MARKETING"
    },
    description: "Vi ved, at de enkelte elementer i digital marketing ikke skaber reel værdi alene. Derfor designer vi vores ydelser, så de arbejder integreret sammen som et samlet system — og udvikler konverteringsfokuserede marketingstrategier.",
    items: [
      {
        number: "",
        title: "SOCIAL MEDIA STRATEGY",
        features: [
          "Social media-strategi & månedlig contentplan",
          "Platformstilpassede opslag, stories og videoindhold",
          "Brand tone, visuel identitet & konsistens",
          "Performance-tracking & løbende optimering"
        ]
      },
      {
        number: "",
        title: "CONTENT & PRODUCTION",
        features: [
          "Professionel foto- og videoproduktion",
          "Indhold til sociale medier og digitale kampagner",
          "Redigering, formatering & platformstilpasning",
          "Kreative koncepter tilpasset dit brand"
        ]
      },
      {
        number: "",
        title: "DIGITAL MARKETING & WEB",
        features: [
          "Digitale marketingstrategier & kampagnestyring",
          "Performancefokuserede indsatser på tværs af platforme",
          "Kreativ testning, analyse & optimering",
          "Webdesign & landing page-løsninger"
        ]
      }
    ]
  },

  // Projects
  projects: {
    title: {
      part1: "OUR PAST PROJECT",
      highlighted: "SHOWCASE"
    },
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    button: "SEE ALL PROJECTS",
    items: [
      {
        number: "01",
        title: "BRAND DESIGN",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        category: "INTERFACE & WEBSITE",
        image: "https://ext.same-assets.com/2539127254/3966872911.jpeg"
      },
      {
        number: "02",
        title: "PRODUCT DESIGN",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        category: "INTERFACE & WEBSITE",
        image: "https://ext.same-assets.com/2539127254/877168732.jpeg"
      },
      {
        number: "03",
        title: "WEB DESIGN",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        category: "INTERFACE & WEBSITE",
        image: "https://ext.same-assets.com/2539127254/3341280123.jpeg"
      }
    ]
  },

  // Pricing
  pricing: {
    title: {
      part1: "PAKKER, DER FÅR JERES FORRETNING",
      highlighted: "TIL AT VOKSE"
    },
    description: "Vælg den pakke, der passer til jeres behov. Vi håndterer produktion, indhold og annoncehåndtering fra start til slut.",
    plans: [
      {
        badge: "Basic",
        name: "VIDEO PAKKE",
        shortLine: "Video-produktion fra planlægning til færdig levering.",
        price: "5.000 KR",
        period: "MD.",
        features: [
          "Præproduktion, produktion & postproduktion inkluderet",
          "4 Reels",
          "2 optagedage pr. måned"
        ],
        highlighted: false
      },
      {
        badge: "Mest Populær",
        name: "SOCIAL MEDIA PAKKE",
        shortLine: "Alt indhold vi producerer, deles på jeres sociale kanaler.",
        price: "9.000 KR",
        period: "MD.",
        features: [
          "4 korte Reels",
          "Daglig story-design & deling",
          "10–12 opslag",
          "2 optagedage pr. måned"
        ],
        highlighted: false
      },
      {
        badge: "Avanceret",
        name: "KOMPLET PAKKE",
        shortLine: "Strategi + indhold + annoncehåndtering for at øge kendskab og skabe en stærk brandidentitet.",
        price: "12.000 KR",
        period: "MD.",
        features: [
          "4 korte Reels",
          "Daglig story-design & deling",
          "10–12 opslag",
          "Annoncehåndtering på Meta, Google & TikTok"
        ],
        highlighted: true
      }
    ],
    customPlan: {
      title: "FÅ ET TILBUD",
      description: "",
      button: "KONTAKT OS"
    }
  },

  // Team
  team: {
    title: {
      part1: "MØD VORES",
      highlighted: "TEAM"
    },
    description: "De kreative hjerner bag Copenhagen Media Pro - dedikeret til at hjælpe dit brand med at vokse.",
    members: [
      {
        name: "Serkan Çelik",
        role: "Medstifter & Videograf",
        image: "/ekipfotolar/kara.jpg"  // brown jacket, arms crossed
      },
      {
        name: "Muhammed Kara",
        role: "Medstifter",
        image: "/ekipfotolar/ina.jpg"  // navy/dark-blue jacket
      },
      {
        name: "Fatih Yerli",
        role: "ADS Manager",
        image: "/ekipfotolar/nilgun.jpg"  // beige overshirt, arms crossed
      },
      {
        name: "Burak Berkay Aslan",
        role: "Video Editor",
        image: "/ekipfotolar/seko.jpg"  // gray shirt
      },
      {
        name: "Nilgün Kara",
        role: "Designer",
        image: "/ekipfotolar/berkay.jpg"  // red/orange blazer with headscarf
      },
      {
        name: "Ina Çelik",
        role: "Content Manager",
        image: "/ekipfotolar/fatih.jpg"  // pink blazer
      }
    ],
    button: "KONTAKT OS"
  },

  // Testimonials
  testimonials: {
    title: {
      part1: "",
      highlighted: "KUNDEUDTALELSER"
    },
    items: [
      {
        rating: 5,
        text: "Vi har fire steder, så det er vigtigt, at det hele er ens. Copenhagen Media har fået vores indhold til at se lige godt ud på alle afdelinger og hjulpet os med flere bookinger. De leverer hurtigt, svarer hurtigt, og videoerne bliver faktisk set.",
        author: {
          name: "Mehmet Gül",
          role: "Owner",
          company: "Slagter Bob",
          logo: "/markalogo/12.png"
        }
      },
      {
        rating: 5,
        text: "Før i tiden afspejlede vores billeder og videoer ikke rigtig stedet. Nu ser det hele rent og professionelt ud. Vi er også begyndt at få flere bordbookinger via annoncerne. Det er nemt at arbejde med dem, og de ved, hvad de laver.",
        author: {
          name: "Fatih Sime",
          role: "Co-Founder",
          company: "Felix Cafe&Steakhouse",
          logo: "/markalogo/11.png"
        }
      },
      {
        rating: 5,
        text: "Vi havde brug for nogen, der kunne klare indhold og annoncer uden at gøre det besværligt. De kommer, filmer, redigerer og lægger det op – helt enkelt. Efter et par uger kunne vi mærke, at flere gæster kom ind og sagde, de havde set os på Instagram.",
        author: {
          name: "Ting Ting",
          role: "Owner",
          company: "Det Rene Brod",
          logo: "/markalogo/14.png"
        }
      }
    ]
  },

  // Blog
  blog: {
    title: {
      part1: "OUR LATEST",
      highlighted: "ARTICLES"
    },
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    button: "READ ALL ARTICLES",
    posts: [
      {
        title: "WHERE DOES IT COME FROM?",
        excerpt: "Contrary to popular belief, Lorem Ipsum is not simply random",
        image: "https://ext.same-assets.com/2539127254/2773792830.jpeg",
        link: "#"
      },
      {
        title: "WHY DO WE USE IT?",
        excerpt: "Lorem Ipsum is simply dummy text of the printing and typesetting",
        image: "https://ext.same-assets.com/2539127254/3683254339.jpeg",
        link: "#"
      },
      {
        title: "WHAT IS LOREM IPSUM?",
        excerpt: "Lorem Ipsum is simply dummy text of the printing and typesetting",
        image: "https://ext.same-assets.com/2539127254/2773792830.jpeg",
        link: "#"
      }
    ]
  },

  // CTA
  cta: {
    categories: ["MÅLBAR VÆKST", "MÅLRETTET ANNONCESTRATEGI", "KREATIVT INDHOLD DER KONVERTERER"],
    title: "LET'S TALK WITH US",
    button: "KONTAKT OS"
  },

  // Footer
  footer: {
    logo: {
      text: "CPH MEDIA PRO",
      imageUrl: "/logo.png"
    },
    description: "Lorem ispum dolor sit amet, ut ius audiam denique tractatos, pro cu dicat quidam neglegentur. Vel mazim aliquid.",
    contact: {
      phone: "+490 54 324 77",
      email: "example@domain.com"
    },
    links: {
      title: "Useful Links",
      items: [
        { label: "Design and creative", href: "#" },
        { label: "Web Design", href: "#" },
        { label: "Branding Design", href: "#" },
        { label: "Ui Ux Design", href: "#" },
        { label: "Case Study", href: "#" }
      ]
    },
    instagram: {
      title: "Instagram",
      images: [
        "https://ext.same-assets.com/2539127254/247099250.jpeg",
        "https://ext.same-assets.com/2539127254/2634760467.jpeg",
        "https://ext.same-assets.com/2539127254/247099250.jpeg",
        "https://ext.same-assets.com/2539127254/2634760467.jpeg",
      ]
    },
    newsletter: {
      title: "Join The Newsletter",
      description: "Lorem ispum dolor sit amet,"
    },
    copyright: "© 2025 Digi Alfa",
    social: {
      twitter: "#",
      facebook: "#",
      youtube: "#"
    }
  }
}
