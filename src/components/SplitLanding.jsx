import Spline from '@splinetool/react-spline'
import { Link } from 'react-router-dom'

function SplitLanding() {
  return (
    <section className="relative min-h-[calc(100vh-88px)] grid md:grid-cols-2">
      {/* Business Side */}
      <div className="relative bg-gradient-to-b from-white to-[#F3F4F6] text-[#0C0C0D]">
        <div className="absolute inset-0 pointer-events-none" style={{background:"radial-gradient(600px 600px at 20% 20%, rgba(139,92,246,0.12), transparent 60%)"}} />
        <div className="mx-auto max-w-[660px] px-8 py-20 md:py-28">
          <h1 className="text-5xl md:text-[56px] leading-[1.1] font-semibold tracking-tight">Automation that speaks the language of business</h1>
          <p className="mt-6 text-[20px] text-black/70">We design, pilot and implement AI systems that drive measurable impact across your operations.</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/business" className="h-14 inline-flex items-center rounded-full px-6 bg-gradient-to-r from-violet-600 to-teal-400 text-white font-semibold hover:opacity-90 transition-opacity">Explore Business</Link>
            <Link to="/contact" className="h-14 inline-flex items-center rounded-full px-6 border border-violet-600/30 text-[#0C0C0D] font-semibold hover:bg-violet-50">Book AI Audit</Link>
          </div>
        </div>
        {/* Subtle orb */}
        <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full blur-3xl opacity-30" style={{background:"radial-gradient(circle at 50% 50%, #8b5cf6, #14b8a6, transparent 70%)"}} />
      </div>

      {/* Tech Side */}
      <div className="relative bg-[linear-gradient(180deg,#0A0A0F, #0e1021)] text-white overflow-hidden">
        <div className="mx-auto max-w-[660px] px-8 py-20 md:py-28 relative z-10">
          <h2 className="text-5xl md:text-[56px] leading-[1.1] font-semibold">Engineering that scales with your ambition</h2>
          <p className="mt-6 text-[20px] text-[#D0D0D2]">From RAG and agents to MLOps and security—our reference architectures accelerate delivery.</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/tech" className="h-14 inline-flex items-center rounded-full px-6 border border-teal-300/60 text-white font-semibold hover:bg-white/5">Explore Tech</Link>
            <Link to="/contact" className="h-14 inline-flex items-center rounded-full px-6 bg-gradient-to-r from-violet-600 to-teal-400 text-white font-semibold hover:opacity-90">Book Technical Audit</Link>
          </div>
        </div>
        {/* 3D Mesh / Spline */}
        <div className="absolute inset-0 opacity-80">
          <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        {/* Neon grid overlay for techy vibe */}
        <div className="pointer-events-none absolute inset-0 opacity-20" style={{backgroundImage:'linear-gradient(rgba(20,184,166,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.25) 1px, transparent 1px)', backgroundSize:'36px 36px', backgroundPosition:'center'}} />
        {/* Gradient edges for readability */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-transparent to-[#0A0A0F]/60" />
      </div>
    </section>
  )
}

export default SplitLanding
