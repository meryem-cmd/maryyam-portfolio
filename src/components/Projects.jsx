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
      title: 'AI FitStyler',
      category: 'AI/ML',
      description: 'AI-powered fashion recommendation system using RAG pipelines and semantic search. Built an interactive Streamlit UI with multi-agent outfit generation and trend analysis.',
      tags: ['Python', 'FAISS', 'LangChain', 'MediaPipe', 'OpenCV', 'Streamlit'],
      github: 'https://github.com/meryem-cmd/fitstyler',
      
      achievements: [
        'Built RAG pipeline with embeddings-based semantic retrieval',
        'Integrated multi-agent system for outfit recommendations',
        'Real-time trend insights with generated images'
      ]
    },
    {
      id: 2,
      title: 'Enchanted Trinkets',
      category: 'Full-Stack',
      description: 'Full-stack e-commerce platform with product management dashboard. Built interactive Streamlit UI with Cloudinary integration for image hosting and batch upload workflows.',
      tags: ['React', 'Node.js', 'MongoDB', 'Cloudinary', 'Express.js', 'JWT'],
      github: 'https://github.com/meryem-cmd/enchanted_trinkets',
      
      achievements: [
        'Built product & order management flows',
        'Cloudinary-based image hosting with batch uploads',
        'Responsive design across mobile & tablet breakpoints'
      ]
    },
    {
      id: 3,
      title: 'Django Blog App',
      category: 'Backend',
      description: 'Production-ready blog platform built with Django and Wagtail CMS. Deployed to AWS EC2 with Gunicorn and Whitenoise for optimized static asset serving.',
      tags: ['Django', 'Wagtail', 'PostgreSQL', 'AWS EC2', 'Gunicorn', 'Whitenoise'],
      github: 'https://github.com/meryem-cmd/django-blog-app',
      
      achievements: [
        'Migrated legacy WordPress blog to Django + Wagtail',
        'Configured production-ready CMS with role-based access',
        'Deployed to AWS EC2 with automated static asset serving'
      ]
    }
  ];

  const filters = ['all', 'AI/ML', 'Full-Stack', 'Backend'];
  
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
      <div className="absolute -top-32 right-0 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/10 blur-[120px] rounded-full"></div>

      <div className="max-w-[1400px] mx-auto px-10 lg:px-20 w-full relative z-10">
        
        {/* Section Header */}
        <div className={`mb-16 ${fade()}`} style={{ animationDelay: '0.05s' }}>
          <h2 className="text-5xl md:text-6xl font-black leading-tight mb-8" style={{ color: '#00D9FF' }}>
            Real-World Projects
          </h2>
          <div className="w-20 h-1 rounded-full" style={{ backgroundColor: '#00D9FF' }}></div>
        </div>

        {/* Filter Tabs */}
        <div className={`flex flex-wrap gap-3 mb-12 ${fade()}`} style={{ animationDelay: '0.15s' }}>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-lg font-mono text-sm uppercase tracking-wider transition-all duration-300 border`}
              style={{
                backgroundColor: activeFilter === filter ? '#00D9FF' : 'transparent',
                color: activeFilter === filter ? '#0a0e27' : '#00D9FF',
                borderColor: '#00D9FF',
              }}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${fade()}`} style={{ animationDelay: '0.3s' }}>
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-xl overflow-hidden backdrop-blur-sm border transition-all duration-300 hover:scale-105 h-full flex flex-col"
              style={{
                borderColor: 'rgba(0, 217, 255, 0.3)',
                backgroundColor: 'rgba(26, 31, 58, 0.6)',
              }}
            >
              {/* Hover Glow Effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'radial-gradient(circle at center, rgba(0, 217, 255, 0.1), transparent)',
                  pointerEvents: 'none'
                }}
              ></div>

              {/* Content */}
              <div className="p-8 flex flex-col h-full relative z-10">
                
                {/* Category Badge */}
                <div className="inline-flex w-fit mb-4">
                  <span 
                    className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: 'rgba(0, 217, 255, 0.2)',
                      color: '#00D9FF'
                    }}
                  >
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-black text-white mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Achievements */}
                <div className="mb-6 space-y-2">
                  {project.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex gap-2 text-xs text-gray-400">
                      <span className="text-cyan mt-1">→</span>
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <p className="text-cyan text-xs font-mono uppercase tracking-wider mb-3">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg text-xs font-mono"
                        style={{
                          backgroundColor: 'rgba(0, 217, 255, 0.1)',
                          color: '#00D9FF',
                          border: '1px solid rgba(0, 217, 255, 0.3)'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 pt-4 border-t border-cyan/20">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 rounded-lg font-bold uppercase text-xs tracking-wider transition-all duration-300 text-center"
                    style={{
                      backgroundColor: 'rgba(0, 217, 255, 0.1)',
                      color: '#00D9FF',
                      border: '1px solid rgba(0, 217, 255, 0.3)'
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
              border: '2px solid #00D9FF',
              color: '#00D9FF'
            }}
          >
            Visit GitHub Profile →
          </a>
        </div>
      </div>
    </section>
  );
}