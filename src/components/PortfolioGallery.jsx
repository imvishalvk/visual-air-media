import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation, fadeUp, scaleIn } from "../hooks/useScrollAnimation";

function PortfolioCard({ item, index, onClick }) {
  const { ref, isInView } = useScrollAnimation({ margin: "-40px" });
  const fromLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, x: fromLeft ? -50 : 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.65, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] } },
      }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="portfolio-card group cursor-pointer"
      onClick={() => onClick(item)}
    >
      <img src={item.thumbnail} alt={item.title} loading="lazy" />
      <div className="overlay" />

      {/* Duration badge */}
      {item.duration && (
        <div className="absolute top-3 right-3 px-2 py-1 rounded-md text-xs font-bold text-white"
          style={{ background: "rgba(13,11,20,0.8)", backdropFilter: "blur(8px)" }}>
          {item.duration}
        </div>
      )}

      {/* Bottom info (visible on hover) */}
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <p className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: "var(--accent-pink)" }}>
          {item.category}
        </p>
        <h3 className="text-sm font-black text-white" style={{ fontFamily: "Poppins, sans-serif" }}>{item.title}</h3>
        <div className="flex flex-wrap gap-1 mt-2">
          {item.tags.map(t => (
            <span key={t} className="px-2 py-0.5 rounded text-xs font-medium"
              style={{ background: "rgba(233,30,140,0.2)", color: "var(--accent-light)" }}>{t}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function LightboxModal({ item, onClose }) {
  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          style={{ background: "rgba(13,11,20,0.95)", backdropFilter: "blur(12px)" }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl w-full rounded-2xl overflow-hidden"
            style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
            onClick={e => e.stopPropagation()}
          >
            <img src={item.thumbnail} alt={item.title} className="w-full h-72 object-cover" />
            <div className="p-8">
              <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "var(--accent-pink)" }}>{item.category}</p>
              <h3 className="text-2xl font-black text-white mb-3" style={{ fontFamily: "Poppins, sans-serif" }}>{item.title}</h3>
              <div className="flex flex-wrap gap-2">
                {item.tags.map(t => (
                  <span key={t} className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ background: "rgba(233,30,140,0.15)", color: "var(--accent-pink)" }}>{t}</span>
                ))}
              </div>
              <button onClick={onClose} className="mt-6 btn-outline text-sm">Close ✕</button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function PortfolioGallery({ title, description, items }) {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);
  const { ref, isInView } = useScrollAnimation();

  const allTags = ["All", ...Array.from(new Set(items.flatMap(i => i.tags)))];
  const filtered = filter === "All" ? items : items.filter(i => i.tags.includes(filter));

  return (
    <div id="" className="min-h-screen pt-28 pb-24 px-6" style={{ background: "var(--bg-primary)" }}>
      {/* Page header */}
      <motion.div
        ref={ref}
        variants={fadeUp}
        custom={0}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-5xl mx-auto text-center mb-14"
      >
        <span className="section-label">Portfolio</span>
        <h1 className="text-4xl md:text-6xl font-black text-white mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
          {title.split(" ").map((w, i) => i === title.split(" ").length - 1
            ? <span key={i} className="text-gradient"> {w}</span>
            : ` ${w}`
          )}
        </h1>
        <p className="text-sm max-w-xl mx-auto" style={{ color: "var(--text-muted)" }}>{description}</p>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 justify-center mt-8">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className="px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-200"
              style={{
                background: filter === tag ? "var(--gradient-pink)" : "var(--bg-card)",
                color: filter === tag ? "#fff" : "var(--text-muted)",
                border: filter === tag ? "none" : "1px solid var(--border)",
              }}
            >
              {tag}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <AnimatePresence mode="wait">
          {filtered.map((item, i) => (
            <PortfolioCard key={item.id} item={item} index={i} onClick={setSelected} />
          ))}
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <LightboxModal item={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
