import { useInView } from '../hooks'
import { RESUME_EN_URL, RESUME_URL } from '../data/content'

export default function Hero({ lang }) {
  const [ref, inView] = useInView()
  const isEn = lang === 'en'
  return (
    <section id="hero" className={`screen light ${inView ? 'inview' : ''}`} ref={ref}>
      <div className="content">
        <div className="hero-grid">
          <div className="hero-left">
            <h1>{isEn ? 'Hi, I’m Vincent Li' : 'HI，我是李卓衡'}</h1>
            <div className="hero-tag">FinTech · AI Product · Investment Analysis</div>
            <p className="hero-bio">
              {isEn ? <><b>Master of FinTech candidate at The University of Hong Kong, with an undergraduate degree from Shenzhen University and Audencia Business School</b>. I follow AI developments and bring hands-on experience in AI product building and investment analysis. With foundations in industry research and business analysis, I aim to deepen my work at the intersection of AI and finance.</> : <><b>香港大学金融科技硕士，本科毕业于深圳大学与Audencia商学院</b><br />持续关注 AI 前沿动态，具备 AI 产品搭建与投资分析实践经验 掌握行业研究与商业分析基本技能，期望在AI与金融交叉领域深耕</>}
            </p>
            <div className="hero-divider" aria-hidden="true" />
            <div className="hero-cta">
              <a className="btn btn-primary" download href={isEn ? RESUME_EN_URL : RESUME_URL}>{isEn ? 'Download CV' : '下载简历'}</a>
              <a className="btn btn-secondary" href="#projects">{isEn ? 'View projects →' : '查看作品集 →'}</a>
              <a className="btn btn-secondary" href="#contact">{isEn ? 'Get in touch →' : '联系我 →'}</a>
            </div>
          </div>
          <div className="hero-photo-wrap">
            <div className="hero-glow"></div>
            <img className="hero-photo" alt="李卓衡" src="assets/img/portrait-cutout.png" />
          </div>
        </div>
      </div>
      <div className="scroll-hint">
        <span className="lbl">SCROLL DOWN</span>
        <span className="ln"></span>
        <span className="sub">see my work ↓</span>
      </div>
    </section>
  )
}
