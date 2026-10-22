import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowUpRight, BarChart3, BookOpen, BriefcaseBusiness, CheckCircle2, ChevronRight, Code2, Globe2, Instagram, Linkedin, Menu, Search, Sparkles, Target, TrendingUp, X } from 'lucide-react';
import './style.css';

const skills = [
  { icon: Search, title: 'Keyword Research', text: 'Discovering relevant search terms, understanding intent, and mapping keywords to useful pages.' },
  { icon: Code2, title: 'Technical SEO', text: 'Helping search engines crawl, render, and understand a website through sound technical foundations.' },
  { icon: BookOpen, title: 'On-Page SEO', text: 'Improving page structure, titles, headings, internal links, and content relevance.' },
  { icon: Globe2, title: 'Off-Page SEO', text: 'Supporting authority and visibility through ethical outreach and a thoughtful link strategy.' },
  { icon: BarChart3, title: 'SEO Analysis', text: 'Reviewing performance data, identifying opportunities, and prioritizing meaningful improvements.' },
  { icon: TrendingUp, title: 'Content Optimization', text: 'Making content helpful, clear, search-focused, and aligned with audience needs.' },
];
const services = ['SEO audits & opportunity analysis', 'Keyword research and search intent mapping', 'On-page optimization recommendations', 'Technical SEO checks', 'Content structure and internal linking', 'Performance monitoring and reporting'];
const journey = [
  { no: '01', title: 'SEO Expert', org: 'MicroDeft', desc: 'Working in SEO with a focus on improving organic visibility, understanding search intent, and supporting sustainable website growth.' },
  { no: '02', title: 'BBA Student', org: 'Canadian University of Bangladesh', desc: 'Pursuing business studies and building a broader understanding of business, communication, and digital opportunities.' },
  { no: '03', title: 'Always Learning', org: 'SEO & Digital Growth', desc: 'Continuously exploring search updates, practical SEO methods, analytics, and the evolving digital landscape.' },
];
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [year] = useState(new Date().getFullYear());
  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
    }), { threshold: 0.12 });
    nodes.forEach(n => observer.observe(n));
    return () => observer.disconnect();
  }, []);
  const closeMenu = () => setMenuOpen(false);
  return <div className="site-shell">
    <div className="ambient ambient-one"></div><div className="ambient ambient-two"></div>
    <header className="nav-wrap">
      <nav className="nav container" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">AR</span><span>Abid Hasan Rafi<span className="brand-dot">.</span></span></a>
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
        <div className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
          {['About','Expertise','Journey','Contact'].map(item => <a key={item} href={'#'+item.toLowerCase()} onClick={closeMenu}>{item}</a>)}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let’s connect <ArrowUpRight size={15}/></a>
        </div>
      </nav>
    </header>
    <main>
      <section className="hero container" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot"></span> SEO EXPERT · DIGITAL GROWTH</div>
          <h1>Hi, I’m <span className="gradient-text">Abid Hasan Rafi.</span><br/>I help websites<br/><span className="outline-text">get discovered.</span></h1>
          <p className="hero-description">I’m an SEO Expert at <strong>MicroDeft</strong> and a BBA student at <strong>Canadian University of Bangladesh</strong>. I’m passionate about search visibility, useful content, and building a stronger digital presence.</p>
          <div className="hero-actions"><a className="button button-primary" href="#about">Explore my profile <ArrowDown size={17}/></a><a className="button button-ghost" href="#contact">Connect with me <ArrowUpRight size={17}/></a></div>
          <div className="hero-meta"><span><span className="mini-check">✓</span> SEO-focused mindset</span><span><span className="mini-check">✓</span> Learning every day</span></div>
        </div>
        <div className="hero-art" aria-label="Abstract SEO growth illustration">
          <div className="orbit orbit-a"></div><div className="orbit orbit-b"></div>
          <div className="hero-card card-main"><div className="card-top"><span className="tiny-label">ORGANIC GROWTH</span><span className="live-pill"><i></i> STRATEGY</span></div><div className="chart-title">Visibility starts with intent.</div>
            <div className="chart-area"><div className="chart-grid"></div><svg viewBox="0 0 420 175" role="img" aria-label="Decorative upward growth line"><defs><linearGradient id="lineGrad" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stopColor="#6a78ff"/><stop offset="1" stopColor="#67f0c5"/></linearGradient><linearGradient id="fillGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#67f0c5" stopOpacity=".24"/><stop offset="1" stopColor="#67f0c5" stopOpacity="0"/></linearGradient></defs><path d="M0 150 C35 137 40 110 78 121 S130 94 160 105 S215 62 248 82 S300 30 330 49 S380 10 420 13 L420 175 L0 175Z" fill="url(#fillGrad)"/><path d="M0 150 C35 137 40 110 78 121 S130 94 160 105 S215 62 248 82 S300 30 330 49 S380 10 420 13" fill="none" stroke="url(#lineGrad)" strokeWidth="4" strokeLinecap="round"/><circle cx="330" cy="49" r="5" fill="#67f0c5" stroke="#101629" strokeWidth="3"/></svg></div>
            <div className="chart-foot"><span>Research</span><span>Optimize</span><span>Measure</span><span>Improve</span></div>
          </div>
          <div className="float-chip chip-search"><Search size={16}/><span>Search intent</span></div><div className="float-chip chip-rank"><TrendingUp size={17}/><span>Organic growth</span></div>
          <div className="hero-badge"><Sparkles size={17}/><span>Curious by nature<br/><b>SEO by practice</b></span></div>
        </div>
        <a href="#about" className="scroll-cue"><span></span> SCROLL TO EXPLORE</a>
      </section>
      <section className="trust-strip"><div className="container strip-inner"><span>PROFESSIONAL PROFILE</span><b>SEO & DIGITAL VISIBILITY</b><i></i><b>BUSINESS STUDIES</b><i></i><b>CONTINUOUS LEARNING</b></div></section>
      <section className="section container reveal" id="about">
        <div className="section-heading"><div><span className="eyebrow">01 / ABOUT ME</span><h2>Strategy-minded.<br/><span className="gradient-text">Search-focused.</span></h2></div><p className="section-intro">A little about who I am, what I do, and the professional direction I’m building.</p></div>
        <div className="about-grid"><div className="about-panel"><div className="panel-icon"><Target size={23}/></div><h3>My approach to SEO</h3><p>Good SEO starts with understanding people: what they search for, what they need, and how a website can help. I focus on the fundamentals—relevance, clarity, technical health, and continuous improvement.</p><p>My goal is to contribute to sustainable organic growth by combining research, structured thinking, and practical optimization.</p><div className="tag-row"><span>Search intent</span><span>Helpful content</span><span>Data-informed</span></div></div>
          <div className="facts-panel"><div className="fact-row"><span className="fact-icon"><BriefcaseBusiness/></span><div><small>CURRENT ROLE</small><h3>SEO Expert</h3><p>MicroDeft</p></div><ArrowUpRight className="fact-arrow"/></div><div className="fact-row"><span className="fact-icon"><BookOpen/></span><div><small>EDUCATION</small><h3>BBA Student</h3><p>Canadian University of Bangladesh</p></div><ArrowUpRight className="fact-arrow"/></div><div className="fact-row"><span className="fact-icon"><Sparkles/></span><div><small>PROFESSIONAL INTEREST</small><h3>Organic Search Growth</h3><p>SEO, content, analytics & digital strategy</p></div><ArrowUpRight className="fact-arrow"/></div></div></div>
      </section>
      <section className="section expertise-section" id="expertise"><div className="container reveal"><div className="section-heading"><div><span className="eyebrow">02 / EXPERTISE</span><h2>SEO fundamentals<br/>that <span className="gradient-text">move forward.</span></h2></div><p className="section-intro">Core SEO areas I work with and continue to develop through practice and learning.</p></div><div className="skill-grid">{skills.map(({icon:Icon,title,text},i)=><article className="skill-card" key={title} style={{'--delay':`${i*70}ms`}}><div className="skill-icon"><Icon size={22}/></div><span className="skill-number">0{i+1}</span><h3>{title}</h3><p>{text}</p><a href="#contact" aria-label={`Discuss ${title}`} className="skill-link"><ChevronRight size={17}/></a></article>)}</div></div></section>
      <section className="section container reveal" id="services"><div className="section-heading"><div><span className="eyebrow">03 / WHAT I FOCUS ON</span><h2>From research<br/>to <span className="gradient-text">real improvements.</span></h2></div><p className="section-intro">A practical SEO checklist focused on building a stronger foundation for organic search performance.</p></div><div className="service-layout"><div className="service-copy"><div className="big-number">SEO<span>.</span></div><h3>Make every optimization purposeful.</h3><p>SEO isn’t a single task. It’s a process of understanding the website, finding opportunities, improving the experience, and measuring what changes.</p><a href="#contact" className="text-link">Let’s talk SEO <ArrowUpRight size={16}/></a></div><div className="service-list">{services.map((s,i)=><div className="service-item" key={s}><CheckCircle2 size={19}/><span>{s}</span><span className="service-index">0{i+1}</span></div>)}</div></div></section>
      <section className="section journey-section" id="journey"><div className="container reveal"><div className="section-heading"><div><span className="eyebrow">04 / MY JOURNEY</span><h2>Growing with<br/><span className="gradient-text">every experience.</span></h2></div><p className="section-intro">My professional and academic journey is a work in progress—built through hands-on work, study, and curiosity.</p></div><div className="timeline">{journey.map((j)=><article className="timeline-item" key={j.no}><div className="timeline-no">{j.no}</div><div className="timeline-content"><div className="timeline-top"><h3>{j.title}</h3><span>{j.org}</span></div><p>{j.desc}</p></div><div className="timeline-dot"></div></article>)}</div></div></section>
      <section className="section container reveal" id="values"><div className="values-banner"><div><span className="eyebrow">MY WORKING PRINCIPLES</span><h2>Useful first.<br/><span className="gradient-text">Optimized always.</span></h2><p>I believe sustainable search visibility comes from useful experiences, clear communication, and steady improvements—not shortcuts.</p></div><div className="principle-list"><div><span>01</span><p><b>People before algorithms</b><small>Start with real search needs.</small></p></div><div><span>02</span><p><b>Clarity over complexity</b><small>Make the next action obvious.</small></p></div><div><span>03</span><p><b>Learn, test, improve</b><small>Use evidence to guide decisions.</small></p></div></div></div></section>
      <section className="section contact-section" id="contact"><div className="container reveal"><div className="contact-card"><div className="contact-glow"></div><span className="eyebrow">05 / CONTACT & SOCIAL</span><h2>Let’s build a stronger<br/><span className="gradient-text">digital presence.</span></h2><p>Want to connect professionally, talk about SEO, or share ideas? Find me on my social profiles.</p><div className="social-links"><a href="https://web.facebook.com/abid.hasan.rafi.731010" target="_blank" rel="noreferrer"><span><Globe2 size={18}/></span> Facebook <ArrowUpRight size={16}/></a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><span><Linkedin size={18}/></span> LinkedIn <ArrowUpRight size={16}/></a><a href="https://www.instagram.com/ab_id9630/?hl=en" target="_blank" rel="noreferrer"><span><Instagram size={18}/></span> Instagram <ArrowUpRight size={16}/></a></div><p className="profile-note">Tip: replace the LinkedIn link with your actual profile URL before publishing.</p></div></div></section>
    </main>
    <footer className="footer"><div className="container footer-inner"><a className="brand" href="#home"><span className="brand-mark">AR</span><span>Abid Hasan Rafi<span className="brand-dot">.</span></span></a><p>Personal portfolio · SEO & Digital Growth</p><a href="#home" className="back-top">Back to top ↑</a><small>© {year} Abid Hasan Rafi. All rights reserved.</small></div></footer>
  </div>
}
createRoot(document.getElementById('root')).render(<App/>);