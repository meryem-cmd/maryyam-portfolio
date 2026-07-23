import { useEffect, useRef, useState } from "react";

export default function About() {
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

  return (
    <section
      ref={sectionRef}
      id="about"
      className="min-h-screen bg-dark flex items-center py-24 relative overflow-hidden"
    >

      {/* Blur blobs to match Hero's premium feel */}
      <div className="absolute -top-32 left-0 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <div className="max-w-[1400px] mx-auto px-10 lg:px-20 w-full relative z-10">

        {/* Section Header */}
        <div className={`mb-16 max-w-2xl ${fade()}`} style={{ animationDelay: '0.05s' }}>
          <h2 className="text-5xl md:text-6xl font-black leading-tight" style={{ color: '#00D9FF' }}>
            Who I Am
          </h2>
          <div className="w-20 h-1 rounded-full mt-6" style={{ backgroundColor: '#00D9FF' }}></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">

          {/* Left - Bio */}
          <div
            className={`flex flex-col justify-between h-full ${fade()}`}
            style={{ animationDelay: '0.15s' }}
          >
            <div className="space-y-6 text-gray-300">
              <p className="text-lg leading-8">
                Hi, I'm Maryyam Tanveer — a full-stack developer passionate about building intelligent,
                scalable systems that solve real-world problems. With a strong foundation in computer science
                from PUCIT, I've worked on everything from AI/ML pipelines to production Django applications on AWS.
              </p>

              <p className="text-lg leading-8">
                My recent internships have taught me how to ship code that matters: deploying services to EC2,
                optimizing React frontends for performance, and integrating complex AI workflows. I'm particularly
                excited about agentic systems, RAG pipelines, and building tools that bridge AI and user experience.
              </p>

              <p className="text-lg leading-8">
                When I'm not coding, I'm learning something new — whether that's a new framework, diving deeper
                into LLMs, or contributing to open-source projects. I believe the best engineers are lifelong learners.
              </p>
            </div>

            {/* Quick Facts - pill badges */}
            <div className="flex flex-wrap gap-3 mt-10">
              <span
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm text-gray-200 transition-all duration-300 hover:-translate-y-0.5 cursor-default"
                style={{
                  borderColor: 'rgba(0, 217, 255, 0.25)',
                  backgroundColor: 'rgba(26, 31, 58, 0.5)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 0 16px rgba(0, 217, 255, 0.3)')}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
              >
                📍 Lahore, Pakistan
              </span>
              <span
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm text-gray-200 transition-all duration-300 hover:-translate-y-0.5 cursor-default"
                style={{
                  borderColor: 'rgba(0, 217, 255, 0.25)',
                  backgroundColor: 'rgba(26, 31, 58, 0.5)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 0 16px rgba(0, 217, 255, 0.3)')}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
              >
                🎓 BS Computer Science @ PUCIT
              </span>
              <span
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm text-gray-200 transition-all duration-300 hover:-translate-y-0.5 cursor-default"
                style={{
                  borderColor: 'rgba(0, 217, 255, 0.25)',
                  backgroundColor: 'rgba(26, 31, 58, 0.5)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 0 16px rgba(0, 217, 255, 0.3)')}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
              >
                💻 Django • React • MERN • AWS
              </span>
            </div>
          </div>

          {/* Right - Experience Cards */}
          <div className={`h-full flex flex-col ${fade()}`} style={{ animationDelay: '0.3s' }}>

            <div className="flex flex-col gap-6 flex-1">

              {/* Job 1 */}
              <div
                className="flex-1 rounded-2xl border backdrop-blur-sm p-7 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-center"
                style={{
                  borderColor: 'rgba(0, 217, 255, 0.3)',
                  backgroundColor: 'rgba(26, 31, 58, 0.5)',
                }}
              >
                <p className="text-cyan text-xs font-mono uppercase tracking-wider font-bold mb-2">
                  EvolveDash
                </p>
                <h3 className="text-xl font-black text-white mb-2">Django Developer</h3>
                <p className="text-gray-500 text-xs font-mono mb-4">Jul 2026 — Present</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Built WordPress integrations with Wagtail CMS. Deployed services to AWS EC2 using Gunicorn
                  and Whitenoise for optimized static asset serving.
                </p>
              </div>

              {/* Job 2 */}
              <div
                className="flex-1 rounded-2xl border backdrop-blur-sm p-7 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-center"
                style={{
                  borderColor: 'rgba(0, 217, 255, 0.3)',
                  backgroundColor: 'rgba(26, 31, 58, 0.5)',
                }}
              >
                <p className="text-cyan text-xs font-mono uppercase tracking-wider font-bold mb-2">
                  Developability Corp
                </p>
                <h3 className="text-xl font-black text-white mb-2">Front-end Developer</h3>
                <p className="text-gray-500 text-xs font-mono mb-4">Jul 2025 — Aug 2025</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Built React components for an e-commerce platform. Optimized mobile and tablet layouts,
                  eliminating broken UI across breakpoints.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-6 mt-6 border-t" style={{ borderColor: 'rgba(0, 217, 255, 0.12)' }}>
              <a
                href="#projects"
                className="text-cyan font-bold text-sm uppercase tracking-wider hover:text-cyan/80 transition inline-flex items-center gap-2"
              >
                Check out my work
                <span className="text-lg">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}