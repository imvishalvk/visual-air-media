// src/App.jsx
import { Routes, Route, useLocation, HashRouter } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { LongFormPage, ShortFormPage, MotionPage, UIUXPage } from "./pages/portfolio/PortfolioPages";

// ── Scroll to top on every page change ──────────────────────
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

// ── Page transition wrapper ──────────────────────────────────
function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

// ── All routes ───────────────────────────────────────────────
function AppRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/"                    element={<PageTransition><Home /></PageTransition>} />
        <Route path="/portfolio/longform"  element={<PageTransition><LongFormPage /></PageTransition>} />
        <Route path="/portfolio/shortform" element={<PageTransition><ShortFormPage /></PageTransition>} />
        <Route path="/portfolio/motion"    element={<PageTransition><MotionPage /></PageTransition>} />
        <Route path="/portfolio/uiux"      element={<PageTransition><UIUXPage /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

// ── Root app ─────────────────────────────────────────────────
export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="grain" style={{ width: "100%", maxWidth: "100vw", overflowX: "hidden" }}>
        <Navbar />
        <main style={{ width: "100%", overflowX: "hidden" }}>
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}