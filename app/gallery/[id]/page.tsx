'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { useLang } from '@/components/LangProvider'
import { supabase, Artwork } from '@/lib/supabase'
import { t } from '@/lib/i18n'

const placeholders: Artwork[] = [
  { id: '1', title_ja: '大きな牡丹', title_en: 'Peony', motif_ja: '牡丹', motif_en: 'Peony', fengshui_ja: '富貴・金運', fengshui_en: 'Prosperity & Wealth', keywords_ja: '富貴、繁栄、金運、華やかさ', keywords_en: 'Prosperity, Wealth, Abundance, Elegance', description_ja: '満開の牡丹を画面いっぱいに描いた大作。深みのある赤とグリーンのコントラストが空間を引き締める。富貴の象徴として、開業・開院の贈り物にも選ばれている一枚。', description_en: 'A large-scale work depicting a fully bloomed peony. The deep contrast of red and green anchors any space with quiet authority. Often chosen as an opening gift for its symbol of prosperity.', size: 'A2', year: 2024, price: 200000, sold: false, image_url: '/images/peony.jpg', display_order: 0, created_at: '' },
  { id: '2', title_ja: '青い胡蝶蘭', title_en: 'Blue Orchid', motif_ja: '胡蝶蘭', motif_en: 'Orchid', fengshui_ja: '幸福・人脈', fengshui_en: 'Happiness & Connections', keywords_ja: '幸福、高貴、人脈、縁起', keywords_en: 'Happiness, Nobility, Connections', description_ja: '深い闇の中に浮かぶ青い胡蝶蘭。白い絵の具で散らした粒子が、夜空の星のような神秘的な雰囲気を生み出す。人との縁と幸福を呼び込む一枚。', description_en: 'Blue orchids floating in deep darkness. White pigment scattered across the surface creates a mysterious atmosphere like stars in the night sky. A piece that invites connection and happiness.', size: 'SM', year: 2024, price: 25000, sold: false, image_url: '/images/orchid.jpg', display_order: 1, created_at: '' },
  { id: '3', title_ja: '梅の花', title_en: 'Plum Blossom', motif_ja: '梅', motif_en: 'Plum', fengshui_ja: '吉祥・再出発', fengshui_en: 'Good Fortune & New Beginnings', keywords_ja: '吉祥、忍耐、再出発、春の訪れ', keywords_en: 'Good Fortune, Patience, New Beginnings', description_ja: '冬の終わりに凜と咲く梅を、大胆な構図で切り取った作品。黒い枝と淡いピンクの花びらの対比が、力強さと繊細さを同時に表現する。', description_en: 'A bold composition capturing plum blossoms in their quiet resilience. The contrast of dark branches and pale pink petals expresses both strength and delicacy.', size: 'SM', year: 2024, price: 20000, sold: false, image_url: '/images/plum.jpg', display_order: 2, created_at: '' },
  { id: '4', title_ja: '蓮の花', title_en: 'Lotus', motif_ja: '蓮', motif_en: 'Lotus', fengshui_ja: '清廉・健康', fengshui_en: 'Purity & Health', keywords_ja: '清廉、再生、健康、浄化', keywords_en: 'Purity, Renewal, Health, Cleansing', description_ja: '雨の中に凜と立つ蓮。縦に流れる水のテクスチャが、浄化と再生のエネルギーを感じさせる。健康運や心の浄化を願う場所に飾りたい一枚。', description_en: 'A lotus standing quietly in the rain. The vertical texture of flowing water evokes an energy of purification and renewal. Ideal for spaces where health and clarity of mind are valued.', size: 'SM', year: 2024, price: 20000, sold: false, image_url: '/images/lotus.jpg', display_order: 3, created_at: '' },
]

export default function ArtworkDetailPage() {
  const { lang } = useLang()
  const params = useParams()
  const id = params.id as string
  const [artwork, setArtwork] = useState<Artwork | null>(null)

  useEffect(() => {
    supabase.from('artworks').select('*').eq('id', id).single()
      .then(({ data }) => {
        if (data) setArtwork(data)
        else setArtwork(placeholders.find(p => p.id === id) || null)
      })
  }, [id])

  if (!artwork) return (
    <div style={{ padding: '80px 48px', textAlign: 'center' }}>
      <p style={{ fontFamily: 'Hiragino Sans, sans-serif', color: 'var(--text-muted)', fontSize: 13 }}>{lang === 'ja' ? '読み込み中...' : 'Loading...'}</p>
    </div>
  )

  const infoRows = [
    { label: t.gallery.fengshui[lang], value: lang === 'ja' ? artwork.fengshui_ja : artwork.fengshui_en },
    { label: t.gallery.keywords[lang], value: lang === 'ja' ? artwork.keywords_ja : artwork.keywords_en },
    { label: t.gallery.size[lang], value: artwork.size },
    { label: t.gallery.year[lang], value: `${artwork.year}` },
    { label: t.gallery.price[lang], value: artwork.price ? `¥${artwork.price.toLocaleString()}` : t.gallery.price_on_request[lang] },
  ]

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '48px 48px' }} className="section-pad-mobile">
      <Link href="/gallery" style={{ fontFamily: 'Hiragino Sans, sans-serif', fontSize: 11, color: 'var(--text-muted)', textDecoration: 'none', letterSpacing: '0.08em', display: 'inline-block', marginBottom: 40 }}>
        {t.gallery.back[lang]}
      </Link>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'start' }} className="detail-grid-mobile">
        {/* 画像 */}
        <div style={{ position: 'relative', background: '#1a1714', aspectRatio: '3/4', overflow: 'hidden' }}>
          <Image src={artwork.image_url} alt={lang === 'ja' ? artwork.title_ja : artwork.title_en} fill style={{ objectFit: 'contain' }} />
          {artwork.sold && (
            <div style={{ position: 'absolute', top: 16, right: 16, fontFamily: 'Hiragino Sans, sans-serif', fontSize: 10, letterSpacing: '0.1em', background: 'rgba(0,0,0,0.75)', color: '#fff', padding: '4px 10px' }}>SOLD</div>
          )}
        </div>

        {/* 詳細 */}
        <div>
          <p className="eyebrow" style={{ marginBottom: 12 }}>{lang === 'ja' ? artwork.motif_ja : artwork.motif_en}</p>
          <h1 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 400, marginBottom: 8 }}>{lang === 'ja' ? artwork.title_ja : artwork.title_en}</h1>
          <div className="gold-line" style={{ marginBottom: 24 }} />

          {/* 説明文 */}
          {(artwork.description_ja || artwork.description_en) && (
            <p style={{ fontFamily: 'Hiragino Sans, sans-serif', fontSize: 13, color: 'var(--text-sub)', lineHeight: 1.9, marginBottom: 32 }}>
              {lang === 'ja' ? artwork.description_ja : artwork.description_en}
            </p>
          )}

          {/* 情報テーブル */}
          <div style={{ borderTop: '0.5px solid var(--border)' }}>
            {infoRows.map((row, i) => (
              <div key={i} style={{ display: 'flex', gap: 20, padding: '14px 0', borderBottom: '0.5px solid var(--border)', alignItems: 'flex-start' }}>
                <span style={{ fontFamily: 'Hiragino Sans, sans-serif', fontSize: 10, color: 'var(--text-muted)', letterSpacing: '0.1em', minWidth: 100, paddingTop: 1 }}>{row.label}</span>
                <span style={{ fontFamily: 'Hiragino Sans, sans-serif', fontSize: 13, color: 'var(--text)', flex: 1 }}>{row.value}</span>
              </div>
            ))}
          </div>

          {/* CTAボタン */}
          <div style={{ marginTop: 32 }}>
            {artwork.sold ? (
              <p style={{ fontFamily: 'Hiragino Sans, sans-serif', fontSize: 13, color: 'var(--text-muted)', padding: '10px 0' }}>
                {lang === 'ja' ? 'この作品は販売済みです。類似作品のご相談はお気軽に。' : 'This work has been sold. Feel free to inquire about similar pieces.'}
              </p>
            ) : (
              <Link href={`/contact?type=purchase&work=${artwork.id}`} className="btn-dark" style={{ display: 'inline-block' }}>
                {t.gallery.inquire[lang]}
              </Link>
            )}
            <div style={{ marginTop: 12 }}>
              <Link href="/contact" className="btn-outline" style={{ display: 'inline-block', fontSize: 10 }}>
                {lang === 'ja' ? '類似作品・オーダーのご相談' : 'Inquire about similar or custom work'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
