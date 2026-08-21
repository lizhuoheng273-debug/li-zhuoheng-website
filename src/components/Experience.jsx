import { experience, experienceEn } from '../data/content'
import { useInView } from '../hooks'

function HighlightedText({ text, highlights = [] }) {
  if (!highlights.length) return text
  const escaped = highlights.map((value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
  const expression = new RegExp(`(${escaped.join('|')})`, 'g')
  return text.split(expression).map((part, index) => (
    highlights.includes(part) ? <mark className="experience-highlight" key={index}>{part}</mark> : part
  ))
}

function ExpCard({ exp, index }) {
  return (
    <li className="experience-entry">
      <div className="experience-marker" aria-hidden="true">{String(index + 1).padStart(2, '0')}</div>
      <article className="experience-card">
        <div className="experience-date">{exp.time}</div>
        <header className="experience-card-header">
          <div className="expc-id">
            <div className="expc-company">{exp.company}</div>
            <h3 className="expc-role">{exp.role}</h3>
          </div>
        </header>
        <div className="expc-body">
          {exp.items.map((item) => <p key={item.b}><b>{item.b}</b><HighlightedText text={item.t} highlights={item.h} /></p>)}
        </div>
      </article>
    </li>
  )
}

export default function Experience({ lang }) {
  const [ref, inView] = useInView(0.15)
  const isEn = lang === 'en'
  const entries = isEn ? experienceEn : experience
  return (
    <section id="experience" className={`experience-section timeline-experience ${inView ? 'inview' : ''}`} ref={ref}>
      <div className="experience-heading">
        <div className="section-eyebrow"><span className="idx">02</span> EXPERIENCE{isEn ? '' : ' · 实习经历'}</div>
      </div>
      <ol className="experience-timeline">
        {entries.map((exp, index) => <ExpCard key={exp.company} exp={exp} index={index} />)}
      </ol>
    </section>
  )
}
