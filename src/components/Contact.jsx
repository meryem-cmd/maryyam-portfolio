import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs.config';

// Inline icons — no external dependency needed
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

export default function Contact() {
  // ==================== STATE MANAGEMENT ====================
  // Controlled form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Validation states
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  // Form submission states
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(''); // 'success', 'error', or ''

  // ==================== REFS ====================
  // Reference to form element for resetting
  const formRef = useRef(null);

  // Reference to section for scroll-triggered animation
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // ==================== EMAIL VALIDATION REGEX ====================
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // ==================== useEffect: SCROLL-TRIGGERED ANIMATION ====================
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // ==================== useEffect: REAL-TIME VALIDATION ====================
  // This validates the form every time formData changes
  useEffect(() => {
    const newErrors = {};

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    // Validate message
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    // Form is valid if no errors
    setIsValid(Object.keys(newErrors).length === 0);
  }, [formData]); // Dependency array: run when formData changes

  // ==================== CONTROLLED INPUT HANDLER ====================
  // Updates state when user types
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // ==================== ASYNC FORM SUBMISSION ====================
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Don't submit if form is invalid
    if (!isValid) {
      setSubmitStatus('error');
      return;
    }

    setIsLoading(true);
    setSubmitStatus('');

    try {
      // Initialize EmailJS (only needs to happen once, but safe to do on every submit)
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

      // Send email using async/await
      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          user_name: formData.name,
          user_email: formData.email,
          message: formData.message,
        }
      );

      // Success
      if (response.status === 200) {
        setSubmitStatus('success');

        // Reset form using useRef
        formRef.current.reset();

        // Reset form state
        setFormData({ name: '', email: '', message: '' });

        // Clear success message after 5 seconds
        setTimeout(() => setSubmitStatus(''), 5000);
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative min-h-screen bg-dark flex items-center py-20 overflow-hidden"
    >
      {/* Ambient background blob — matches Hero/About/Skills */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none"
        style={{ backgroundColor: 'rgba(0, 217, 255, 0.08)' }}
      />

      <div className="relative max-w-[1400px] mx-auto px-10 lg:px-20 w-full">

        {/* Section Header */}
        <div
          className={`mb-16 text-center ${
            isVisible ? 'animate-fade-up' : 'opacity-0 translate-y-6'
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-black leading-tight mb-8" style={{ color: '#00D9FF' }}>
            Let's Build Something
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Got an idea for an AI agent, automation pipeline, or intelligent system? 
            I'd love to hear about it. Let's architect something amazing together.
          </p>
          <div className="w-20 h-1 rounded-full mt-8 mx-auto" style={{ backgroundColor: '#00D9FF' }}></div>
        </div>

        {/* Contact Content Grid */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 ${
            isVisible ? 'animate-fade-up' : 'opacity-0 translate-y-6'
          }`}
          style={{ animationDelay: isVisible ? '0.15s' : undefined }}
        >

          {/* Left - Contact Info */}
          <div className="space-y-8">

            {/* Email */}
            <div className="group">
              <p className="text-2xl font-bold text-white hover:text-cyan transition">Email</p>
              <a
                href="mailto:maryyam.tanveer@gmail.com"
                
                className="text-cyan text-sm font-mono  tracking-wider mb-3"
              >
                tanvirmeryem2@gmail.com
              </a>
            </div>

            {/* Location */}
            <div className="group">
              <p className="text-2xl font-bold text-white">Location</p>
              <p className="text-cyan text-sm font-mono uppercase tracking-wider mb-3" >Lahore, Pakistan</p>
            </div>

            {/* Social Links — now real GitHub/LinkedIn logos */}
            <div className="group">
              <p className="text-cyan text-sm font-mono uppercase tracking-wider mb-4">Connect</p>
              <div className="flex items-center gap-4">
                <a
                  href="https://linkedin.com/in/maryyam-tanveer"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="group/link w-12 h-12 rounded-lg flex items-center justify-center border transition-all duration-300"
                  style={{
                    borderColor: 'rgba(0, 217, 255, 0.3)',
                    backgroundColor: 'rgba(26, 31, 58, 0.5)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#00D9FF';
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 217, 255, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(0, 217, 255, 0.3)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <LinkedinIcon className="w-5 h-5 text-gray-300 group-hover/link:text-cyan transition-colors" />
                </a>
                <a
                  href="https://github.com/maryyam"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="group/link w-12 h-12 rounded-lg flex items-center justify-center border transition-all duration-300"
                  style={{
                    borderColor: 'rgba(0, 217, 255, 0.3)',
                    backgroundColor: 'rgba(26, 31, 58, 0.5)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#00D9FF';
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 217, 255, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(0, 217, 255, 0.3)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <GithubIcon className="w-5 h-5 text-gray-300 group-hover/link:text-cyan transition-colors" />
                </a>
              </div>
            </div>

            {/* Response Time */}
            <div className="p-6 rounded-lg border" style={{
              borderColor: 'rgba(0, 217, 255, 0.3)',
              backgroundColor: 'rgba(26, 31, 58, 0.5)',
            }}>
              <p className="text-cyan text-sm font-mono uppercase tracking-wider mb-2">Response Time</p>
              <p className="text-white font-bold">Typically within 24 hours</p>
              <p className="text-gray-400 text-sm mt-2">I read every message and love discussing new ideas!</p>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-6 p-8 rounded-lg border backdrop-blur-sm"
              style={{
                borderColor: 'rgba(0, 217, 255, 0.3)',
                backgroundColor: 'rgba(26, 31, 58, 0.5)',
              }}
            >
              {/* Name Field */}
              <div>
                <label className="block text-cyan text-sm font-mono uppercase tracking-wider mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg bg-dark/50 border text-white placeholder-gray-500 focus:outline-none focus:border-cyan transition"
                  style={{
                    borderColor: errors.name ? '#ef4444' : 'rgba(0, 217, 255, 0.3)',
                  }}
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-2">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-cyan text-sm font-mono uppercase tracking-wider mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg bg-dark/50 border text-white placeholder-gray-500 focus:outline-none focus:border-cyan transition"
                  style={{
                    borderColor: errors.email ? '#ef4444' : 'rgba(0, 217, 255, 0.3)',
                  }}
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-2">{errors.email}</p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-cyan text-sm font-mono uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project or idea..."
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg bg-dark/50 border text-white placeholder-gray-500 focus:outline-none focus:border-cyan transition resize-none"
                  style={{
                    borderColor: errors.message ? '#ef4444' : 'rgba(0, 217, 255, 0.3)',
                  }}
                />
                {errors.message && (
                  <p className="text-red-400 text-sm mt-2">{errors.message}</p>
                )}
              </div>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="p-4 rounded-lg bg-green-500/20 border border-green-500/50">
                  <p className="text-green-400 font-bold">✓ Message sent successfully!</p>
                  <p className="text-green-400 text-sm">I'll get back to you soon.</p>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="p-4 rounded-lg bg-red-500/20 border border-red-500/50">
                  <p className="text-red-400 font-bold">✗ Error sending message</p>
                  <p className="text-red-400 text-sm">
                    {!isValid
                      ? 'Please fix the errors above and try again.'
                      : 'Something went wrong. Please try again.'}
                  </p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading || !isValid}
                className="w-full py-3 rounded-lg font-bold uppercase text-sm tracking-wider transition-all duration-300"
                style={{
                  backgroundColor: isLoading || !isValid ? 'rgba(0, 217, 255, 0.4)' : '#00D9FF',
                  color: '#0a0e27',
                  opacity: isLoading || !isValid ? 0.6 : 1,
                  cursor: isLoading || !isValid ? 'not-allowed' : 'pointer',
                  boxShadow: !isLoading && isValid ? '0 0 20px rgba(0, 217, 255, 0.4)' : 'none'
                }}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="inline-block animate-spin">⚙️</span>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>

              {/* Form Status Message */}
              <p className="text-gray-500 text-xs text-center font-mono">
                {isValid
                  ? '✓ Form is valid - ready to send'
                  : '✗ Please fill out all fields correctly'}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}