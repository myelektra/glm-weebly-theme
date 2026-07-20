import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AnimateOnScroll } from '../components/ScrollAnimations';
import { ShieldIcon, ClockIcon, solutionIconMap } from '../components/Icons';
import { solutions } from '../data/content';

const Consultation: React.FC = () => {
  useEffect(() => {
    if (!document.querySelector('script[src*="MeetingsEmbedCode.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js';
      script.type = 'text/javascript';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

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
            {/* Meetings Embed */}
            <div className="lg:col-span-2">
              <AnimateOnScroll>
                <h2 className="text-2xl font-bold text-text-primary mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                  Schedule Your Discovery Session
                </h2>
                <p className="text-text-secondary mb-8">
                  Pick a time that works for you below.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll stagger={1}>
                <div
                  className="meetings-iframe-container"
                  data-src="https://app.hubspot.com/meetings/admin110/online-meeting-with-myelektra-?embed=true"
                />
              </AnimateOnScroll>
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
