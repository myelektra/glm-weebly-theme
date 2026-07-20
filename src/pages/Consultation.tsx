import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimateOnScroll } from '../components/ScrollAnimations';
import { ArrowRightIcon, CheckIcon, ShieldIcon, ClockIcon, solutionIconMap } from '../components/Icons';
import { solutions } from '../data/content';

const Consultation: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    solution: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-white pt-32 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-50" />
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-teal/5 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Book a Revenue Consultation
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll stagger={1}>
            <p className="text-text-secondary text-lg max-w-2xl">
              Start with a discovery session to review your target market, current sales process, HubSpot requirements, and growth priorities.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <AnimateOnScroll>
                <h2 className="text-2xl font-bold text-text-primary mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                  Schedule Your Discovery Session
                </h2>
                <p className="text-text-secondary mb-8">
                  Fill out the form below and our team will reach out to schedule your consultation.
                </p>
              </AnimateOnScroll>

              {submitted ? (
                <AnimateOnScroll>
                  <div className="bg-teal/5 border border-teal/20 rounded-2xl p-8 text-center">
                    <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckIcon size={32} className="text-teal" />
                    </div>
                    <h3 className="text-xl font-bold text-text-primary mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                      Thank You!
                    </h3>
                    <p className="text-text-secondary">
                      Your consultation request has been submitted. Our team will reach out within 1-2 business days to schedule your discovery session.
                    </p>
                  </div>
                </AnimateOnScroll>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border rounded-lg text-text-primary bg-white focus:ring-2 focus:ring-blue focus:border-blue transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-1.5">
                        Work Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border rounded-lg text-text-primary bg-white focus:ring-2 focus:ring-blue focus:border-blue transition-colors"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-text-primary mb-1.5">
                        Company Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border rounded-lg text-text-primary bg-white focus:ring-2 focus:ring-blue focus:border-blue transition-colors"
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label htmlFor="country" className="block text-sm font-medium text-text-primary mb-1.5">
                        Target Country
                      </label>
                      <select
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border rounded-lg text-text-primary bg-white focus:ring-2 focus:ring-blue focus:border-blue transition-colors"
                      >
                        <option value="">Select a country</option>
                        <option value="Indonesia">Indonesia</option>
                        <option value="Malaysia">Malaysia</option>
                        <option value="Singapore">Singapore</option>
                        <option value="Australia">Australia</option>
                        <option value="Europe">Europe</option>
                        <option value="United States">United States</option>
                        <option value="Middle East">Middle East</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="solution" className="block text-sm font-medium text-text-primary mb-1.5">
                      Solution of Interest
                    </label>
                    <select
                      id="solution"
                      name="solution"
                      value={formData.solution}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-lg text-text-primary bg-white focus:ring-2 focus:ring-blue focus:border-blue transition-colors"
                    >
                      <option value="">Select a solution</option>
                      {solutions.map(s => (
                        <option key={s.id} value={s.id}>{s.name}</option>
                      ))}
                      <option value="academy">Myelektra Academy</option>
                      <option value="not-sure">Not sure yet</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-1.5">
                      Tell us about your goals
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-lg text-text-primary bg-white focus:ring-2 focus:ring-blue focus:border-blue transition-colors resize-y"
                      placeholder="What are your current revenue growth challenges?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center px-8 py-3.5 bg-teal text-white font-semibold rounded-lg hover:bg-teal-hover transition-colors btn-transition"
                  >
                    Submit Consultation Request
                    <ArrowRightIcon size={18} className="ml-2" />
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                <AnimateOnScroll stagger={1}>
                  <div className="bg-bg-light rounded-2xl p-6">
                    <h3 className="font-bold text-text-primary text-lg mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                      What to Expect
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-teal/10 rounded-lg flex items-center justify-center shrink-0">
                          <ClockIcon size={20} className="text-teal" />
                        </div>
                        <div>
                          <p className="font-medium text-text-primary text-sm">30-Minute Session</p>
                          <p className="text-text-secondary text-xs">Focused discovery conversation</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-teal/10 rounded-lg flex items-center justify-center shrink-0">
                          <ShieldIcon size={20} className="text-teal" />
                        </div>
                        <div>
                          <p className="font-medium text-text-primary text-sm">No Commitment</p>
                          <p className="text-text-secondary text-xs">Zero obligation to proceed</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>

                <AnimateOnScroll stagger={2}>
                  <div className="bg-bg-light rounded-2xl p-6">
                    <h3 className="font-bold text-text-primary text-lg mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                      Quick Links
                    </h3>
                    <div className="space-y-3">
                      {solutions.map(s => {
                        const IconComponent = solutionIconMap[s.icon];
                        return (
                          <Link
                            key={s.id}
                            to={`/solutions/${s.id}`}
                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-white transition-colors group"
                          >
                            <div className="w-8 h-8 bg-teal/10 rounded-md flex items-center justify-center">
                              {IconComponent && <IconComponent size={16} className="text-teal" />}
                            </div>
                            <div>
                              <p className="font-medium text-text-primary text-sm group-hover:text-teal transition-colors">{s.name}</p>
                              <p className="text-text-secondary text-xs">{s.price}</p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Consultation;
