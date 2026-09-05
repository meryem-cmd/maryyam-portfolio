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
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/10 blur-[120px] rounded-full"></div>

      <div className="max-w-[1400px] mx-auto px-10 lg:px-20 w-full relative z-10">

        {/* Section Header */}
        <div className={`mb-16 max-w-2xl ${fade()}`} style={{ animationDelay: '0.05s' }}>
          <h2 className="text-5xl md:text-6xl font-black leading-tight" style={{ color: '#5DCAA5' }}>
            Who I Am
          </h2>
          <div className="w-20 h-1 rounded-full mt-6" style={{ backgroundColor: '#5DCAA5' }}></div>
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
                Hi, I'm Maryyam Tanveer — a final-year Computer Science student at PUCIT and an
                Associate Software Engineer building production-grade full-stack systems. I'm comfortable
                across Django, React, and the MERN stack, with hands-on experience integrating AI/ML
                and deploying to the cloud on AWS.
              </p>

              <p className="text-lg leading-8">
                At Evolvedash, I have built the React frontend for a large mobile application spanning
                100–200 screens, shipping to production daily through GitHub Actions and AWS S3. On the
                side, I independently designed, built, and deployed a Django + Wagtail platform on EC2 —
                handling everything from auth and social follows to visibility controls and static asset serving.
              </p>

              <p className="text-lg leading-8">
                I also like understanding systems at the infrastructure level — my rate limiter project
                involved diagnosing five separate real bottlenecks (network latency, connection pooling,
                the Python GIL) one at a time, each backed by before-and-after numbers. Right now I'm
                pushing deeper into AI/ML alongside my full-stack work.
              </p>
            </div>

            {/* Quick Facts - pill badges */}
            <div className="flex flex-wrap gap-3 mt-10">
              <span
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm text-gray-200 transition-all duration-300 hover:-translate-y-0.5 cursor-default"
                style={{
                  borderColor: 'rgba(93, 202, 165, 0.25)',
                  backgroundColor: 'rgba(26, 31, 58, 0.5)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 0 16px rgba(93, 202, 165, 0.3)')}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
              >
                📍 Lahore, Pakistan
              </span>
              <span
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm text-gray-200 transition-all duration-300 hover:-translate-y-0.5 cursor-default"
                style={{
                  borderColor: 'rgba(93, 202, 165, 0.25)',
                  backgroundColor: 'rgba(26, 31, 58, 0.5)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 0 16px rgba(93, 202, 165, 0.3)')}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
              >
                🎓 BS Computer Science @ PUCIT · 3.44 GPA
              </span>
              <span
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm text-gray-200 transition-all duration-300 hover:-translate-y-0.5 cursor-default"
                style={{
                  borderColor: 'rgba(93, 202, 165, 0.25)',
                  backgroundColor: 'rgba(26, 31, 58, 0.5)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 0 16px rgba(93, 202, 165, 0.3)')}
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
                  borderColor: 'rgba(93, 202, 165, 0.3)',
                  backgroundColor: 'rgba(26, 31, 58, 0.5)',
                }}
              >
                <p className="text-accent text-xs font-mono uppercase tracking-wider font-bold mb-2">
                  Evolvedash · Onsite, Lahore
                </p>
                <h3 className="text-xl font-black text-white mb-2">Full Stack Developer (Intern)</h3>
                <p className="text-gray-500 text-xs font-mono mb-4">Jul 2026 — Present</p>
                <ul className="text-gray-300 text-sm leading-relaxed space-y-2 list-none">
                  <li className="flex gap-2"><span className="text-accent mt-1 shrink-0">●</span>Building the React frontend for a large-scale mobile application (~100–200 screen scope), integrating with an existing Django REST backend documented via Swagger/OpenAPI; ~20 screens completed to date</li>
                  <li className="flex gap-2"><span className="text-accent mt-1 shrink-0">●</span>Deploy the frontend daily via GitHub Actions to AWS S3, maintaining a consistent CI/CD delivery pipeline</li>
                  <li className="flex gap-2"><span className="text-accent mt-1 shrink-0">●</span>Independently rebuilt a legacy WordPress blog as a custom Django + Wagtail CMS platform, merging CMS-authored and user-generated content into one unified feed</li>
                  <li className="flex gap-2"><span className="text-accent mt-1 shrink-0">●</span>Implemented user authentication, a social follow system, and public/followers-only visibility controls using Django ORM and DRF</li>
                  <li className="flex gap-2"><span className="text-accent mt-1 shrink-0">●</span>Self-deployed the platform on AWS EC2 with Gunicorn and Whitenoise; collaborated with senior engineers on feature rollouts, maintaining clean, reviewable code and meeting delivery deadlines</li>
                </ul>
              </div>

              {/* Job 2 */}
              <div
                className="flex-1 rounded-2xl border backdrop-blur-sm p-7 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-center"
                style={{
                  borderColor: 'rgba(93, 202, 165, 0.3)',
                  backgroundColor: 'rgba(26, 31, 58, 0.5)',
                }}
              >
                <p className="text-accent text-xs font-mono uppercase tracking-wider font-bold mb-2">
                  DevelopersHub Corporation · Remote
                </p>
                <h3 className="text-xl font-black text-white mb-2">Full Stack Developer Intern</h3>
                <p className="text-gray-500 text-xs font-mono mb-4">Jul 2025 — Aug 2025</p>
                <ul className="text-gray-300 text-sm leading-relaxed space-y-2 list-none">
                  <li className="flex gap-2"><span className="text-accent mt-1 shrink-0">●</span>Developed front-end and admin functionality for a live e-commerce platform using JavaScript and REST APIs</li>
                  <li className="flex gap-2"><span className="text-accent mt-1 shrink-0">●</span>Built product and order management flows, including Cloudinary-based image uploads and a streamlined admin workflow</li>
                  <li className="flex gap-2"><span className="text-accent mt-1 shrink-0">●</span>Identified and resolved layout and performance issues across mobile and tablet breakpoints</li>
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-6 mt-6 border-t" style={{ borderColor: 'rgba(93, 202, 165, 0.12)' }}>
              <a
                href="#projects"
                className="text-accent font-bold text-sm uppercase tracking-wider hover:text-accent/80 transition inline-flex items-center gap-2"
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