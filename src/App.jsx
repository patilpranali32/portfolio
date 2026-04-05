
import { useState, useEffect, useRef } from "react";

// ── Data ──────────────────────────────────────────────────────
const SKILLS = [
  { icon: "⌨", title: "Programming", tags: ["Python", "Core Java"] },
  { icon: "🌐", title: "Web", tags: ["HTML", "CSS", "JavaScript", "PHP"] },
  { icon: "🗄", title: "Database", tags: ["MySQL"] },
  { icon: "🔌", title: "IoT / Hardware", tags: ["Arduino", "Embedded C", "RFID", "Servo Motor"] },
  { icon: "🤖", title: "Emerging Tech", tags: ["Generative AI", "IoT Systems"] },
  { icon: "💡", title: "Soft Skills", tags: ["Problem Solving", "Analytical", "Organized"] },
];

const PROJECTS = [
  {
    num: "01",
    title: "Smart Toll & Street Light Automation",
    tools: ["Arduino", "Embedded C", "RFID", "Ultrasonic", "Servo Motor"],
    desc: "IoT-based roadway system that automates street lighting and implements RFID-based toll gate authentication for secure vehicle access with a buzzer alert for unauthorized entry.",
  },
  {
    num: "02",
    title: "Online Vehicle Showroom for Test Ride",
    tools: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    desc: "Full-stack web platform enabling users to browse vehicles, view specs, and book test rides. Features separate admin and user modules for secure inventory and booking management.",
  },
];

const CERTS = [
  { icon: "🐍", name: "Python 3.4.3 Training", org: "Spoken Tutorial · IIT Bombay" },
  { icon: "🤖", name: "3-Day Workshop on Generative AI", org: "GIT Belgaum · Xerxez Solutions" },
];

const ACHIEVEMENTS = [
  "Participated in a coding event at college that enhanced problem-solving and programming skills.",
  "Actively volunteered in EVOGEN 2024, contributing to event preparation and logistics.",
];


// ── Hooks ─────────────────────────────────────────────────────
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

// ── Shared Components ─────────────────────────────────────────
function Reveal({ children, delay = 0 }) {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(36px)",
      transition: `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms`,
    }}>
      {children}
    </div>
  );
}

function SectionLabel({ children }) {
  return (
    <div style={{ fontSize: "0.65rem", letterSpacing: "0.35em", textTransform: "uppercase",
      color: "var(--accent)", marginBottom: "0.7rem", display: "flex", alignItems: "center", gap: "1rem" }}>
      {children}
      <span style={{ flex: 1, height: 1, background: "var(--border)", maxWidth: 100 }} />
    </div>
  );
}

function SectionTitle({ children }) {
  return (
    <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(2rem,4vw,3.2rem)",
      fontWeight: 300, marginBottom: "2.5rem", lineHeight: 1.1 }}>
      {children}
    </h2>
  );
}

function Divider() {
  return <div style={{ height: 1, background: "var(--border)", maxWidth: 1100, margin: "0 auto" }} />;
}

// ── Nav ───────────────────────────────────────────────────────
function Nav() {
  const links = ["About", "Skills", "Projects", "Certifications", "Achievements", "Contact"];
  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      padding: "1.2rem 2.5rem", display: "flex", justifyContent: "space-between", alignItems: "center",
      backdropFilter: "blur(18px)", background: "rgba(10,10,15,0.75)", borderBottom: "1px solid var(--border)" }}>
      <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.3rem", fontWeight: 600, color: "var(--accent)" }}>PP</span>
      <div style={{ display: "flex", gap: "2rem" }}>
        {links.map((l) => (
          <a key={l} href={`#${l.toLowerCase()}`} style={{ color: "var(--muted)", textDecoration: "none",
            fontSize: "0.68rem", letterSpacing: "0.14em", textTransform: "uppercase" }}>{l}</a>
        ))}
      </div>
    </nav>
  );
}

// ── Hero ──────────────────────────────────────────────────────
function Hero() {
  const s = { animation: "fadeUp 0.9s ease forwards", opacity: 0 };
  return (
    <section id="about" style={{ minHeight: "100vh", display: "flex", flexDirection: "column",
      justifyContent: "center", padding: "8rem 8vw 4rem", position: "relative", overflow: "hidden" }}>
      {/* Ambient glow blobs */}
      {[["var(--accent)","55%","-80px","0s"],["var(--accent2)","25%","-60px","-3s"],["var(--accent3)","40%","35%","-5s"]].map(([c, top, right, delay], i) => (
        <div key={i} style={{ position: "absolute", width: 420, height: 420, borderRadius: "50%",
          background: c, filter: "blur(90px)", opacity: 0.1, top, right,
          animation: `drift 7s ease-in-out ${delay} infinite alternate`, pointerEvents: "none" }} />
      ))}
      <p style={{ ...s, animationDelay: "0.2s", fontSize: "0.68rem", letterSpacing: "0.3em",
        textTransform: "uppercase", color: "var(--accent)", marginBottom: "1.2rem" }}>
        MCA Student · Developer · Creator
      </p>
      <h1 style={{ ...s, animationDelay: "0.4s", fontFamily: "'Cormorant Garamond',serif",
        fontSize: "clamp(3.5rem,8vw,8rem)", fontWeight: 300, lineHeight: 0.95 }}>
        Pranali<br />
        <em style={{ fontStyle: "italic", color: "var(--accent)" }}>Patil</em>
      </h1>
      <p style={{ ...s, animationDelay: "0.6s", marginTop: "2rem", fontSize: "0.82rem",
        color: "var(--muted)", maxWidth: 440, lineHeight: 1.95 }}>
        Building thoughtful digital experiences at the intersection of software engineering and
        creative problem-solving. Based in Belagavi, Karnataka.
      </p>
      <div style={{ ...s, animationDelay: "0.8s", marginTop: "2.5rem", display: "flex", gap: "1.5rem", alignItems: "center" }}>
        <a href="#projects" style={{ padding: "0.8rem 2rem", background: "var(--accent)", color: "#0a0a0f",
          textDecoration: "none", fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase",
          clipPath: "polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px))" }}>
          View Projects
        </a>
        <a href="#contact" style={{ color: "var(--muted)", textDecoration: "none",
          fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase",
          borderBottom: "1px solid var(--border)", paddingBottom: 2 }}>
          Get In Touch →
        </a>
      </div>
    </section>
  );
}

// ── About ─────────────────────────────────────────────────────
function AboutSection() {
  const stats = [["9.27","BCA CGPA"],["2+","Projects"],["2","Certs"],["5+","Technologies"]];
  return (
    <section style={{ padding: "6rem 8vw", maxWidth: 1100, margin: "0 auto" }}>
      <Reveal><SectionLabel>About</SectionLabel></Reveal>
      <Reveal delay={80}><SectionTitle>Driven by curiosity, <em style={{ fontStyle: "italic", color: "var(--accent)" }}>grounded in craft</em></SectionTitle></Reveal>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem" }}>
        <Reveal delay={120}>
          <div style={{ fontSize: "0.85rem", color: "var(--muted)", lineHeight: 2 }}>
            <p>I am a <strong style={{ color: "#e8e8f0", fontWeight: 400 }}>MCA student</strong> at Visvesvaraya Technological University, Belagavi — organized, self-motivated, and analytically strong.</p>
            <p style={{ marginTop: "1rem" }}>My <strong style={{ color: "#e8e8f0", fontWeight: 400 }}>BCA from Rani Channamma University</strong> saw me graduate with a CGPA of 9.27. I thrive at the intersection of hardware and software.</p>
          </div>
        </Reveal>
        <Reveal delay={160}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
            {stats.map(([n, l]) => (
              <div key={l} style={{ background: "var(--card)", padding: "1.8rem 1.4rem", border: "1px solid var(--border)" }}>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "2.5rem", fontWeight: 300, color: "var(--accent)" }}>{n}</div>
                <div style={{ fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--muted)", marginTop: "0.4rem" }}>{l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ── Skills ────────────────────────────────────────────────────
function SkillsSection() {
  return (
    <section id="skills" style={{ padding: "6rem 8vw", maxWidth: 1100, margin: "0 auto" }}>
      <Reveal><SectionLabel>Technical Skills</SectionLabel></Reveal>
      <Reveal delay={80}><SectionTitle>Tools of the <em style={{ fontStyle: "italic", color: "var(--accent)" }}>trade</em></SectionTitle></Reveal>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 2 }}>
        {SKILLS.map((s, i) => (
          <Reveal key={s.title} delay={i * 60}>
            <div style={{ background: "var(--card)", padding: "2rem", border: "1px solid var(--border)", height: "100%" }}>
              <div style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>{s.icon}</div>
              <div style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "1rem" }}>{s.title}</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {s.tags.map((t) => (
                  <span key={t} style={{ padding: "0.3rem 0.75rem", border: "1px solid var(--border)", fontSize: "0.68rem", color: "var(--muted)" }}>{t}</span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

// ── Projects ──────────────────────────────────────────────────
function ProjectsSection() {
  return (
    <section id="projects" style={{ padding: "6rem 8vw", maxWidth: 1100, margin: "0 auto" }}>
      <Reveal><SectionLabel>Projects</SectionLabel></Reveal>
      <Reveal delay={80}><SectionTitle>Selected <em style={{ fontStyle: "italic", color: "var(--accent)" }}>works</em></SectionTitle></Reveal>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
        {PROJECTS.map((p, i) => (
          <Reveal key={p.num} delay={i * 100}>
            <div style={{ background: "var(--card)", padding: "2.5rem", border: "1px solid var(--border)", position: "relative", minHeight: 300 }}>
              <div style={{ position: "absolute", top: "0.8rem", right: "1.2rem",
                fontFamily: "'Cormorant Garamond',serif", fontSize: "3.5rem", fontWeight: 300, color: "rgba(126,232,200,0.07)" }}>
                {p.num}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem", marginBottom: "1.3rem" }}>
                {p.tools.map((t) => (
                  <span key={t} style={{ padding: "0.22rem 0.65rem", background: "rgba(126,232,200,0.07)",
                    border: "1px solid rgba(126,232,200,0.15)", fontSize: "0.6rem", color: "var(--accent)" }}>{t}</span>
                ))}
              </div>
              <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.55rem", fontWeight: 400, marginBottom: "0.9rem" }}>{p.title}</h3>
              <p style={{ fontSize: "0.76rem", color: "var(--muted)", lineHeight: 1.85 }}>{p.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

// ── Certifications ────────────────────────────────────────────
function CertsSection() {
  return (
    <section id="certifications" style={{ padding: "6rem 8vw", maxWidth: 1100, margin: "0 auto" }}>
      <Reveal><SectionLabel>Certifications</SectionLabel></Reveal>
      <Reveal delay={80}><SectionTitle>Learning never <em style={{ fontStyle: "italic", color: "var(--accent2)" }}>stops</em></SectionTitle></Reveal>
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {CERTS.map((c, i) => (
          <Reveal key={c.name} delay={i * 80}>
            <div style={{ background: "var(--card)", padding: "1.8rem 2rem", border: "1px solid var(--border)", display: "flex", alignItems: "center", gap: "1.5rem" }}>
              <div style={{ width: 46, height: 46, background: "rgba(196,126,255,0.08)", border: "1px solid rgba(196,126,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem" }}>{c.icon}</div>
              <div>
                <div style={{ fontSize: "0.88rem", color: "#e8e8f0", marginBottom: "0.3rem" }}>{c.name}</div>
                <div style={{ fontSize: "0.65rem", letterSpacing: "0.1em", color: "var(--muted)", textTransform: "uppercase" }}>{c.org}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

// ── Achievements ──────────────────────────────────────────────
function AchievementsSection() {
  return (
    <section id="achievements" style={{ padding: "6rem 8vw", maxWidth: 1100, margin: "0 auto" }}>
      <Reveal><SectionLabel>Achievements</SectionLabel></Reveal>
      <Reveal delay={80}><SectionTitle>Beyond the <em style={{ fontStyle: "italic", color: "var(--accent3)" }}>classroom</em></SectionTitle></Reveal>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
        {ACHIEVEMENTS.map((a, i) => (
          <Reveal key={i} delay={i * 80}>
            <div style={{ background: "var(--card)", padding: "2.2rem", border: "1px solid var(--border)", borderLeft: "3px solid var(--accent3)" }}>
              <p style={{ fontSize: "0.8rem", color: "var(--muted)", lineHeight: 1.9 }}>{a}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

// ── Contact ───────────────────────────────────────────────────
function ContactSection() {
  const links = [
    { icon: "✉", label: "pranalipatil1214@gmail.com", href: "mailto:pranalipatil1214@gmail.com" },
    { icon: "📞", label: "+91 78928 43879", href: "tel:+917892843879" },
    { icon: "🔗", label: "LinkedIn Profile", href: "https://www.linkedin.com/in/pranali-patil-p3879" },
  ];
  return (
    <section id="contact" style={{ padding: "6rem 8vw", textAlign: "center" }}>
      <div style={{ maxWidth: 560, margin: "0 auto" }}>
        <Reveal><SectionLabel>Contact</SectionLabel></Reveal>
        <Reveal delay={80}>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(2.2rem,4vw,3.8rem)", fontWeight: 300, marginBottom: "1.5rem" }}>
            Let's build something <em style={{ fontStyle: "italic", color: "var(--accent)" }}>together</em>
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "center" }}>
            {links.map(({ icon, label, href }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer"
                style={{ display: "flex", alignItems: "center", gap: "0.8rem", color: "var(--muted)",
                  textDecoration: "none", fontSize: "0.75rem", padding: "0.9rem 2rem",
                  border: "1px solid var(--border)", width: "100%", maxWidth: 380, justifyContent: "center" }}>
                <span>{icon}</span> {label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ── App ───────────────────────────────────────────────────────
export default function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <Divider /><AboutSection />
      <Divider /><SkillsSection />
      <Divider /><ProjectsSection />
      <Divider /><CertsSection />
      <Divider /><AchievementsSection />
      <Divider /><ContactSection />
      <footer style={{ textAlign: "center", padding: "2.5rem", borderTop: "1px solid var(--border)",
        fontSize: "0.62rem", color: "var(--muted)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
        Pranali Patil · Belagavi, Karnataka · 2025
      </footer>
    </div>
  );
}