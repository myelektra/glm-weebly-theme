import { Link } from 'react-router-dom';
import { AnimateOnScroll } from '../components/ScrollAnimations';
import { ArrowRightIcon, CheckIcon, solutionIconMap } from '../components/Icons';
import { solutions } from '../data/content';
import PriceDisplay from '../components/PriceDisplay';

const Solutions: React.FC = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-white pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Revenue Growth Solutions
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll stagger={1}>
            <p className="text-text-secondary text-lg max-w-2xl">
              From market intelligence to pipeline management — choose the solution that matches your growth stage.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Solutions Detail */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {solutions.map((sol, i) => {
              const IconComponent = solutionIconMap[sol.icon];
              return (
                <AnimateOnScroll key={sol.id} stagger={i + 1}>
                  <div className={`bg-white border border-border rounded-2xl p-8 lg:p-10 card-hover ${i === 2 ? 'ring-2 ring-gold/50' : ''}`}>
                    <div className="flex flex-col lg:flex-row gap-8">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 bg-teal/10 rounded-lg flex items-center justify-center">
                            {IconComponent && <IconComponent size={24} className="text-teal" />}
                          </div>
                          <div>
                            <h2 className="font-bold text-text-primary text-2xl" style={{ fontFamily: 'var(--font-heading)' }}>
                              {sol.name}
                            </h2>
                            {i === 2 && (
                              <span className="text-gold text-xs font-bold uppercase tracking-wider">Most Popular</span>
                            )}
                          </div>
                        </div>
                        <PriceDisplay price={sol.price} className="text-teal font-semibold text-sm mb-2" style={{ fontFamily: 'var(--font-mono)' }} />
                        <p className="text-text-secondary mb-6">{sol.description}</p>

                        <h4 className="font-semibold text-text-primary text-sm uppercase tracking-wider mb-3">Included:</h4>
                        <ul className="space-y-2 mb-6">
                          {sol.features.map((f) => (
                            <li key={f} className="flex items-start gap-2 text-text-secondary">
                              <CheckIcon size={16} className="text-teal shrink-0 mt-0.5" />
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="flex items-center gap-4">
                          <Link
                            to={`/solutions/${sol.id}`}
                            className="inline-flex items-center px-6 py-2.5 bg-teal text-white font-semibold text-sm rounded-lg hover:bg-teal-hover transition-colors btn-transition"
                          >
                            {sol.cta}
                            <ArrowRightIcon size={16} className="ml-2" />
                          </Link>
                          <Link
                            to={`/solutions/${sol.id}`}
                            className="inline-flex items-center text-blue font-semibold text-sm hover:text-blue-hover transition-colors group"
                          >
                            Learn More
                            <ArrowRightIcon size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>

                      <div className="lg:w-72 shrink-0">
                        <div className="bg-bg-light rounded-xl p-6">
                          <h4 className="font-semibold text-text-primary text-sm mb-3">Best For</h4>
                          <p className="text-text-secondary text-sm leading-relaxed">{sol.bestFor}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bg-light py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <h2 className="text-2xl lg:text-3xl font-bold text-text-primary mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Not sure which solution fits?
            </h2>
            <p className="text-text-secondary mb-6">Book a Revenue Consultation and we will help you find the right starting point.</p>
            <Link
              to="/consultation"
              className="inline-flex items-center px-7 py-3.5 bg-teal text-white font-semibold rounded-lg hover:bg-teal-hover transition-colors btn-transition"
            >
              Book a Revenue Consultation
              <ArrowRightIcon size={18} className="ml-2" />
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
