
export default function PageHero({ label, title, sub, accent = "var(--cyan)", showOrbs = true }) {
  return (
    <div className="page-hero grid-bg" style={{ borderBottom: "1px solid var(--border)", position: "relative", overflow: "hidden" }}>
      {showOrbs && (
        <>
          <div className="hero-orb orb-1" />
          <div className="hero-orb orb-2" />
          <div className="hero-orb orb-3" />
          <div className="hero-orb orb-4" />
        </>
      )}
      <div className="page-hero-inner">
        <div className="badge" style={{ marginBottom: 20 }}>
          <span className="badge-dot" />{label}
        </div>
        <h1>{title}</h1>
        <p>{sub}</p>
      </div>
    </div>
  );
}
