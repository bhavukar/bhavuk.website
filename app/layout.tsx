import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://bhavuk.website'),
  title: {
    default: 'Bhavuk Arora — Founder & CEO | Blue Fork',
    template: '%s | Bhavuk Arora — Founder & CEO | Blue Fork',
  },
  description:
    'Bhavuk Arora is the Founder & CEO of Blue Fork (Fork). Building the commercial operating system for independent creators and digital entrepreneurs. Founding team at Reve (25K+ downloads), scaled Suraasa to 10 Lakh+ downloads.',
  keywords: [
    'Bhavuk',
    'Bhavuk Arora',
    'Founder and CEO',
    'Founder & CEO',
    'Blue Fork',
    'Bluefork',
    'Founder and ceo | Bluefork',
    'Founder and CEO | Blue Fork',
    'CEO Blue Fork',
    'Founder Blue Fork',
    'Bhavuk Arora Blue Fork',
    'Bhavuk Blue Fork',
    'Bhavuk CEO',
    'Bhavuk Arora CEO',
    'Fork',
    'app.fork.blue',
    'bhavukar',
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
  publisher: 'Blue Fork',
  applicationName: 'Bhavuk Arora — Founder & CEO | Blue Fork',
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
    title: 'Bhavuk Arora — Founder & CEO | Blue Fork',
    description:
      'Founder & CEO of Blue Fork. Building the commercial operating system for independent creators. Founding team at Reve (25K+ downloads), 10 Lakh+ downloads at Suraasa.',
    siteName: 'Blue Fork',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Bhavuk Arora — Founder & CEO | Blue Fork',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nobhavuk',
    creator: '@nobhavuk',
    title: 'Bhavuk Arora — Founder & CEO | Blue Fork',
    description:
      'Founder & CEO of Blue Fork. Building commercial operating infrastructure for independent creators. 10 Lakh+ downloads at Suraasa, 25K+ at Reve.',
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
    'apple-mobile-web-app-title': 'Bhavuk | Blue Fork',
    'subject': 'Bhavuk Arora — Founder & CEO of Blue Fork',
    'target': 'all',
    'audience': 'all',
    'coverage': 'Worldwide',
    'distribution': 'Global',
    'rating': 'General',
    // Dublin Core Metadata
    'DC.title': 'Bhavuk Arora — Founder & CEO | Blue Fork',
    'DC.creator': 'Bhavuk Arora',
    'DC.subject': 'Bhavuk Arora, Blue Fork, Bluefork, Founder, CEO, Creator Economy',
    'DC.description':
      'Bhavuk Arora is the Founder & CEO of Blue Fork. Building consumer products from zero to scale.',
    'DC.publisher': 'Blue Fork',
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
        'Bhavuk Arora Blue Fork',
        'Bhavuk Bluefork',
      ],
      url: 'https://bhavuk.website',
      image: 'https://bhavuk.website/profile.jpeg',
      jobTitle: 'Founder & CEO',
      description:
        'Founder & CEO of Blue Fork (Fork). Building commercial operating infrastructure for independent creators. Scaled Suraasa to 10 Lakh+ downloads, founding team at Reve.',
      email: 'mailto:bhavukarora03@gmail.com',
      telephone: '+91-8708254881',
      worksFor: {
        '@type': 'Organization',
        '@id': 'https://bhavuk.website/#organization',
        name: 'Blue Fork',
        alternateName: ['Bluefork', 'Fork'],
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
        'https://www.behance.net/bhavukarora1',
        'https://www.instagram.com/nobhavuk/',
        'https://x.com/nobhavuk',
        'https://bhavuk3.substack.com',
        'https://app.fork.blue',
        'https://reve.rsvp',
        'https://www.suraasa.com',
      ],
    },
    {
      '@type': 'Organization',
      '@id': 'https://bhavuk.website/#organization',
      name: 'Blue Fork',
      alternateName: ['Bluefork', 'Fork'],
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
      name: 'Bhavuk Arora — Founder & CEO | Blue Fork',
      description:
        'Official website and portfolio of Bhavuk Arora, Founder & CEO of Blue Fork.',
      publisher: {
        '@id': 'https://bhavuk.website/#person',
      },
      inLanguage: 'en-US',
    },
    {
      '@type': 'ProfilePage',
      '@id': 'https://bhavuk.website/#profilepage',
      url: 'https://bhavuk.website',
      name: 'Bhavuk Arora — Founder & CEO | Blue Fork',
      mainEntity: {
        '@id': 'https://bhavuk.website/#person',
      },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Bhavuk Arora — Founder & CEO | Blue Fork',
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
      className={`scroll-smooth ${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
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
      <body className="bg-white text-zinc-900 antialiased min-h-screen selection:bg-[#fde047] selection:text-black font-sans">
        {children}
      </body>
    </html>
  );
}
