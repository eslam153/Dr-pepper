import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Play } from "lucide-react";
import { motion } from "motion/react";

const ARTICLES = [
  { id: 1, type: "Gaming", title: "Zero Sugar Pro Invitational: The Recap", date: "MAR 12, 2024", img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop" },
  { id: 2, type: "Music", title: "Underground Sessions: Volume 4", date: "FEB 28, 2024", img: "https://images.unsplash.com/photo-1470229722913-7c090be5c520?q=80&w=800&auto=format&fit=crop" },
  { id: 3, type: "Collab", title: "Dr Pepper x Streetwear: The Drop", date: "FEB 15, 2024", img: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=800&auto=format&fit=crop" },
];

export default function Culture() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-dp-dark font-sans">
      {/* Editorial Header */}
      <div className="container mx-auto px-4 md:px-12 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <p className="text-[#BB1E2D] font-bold text-xs uppercase tracking-[0.3em] mb-4">The Culture Hub</p>
            <h1 className="text-[14vw] md:text-[120px] font-display font-black uppercase leading-[0.85] tracking-tighter italic">
              MORE <br />
              <span className="text-stroke not-italic font-sans">THAN</span> <br />
              SODA.
            </h1>
          </div>
          <p className="text-gray-400 text-lg md:text-xl font-body font-light mb-4 leading-relaxed">
            We're fueling the passions that drive you. From the main stage to the final boss, dive into the latest events, collaborations, and stories.
          </p>
        </div>

        {/* Featured Video */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative aspect-video w-full rounded-[40px] overflow-hidden group cursor-pointer mb-24 shadow-2xl border border-white/5"
        >
          <img src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop" alt="Featured Culture" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-[#BB1E2D] flex items-center justify-center pl-2 scale-90 group-hover:scale-110 transition-transform shadow-lg shadow-[#BB1E2D]/20">
              <Play className="w-10 h-10 text-white" />
            </div>
          </div>
          <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 max-w-2xl">
            <span className="bg-white text-black text-[10px] font-black uppercase tracking-widest px-4 py-2 mb-6 inline-block rounded-full">Featured</span>
            <h2 className="text-4xl md:text-6xl font-display font-black italic tracking-tighter uppercase drop-shadow-xl text-white">The Setup: Pro Gamer Studio Tour</h2>
          </div>
        </motion.div>

        {/* Latest Drops Grid */}
        <h3 className="text-2xl font-display font-black italic tracking-tighter uppercase border-b border-white/10 pb-4 mb-10 text-white">Latest Drops</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {ARTICLES.map((article, i) => (
            <Link key={article.id} to="#" className="group">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden mb-6 relative border border-white/5">
                <img src={article.img} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-[#BB1E2D] mb-3">
                <span>{article.type}</span>
                <span className="text-gray-600">•</span>
                <span className="text-gray-500">{article.date}</span>
              </div>
              <h4 className="text-2xl font-display font-black italic tracking-tighter text-white uppercase group-hover:text-[#BB1E2D] transition-colors leading-tight">{article.title}</h4>
            </Link>
          ))}
        </div>
      </div>
      
      {/* Email Capture Sub */}
      <div className="bg-gradient-to-b from-[#4A0B10] to-[#1A0D0E] py-32 mt-32 border-t border-white/10">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-5xl md:text-6xl font-display font-black italic tracking-tighter uppercase mb-6 text-white text-stroke">Join the Inner Circle</h2>
          <p className="text-white/80 mb-10 text-lg">Get early access to exclusive drops, event tickets, and limited edition flavors.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input type="email" placeholder="ENTER YOUR EMAIL" className="flex-1 bg-black/40 border border-white/20 text-white px-6 py-4 outline-none font-sans text-xs font-bold uppercase tracking-widest focus:border-[#BB1E2D] transition-colors rounded-3xl sm:rounded-none sm:rounded-l-3xl" />
            <button className="bg-white text-black font-sans font-black text-[10px] uppercase tracking-widest px-8 py-4 hover:bg-[#BB1E2D] hover:text-white transition-colors rounded-3xl sm:rounded-none sm:rounded-r-3xl">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
