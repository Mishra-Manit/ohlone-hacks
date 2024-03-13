import { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import "./globals.css";

let title = "Ohlone Hacks";
let description = "Join us for the first hackathon hosted at Irvington High School";
let ogimage = `https://ohlonehacks.org/og?title=${"02.03.2024"}`;
let sitename = "ohlonehacks.org";

export const metadata: Metadata = {
  metadataBase: new URL('http://ohlonehacks.org'),
  title: title,
  description: description,
  icons: {
    icon: "/apple-touch-icon.png",
  },
  openGraph: {
    images: [ogimage],
    title,
    description,
    url: "https://ohlonehacks.org",
    siteName: sitename,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: [ogimage],
    title,
    description,
  },
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