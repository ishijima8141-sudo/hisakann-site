'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Lang, t } from '@/lib/i18n'

interface NavProps { lang: Lang; onLangChange: (lang: Lang) => void }

export default function Nav({ lang, onLangChange }: NavProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const links = ['gallery', 'service', 'profile', 'faq', 'contact'] as const

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 100, background: 'var(--cream)', borderBottom: '0.5px solid var(--border)' }}>
      <nav style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none' }}>
          <div style={{ lineHeight: 1.2 }}>
            <div style={{ fontSize: 17, fontWeight: 400, color: 'var(--text)', letterSpacing: '0.1em', fontFamily: 'Hiragino Sans, sans-serif' }}>NULLEA</div>
            <div style={{ fontFamily: 'Hiragino Sans, sans-serif', fontSize: 8, color: 'var(--text-muted)', letterSpacing: '0.16em' }}>ヌレア · WATERCOLOR</div>
          </div>
        </Link>

        {/* Desktop links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }} className="hidden-mobile">
          {links.map((key) => (
            <Link key={key} href={key === 'faq' ? '/faq' : `/${key}`} style={{ fontFamily: 'Hiragino Sans, sans-serif', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', color: 'var(--text-sub)' }}>
              {t.nav[key][lang]}
            </Link>
          ))}
          <button onClick={() => onLangChange(lang === 'ja' ? 'en' : 'ja')} style={{ fontFamily: 'Hiragino Sans, sans-serif', fontSize: 9, color: 'var(--text-muted)', background: 'transparent', border: '0.5px solid var(--border-strong)', padding: '3px 10px', cursor: 'pointer' }}>
            {lang === 'ja' ? 'EN' : 'JP'}
          </button>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="show-mobile" style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 22, color: 'var(--text)', padding: '4px 8px' }} aria-label="メニュー">
          {menuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: 'var(--cream)', borderTop: '0.5px solid var(--border)', padding: '8px 24px 24px' }} className="show-mobile">
          {links.map((key) => (
            <Link key={key} href={key === 'faq' ? '/faq' : `/${key}`} onClick={() => setMenuOpen(false)} style={{ display: 'block', fontFamily: 'Hiragino Sans, sans-serif', fontSize: 13, letterSpacing: '0.08em', color: 'var(--text-sub)', textDecoration: 'none', padding: '13px 0', borderBottom: '0.5px solid var(--border)' }}>
              {t.nav[key][lang]}
            </Link>
          ))}
          <button onClick={() => { onLangChange(lang === 'ja' ? 'en' : 'ja'); setMenuOpen(false) }} style={{ marginTop: 16, fontFamily: 'Hiragino Sans, sans-serif', fontSize: 10, color: 'var(--text-muted)', background: 'transparent', border: '0.5px solid var(--border-strong)', padding: '4px 14px', cursor: 'pointer' }}>
            {lang === 'ja' ? 'EN' : 'JP'}
          </button>
        </div>
      )}
    </header>
  )
}
