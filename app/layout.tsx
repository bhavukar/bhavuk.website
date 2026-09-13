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
  title: 'Bhavuk Arora — Forward Deployed AI Engineer & Systems',
  description:
    'Forward Deployed AI Engineer specializing in deterministic agentic runtimes, low-latency edge inference, and distributed system architectures.',
  keywords: [
    'Bhavuk Arora',
    'bhavuk.website',
    'bhavukar',
    'Forward Deployed Engineer',
    'AI Systems',
    'Agentic Workflows',
    'Edge Infrastructure',
    'Cloudflare Workers',
    'Rust',
    'Next.js',
    'Reve',
  ],
  authors: [{ name: 'Bhavuk Arora', url: 'https://bhavuk.website' }],
  creator: 'Bhavuk Arora',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bhavuk.website',
    title: 'Bhavuk Arora — Forward Deployed AI Engineer & Systems',
    description:
      'Forward Deployed AI Engineer specializing in deterministic agentic runtimes, low-latency edge inference, and distributed system architectures.',
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
    title: 'Bhavuk Arora — Forward Deployed AI Engineer & Systems',
    description:
      'Forward Deployed AI Engineer specializing in deterministic agentic runtimes, low-latency edge inference, and distributed system architectures.',
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
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-zinc-900 antialiased min-h-screen selection:bg-[#fde047] selection:text-black">
        {children}
      </body>
    </html>
  );
}
