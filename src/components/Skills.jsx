import { useEffect, useRef, useState } from 'react';

export default function Skills() {
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

  const skillGroups = [
    {
      category: 'Languages',
      skills: ['Python', 'JavaScript', 'Java', 'C++', 'C', 'Kotlin', 'HTML5', 'CSS3'],
    },
    {
      category: 'Frameworks',
      skills: ['Django', 'Django REST Framework', 'Flask', 'Node.js', 'Express.js', 'Spring Boot', 'React', 'Bootstrap 5', 'Tailwind CSS'],
    },
    {
      category: 'AI & Machine Learning',
      skills: ['LangChain', 'FAISS', 'HuggingFace', 'OpenCV', 'Scikit-learn', 'NumPy', 'Pandas', 'Streamlit', 'MediaPipe'],
    },
    {
      category: 'Databases',
      skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'SQLite', 'Redis'],
    },
    {
      category: 'Cloud & DevOps',
      skills: ['AWS EC2', 'AWS S3', 'Gunicorn', 'Whitenoise', 'Git', 'GitHub Actions', 'Prometheus', 'Grafana', 'k6'],
    },
    {
      category: 'Tools',
      skills: ['VS Code', 'Postman', 'Jira', 'Figma', 'Canva'],
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="min-h-screen bg-dark flex items-center py-16 sm:py-24 relative overflow-hidden"
    >

      {/* Blur blobs to match Hero/About/Projects premium feel */}
      <div className="absolute -top-32 left-0 w-56 h-56 sm:w-96 sm:h-96 bg-purple-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-80 sm:h-80 bg-accent/10 blur-[120px] rounded-full"></div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 w-full relative z-10">

        {/* Section Header */}
        <div className={`mb-10 sm:mb-16 ${fade()}`} style={{ animationDelay: '0.05s' }}>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black leading-tight mb-5 sm:mb-8" style={{ color: '#5DCAA5' }}>
            Skills & Technologies
          </h2>
          <div className="w-16 sm:w-20 h-1 rounded-full" style={{ backgroundColor: '#5DCAA5' }}></div>
        </div>

        {/* Skill Category Cards */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ${fade()}`} style={{ animationDelay: '0.15s' }}>
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border backdrop-blur-sm p-6"
              style={{
                borderColor: 'rgba(93, 202, 165, 0.2)',
                backgroundColor: 'rgba(26, 31, 58, 0.5)',
              }}
            >
              <h3 className="text-lg font-bold text-white mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full text-xs font-mono"
                    style={{
                      backgroundColor: 'rgba(93, 202, 165, 0.1)',
                      color: '#5DCAA5',
                      border: '1px solid rgba(93, 202, 165, 0.3)'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}