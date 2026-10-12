import { useMemo, useState } from 'react'
import {
  ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Menu, X,
  Code2, GraduationCap, BriefcaseBusiness, Sparkles, CheckCircle2,
  Calculator as CalculatorIcon, ListTodo, Send, Download, ExternalLink
} from 'lucide-react'

const projects = [
  {
    title: 'Calculator App',
    type: 'Web Application',
    description: 'A clean, responsive calculator for everyday arithmetic with a simple and easy-to-use interface.',
    stack: ['React', 'CSS', 'JavaScript'],
    icon: CalculatorIcon,
    link: 'https://fortunado-calculator.vercel.app/',
    number: '01',
  },
  {
    title: 'To-Do List App',
    type: 'Productivity Tool',
    description: 'A lightweight task manager that helps users add tasks, mark them complete, and stay organized.',
    stack: ['React', 'CSS', 'JavaScript'],
    icon: ListTodo,
    link: 'https://fortunado-todo-list.vercel.app/',
    number: '02',
  },
]

const skills = ['HTML5', 'CSS3', 'JavaScript', 'ReactJS', 'Tailwind CSS', 'Python', 'SQL / MySQL', 'Git & GitHub']

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="section-title">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState('All')
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [formMessage, setFormMessage] = useState('')

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects
    return projects.filter((project) => project.type === activeFilter)
  }, [activeFilter])

  const closeMenu = () => setMenuOpen(false)

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText('your.email@example.com')
      setCopiedEmail(true)
      window.setTimeout(() => setCopiedEmail(false), 1800)
    } catch {
      setCopiedEmail(false)
      window.location.href = 'mailto:your.email@example.com'
    }
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setFormMessage('Please complete all fields before sending.')
      return
    }
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    setFormMessage('Your email app should open with your message ready to send.')
    window.location.href = `mailto:your.email@example.com?subject=${subject}&body=${body}`
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <a href="#home" className="brand" onClick={closeMenu} aria-label="Go to homepage">
          <span className="brand-mark">J.</span>
          <span>PORTFOLIO<span className="brand-period">.</span></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={`nav-links ${menuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
          {['Home', 'About', 'Projects', 'Resume', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let’s talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <p className="availability"><span className="status-dot" /> IT STUDENT · ASPIRING DEVELOPER</p>
            <h1>Turning ideas<br />into <span className="outline-text">digital</span><br />experiences<span className="hero-period">.</span></h1>
            <p className="hero-intro">Hi, I’m <strong>Mary Rose Fortunado</strong> — an IT student who enjoys building clean, useful, and user-friendly web experiences.</p>
            <div className="hero-actions">
              <a className="button button-light" href="#projects">Explore my work <ArrowDown size={16} /></a>
              <a className="button button-outline" href="#contact">Get in touch <ArrowUpRight size={16} /></a>
            </div>
            <div className="hero-meta">
              <div><span className="meta-label">BASED IN</span><span>Philippines</span></div>
              <div><span className="meta-label">FOCUS</span><span>Front-end development</span></div>
            </div>
          </div>
          <div className="hero-art" aria-label="Decorative abstract black and white graphic">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-square"><Code2 size={68} strokeWidth={1.15} /></div>
            <span className="art-label art-label-top">DESIGN / BUILD</span>
            <span className="art-label art-label-bottom">LEARN. CREATE. REPEAT.</span>
            <span className="art-cross cross-one">+</span><span className="art-cross cross-two">+</span>
          </div>
          <a className="scroll-cue" href="#about"><span /> SCROLL TO EXPLORE</a>
        </section>

        <section className="about section-wrap section-pad" id="about">
          <SectionTitle eyebrow="01 — A LITTLE ABOUT ME" title={<>Curious mind.<br /><span className="muted">Builder’s mindset.</span></>} />
          <div className="about-grid">
            <div className="about-copy">
              <p className="lead">I’m a college IT student who likes exploring how technology can solve everyday problems.</p>
              <p>I’m learning by building projects, experimenting with new tools, and improving one step at a time. My goal is to become a developer who creates practical digital products that are simple to use and thoughtful in design.</p>
              <p>Outside of coding, I enjoy learning new skills, collaborating with others, and finding inspiration in everyday life.</p>
              <a className="text-link" href="#contact">Let’s connect <ArrowUpRight size={16} /></a>
            </div>
            <div className="about-facts">
              <div className="fact-card"><span className="fact-icon"><GraduationCap size={22} /></span><div><h3>Education</h3><p>BS Information Technology</p><span>Cavite State University — Tanza Campus</span></div></div>
              <div className="fact-card"><span className="fact-icon"><Code2 size={22} /></span><div><h3>What I do</h3><p>Front-end development</p><span>Responsive websites and web apps</span></div></div>
              <div className="fact-card"><span className="fact-icon"><Sparkles size={22} /></span><div><h3>Currently improving</h3><p>React and UI development</p><span>Learning through hands-on projects</span></div></div>
            </div>
          </div>
        </section>

        <section className="skills-band">
          <div className="section-wrap skills-inner">
            <div><p className="eyebrow">MY TOOLKIT</p><h2>Skills & technologies</h2></div>
            <div className="skill-tags">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
          </div>
        </section>

        <section className="projects section-wrap section-pad" id="projects">
          <SectionTitle eyebrow="02 — SELECTED WORK" title={<>Small projects.<br /><span className="muted">Real practice.</span></>} description="A couple of projects I’ve built while developing my skills in front-end development." />
          <div className="project-toolbar">
            <span>{filteredProjects.length.toString().padStart(2, '0')} PROJECTS</span>
            <div className="filter-buttons" aria-label="Filter projects">
              {['All', 'Web Application', 'Productivity Tool'].map((filter) => <button key={filter} className={activeFilter === filter ? 'filter-active' : ''} onClick={() => setActiveFilter(filter)}>{filter}</button>)}
            </div>
          </div>
          <div className="project-grid">
            {filteredProjects.map((project) => {
              const ProjectIcon = project.icon
              return <article className="project-card" key={project.title}>
                <div className="project-preview">
                  <div className="preview-top"><span>J. / PROJECT {project.number}</span><span>↗</span></div>
                  <div className="preview-center"><ProjectIcon size={54} strokeWidth={1.1} /><span>{project.title}</span></div>
                  <div className="preview-bottom"><span>INTERACTIVE WEB APP</span><span>2026</span></div>
                </div>
                <div className="project-content">
                  <div className="project-heading"><div><p className="eyebrow">{project.type}</p><h3>{project.title}</h3></div><a className="round-link" href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}><ExternalLink size={18} /></a></div>
                  <p>{project.description}</p>
                  <div className="project-stack">{project.stack.map((tech) => <span key={tech}>{tech}</span>)}</div>
                  <a className="text-link" href={project.link} target="_blank" rel="noreferrer">View live project <ArrowUpRight size={16} /></a>
                </div>
              </article>
            })}
          </div>
        </section>

        <section className="resume-section" id="resume">
          <div className="section-wrap section-pad resume-grid">
            <div><SectionTitle eyebrow="03 — RESUME / CV" title={<>My learning<br /><span className="muted">journey so far.</span></>} description="My current focus is building a strong foundation in software development and applying what I learn in practical projects." /></div>
            <div className="timeline">
              <article className="timeline-item"><span className="timeline-dot" /><span className="timeline-date">COLLEGE</span><h3>BS Information Technology</h3><p className="timeline-place">Cavite State University — Tanza Campus</p><p>Studying programming, web development, databases, and core IT concepts through coursework and projects.</p></article>
              <article className="timeline-item"><span className="timeline-dot" /><span className="timeline-date">PROJECT EXPERIENCE</span><h3>Personal Web Projects</h3><p className="timeline-place">Independent / Academic Practice</p><p>Built a calculator and a to-do list app to practice interactive interfaces, component structure, and responsive styling.</p></article>
              <article className="timeline-item"><span className="timeline-dot" /><span className="timeline-date">TECHNICAL SKILLS</span><h3>Tools I’m learning and using</h3><p className="timeline-place">Development toolkit</p><p>ReactJS, Tailwind CSS, HTML, CSS, JavaScript, Python, SQL, GitHub, and Vercel.</p></article>
            </div>
          </div>
        </section>

        <section className="contact section-wrap section-pad" id="contact">
          <div className="contact-top">
            <div><SectionTitle eyebrow="04 — CONTACT" title={<>Have an idea?<br /><span className="muted">Let’s talk.</span></>} description="Have a question, collaboration idea, or opportunity? Send me a message." /></div>
            <div className="contact-email"><span className="eyebrow">EMAIL ME DIRECTLY</span><button onClick={copyEmail} className="email-copy"><Mail size={18} /> your.email@example.com <span>{copiedEmail ? 'COPIED!' : 'COPY'}</span></button><p>Replace this placeholder with your real email address.</p></div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label>Your name<input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Name" required /></label>
              <label>Your email<input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="name@example.com" required /></label>
            </div>
            <label>Your message<textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell me a little about your message..." rows="4" required /></label>
            <div className="form-bottom"><button className="button button-light" type="submit">Send message <Send size={16} /></button>{formMessage && <p className="form-message" role="status">{formMessage}</p>}</div>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-wrap footer-inner"><a href="#home" className="brand"><span className="brand-mark">J.</span><span>PORTFOLIO<span className="brand-period">.</span></span></a><p>Designed and built with ReactJS & Tailwind CSS.</p><div className="footer-links"><a href="#home">Back to top ↑</a><a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a></div></div>
        <div className="section-wrap copyright"><span>© {new Date().getFullYear()} Jerry Cabiles</span><span>BLACK / WHITE — PERSONAL PORTFOLIO</span></div>
      </footer>
    </div>
  )
}

export default App
