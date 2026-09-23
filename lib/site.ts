import type { Metadata } from 'next';

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
export const siteUrl = process.env.SITE_URL ?? 'https://hangugo.app';
export const routes = ['/', '/support/', '/privacy/', '/terms/', '/gmetronome/', '/gmetronome/support/', '/gmetronome/privacy/', '/classroom-bot/', '/classroom-bot/privacy/'];
export const apps = {
  hangugo: { name: 'Hangugo', href: '/', mark: 'ㅎ', description: 'Thoughtful Korean practice for everyday progress.', appStore: 'https://apps.apple.com/kz/app/hangugo-korean-practice/id6799656298', googlePlay: null as string | null },
  gmetronome: { name: 'GMetronome', href: '/gmetronome/', mark: '120', description: 'A precise, distraction-free metronome for everyday music practice.', appStore: 'https://apps.apple.com/app/id1566795992', googlePlay: null as string | null },
};
export type Product = keyof typeof apps;
export function pageMetadata(title: string, description: string, path: string): Metadata {
  const url = `${siteUrl.replace(/\/$/, '')}${path}`;
  const images = path === '/' ? [`${siteUrl.replace(/\/$/, '')}/og.png`] : undefined;
  return { title, description, alternates: { canonical: url }, openGraph: { title, description, url, type: 'website', images }, twitter: { card: images ? 'summary_large_image' : 'summary', title, description, images } };
}
