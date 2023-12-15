import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/src/styles/globals.scss';
import { Navbar } from '@/src/components/Header/Navbar';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { notFound } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio Adam',
  description: 'Portfolio with Nextjs 14 // Scss // typescript',
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: any;
}) {
  const messages = useMessages();
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar></Navbar>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
