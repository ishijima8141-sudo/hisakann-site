'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useLang } from '@/components/LangProvider'
import { supabase, Artwork } from '@/lib/supabase'
import { t } from '@/lib/i18n'

const placeholders = [
  { id: '1', title_ja: '大きな牡丹', title_en: 'Peony', motif_ja: '牡丹', motif_en: 'Peony', size: 'A2', image_url: '/images/peony.jpg', sold: false, price: 200000, fengshui_ja: '富貴', fengshui_en: 'Prosperity', keywords_ja: '富貴、繁栄', keywords_en: 'Prosperity, Wealth', description_ja: '', description_en: '', year: 2024, display_order: 0, created_at: '' },
  { id: '2', title_ja: '青い胡蝶蘭', title_en: 'Blue Orchid', motif_ja: '胡蝶蘭', motif_en: 'Orchid', size: 'SM', image_url: '/images/orchid.jpg', sold: false, price: 25000, fengshui_ja: '幸福', fengshui_en: 'Happiness', keywords_ja: '幸福、高貴', keywords_en: 'Happiness, Nobility', description_ja: '', description_en: '', year: 2024, display_order: 1, created_at: '' },
  { id: '3', title_ja: '梅の花', title_en: 'Plum Blossom', motif_ja: '梅', motif_en: 'Plum', size: 'SM', image_url: '/images/plum.jpg', sold: false, price: 20000, fengshui_ja: '吉祥', fengshui_en: 'Good Fortune', keywords_ja: '吉祥、忍耐', keywords_en: 'Good Fortune, Patience', description_ja: '', description_en: '', year: 2024, display_order: 2, created_at: '' },
  { id: '4', title_ja: '蓮の花', title_en: 'Lotus', motif_ja: '蓮', motif_en: 'Lotus', size: 'SM', image_url: '/images/lotus.jpg', sold: false, price: 20000, fengshui_ja: '清廉', fengshui_en: 'Purity', keywords_ja: '清廉、再生', keywords_en: 'Purity, Renewal', description_ja: '', description_en: '', year: 2024, display_order: 3, created_at: '' },
]

export default function GalleryPage() {
  const { lang } = useLang()
  const [artworks, setArtworks] = useState<Artwork[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    supabase.from('artworks').select('*').order('display_order')
      .then(({ data }) => { if (data && data.length > 0) setArtworks(data); setLoading(false) })
  }, [])

  const items = artworks.length > 0 ? artworks : placeholders as Artwork[]

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 48px' }} className="section-pad-mobile">
      <p className="eyebrow" style={{ marginBottom: 12 }}>Works</p>
      <h1 style={{ fontSize: 28, fontWeight: 400, marginBottom: 8 }}>{t.gallery.title[lang]}</h1>
      <div className="gold-line" style={{ marginBottom: 40 }} />
      {loading && <p style={{ fontFamily: 'Hiragino Sans, sans-serif', fontSize: 13, color: 'var(--text-muted)' }}>{lang === 'ja' ? '読み込み中...' : 'Loading...'}</p>}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 16 }} className="gallery-grid-mobile">
        {items.map((aw) => (
          <Link key={aw.id} href={`/gallery/${aw.id}`} style={{ textDecoration: 'none', display: 'block' }}>
            <div style={{ position: 'relative', background: '#111', overflow: 'hidden', aspectRatio: '3/4' }}>
              <Image src={aw.image_url} alt={lang === 'ja' ? aw.title_ja : aw.title_en} fill style={{ objectFit: 'contain' }} />
              {aw.sold && (
                <div style={{ position: 'absolute', top: 10, right: 10, fontFamily: 'Hiragino Sans, sans-serif', fontSize: 9, letterSpacing: '0.1em', background: 'rgba(0,0,0,0.75)', color: '#fff', padding: '2px 8px' }}>SOLD</div>
              )}
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '48px 14px 14px', background: 'linear-gradient(transparent, rgba(0,0,0,0.8))' }}>
                <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.9)' }}>{lang === 'ja' ? aw.title_ja : aw.title_en}</p>
                <p style={{ fontSize: 9, color: 'rgba(255,255,255,0.5)', fontFamily: 'sans-serif', letterSpacing: '0.1em' }}>{lang === 'ja' ? aw.motif_ja : aw.motif_en} · {aw.size}</p>
              </div>
            </div>
            <div style={{ marginTop: 8, paddingLeft: 2 }}>
              {aw.price && !aw.sold && <p style={{ fontFamily: 'Hiragino Sans, sans-serif', fontSize: 12, color: 'var(--text-sub)' }}>¥{aw.price.toLocaleString()}</p>}
              {aw.sold && <p style={{ fontFamily: 'Hiragino Sans, sans-serif', fontSize: 11, color: 'var(--text-muted)' }}>SOLD</p>}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
