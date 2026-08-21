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
