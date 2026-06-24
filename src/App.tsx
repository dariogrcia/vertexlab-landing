import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Nav from './components/Nav'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import TechStack from './components/TechStack'
import Process from './components/Process'
import Contact from './components/Contact'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  // useLayoutEffect ejecuta GSAP antes del primer pintado → previene FOUC,
  // igual que el <script> al final del HTML original.
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      /* ===== FOUC PREVENTION: set initial states before any animation ===== */
      gsap.set(['.hero-badge', '.hero-left h1', '.hero-subtitle', '.hero-btns', '.terminal', '.scroll-down'], {
        opacity: 0,
        y: 30,
      })

      gsap.set('.feature-card', { opacity: 0, y: 55, rotateX: 18 })
      gsap.set('.dev-card', { opacity: 0, y: 40 })
      gsap.set('.p-step', { opacity: 0, y: 40 })
      gsap.set('.sbadge', { opacity: 0, scale: 0.85 })
      gsap.set('.contact-inner', { opacity: 0, y: 40 })

      /* ===== HERO ENTRANCE (timeline) ===== */
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.to('.hero-badge', { opacity: 1, y: 0, duration: 0.6 })
        .to('.hero-left h1', { opacity: 1, y: 0, duration: 0.8 }, '-=0.3')
        .to('.hero-subtitle', { opacity: 1, y: 0, duration: 0.6 }, '-=0.5')
        .to('.hero-btns', { opacity: 1, y: 0, duration: 0.5 }, '-=0.3')
        .to('.terminal', { opacity: 1, y: 0, duration: 0.7 }, '-=0.4')
        .to('.scroll-down', { opacity: 1, y: 0, duration: 0.4 }, '-=0.2')

      /* ===== SCROLL-TRIGGERED: feature cards ===== */
      ScrollTrigger.batch('.feature-card', {
        start: 'top 82%',
        onEnter: (batch) => gsap.to(batch, {
          opacity: 1, y: 0, rotateX: 0,
          duration: 0.8, stagger: 0.12, ease: 'power2.out',
        }),
      })

      /* ===== SCROLL-TRIGGERED: dev cards ===== */
      ScrollTrigger.batch('.dev-card', {
        start: 'top 85%',
        onEnter: (batch) => gsap.to(batch, {
          opacity: 1, y: 0,
          duration: 0.7, stagger: 0.14, ease: 'power2.out',
        }),
      })

      /* ===== SCROLL-TRIGGERED: process steps ===== */
      ScrollTrigger.batch('.p-step', {
        start: 'top 85%',
        onEnter: (batch) => gsap.to(batch, {
          opacity: 1, y: 0,
          duration: 0.7, stagger: 0.14, ease: 'power2.out',
        }),
      })

      /* ===== SCROLL-TRIGGERED: stack badges ===== */
      ScrollTrigger.batch('.sbadge', {
        start: 'top 90%',
        onEnter: (batch) => gsap.to(batch, {
          opacity: 1, scale: 1,
          duration: 0.45, stagger: 0.04, ease: 'back.out(1.4)',
        }),
      })

      /* ===== SCROLL-TRIGGERED: contact block ===== */
      ScrollTrigger.create({
        trigger: '#contacto',
        start: 'top 75%',
        onEnter: () => gsap.to('.contact-inner', { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }),
      })

      /* ===== SECTION HEADERS ===== */
      gsap.utils.toArray<HTMLElement>('.section-header').forEach((el) => {
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: 'top 82%' },
          opacity: 0, y: 28, duration: 0.65, ease: 'power2.out',
        })
      })
    })

    /* ===== MOUSE PARALLAX ===== */
    const hero = document.querySelector<HTMLElement>('.hero')
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2
      const y = (e.clientY / window.innerHeight - 0.5) * 2
      gsap.to('.hero-shapes-back', { x: x * 45, y: y * 22, duration: 0.8 })
      gsap.to('.hero-shapes-mid', { x: x * 22, y: y * 11, duration: 0.8 })
      gsap.to('.hero-content', { x: x * 6, y: y * 4, duration: 0.8 })
    }
    hero?.addEventListener('mousemove', onMove)

    return () => {
      hero?.removeEventListener('mousemove', onMove)
      ctx.revert()
    }
  }, [])

  return (
    <>
      <Nav />
      <Hero />
      <Services />
      <About />
      <TechStack />
      <Process />
      <Contact />
      <Footer />
    </>
  )
}
