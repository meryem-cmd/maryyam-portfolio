export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-12 lg:px-10" style={{ backgroundColor: 'rgba(10, 14, 39, 0.8)', borderBottom: '1px solid rgba(0, 217, 255, 0.1)' }}>
      <div
        className="max-w-7xl mx-auto
                   h-20
                   px-8
                   rounded-2xl
                   flex items-center justify-between
                   backdrop-blur-xl
                   border"
        style={{
          background: "rgba(10,14,39,.75)",
          borderColor: "rgba(255,255,255,.08)"
        }}
      >
        {/* Logo */}
        <a href="#hero" className="text-xl font-black tracking-wider cursor-pointer" style={{ color: '#00D9FF' }}>
          Maryyam's Portfolio
        </a>

        {/* Nav Links */}
        <div className="hidden md:flex gap-12">
          <a href="#hero" className="text-gray-300 hover:text-cyan transition font-mono text-base uppercase tracking-wider">Hero</a>
          <a href="#about" className="text-gray-300 hover:text-cyan transition font-mono text-base uppercase tracking-wider">About</a>
          <a href="#projects" className="text-gray-300 hover:text-cyan transition font-mono text-base uppercase tracking-wider">Projects</a>
          <a href="#skills" className="text-gray-300 hover:text-cyan transition font-mono text-base uppercase tracking-wider">Skills</a>
          <a href="#contact" className="text-gray-300 hover:text-cyan transition font-mono text-base uppercase tracking-wider">Contact</a>
        </div>

        {/* Resume Button */}
        <button 
          className="px-7 py-3 rounded-lg font-bold uppercase text-base tracking-wider transition-all duration-300"
          style={{ 
            backgroundColor: '#00D9FF', 
            color: '#0a0e27',
            boxShadow: '0 0 15px rgba(0, 217, 255, 0.3)'
          }}
        >
          ↓ RESUME
        </button>
      </div>
    </nav>
  );
}