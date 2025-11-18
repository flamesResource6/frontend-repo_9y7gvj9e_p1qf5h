import { CheckCircle2, Shield, Workflow, FileText, Users, Building2, Scale, Banknote, Lock } from 'lucide-react'

function Section({ title, subtitle, children, dark=false }){
  return (
    <section className={`${dark ? 'bg-[#0A0A0F] text-white' : 'bg-white text-[#0C0C0D]'} py-16 md:py-24`}>
      <div className="mx-auto max-w-[1320px] px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
          {subtitle && <p className={`mt-3 ${dark? 'text-white/70':'text-black/70'}`}>{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  )
}

function Chip({ children }){
  return <span className="inline-flex items-center h-8 px-3 rounded-full bg-violet-600/10 text-violet-700 dark:text-teal-300 dark:bg-teal-400/10 text-sm mr-2 mb-2">{children}</span>
}

export function HR(){
  return (
    <div className="bg-gradient-to-b from-white to-[#F8F9FB]">
      <Section title="HR Automation" subtitle="Hire faster, onboard smoothly, support employees at scale.">
        <div className="grid md:grid-cols-3 gap-6">
          <Card icon={Users} title="Recruiting copilots" desc="JD parsing, resume screening, interview assist, scorecards." />
          <Card icon={FileText} title="Onboarding & docs" desc="Policy Q&A, contract generation, verification flows." />
          <Card icon={Workflow} title="HR ops automations" desc="Ticket routing, knowledge, approvals, payroll checks." />
        </div>
      </Section>
      <Section title="Compliance first" subtitle="PII handling, role-based access, audit trails.">
        <div className="flex flex-wrap">
          <Chip>GDPR</Chip><Chip>DSAR</Chip><Chip>SOC2</Chip><Chip>Access Controls</Chip>
        </div>
      </Section>
    </div>
  )
}

export function Insurance(){
  return (
    <div className="bg-gradient-to-b from-white to-[#F8F9FB]">
      <Section title="Insurance Automation" subtitle="Quote to claim with AI assistance and guardrails.">
        <div className="grid md:grid-cols-3 gap-6">
          <Card icon={Shield} title="Underwriting" desc="Submission triage, document intake, risk summaries." />
          <Card icon={FileText} title="Claims" desc="FNOL, evidence extraction, adjudication assist." />
          <Card icon={Building2} title="Broker enablement" desc="Knowledge copilots, proposal generation, pricing checks." />
        </div>
      </Section>
    </div>
  )
}

export function Law(){
  return (
    <div className="bg-gradient-to-b from-white to-[#F8F9FB]">
      <Section title="Legal Automation" subtitle="Draft faster with control and provenance.">
        <div className="grid md:grid-cols-3 gap-6">
          <Card icon={Scale} title="Contracting" desc="Clause extraction, review assistant, redline suggestions." />
          <Card icon={FileText} title="Research" desc="Case retrieval, memo drafting with citations." />
          <Card icon={Lock} title="Governance" desc="Policy bots, approvals, secure sharing." />
        </div>
      </Section>
    </div>
  )
}

export function RAG(){
  return <TechCategory title="RAG" bullets={["Chunking & embeddings","Hybrid search","Evaluation & feedback","Citations & provenance"]} />
}
export function Agents(){
  return <TechCategory title="Agents & Orchestration" bullets={["Tools & function-calling","Workflows & memory","Policies & scopes","Tracing & eval"]} />
}
export function MLOps(){
  return <TechCategory title="MLOps & Observability" bullets={["Pipelines","Model registry","Data drift","Dashboards & alerts"]} />
}
export function Security(){
  return <TechCategory title="Security & Compliance" bullets={["PII protection","RBAC","Secrets & keys","Audit trails"]} />
}

function TechCategory({ title, bullets }){
  return (
    <div className="bg-[#0A0A0F] text-white">
      <Section title={title} subtitle="Reference patterns and components" dark>
        <ul className="grid md:grid-cols-2 gap-4 list-disc pl-6">
          {bullets.map((b)=> <li key={b} className="text-white/80">{b}</li>)}
        </ul>
      </Section>
    </div>
  )
}

function Card({ icon: Icon, title, desc }){
  return (
    <div className="rounded-2xl border border-black/10 bg-white shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600/10 to-teal-400/10 text-violet-700 grid place-items-center mb-4">
        <Icon className="w-6 h-6" />
      </div>
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <p className="text-sm text-black/70 flex-1">{desc}</p>
    </div>
  )}

export default function Placeholder(){
  return null
}
