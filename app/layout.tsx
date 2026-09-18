import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://bhavuk.website'),
  title: {
    default: 'Bhavuk Arora — Founder & CEO | Bluefork',
    template: '%s | Bhavuk Arora — Founder & CEO | Bluefork',
  },
  description:
    'Bhavuk Arora is the Founder & CEO of Bluefork (Fork). Building the commercial operating system for independent creators and digital entrepreneurs. Founding team at Reve (25K+ downloads), scaled Suraasa to 10 Lakh+ downloads.',
  keywords: [
    'Bhavuk',
    'Bhavuk Arora',
    'Founder and CEO',
    'Founder & CEO',
    'Bluefork',
    'Founder and ceo | Bluefork',
    'Founder and CEO | Bluefork',
    'CEO Bluefork',
    'Founder Bluefork',
    'Bhavuk Arora Bluefork',
    'Bhavuk Bluefork',
    'Bhavuk CEO',
    'Bhavuk Arora CEO',
    'Fork',
    'app.fork.blue',
    'bhavukar',
    'bhavukarora03',
    'bhavuk15',
    'bhavuk.website',
    'Product Engineer',
    'Consumer Tech',
    'Creator Economy',
    'Reve',
    'Suraasa',
    'Delhi',
    'Rohini',
    'India',
  ],
  authors: [{ name: 'Bhavuk Arora', url: 'https://bhavuk.website' }],
  creator: 'Bhavuk Arora',
  publisher: 'Bluefork',
  applicationName: 'Bhavuk Arora — Founder & CEO | Bluefork',
  category: 'technology',
  classification: 'Founder, CEO, Technology, Executive, Product Engineering',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://bhavuk.website',
  },
  openGraph: {
    type: 'profile',
    firstName: 'Bhavuk',
    lastName: 'Arora',
    username: 'bhavukar',
    gender: 'male',
    locale: 'en_US',
    url: 'https://bhavuk.website',
    title: 'Bhavuk Arora — Founder & CEO | Bluefork',
    description:
      'Founder & CEO of Bluefork. Building the commercial operating system for independent creators. Founding team at Reve (25K+ downloads), 10 Lakh+ downloads at Suraasa.',
    siteName: 'Bluefork',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Bhavuk Arora — Founder & CEO | Bluefork',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@bhavukarora03',
    creator: '@bhavukarora03',
    title: 'Bhavuk Arora — Founder & CEO | Bluefork',
    description:
      'Founder & CEO of Bluefork. Building commercial operating infrastructure for independent creators. 10 Lakh+ downloads at Suraasa, 25K+ at Reve.',
    images: ['/og.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  manifest: '/manifest.json',
  other: {
    // Geo Meta Tags
    'geo.region': 'IN-DL',
    'geo.placename': 'Rohini, New Delhi, India',
    'geo.position': '28.7041;77.1025',
    'ICBM': '28.7041, 77.1025',
    // Marketing & Brand Identity
    'apple-mobile-web-app-title': 'Bhavuk | Bluefork',
    'subject': 'Bhavuk Arora — Founder & CEO of Bluefork',
    'target': 'all',
    'audience': 'all',
    'coverage': 'Worldwide',
    'distribution': 'Global',
    'rating': 'General',
    // Dublin Core Metadata
    'DC.title': 'Bhavuk Arora — Founder & CEO | Bluefork',
    'DC.creator': 'Bhavuk Arora',
    'DC.subject': 'Bhavuk Arora, Bluefork, Founder, CEO, Creator Economy',
    'DC.description':
      'Bhavuk Arora is the Founder & CEO of Bluefork. Building consumer products from zero to scale.',
    'DC.publisher': 'Bluefork',
    'DC.coverage': 'Rohini, Delhi, India',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://bhavuk.website/#person',
      name: 'Bhavuk Arora',
      givenName: 'Bhavuk',
      familyName: 'Arora',
      alternateName: [
        'Bhavuk',
        'bhavukar',
        'Bhavuk Arora Bluefork',
        'Bhavuk Bluefork',
      ],
      url: 'https://bhavuk.website',
      image: 'https://bhavuk.website/profile.jpeg',
      jobTitle: 'Founder & CEO',
      description:
        'Founder & CEO of Bluefork (Fork). Building commercial operating infrastructure for independent creators. Scaled Suraasa to 10 Lakh+ downloads, founding team at Reve.',
      email: 'mailto:bhavukarora03@gmail.com',
      telephone: '+91-8708254881',
      worksFor: {
        '@type': 'Organization',
        '@id': 'https://bhavuk.website/#organization',
        name: 'Bluefork',
        alternateName: ['Fork'],
        url: 'https://app.fork.blue',
        logo: 'https://bhavuk.website/fork_preview.png',
      },
      hasOccupation: {
        '@type': 'Occupation',
        name: 'Founder & Chief Executive Officer',
        occupationalCategory: '11-1011.00 - Chief Executives',
        description:
          'Founder & CEO leading venture strategy, creator monetization infrastructure, and business operations.',
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Rohini',
        addressRegion: 'Delhi',
        addressCountry: 'IN',
        postalCode: '110085',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 28.7041,
        longitude: 77.1025,
      },
      knowsAbout: [
        'Creator Economy',
        'Venture Strategy',
        'Commercial Infrastructure',
        'Mobile Systems Architecture',
        'AI Workflows',
        'Product Engineering',
      ],
      sameAs: [
        'https://github.com/bhavukar',
        'https://www.linkedin.com/in/bhavuk-arora-4a7263216/',
        'https://x.com/bhavukarora03',
        'https://www.reddit.com/user/bhavuk15',
        'https://www.behance.net/bhavukarora1',
        'https://bhavuk3.substack.com',
        'https://www.instagram.com/nobhavuk/',
        'https://app.fork.blue',
        'https://reve.rsvp',
        'https://www.suraasa.com',
      ],
    },
    {
      '@type': 'Organization',
      '@id': 'https://bhavuk.website/#organization',
      name: 'Bluefork',
      alternateName: ['Fork'],
      url: 'https://app.fork.blue',
      founder: {
        '@id': 'https://bhavuk.website/#person',
      },
      description:
        'The commercial operating system for independent creators, artists, and digital entrepreneurs.',
      sameAs: ['https://app.fork.blue'],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://bhavuk.website/#website',
      url: 'https://bhavuk.website',
      name: 'Bhavuk Arora — Founder & CEO | Bluefork',
      description:
        'Official website and portfolio of Bhavuk Arora, Founder & CEO of Bluefork.',
      publisher: {
        '@id': 'https://bhavuk.website/#person',
      },
      inLanguage: 'en-US',
    },
    {
      '@type': 'ProfilePage',
      '@id': 'https://bhavuk.website/#profilepage',
      url: 'https://bhavuk.website',
      name: 'Bhavuk Arora — Founder & CEO | Bluefork',
      mainEntity: {
        '@id': 'https://bhavuk.website/#person',
      },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Bhavuk Arora — Founder & CEO | Bluefork',
            item: 'https://bhavuk.website',
          },
        ],
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="scroll-smooth"
    >
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400..700;1,400..700&family=Playfair+Display:ital,wght@0,400..700;1,400..700&family=Plus+Jakarta+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `try { localStorage.removeItem('theme'); document.documentElement.classList.remove('dark'); } catch(e){}`,
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="bg-white text-zinc-900 antialiased min-h-screen selection:bg-[#e8e2d5] selection:text-zinc-950 font-sans"
      >
        {children}
      </body>
    </html>
  );
}
