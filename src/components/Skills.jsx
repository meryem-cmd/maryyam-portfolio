import { useEffect, useRef, useState } from 'react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');
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

  // All skills organized by category
  const allSkills = [
    // Languages
    { id: 1, name: 'Python', category: 'Languages', proficiency: 'Expert' },
    { id: 2, name: 'JavaScript', category: 'Languages', proficiency: 'Intermediate' },
    { id: 3, name: 'Java', category: 'Languages', proficiency: 'Intermediate' },
    { id: 4, name: 'C++', category: 'Languages', proficiency: 'Beginner' },
    { id: 5, name: 'Kotlin', category: 'Languages', proficiency: 'Beginner' },
    { id: 6, name: 'HTML/CSS', category: 'Languages', proficiency: 'Expert' },

    // Frameworks & Libraries
    { id: 7, name: 'React', category: 'Frameworks', proficiency: 'Intermediate' },
    { id: 8, name: 'Django', category: 'Frameworks', proficiency: 'Expert' },
    { id: 9, name: 'Node.js', category: 'Frameworks', proficiency: 'Intermediate' },
    { id: 10, name: 'Express.js', category: 'Frameworks', proficiency: 'Intermediate' },
    { id: 11, name: 'Wagtail CMS', category: 'Frameworks', proficiency: 'Expert' },
    { id: 12, name: 'FastAPI', category: 'Frameworks', proficiency: 'Intermediate' },

    // AI/ML & Data
    { id: 13, name: 'LangChain', category: 'AI/ML', proficiency: 'Intermediate' },
    { id: 14, name: 'FAISS', category: 'AI/ML', proficiency: 'Intermediate' },
    { id: 15, name: 'HuggingFace', category: 'AI/ML', proficiency: 'Intermediate' },
    { id: 16, name: 'OpenCV', category: 'AI/ML', proficiency: 'Beginner' },
    { id: 17, name: 'Scikit-learn', category: 'AI/ML', proficiency: 'Intermediate' },
    { id: 18, name: 'Pandas', category: 'AI/ML', proficiency: 'Intermediate' },
    { id: 19, name: 'NumPy', category: 'AI/ML', proficiency: 'Intermediate' },
    { id: 20, name: 'Streamlit', category: 'AI/ML', proficiency: 'Expert' },

    // Databases
    { id: 21, name: 'MongoDB', category: 'Databases', proficiency: 'Intermediate' },
    { id: 22, name: 'PostgreSQL', category: 'Databases', proficiency: 'Intermediate' },
    { id: 23, name: 'MySQL', category: 'Databases', proficiency: 'Beginner' },
    { id: 24, name: 'SQLite', category: 'Databases', proficiency: 'Beginner' },

    // Tools & Deployment
    { id: 25, name: 'Git & GitHub', category: 'Tools', proficiency: 'Expert' },
    { id: 26, name: 'AWS EC2', category: 'Tools', proficiency: 'Intermediate' },
    { id: 27, name: 'Docker', category: 'Tools', proficiency: 'Beginner' },
    { id: 28, name: 'VS Code', category: 'Tools', proficiency: 'Expert' },
    { id: 29, name: 'Figma', category: 'Tools', proficiency: 'Beginner' },
    { id: 30, name: 'Postman', category: 'Tools', proficiency: 'Intermediate' },
    { id: 31, name: 'Cloudinary', category: 'Tools', proficiency: 'Intermediate' },
  ];

  const categories = ['all', ...new Set(allSkills.map(skill => skill.category))];

  const filteredSkills = activeCategory === 'all' 
    ? allSkills 
    : allSkills.filter(skill => skill.category === activeCategory);

  const getProficiencyColor = (proficiency) => {
    switch (proficiency) {
      case 'Expert':
        return { bg: 'rgba(34, 197, 94, 0.15)', border: 'rgb(34, 197, 94)', text: 'rgb(34, 197, 94)' };
      case 'Intermediate':
        return { bg: 'rgba(59, 130, 246, 0.15)', border: 'rgb(59, 130, 246)', text: 'rgb(59, 130, 246)' };
      case 'Beginner':
        return { bg: 'rgba(168, 85, 247, 0.15)', border: 'rgb(168, 85, 247)', text: 'rgb(168, 85, 247)' };
      default:
        return { bg: 'rgba(0, 217, 255, 0.15)', border: '#00D9FF', text: '#00D9FF' };
    }
  };

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="min-h-screen bg-dark flex items-center py-24 relative overflow-hidden"
    >

      {/* Blur blobs to match Hero/About/Projects premium feel */}
      <div className="absolute -top-32 left-0 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <div className="max-w-[1400px] mx-auto px-10 lg:px-20 w-full relative z-10">
        
        {/* Section Header */}
        <div className={`mb-16 ${fade()}`} style={{ animationDelay: '0.05s' }}>
          <h2 className="text-5xl md:text-6xl font-black leading-tight mb-8" style={{ color: '#00D9FF' }}>
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 rounded-full" style={{ backgroundColor: '#00D9FF' }}></div>
        </div>

        {/* Filter Tabs */}
        <div className={`flex flex-wrap gap-3 mb-12 ${fade()}`} style={{ animationDelay: '0.15s' }}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className="px-6 py-2 rounded-lg font-mono text-sm uppercase tracking-wider transition-all duration-300 border"
              style={{
                backgroundColor: activeCategory === category ? '#00D9FF' : 'transparent',
                color: activeCategory === category ? '#0a0e27' : '#00D9FF',
                borderColor: '#00D9FF',
              }}
            >
              {category === 'all' ? 'All Skills' : category}
            </button>
          ))}
        </div>

        {/* Skills Grid - 3 per row, small & cute cards */}
        <div className={`grid grid-cols-2 sm:grid-cols-3 gap-4 ${fade()}`} style={{ animationDelay: '0.3s' }}>
          {filteredSkills.map((skill) => {
            const profColor = getProficiencyColor(skill.proficiency);
            return (
              <div
                key={skill.id}
                className="group p-4 rounded-lg backdrop-blur-sm border transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] cursor-pointer"
                style={{
                  borderColor: 'rgba(0, 217, 255, 0.3)',
                  backgroundColor: 'rgba(26, 31, 58, 0.5)',
                }}
              >
                {/* Skill Name */}
                <h3 className="text-sm font-bold text-white mb-1 group-hover:text-cyan transition">
                  {skill.name}
                </h3>

                {/* Category Label */}
                <p className="text-cyan text-[10px] font-mono uppercase tracking-wider mb-2 opacity-70">
                  {skill.category}
                </p>

                {/* Proficiency Badge */}
                <div
                  className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold"
                  style={{
                    backgroundColor: profColor.bg,
                    color: profColor.text,
                    border: `1px solid ${profColor.border}`
                  }}
                >
                  {skill.proficiency}
                </div>
              </div>
            );
          })}
        </div>

        
        
      </div>
    </section>
  );
}