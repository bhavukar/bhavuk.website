import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#030303',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://bhavuk.website'),
  title: 'Bhavuk Arora — Founding Member & Product Engineer',
  description:
    'Personal website & interactive portfolio of Bhavuk Arora. Founding member & Product Engineer at Reve. Building resilient digital ecosystems, from low-level CLI tools to high-performance mobile architectures.',
  keywords: [
    'Bhavuk Arora',
    'bhavuk.website',
    'bhavukarora03',
    'Product Engineer',
    'Founding Engineer',
    'Mobile Developer',
    'Flutter',
    'Rust',
    'React',
    'Next.js',
    'Reve',
  ],
  authors: [{ name: 'Bhavuk Arora', url: 'https://bhavuk.website' }],
  creator: 'Bhavuk Arora',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bhavuk.website',
    title: 'Bhavuk Arora — Founding Member & Product Engineer',
    description:
      'Personal website & interactive portfolio of Bhavuk Arora. Founding member & Product Engineer at Reve.',
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
    title: 'Bhavuk Arora — Founding Member & Product Engineer',
    description:
      'Personal website & interactive portfolio of Bhavuk Arora. Founding member & Product Engineer at Reve.',
    images: ['/profile.jpeg'],
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/profile.jpeg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body className="bg-[#030303] text-white antialiased overflow-hidden font-sans">
        {children}
      </body>
    </html>
  );
}
