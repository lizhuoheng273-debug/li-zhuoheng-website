import { useInView } from '../hooks'
import { skills } from '../data/content'

export default function Skills() {
  const [ref, inView] = useInView()
  return (
    <section id="skills" className={`screen light ${inView ? 'inview' : ''}`} ref={ref}>
      <div className="content">
        <div className="eyebrow">
          <span className="idx">05</span>SKILLS · 技能与爱好
        </div>
        <h2 className="title">三类交叉技能栈。</h2>
        <div className="skill-row">
          {skills.map((s, i) => (
            <div className="skill-card" key={i}>
              <div className="cat">{s.cat}</div>
              <h3>{s.title}</h3>
              <div className="skill-tags">
                {s.tags.map((t, j) => <span key={j}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
