import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { NAV_LINKS } from "../content/siteContent";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  const handleNavClick = (href) => {
    setMenuOpen(false);

    // If clicking "Home"
    if (href === "/") {
      navigate("/");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const sectionId = href.replace("#", "");

    // If already on home page — just scroll
    if (location.pathname === "/" || location.pathname === "") {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      return;
    }

    // If on a different page (portfolio etc.) — go home first, then scroll
    navigate("/");
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 600); // wait for page transition to complete
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 50,
        width: "100%",
        transition: "background 0.3s ease, border 0.3s ease",
        background: scrolled ? "rgba(13,11,20,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled
          ? "1px solid var(--border)"
          : "1px solid transparent",
      }}
    >
      {/* Inner container — matches all section widths */}
      <div
        style={{
          maxWidth: 960,
          margin: "0 auto",
          padding: "14px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        {/* Logo */}
        <button
          onClick={() => handleNavClick("/")}
          style={{
            background: "none", border: "none", cursor: "pointer",
            display: "flex", alignItems: "center", gap: 10, padding: 0,
            flexShrink: 0,
          }}
        >
          <div style={{
            width: 38, height: 38, borderRadius: 10,
            background: "var(--gradient-pink)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontWeight: 900, fontSize: 13, color: "#fff",
            fontFamily: "Poppins, sans-serif",
          }}>
            VA
          </div>
          <span style={{
            fontFamily: "Poppins, sans-serif", fontWeight: 700,
            fontSize: 15, color: "#fff", whiteSpace: "nowrap",
          }}>
            Visual Air{" "}
            <span style={{ color: "var(--accent-pink)" }}>Media</span>
          </span>
        </button>

        {/* Desktop Nav Links */}
        <nav
          style={{
            display: "flex", alignItems: "center", gap: 24,
          }}
          className="hidden lg:flex"
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                color: "var(--text-muted)", fontSize: 13,
                fontWeight: 500, fontFamily: "Poppins, sans-serif",
                whiteSpace: "nowrap", padding: 0,
                transition: "color 0.2s ease",
              }}
              onMouseEnter={e => e.currentTarget.style.color = "var(--accent-pink)"}
              onMouseLeave={e => e.currentTarget.style.color = "var(--text-muted)"}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA Button */}
        <button
          onClick={() => handleNavClick("#contact")}
          className="hidden lg:block"
          style={{
            background: "var(--gradient-pink)", color: "#fff",
            padding: "9px 20px", borderRadius: 50, border: "none",
            fontSize: 13, fontWeight: 700,
            fontFamily: "Poppins, sans-serif",
            cursor: "pointer", whiteSpace: "nowrap", flexShrink: 0,
          }}
        >
          Get a Quote ↗
        </button>

        {/* Hamburger — mobile only */}
        <button
          className="lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none", border: "none",
            cursor: "pointer", padding: 4, flexShrink: 0,
          }}
          aria-label="Toggle menu"
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
            <span style={{
              display: "block", width: 24, height: 2, background: "#fff",
              transition: "all 0.3s",
              transform: menuOpen
                ? "rotate(45deg) translate(5px, 5px)"
                : "none",
            }} />
            <span style={{
              display: "block", width: 24, height: 2, background: "#fff",
              transition: "all 0.3s",
              opacity: menuOpen ? 0 : 1,
            }} />
            <span style={{
              display: "block", width: 24, height: 2, background: "#fff",
              transition: "all 0.3s",
              transform: menuOpen
                ? "rotate(-45deg) translate(5px, -5px)"
                : "none",
            }} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              overflow: "hidden",
              borderTop: "1px solid var(--border)",
              background: "var(--bg-card)",
            }}
          >
            <div style={{
              maxWidth: 960, margin: "0 auto",
              padding: "20px 24px",
              display: "flex", flexDirection: "column", gap: 16,
            }}>
              {NAV_LINKS.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  style={{
                    background: "none", border: "none",
                    cursor: "pointer", padding: 0, textAlign: "left",
                    color: "var(--text-muted)", fontSize: 15,
                    fontWeight: 500, fontFamily: "Poppins, sans-serif",
                  }}
                >
                  {link.label}
                </button>
              ))}

              <button
                onClick={() => handleNavClick("#contact")}
                style={{
                  background: "var(--gradient-pink)", color: "#fff",
                  padding: "10px 24px", borderRadius: 50, border: "none",
                  fontSize: 13, fontWeight: 700,
                  fontFamily: "Poppins, sans-serif",
                  cursor: "pointer", alignSelf: "flex-start",
                }}
              >
                Get a Quote ↗
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
