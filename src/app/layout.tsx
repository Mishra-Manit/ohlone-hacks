import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import "./globals.css";

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