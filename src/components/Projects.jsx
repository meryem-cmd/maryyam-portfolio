import { useEffect, useRef, useState } from 'react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

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
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const fade = () =>
    `${visible ? "animate-fade-up" : "opacity-0 translate-y-6"}`;

  const projects = [
    {
      id: 1,
      title: 'Token Bucket Rate Limiter',
      category: 'Backend & Systems',
      featured: true,
      description: 'A standalone API rate-limiting service — same category of problem solved by Stripe, GitHub, and Cloudflare gateways. Built a naive version first to prove a real race condition existed under load, then fixed it with an atomic Redis Lua script.',
      tags: ['Python', 'Django', 'Redis', 'Lua', 'Prometheus', 'Grafana', 'k6'],
      github: 'https://github.com/meryem-cmd/rate-limiter',
      achievements: [
        'Proved a race condition existed (naive: 80 allowed vs a ~35 limit), fixed with an atomic Redis Lua script',
        'Diagnosed 5 real infrastructure bottlenecks one at a time — moving to multi-process workers alone cut median latency 320ms → 43ms (~7x)',
        'Built Prometheus + Grafana dashboards and load-tested with k6, including an honest write-up of the benchmark\'s own limitations'
      ]
    },
    {
      id: 2,
      title: 'AI FitStyler',
      category: 'AI/ML',
     
      description: 'A multi-agent Streamlit app: upload a photo, and computer vision detects body type and skin tone, then a RAG pipeline semantically searches a product catalog for personalized outfit recommendations.',
      tags: ['Python', 'LangChain', 'FAISS', 'MediaPipe', 'OpenCV', 'Streamlit'],
      github: 'https://github.com/meryem-cmd/fitstyler',
      achievements: [
        'Built a RAG pipeline (FAISS + HuggingFace embeddings) for semantic outfit retrieval',
        'Computer-vision body-type & skin-tone detection using MediaPipe + LAB color space',
        'Multi-agent architecture separating analysis, retrieval, and trend-scoring concerns'
      ]
    },
    {
      id: 3,
      title: 'URL Security Scanner',
      category: 'Security',
      description: 'A web tool that runs SQL injection payloads against a submitted URL and returns severity-classified results with a downloadable report — built for an Information Security course.',
      tags: ['Node.js', 'Express', 'Python', 'Vanilla JS', 'MongoDB'],
      github: 'https://github.com/meryem-cmd/url-security-scanner',
      achievements: [
        'Cross-language architecture: Express backend spawns a Python SQLi scanner via child_process',
        'Three-tier severity classification with expandable payloads and a downloadable HTML report',
        'Documents its own weaknesses openly — no auth or rate limiting yet on the scan endpoint'
      ]
    },
    {
      id: 4,
      title: 'Enchanted Trinkets',
      category: 'Full-Stack',
      
      description: 'Full-stack e-commerce platform with role-based dashboards for managers, employees, and customers, plus Cloudinary-powered image workflows.',
      tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Cloudinary', 'JWT'],
      github: 'https://github.com/meryem-cmd/enchanted_trinkets',
      achievements: [
        'Role-based dashboards (Manager, Employee, Customer) with tailored REST API access controls',
        'Cloudinary-based image hosting with a batch-upload workflow',
        'Responsive design across mobile & tablet breakpoints'
      ]
    },
    {
      id: 5,
      title: 'Django Blog App',
      category: 'Full-Stack',
      
      description: 'A full-stack dual-content platform migrating a legacy WordPress blog onto Django + Wagtail CMS, self-deployed to AWS EC2.',
      tags: ['Django', 'Wagtail', 'PostgreSQL', 'AWS EC2', 'Gunicorn', 'Whitenoise'],
      github: 'https://github.com/meryem-cmd/django-blog-app',
      achievements: [
        'Migrated a legacy WordPress blog into a unified Django + Wagtail CMS feed',
        'Implemented user auth, a social follow system, and public/followers-only visibility controls',
        'Self-deployed to AWS EC2 with Gunicorn + Whitenoise'
      ]
    },
    {
      id: 6,
      title: 'Galactic Defender',
      category: 'Game Dev',
      description: 'A Space Invaders-style arcade shooter built from scratch in C++ using the Raylib graphics library, with a persistent high score system.',
      tags: ['C++', 'Raylib', 'Windows'],
      github: 'https://github.com/meryem-cmd/galactic-defender-raylib',
      achievements: [
        'Built the full game loop architecture and collision detection from scratch',
        '3 progressively difficult levels with scaling enemy and projectile speed',
        'Persistent high-score system via file I/O, plus custom textures and sound'
      ]
    }
  ];

  const filters = ['all', 'Backend & Systems', 'AI/ML', 'Security', 'Full-Stack', 'Game Dev'];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="min-h-screen bg-dark flex items-center py-24 relative overflow-hidden"
    >

      {/* Blur blobs to match Hero/About's premium feel */}
      <div className="absolute -top-32 right-0 w-96 h-96 bg-accent/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/10 blur-[120px] rounded-full"></div>

      <div className="max-w-[1400px] mx-auto px-10 lg:px-20 w-full relative z-10">
        
        {/* Section Header */}
        <div className={`mb-16 ${fade()}`} style={{ animationDelay: '0.05s' }}>
          <h2 className="text-5xl md:text-6xl font-black leading-tight mb-8" style={{ color: '#5DCAA5' }}>
            Real-World Projects
          </h2>
          <div className="w-20 h-1 rounded-full" style={{ backgroundColor: '#5DCAA5' }}></div>
        </div>

        {/* Filter Tabs */}
        <div className={`flex flex-wrap gap-3 mb-12 ${fade()}`} style={{ animationDelay: '0.15s' }}>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-lg font-mono text-sm uppercase tracking-wider transition-all duration-300 border`}
              style={{
                backgroundColor: activeFilter === filter ? '#5DCAA5' : 'transparent',
                color: activeFilter === filter ? '#04342C' : '#5DCAA5',
                borderColor: '#5DCAA5',
              }}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className={`grid grid-cols-1 gap-6 ${fade()}`} style={{ animationDelay: '0.3s' }}>
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-xl overflow-hidden backdrop-blur-sm border transition-all duration-300 hover:border-accent"
              style={{
                borderColor: 'rgba(93, 202, 165, 0.3)',
                backgroundColor: 'rgba(26, 31, 58, 0.6)',
              }}
            >
              {/* Hover Glow Effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'radial-gradient(circle at center, rgba(93, 202, 165, 0.1), transparent)',
                  pointerEvents: 'none'
                }}
              ></div>

              {/* Content */}
              <div className="p-8 flex flex-col lg:flex-row gap-8 relative z-10">

                {/* Left - main content */}
                <div className="flex-1 min-w-0">
                  {/* Category Badge */}
                  <div className="flex items-center gap-2 flex-wrap mb-4">
                    <span 
                      className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: 'rgba(93, 202, 165, 0.2)',
                        color: '#5DCAA5'
                      }}
                    >
                      {project.category}
                    </span>
                    {project.featured && (
                      <span 
                        className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full"
                        style={{
                          backgroundColor: '#5DCAA5',
                          color: '#04342C'
                        }}
                      >
                        ★ Featured
                      </span>
                    )}
                    {project.note && (
                      <span className="text-xs text-gray-500 font-mono">{project.note}</span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-black text-white mb-3">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-2">
                    {project.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex gap-2 text-xs text-gray-400">
                        <span className="text-accent mt-1">→</span>
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right - tech stack + button sidebar */}
                <div className="lg:w-64 shrink-0 flex flex-col justify-between lg:border-l lg:pl-8 border-accent/20 pt-6 lg:pt-0 mt-6 lg:mt-0 border-t lg:border-t-0">
                  <div className="mb-6">
                    <p className="text-accent text-xs font-mono uppercase tracking-wider mb-3">Tech Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-lg text-xs font-mono"
                          style={{
                            backgroundColor: 'rgba(93, 202, 165, 0.1)',
                            color: '#5DCAA5',
                            border: '1px solid rgba(93, 202, 165, 0.3)'
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg font-bold uppercase text-xs tracking-wider transition-all duration-300 text-center"
                    style={{
                      backgroundColor: 'rgba(93, 202, 165, 0.1)',
                      color: '#5DCAA5',
                      border: '1px solid rgba(93, 202, 165, 0.3)'
                    }}
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`mt-20 text-center ${fade()}`} style={{ animationDelay: '0.45s' }}>
          <p className="text-gray-400 mb-6">Want to see more?</p>
          <a
            href="https://github.com/meryem-cmd/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-lg font-bold uppercase text-sm tracking-wider transition-all duration-300"
            style={{
              backgroundColor: 'transparent',
              border: '2px solid #5DCAA5',
              color: '#5DCAA5'
            }}
          >
            Visit GitHub Profile →
          </a>
        </div>
      </div>
    </section>
  );
}
