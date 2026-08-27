import type { Metadata } from 'next';
import { Manrope, Noto_Sans_KR } from 'next/font/google';
import './globals.css';

const manrope = Manrope({ variable: '--font-manrope', subsets: ['latin'] });
const korean = Noto_Sans_KR({ variable: '--font-korean', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://glebkanmon.github.io/hangugo-site/'),
  title: { default: 'Hangugo — Korean learning, made personal', template: '%s' },
  description: 'Learn Korean vocabulary with spaced repetition, natural pronunciation, and personalized AI practice.',
  openGraph: { title: 'Hangugo', description: 'Korean learning, made personal.', type: 'website', images: ['/hangugo-site/og.png'] },
  twitter: { card: 'summary_large_image', title: 'Hangugo', description: 'Korean learning, made personal.', images: ['/hangugo-site/og.png'] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${manrope.variable} ${korean.variable}`}>{children}</body></html>;
}
