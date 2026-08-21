import { useLayoutEffect, useRef, useCallback } from 'react'
import { getNextStackIndex } from './stackMath'

/**
 * 自研 ScrollStack 复刻（零依赖，无 lenis）
 * 机制：高 (n*scrollLength*100)vh 的滚动轨道 + position:sticky 的 100vh 舞台；
 * 一个 rAF 循环把「当前卡片」进度做 lerp 平滑，逐卡命令式驱动
 * translate / scale / rotateX(3D 翻转) / blur / opacity，实现
 * 固定堆叠 + 翻转 + 溶解。
 */
export default function ScrollStack({
  children,
  eyebrow = '',
  title = '',
  scrollLength = 1,
  peek = 26,
  scaleStep = 0.07,
  blur = 4,
  dim = 0.28,
  smooth = 0.16,
  depth = 3,
  cardWidth = 860,
  cardHeight = 0.66,
  borderRadius = 22,
  perspective = 1400,
  showProgress = true,
  showCounter = true,
  snapWheel = false,
}) {
  const trackRef = useRef(null)
  const cardsRef = useRef([])
  const progressBarRef = useRef(null)
  const counterRef = useRef(null)
  const smoothActive = useRef(0)
  const rafId = useRef(null)
  const running = useRef(false)

  const items = Array.isArray(children) ? children : [children]

  const apply = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    const viewH = window.innerHeight
    const trackTop = track.offsetTop
    const trackHeight = track.offsetHeight
    const range = Math.max(1, trackHeight - viewH)
    const scrolled = window.scrollY - trackTop
    const progress = Math.min(1, Math.max(0, scrolled / range))
    const n = cardsRef.current.length
    const activeFloat = progress * (n - 1)

    // lerp 平滑
    smoothActive.current += (activeFloat - smoothActive.current) * smooth

    cardsRef.current.forEach((card, i) => {
      if (!card) return
      const pos = i - smoothActive.current // 0=最前, +=未到(堆叠在后方), -=已过(翻转离场)
      let ty, s, rx, op, bl, z
      if (pos >= 0) {
        // 未到的两张卡分别从主卡顶部、底部露出，形成正反向的 X 轴层叠。
        const behind = pos
        const direction = Math.round(behind) % 2 === 0 ? 1 : -1
        ty = direction * behind * peek
        s = 1 - behind * scaleStep
        rx = direction * behind * 10
        op = 1 - Math.min(0.68, behind * dim)
        bl = 0
        z = 1000 - Math.round(behind)
      } else {
        // 已过的卡片沿 X 轴翻起并快速淡出。
        const t = -pos
        ty = -t * (peek * depth + 28)
        s = 1 - t * scaleStep
        rx = -t * 52
        op = Math.max(0, 1 - t * (dim + 0.52))
        bl = Math.min(10, t * blur)
        z = 900 - Math.round(t * 10)
      }
      if (pos > depth) {
        op = 0
      }
      card.style.transform =
        `translate(-50%, calc(-50% + ${ty.toFixed(2)}px)) ` +
        `scale(${s.toFixed(4)}) rotateX(${rx.toFixed(2)}deg)`
      card.style.opacity = op.toFixed(3)
      card.style.filter = bl > 0.05 ? `blur(${bl.toFixed(2)}px)` : 'none'
      card.style.zIndex = String(z)
    })

    const idx = Math.min(items.length, Math.max(1, Math.round(smoothActive.current) + 1))
    if (counterRef.current)
      counterRef.current.textContent =
        `${String(idx).padStart(2, '0')} / ${String(items.length).padStart(2, '0')}`
    if (progressBarRef.current)
      progressBarRef.current.style.transform = `scaleX(${progress.toFixed(4)})`

    if (Math.abs(activeFloat - smoothActive.current) > 0.0008) {
      rafId.current = requestAnimationFrame(apply)
    } else {
      running.current = false
    }
  }, [items.length, peek, scaleStep, blur, dim, smooth, depth])

  const requestTick = useCallback(() => {
    if (!running.current) {
      running.current = true
      rafId.current = requestAnimationFrame(apply)
    }
  }, [apply])

  useLayoutEffect(() => {
    const track = trackRef.current
    if (!track) return
    const n = items.length
    track.style.height = `${(n * scrollLength * 100).toFixed(0)}vh`
    cardsRef.current = Array.from(track.querySelectorAll('.ss-card'))

    const onScroll = () => requestTick()
    const onResize = () => requestTick()
    let wheelLocked = false
    const onWheel = (event) => {
      if (!snapWheel || Math.abs(event.deltaY) < 6 || wheelLocked) return
      const viewH = window.innerHeight
      const range = Math.max(1, track.offsetHeight - viewH)
      const progress = Math.min(1, Math.max(0, (window.scrollY - track.offsetTop) / range))
      const currentIndex = Math.round(progress * (n - 1))
      const direction = event.deltaY > 0 ? 1 : -1
      const nextIndex = getNextStackIndex(currentIndex, direction, n)
      if (nextIndex === null) return

      event.preventDefault()
      wheelLocked = true
      window.scrollTo({
        top: track.offsetTop + (range * nextIndex) / Math.max(1, n - 1),
        behavior: 'smooth',
      })
      window.setTimeout(() => { wheelLocked = false }, 520)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)
    window.addEventListener('wheel', onWheel, { passive: false })
    requestTick()

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('wheel', onWheel)
      if (rafId.current) cancelAnimationFrame(rafId.current)
      running.current = false
    }
  }, [items.length, scrollLength, requestTick, snapWheel])

  return (
    <div className="scroll-stack" ref={trackRef}>
      <div className="ss-stage" style={{ perspective: `${perspective}px` }}>
        <div className="ss-head">
          {eyebrow && <div className="ss-eyebrow">{eyebrow}</div>}
          {title && <h2 className="ss-title">{title}</h2>}
        </div>

        {items.map((child, i) => (
          <div
            key={i}
            className="ss-card"
            style={{
              width: cardWidth,
              maxWidth: '92vw',
              height: `calc(${cardHeight} * 100vh)`,
              borderRadius: borderRadius,
            }}
          >
            {child}
          </div>
        ))}

        <div className="ss-foot">
          {showCounter && (
            <div className="ss-counter" ref={counterRef}>
              01 / {String(items.length).padStart(2, '0')}
            </div>
          )}
          {showProgress && (
            <div className="ss-progress">
              <div className="ss-progress-bar" ref={progressBarRef} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
