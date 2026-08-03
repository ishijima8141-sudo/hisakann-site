import type { Metadata } from 'next'
import './globals.css'
import { LangProvider } from '@/components/LangProvider'
import NavWrapper from '@/components/NavWrapper'

export const metadata: Metadata = {
  title: 'NULLEA | 透明水彩・ハイラインアート',
  description: '縁起のいい植物モチーフを透明水彩で一点制作。開業・開院・周年の贈り物に。インテリアアートコーディネートも承ります。',
  openGraph: {
    title: 'NULLEA | 透明水彩・ハイラインアート',
    description: '縁起のいい植物モチーフを透明水彩で一点制作。開業・開院・周年の贈り物に。',
    locale: 'ja_JP',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <LangProvider>
          <NavWrapper />
          <main>{children}</main>
          <footer style={{ borderTop: '0.5px solid var(--border)', padding: '24px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
            <span style={{ fontFamily: 'Hiragino Sans, sans-serif', fontSize: 11, color: 'var(--text-muted)' }}>NULLEA（ヌレア）</span>
            <div style={{ display: 'flex', gap: 20 }}>
              {[
                { label: 'Instagram', href: 'https://www.instagram.com/hisa_makehimher/', external: true },
                { label: 'Contact', href: '/contact', external: false },
              ].map(l => (
                <a key={l.label} href={l.href} target={l.external ? '_blank' : undefined} rel={l.external ? 'noopener noreferrer' : undefined} style={{ fontFamily: 'Hiragino Sans, sans-serif', fontSize: 10, color: 'var(--text-muted)', textDecoration: 'none', letterSpacing: '0.08em' }}>{l.label}</a>
              ))}
            </div>
            <span style={{ fontFamily: 'Hiragino Sans, sans-serif', fontSize: 10, color: 'var(--text-muted)' }}>© 2025 NULLEA. All rights reserved.</span>
          </footer>
        </LangProvider>
      </body>
    </html>
  )
}
