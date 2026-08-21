# portfolio-react 文件所有权与协作规则

多对话并行修改同一项目时的约定。**原则：一个对话只动自己名下的文件，改完 commit 到自己分支。**

## 文件所有权地图

| 负责区块 | 分支 | 文件 |
|---|---|---|
| 导航 | `feat/nav` | `src/components/Nav.jsx` |
| 首屏 | `feat/hero` | `src/components/Hero.jsx` |
| 教育 | `feat/education` | `src/components/Education.jsx` |
| 实习 | `feat/experience` | `src/components/Experience.jsx` + `src/components/ScrollStack.jsx` |
| 项目 | `feat/projects` | `src/components/Projects.jsx` |
| 技能 | `feat/skills` | `src/components/Skills.jsx` |
| 联系 | `feat/contact` | `src/components/Contact.jsx` |

## 共享文件（雷区，只允许一个对话负责或顺序改）

| 文件 | 说明 |
|---|---|
| `src/styles.css` | 全局样式。新增组件样式**只能追加到文件末尾**，不得改动他人已写的段落 |
| `src/data/content.js` | 文案数据。改字段前先确认不影响其他区块 |
| `src/App.jsx` | 区块组装顺序，一般不动 |
| `package.json` | 依赖变更需在对应对话内说明 |

## 协作规则

1. 开新对话时先声明：「切到 `feat/xxx`，只动 `Y.jsx`」。
2. 动手前 `git checkout feat/xxx`（若分支不存在先 `git checkout -b feat/xxx master`）。
3. 改完：`git add -A && git commit -m "feat: 描述"`。
4. 各分支合并时，开一个合并对话在 `master` 上依次 merge，冲突人工解。
5. **禁止**跨所有权改文件、`rm -rf .git`、直接覆盖他人分支。
