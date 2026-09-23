import Link from 'next/link';
export default function ClassroomLayout({ children }: { children: React.ReactNode }) {
  return <><header className="technical-header shell"><Link className="text-link" href="/classroom-bot/">Korean Classroom Bot</Link></header>{children}<footer><div className="shell"><Link href="/classroom-bot/privacy/">Privacy Policy</Link><p className="copyright">© 2026 Gleb Monetchikov</p></div></footer></>;
}
