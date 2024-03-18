import { Metadata } from 'next';

import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import "./globals.css";

export const metadata: Metadata = {
  title: 'Ohlone Hacks 2024',
  description: 'The official site for Ohlone Hacks 2024',
  metadataBase: new URL('https://ohlonehacks.org'),
};

const cx = (...classes: any[]) => classes.filter(Boolean).join(' ');

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;

}) {
  return (
    <html lang="en" className={cx(
      GeistSans.variable,
      GeistMono.variable
    )}>
      <body className="">
        {children}
      </body>
    </html>
  );
}