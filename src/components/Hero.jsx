const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.24.72-1.53-2.56-.29-5.25-1.28-5.25-5.69 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.09 0 4.42-2.7 5.39-5.27 5.68.42.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .3.2.66.79.55A10.52 10.52 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5Z" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
  </svg>
);

export default function Hero() {
  return (
    <section id="hero" className="min-h-[95vh] bg-gradient-to-b from-dark via-dark to-dark/95 flex items-center justify-center pt-28 sm:pt-32 pb-16 relative overflow-hidden">

      {/* Blur blobs for premium/modern feel */}
      <div className="absolute -top-32 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-accent/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-56 h-56 sm:w-80 sm:h-80 bg-purple-500/10 blur-[120px] rounded-full"></div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full relative z-10">

        {/* Left Side - Text Content */}
        <div className="space-y-5 sm:space-y-6 z-10">

          {/* Availability badge */}
          <div className="flex items-center gap-2 animate-fade-up" style={{ animationDelay: '0.05s' }}>
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#5DCAA5' }}></span>
            <span className="text-sm font-mono uppercase tracking-wider" style={{ color: '#5DCAA5' }}>
              Available for work
            </span>
          </div>

          {/* Main Heading */}
          <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white break-words">
              Hi, I'm <span style={{ color: '#5DCAA5' }}>Maryyam Tanveer</span>.
            </h1>
            <p className="flex items-center gap-2 text-gray-400 text-lg sm:text-xl font-medium mt-3">
              <span style={{ color: '#5DCAA5' }}>&gt;</span> Full-Stack Developer & AI/ML Integrations
            </p>
          </div>

          {/* Description */}
          <p className="text-gray-300 text-base sm:text-lg leading-7 sm:leading-8 max-w-xl animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Final-year CS student at PUCIT building full-stack Django, React, and MERN applications, AI/ML integrations, and cloud-deployed systems — from database design to deployment.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-2 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <a
              href="#projects"
              className="w-full sm:w-auto text-center px-6 py-3 rounded-lg font-bold text-sm transition-all duration-300"
              style={{
                backgroundColor: '#5DCAA5',
                color: '#04342C',
              }}
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto text-center px-6 py-3 rounded-lg font-bold text-sm border transition-all duration-300 hover:bg-accent/10"
              style={{
                borderColor: 'rgba(93, 202, 165, 0.4)',
                color: '#5DCAA5'
              }}
            >
              Get in Touch
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4 pt-1 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <a
              href="https://github.com/meryem-cmd"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 rounded-lg border flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
              style={{ borderColor: 'rgba(93, 202, 165, 0.3)', color: '#5DCAA5' }}
            >
              <GithubIcon className="w-[18px] h-[18px]" />
            </a>
            <a
              href="https://linkedin.com/in/maryyam-tanveer"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-lg border flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
              style={{ borderColor: 'rgba(93, 202, 165, 0.3)', color: '#5DCAA5' }}
            >
              <LinkedinIcon className="w-[18px] h-[18px]" />
            </a>
          </div>
        </div>

        {/* Right Side - Visual (hidden below lg, unchanged above) */}
        <div className="hidden lg:flex items-center justify-center relative h-96 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <div className="absolute inset-0">
            {/* Large background circles */}
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              style={{
                width: '400px',
                height: '400px',
                borderRadius: '50%',
                border: '1px solid rgba(93, 202, 165, 0.1)',
              }}
            ></div>
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              style={{
                width: '300px',
                height: '300px',
                borderRadius: '50%',
                border: '1px solid rgba(93, 202, 165, 0.2)',
              }}
            ></div>
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              style={{
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                border: '2px solid rgba(93, 202, 165, 0.3)',
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
                background: 'radial-gradient(circle, rgba(93, 202, 165, 0.3), transparent)',
                filter: 'blur(40px)',
              }}
            ></div>

            {/* Orbiting dots - 6 total */}
            <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full" style={{ backgroundColor: '#EC4899' }}></div>
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full" style={{ backgroundColor: '#60A5FA' }}></div>
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-4 h-4 rounded-full" style={{ backgroundColor: '#34D399' }}></div>
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-4 h-4 rounded-full" style={{ backgroundColor: '#A78BFA' }}></div>
            <div className="absolute w-3 h-3 rounded-full" style={{ backgroundColor: '#5DCAA5', top: '15%', right: '12%' }}></div>
            <div className="absolute w-3 h-3 rounded-full" style={{ backgroundColor: '#5DCAA5', bottom: '15%', left: '12%' }}></div>
          </div>
        </div>
      </div>

    </section>
  );
}