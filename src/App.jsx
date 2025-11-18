import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import { SplitLanding, BusinessHome, TechHome } from './components/Pages'

function App() {
  return (
    <div className="min-h-screen bg-white text-[#0C0C0D]">
      <Header />
      <Routes>
        <Route index element={<SplitLanding />} />
        <Route path="business" element={<BusinessHome />} />
        <Route path="tech" element={<TechHome />} />
      </Routes>
    </div>
  )
}

export default App
