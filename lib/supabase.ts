import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Artwork = {
  id: string
  title_ja: string
  title_en: string
  motif_ja: string
  motif_en: string
  fengshui_ja: string
  fengshui_en: string
  keywords_ja: string
  keywords_en: string
  description_ja: string
  description_en: string
  size: string
  year: number
  price: number | null
  sold: boolean
  image_url: string
  display_order: number
  created_at: string
}

export type Inquiry = {
  name: string
  email: string
  type: 'purchase' | 'order' | 'coordination' | 'other'
  message: string
}
