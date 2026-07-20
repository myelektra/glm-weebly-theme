import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  TargetIcon, RobotIcon, HeadsetIcon, DatabaseIcon, ChartIcon,
  BullseyeIcon, ChatIcon, FunnelIcon, EyeIcon, LayersIcon,
  BrainIcon, HubSpotIcon, QualityIcon, ReportIcon, GlobeIcon, RevenueIcon,
  ArrowRightIcon, CheckIcon, GradCapIcon,
  solutionIconMap, industryIconMap
} from '../components/Icons';
import { solutions, industries, countries, whyMyelektra } from '../data/content';
import PriceDisplay from '../components/PriceDisplay';

const clientLogos = [
  { src: 'https://files.catbox.moe/t5y3dl.png', alt: '1Datapipe' },
  { src: 'https://files.catbox.moe/4a7p1v.png', alt: 'Adins' },
  { src: 'https://files.catbox.moe/3a5cc8.png', alt: 'Armourzero' },
  { src: 'https://files.catbox.moe/o9aqso.png', alt: 'Bigbox' },
  { src: 'https://files.catbox.moe/hl3ou5.png', alt: 'Cacafly' },
  { src: 'https://files.catbox.moe/r2vdt4.png', alt: 'Codemi' },
  { src: 'https://files.catbox.moe/pmthp8.png', alt: 'Convergence' },
  { src: 'https://files.catbox.moe/gfp8is.jpeg', alt: 'Daiko' },
  { src: 'https://files.catbox.moe/ovg7oa.png', alt: 'DataOn' },
  { src: 'https://files.catbox.moe/omzx89.png', alt: 'Disprz' },
  { src: 'https://files.catbox.moe/iit9rv.png', alt: 'Epicor' },
  { src: 'https://files.catbox.moe/akbnd5.jpeg', alt: 'Evolusi 3D' },
  { src: 'https://files.catbox.moe/hfiaab.webp', alt: 'Flexofast' },
  { src: 'https://files.catbox.moe/g1a90h.png', alt: 'Fujifilm' },
  { src: 'https://files.catbox.moe/5vqf5u.png', alt: 'Funding Societies' },
  { src: 'https://files.catbox.moe/s072ef.png', alt: 'Geek Hunter' },
  { src: 'https://files.catbox.moe/6w5ojl.jpg', alt: 'Hexagon' },
  { src: 'https://files.catbox.moe/0ebc1m.png', alt: 'Honeywell' },
  { src: 'https://files.catbox.moe/mtq977.jpg', alt: 'Ideoworks' },
  { src: 'https://files.catbox.moe/69srar.png', alt: 'Integrated Retail' },
  { src: 'https://files.catbox.moe/wbatv7.png', alt: 'Liberty Society' },
  { src: 'https://files.catbox.moe/y5vr2i.png', alt: 'Lindungihutan' },
  { src: 'https://files.catbox.moe/2kl9g9.webp', alt: 'Lion Parcel' },
  { src: 'https://files.catbox.moe/0e6mog.png', alt: 'Metrodata' },
  { src: 'https://files.catbox.moe/9qtku6.jpg', alt: 'Mileapp' },
  { src: 'https://files.catbox.moe/n2istf.png', alt: 'Moodah' },
  { src: 'https://files.catbox.moe/3nr01z.png', alt: 'Myrobin' },
  { src: 'https://files.catbox.moe/hfrhgp.png', alt: 'Parker Hannifin' },
  { src: 'https://files.catbox.moe/z73gdq.png', alt: 'Practo' },
  { src: 'https://files.catbox.moe/ioq9fq.png', alt: 'PTI Group' },
  { src: 'https://files.catbox.moe/ikoa54.jpg', alt: 'Qiscus' },
  { src: 'https://files.catbox.moe/l4zmq5.png', alt: 'Ruangguru' },
  { src: 'https://files.catbox.moe/3mvnu8.jpg', alt: 'Runchise' },
  { src: 'https://files.catbox.moe/202ttd.png', alt: 'Shipper' },
  { src: 'https://files.catbox.moe/99mbkp.png', alt: 'SOS' },
  { src: 'https://files.catbox.moe/ngvhnl.png', alt: 'Staffinc' },
  { src: 'https://files.catbox.moe/be3jyg.png', alt: 'The Class Foundation' },
  { src: 'https://files.catbox.moe/j8su5l.png', alt: 'Tjetak' },
  { src: 'https://files.catbox.moe/serbx5.png', alt: 'Turnitin' },
  { src: 'https://files.catbox.moe/wk1t9e.png', alt: 'Zilingo' },
];

const journeyCards = [
  { icon: TargetIcon, title: 'Revenue Intelligence', desc: 'Identify your ideal customer profile, priority industries, target accounts, and decision-makers.' },
  { icon: RobotIcon, title: 'AI Agent Prospecting', desc: 'Use HubSpot-supported research and AI-assisted workflows to identify and personalize engagement with relevant prospects.' },
  { icon: HeadsetIcon, title: 'Human SDR Engagement', desc: 'Our SDR team follows up through email and phone, qualifies interest, handles initial objections, and works toward qualified meetings.' },
  { icon: DatabaseIcon, title: 'HubSpot CRM', desc: 'Organize contacts, activities, lead status, pipelines, follow-ups, reporting, and sales opportunities in one system.' },
  { icon: ChartIcon, title: 'Revenue Operations', desc: 'Measure conversion, manage pipeline progress, improve sales processes, and turn activity into actionable revenue insights.' },
];

const achievements = [
  { icon: BullseyeIcon, title: 'Better-Fit Prospects', desc: 'Reach companies and decision-makers that match your ideal customer profile and buyer persona.' },
  { icon: ChatIcon, title: 'More Sales Conversations', desc: 'Combine AI-assisted research with personalized email, LinkedIn, and human SDR engagement.' },
  { icon: FunnelIcon, title: 'A Stronger Pipeline', desc: 'Capture prospect activity, qualification status, meetings, and opportunities inside HubSpot.' },
  { icon: EyeIcon, title: 'Clearer Revenue Visibility', desc: 'Monitor leads, conversations, meetings, opportunities, and pipeline performance through structured reporting.' },
  { icon: LayersIcon, title: 'Scalable Sales Operations', desc: 'Build a repeatable system that supports your internal sales team as the business grows.' },
];

const whyIcons = [BrainIcon, HubSpotIcon, QualityIcon, ReportIcon, GlobeIcon, RevenueIcon];

const Home: React.FC = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;
    const half = el.scrollWidth / 2;
    let offset = 0;
    let frame = 0;
    el.style.transform = 'translateX(0)';
    const tick = () => {
      offset -= 0.6;
      if (offset <= -half) offset += half;
      el.style.transform = `translateX(${offset}px)`;
      frame = requestAnimationFrame(tick);
    };
    const stop = () => cancelAnimationFrame(frame);
    const start = () => { stop(); tick(); };
    el.addEventListener('mouseenter', stop);
    el.addEventListener('mouseleave', start);
    start();
    return () => { stop(); el.removeEventListener('mouseenter', stop); el.removeEventListener('mouseleave', start); };
  }, []);

  return (
    <div>
      {/* ===== SECTION 1: HERO ===== */}
      <section className="hero">
        <div className="hero-grid-bg"></div>
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
        <div className="container">
          <div className="hero-content">
            <span className="hero-badge anim">AI-Powered Revenue Growth Partner</span>
            <h1 className="anim delay-1">
              We Build Revenue Systems, <span className="gradient-text">Not Just Lead Lists.</span>
            </h1>
            <p className="hero-subtitle anim delay-2">
              Myelektra helps B2B companies identify the right buyers, start meaningful sales conversations, manage opportunities in HubSpot, and build a more predictable revenue pipeline.
            </p>
            <div className="hero-buttons anim delay-3">
              <Link to="/consultation" className="btn btn-primary">
                Book a Revenue Consultation
                <ArrowRightIcon size={18} />
              </Link>
              <Link to="/solutions" className="btn btn-outline">
                Explore Our Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: THE JOURNEY ===== */}
      <section className="section-light section-padding">
        <div className="container">
          <span className="section-label anim">From Buyer Persona to Revenue Pipeline</span>
          <h2 className="section-title anim delay-1">The Revenue Growth Journey</h2>
          <p className="section-subtitle anim delay-2">
            Finding contact data is only the beginning. Sustainable B2B growth requires the right market, the right decision-makers, consistent engagement, disciplined follow-up, accurate CRM data, and a measurable sales process. Myelektra brings these elements together in one integrated revenue growth system.
          </p>

          <div className="grid-5" style={{ marginTop: 48 }}>
            {journeyCards.map((card, i) => (
              <div key={card.title} className={`card anim delay-${i + 1}`}>
                <div className="card-icon card-icon-teal">
                  <card.icon size={24} />
                </div>
                <h3 className="card-title">{card.title}</h3>
                <p className="card-desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: WHAT WE HELP YOU ACHIEVE ===== */}
      <section className="section-gray section-padding">
        <div className="container text-center">
          <h2 className="section-title anim">What We Help You Achieve</h2>
          <div className="divider-line anim delay-1"></div>
          <div className="grid-3" style={{ textAlign: 'left' }}>
            {achievements.map((item, i) => (
              <div key={item.title} className={`card anim delay-${i + 1}`} style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.04)', borderColor: 'rgba(226,232,240,0.5)' }}>
                <div className="card-icon card-icon-gradient">
                  <item.icon size={28} />
                </div>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: SOLUTIONS OVERVIEW ===== */}
      <section className="section-dark section-padding">
        <div className="container text-center">
          <h2 className="section-title-white anim">Our Revenue Growth Solutions</h2>
          <div className="divider-line anim delay-1"></div>
          <div className="grid-3" style={{ textAlign: 'left' }}>
            {solutions.map((sol, i) => {
              const IconComponent = solutionIconMap[sol.icon];
              return (
                <div key={sol.id} className={`solution-card anim delay-${i + 1}${i === 2 ? ' featured' : ''}`}>
                  {i === 2 && <span className="badge-popular">Most Popular</span>}
                  <div className="card-icon card-icon-teal">
                    {IconComponent && <IconComponent size={24} />}
                  </div>
                  <h3 className="card-title">{sol.name}</h3>
                  <PriceDisplay price={sol.price} className="solution-price" />
                  <p className="card-desc-dark">{sol.description}</p>
                  <div className="feature-list">
                    {sol.features.map((f) => (
                      <div key={f} className="feature-item">
                        <CheckIcon size={16} className="feature-check" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                  <Link to={`/solutions/${sol.id}`} className="learn-more">
                    Learn More
                    <ArrowRightIcon size={16} className="learn-more-arrow" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== SECTION 6: COUNTRY TARGETING ===== */}
      <section className="section-gray section-padding">
        <div className="container text-center">
          <h2 className="section-title anim">One Country. One Focused Campaign.</h2>
          <p className="section-subtitle mx-auto anim delay-1">
            Every campaign targets one selected country to maintain relevance, personalization, and research quality.
          </p>
          <div className="grid-3" style={{ textAlign: 'left', marginTop: 48 }}>
            {countries.map((country, i) => (
              <div key={country.name} className={`country-card ${country.flagAccent} anim delay-${i + 1}`}>
                <h3 className="card-title">{country.name}</h3>
                <p style={{ fontSize: 14, color: 'var(--text-secondary)', marginBottom: 12 }}>Recommended buyer personas:</p>
                <ul style={{ marginBottom: 16 }}>
                  {country.personas.map((p) => (
                    <li key={p} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, padding: '2px 0' }}>
                      <span className="persona-dot"></span>
                      {p}
                    </li>
                  ))}
                </ul>
                <p style={{ fontSize: 12, color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
                  Maximum: 300 verified contacts.
                </p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 12, color: 'rgba(107,114,128,0.7)', maxWidth: 720, margin: '32px auto 0', lineHeight: 1.6 }}>
            Actual contact volume may be lower when the buyer persona, industry, company size, or geographic criteria are highly specialized. Myelektra prioritizes relevance and contact quality over filling an arbitrary quota.
          </p>
        </div>
      </section>

      {/* ===== SECTION 7: INDUSTRIES ===== */}
      <section className="section-light section-padding">
        <div className="container text-center">
          <h2 className="section-title anim">Industries We Serve</h2>
          <div className="divider-line anim delay-1"></div>
          <div className="grid-3" style={{ textAlign: 'left' }}>
            {industries.map((ind, i) => {
              const IconComponent = industryIconMap[ind.icon];
              return (
                <div key={ind.id} className={`card anim delay-${i + 1}`}>
                  <div className="card-icon card-icon-blue">
                    {IconComponent && <IconComponent size={24} />}
                  </div>
                  <h3 className="card-title">{ind.name}</h3>
                  <p className="card-desc" style={{ marginBottom: 16 }}>{ind.description}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {ind.personas.map((p) => (
                      <span key={p} className="persona-tag">{p}</span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== CLIENT LOGOS ===== */}
      <section className="experience-section">
        <div className="container text-center">
          <h2 className="section-title anim">Our Experience</h2>
        </div>
        <div style={{ overflow: 'hidden' }}>
          <div className="marquee-track" ref={marqueeRef}>
            {clientLogos.map((logo) => (
              <img key={logo.src} src={logo.src} alt={logo.alt} className="marquee-logo" loading="lazy" />
            ))}
            {clientLogos.map((logo) => (
              <img key={`dup-${logo.src}`} src={logo.src} alt={logo.alt} className="marquee-logo" loading="lazy" />
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 8: WHY MYELEKTRA ===== */}
      <section className="section-dark section-padding">
        <div className="container text-center">
          <h2 className="section-title-white anim">Why Myelektra</h2>
          <div className="divider-line anim delay-1"></div>
          <div className="grid-3" style={{ textAlign: 'left' }}>
            {whyMyelektra.map((item, i) => {
              const IconComponent = whyIcons[i];
              return (
                <div key={item.title} className={`card-dark anim delay-${i + 1}`}>
                  <div className="card-icon card-icon-teal">
                    {IconComponent && <IconComponent size={24} />}
                  </div>
                  <h3 className="card-title" style={{ color: '#fff' }}>{item.title}</h3>
                  <p className="card-desc-dark">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== SECTION 9: ACADEMY TEASER ===== */}
      <section className="section-gradient section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)', backgroundSize: '60px 60px', opacity: 0.3 }}></div>
        <div className="container text-center" style={{ position: 'relative' }}>
          <div className="anim" style={{ width: 64, height: 64, background: 'rgba(255,255,255,0.1)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
            <GradCapIcon size={32} className="text-white" />
          </div>
          <h2 className="section-title-white anim delay-1">Myelektra Academy</h2>
          <p className="anim delay-2" style={{ color: 'rgba(255,255,255,0.9)', fontSize: 20, fontWeight: 500, marginBottom: 12 }}>
            Build an AI-Enabled B2B Sales Team
          </p>
          <p className="anim delay-3" style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 640, margin: '0 auto 32px', fontSize: 18 }}>
            Myelektra Academy helps founders, sales leaders, business development teams, and corporate sales professionals adopt modern B2B selling practices.
          </p>
          <div className="anim delay-4" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24, marginBottom: 32 }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 24 }}>
              <div style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(4px)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 12, padding: '20px 28px', textAlign: 'center' }}>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>Public Classes</p>
                <p style={{ color: '#fff', fontWeight: 700, fontSize: 24, fontFamily: 'var(--font-mono)' }}>From USD xx</p>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12 }}>per participant</p>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(4px)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 12, padding: '20px 28px', textAlign: 'center' }}>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>Corporate Training</p>
                <p style={{ color: '#fff', fontWeight: 700, fontSize: 24, fontFamily: 'var(--font-mono)' }}>From USD x,xxx</p>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12 }}>per batch</p>
              </div>
            </div>
          </div>
          <Link to="/academy" className="btn anim delay-5" style={{ background: '#fff', color: 'var(--blue)', fontSize: 16, padding: '14px 28px', borderRadius: 8, fontWeight: 600 }}>
            Explore Myelektra Academy
            <ArrowRightIcon size={18} />
          </Link>
        </div>
      </section>

      {/* ===== SECTION 10: FINAL CTA ===== */}
      <section className="section-dark section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg,var(--navy-dark),rgba(26,115,232,0.15),rgba(0,200,150,0.08))' }}></div>
        <div className="container text-center" style={{ position: 'relative' }}>
          <h2 className="section-title-white anim" style={{ maxWidth: 800, marginLeft: 'auto', marginRight: 'auto' }}>
            Built for Companies That Want More Than Contact Data
          </h2>
          <p className="anim delay-1" style={{ color: 'rgba(232,236,241,0.6)', maxWidth: 720, margin: '0 auto 32px', fontSize: 18, lineHeight: 1.7 }}>
            You do not need another spreadsheet filled with names. You need a clear target market, relevant decision-makers, professional engagement, disciplined follow-up, reliable CRM data, and visibility into your revenue pipeline. That is the system Myelektra builds.
          </p>
          <p className="anim delay-2" style={{ color: 'var(--teal)', fontWeight: 600, fontSize: 20, marginBottom: 12, fontFamily: 'var(--font-heading)' }}>
            Ready to Build Your Revenue System?
          </p>
          <p className="anim delay-3" style={{ color: 'rgba(232,236,241,0.5)', maxWidth: 560, margin: '0 auto 32px' }}>
            Start with a discovery session to review your target market, current sales process, HubSpot requirements, and growth priorities.
          </p>
          <Link to="/consultation" className="btn btn-primary btn-large anim delay-4">
            Book a Revenue Consultation
            <ArrowRightIcon size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
