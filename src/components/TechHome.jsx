import { ArrowRight } from 'lucide-react'

function PainCard({ title, body }) {
  return (
    <div className="rounded-2xl p-6 bg-[#0f1126] border border-[#2A2A37] shadow-[0_10px_40px_rgba(0,0,0,0.45)] relative overflow-hidden">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-violet-500 via-fuchsia-500 to-teal-400" />
      <h4 className="text-xl font-semibold mb-2 text-white">{title}</h4>
      <p className="text-sm text-white/70">{body}</p>
    </div>
  )
}

function StepCard({ title }) {
  return (
    <div className="rounded-2xl p-6 bg-[#0c0f20] border border-[#2A2A37] text-white min-h-[160px]">
      <h5 className="font-semibold">{title}</h5>
      <a href="#" className="mt-8 inline-flex items-center gap-2 text-teal-300">Explore <ArrowRight className="w-4 h-4"/></a>
    </div>
  )
}

function TechHome() {
  return (
    <div className="bg-[#0A0A0F] text-white">
      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0 -z-10" style={{backgroundImage:'radial-gradient(600px_240px_at_20%_20%,rgba(139,92,246,.25),transparent_60%), radial-gradient(400px_200px_at_80%_30%,rgba(20,184,166,.25),transparent_60%)'}} />
        <div className="mx-auto max-w-[1320px] px-6 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Reference architectures for real systems</h1>
            <p className="mt-6 text-xl text-white/70 max-w-[52ch]">Composable blueprints for RAG, agents, integrations, observability and secure deployment.</p>
            <div className="mt-10 flex gap-3">
              <a href="#" className="h-14 inline-flex items-center rounded-full px-6 border border-teal-300/60 font-semibold hover:bg-white/10">Book Technical Audit</a>
            </div>
          </div>
          <div className="h-[420px] rounded-2xl border border-violet-600/30 bg-gradient-to-br from-violet-600/15 to-teal-400/15" />
        </div>
      </section>

      {/* Technical Pain Points */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1320px] px-6 grid md:grid-cols-3 gap-6">
          <PainCard title="Fragmented knowledge" body="Docs and data scattered—build a solid retrieval layer with governance." />
          <PainCard title="Agents without guardrails" body="Move from demos to production with scopes, policies and observability." />
          <PainCard title="Delivery friction" body="Pipelines, CI, infra and security that keep up with iteration speed." />
        </div>
      </section>

      {/* Technical Process */}
      <section className="py-10 md:py-16">
        <div className="mx-auto max-w-[1320px] px-6 grid md:grid-cols-4 gap-6">
          <StepCard title="Discovery & Architecture" />
          <StepCard title="Pilot & Evaluation" />
          <StepCard title="Implementation" />
          <StepCard title="Run & Optimize" />
        </div>
      </section>

      {/* Dark CTA */}
      <section className="py-20 bg-gradient-to-b from-[#0e1021] to-[#0a0d1a]">
        <div className="mx-auto max-w-[960px] px-6 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold">Talk to engineers</h3>
          <p className="mt-3 text-white/70">Bring your constraints, we bring the patterns.</p>
          <a href="#" className="mt-6 inline-flex h-12 items-center rounded-full px-6 border border-teal-300/60 font-semibold hover:bg-white/10">Book a session</a>
        </div>
      </section>
    </div>
  )
}

export default TechHome
