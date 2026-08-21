// 作品集内容（从原 HTML 提取，便于在 React 组件中复用）
export const RESUME_URL = 'assets/docs/李卓衡_中文简历_编辑版.pdf'
export const RESUME_EN_URL = 'assets/docs/LI_ZHUOHENG_English_Resume.pdf'

export const education = [
  {
    id: 'honors',
    school: '深圳大学',
    logos: [
      { src: 'assets/img/szu-logo.png', alt: '深圳大学 logo', cls: '' },
      { src: 'assets/img/audencia-logo.png', alt: 'Audencia Business School logo', cls: 'aud' },
    ],
    cross: true,
    year: '2022 – 2026',
    tag: '大数据管理与应用 · 中外合作办学',
    rows: [
      { k: '成绩排名：', v: '平均绩点 4.1 / 4.5 · 专业排名 1 / 90' },
      { k: '语言：', v: '雅思 7.5；GRE 323' },
      { k: '荣誉奖项：', v: '荔园之星、鹏程奖学金、学习之星（均前 1%）' },
    ],
    photo: 'assets/img/szu-campus.jpg',
    photoAlt: '深圳大学校园',
  },
  {
    id: 'hku',
    school: '香港大学',
    logos: [
      { src: 'assets/img/hku-logo.png', alt: '香港大学 logo', cls: 'hku' },
    ],
    cross: false,
    year: '2026.09 – 2027.06',
    tag: '金融科技硕士 · MFFinTech',
    photo: 'assets/img/hku-campus.jpg',
    photoAlt: '香港大学校园',
  },
]

export const experience = [
  {
    logo: 'assets/img/tencent-logo.png',
    logoAlt: '腾讯 FiT',
    company: '深圳市腾讯计算机系统有限公司',
    role: '商业分析实习生',
    time: '2025.12 – 2026.05',
    tags: ['商业分析', 'AI Agent', '大模型应用', '工作流自动化', '支付研究'],
    metrics: [
      { v: '0→1', k: '谈参 Agent' },
      { v: '10+', k: '研究报告' },
      { v: 'Skill + MCP', k: '跨平台复用' },
    ],
    items: [
      {
        b: 'AI Agent 产品 0→1 开发：',
        t: '围绕谈参材料整合与编写痛点，用 CodeBuddy 搭建产品原型；以 Agent Loop、Function Calling 串联知识检索、撰写与质量评分。',
        h: ['0→1', 'Agent Loop', 'Function Calling'],
      },
      {
        b: '金融科技趋势研究与市场：',
        t: '跟踪 Agent 支付、AI、稳定币、BNPL 与跨境支付；沉淀 10+ 研究报告，为业务研判和管理层汇报提供支持。',
        h: ['Agent 支付', 'AI', '稳定币', 'BNPL', '跨境支付', '10+'],
      },
    ],
  },
  {
    logo: 'assets/img/huaan-logo.png',
    logoAlt: '华安证券',
    company: '华安证券股份有限公司',
    role: '电力新能源组实习生',
    time: '2024.07 – 2024.09',
    tags: ['卖方研究', '新能源', '财务建模', '政策分析', '数据可视化'],
    metrics: [
      { v: '11', k: '上市公司' },
      { v: '15 篇', k: '研究报告' },
      { v: '3 年', k: '增长预测' },
    ],
    items: [
      {
        b: '财务分析与业绩预测：',
        t: '运用 iFind、Wind 拆解 11 家上市公司的净利润、ROE、毛利率等指标，建立未来三年增长预测框架。',
        h: [],
      },
      {
        b: '行业研究报告撰写：',
        t: '整合财务、行业与政策数据，完成风电、光伏周报 3 篇及公司点评、深度报告 12 篇，并以趋势图、热力图支撑观点。',
        h: ['3 篇', '12 篇'],
      },
      {
        b: '研究数据库与政策分析：',
        t: '整理各省近三年分时电价与十年配电网政策，分析价格和监管变化，为预测模型提供数据支持。',
        h: [],
      },
    ],
  },
  {
    logo: 'assets/img/frost-logo.png',
    logoAlt: '弗若斯特沙利文',
    company: '弗若斯特沙利文（北京）咨询有限公司深圳分公司',
    role: '医药项目组实习生',
    time: '2023.10 – 2024.01',
    tags: ['IPO 研究', '咨询', '行业研究', '数据建模', '竞争格局分析'],
    metrics: [
      { v: '5,000+', k: '疫苗数据库记录' },
      { v: '30%', k: '数据分析' },
      { v: '数十份', k: '报告修改' },
    ],
    items: [
      {
        b: 'IPO 报告撰写：',
        t: '参与 IPO 报告市场分析与竞争格局章节，完成约 30% 的数据分析；引用 WHO 全球疫苗数据库及临床试验数据形成证据支持。',
        h: ['30%'],
      },
      {
        b: '疫苗数据库与报告质量：',
        t: '搭建覆盖中国、东南亚及全球市场的 5,000+ 条疫苗数据库；完成数十份英文报告的数据核验、逻辑优化与语言润色。',
        h: ['5,000+'],
      },
    ],
  },
]

export const experienceEn = [
  { company: 'Tencent Technology (Shenzhen) Co., Ltd.', role: 'Business Analysis Intern', time: 'Dec 2025 – May 2026', items: [
    { b: 'Built an AI Agent from 0→1: ', t: 'Prototyped a negotiation-material copilot with CodeBuddy, connecting knowledge retrieval, drafting, and quality evaluation through Agent Loop and Function Calling.', h: ['0→1', 'Agent Loop', 'Function Calling'] },
    { b: 'Researched fintech trends and markets: ', t: 'Tracked Agent payments, AI, stablecoins, BNPL, and cross-border payments; delivered 10+ research reports to support business decisions and management briefings.', h: ['Agent payments', 'AI', 'stablecoins', 'BNPL', 'cross-border payments', '10+'] },
  ] },
  { company: 'HuaAn Securities Co., Ltd.', role: 'Power & New Energy Research Intern', time: 'Jul 2024 – Sep 2024', items: [
    { b: 'Financial analysis & forecasting: ', t: 'Used iFind and Wind to analyze earnings, ROE, and margins for 11 listed companies, building a three-year growth forecasting framework.', h: ['11 listed companies', 'three-year'] },
    { b: 'Industry research writing: ', t: 'Integrated financial, industry, and policy data; produced 3 wind and solar weekly reports and 12 in-depth/company reports supported by trend and heat maps.', h: ['3', '12'] },
    { b: 'Research database & policy analysis: ', t: 'Organized provincial time-of-use electricity prices and distribution-grid policies to support forecasting models.', h: [] },
  ] },
  { company: 'Frost & Sullivan (Beijing) Consulting Co., Ltd., Shenzhen Branch', role: 'Healthcare Consulting Intern', time: 'Oct 2023 – Jan 2024', items: [
    { b: 'IPO report writing: ', t: 'Contributed market and competitive landscape sections and about 30% of data analysis, using WHO vaccine and clinical-trial data as evidence.', h: ['30%'] },
    { b: 'Vaccine database & report quality: ', t: 'Built a 5,000+ record vaccine database spanning China, Southeast Asia, and global markets; verified data and improved logic and language across English reports.', h: ['5,000+'] },
  ] },
]

export const projects = [
  {
    icon: '◈',
    meta: '个人项目 · 2024 – 2025',
    title: '谈参 Agent · avatar-chat',
    detailId: 'tancan-agent',
    desc: '面向高管谈参场景的 AI Copilot：自主完成需求拆解、多源检索、草稿撰写、双 AI 五维评分与风格润色；知识库沉淀 1,907 条结构化切片，并可通过 Web 与 MCP 跨平台调用。',
    tags: ['React', 'Flask', 'Agent Loop', 'GLM', 'MCP'],
    cta: '#',
    ctaText: '打开作品链接',
  },
  {
    icon: '▦',
    meta: '个人项目 · 2025',
    title: '秋招工作台',
    detailId: 'job-workbench',
    desc: 'AI 驱动的个人求职管理系统：每日扫描 20+ 官方招聘页，按候选人画像评分，仅 ≥70 分岗位入库；以公司、岗位、城市三元组去重，并统一跟进收藏、投递与面试进度。',
    tags: ['AI 联网检索', 'SQLite', '智能评分', '岗位追踪', '自动发布'],
    cta: '#',
    ctaText: '打开作品链接',
  },
  {
    icon: '◐',
    meta: '个人项目 · 2026',
    title: '港大 MFFinTech 交互式课表',
    detailId: 'course-planner',
    desc: '基于真实开课日期的交互式选课排课器：将 42 个课程班、402 个上课日可视化，自动识别时间区间冲突，支持按周查看、推荐方案与本地保存复用。',
    tags: ['HTML', 'JavaScript', '冲突检测', '按周视图', '方案复用'],
    cta: '#',
    ctaText: '打开作品链接',
  },
]

export const projectsEn = [
  { icon: '◈', title: 'Negotiation Agent · avatar-chat', detailId: 'tancan-agent', desc: 'An AI copilot for executive negotiation: it independently decomposes requirements, retrieves information, drafts content, conducts dual-AI five-dimensional evaluation, and refines style. Its knowledge base contains 1,907 structured chunks and supports Web and MCP usage.', tags: ['React', 'Flask', 'Agent Loop', 'GLM', 'MCP'], cta: '#', ctaText: 'Open project' },
  { icon: '▦', title: 'Job Search Workbench', detailId: 'job-workbench', desc: 'An AI-powered job-search management system: scans 20+ official career sites daily, scores opportunities against a candidate profile, admits roles scoring 70 or above, and unifies tracking for saved roles, applications, and interviews.', tags: ['AI web search', 'SQLite', 'Smart scoring', 'Job tracking', 'Auto publish'], cta: '#', ctaText: 'Open project' },
  { icon: '◐', title: 'HKU MFFinTech Interactive Timetable', detailId: 'course-planner', desc: 'An interactive planner built on real course dates: visualizes 42 course sections across 402 teaching days, detects time conflicts, and supports weekly views, recommended plans, and local saving.', tags: ['HTML', 'JavaScript', 'Conflict detection', 'Weekly view', 'Plan reuse'], cta: '#', ctaText: 'Open project' },
]

export const skills = [
  {
    cat: 'AI Agent',
    title: 'AI Agent 开发',
    tags: ['Skill 流程编排', 'MCP 工具封装', '多模型调用', 'Claude / GPT / GLM', 'WorkBuddy', 'Claude Code', 'Cursor', 'Coze'],
  },
  {
    cat: 'Finance',
    title: '金融分析 & 工具',
    tags: ['Wind', 'iFind', 'WarrenQ', '投资分析', '行业研究', '公司研究', '财务建模'],
  },
  {
    cat: 'Computing',
    title: '计算机 & 数据',
    tags: ['Python', '数据分析', 'Microsoft Office', 'SQL'],
  },
]

export const contact = {
  items: [
    { k: '邮箱', v: 'vincentli@connect.hku.hk' },
    { k: '手机', v: '(+86) 138 0276 8902' },
    { k: 'GitHub', v: 'lizhuoheng273-debug' },
    { k: '所在地', v: '深圳 / 香港' },
  ],
}
