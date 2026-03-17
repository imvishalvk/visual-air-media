import { Link } from "react-router-dom";
import { COMPANY, NAV_LINKS, FOOTER, SERVICES } from "../content/siteContent";

export default function Footer() {
  return (
    <footer className="border-t py-16 px-6" style={{ background: "var(--bg-primary)", borderColor: "var(--border)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-sm"
                style={{ background: "var(--gradient-pink)" }}>VA</div>
              <span className="font-bold text-lg text-white" style={{ fontFamily: "Poppins, sans-serif" }}>
                Visual Air <span style={{ color: "var(--accent-pink)" }}>Media</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "var(--text-muted)" }}>{COMPANY.subTagline}</p>
            <p className="mt-3 text-sm" style={{ color: "var(--text-subtle)" }}>{COMPANY.location}</p>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-bold tracking-widest uppercase mb-5" style={{ color: "var(--text-subtle)" }}>Services</p>
            <ul className="space-y-3">
              {SERVICES.map(s => (
                <li key={s.id}>
                  <Link to={s.portfolioPath} className="text-sm hover:text-white transition-colors"
                    style={{ color: "var(--text-muted)" }}>{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-bold tracking-widest uppercase mb-5" style={{ color: "var(--text-subtle)" }}>Contact</p>
            <ul className="space-y-3">
              <li><a href={`mailto:${COMPANY.email}`} className="text-sm hover:text-white transition-colors" style={{ color: "var(--text-muted)" }}>{COMPANY.email}</a></li>
              <li><a href={`tel:${COMPANY.phone}`} className="text-sm hover:text-white transition-colors" style={{ color: "var(--text-muted)" }}>{COMPANY.phone}</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t gap-4"
          style={{ borderColor: "var(--border)" }}>
          <p className="text-xs" style={{ color: "var(--text-subtle)" }}>{FOOTER.copyright}</p>
          <p className="text-xs" style={{ color: "var(--text-subtle)" }}>{FOOTER.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
