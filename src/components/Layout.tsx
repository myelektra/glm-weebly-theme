import { useState, useEffect } from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { ArrowUpIcon, CloseIcon } from './Icons';
import { useScrollReveal } from './ScrollReveal';

export const Layout: React.FC = () => {
  const [showFloating, setShowFloating] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showCookie, setShowCookie] = useState(false);
  const [floatingDismissed, setFloatingDismissed] = useState(false);
  const location = useLocation();

  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setShowFloating(y > 600 && !floatingDismissed);
      setShowBackToTop(y > 500);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [floatingDismissed]);

  useEffect(() => {
    const dismissed = localStorage.getItem('cookie-dismissed');
    if (!dismissed) {
      const timer = setTimeout(() => setShowCookie(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const dismissCookie = () => {
    setShowCookie(false);
    localStorage.setItem('cookie-dismissed', 'true');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />

      {/* Floating CTA */}
      <div className={`floating-cta${showFloating ? ' show' : ''}`}>
        <div className="floating-cta-inner">
          <p className="hide-mobile" style={{ color: 'var(--text-dark)', fontSize: 14 }}>
            Ready to build your revenue system?
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginLeft: 'auto' }}>
            <Link to="/consultation" className="btn btn-primary" style={{ padding: '10px 20px', fontSize: 14 }}>
              Book a Revenue Consultation
            </Link>
            <button
              onClick={() => setFloatingDismissed(true)}
              style={{ color: 'rgba(232,236,241,0.5)', padding: 4 }}
              aria-label="Dismiss"
            >
              <CloseIcon size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <button
        onClick={scrollToTop}
        className={`back-to-top${showBackToTop ? ' show' : ''}`}
        aria-label="Back to top"
      >
        <ArrowUpIcon size={18} />
      </button>

      {/* Cookie Banner */}
      {showCookie && (
        <div className="cookie-banner" style={{ display: 'block' }}>
          <div className="cookie-inner">
            <p className="cookie-text">
              We use cookies to improve your experience. By continuing to use this site, you agree to our privacy policy.
            </p>
            <div className="cookie-buttons">
              <button onClick={dismissCookie} className="cookie-accept">Accept</button>
              <button onClick={dismissCookie} className="cookie-learn">Learn More</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
