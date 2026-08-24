import test from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'

test('project slider uses proximity snapping so wheel movement can accumulate', async () => {
  const css = await readFile(new URL('../src/styles.css', import.meta.url), 'utf8')
  assert.match(css, /\.proj-slider\s*\{[\s\S]*?scroll-snap-type:\s*x proximity;/)
})

test('project carousel captures wheel gestures while the pointer is over a card', async () => {
  const source = await readFile(new URL('../src/components/Projects.jsx', import.meta.url), 'utf8')
  assert.match(source, /window\.addEventListener\('wheel', onWheel, \{ passive: false, capture: true \}\)/)
  assert.match(source, /slider\.contains\(event\.target\)/)
})

test('project carousel scrolls after the active card state has updated', async () => {
  const source = await readFile(new URL('../src/components/Projects.jsx', import.meta.url), 'utf8')
  assert.match(source, /useEffect\(\(\) => \{\s*const slider = sliderRef\.current[\s\S]*?slider\.scrollTo\([\s\S]*?\}, \[activeIndex\]\)/)
})

test('project card emphasis follows the carousel active index', async () => {
  const source = await readFile(new URL('../src/components/Projects.jsx', import.meta.url), 'utf8')
  assert.match(source, /\$\{i === activeIndex \? 'active' : ''\}/)
  assert.doesNotMatch(source, /\$\{i === 0 \? 'active' : ''\}/)
})

test('English project details use complete translated articles and preserve image placement', async () => {
  const source = await readFile(new URL('../src/components/Projects.jsx', import.meta.url), 'utf8')
  assert.match(source, /projectDetailEn\[project\.detailId\]\.source/)
  assert.match(source, /projectId === 'tancan-agent'/)
  assert.match(source, /lang === 'en' \? 'Project interface' : '项目界面截图'/)
})

test('GitHub Pages deployment uses the repository base path and publishes master', async () => {
  const config = await readFile(new URL('../vite.config.js', import.meta.url), 'utf8')
  const workflow = await readFile(new URL('../.github/workflows/deploy-pages.yml', import.meta.url), 'utf8')
  assert.match(config, /base:\s*'\/li-zhuoheng-website\/'/)
  assert.match(workflow, /branches:\s*\[master\]/)
  assert.match(workflow, /actions\/deploy-pages@v4/)
})

test('portfolio does not render the internal layout debug badge', async () => {
  const source = await readFile(new URL('../src/App.jsx', import.meta.url), 'utf8')
  assert.doesNotMatch(source, /方案 F · 全屏布局 · 自由下滑/)
  assert.doesNotMatch(source, /Portfolio · Full-screen · Free scroll/)
})

test('contact pills provide copy actions and a mobile deep-link fallback', async () => {
  const source = await readFile(new URL('../src/components/Contact.jsx', import.meta.url), 'utf8')
  const css = await readFile(new URL('../src/styles.css', import.meta.url), 'utf8')
  assert.match(source, /navigator\.clipboard\.writeText/)
  assert.match(source, /weixin:\/\//)
  assert.match(source, /className={`contact-action/)
  assert.match(css, /\.contact-action>a:hover,\.contact-action\.open>a/)
  assert.match(css, /\.contact-copy-button/)
})

test('contact copy action is a transient bubble above its own pill', async () => {
  const source = await readFile(new URL('../src/components/Contact.jsx', import.meta.url), 'utf8')
  const css = await readFile(new URL('../src/styles.css', import.meta.url), 'utf8')
  assert.match(source, /setOpenContact\(null\)/)
  assert.match(css, /\.contact-copy-button\{[^}]*position:absolute[^}]*bottom:calc\(100% \+ 8px\)/)
  assert.match(css, /\.contact-copy-button\{[^}]*background:#fff/)
  assert.doesNotMatch(css, /\.contact-copy-button\{margin-left:/)
})

test('the WeChat contact opens its copy bubble on touch devices', async () => {
  const source = await readFile(new URL('../src/components/Contact.jsx', import.meta.url), 'utf8')
  assert.match(source, /id: 'wechat',[\s\S]*?copyOnly: true/)
  assert.match(source, /if \(isTouchDevice\(\) && contact\.copyOnly\) \{[\s\S]*?event\.preventDefault\(\)[\s\S]*?setOpenContact/)
})
