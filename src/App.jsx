import { useEffect, useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  const [lang, setLang] = useState('zh')
  useEffect(() => {
    document.documentElement.lang = lang === 'en' ? 'en' : 'zh-CN'
    document.title = lang === 'en' ? 'Vincent Li — Portfolio' : '李卓衡｜个人作品集'
  }, [lang])
  return (
    <>
      <Nav lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <Experience lang={lang} />
      <Projects lang={lang} />
      <Contact lang={lang} />
      <div
        style={{
          background: '#1d1d1f',
          borderRadius: 999,
          bottom: 16,
          boxShadow: '0 4px 12px rgba(0,0,0,.25)',
          color: '#fff',
          fontSize: 11,
          left: 16,
          letterSpacing: '.5px',
          padding: '6px 12px',
          position: 'fixed',
          zIndex: 99,
        }}
      >
        {lang === 'zh' ? '方案 F · 全屏布局 · 自由下滑' : 'Portfolio · Full-screen · Free scroll'}
      </div>
    </>
  )
}
