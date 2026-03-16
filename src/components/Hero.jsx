import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { HERO } from "../content/siteContent";

const serviceMarquee = ["Long Form Videos", "Short Form Videos", "Motion Graphics", "UI/UX Development"];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y1      = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y2      = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ paddingTop: "80px" }}
    >
      {/* Background blobs */}
      <motion.div
        style={{
          position: "absolute", top: -80, left: -80,
          width: 500, height: 500, borderRadius: "50%",
          background: "var(--accent-glow)", filter: "blur(120px)",
          pointerEvents: "none", y: y1,
        }}
      />
      <motion.div
        style={{
          position: "absolute", bottom: 0, right: -60,
          width: 360, height: 360, borderRadius: "50%",
          background: "rgba(244,114,182,0.07)", filter: "blur(100px)",
          pointerEvents: "none", y: y2,
        }}
      />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(46,37,64,0.8) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <motion.div
        style={{ opacity }}
        className="relative z-10 flex flex-col items-center text-center px-6 py-16"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-bold tracking-widest uppercase mb-8"
          style={{
            borderColor: "var(--border-hover)",
            background: "var(--accent-glow)",
            color: "var(--accent-pink)",
          }}
        >
          {HERO.badge}
        </motion.div>

        {/* Headline — controlled size, no background bleed */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-black leading-tight tracking-tight mb-0"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "clamp(2.2rem, 5.5vw, 4rem)",
            color: "var(--text-primary)",
            maxWidth: "700px",
          }}
        >
          {HERO.headline1}{" "}
          <span
            style={{
              background: "var(--gradient-pink)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {HERO.headline2}
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.42 }}
          className="text-sm md:text-base leading-relaxed mt-5 mb-8"
          style={{ color: "var(--text-muted)", maxWidth: "480px" }}
        >
          {HERO.description}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.56 }}
          className="flex flex-wrap gap-3 justify-center mb-16"
        >
          <a href={HERO.cta1.href} className="btn-primary">{HERO.cta1.label} →</a>
          <a href={HERO.cta2.href} className="btn-outline">{HERO.cta2.label}</a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.72 }}
          className="flex flex-wrap gap-10 justify-center border-t pt-8"
          style={{ borderColor: "var(--border)", maxWidth: "480px", width: "100%" }}
        >
          {HERO.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="font-black mb-0.5"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "1.6rem",
                  background: "var(--gradient-pink)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.number}
              </div>
              <div className="text-xs tracking-widest uppercase" style={{ color: "var(--text-subtle)" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Marquee strip */}
      <div
        className="relative z-10 overflow-hidden py-3 border-t border-b"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="marquee-track">
          {[...serviceMarquee, ...serviceMarquee, ...serviceMarquee, ...serviceMarquee].map((s, i) => (
            <span key={i} className="text-xs font-bold tracking-widest uppercase px-8 whitespace-nowrap"
              style={{ color: "var(--text-subtle)" }}>
              ✦ {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
