import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Layout() {
  const [showPopup, setShowPopup] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasTriggered) {
        setShowPopup(true);
        setHasTriggered(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasTriggered]);

  return (
    <div className="flex flex-col min-h-screen relative">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />

      {/* Exit Intent Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-dp-dark border border-dp-red w-full max-w-lg relative overflow-hidden flex flex-col"
            >
              <button 
                onClick={() => setShowPopup(false)}
                className="absolute top-4 right-4 z-10 text-white/50 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="p-10 text-center relative z-10">
                <h3 className="text-4xl font-display uppercase mb-4 text-dp-red">Wait, don't leave!</h3>
                <p className="text-gray-300 font-medium mb-8 text-lg">
                  Get 20% off your first online order of our exclusive merch and limited edition flavor drops.
                </p>
                <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); setShowPopup(false); }}>
                  <input 
                    type="email" 
                    placeholder="ENTER EMAIL FOR 20% OFF" 
                    required
                    className="bg-white/10 border border-white/20 p-4 text-center outline-none focus:border-dp-red font-mono uppercase tracking-widest text-sm text-white"
                  />
                  <button className="bg-white text-black font-display text-xl uppercase py-4 hover:bg-dp-red hover:text-white transition-colors">
                    Claim Discount
                  </button>
                </form>
                <button 
                  className="mt-6 text-sm text-white/40 hover:text-white transition-colors underline"
                  onClick={() => setShowPopup(false)}
                >
                  No thanks, I'll pay full price.
                </button>
              </div>
              
              {/* Decorative graphic */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=800&auto=format&fit=crop')] bg-cover opacity-10 grayscale mix-blend-overlay pointer-events-none"></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
