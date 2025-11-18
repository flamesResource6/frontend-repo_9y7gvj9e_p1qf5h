import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'

function Header() {
  const [open, setOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const [archOpen, setArchOpen] = useState(false)

  const navLinkBase = 'px-4 py-2 text-sm font-medium hover:opacity-80 transition-opacity'

  return (
    <header className="w-full h-22 sticky top-0 z-40 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-[#0A0A0F]/70 dark:supports-[backdrop-filter]:bg-[#0A0A0F]/60 border-b border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-[1320px] px-6 flex items-center justify-between h-[88px]">
        {/* Left: Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-[160px] h-10 rounded-md bg-gradient-to-tr from-purple-500 via-blue-500 to-amber-400 text-white grid place-items-center text-sm font-semibold shadow-md">
            Staure
          </div>
        </Link>

        {/* Center: Nav */}
        <nav className="hidden md:flex items-center gap-1 text-[#0C0C0D] dark:text-[#F5F5F6]">
          <div className="relative"
               onMouseEnter={() => setSolutionsOpen(true)}
               onMouseLeave={() => setSolutionsOpen(false)}>
            <button className={`${navLinkBase}`}>Solutions</button>
            {solutionsOpen && (
              <div className="absolute left-0 mt-2 w-64 bg-white dark:bg-[#12121A] border border-black/10 dark:border-white/10 rounded-xl shadow-xl p-2 animate-in">
                <NavLink to="/solutions-business" className={({isActive})=>`block px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 ${isActive?'font-semibold':''}`}>
                  Business Solutions
                </NavLink>
                <NavLink to="/solutions-tech" className={({isActive})=>`block px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 ${isActive?'font-semibold':''}`}>
                  Tech Solutions
                </NavLink>
              </div>
            )}
          </div>

          <div className="relative"
               onMouseEnter={() => setArchOpen(true)}
               onMouseLeave={() => setArchOpen(false)}>
            <button className={`${navLinkBase}`}>Architecture</button>
            {archOpen && (
              <div className="absolute left-0 mt-2 w-64 bg-white dark:bg-[#12121A] border border-black/10 dark:border-white/10 rounded-xl shadow-xl p-2 animate-in">
                <NavLink to="/tech" className={({isActive})=>`block px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 ${isActive?'font-semibold':''}`}>
                  Tech Overview
                </NavLink>
                <NavLink to="/tech/deep-dive" className={({isActive})=>`block px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 ${isActive?'font-semibold':''}`}>
                  Reference Architectures
                </NavLink>
              </div>
            )}
          </div>

          <NavLink to="/method" className={({isActive})=>`${navLinkBase} ${isActive?'font-semibold':''}`}>Method</NavLink>
          <NavLink to="/insights" className={({isActive})=>`${navLinkBase} ${isActive?'font-semibold':''}`}>Insights</NavLink>
          <NavLink to="/about" className={({isActive})=>`${navLinkBase} ${isActive?'font-semibold':''}`}>About Us</NavLink>
        </nav>

        {/* Right: CTA */}
        <div className="flex items-center gap-3">
          <Link to="/contact" className="hidden md:inline-flex h-11 items-center rounded-full px-5 text-sm font-semibold text-white bg-[#0C0C0D] hover:bg-black transition-colors dark:bg-white dark:text-[#0A0A0F] dark:hover:bg-white/90">
            Contact Us
          </Link>
          <button onClick={()=>setOpen(v=>!v)} className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-black/10 dark:border-white/10">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-black/5 dark:border-white/10">
          <div className="mx-auto max-w-[1320px] px-6 py-4 grid gap-2">
            <NavLink to="/solutions-business" onClick={()=>setOpen(false)} className="px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5">Business Solutions</NavLink>
            <NavLink to="/solutions-tech" onClick={()=>setOpen(false)} className="px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5">Tech Solutions</NavLink>
            <NavLink to="/tech" onClick={()=>setOpen(false)} className="px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5">Architecture</NavLink>
            <NavLink to="/method" onClick={()=>setOpen(false)} className="px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5">Method</NavLink>
            <NavLink to="/insights" onClick={()=>setOpen(false)} className="px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5">Insights</NavLink>
            <NavLink to="/about" onClick={()=>setOpen(false)} className="px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5">About Us</NavLink>
            <NavLink to="/contact" onClick={()=>setOpen(false)} className="px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5">Contact Us</NavLink>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
