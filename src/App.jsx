import { Routes, Route, useLocation, HashRouter } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { LongFormPage, ShortFormPage, MotionPage, UIUXPage } from "./pages/portfolio/PortfolioPages";

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

function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/portfolio/longform" element={<PageTransition><LongFormPage /></PageTransition>} />
        <Route path="/portfolio/shortform" element={<PageTransition><ShortFormPage /></PageTransition>} />
        <Route path="/portfolio/motion" element={<PageTransition><MotionPage /></PageTransition>} />
        <Route path="/portfolio/uiux" element={<PageTransition><UIUXPage /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <HashRouter>
      {/* Grain overlay */}
      <div className="grain">
        <Navbar />
        <main>
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}
