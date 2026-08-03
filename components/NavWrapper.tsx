'use client'
import Nav from './Nav'
import { useLang } from './LangProvider'

export default function NavWrapper() {
  const { lang, setLang } = useLang()
  return <Nav lang={lang} onLangChange={setLang} />
}
