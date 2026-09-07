import { useEffect, useRef, useState } from 'react'
import { useInView } from '../hooks'
import { projects, projectsEn } from '../data/content'

const assetBase = import.meta.env.BASE_URL

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

function FtResearchDemo({ isEn }) {
  return (
    <div className="ft-demo" aria-label={isEn ? 'FT-Research: AI hot topics, daily market review, and AI session workflow' : 'FT-Research 从 AI 热点资讯、每日复盘到 AI 会话的工作流演示'}>
      <div className="ft-demo-top">
        <span className="ft-demo-live"><i /> {isEn ? 'AI HOT · TOP 3' : 'AI HOT · 热点榜'}</span>
        <span>{isEn ? 'A-share · US · HK' : 'A股 / 美股 / 港股'}</span>
      </div>
      <div className="ft-demo-list">
        <div className="ft-demo-row"><em>1</em><div><b>{isEn ? 'Frontier model release tops today ranking' : '前沿大模型发布，登顶今日热点榜'}</b><small>AI HOT · RSS · {isEn ? '9 sources' : '9 源'}</small></div></div>
        <div className="ft-demo-row"><em>2</em><div><b>{isEn ? 'Evidence-first news: every point cites its source' : '证据优先：财经新闻要点可回溯来源'}</b><small>{isEn ? 'News · RSS feeds' : '资讯 · RSS 订阅'}</small></div></div>
        <div className="ft-demo-row"><em>3</em><div><b>{isEn ? 'Post-close brief: funds rotate into tech' : '盘后简报：板块资金回流科技'}</b><small>{isEn ? 'Scheduled · 08:00 daily' : '定时 · 每日 08:00'}</small></div></div>
      </div>
      <div className="ft-demo-ai"><b>✦ {isEn ? 'AI market review' : 'AI 市场复盘'}</b>{isEn ? 'Grounded in today’s page context' : '基于今日页面上下文'}<span>{isEn ? 'Review → Ask → Session' : '复盘 → 提问 → 会话'}</span></div>
    </div>
  )
}

const projectDetails = {
  'ft-research': { images: [
    ['img-review.png', '每日市场复盘', 'AI 收盘综述、大盘指数与市场结构一屏看全，数据更新时间与状态透明。'],
    ['img-news.png', '金融市场资讯', '全球财经热点榜按重要性与多平台来源组织，要点可回溯原始出处。'],
    ['img-ai-news.png', 'AI 热点资讯', '热点榜 Top 5 与可排序/置顶/隐藏的 RSS 订阅流，来源刷新状态一目了然。'],
    ['img-stock.png', '个股研究与 AI 入口', '个股行情、估值与财务面板，一键将当前股票上下文带入 AI 会话。'],
  ] },
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
  'ft-research': {
    source: `# FT-Research (Finance × AI Personal Research Workbench)

> A research workbench unifying AI financial news and AI conversation: hot-topic tracking, daily market review, stock research, and AI analysis that consolidates scattered information into verifiable research threads. AI works on real data and page context; the product never gives trading advice.

## Project background

Research signals scatter across news, quotes, and reports, and AI usually stays as one-off Q&A instead of a daily workflow. This project rebuilt the pipeline around **news → review → stocks → AI sessions**, adding branding, a permission system, and cloud deployment to make AI a site-wide capability.

**Landing page hero** (public entry with brand intro and a product preview; visitors can enter directly via the guest button)

![Landing page hero](img-hero.png)

## Core capabilities

| Capability | Description |
|---|---|
| Daily market review | Consolidates indices, sentiment, sector fund flows, watchlist stocks, and global markets with data freshness and error states; a scheduled post-close job idempotently generates a structured market brief that AI can further interpret. |
| Financial news & hot topics | Aggregates financial news, public RSS feeds, and AI hot topics with an evidence-first design where every point traces back to its source; supports hot-topic ranking, subscription management, and refresh status. |
| Stock research | Name/code search (unified normalization and debouncing, shared entry point); stock pages integrate quotes, financials, valuation, and news panels, carrying context directly into AI conversation. |
| AI research workbench | Enter with context from review, news, index, or stock pages; GLM is server-hosted (the key never leaves the backend) with NDJSON streaming, interruption recovery, and persistent session history. |

## Technical approach

\`\`\`
[Public sources: quotes · financial RSS · AI HOT]
        │
        ▼
[FastAPI backend] ── evidence-first aggregation · per-source refresh · ETag cache/fallback
        │
        ├─> [Daily review snapshot + scheduled post-close brief]
        │
        └─> [GLM-5.3-Flash · server-hosted] ──NDJSON streaming──> [AI session workbench]
                                                            [SQLite session persistence]
        │                                                            │
        ├─ Owner: full history + data boundaries
        └─ Guest: in-memory tokens + budget/tool limits
\`\`\`

- **Frontend**: React 19 + TypeScript + Vite, reorganized into AI and Finance sections, with a public landing page and full chart history.
- **AI pipeline**: the browser only sends messages and page context; streams can be resumed, and research frameworks route automatically by question type.
- **News pipeline**: evidence-chain aggregation sorted by publish time; RSS reads with safety bounds; the AI HOT proxy uses ETag/304 caching with stale-flagged fallback.
- **Permissions**: multi-dimensional limits on identity, IP, site-wide, and input length; background AI tasks never auto-rerun while offline.
- **Delivery**: production deployment on Tencent Cloud Lighthouse with Docker, preflight, and backup scripts; ~90 tests covering streaming, caching, permissions, and search.

## Live site

https://research.vincentli-website.com

## Interface screenshots

**Daily market review** (AI closing summary, indices, and market structure with transparent data freshness)

![Daily market review](img-review.png)

**Financial news** (global hot topics ranked by importance with multi-platform sources)

![Financial news](img-news.png)

**AI hot topics** (Top-5 ranking and RSS subscription streams with sorting, pinning, and hiding, plus per-source refresh status)

![AI hot topics](img-ai-news.png)

**Stock research** (quotes, valuation, and financial panels with one-click AI session entry)

![Stock research](img-stock.png)

## Project highlights (interview talking points)

1. **AI grounded in on-page context everywhere**: from news, review, indices, or any stock page, the current context carries into the AI session, so answers build on real page data instead of generic Q&A; streaming responses can be interrupted and resumed, and session history persists for later visits.
2. **Automated research routine**: AI daily/weekly/monthly reports are generated on schedule at 08:00, structured market briefs are produced automatically after each close, and hot topics plus financial news aggregate and refresh on their own — manual information gathering becomes a fixed automated workflow.
3. **A genuinely deployed system**: owner/guest role isolation (guests get their own budget and tool permissions; tokens vanish on refresh), API keys stay server-side, production deployment on Tencent Cloud with Docker, and ~90 frontend/backend tests covering critical paths.`,
    images: [
      ['img-review.png', 'Daily market review', 'AI closing summary, indices, and market structure on one screen with transparent data freshness.'],
      ['img-news.png', 'Financial news', 'Global hot topics organized by importance and multi-platform sources, with traceable points.'],
      ['img-ai-news.png', 'AI hot topics', 'A Top-5 hot-topic ranking and RSS subscription streams with sorting, pinning, hiding, and per-source refresh status.'],
      ['img-stock.png', 'Stock research & AI entry', 'Quote, valuation, and financial panels with one-click handoff of stock context into AI sessions.'],
    ],
  },
  'job-workbench': {
    source: `# Job Search Workbench

> A personal, AI-powered operating system for graduate job searching. It scans 20+ official career sites on a schedule, scores and admits relevant roles, and turns fragmented job hunting into a trackable workflow.

## Project background

Graduate roles are distributed across individual company career sites. Checking more than 20 sources manually is repetitive and makes newly posted roles easy to miss. This project turns **automated discovery → intelligent matching → unified follow-up** into one continuous loop.

## Core capabilities

| Capability | Description |
|---|---|
| Daily automated scan | Scheduled AI web search covers official sources such as Tencent and ByteDance across Shenzhen, Hong Kong, and Guangzhou. |
| Explainable role scoring | Scores roles by skills, projects and internships, education and graduation year, credentials, language ability, and location preference. Only roles scoring 70 or above are admitted. |
| Visual workbench | Five modules—All roles, Saved, Kanban, Interview, and Sources—support filtering and date-based role tracking. |
| Progress loop | Supports saving, application-state transitions, interview-preparation checklists, and data export. |
| Zero-deployment delivery | A self-contained file with local storage works offline and can be refreshed through GitHub Pages. |

## Technical approach

The workflow schedules a scan across official sites, uses AI scoring to filter roles, deduplicates records by **company · role · city**, and writes structured data to SQLite before producing a standalone interface. Existing user progress is preserved, while only new roles are added.

## Project highlights

- **Agentic workflow**: scheduled triggers, web research, scoring, deduplication, and publishing are orchestrated as a resilient automated task.
- **Practical engineering trade-offs**: a self-contained page plus local storage avoids server costs while export/import protects user data.
- **Product thinking**: score weights are explainable, date grouping reduces overload, and statuses map to the real recruiting journey from discovery to result.`,
    images: [
      ['img-tab-all.png', 'All roles', 'Scores, grades, and deadlines are visible at a glance.'],
      ['img-tab-detail.png', 'Role details', 'A right-side drawer consolidates score, status, job description, and application link.'],
      ['img-tab-kanban.png', 'Kanban', 'Roles move through discovery, saved, applied, assessment/interview, and outcome stages.'],
      ['img-tab-prep.png', 'Interview preparation', 'Maintain a role-specific checklist and copy a mock-interview prompt in one step.'],
      ['img-tab-source.png', 'Source management', 'Maintain recruitment sources centrally and revisit them at any time.'],
    ],
  },
  'tancan-agent': {
    source: `# Negotiation Agent · avatar-chat

> An AI copilot for executive communication materials. It takes a request from decomposition and research through drafting, blind evaluation, and style refinement—compressing work that previously relied on experienced staff for days into an hour-scale workflow.

## Project background

Executive-facing materials for roundtables, regulatory visits, and media interviews require business context, compliance awareness, and communication judgment. Quality varies by author, while strong examples are difficult to reuse. The project combines **Agent + tools + scoring + knowledge base** to make this workflow collaborative, evaluable, and reusable.

## Core capabilities

| Capability | Description |
|---|---|
| End-to-end drafting | Confirms needs and outline, conducts multi-source research, explores multiple perspectives, and iterates across versions. |
| Blind evaluation | Two AI evaluators independently score five dimensions—theme, logic, evidence, information gain, and audience awareness—with third-model arbitration when needed. |
| Style refinement | Uses templates for roundtables, speeches, interviews, regulatory visits, partner visits, and internal sharing; custom style profiles are also supported. |
| Structured knowledge base | 1,907 structured chunks with 13-dimensional metadata and a three-level knowledge graph support filtering and related analysis. |
| Cross-platform delivery | The same capability is available through the Web app and MCP for tools such as Claude Code and WorkBuddy. |

## Main interface

avatar-chat has three core tabs: **Negotiation Agent** for drafting, **Style refinement** for custom style profiles, and **Knowledge base management** for the 1,907 chunks and graph.

![avatar-chat main interface](img-home.png)

## Negotiation workflow

The workflow has three stages—**drafting → scoring and revision → style refinement**. Agents plan tool calls autonomously, while people confirm direction at key checkpoints.

![Negotiation workflow](img-workflow.png)

- **Drafting**: requirement understanding, outline generation, research across the knowledge base, KM, iWiki, external sources, and multiple perspectives, then iterative writing.
- **Scoring and revision**: blind review, arbitration when scores diverge, detailed revision advice, and feedback into the next draft.
- **Style refinement**: preset or learned style profiles adapt the final delivery to bullet-point or full-script formats.

## Request and outline confirmation

After a user asks for a cross-border-payment roundtable brief, the Agent immediately creates a structured outline for confirmation before continuing.

![Request and outline confirmation](img-chat-start.png)

## Reasoning trace and live draft

The Agent Loop exposes its tool calls, timing, token use, relevance scores, and the current draft. Users can see what the system considered, what it produced, and where to intervene.

![Reasoning trace and live draft](img-thinking.png)

## Evaluation framework

The quality anchor uses four score bands, five weighted dimensions, two independent AI reviewers, and third-review arbitration. A score gap of 1.5 or more triggers arbitration, while a manually labeled set of 12 representative briefs keeps results calibrated.

![Evaluation framework](img-scoring-table.png)

## Real evaluation case

For each evaluated brief, the scoring MCP identifies the overall result and concrete improvements. The Agent then iterates automatically or returns the work for additional local input until the material is final.

![Real evaluation case](img-scoring-case.png)

## Scenario templates

Six reusable templates cover roundtables, speeches, media interviews, internal sharing, regulatory visits, and partner visits. They can be customized, saved, and exported for delivery.

![Scenario templates](img-template.png)

## Style refinement

Users can describe a desired style directly or let the tool learn from historical materials. The resulting profile, strategy, and similarity score are reusable across future briefs.

![Style refinement](img-style.png)

## Technical architecture

GLM-5.1 plans function calls across 17 tools. A hybrid retrieval pipeline combines vector search, BM25, reciprocal-rank fusion, reranking, and citation mapping. The Web app uses React and Flask with streaming output, while the FastMCP service exposes five tools for compatible Agent platforms.`,
    images: [
      ['img-home.png', 'avatar-chat main interface', 'Three core entry points: Negotiation Agent, Style refinement, and Knowledge base management.'],
      ['img-workflow.png', 'Negotiation workflow', 'A three-stage loop for drafting, scoring and revision, and style refinement.'],
      ['img-chat-start.png', 'Request and outline confirmation', 'The Agent returns a structured outline before proceeding.'],
      ['img-thinking.png', 'Reasoning trace and live draft', 'Tool use, relevance scoring, and draft versions are inspectable and traceable.'],
      ['img-scoring-table.png', 'Evaluation framework', 'Five weighted dimensions, two reviewers, and arbitration anchor content quality.'],
      ['img-scoring-case.png', 'Real evaluation case', 'Five-dimensional scoring surfaces actionable improvements.'],
      ['img-template.png', 'Scenario templates', 'Standardized structures for roundtables, speeches, interviews, and more.'],
      ['img-style.png', 'Style refinement', 'A style profile is learned from instructions or historical materials for reuse.'],
    ],
  },
  'course-planner': {
    source: `# HKU MFFinTech Interactive Timetable

> A course-selection and timetable tool for the HKU Master of Financial Technology programme. It is driven by real teaching dates, detects conflicts automatically, and supports reusable plans.

## Project background

Courses span six modules from September 2026 to June 2027, with dense scheduling and internship constraints after Module 3. Official teaching plans are static tables, so conflicts across modules are difficult to see. This tool structures actual class dates and turns them into an interactive timetable.

## Core capabilities

| Capability | Description |
|---|---|
| Real-date scheduling | Visualizes 42 course sections and 402 actual teaching days from the teaching plan PDF. |
| Automatic conflict detection | Detects overlapping intervals on real dates, greys out conflicts, and identifies the conflicting course. |
| Weekly view | Navigate any week with a week bar and previous/next controls. |
| Term-based selection | Select courses step by step across M1–M2, M3–M4, M5–M6, or all terms. |
| Save and import plans | Persist plans locally, name them, import them with one click, and compare alternatives. |
| Recommended plans | Includes 12 conflict-free combinations, prioritising prerequisites and courses with two time slots. |

## Technical approach

The application is a dependency-free, single HTML file that opens locally. Course data, scopes, and presets are separated from interaction logic. Conflicts are calculated from overlapping real time intervals, and weekday labels are derived from dates to avoid inconsistent source data.

## Reusable Skill

The production workflow is packaged as **course-timetable-builder**. Replacing the teaching-plan data for another school or programme generates the same style of interactive timetable.

| Component | Role |
|---|---|
| assets/template.html | A general template with six data placeholders. |
| scripts/extract_sections.py | Extracts and aggregates sections while checking date-to-weekday consistency. |
| scripts/build.py | Injects data into the template and builds the final HTML. |
| scripts/verify_html.py | Validates placeholder completion, conflict counts, and data scale. |

course-timetable-builder.zip

## Project highlights

- **Automated data layer**: structures 42 sections and 402 real teaching days from a PDF with date-weekday consistency checks.
- **Explainable conflict decisions**: identifies the actual overlapping course rather than merely applying a visual warning.
- **Self-contained and reusable**: works by double-clicking the file, while the production workflow is reusable as a Skill for other programmes.`,
    images: [
      ['img-tab-sem1.png', 'Term-based course selection', 'Choose course sections step by step on the left while the weekly timetable updates on the right.'],
      ['img-tab-conflict.png', 'Automatic conflict detection', 'Overlapping real dates and time intervals trigger a clear conflict prompt.'],
      ['img-tab-preset.png', 'Load a recommended plan', 'Prebuilt conflict-free combinations prioritise prerequisites and two-slot courses.'],
      ['img-tab-week.png', 'Weekly view', 'Use the week bar and navigation controls to inspect any week of the term.'],
      ['img-tab-plans.png', 'Save and import plans', 'Name and save a plan, then restore it as a complete timetable with one click.'],
    ],
  },
}

function InlineMarkdown({ text }) {
  return text.split(/(\*\*.*?\*\*|\[[^\]]+\]\(https?:\/\/[^)]+\)|https?:\/\/\S+)/g).map((part, index) => {
    if (part.startsWith('**')) return <strong key={index}>{part.slice(2, -2)}</strong>
    const markdownLink = part.match(/^\[([^\]]+)\]\((https?:\/\/[^)]+)\)$/)
    if (markdownLink) return <a className="project-md-link" key={index} href={markdownLink[2]} target="_blank" rel="noreferrer">{markdownLink[1]}</a>
    if (part.startsWith('http://') || part.startsWith('https://')) return <a className="project-md-link" key={index} href={part} target="_blank" rel="noreferrer">{part}</a>
    return part
  })
}

function MarkdownArticle({ source, projectId, projectTitle, onImageClick, lang }) {
  let code = false
  let inGallerySection = false
  return <div className="project-markdown">{source.split('\n').map((line, index) => {
    if (line.startsWith('```')) { code = !code; return null }
    if (code) return <pre key={index}>{line}</pre>
    if (line.startsWith('## 界面截图') || line.startsWith('## Interface screenshots')) { inGallerySection = true; return null }
    if (inGallerySection && line.startsWith('## ')) inGallerySection = false
    if (inGallerySection) return null
    if (projectId === 'course-planner' && line.includes('course-timetable-builder.zip')) return <a className="skill-download" key={index} href={`${assetBase}assets/projects/course-planner/course-timetable-builder.zip`} download>{lang === 'en' ? 'Download Skill' : '下载 Skill'}</a>
    const imageMatch = line.match(/\]\((?:.*\/)?(img-[^)]+\.png)\)/)
    if (imageMatch) {
      const image = imageMatch[1]
      const detail = lang === 'en' ? projectDetailEn[projectId] : projectDetails[projectId]
      const detailImages = detail?.images || []
      const [, title = lang === 'en' ? 'Project interface' : '项目界面截图'] = detailImages.find(([file]) => file === image) || []
      return <figure className="project-inline-image" key={index}><button className="project-gallery-image" type="button" onClick={() => onImageClick({ image, title })} aria-label={lang === 'en' ? `Enlarge: ${title}` : `放大查看：${title}`}><img src={`${assetBase}assets/projects/${projectId}/${image}`} alt={`${projectTitle}：${title}`} /></button></figure>
    }
    if (line.startsWith('![') || line.startsWith('|---')) return null
    if (line.startsWith('# ')) return <h2 key={index}>{line.slice(2)}</h2>
    if (line.startsWith('## ')) return <h3 key={index}>{line.slice(3).replace('（面试可展开）', '')}</h3>
    if (line.startsWith('### ')) return <h4 key={index}>{line.slice(4)}</h4>
    if (line.startsWith('- ')) return <p className="project-md-bullet" key={index}><span>•</span><span className="project-md-bullet-copy"><InlineMarkdown text={line.slice(2)} /></span></p>
    if (line.startsWith('|')) return <p className="project-md-table" key={index}>{line.split('|').filter(Boolean).join('  ·  ')}</p>
    if (line.startsWith('> ')) return <blockquote key={index}><InlineMarkdown text={line.slice(2)} /></blockquote>
    return line.trim() ? <p key={index}><InlineMarkdown text={line} /></p> : null
  })}</div>
}

function ProjectDetail({ project, onClose, lang }) {
  const [markdown, setMarkdown] = useState('')
  const [selectedImage, setSelectedImage] = useState(null)
  const detail = lang === 'en' ? projectDetailEn[project.detailId] : projectDetails[project.detailId]
  useEffect(() => {
    let active = true
    fetch(`${assetBase}assets/projects/${project.detailId}/README.md`).then((response) => response.ok ? response.text() : Promise.reject()).then((text) => { if (active) setMarkdown(text) }).catch(() => { if (active) setMarkdown(lang === 'en' ? 'Project details are temporarily unavailable.' : '项目介绍暂时无法读取。') })
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
          <div className="project-detail-copy">{lang === 'en' ? <MarkdownArticle source={projectDetailEn[project.detailId].source} projectId={project.detailId} projectTitle={project.title} onImageClick={setSelectedImage} lang={lang} /> : markdown ? <MarkdownArticle source={markdown} projectId={project.detailId} projectTitle={project.title} onImageClick={setSelectedImage} lang={lang} /> : <div className="project-detail-loading">正在载入项目介绍…</div>}</div>
          {project.detailId !== 'tancan-agent' && <aside className="project-detail-gallery" aria-label={lang === 'en' ? 'Project interface' : '项目界面截图'}>{detail.images.map(([image, title, description]) => <figure key={image}><figcaption><div><b>{title}</b><span>{description}</span></div><button type="button" onClick={() => setSelectedImage({ image, title })} aria-label={lang === 'en' ? `Enlarge: ${title}` : `放大查看：${title}`}>{lang === 'en' ? 'Enlarge' : '放大'}</button></figcaption><button className="project-gallery-image" type="button" onClick={() => setSelectedImage({ image, title })} aria-label={lang === 'en' ? `Enlarge: ${title}` : `放大查看：${title}`}><img src={`${assetBase}assets/projects/${project.detailId}/${image}`} alt={`${project.title}：${title}`} /></button></figure>)}</aside>}
        </div>
      </section>
      {selectedImage && <div className="project-image-lightbox" role="presentation" onMouseDown={(event) => { event.stopPropagation(); setSelectedImage(null) }}><button type="button" onClick={() => setSelectedImage(null)} aria-label="关闭图片预览">×</button><img src={`${assetBase}assets/projects/${project.detailId}/${selectedImage.image}`} alt={`${project.title}：${selectedImage.title} 放大预览`} onMouseDown={(event) => event.stopPropagation()} /></div>}
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
              <div className={`proj-ph ${p.detailId === 'ft-research' ? 'proj-ph-ft' : ''} ${p.detailId === 'job-workbench' ? 'proj-ph-workbench' : ''} ${p.detailId === 'tancan-agent' ? 'proj-ph-agent' : ''} ${p.detailId === 'course-planner' ? 'proj-ph-timetable' : ''}`}>
                {p.detailId === 'ft-research' ? <FtResearchDemo isEn={isEn} /> : p.detailId === 'job-workbench' ? <JobWorkbenchDemo isEn={isEn} /> : p.detailId === 'tancan-agent' ? <TancanAgentDemo isEn={isEn} /> : p.detailId === 'course-planner' ? <TimetableDemo isEn={isEn} /> : <div className="ic">{p.icon}</div>}
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
