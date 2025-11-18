import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import { SplitLanding, BusinessHome, TechHome } from './components/Pages'
import { HR, Insurance, Law, RAG, Agents, MLOps, Security } from './components/Solutions'

function App() {
  return (
    <div className="min-h-screen bg-white text-[#0C0C0D]">
      <Header />
      <Routes>
        <Route index element={<SplitLanding />} />
        {/* Home pages */}
        <Route path="business" element={<BusinessHome />} />
        <Route path="tech" element={<TechHome />} />
        {/* Business solutions */}
        <Route path="solutions/hr" element={<HR />} />
        <Route path="solutions/insurance" element={<Insurance />} />
        <Route path="solutions/law" element={<Law />} />
        {/* Tech architecture categories */}
        <Route path="architecture/rag" element={<RAG />} />
        <Route path="architecture/agents" element={<Agents />} />
        <Route path="architecture/mlops" element={<MLOps />} />
        <Route path="architecture/security" element={<Security />} />
      </Routes>
    </div>
  )
}

export default App
