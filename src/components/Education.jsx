import { useInView } from '../hooks'
import { education } from '../data/content'

export default function Education() {
  const [ref, inView] = useInView()
  return (
    <section id="education" className={`screen light ${inView ? 'inview' : ''}`} ref={ref}>
      <div className="content">
        <div className="edu-heading">
          <span className="edu-line"></span>
          <span className="edu-heading-text">教育背景</span>
          <span className="edu-line"></span>
        </div>
        <div className="edu-blocks">
          {education.map((e, i) => (
            <div className="edu-block" id={e.id} key={i}>
              <div className="edu-left">
                <div className="edu-logos">
                  {e.logos.map((l, j) => (
                    <span className="edu-logo-item" key={l.src}>
                      <img src={l.src} alt={l.alt} className={l.cls} />
                      {e.cross && j === 0 && <span className="edu-x">×</span>}
                    </span>
                  ))}
                </div>
                <div className="edu-year">{e.year}</div>
                <div className="edu-tag">{e.tag}</div>
                {e.rows && (
                  <div className="edu-desc">
                    {e.rows.map((r, j) => (
                      <div className="row" key={j}>
                        <span className="k">{r.k}</span>
                        <span className="v">{r.v}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="edu-photo-wrap">
                <div className="edu-glow"></div>
                <img className="edu-photo" src={e.photo} alt={e.photoAlt} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
