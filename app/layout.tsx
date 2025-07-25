import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type { RootLayoutProps } from './types';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FrontEndMentor | Social Links Profile',
  description:
    'Front End Mentor Challenge built by Dean using Next.js, TailwindCSS, TypeScrit',
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
