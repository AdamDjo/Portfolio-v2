import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/src/styles/globals.scss';
import { Navbar } from '@/src/components/Header/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio Adam',
  description: 'Portfolio with Nextjs 14 // Scss // typescript',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
