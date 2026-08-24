import { useEffect, useRef, useState } from 'react'
import { useInView } from '../hooks'

function ContactIcon({ type }) {
  const paths = {
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></>,
    phone: <path d="M7.2 3.9 5.4 5.5c-.7.7.1 3.4 2 6 1.9 2.6 4.4 4.3 5.4 3.8l1.9-1.2 2.3 2.6c-1.4 1.7-3.7 2.1-6.5.4-2.6-1.6-5.7-5.4-6.8-8.3-1.2-3-.6-4.4.9-5.8l2.6.9Z" />,
    wechat: <><path d="M8.4 18.2c-3.3 0-5.9-2.2-5.9-5.1S5.1 8 8.4 8s5.9 2.2 5.9 5.1-2.6 5.1-5.9 5.1Z" /><path d="M14.5 10.2c3.9 0 7 2.5 7 5.7 0 3.1-3.1 5.7-7 5.7-.7 0-1.4-.1-2-.3" /><circle cx="6.7" cy="12.2" r=".65" fill="currentColor" stroke="none" /><circle cx="10.3" cy="12.2" r=".65" fill="currentColor" stroke="none" /><circle cx="12.6" cy="14.5" r=".65" fill="currentColor" stroke="none" /><circle cx="16.7" cy="14.5" r=".65" fill="currentColor" stroke="none" /></>,
    pin: <><path d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11Z" /><circle cx="12" cy="10" r="2" /></>,
  }
  return <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true">{paths[type]}</svg>
}

export default function Contact({ lang }) {
  const [ref, inView] = useInView()
  const [copyNotice, setCopyNotice] = useState('')
  const copyNoticeTimer = useRef(null)
  const isEn = lang === 'en'
  const contacts = [
    { id: 'email', icon: 'mail', label: 'vincentli@connect.hku.hk', value: 'vincentli@connect.hku.hk', href: 'mailto:vincentli@connect.hku.hk' },
    { id: 'phone-cn', icon: 'phone', label: '(+86) 138 0276 8902', value: '13802768902', href: 'tel:+8613802768902' },
    { id: 'phone-hk', icon: 'phone', label: '(+852) 6060 5456', value: '60605456', href: 'tel:+85260605456' },
    { id: 'wechat', icon: 'wechat', label: 'VincentLiiiiiii', value: 'VincentLiiiiiii', href: 'weixin://' },
    { id: 'location', icon: 'pin', label: isEn ? 'Shenzhen / Hong Kong' : '深圳 / 香港', value: isEn ? 'Shenzhen / Hong Kong' : '深圳 / 香港', href: '#contact' },
  ]

  const copyContact = async (contact) => {
    try {
      await navigator.clipboard.writeText(contact.value)
    } catch {
      const input = document.createElement('textarea')
      input.value = contact.value
      input.style.position = 'fixed'
      input.style.opacity = '0'
      document.body.appendChild(input)
      input.select()
      document.execCommand('copy')
      input.remove()
    }
    setCopyNotice(isEn ? 'Copied' : '已复制')
    if (copyNoticeTimer.current) window.clearTimeout(copyNoticeTimer.current)
    copyNoticeTimer.current = window.setTimeout(() => setCopyNotice(''), 1700)
  }

  useEffect(() => () => {
    if (copyNoticeTimer.current) window.clearTimeout(copyNoticeTimer.current)
  }, [])

  const handleContactClick = (event, contact) => {
    event.preventDefault()
    void copyContact(contact)
  }

  return (
    <section id="contact" className={`screen light contact-lang-${isEn ? 'en' : 'zh'} ${inView ? 'inview' : ''}`} ref={ref}>
      <div className="content">
        <div className="eyebrow contact-heading"><span className="idx">04</span>CONTACT{isEn ? '' : ' · 联系'}</div>
        <div className="contact-layout">
          <div className="contact-id-card" aria-label="李卓衡个人工卡">
            <div className="contact-id-top"><span>VINCENT LI</span><i>·</i><span>CONTACT CARD</span></div>
            <img src={`${import.meta.env.BASE_URL}assets/img/contact-id-photo.jpg`} alt={isEn ? 'Vincent Li portrait' : '李卓衡证件照'} />
            <div className="contact-id-info">
              <strong>{isEn ? 'Vincent Li' : '李卓衡'}</strong>
              <span>{isEn ? 'AI Product · Agents · FinTech' : 'AI 产品 · 智能体 · 金融科技'}</span>
            </div>
            <div className="contact-id-tags">
              <span>{isEn ? 'No. 1 in major' : '本科绩点第一'}</span><span>IELTS 7.5</span><span>{isEn ? 'Football' : '足球'}</span><span>{isEn ? 'Fitness' : '健身'}</span>
            </div>
          </div>
          <div className="contact-copy">
            <h2>{isEn ? <>The next chapter<br />Let’s create it together.</> : <>下一段经历<br />让我们一起来创造</>}</h2>
            <div className="contact-keywords">FinTech · AI Product · Investment Analysis</div>
            <div className="contact-focus">
              <span>{isEn ? 'AI Product' : 'AI 产品'}</span><span>{isEn ? 'AI Agents' : '智能体'}</span><span>{isEn ? 'FinTech Analysis' : '金融科技商分'}</span><span>{isEn ? 'Internships & Collaboration' : '实习与合作机会'}</span>
            </div>
            <div className="contact-line" aria-label={isEn ? 'Find me in' : '联系方式'}>
              <div className="contact-find-label">Find me in:</div>
              <div className="contact-list">
                {contacts.map((contact) => (
                  <div className="contact-action" key={contact.id}>
                    <a href={contact.href} onClick={(event) => handleContactClick(event, contact)}><ContactIcon type={contact.icon} />{contact.label}</a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {copyNotice && <div className="contact-copy-toast" role="status" aria-live="polite">{copyNotice}</div>}
    </section>
  )
}
