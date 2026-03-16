import { motion } from "framer-motion";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import { BROCHURE } from "../content/siteContent";
import { useScrollAnimation, fadeUp } from "../hooks/useScrollAnimation";

export default function BrochureSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const blobY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  const { ref, isInView } = useScrollAnimation();

  const handleDownload = () => {
    // Creates a link and triggers download
    const link = document.createElement("a");
    link.href = BROCHURE.fileUrl;
    link.download = BROCHURE.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section ref={sectionRef} className="py-24 px-6 relative overflow-hidden" style={{ background: "var(--bg-primary)" }}>
      <motion.div style={{ y: blobY }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full"
        style={{ background: "var(--accent-glow)", filter: "blur(100px)", y: blobY }} />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          variants={fadeUp}
          custom={0}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="rounded-2xl border p-10 md:p-16 text-center relative overflow-hidden"
          style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
        >
          {/* Inner glow */}
          <div className="absolute inset-0 opacity-50 pointer-events-none rounded-2xl"
            style={{ background: "radial-gradient(ellipse at center, var(--accent-glow), transparent 70%)" }} />

          <div className="relative z-10">
            <div className="text-5xl mb-5">📄</div>
            <span className="section-label">{BROCHURE.headline}</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
              Download Our <span className="text-gradient">Brochure</span>
            </h2>
            <p className="mb-10 max-w-lg mx-auto text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              {BROCHURE.description}
            </p>

            <button onClick={handleDownload} className="btn-primary text-base px-10 py-4 gap-3">
              <span>⬇</span> {BROCHURE.buttonLabel}
            </button>

            <p className="mt-5 text-xs" style={{ color: "var(--text-subtle)" }}>
              PDF · Free · No sign-up required
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
