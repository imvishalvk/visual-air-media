import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SERVICES } from "../content/siteContent";
import { useScrollAnimation, fadeLeft, fadeRight, fadeUp } from "../hooks/useScrollAnimation";

const colorMap = {
  pink:   { glow: "rgba(233,30,140,0.10)",  border: "rgba(233,30,140,0.30)",  tag: "rgba(233,30,140,0.12)",  text: "#E91E8C" },
  purple: { glow: "rgba(168,85,247,0.10)",  border: "rgba(168,85,247,0.30)",  tag: "rgba(168,85,247,0.12)",  text: "#A855F7" },
  blue:   { glow: "rgba(59,130,246,0.10)",  border: "rgba(59,130,246,0.30)",  tag: "rgba(59,130,246,0.12)",  text: "#3B82F6" },
  green:  { glow: "rgba(34,197,94,0.10)",   border: "rgba(34,197,94,0.30)",   tag: "rgba(34,197,94,0.12)",   text: "#22C55E" },
};

function ServiceCard({ service, index }) {
  const { ref, isInView } = useScrollAnimation();
  const isEven = index % 2 === 0;
  const variant = isEven ? fadeLeft : fadeRight;
  const c = colorMap[service.color];

  return (
    <motion.div
      ref={ref}
      variants={variant}
      custom={index * 0.08}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="group relative overflow-hidden rounded-2xl border p-6 flex flex-col"
      style={{
        background: "var(--bg-card)",
        borderColor: "var(--border)",
        minHeight: "380px",         /* consistent card height */
        width:"400px",
        transition: "border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = c.border;
        e.currentTarget.style.boxShadow = `0 0 32px ${c.glow}`;
        e.currentTarget.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = "var(--border)";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {/* Subtle radial glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{ background: `radial-gradient(ellipse at 20% 20%, ${c.glow}, transparent 65%)` }}
      />

      {/* Icon */}
      <div className="text-3xl mb-4 relative z-10">{service.icon}</div>

      {/* Subtitle label */}
      <p
        className="text-xs font-bold tracking-widest uppercase mb-1.5 relative z-10"
        style={{ color: c.text }}
      >
        {service.subtitle}
      </p>

      {/* Title */}
      <h3
        className="text-xl font-black mb-3 text-white relative z-10"
        style={{ fontFamily: "Poppins, sans-serif", lineHeight: 1.2 }}
      >
        {service.title}
      </h3>

      {/* Description — capped lines so cards stay equal height */}
      <p
        className="text-sm leading-relaxed mb-5 relative z-10"
        style={{
          color: "var(--text-muted)",
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {service.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-5 relative z-10">
        {service.tags.map(tag => (
          <span
            key={tag}
            className="px-2.5 py-0.5 rounded-full text-xs font-semibold"
            style={{ background: c.tag, color: c.text }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* CTA — pushed to bottom */}
      <Link
        to={service.portfolioPath}
        className="mt-auto inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase relative z-10 transition-colors duration-200"
        style={{ color: "var(--text-subtle)" }}
        onMouseEnter={e => e.currentTarget.style.color = c.text}
        onMouseLeave={e => e.currentTarget.style.color = "var(--text-subtle)"}
      >
        View Portfolio →
      </Link>
    </motion.div>
  );
}

export default function Services() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="services" className="py-24 px-6" style={{ background: "var(--bg-surface)" }}>
      {/* Title */}
      <motion.div
        ref={ref}
        variants={fadeUp}
        custom={0}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-5xl mx-auto text-center mb-14"
      >
        <span className="section-label">What We Do</span>
        <h2
          className="font-black text-white"
          style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
        >
          Our{" "}
          <span style={{
            background: "var(--gradient-pink)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            Services
          </span>
        </h2>
        <p className="mt-3 text-sm" style={{ color: "var(--text-muted)", maxWidth: "420px", margin: "12px auto 0" }}>
          End-to-end visual production — from raw footage to final delivery.
        </p>
      </motion.div>

      {/* 2-column grid — fixed gap, no overflow */}
      <div className="max-w-5xl mx-auto flex gap-5" id="services">
        {SERVICES.map((service, i) => (
          <ServiceCard key={service.id} service={service} index={i} />
        ))}
      </div>
    </section>
  );
}
