import { RESUME_EN_URL, RESUME_URL } from '../data/content'

export default function Nav({ lang, setLang }) {
  const isEn = lang === 'en'
  return (
    <div className="nav">
      <div className="nav-in">
        <a className="nav-logo" href="#hero">{isEn ? 'Vincent Li' : '李卓衡'}</a>
        <nav className="nav-links">
          <a href="#hero">{isEn ? 'About' : '关于我'}</a>
          <a href="#experience">{isEn ? 'Experience' : '实习经历'}</a>
          <a href="#projects">{isEn ? 'Projects' : 'vibe coding作品集'}</a>
          <a href="#contact">{isEn ? 'Contact' : '联系'}</a>
        </nav>
        <div className="nav-cta">
          <div className="lang-switch" aria-label="Language"><button className={!isEn ? 'active' : ''} type="button" onClick={() => setLang('zh')}>中</button><button className={isEn ? 'active' : ''} type="button" onClick={() => setLang('en')}>EN</button></div>
          <a className="fill" download href={isEn ? RESUME_EN_URL : RESUME_URL}>{isEn ? 'Download CV' : '下载简历'}</a>
        </div>
      </div>
    </div>
  )
}
