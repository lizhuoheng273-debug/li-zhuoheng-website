import { useEffect, useRef, useState } from 'react'
import { useInView } from '../hooks'
import { projects, projectsEn } from '../data/content'

function JobWorkbenchDemo({ isEn }) {
  return (
    <div className="job-demo" aria-label={isEn ? 'Job workbench: automated scanning, AI matching, and role intake' : '秋招工作台自动扫描、AI 匹配和岗位入库流程演示'}>
      <div className="job-demo-top">
        <span className="job-demo-live"><i /> DAILY SCAN</span>
        <span>{isEn ? '09:00 · 20+ career sites' : '09:00 · 20+ 官网'}</span>
      </div>
      <div className="job-demo-sources">
        <span>{isEn ? 'Tencent' : '腾讯招聘'}</span><span>{isEn ? 'ByteDance' : '字节招聘'}</span><span>{isEn ? 'Ant Group' : '蚂蚁招聘'}</span><span>+17</span>
      </div>
      <div className="job-demo-flow">
        <div className="job-demo-job">
          <span className="job-demo-dot" />
          <div><b>{isEn ? 'AI Product Manager' : 'AI 产品经理'}</b><small>{isEn ? 'Shenzhen · Graduate' : '深圳 · 校招'}</small></div>
          <strong>86</strong>
        </div>
        <div className="job-demo-job job-demo-job-next">
          <span className="job-demo-dot" />
          <div><b>{isEn ? 'Agent Applications' : '智能体应用'}</b><small>{isEn ? 'Hong Kong · Internship' : '香港 · 实习'}</small></div>
          <strong>78</strong>
        </div>
        <div className="job-demo-match">
          <span>{isEn ? 'AI match' : 'AI 匹配'}</span><b>{isEn ? '≥ 70 admitted' : '≥ 70 入库'}</b>
        </div>
      </div>
      <div className="job-demo-footer"><span>{isEn ? 'Discover' : '发现'}</span><i /><span>{isEn ? 'Saved' : '收藏'}</span><i /><span className="is-current">{isEn ? 'Applied' : '投递'}</span><i /><span>{isEn ? 'Interview' : '面试'}</span></div>
    </div>
  )
}

function TancanAgentDemo({ isEn }) {
  return (
    <div className="agent-demo" aria-label={isEn ? 'Negotiation Agent workflow from research to drafting, evaluation, and refinement' : '谈参 Agent 从检索、撰写、评分到润色的流程演示'}>
      <div className="agent-demo-prompt"><span>{isEn ? 'Negotiation Agent' : '谈参 Agent'}</span><b>{isEn ? 'Cross-border payment roundtable' : '跨境支付圆桌谈参'}</b><i>↗</i></div>
      <div className="agent-demo-chain">
        <div><em>01</em><b>{isEn ? 'Research' : '多源检索'}</b><small>{isEn ? '1,907 knowledge chunks' : '1,907 条知识切片'}</small></div>
        <span>→</span>
        <div><em>02</em><b>{isEn ? 'Draft v2' : '草稿 v2'}</b><small>{isEn ? 'Live drafting & iteration' : '实时撰写与迭代'}</small></div>
        <span>→</span>
        <div><em>03</em><b>{isEn ? 'Blind review' : '双盲评分'}</b><small>{isEn ? 'Five-dimension QA' : '五维质量校验'}</small></div>
      </div>
      <div className="agent-demo-result"><span>{isEn ? 'Quality score' : '质量评分'}</span><strong>8.4</strong><b>{isEn ? 'Excellent · refined' : '优秀 · 风格润色完成'}</b></div>
    </div>
  )
}

function TimetableDemo({ isEn }) {
  const days = ['MON', 'TUE', 'WED', 'THU', 'FRI']
  return (
    <div className="timetable-demo" aria-label="交互式课表自动检测冲突的演示">
      <div className="timetable-demo-top"><b>MFFinTech · Week 06</b><span>‹　 03.09 – 03.13　 ›</span></div>
      <div className="timetable-grid">
        {days.map((day, index) => <span key={day} className={`timetable-day day-${index}`}>{day}</span>)}
        <i className="course-block course-a">FinTech</i><i className="course-block course-b">NLP</i><i className="course-block course-c">Risk</i><i className="course-block course-conflict">Conflict</i>
      </div>
      <div className="timetable-demo-alert"><i>!</i><span>{isEn ? 'Real-date conflict detected' : '真实日期冲突已识别'}</span><b>{isEn ? 'Adjust course' : '调整课程'}</b></div>
    </div>
  )
}

const projectDetails = {
  'job-workbench': { images: [
    ['img-tab-all.png', '全部岗位', '评分、等级与截止日一目了然。'],
    ['img-tab-detail.png', '岗位详情', '点击岗位后，在右侧抽屉集中查看评分、状态、JD 与投递链接。'],
    ['img-tab-kanban.png', '看板', '按发现、收藏、投递、笔试/面试到结果的阶段流转。'],
    ['img-tab-prep.png', '面试准备', '按岗位维护准备清单，并可一键复制模拟面试指令。'],
    ['img-tab-source.png', '信源管理', '统一维护招聘信息源，支持随时回查。'],
  ] },
  'tancan-agent': { images: [
    ['img-home.png', 'avatar-chat 主界面', '提供谈参 Agent、风格润色与知识库管理三个核心入口。'],
    ['img-workflow.png', '谈参工作流', '初稿撰写、评分修改与风格润色三段式闭环。'],
    ['img-chat-start.png', '问询与提纲确认', '用户输入需求后，Agent 先输出结构化提纲并在关键节点等待确认。'],
    ['img-thinking.png', '思考过程与实时草稿', '工具调用、相关性评分与草稿版本可解释、可回溯。'],
    ['img-scoring-table.png', '评分体系', '五维加权、双评与仲裁机制为内容质量提供稳定锚点。'],
    ['img-scoring-case.png', '真实评分案例', '五维评分定位问题，并生成可执行的修改建议。'],
    ['img-template.png', '场景模版', '为圆桌、演讲、采访等不同场景提供标准化谈参骨架。'],
    ['img-style.png', '风格润色', '从语言描述或历史稿件学习风格画像，并用于后续复用。'],
  ] },
  'course-planner': { images: [
    ['img-tab-sem1.png', '分学期选课', '左侧逐步选择课程班次，右侧周课表实时呈现。'],
    ['img-tab-conflict.png', '冲突自动检测', '真实日期与时间区间重叠时自动提示冲突课程。'],
    ['img-tab-preset.png', '一键载入推荐方案', '内置无冲突组合，优先满足先修课与双时段课程。'],
    ['img-tab-week.png', '按周滑动视图', '通过周条与翻周按钮查看任意一周的排课。'],
    ['img-tab-plans.png', '方案保存与导入', '为方案命名保存，点击方案卡即可整体导入。'],
  ] },
}

const projectDetailEn = {
  'tancan-agent': { overview: 'An AI copilot for executive negotiation that combines multi-source research, structured drafting, dual-AI evaluation, and style refinement.', highlights: ['1,907 structured knowledge chunks', 'Agent-driven drafting and review loop', 'Reusable through Web and MCP'] },
  'job-workbench': { overview: 'A personal job-search operating system that continuously scans official career sites, scores roles, removes duplicates, and tracks every application stage.', highlights: ['Daily scanning across 20+ official sources', 'Candidate-profile scoring with a 70-point admission threshold', 'Unified discovery, saved roles, applications, and interviews'] },
  'course-planner': { overview: 'An interactive timetable planner built from real course dates and reusable as a Skill for other academic programs.', highlights: ['42 sections and 402 teaching days visualized', 'Explainable conflict detection for real time intervals', 'Weekly view, recommendation, local saving, and import'] },
}

function InlineMarkdown({ text }) {
  return text.split(/(\*\*.*?\*\*)/g).map((part, index) => part.startsWith('**') ? <strong key={index}>{part.slice(2, -2)}</strong> : part)
}

function MarkdownArticle({ source, projectId, projectTitle, onImageClick }) {
  let code = false
  let inGallerySection = false
  return <div className="project-markdown">{source.split('\n').map((line, index) => {
    if (line.startsWith('```')) { code = !code; return null }
    if (code) return <pre key={index}>{line}</pre>
    if (line.startsWith('## 界面截图')) { inGallerySection = true; return null }
    if (inGallerySection && line.startsWith('## ')) inGallerySection = false
    if (inGallerySection) return null
    if (projectId === 'course-planner' && line.includes('course-timetable-builder.zip')) return <a className="skill-download" key={index} href="/assets/projects/course-planner/course-timetable-builder.zip" download>下载 Skill</a>
    const imageMatch = line.match(/\]\((?:.*\/)?(img-[^)]+\.png)\)/)
    if (imageMatch && projectId === 'tancan-agent') {
      const image = imageMatch[1]
      const [, title = '项目界面截图'] = projectDetails[projectId].images.find(([file]) => file === image) || []
      return <figure className="project-inline-image" key={index}><button className="project-gallery-image" type="button" onClick={() => onImageClick({ image, title })} aria-label={`放大查看：${title}`}><img src={`/assets/projects/${projectId}/${image}`} alt={`${projectTitle}：${title}`} /></button></figure>
    }
    if (line.startsWith('![') || line.startsWith('|---')) return null
    if (line.startsWith('# ')) return <h2 key={index}>{line.slice(2)}</h2>
    if (line.startsWith('## ')) return <h3 key={index}>{line.slice(3).replace('（面试可展开）', '')}</h3>
    if (line.startsWith('### ')) return <h4 key={index}>{line.slice(4)}</h4>
    if (line.startsWith('- ')) return <p className="project-md-bullet" key={index}><span>•</span><InlineMarkdown text={line.slice(2)} /></p>
    if (line.startsWith('|')) return <p className="project-md-table" key={index}>{line.split('|').filter(Boolean).join('  ·  ')}</p>
    if (line.startsWith('> ')) return <blockquote key={index}><InlineMarkdown text={line.slice(2)} /></blockquote>
    return line.trim() ? <p key={index}><InlineMarkdown text={line} /></p> : null
  })}</div>
}

function ProjectDetail({ project, onClose, lang }) {
  const [markdown, setMarkdown] = useState('')
  const [selectedImage, setSelectedImage] = useState(null)
  const detail = projectDetails[project.detailId]
  useEffect(() => {
    let active = true
    fetch(`/assets/projects/${project.detailId}/README.md`).then((response) => response.ok ? response.text() : Promise.reject()).then((text) => { if (active) setMarkdown(text) }).catch(() => { if (active) setMarkdown(lang === 'en' ? 'Project details are temporarily unavailable.' : '项目介绍暂时无法读取。') })
    return () => { active = false }
  }, [project.detailId])
  useEffect(() => {
    const bodyOverflow = document.body.style.overflow
    const rootOverflow = document.documentElement.style.overflow
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = bodyOverflow
      document.documentElement.style.overflow = rootOverflow
    }
  }, [])
  useEffect(() => {
    const onKeyDown = (event) => { if (event.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onClose])
  return (
    <div className="project-detail-overlay" role="presentation" onMouseDown={onClose}>
      <section className="project-detail-panel" role="dialog" aria-modal="true" aria-label={`${project.title} ${lang === 'en' ? 'project details' : '项目详情'}`} onMouseDown={(event) => event.stopPropagation()}>
        <header className="project-detail-head"><div><span>{lang === 'en' ? 'Personal project' : '个人项目'}</span><h2>{project.title}</h2></div><button type="button" onClick={onClose} aria-label={lang === 'en' ? 'Close project details' : '关闭项目详情'}>×</button></header>
        <div className="project-detail-content">
          <div className="project-detail-copy">{lang === 'en' ? <div className="project-markdown"><h3>Overview</h3><p>{projectDetailEn[project.detailId].overview}</p><h3>Key capabilities</h3>{projectDetailEn[project.detailId].highlights.map((item) => <p className="project-md-bullet" key={item}><span>•</span>{item}</p>)}</div> : markdown ? <MarkdownArticle source={markdown} projectId={project.detailId} projectTitle={project.title} onImageClick={setSelectedImage} /> : <div className="project-detail-loading">正在载入项目介绍…</div>}</div>
          {project.detailId !== 'tancan-agent' && <aside className="project-detail-gallery" aria-label="项目界面截图">{detail.images.map(([image, title, description]) => <figure key={image}><figcaption><div><b>{title}</b><span>{description}</span></div><button type="button" onClick={() => setSelectedImage({ image, title })} aria-label={`放大查看：${title}`}>放大</button></figcaption><button className="project-gallery-image" type="button" onClick={() => setSelectedImage({ image, title })} aria-label={`放大查看：${title}`}><img src={`/assets/projects/${project.detailId}/${image}`} alt={`${project.title}：${title}`} /></button></figure>)}</aside>}
        </div>
      </section>
      {selectedImage && <div className="project-image-lightbox" role="presentation" onMouseDown={(event) => { event.stopPropagation(); setSelectedImage(null) }}><button type="button" onClick={() => setSelectedImage(null)} aria-label="关闭图片预览">×</button><img src={`/assets/projects/${project.detailId}/${selectedImage.image}`} alt={`${project.title}：${selectedImage.title} 放大预览`} onMouseDown={(event) => event.stopPropagation()} /></div>}
    </div>
  )
}

export default function Projects({ lang }) {
  const [ref, inView] = useInView()
  const sliderRef = useRef(null)
  const cardRefs = useRef([])
  const wheelLocked = useRef(false)
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const isEn = lang === 'en'
  const entries = isEn ? projectsEn : projects

  const goToProject = (index) => {
    const nextIndex = Math.max(0, Math.min(entries.length - 1, index))
    setActiveIndex(nextIndex)
  }

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return undefined

    const onWheel = (event) => {
      if (!slider.contains(event.target) || wheelLocked.current) return
      const delta = Math.abs(event.deltaY) >= Math.abs(event.deltaX) ? event.deltaY : event.deltaX
      if (Math.abs(delta) < 8) return

      const nextIndex = Math.max(0, Math.min(entries.length - 1, activeIndex + (delta > 0 ? 1 : -1)))
      // 在首尾保留页面纵向滚动，避免轮播把用户困住。
      if (nextIndex === activeIndex) return
      event.preventDefault()
      wheelLocked.current = true
      goToProject(nextIndex)
      window.setTimeout(() => { wheelLocked.current = false }, 420)
    }

    window.addEventListener('wheel', onWheel, { passive: false, capture: true })
    return () => window.removeEventListener('wheel', onWheel, { capture: true })
  }, [activeIndex])

  useEffect(() => {
    const slider = sliderRef.current
    const card = cardRefs.current[activeIndex]
    if (!slider || !card) return
    slider.scrollTo({ left: card.offsetLeft - (slider.clientWidth - card.clientWidth) / 2, behavior: 'smooth' })
  }, [activeIndex])

  return (
    <section id="projects" className={`screen light ${inView ? 'inview' : ''}`} ref={ref}>
      <div className="content">
        <div className="eyebrow">
          <span className="idx">03</span>PROJECTS{isEn ? '' : ' · vibe coding作品集'}
        </div>
        <div className="proj-slider" ref={sliderRef} tabIndex="0" aria-label={isEn ? 'Project carousel: use the mouse wheel, arrow keys, or controls below to change cards' : '作品轮播：使用鼠标滚轮、左右方向键或下方按钮切换'} onKeyDown={(event) => { if (event.key === 'ArrowRight') { event.preventDefault(); goToProject(activeIndex + 1) } if (event.key === 'ArrowLeft') { event.preventDefault(); goToProject(activeIndex - 1) } }}>
          {entries.map((p, i) => (
            <div
              className={`proj-card ${i === activeIndex ? 'active' : ''} ${p.detailId ? 'has-detail' : ''}`}
              key={i}
              ref={(el) => (cardRefs.current[i] = el)}
              role={p.detailId ? 'button' : undefined}
              tabIndex={p.detailId ? 0 : undefined}
              onClick={p.detailId ? () => setSelectedProject(p) : undefined}
              onKeyDown={p.detailId ? (event) => { if (event.key === 'Enter' || event.key === ' ') setSelectedProject(p) } : undefined}
            >
              <div className={`proj-ph ${p.detailId === 'job-workbench' ? 'proj-ph-workbench' : ''} ${p.detailId === 'tancan-agent' ? 'proj-ph-agent' : ''} ${p.detailId === 'course-planner' ? 'proj-ph-timetable' : ''}`}>
                {p.detailId === 'job-workbench' ? <JobWorkbenchDemo isEn={isEn} /> : p.detailId === 'tancan-agent' ? <TancanAgentDemo isEn={isEn} /> : p.detailId === 'course-planner' ? <TimetableDemo isEn={isEn} /> : <div className="ic">{p.icon}</div>}
              </div>
              <div className="proj-body">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="proj-tags">
                  {p.tags.map((t, j) => <span key={j}>{t}</span>)}
                </div>
                {p.detailId ? <button className="proj-cta" type="button" onClick={() => setSelectedProject(p)}>{isEn ? 'View details' : '点击查看详情'}</button> : (
                  <a className="proj-cta" href={p.cta} target={p.external ? '_blank' : undefined} rel={p.external ? 'noopener' : undefined}>{p.ctaText}</a>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="project-carousel-controls" aria-label="作品轮播控制">
          <button type="button" onClick={() => goToProject(activeIndex - 1)} disabled={activeIndex === 0} aria-label={isEn ? 'Previous project' : '查看上一个作品'}>←</button>
          <div className="project-carousel-dots" aria-label={isEn ? `Project ${activeIndex + 1} of ${entries.length}` : `当前第 ${activeIndex + 1} 个作品，共 ${entries.length} 个`}>
            {entries.map((project, index) => <button type="button" key={project.title} className={index === activeIndex ? 'is-active' : ''} onClick={() => goToProject(index)} aria-label={isEn ? `View project: ${project.title}` : `查看作品：${project.title}`} aria-current={index === activeIndex ? 'true' : undefined} />)}
          </div>
          <button type="button" onClick={() => goToProject(activeIndex + 1)} disabled={activeIndex === entries.length - 1} aria-label={isEn ? 'Next project' : '查看下一个作品'}>→</button>
        </div>
      </div>
      {selectedProject && <ProjectDetail project={selectedProject} lang={lang} onClose={() => setSelectedProject(null)} />}
    </section>
  )
}
