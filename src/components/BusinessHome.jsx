import { ArrowRight, Shield, FileSearch, BadgeCheck, LineChart, Workflow, BookOpenText } from 'lucide-react'

function Card({ icon: Icon, title, desc, link }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/10 to-blue-500/10 text-indigo-600 grid place-items-center mb-4">
        <Icon className="w-6 h-6" />
      </div>
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <p className="text-sm text-black/70 flex-1">{desc}</p>
      <a href="#" className="mt-4 inline-flex items-center gap-2 text-indigo-600 font-medium">Learn more <ArrowRight className="w-4 h-4" /></a>
    </div>
  )}

function Step({ icon: Icon, title, cta }) {
  return (
    <div className="w-[280px] h-[280px] rounded-2xl border border-black/10 bg-white shadow-sm p-6 flex flex-col">
      <div className="w-10 h-10 rounded-lg bg-black/5 grid place-items-center mb-4">
        <Icon className="w-5 h-5" />
      </div>
      <h5 className="text-base font-semibold">{title}</h5>
      <a className="mt-auto text-sm text-indigo-600 inline-flex items-center gap-1" href="#">{cta} <ArrowRight className="w-4 h-4"/></a>
    </div>
  )}

function BusinessHome() {
  return (
    <div className="bg-gradient-to-b from-white to-[#F8F9FB] text-[#0C0C0D]">
      {/* Hero */}
      <section className="relative">
        <div className="mx-auto max-w-[1320px] px-6 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">AI that moves the numbers</h1>
            <p className="mt-6 text-xl text-black/70 max-w-[52ch]">We align automation to business outcomes—faster cycles, lower cost-to-serve, and better decisions.</p>
            <div className="mt-10 flex gap-3">
              <a href="#" className="h-14 inline-flex items-center rounded-full px-6 bg-[#0C0C0D] text-white font-semibold hover:bg-black">Book AI Audit</a>
              <a href="#" className="h-14 inline-flex items-center rounded-full px-6 border border-black/10 font-semibold hover:bg-black/5">See Case Studies</a>
            </div>
          </div>
          <div className="h-[420px] rounded-2xl bg-[radial-gradient(400px_240px_at_60%_50%,rgba(99,102,241,.25),transparent_60%)] border border-black/10" />
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1320px] px-6 grid md:grid-cols-3 gap-6">
          <Card icon={FileSearch} title="Document Intelligence" desc="Ingest, classify, and extract from complex documents with validation loops." />
          <Card icon={Workflow} title="Process Automation" desc="Automate repetitive knowledge work with agentic workflows and guardrails." />
          <Card icon={LineChart} title="Decision Support" desc="Give teams curated knowledge and analytic copilots embedded in their tools." />
        </div>
      </section>

      {/* How We Work */}
      <section className="py-10 md:py-16">
        <div className="mx-auto max-w-[1320px] px-6 overflow-x-auto">
          <div className="min-w-max flex gap-6">
            <Step icon={FileSearch} title="Audit" cta="What we look at" />
            <Step icon={Workflow} title="Pilot" cta="Pilot formats" />
            <Step icon={BadgeCheck} title="Implementation" cta="Delivery model" />
            <Step icon={Shield} title="Optimization" cta="Guardrails & metrics" />
          </div>
        </div>
      </section>

      {/* CTA Full Width */}
      <section className="py-20 bg-[#F5F6F9]">
        <div className="mx-auto max-w-[960px] px-6 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold">Start with a focused AI audit</h3>
          <p className="mt-3 text-black/70">Map high-ROI use cases, data readiness, and quick wins in two weeks.</p>
          <a href="#" className="mt-6 inline-flex h-12 items-center rounded-full px-6 bg-[#0C0C0D] text-white font-semibold hover:bg-black">Book now</a>
        </div>
      </section>

      {/* Data Protection */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1320px] px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h4 className="text-2xl font-semibold mb-3">Data protection by design</h4>
            <p className="text-black/70">We bake in privacy and compliance—GDPR, AI Act readiness, and secure-by-default patterns across pipelines and agents.</p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="rounded-2xl border border-black/10 p-6 text-center">
              <Shield className="w-10 h-10 mx-auto mb-2" />
              <p className="text-sm font-medium">Security</p>
            </div>
            <div className="rounded-2xl border border-black/10 p-6 text-center">
              <BookOpenText className="w-10 h-10 mx-auto mb-2" />
              <p className="text-sm font-medium">GDPR</p>
            </div>
            <div className="rounded-2xl border border-black/10 p-6 text-center">
              <BadgeCheck className="w-10 h-10 mx-auto mb-2" />
              <p className="text-sm font-medium">AI Act</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BusinessHome
