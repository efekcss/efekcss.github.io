import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion, AnimatePresence } from "motion/react";
import { useLocation } from "react-router-dom";

export default function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-200 selection:bg-neutral-800 selection:text-white">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="pt-32 pb-12 max-w-5xl mx-auto px-6 flex flex-col min-h-screen"
        >
          <div className="flex-grow">
            <Outlet />
          </div>
          <Footer />
        </motion.main>
      </AnimatePresence>
    </div>
  );
}
