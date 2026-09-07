# 李卓衡 · 个人作品集网站

中英双语个人作品集，展示 AI 产品 / 智能体 / 金融科技方向的项目经历与简历。

**在线访问**：<https://vincentli-website.com>（GitHub Pages + 自定义域名）

![个人作品集首页](docs/screenshot-home.png)

## 页面结构

单页应用，含以下区块：

- **Hero** — 个人定位（FinTech · AI Product · Investment Analysis）与简历下载
- **关于我 / 实习经历 / 教育背景 / 技能** — 结构化个人履历
- **Vibe Coding 作品集** — 4 个项目卡片，每张卡片带专属演示动画；点击打开详情浮层：
  - 中英双语 Markdown 详情（项目背景 / 核心能力 / 技术架构 / 在线访问 / 项目亮点）
  - 右侧截图画廊（点击放大）与正文行内配图
  - 当前收录：FT-Research · AI 金融研究工作台、谈参 Agent · avatar-chat、秋招工作台、MFFinTech 排课系统
- **联系** — 联系方式与外部链接

右上角 **中 / EN** 一键切换全站语言，作品卡片与详情页内容双语同步。

## 技术栈

- Vite + React 18 + React Router，纯前端静态站点
- 自研轻量 Markdown 渲染组件（表格 / 代码块 / 行内链接 / 裸 URL 自动成链 / 截图画廊 / `prefers-reduced-motion` 降级）
- GitHub Actions 自动部署：push 到 `master` 触发构建并发布到 GitHub Pages

## 本地开发

```bash
npm install
npm run dev      # 开发服务器
npm run build    # 构建产物输出到 dist/
npm run preview  # 本地预览构建结果
```

## 目录结构

```
li-zhuoheng-website/
├── src/
│   ├── components/    # Hero / Nav / Projects（作品卡片与详情）/ Experience / Skills / Contact 等
│   ├── data/          # 中英双语作品与文案数据（content.js）
│   └── styles.css
├── public/
│   ├── CNAME          # 自定义域名 vincentli-website.com
│   └── assets/projects/  # 各项目详情 Markdown 与截图
└── .github/workflows/ # GitHub Pages 部署工作流
```
