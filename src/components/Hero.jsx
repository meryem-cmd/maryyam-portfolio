export default function Hero() {
  return (
    <section id="hero" className="min-h-[90vh] bg-gradient-to-b from-dark via-dark to-dark/95 flex items-center justify-center pt-24 relative overflow-hidden">
      
      {/* Blur blobs for premium/modern feel */}
      <div className="absolute -top-32 right-0 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/10 blur-[120px] rounded-full"></div>

      <div className="max-w-[1400px] mx-auto px-10 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full relative z-10">
        
        {/* Left Side - Text Content */}
        <div className="space-y-6 z-10">

          {/* Main Heading */}
          <div className="animate-fade-up" style={{ animationDelay: '0.05s' }}>
            <span style={{ color: '#00D9FF' }} className="block text-glow font-extrabold text-lg md:text-xl tracking-wider mb-2">
                MARYYAM TANVEER
              </span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white mb-4">
              Full-Stack &{' '}
              <span style={{ color: '#00D9FF' }} className="block text-glow">
                AI Engineer
              </span>
            </h2>
          </div>

          {/* Description */}
          <p className="text-gray-300 text-lg leading-8 max-w-xl animate-fade-up" style={{ animationDelay: '0.2s' }}>
            I build intelligent systems with React, Django, and AI/ML pipelines. 
            Specialized in RAG systems, agentic workflows, and production deployments on AWS.
          </p>

          {/* Stats */}
          <div className="flex gap-16 mt-6 animate-fade-up" style={{ animationDelay: '0.35s' }}>
            <div>
              <div className="text-3xl font-black" style={{ color: '#00D9FF' }}>3+</div>
              <div className="text-gray-500 text-xs font-mono tracking-wider uppercase">Projects</div>
            </div>
            <div>
              <div className="text-3xl font-black" style={{ color: '#00D9FF' }}>2+</div>
              <div className="text-gray-500 text-xs font-mono tracking-wider uppercase">Internships</div>
            </div>
            <div>
              <div className="text-3xl font-black" style={{ color: '#00D9FF' }}>∞</div>
              <div className="text-gray-500 text-xs font-mono tracking-wider uppercase">Learning</div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-4 animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <a 
              href="#projects"
              className="px-7 py-4 rounded-xl font-bold uppercase text-sm tracking-wider transition-all duration-300"
              style={{ 
                backgroundColor: '#00D9FF', 
                color: '#0a0e27',
                boxShadow: '0 0 20px rgba(0, 217, 255, 0.3)'
              }}
            >
              View my Work
            </a>
            <a 
              href="#contact"
              className="px-7 py-4 rounded-xl font-bold uppercase text-sm tracking-wider border-2 transition-all duration-300 hover:bg-cyan/10 hover:border-cyan"
              style={{ 
                borderColor: '#00D9FF',
                color: '#00D9FF'
              }}
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Right Side - Visual */}
        <div className="hidden lg:flex items-center justify-center relative h-96 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <div className="absolute inset-0">
            {/* Large background circles */}
            <div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              style={{
                width: '400px',
                height: '400px',
                borderRadius: '50%',
                border: '1px solid rgba(0, 217, 255, 0.1)',
              }}
            ></div>
            <div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              style={{
                width: '300px',
                height: '300px',
                borderRadius: '50%',
                border: '1px solid rgba(0, 217, 255, 0.2)',
              }}
            ></div>
            <div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              style={{
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                border: '2px solid rgba(0, 217, 255, 0.3)',
              }}
            ></div>

            {/* Thin connecting lines between orbit dots and center */}
            <svg
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              width="400"
              height="400"
              viewBox="0 0 400 400"
              style={{ overflow: 'visible' }}
            >
              <line x1="200" y1="200" x2="200" y2="10" stroke="rgba(236,72,153,0.25)" strokeWidth="1" />
              <line x1="200" y1="200" x2="200" y2="390" stroke="rgba(96,165,250,0.25)" strokeWidth="1" />
              <line x1="200" y1="200" x2="10" y2="200" stroke="rgba(52,211,153,0.25)" strokeWidth="1" />
              <line x1="200" y1="200" x2="390" y2="200" stroke="rgba(167,139,250,0.25)" strokeWidth="1" />
              <line x1="200" y1="200" x2="335" y2="65" stroke="rgba(0,217,255,0.2)" strokeWidth="1" />
              <line x1="200" y1="200" x2="65" y2="335" stroke="rgba(0,217,255,0.2)" strokeWidth="1" />
            </svg>

            {/* Center glow - reduced from 120px to 90px */}
            <div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              style={{
                width: '90px',
                height: '90px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(0, 217, 255, 0.3), transparent)',
                filter: 'blur(40px)',
              }}
            ></div>

            {/* Orbiting dots - 6 total */}
            <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full" style={{ backgroundColor: '#EC4899' }}></div>
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full" style={{ backgroundColor: '#60A5FA' }}></div>
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-4 h-4 rounded-full" style={{ backgroundColor: '#34D399' }}></div>
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-4 h-4 rounded-full" style={{ backgroundColor: '#A78BFA' }}></div>
            <div className="absolute w-3 h-3 rounded-full" style={{ backgroundColor: '#00D9FF', top: '15%', right: '12%' }}></div>
            <div className="absolute w-3 h-3 rounded-full" style={{ backgroundColor: '#00D9FF', bottom: '15%', left: '12%' }}></div>
          </div>
        </div>
      </div>

    </section>
  );
}