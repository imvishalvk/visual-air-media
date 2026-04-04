import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation, fadeUp } from "../hooks/useScrollAnimation";

// ── Video/Image Modal ─────────────────────────────────────
function Modal({ item, onClose }) {
  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          style={{
            position: "fixed", inset: 0, zIndex: 999,
            background: "rgba(13,11,20,0.96)",
            backdropFilter: "blur(16px)",
            display: "flex", alignItems: "center",
            justifyContent: "center", padding: 20,
          }}
        >
          <motion.div
            initial={{ scale: 0.88, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.88, opacity: 0, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            onClick={e => e.stopPropagation()}
            style={{
              width: "100%", maxWidth: 780,
              background: "var(--bg-card)",
              borderRadius: 20,
              border: "1px solid var(--border)",
              overflow: "hidden",
              boxShadow: "0 40px 80px rgba(0,0,0,0.6)",
            }}
          >
            {/* ── Header bar ─────────────────────────────── */}
            <div style={{
              display: "flex", alignItems: "center",
              justifyContent: "space-between",
              padding: "14px 18px",
              borderBottom: "1px solid var(--border)",
            }}>
              <div>
                <p style={{
                  margin: 0, fontSize: 10, fontWeight: 700,
                  letterSpacing: "0.15em", textTransform: "uppercase",
                  color: "var(--accent-pink)", fontFamily: "Poppins, sans-serif",
                }}>
                  {item.category}
                </p>
                <h3 style={{
                  margin: "2px 0 0", fontSize: 15, fontWeight: 700,
                  color: "#fff", fontFamily: "Poppins, sans-serif",
                }}>
                  {item.title}
                </h3>
              </div>
              <button
                onClick={onClose}
                style={{
                  background: "var(--bg-surface)",
                  border: "1px solid var(--border)",
                  color: "var(--text-muted)",
                  borderRadius: 8, padding: "6px 14px",
                  cursor: "pointer", fontSize: 13,
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  flexShrink: 0,
                }}
              >
                ✕ Close
              </button>
            </div>

            {/* ── Video player (16:9) ─────────────────────── */}
            {item.youtubeId ? (
              <div style={{
                position: "relative",
                paddingBottom: "56.25%",
                height: 0,
                background: "#000",
              }}>
                <iframe
                  src={`https://www.youtube.com/embed/${item.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                  title={item.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: "absolute", inset: 0,
                    width: "100%", height: "100%",
                    border: "none",
                  }}
                />
              </div>
            ) : (
              /* Fallback — show image if no youtubeId */
              <img
                src={item.thumbnail}
                alt={item.title}
                style={{ width: "100%", maxHeight: 420, objectFit: "cover" }}
              />
            )}

            {/* ── Footer info ─────────────────────────────── */}
            <div style={{
              padding: "14px 18px",
              borderTop: "1px solid var(--border)",
              display: "flex", alignItems: "center",
              justifyContent: "space-between", flexWrap: "wrap", gap: 10,
            }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {item.tags.map(tag => (
                  <span key={tag} style={{
                    padding: "3px 10px", borderRadius: 20,
                    fontSize: 10, fontWeight: 600,
                    fontFamily: "Poppins, sans-serif",
                    background: "rgba(233,30,140,0.12)",
                    color: "var(--accent-pink)",
                    border: "1px solid rgba(233,30,140,0.3)",
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
              {item.duration && (
                <span style={{
                  fontSize: 11, color: "var(--text-subtle)",
                  fontFamily: "Poppins, sans-serif",
                }}>
                  ⏱ {item.duration}
                </span>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ── Portfolio card ────────────────────────────────────────
function PortfolioCard({ item, index, onClick }) {
  const { ref, isInView } = useScrollAnimation({ margin: "-40px" });
  const fromLeft = index % 2 === 0;
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: fromLeft ? -50 : 50 }}
      animate={isInView
        ? { opacity: 1, x: 0, transition: { duration: 0.65, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] } }
        : { opacity: 0, x: fromLeft ? -50 : 50 }
      }
      onClick={() => onClick(item)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative", borderRadius: 14,
        overflow: "hidden", cursor: "pointer",
        border: hovered
          ? "1px solid rgba(233,30,140,0.4)"
          : "1px solid var(--border)",
        transition: "border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered ? "0 12px 40px rgba(233,30,140,0.15)" : "none",
      }}
    >
      {/* Thumbnail */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        <img
          src={item.thumbnail}
          alt={item.title}
          loading="lazy"
          style={{
            width: "100%", height: 220,
            objectFit: "cover", display: "block",
            transition: "transform 0.5s ease",
            transform: hovered ? "scale(1.06)" : "scale(1)",
          }}
        />

        {/* Dark overlay */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, rgba(13,11,20,0.9) 0%, transparent 55%)",
          opacity: hovered ? 1 : 0.4,
          transition: "opacity 0.3s ease",
        }} />

        {/* Play button — center, shows on hover */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.2 }}
              style={{
                position: "absolute", inset: 0,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >
              <div style={{
                width: 52, height: 52, borderRadius: "50%",
                background: "var(--accent-pink)",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 0 30px rgba(233,30,140,0.5)",
              }}>
                <div style={{
                  width: 0, height: 0,
                  borderTop: "10px solid transparent",
                  borderBottom: "10px solid transparent",
                  borderLeft: "18px solid #fff",
                  marginLeft: 4,
                }} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Duration badge */}
        {item.duration && (
          <div style={{
            position: "absolute", top: 10, right: 10,
            background: "rgba(13,11,20,0.85)",
            backdropFilter: "blur(6px)",
            borderRadius: 6, padding: "3px 8px",
          }}>
            <span style={{
              fontSize: 10, color: "#fff",
              fontFamily: "Poppins, sans-serif", fontWeight: 600,
            }}>
              {item.duration}
            </span>
          </div>
        )}

        {/* YouTube badge — shows if video available */}
        {item.youtubeId && (
          <div style={{
            position: "absolute", top: 10, left: 10,
            background: "rgba(233,30,140,0.9)",
            borderRadius: 6, padding: "3px 8px",
            display: "flex", alignItems: "center", gap: 4,
          }}>
            <div style={{
              width: 0, height: 0,
              borderTop: "5px solid transparent",
              borderBottom: "5px solid transparent",
              borderLeft: "8px solid #fff",
            }} />
            <span style={{
              fontSize: 9, color: "#fff",
              fontFamily: "Poppins, sans-serif", fontWeight: 700,
              letterSpacing: "0.05em",
            }}>
              VIDEO
            </span>
          </div>
        )}

        {/* Bottom info — shows on hover */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          padding: "10px 12px",
          transform: hovered ? "translateY(0)" : "translateY(6px)",
          opacity: hovered ? 1 : 0,
          transition: "all 0.3s ease",
        }}>
          <p style={{
            margin: "0 0 4px", fontSize: 10, fontWeight: 700,
            color: "var(--accent-pink)", fontFamily: "Poppins, sans-serif",
            letterSpacing: "0.1em", textTransform: "uppercase",
          }}>
            {item.category}
          </p>
          <h3 style={{
            margin: 0, fontSize: 13, fontWeight: 700,
            color: "#fff", fontFamily: "Poppins, sans-serif",
          }}>
            {item.title}
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginTop: 6 }}>
            {item.tags.slice(0, 2).map(t => (
              <span key={t} style={{
                padding: "2px 8px", borderRadius: 20,
                fontSize: 9, fontWeight: 600,
                fontFamily: "Poppins, sans-serif",
                background: "rgba(233,30,140,0.2)",
                color: "var(--accent-light)",
              }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ── Main gallery ──────────────────────────────────────────
export default function PortfolioGallery({ title, description, items }) {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);
  const { ref, isInView } = useScrollAnimation();

  const allTags = ["All", ...Array.from(new Set(items.flatMap(i => i.tags)))];
  const filtered = filter === "All"
    ? items
    : items.filter(i => i.tags.includes(filter));

  return (
    <div style={{
      minHeight: "100vh",
      paddingTop: 100, paddingBottom: 96,
      paddingLeft: 24, paddingRight: 24,
      background: "var(--bg-primary)",
    }}>
      {/* Header */}
      <motion.div
        ref={ref}
        variants={fadeUp}
        custom={0}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        style={{ maxWidth: 960, margin: "0 auto", textAlign: "center", marginBottom: 48 }}
      >
        <span className="section-label">Portfolio</span>
        <h1 style={{
          fontFamily: "Poppins, sans-serif", fontWeight: 800,
          fontSize: "clamp(1.8rem, 4vw, 3rem)",
          color: "#fff", margin: "0 0 10px",
        }}>
          {title.split(" ").map((w, i, arr) =>
            i === arr.length - 1 ? (
              <span key={i} style={{
                background: "var(--gradient-pink)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                {" "}{w}
              </span>
            ) : ` ${w}`
          )}
        </h1>
        <p style={{
          color: "var(--text-muted)", fontSize: 13,
          maxWidth: 480, margin: "0 auto 24px",
          lineHeight: 1.6,
        }}>
          {description} — click any thumbnail to watch.
        </p>

        {/* Filter tabs */}
        <div style={{
          display: "flex", flexWrap: "wrap",
          gap: 8, justifyContent: "center",
        }}>
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              style={{
                padding: "7px 16px", borderRadius: 50,
                fontSize: 11, fontWeight: 700,
                fontFamily: "Poppins, sans-serif",
                cursor: "pointer", border: "none",
                transition: "all 0.2s ease",
                background: filter === tag
                  ? "var(--gradient-pink)"
                  : "var(--bg-card)",
                color: filter === tag ? "#fff" : "var(--text-muted)",
                outline: filter !== tag ? "1px solid var(--border)" : "none",
              }}
            >
              {tag}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Grid */}
      <div style={{
        maxWidth: 960, margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
        gap: 16,
      }}>
        <AnimatePresence>
          {filtered.map((item, i) => (
            <PortfolioCard
              key={item.id}
              item={item}
              index={i}
              onClick={setSelected}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* Modal */}
      <Modal item={selected} onClose={() => setSelected(null)} />
    </div>
  );
}