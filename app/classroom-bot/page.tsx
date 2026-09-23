import Link from 'next/link';
import { pageMetadata } from '../../lib/site';
export const metadata = pageMetadata('Korean Classroom Bot', 'Private personal automation for authorized Google Classroom notifications.', '/classroom-bot/');
export default function ClassroomHome() {
  return <main className="legal shell"><p className="eyebrow">Private personal automation</p><h1>Korean Classroom Bot</h1><div className="legal-body"><section><p>Korean Classroom Bot is a private personal automation tool operated by Gleb Monetchikov. It retrieves coursework and announcements from an authorized Google Classroom account and delivers notifications to its authorized user through a configured Telegram chat or channel.</p></section><section><h2>Data and authorization</h2><p>Google Classroom access is read-only. Synced information is stored in Supabase; optional DeepSeek processing adds summaries and translations. See the <Link href="/classroom-bot/privacy/">Privacy Policy</Link> for data handling, retention, and revoking access.</p></section></div></main>;
}
