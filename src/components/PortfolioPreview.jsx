import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { SERVICES } from "../content/siteContent";
import { useScrollAnimation, fadeUp, scaleIn } from "../hooks/useScrollAnimation";

const colorMap = {
  pink:   { accent: "#E91E8C", glow: "rgba(233,30,140,0.15)", border: "rgba(233,30,140,0.4)" },
  purple: { accent: "#A855F7", glow: "rgba(168,85,247,0.15)", border: "rgba(168,85,247,0.4)" },
  blue:   { accent: "#3B82F6", glow: "rgba(59,130,246,0.15)", border: "rgba(59,130,246,0.4)" },
  green:  { accent: "#22C55E", glow: "rgba(34,197,94,0.15)",  border: "rgba(34,197,94,0.4)"  },
};

// ── Single service card with inline video player ──────────
function ServiceCard({ service, index }) {
  const { ref, isInView } = useScrollAnimation();
  const [playing, setPlaying] = useState(false);
  const c = colorMap[service.color];

  return (
    <motion.div
      ref={ref}
      variants={scaleIn}
      custom={index * 0.1}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        borderRadius: 16,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = c.border;
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = `0 12px 40px ${c.glow}`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = "var(--border)";
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* ── Video area ───────────────────────────────────── */}
      <div style={{
        position: "relative",
        width: "100%",
        paddingBottom: "56.25%", /* 16:9 */
        background: "#000",
        overflow: "hidden",
        cursor: playing ? "default" : "pointer",
      }}>

        {/* YouTube iframe — always mounted, just hidden until play */}
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${service.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
            title={service.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: "absolute", inset: 0,
              width: "100%", height: "100%",
              border: "none",
            }}
          />
        ) : (
          /* Thumbnail + play button overlay */
          <div
            onClick={() => setPlaying(true)}
            style={{ position: "absolute", inset: 0 }}
          >
            {/* Thumbnail image */}
            <img
              src={`https://img.youtube.com/vi/${service.youtubeId}/maxresdefault.jpg`}
              alt={service.title}
              onError={e => {
                e.target.src = `https://img.youtube.com/vi/${service.youtubeId}/hqdefault.jpg`;
              }}
              style={{
                width: "100%", height: "100%",
                objectFit: "cover",
                transition: "transform 0.5s ease",
              }}
            />

            {/* Gradient overlay */}
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to top, rgba(13,11,20,0.7) 0%, rgba(13,11,20,0.2) 60%, transparent 100%)",
            }} />

            {/* Play button — center */}
            <div style={{
              position: "absolute", inset: 0,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  width: 60, height: 60, borderRadius: "50%",
                  background: c.accent,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: `0 0 30px ${c.glow}, 0 0 60px ${c.glow}`,
                }}
              >
                <div style={{
                  width: 0, height: 0,
                  borderTop: "11px solid transparent",
                  borderBottom: "11px solid transparent",
                  borderLeft: "20px solid #fff",
                  marginLeft: 5,
                }} />
              </motion.div>
            </div>

            {/* Top-left badge */}
            <div style={{
              position: "absolute", top: 12, left: 12,
              background: "rgba(13,11,20,0.85)",
              backdropFilter: "blur(8px)",
              border: `1px solid ${c.border}`,
              borderRadius: 20, padding: "4px 10px",
              display: "flex", alignItems: "center", gap: 6,
            }}>
              <span style={{ fontSize: 12 }}>{service.icon}</span>
              <span style={{
                fontSize: 10, fontWeight: 700, color: c.accent,
                fontFamily: "Poppins, sans-serif", letterSpacing: "0.05em",
              }}>
                {service.subtitle.toUpperCase()}
              </span>
            </div>

            {/* Top-right preview badge */}
            <div style={{
              position: "absolute", top: 12, right: 12,
              background: "rgba(13,11,20,0.85)",
              backdropFilter: "blur(8px)",
              borderRadius: 6, padding: "3px 8px",
            }}>
              <span style={{
                fontSize: 10, color: "#fff",
                fontFamily: "Poppins, sans-serif", fontWeight: 600,
              }}>
                ▶ Click to Play
              </span>
            </div>

            {/* Bottom label */}
            <div style={{
              position: "absolute", bottom: 12, left: 12, right: 12,
              display: "flex", alignItems: "center", justifyContent: "space-between",
            }}>
              <span style={{
                color: "#fff", fontSize: 13, fontWeight: 700,
                fontFamily: "Poppins, sans-serif",
                textShadow: "0 1px 4px rgba(0,0,0,0.8)",
              }}>
                {service.youtubeLabel}
              </span>
              <span style={{
                background: c.accent, color: "#fff",
                fontSize: 9, fontWeight: 700,
                fontFamily: "Poppins, sans-serif",
                padding: "3px 8px", borderRadius: 4,
                letterSpacing: "0.05em",
              }}>
                YOUTUBE
              </span>
            </div>
          </div>
        )}
      </div>

      {/* ── Card body ─────────────────────────────────────── */}
      <div style={{
        padding: "16px 18px 18px",
        display: "flex", flexDirection: "column", gap: 10, flex: 1,
      }}>
        {/* Title */}
        <h3 style={{
          fontFamily: "Poppins, sans-serif", fontWeight: 700,
          fontSize: 15, color: "#fff", margin: 0,
        }}>
          {service.title}
        </h3>

        {/* Description */}
        <p style={{
          color: "var(--text-muted)", fontSize: 12,
          lineHeight: 1.6, margin: 0,
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}>
          {service.description}
        </p>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
          {service.tags.slice(0, 3).map(tag => (
            <span key={tag} style={{
              padding: "3px 10px", borderRadius: 20,
              fontSize: 10, fontWeight: 600,
              fontFamily: "Poppins, sans-serif",
              background: c.glow, color: c.accent,
              border: `1px solid ${c.border}`,
            }}>
              {tag}
            </span>
          ))}
        </div>

        {/* Bottom row */}
        <div style={{
          display: "flex", alignItems: "center",
          justifyContent: "space-between",
          paddingTop: 10,
          borderTop: "1px solid var(--border)",
          marginTop: 4,
        }}>
          {/* Replay button — shows after playing */}
          {playing ? (
            <button
              onClick={() => setPlaying(false)}
              style={{
                display: "flex", alignItems: "center", gap: 6,
                background: c.glow, border: `1px solid ${c.border}`,
                borderRadius: 20, padding: "6px 14px",
                cursor: "pointer", color: c.accent,
                fontSize: 11, fontWeight: 700,
                fontFamily: "Poppins, sans-serif",
              }}
            >
              ↺ Show Thumbnail
            </button>
          ) : (
            <button
              onClick={() => setPlaying(true)}
              style={{
                display: "flex", alignItems: "center", gap: 6,
                background: c.glow, border: `1px solid ${c.border}`,
                borderRadius: 20, padding: "6px 14px",
                cursor: "pointer", color: c.accent,
                fontSize: 11, fontWeight: 700,
                fontFamily: "Poppins, sans-serif",
              }}
            >
              ▶ {service.youtubeLabel}
            </button>
          )}

          {/* View portfolio link */}
          <Link
            to={service.portfolioPath}
            style={{
              color: "var(--text-subtle)", fontSize: 11,
              fontWeight: 700, fontFamily: "Poppins, sans-serif",
              letterSpacing: "0.08em", textTransform: "uppercase",
              textDecoration: "none", transition: "color 0.2s ease",
            }}
            onMouseEnter={e => e.currentTarget.style.color = c.accent}
            onMouseLeave={e => e.currentTarget.style.color = "var(--text-subtle)"}
          >
            View All →
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

// ── Main section ──────────────────────────────────────────
export default function PortfolioPreview() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="portfolio" style={{
      padding: "96px 24px",
      background: "var(--bg-primary)",
    }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>

        {/* Title */}
        <motion.div
          ref={ref}
          variants={fadeUp}
          custom={0}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          style={{ textAlign: "center", marginBottom: 48 }}
        >
          <span className="section-label">Our Work</span>
          <h2 style={{
            fontFamily: "Poppins, sans-serif", fontWeight: 800,
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            color: "#fff", margin: 0,
          }}>
            Featured{" "}
            <span style={{
              background: "var(--gradient-pink)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Portfolio
            </span>
          </h2>
          <p style={{
            color: "var(--text-muted)", fontSize: 13,
            maxWidth: 360, margin: "10px auto 0", lineHeight: 1.6,
          }}>
            Watch our work — click any card to play directly.
          </p>
        </motion.div>

        {/* 2x2 grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 20,
        }}>
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}