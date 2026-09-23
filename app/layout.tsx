import type { Metadata } from 'next';
import { basePath, siteUrl } from '../lib/site';
import { Manrope, Noto_Sans_KR } from 'next/font/google';
import './globals.css';

const manrope = Manrope({ variable: '--font-manrope', subsets: ['latin'] });
const korean = Noto_Sans_KR({ variable: '--font-korean', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'Hangugo', template: '%s' },
  icons: { icon: `${basePath}/favicon.svg` },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${manrope.variable} ${korean.variable}`}>{children}</body></html>;
}
