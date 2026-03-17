import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SERVICES, PORTFOLIO } from "../content/siteContent";
import { useScrollAnimation, fadeUp, scaleIn } from "../hooks/useScrollAnimation";

export default function PortfolioPreview() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="portfolio" className="py-24 px-6" style={{ background: "var(--bg-primary)" }}>
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <motion.div
        id="portfolio"
          ref={ref}
          variants={fadeUp}
          custom={0}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <span className="section-label">Our Work</span>
          <h2
            className="font-black text-white"
            style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
          >
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
          <p className="mt-3 text-sm" style={{ color: "var(--text-muted)", maxWidth: "360px", margin: "10px auto 0" }}>
            Browse our work across all four service verticals.
          </p>
        </motion.div>

        {/* 2-column grid */}
        <div className="flex flex-col lg:flex-row gap-5">
          {SERVICES.map((service, i) => {
            const items = PORTFOLIO[service.id]?.items.slice(0, 3) || [];
            return (
              <motion.div
                key={service.id}
                variants={scaleIn}
                custom={i * 0.1}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="rounded-2xl border overflow-hidden group"
                // height="300px"
                style={{
                  background: "var(--bg-card)",
                  borderColor: "var(--border)",
                  transition: "border-color 0.3s ease, transform 0.3s ease",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "rgba(233,30,140,0.35)";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {/* Image thumbnails row — fixed height */}
                <div className="grid grid-cols-3 gap-1 p-2.5" style={{ height: "250px" }}>
                  {items.map(item => (
                    <div key={item.id} className="rounded-lg overflow-hidden h-full">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>

                {/* Card body */}
                <div className="px-5 pb-5 pt-3">
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="text-xl">{service.icon}</span>
                    <h3
                      className="text-base font-black text-white"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-xs mb-4" style={{ color: "var(--text-muted)" }}>
                    {service.subtitle}
                  </p>
                  <Link
                    to={service.portfolioPath}
                    className="lg:inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase transition-colors duration-200"
                    style={{ color: "var(--accent-pink)" }}
                  >
                    View All Projects →
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
