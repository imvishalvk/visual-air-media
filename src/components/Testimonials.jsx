import { motion, useScroll, useTransform } from "framer-motion";


import { TESTIMONIALS } from "../content/siteContent";
import { useScrollAnimation, fadeUp, scaleIn } from "../hooks/useScrollAnimation";

function StarRating({ count }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ color: "var(--accent-pink)" }}>★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const { ref, isInView } = useScrollAnimation();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y1      = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y2      = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section className="py-28 px-6" style={{ background: "var(--bg-surface)", position:"relative" }}>

    {/* Background blobs */}
      <motion.div
        style={{
          position: "absolute", top: 0, left: 0,
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

      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          variants={fadeUp}
          custom={0}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <span className="section-label">Client Love</span>
          <h2 className="text-4xl md:text-5xl font-black text-white" style={{ fontFamily: "Poppins, sans-serif" }}>
            What Clients <span className="text-gradient">Say</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              variants={scaleIn}
              custom={i * 0.12}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="card p-7"
            >
              <StarRating count={t.rating} />
              <p className="mt-4 text-sm leading-relaxed italic mb-6" style={{ color: "var(--text-muted)" }}>
                "{t.text}"
              </p>
              <div className="flex items-center gap-4 pt-4 border-t" style={{ borderColor: "var(--border)" }}>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-black"
                  style={{ background: "var(--gradient-pink)" }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{t.name}</p>
                  <p className="text-xs" style={{ color: "var(--text-subtle)" }}>{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
