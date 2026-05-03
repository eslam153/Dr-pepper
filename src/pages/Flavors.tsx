import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Droplets, ChevronRight, X } from "lucide-react";

const FLAVORS = [
  { id: "original", name: "Original 23", color: "#711F25", tagline: "The Blueprint", image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=800&auto=format&fit=crop" },
  { id: "zero", name: "Zero Sugar", color: "#0A0004", tagline: "Zero Compromise", image: "https://images.unsplash.com/photo-1556881286-fc6915169721?q=80&w=800&auto=format&fit=crop" },
  { id: "cherry", name: "Cherry", color: "#B31B2A", tagline: "Sweet Subversion", image: "https://images.unsplash.com/photo-1595981267035-7b04d9b23b37?q=80&w=800&auto=format&fit=crop" },
  { id: "cream", name: "Cream Soda", color: "#D4A373", tagline: "Smooth Finish", image: "https://images.unsplash.com/photo-1581005244955-f7db2011afbc?q=80&w=800&auto=format&fit=crop" },
  { id: "strawberries", name: "Strawberries & Cream", color: "#E8B4B8", tagline: "Unexpected Vibe", image: "https://images.unsplash.com/photo-1549423696-2fa942fce197?q=80&w=800&auto=format&fit=crop" },
];

const QUIZ_QUESTIONS = [
  {
    question: "What's your vibe today?",
    options: ["Classic & Bold", "Sweet & Chill", "Trying to be good (no sugar)"]
  },
  {
    question: "Pick a color palette",
    options: ["Deep Reds & Blacks", "Pastel Pinks", "Golden Hour"]
  }
];

export default function Flavors() {
  const [quizOpen, setQuizOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [result, setResult] = useState<typeof FLAVORS[0] | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAnswer = (index: number) => {
    if (step < QUIZ_QUESTIONS.length - 1) {
      setStep(step + 1);
    } else {
      // Logic for demo purposes
      setResult(FLAVORS[Math.floor(Math.random() * FLAVORS.length)]);
    }
  };

  const resetQuiz = () => {
    setStep(0);
    setResult(null);
    setQuizOpen(false);
  };

  return (
    <div className="pt-24 min-h-screen bg-dp-dark">
      {/* Header */}
      <div className="container mx-auto px-4 md:px-8 py-16 text-center">
        <p className="text-dp-red font-bold uppercase tracking-widest mb-4">The Lineup</p>
        <h1 className="text-6xl md:text-8xl font-display uppercase text-stroke hover:text-white transition-colors cursor-default mb-8">
          Meet Your Match.
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-8">
          From the original 23 flavors to our boldest new creations, discover the taste that defines you.
        </p>
        
        <button 
          onClick={() => setQuizOpen(true)}
          className="bg-dp-red hover:bg-white hover:text-black transition-colors px-8 py-4 font-display uppercase tracking-widest inline-block"
        >
          Take the Flavor Quiz
        </button>
      </div>

      {/* Quiz Modal */}
      <AnimatePresence>
        {quizOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-zinc-950 border border-white/10 w-full max-w-2xl relative overflow-hidden flex flex-col min-h-[400px]"
            >
              <button 
                onClick={resetQuiz}
                className="absolute top-4 right-4 z-20 text-white/50 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="p-10 flex-1 flex flex-col justify-center relative z-10">
                {!result ? (
                  <>
                    <div className="text-dp-red font-bold uppercase tracking-widest mb-8 text-sm">
                      Question {step + 1} of {QUIZ_QUESTIONS.length}
                    </div>
                    <h3 className="text-4xl md:text-5xl font-display uppercase mb-8">
                      {QUIZ_QUESTIONS[step].question}
                    </h3>
                    <div className="flex flex-col gap-4">
                      {QUIZ_QUESTIONS[step].options.map((opt, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleAnswer(idx)}
                          className="bg-white/5 hover:bg-dp-red border border-white/10 hover:border-dp-red text-left px-6 py-4 transition-colors font-display text-xl uppercase tracking-wider"
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="text-center">
                    <span className="text-sm font-bold uppercase tracking-widest mb-4 block text-gray-400">Your Perfect Match</span>
                    <h3 className="text-5xl md:text-7xl font-display uppercase mb-6" style={{ color: result.color === '#0A0004' ? '#FFF' : result.color }}>
                      {result.name}
                    </h3>
                    <img src={result.image} alt={result.name} className="w-48 h-48 object-cover rounded-full mx-auto mb-8 border-4 border-white/10 opacity-80" />
                    <button 
                      onClick={resetQuiz}
                      className="bg-white text-black hover:bg-dp-red hover:text-white transition-colors px-8 py-4 font-display uppercase tracking-widest"
                    >
                      Explore the Lineup
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        {FLAVORS.map((flavor, i) => (
          <motion.div
            key={flavor.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="group relative h-[600px] bg-black overflow-hidden flex flex-col justify-end"
          >
            {/* Background Image / Color */}
            <div 
              className="absolute inset-0 opacity-40 mix-blend-luminosity group-hover:opacity-100 group-hover:mix-blend-normal transition-all duration-700"
              style={{ backgroundColor: flavor.color }}
            >
              <img src={flavor.image} alt={flavor.name} className="w-full h-full object-cover opacity-50" />
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

            {/* Content */}
            <div className="relative z-10 p-8 transform translate-y-16 group-hover:translate-y-0 transition-transform duration-500">
              <span className="text-sm font-bold uppercase tracking-widest mb-2 block text-white/70">
                {flavor.tagline}
              </span>
              <h2 className="text-5xl font-display mb-4" style={{ color: i === 1 ? '#FFF' : '#FFF' }}>
                {flavor.name}
              </h2>
              
              <div className="flex flex-col gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                <p className="text-white/80 line-clamp-2">
                  Dive into the unique flavor profile. Perfect for any occasion where you need a bold boost.
                </p>
                <div className="flex items-center gap-4 mt-4 text-sm font-semibold uppercase tracking-widest text-dp-red">
                  <Droplets className="w-4 h-4" /> Taste Notes
                </div>
                
                <div className="flex gap-2 mt-4">
                  <button className="flex-1 bg-white text-black font-display uppercase py-3 hover:bg-dp-red hover:text-white transition-colors flex items-center justify-center gap-2">
                    Buy Now
                  </button>
                  <Link to={`/locator`} className="w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white text-white hover:text-black transition-colors rounded-sm cursor-pointer">
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
        
        {/* Placeholder / Coming Soon */}
        <div className="h-[600px] border border-white/5 flex flex-col items-center justify-center p-8 text-center bg-zinc-950">
          <Droplets className="w-12 h-12 text-white/20 mb-6" />
          <h2 className="text-3xl font-display uppercase text-white/40 mb-4">More Dropping Soon</h2>
          <p className="text-white/30 text-sm">Join the 23 Flavors list to get early access to new releases.</p>
        </div>
      </div>
    </div>
  );
}
