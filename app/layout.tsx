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
    default: 'Bhavuk Arora — Founder & Product Engineer',
    template: '%s | Bhavuk Arora',
  },
  description:
    'Founder & product engineer building consumer products from zero to scale. Building Fork, founding member at Reve (25K+ downloads), 10 Lakh+ downloads at Suraasa.',
  keywords: [
    'Bhavuk Arora',
    'Bhavuk',
    'bhavukar',
    'bhavuk.website',
    'Founder',
    'CEO',
    'Product Engineer',
    'Software Development Engineer',
    'Fork',
    'Blue Fork',
    'Reve',
    'Suraasa',
    'Consumer Apps',
    'Flutter Developer',
    'Next.js',
    'TypeScript',
    'Rust',
    'Delhi',
    'Rohini',
    'India',
    'AI Workflows',
  ],
  authors: [{ name: 'Bhavuk Arora', url: 'https://bhavuk.website' }],
  creator: 'Bhavuk Arora',
  publisher: 'Bhavuk Arora',
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
    title: 'Bhavuk Arora — Founder & Product Engineer',
    description:
      'Founder & product engineer building consumer products from zero to scale. Building Fork, founding member at Reve (25K+ downloads), 10 Lakh+ downloads at Suraasa.',
    siteName: 'Bhavuk Arora',
    images: [
      {
        url: '/profile.jpeg',
        width: 800,
        height: 800,
        alt: 'Bhavuk Arora',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nobhavuk',
    creator: '@nobhavuk',
    title: 'Bhavuk Arora — Founder & Product Engineer',
    description:
      'Founder & product engineer building consumer products from zero to scale. Building Fork, founding member at Reve (25K+ downloads), 10 Lakh+ downloads at Suraasa.',
    images: ['/profile.jpeg'],
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
    'geo.region': 'IN-DL',
    'geo.placename': 'Rohini, New Delhi',
    'geo.position': '28.7041;77.1025',
    'ICBM': '28.7041, 77.1025',
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
      alternateName: 'bhavukar',
      url: 'https://bhavuk.website',
      image: 'https://bhavuk.website/profile.jpeg',
      jobTitle: 'Founder & Product Engineer',
      description:
        'Founder & product engineer building consumer products from zero to scale. Building Fork, founding member at Reve, scaled Suraasa to 10 Lakh+ downloads.',
      email: 'mailto:bhavukarora03@gmail.com',
      telephone: '+91-8708254881',
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
      worksFor: [
        {
          '@type': 'Organization',
          name: 'Fork',
          url: 'https://app.fork.blue',
        },
        {
          '@type': 'Organization',
          name: 'Reve',
          url: 'https://reve.rsvp',
        },
      ],
      sameAs: [
        'https://github.com/bhavukar',
        'https://www.linkedin.com/in/bhavuk-arora-4a7263216/',
        'https://www.instagram.com/nobhavuk/',
        'https://x.com/nobhavuk',
        'https://app.fork.blue',
        'https://reve.rsvp',
        'https://www.suraasa.com',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://bhavuk.website/#website',
      url: 'https://bhavuk.website',
      name: 'Bhavuk Arora — Founder & Product Engineer',
      description:
        'Personal website and portfolio of Bhavuk Arora, founder and product engineer.',
      publisher: {
        '@id': 'https://bhavuk.website/#person',
      },
      inLanguage: 'en-US',
    },
    {
      '@type': 'ProfilePage',
      '@id': 'https://bhavuk.website/#profilepage',
      url: 'https://bhavuk.website',
      name: 'Bhavuk Arora — Founder & Product Engineer Portfolio',
      mainEntity: {
        '@id': 'https://bhavuk.website/#person',
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
