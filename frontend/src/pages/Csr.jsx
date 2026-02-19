import { useNavigate } from "react-router-dom";
import useFadeUp from "../hooks/useFadeUp";
import InfoCard from "../components/InfoCard";
import BackgroundOrbs from "../components/BackgroundOrbs";
import "../styles/CSR.css";

// ════════════════════════════════════════════════════════════════
//  DATA — sourced from PDF
// ════════════════════════════════════════════════════════════════

// College tie-ups
const COLLEGES = [
  { name: "Pillai College", location: "Panvel", icon: "🎓" },
  { name: "K J Somaiya", location: "Vidyavihar", icon: "🎓" },
  { name: "M.H. Saboo Siddik College", location: "Byculla", icon: "🎓" },
  { name: "Dnyanasadhana College", location: "Thane", icon: "🎓" },
];

// Training program media gallery
// Add your real image/video paths from assets here
const GALLERY_MEDIA = [
  { type: "image", src: "/assets/training-1.jpg", caption: "Hands-on Digital Marketing Training Session" },
  { type: "image", src: "/assets/training-2.jpg", caption: "Students Working on Live Projects" },
  { type: "video", src: "/assets/training-video-1.mp4", caption: "Practical Lab Setup — Real Industry Exposure" },
  { type: "image", src: "/assets/training-3.jpg", caption: "Internship Programme in Action" },
  { type: "image", src: "/assets/training-4.jpg", caption: "Female Empowerment — Women in IT & Digital" },
  { type: "video", src: "/assets/training-video-2.mp4", caption: "Career Mentorship & Placement Support" },
];

// Achievements
const ACHIEVEMENTS = [
  {
    icon: "🏆",
    title: "Students Placed",
    description: "Numerous students placed in reputed companies including Cognizant and TCS",
    accent: "teal",
  },
  {
    icon: "💼",
    title: "Internships Provided",
    description: "Internship experience provided to multiple students from top colleges",
    accent: "cyan",
  },
  {
    icon: "👩‍💻",
    title: "Female Empowerment",
    description: "Special focus on empowering women in IT and digital sectors",
    accent: "amber",
  },
  {
    icon: "🤝",
    title: "Industry Partnerships",
    description: "Strong industry connections with 50+ hiring partners across Mumbai & Thane",
    accent: "hot",
  },
  {
    icon: "📈",
    title: "100% Practical Learning",
    description: "Live projects, real-world experience, and job-ready training for all students",
    accent: "teal",
  },
  {
    icon: "🎯",
    title: "Affordable Training",
    description: "Free and affordable training for economically backward students",
    accent: "cyan",
  },
];

// Funding tiers
const FUNDING_TIERS = [
  {
    tier: "bronze",
    name: "Bronze Partner",
    amount: "₹5–10 Lakhs",
    desc: "Support 20–30 students with basic training infrastructure and learning resources.",
    benefits: [
      "Training for 20–30 students",
      "Basic infrastructure support",
      "Brand visibility on website",
      "Quarterly impact reports",
      "Certificate of appreciation",
    ],
  },
  {
    tier: "silver",
    name: "Silver Partner",
    amount: "₹10–25 Lakhs",
    desc: "Expand training to 50+ students, add mentorship programmes, and provide certifications.",
    benefits: [
      "Training for 50+ students",
      "Faculty & mentorship support",
      "Student certifications included",
      "Brand visibility on website & materials",
      "Bi-annual impact meetings",
      "Internship placements for students",
    ],
  },
  {
    tier: "gold",
    name: "Gold Partner",
    amount: "₹25–50 Lakhs",
    desc: "Full-scale programme expansion — advanced training, placement support, and technology upgrades.",
    benefits: [
      "Training for 100+ students",
      "Advanced technology & learning resources",
      "Dedicated placement support team",
      "Premium brand visibility & co-branding",
      "Quarterly impact meetings",
      "Priority hiring from trained students",
      "Exclusive CSR recognition events",
    ],
  },
  {
    tier: "platinum",
    name: "Platinum Partner",
    amount: "₹50+ Lakhs",
    desc: "Strategic partnership — scale training across Maharashtra, empower 200+ students, and build sustainable digital infrastructure.",
    benefits: [
      "Training for 200+ students",
      "Expand coverage across Maharashtra",
      "Full infrastructure development",
      "Co-branded training centre",
      "Monthly impact dashboards",
      "Exclusive hiring pipeline",
      "National media coverage",
      "Strategic advisory role",
      "Long-term partnership (multi-year)",
    ],
  },
];

// Contact for payment
const CONTACT_DETAILS = [
  { icon: "📧", label: "Email Address", value: "info.gspvtltd@gmail.com", link: "mailto:info.gspvtltd@gmail.com" },
  { icon: "📞", label: "Phone Number", value: "+91 9152359157", link: "tel:+919152359157" },
  { icon: "💬", label: "WhatsApp", value: "+91 9167636706", link: "https://wa.me/919167636706" },
  { icon: "🌐", label: "Website", value: "thenextgenacademy.co.in", link: "https://thenextgenacademy.co.in/" },
];

// Skill India alignment
const SKILL_INDIA_PILLARS = [
  { icon: "🇮🇳", name: "Make in India" },
  { icon: "📱", name: "Digital India" },
  { icon: "🎓", name: "Skill India" },
  { icon: "📚", name: "Education for All" },
];

// Mission cards
const MISSION_CARDS = [
  { icon: "🎯", text: "Bridge the gap between education and employment" },
  { icon: "💼", text: "Ensure students are job-ready with live projects & internships" },
  { icon: "🌍", text: "Contribute to India's digital growth through quality training" },
  { icon: "🤝", text: "Build sustainable careers through skill-based learning" },
];

// ════════════════════════════════════════════════════════════════
//  COMPONENT
// ════════════════════════════════════════════════════════════════

export default function CSRPage() {
  const navigate = useNavigate();
  const go = (p) => { navigate(p); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const fade = useFadeUp();

  return (
    <>
      {/* ════════════════════════════════════════════════════
          HERO SECTION
      ════════════════════════════════════════════════════ */}
      <section className="csr-hero">
        <BackgroundOrbs />
        <div className="csr-hero-glow" />
        <div className="csr-hero-content">
          <div className="badge csr-hero-badge fade-up" ref={fade}>
            <span className="badge-dot" />
            Corporate Social Responsibility
          </div>
          <h1 className="csr-hero-title fade-up" ref={fade}>
            Partner with Us to<br />
            <span className="grad-text">Empower India's Youth</span>
          </h1>
          <p className="csr-hero-subtitle fade-up" ref={fade}>
            Join NextGen Academy in bridging the digital skill gap. Together, we can provide
            quality training, real-world exposure, and sustainable careers to economically
            backward students across Mumbai, Thane, and beyond.
          </p>
          <div className="csr-hero-cta fade-up" ref={fade}>
            <button className="btn-primary" onClick={() => go("/contact")}>
              Partner with Us
            </button>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          SECTION 1 — Who We Are
      ════════════════════════════════════════════════════ */}
      <section className="csr-section csr-section--mid">
        <div className="max-w">
          <div className="sec-head fade-up" ref={fade}>
            <div className="sec-label">// About NextGen Academy</div>
            <h2 className="sec-title">
              Who We Are &amp;<br />
              <span className="grad-text">What We Do</span>
            </h2>
          </div>

          <div className="csr-about-layout">
            {/* Left: description */}
            <div>
              <div className="csr-about-body fade-up" ref={fade}>
                <p>
                  <strong>The NextGen Academy (Established 2024)</strong> is a Mumbai-Thane based,
                  skill-focused Digital Marketing & IT training institute committed to delivering
                  practical, industry-oriented education aligned with current market demands.
                </p>
                <p>
                  We offer structured training, live projects, internships, certifications, and
                  dedicated placement support to ensure students are job-ready.
                </p>
                <p>
                  Within two years, we have trained numerous students, many of whom are placed in
                  reputed organizations such as <strong>Cognizant</strong> and{" "}
                  <strong>Tata Consultancy Services</strong>, among others.
                </p>
                <p>
                  We provide <strong>free and affordable training</strong> to economically backward
                  students, with special focus on <strong>empowering women</strong> in IT and
                  digital sectors.
                </p>
              </div>

              <div className="csr-about-callout fade-up" ref={fade}>
                <p>
                  <strong>Location:</strong> Gokhale Road, Thane West, Maharashtra
                  <br />
                  <strong>Website:</strong>{" "}
                  <a
                    href="https://thenextgenacademy.co.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    thenextgenacademy.co.in
                  </a>
                </p>
              </div>
            </div>

            {/* Right: mission cards */}
            <div>
              <div className="sec-label fade-up" ref={fade}>
                // Our Mission
              </div>
              <div className="csr-mission-cards">
                {MISSION_CARDS.map((m, i) => (
                  <div
                    className={`csr-mission-card csr-delay-${i} fade-up`}
                    key={i}
                    ref={fade}
                  >
                    <div className="csr-mission-icon">{m.icon}</div>
                    <div className="csr-mission-text">{m.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          SECTION 2 — College Tie-Ups
      ════════════════════════════════════════════════════ */}
      <section className="csr-section csr-section--dark">
        <div className="max-w">
          <div className="sec-head fade-up" ref={fade}>
            <div className="sec-label">// Infrastructure & Industry Tie-Ups</div>
            <h2 className="sec-title">
              Partnering with Top<br />
              <span className="grad-text">Colleges in Mumbai & Thane</span>
            </h2>
            <p className="sec-sub">
              We provide internships to students from reputed colleges across the region,
              ensuring they gain real-world exposure and industry-ready skills.
            </p>
          </div>

          <div className="csr-colleges-grid">
            {COLLEGES.map((c, i) => (
              <div
                className={`csr-college-card csr-delay-${i} fade-up`}
                key={i}
                ref={fade}
              >
                <div className="csr-college-icon">{c.icon}</div>
                <div>
                  <div className="csr-college-name">{c.name}</div>
                  <div className="csr-college-location">{c.location}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="csr-about-callout fade-up" ref={fade}>
            <p>
              <strong>Strong industry connections ensure real exposure.</strong> Our tie-ups
              with companies provide internship opportunities and direct placement pathways
              for trained students.
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          SECTION 3 — Training Program Gallery
      ════════════════════════════════════════════════════ */}
      {/* <section className="csr-section csr-section--teal">
        <div className="max-w">
          <div className="sec-head fade-up" ref={fade}>
            <div className="sec-label">// Our Training Programs in Action</div>
            <h2 className="sec-title">
              Real Students, Real Projects,<br />
              <span className="grad-text">Real Results</span>
            </h2>
            <p className="sec-sub">
              See our training programmes in action — from hands-on labs to live projects,
              internships, and career mentorship. Add your own images and videos to showcase
              your impact.
            </p>
          </div>

          <div className="csr-gallery-grid">
            {GALLERY_MEDIA.map((media, i) => (
              <div
                className={`csr-gallery-item csr-delay-${i % 6} fade-up`}
                key={i}
                ref={fade}
              >
                {media.type === "image" ? (
                  <img
                    src={media.src}
                    alt={media.caption}
                    className="csr-gallery-media"
                  />
                ) : (
                  <video
                    src={media.src}
                    controls
                    className="csr-gallery-media"
                  />
                )}
                <div className="csr-gallery-caption">{media.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ════════════════════════════════════════════════════
          SECTION 4 — Achievements
      ════════════════════════════════════════════════════ */}
      <section className="csr-section csr-section--dark">
        <div className="max-w">
          <div className="sec-head fade-up" ref={fade}>
            <div className="sec-label">// Proven Impact</div>
            <h2 className="sec-title">
              Our Achievements &amp;<br />
              <span className="grad-text">Social Impact</span>
            </h2>
            <p className="sec-sub">
              With rising student enrollments, we seek your CSR support to enhance our
              infrastructure and sustain quality, job-oriented skill development programs.
            </p>
          </div>

          <div className="csr-achievements-grid">
            {ACHIEVEMENTS.map((a, i) => (
              <InfoCard
                key={i}
                icon={a.icon}
                title={a.title}
                description={a.description}
                accent={a.accent}
                delay={i % 6}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          SECTION 5 — Funding Tiers
      ════════════════════════════════════════════════════ */}
      <section className="csr-section csr-section--mid">
        <div className="max-w">
          <div className="sec-head fade-up" ref={fade}>
            <div className="sec-label">// CSR Partnership Tiers</div>
            <h2 className="sec-title">
              Choose Your<br />
              <span className="grad-text">Partnership Level</span>
            </h2>
          </div>

          <p className="csr-funding-intro fade-up" ref={fade}>
            We offer flexible partnership tiers based on your CSR budget and impact goals.
            Each tier unlocks specific benefits and enables you to directly contribute to
            India's digital skill development mission.
          </p>

          <div className="csr-funding-tiers">
            {FUNDING_TIERS.map((tier, i) => (
              <div
                className={`csr-funding-tier csr-funding-tier--${tier.tier} csr-delay-${i} fade-up`}
                key={i}
                ref={fade}
              >
                <div className={`csr-funding-tier-bar csr-funding-tier-bar--${tier.tier}`} />
                <div className={`csr-funding-tier-name csr-funding-tier-name--${tier.tier}`}>
                  {tier.name}
                </div>
                <div className="csr-funding-tier-amount">{tier.amount}</div>
                <p className="csr-funding-tier-desc">{tier.desc}</p>
                <ul className="csr-funding-tier-benefits">
                  {tier.benefits.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          SECTION 6 — Contact for Payment
      ════════════════════════════════════════════════════ */}
      <section id="csr-contact" className="csr-section csr-section--dark">
        <div className="max-w">
          <div className="sec-head fade-up" ref={fade}>
            <div className="sec-label">// Get in Touch</div>
            <h2 className="sec-title">
              Ready to Make an<br />
              <span className="grad-text">Impact?</span>
            </h2>
          </div>

          <p className="csr-contact-intro fade-up" ref={fade}>
            For partnership inquiries, funding details, or to request a detailed proposal,
            please reach out to us using any of the channels below. We provide transparent
            reporting, measurable impact metrics, and complete brand visibility for all CSR
            partners.
          </p>

          <div className="csr-contact-grid">
            {CONTACT_DETAILS.map((c, i) => (
              <div
                className={`csr-contact-card csr-delay-${i} fade-up`}
                key={i}
                ref={fade}
              >
                <div className="csr-contact-icon">{c.icon}</div>
                <div className="csr-contact-label">{c.label}</div>
                <div className="csr-contact-value">
                  {c.link ? (
                    <a href={c.link} target="_blank" rel="noopener noreferrer">
                      {c.value}
                    </a>
                  ) : (
                    c.value
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          SECTION 7 — Skill India Alignment
      ════════════════════════════════════════════════════ */}
      <section className="csr-section csr-section--mid">
        <div className="max-w">
          <div className="csr-skill-india fade-up" ref={fade}>
            <div className="csr-skill-india-head">
              <div className="csr-skill-india-badge">
                🇮🇳 Aligned with Government Initiatives
              </div>
              <h2 className="csr-skill-india-title">
                Supporting India's<br />
                <span className="grad-text">National Skill Development Mission</span>
              </h2>
              <p className="csr-skill-india-desc">
                Our mission is directly aligned with the Government of India's key initiatives
                to build a digitally skilled, self-reliant India. By partnering with us, you
                contribute to national development goals and empower the next generation of
                digital professionals.
              </p>
            </div>

            <div className="csr-skill-india-pillars">
              {SKILL_INDIA_PILLARS.map((p, i) => (
                <div
                  className={`csr-skill-india-pillar csr-delay-${i} fade-up`}
                  key={i}
                  ref={fade}
                >
                  <div className="csr-skill-india-pillar-icon">{p.icon}</div>
                  <div className="csr-skill-india-pillar-name">{p.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          CTA SECTION
      ════════════════════════════════════════════════════ */}
      <section className="csr-cta-section">
        <div className="csr-cta-glow" />
        <div className="csr-cta-content">
          <h2 className="csr-cta-title fade-up" ref={fade}>
            "Together, we can empower youth<br />
            <span className="grad-text">and build a digitally skilled India"</span>
          </h2>

          <p className="csr-cta-sub fade-up" ref={fade}>
            Join us in our mission to bridge the digital skill gap. Your CSR support will
            directly impact the lives of economically backward students and contribute to
            India's digital growth story.
          </p>

          <div className="csr-cta-buttons fade-up" ref={fade}>
            <button className="btn-primary" onClick={() => go("/contact")}>
              Become a CSR Partner
            </button>
            <a href="tel:+919152359157" className="csr-tel-link">
              <button className="btn-secondary">
                📞 +91 9152359157
              </button>
            </a>
            <a href="mailto:info.gspvtltd@gmail.com" className="csr-tel-link">
              <button className="btn-secondary">
                📧 Email Us
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}