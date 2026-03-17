import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { COMPANY, CONTACT, EMAILJS_CONFIG } from "../content/siteContent";
import { useScrollAnimation, fadeLeft, fadeRight } from "../hooks/useScrollAnimation";

export default function Contact() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({ name: "", email: "", service: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const { ref: leftRef, isInView: leftInView } = useScrollAnimation();
  const { ref: rightRef, isInView: rightInView } = useScrollAnimation();

  const handleChange = (e) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        formRef.current,
        EMAILJS_CONFIG.PUBLIC_KEY
      );
      setStatus("success");
      setFormData({ name: "", email: "", service: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-28 px-6 relative" style={{ background: "var(--bg-surface)" }}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label">Let's Talk</span>
          <h2 className="text-4xl md:text-6xl font-black text-white" style={{ fontFamily: "Poppins, sans-serif" }}>
            {CONTACT.headline}{" "}
            <span className="text-gradient">{CONTACT.highlightWord}</span>
          </h2>
          <p className="mt-4 text-sm" style={{ color: "var(--text-muted)" }}>{CONTACT.subtext}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Left — Info */}
          <motion.div
            ref={leftRef}
            variants={fadeLeft}
            custom={0}
            initial="hidden"
            animate={leftInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {[
              { icon: "📧", label: "Email Us", value: COMPANY.email, href: `mailto:${COMPANY.email}` },
              { icon: "📞", label: "Call Us", value: COMPANY.phone, href: `tel:${COMPANY.phone}` },
              { icon: "📍", label: "Location", value: COMPANY.location, href: null },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: "var(--accent-glow)", border: "1px solid var(--border-hover)" }}
                >
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: "var(--text-subtle)" }}>{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-base font-medium text-white hover:text-[var(--accent-pink)] transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-base font-medium text-white">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Socials */}
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "var(--text-subtle)" }}>Follow Us</p>
              <div className="flex gap-3">
                {[
                  { label: "Instagram", href: COMPANY.instagram, icon: "📸" },
                  { label: "LinkedIn", href: COMPANY.linkedin, icon: "💼" },
                  { label: "YouTube", href: COMPANY.youtube, icon: "▶️" },
                  { label: "Twitter", href: COMPANY.twitter, icon: "🐦" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={s.label}
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-lg card hover:scale-110 transition-transform"
                    style={{ background: "var(--bg-card)" }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            ref={rightRef}
            variants={fadeRight}
            custom={0}
            initial="hidden"
            animate={rightInView ? "visible" : "hidden"}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={CONTACT.formFields.namePlaceholder}
                required
                className="form-input"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={CONTACT.formFields.emailPlaceholder}
                required
                className="form-input"
              />
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="form-input"
                style={{ appearance: "none" }}
              >
                <option value="" disabled>{CONTACT.formFields.servicePlaceholder}</option>
                {CONTACT.serviceOptions.map((opt) => (
                  <option key={opt} value={opt} style={{ background: "var(--bg-card)" }}>{opt}</option>
                ))}
              </select>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={CONTACT.formFields.messagePlaceholder}
                rows={5}
                required
                className="form-input resize-none"
              />

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary w-full justify-center text-sm py-4"
              >
                {status === "sending" ? "⏳ Sending..." : `${CONTACT.formFields.submitLabel} →`}
              </button>

              {status === "success" && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className="text-center text-sm font-medium" style={{ color: "#22C55E" }}>
                  ✅ Message sent! We'll get back to you soon.
                </motion.p>
              )}
              {status === "error" && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className="text-center text-sm font-medium" style={{ color: "var(--accent-pink)" }}>
                  ❌ Something went wrong. Please try emailing us directly.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
