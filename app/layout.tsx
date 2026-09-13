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
  title: 'Bhavuk Arora — Product Engineer & Founder',
  description:
    'Product engineer & founder building consumer products and AI workflows. Founding engineer at Reve (25K+ downloads), building Fork.',
  keywords: [
    'Bhavuk Arora',
    'bhavuk.website',
    'bhavukar',
    'Product Engineer',
    'Founding Engineer',
    'Fork',
    'Reve',
    'Flutter',
    'Next.js',
    'Rust',
    'AI Workflows',
  ],
  authors: [{ name: 'Bhavuk Arora', url: 'https://bhavuk.website' }],
  creator: 'Bhavuk Arora',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bhavuk.website',
    title: 'Bhavuk Arora — Product Engineer & Founder',
    description:
      'Product engineer & founder building consumer products and AI workflows. Founding engineer at Reve (25K+ downloads), building Fork.',
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
    title: 'Bhavuk Arora — Product Engineer & Founder',
    description:
      'Product engineer & founder building consumer products and AI workflows. Founding engineer at Reve (25K+ downloads), building Fork.',
    images: ['/profile.jpeg'],
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
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
