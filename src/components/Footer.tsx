import { Link } from 'react-router-dom';
import { LinkedInIcon, InstagramIcon } from './Icons';
import { solutions, disclaimer } from '../data/content';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-dark text-text-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1: Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src="https://files.catbox.moe/ih1ryw.png" alt="Myelektra" style={{ height: 28, width: 'auto', display: 'block' }} />
              <span className="font-bold" style={{ fontFamily: 'var(--font-heading)', display: 'flex', alignItems: 'baseline', gap: 0 }}>
                <span style={{ color: '#FFFFFF', fontSize: 28, lineHeight: 1 }}>myelektra</span><span style={{ color: '#1877F2', fontSize: 14, lineHeight: 1 }}>.com</span>
              </span>
            </Link>
            <p className="text-teal text-sm font-semibold mb-1">AI-Powered Revenue Growth Partner</p>
            <p className="text-text-dark/60 text-sm mb-4">We Build Revenue Systems, Not Just Lead Lists.</p>
            <div className="text-text-dark/60 text-xs leading-relaxed mb-4 space-y-0.5">
              <p className="font-semibold text-text-dark/70">Corporate Office</p>
              <p>38th Floor, 88 Office</p>
              <p>Kota Kasablanka, South Jakarta</p>
              <p>Indonesia</p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/3560717"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-dark/60 hover:text-teal transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon size={20} />
              </a>
              <a
                href="https://www.instagram.com/myelektra/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-dark/60 hover:text-teal transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Solutions</h4>
            <ul className="space-y-2.5">
              {solutions.map((s) => (
                <li key={s.id}>
                  <Link
                    to={`/solutions/${s.id}`}
                    className="text-text-dark/60 hover:text-teal text-sm transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2.5">
              <li><Link to="/about" className="text-text-dark/60 hover:text-teal text-sm transition-colors">About</Link></li>
              <li><Link to="/industries" className="text-text-dark/60 hover:text-teal text-sm transition-colors">Industries</Link></li>
              <li><Link to="/how-it-works" className="text-text-dark/60 hover:text-teal text-sm transition-colors">How It Works</Link></li>
              <li><Link to="/academy" className="text-text-dark/60 hover:text-teal text-sm transition-colors">Academy</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-2.5">
              <li className="text-text-dark/70 text-sm font-medium">PT. Myelektra Solusi Indonesia</li>
              <li>
                <a href="tel:+622129636761" className="text-text-dark/60 hover:text-teal text-sm transition-colors">
                  +62 21 29636761
                </a>
              </li>
              <li>
                <Link to="/consultation" className="text-teal hover:text-teal-hover text-sm font-medium transition-colors">
                  Book a Revenue Consultation →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-text-dark/40 text-xs leading-relaxed mb-4">{disclaimer}</p>
          <p className="text-text-dark/40 text-xs">
            © {new Date().getFullYear()} Myelektra.com. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
