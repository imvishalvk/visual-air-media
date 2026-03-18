import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ABOUT } from "../content/siteContent";
import { useScrollAnimation, fadeLeft, fadeRight, fadeUp, scaleIn } from "../hooks/useScrollAnimation";

export default function About() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const blobY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  const { ref: titleRef, isInView: titleInView } = useScrollAnimation();
  const { ref: leftRef, isInView: leftInView } = useScrollAnimation();
  const { ref: rightRef, isInView: rightInView } = useScrollAnimation();

  return (
    <section id="about" ref={sectionRef} className="py-28 px-6 relative overflow-hidden" style={{ background: "var(--bg-primary)" }}>
      {/* Parallax blob */}
      <motion.div style={{ y: blobY }}
        className="glow-blob w-[500px] h-[500px] right-[-150px] top-0"
        style={{ background: "rgba(233,30,140,0.06)", y: blobY }} />

      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <motion.div
          ref={titleRef}
          variants={fadeUp}
          custom={0}
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <span className="section-label">Who We Are</span>
          <h2 className="text-4xl md:text-6xl font-black text-white" style={{ fontFamily: "Poppins, sans-serif" }}>
            {ABOUT.headline.split(" ").map((w, i) =>
              w === "Media" ? <span key={i} className="text-gradient"> {w}</span> : ` ${w}`
            )}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            ref={leftRef}
            variants={fadeLeft}
            custom={0}
            initial="hidden"
            animate={leftInView ? "visible" : "hidden"}
          >
            <p className="text-base leading-relaxed mb-5" style={{ color: "var(--text-muted)" }}>{ABOUT.paragraph1}</p>
            <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>{ABOUT.paragraph2}</p>
            <button
              className="btn-primary"
              onClick={() => {
                const el = document.getElementById("contact");
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              Work With Us ↗
            </button>

            {/* Visual accent bar */}
            <div className="mt-10 h-1 w-32 rounded-full" style={{ background: "var(--gradient-pink)" }} />
          </motion.div>

          {/* Right: values */}
          <motion.div
            ref={rightRef}
            variants={fadeRight}
            custom={0}
            initial="hidden"
            animate={rightInView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {ABOUT.values.map((v, i) => (
              <motion.div
                key={v.title}
                variants={scaleIn}
                custom={i * 0.1}
                initial="hidden"
                animate={rightInView ? "visible" : "hidden"}
                className="card p-6 hover:border-[var(--accent-pink)]/40"
              >
                <div className="text-3xl mb-3">{v.icon}</div>
                <h4 className="text-base font-black text-white mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>{v.title}</h4>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-subtle)" }}>{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
