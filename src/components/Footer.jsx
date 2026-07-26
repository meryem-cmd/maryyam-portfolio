import { useEffect, useRef, useState } from 'react';

export default function Footer() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // Intersection Observer for scroll animation
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Fade-in animation helper
  const fadeIn = (delay) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(20px)',
    transition: `all 0.6s ease-out ${delay}s`,
  });

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navLinks = [
    { label: 'Hero', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { 
      name: 'GitHub',
      url: 'https://github.com/meryem-cmd',
      
    },
    { 
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/maryyam-tanveer',
      
    },
  ];

  return (
    <footer
      ref={sectionRef}
      id="footer"
      className="bg-dark border-t"
      style={{ borderColor: 'rgba(0, 217, 255, 0.1)' }}
    >
      <div className="max-w-7xl mx-auto px-6 py-20">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Section */}
          <div style={fadeIn(0.1)}>
            <a href="#hero" className="text-2xl font-black tracking-wider cursor-pointer" style={{ color: '#00D9FF' }}>
              Maryyam
            </a>
            <p className="text-gray-400 text-sm mt-4 leading-relaxed">
              Building intelligent systems with React, Django, and AI/ML pipelines.
            </p>
          </div>

          {/* Navigation Links */}
          <div style={fadeIn(0.15)}>
            <nav className="space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-gray-400 hover:text-cyan transition font-mono text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div style={fadeIn(0.2)}>
            <div className="space-y-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-cyan transition group"
                >
                  <span className="text-xl">{social.icon}</span>
                  <span className="font-mono text-sm">{social.name}</span>
                  <span className="text-cyan opacity-0 group-hover:opacity-100 transition">→</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Info */}
          <div style={fadeIn(0.25)}>
            <p className="text-cyan text-sm font-mono uppercase tracking-widest mb-6">Info</p>
            <div className="space-y-3 text-sm text-gray-400 font-mono">
              <p>📍 Lahore, Pakistan</p>
              <p>✉️ maryyam.tanveer@gmail.com</p>
              
            </div>
          </div>
        </div>

        {/* Divider */}
        <div 
          className="my-8"
          style={{ borderTop: '1px solid rgba(0, 217, 255, 0.1)' }}
        ></div>

        {/* Bottom Footer */}
        <div style={fadeIn(0.3)} className="flex flex-col sm:flex-row justify-between items-center gap-6">

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="px-6 py-2 rounded-lg font-bold uppercase text-sm tracking-wider transition-all duration-300 border flex items-center gap-2"
            style={{
              borderColor: '#00D9FF',
              color: '#00D9FF',
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'rgba(0, 217, 255, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
            }}
          >
            <span>↑ Back to Top</span>
          </button>
          
          {/* Copyright */}
          <p className="text-gray-500 text-sm font-mono">
            © 2026 Maryyam Tanveer. All rights reserved.
          </p>

          

          {/* Status */}
          <div className="text-sm font-mono font-bold uppercase tracking-wider" style={{ color: '#00D9FF' }}>
  <span 
    className="inline-block w-2 h-2 rounded-full mr-2"
    style={{ backgroundColor: '#00D9FF', animation: 'pulse 2s infinite' }}
  ></span>
  Open to opportunities
</div>
        </div>
      </div>

      {/* Add pulse animation */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </footer>
  );
}