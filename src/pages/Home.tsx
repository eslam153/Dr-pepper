import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, MapPin } from "lucide-react";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-dp-dark font-sans">
        {/* Decorative Background Text */}
        <div className="absolute top-[-50px] left-[-20px] text-[300px] md:text-[500px] font-black text-dp-bg-text select-none pointer-events-none font-display leading-none z-0 italic opacity-50">
          23
        </div>

        <div className="container mx-auto px-4 md:px-12 relative z-10 grid lg:grid-cols-12 gap-10 items-center mt-8">
          {/* Left part: Bold Typography */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-[#CC0000] font-bold text-xs md:text-sm uppercase tracking-[0.3em] mb-4 md:mb-6">
              Est. 1893 / New Generation
            </p>
            <h2 className="text-[12vw] md:text-[90px] lg:text-[110px] leading-[0.85] font-black uppercase tracking-tighter font-display italic mb-6 md:mb-10 text-white">
              THE ONE<br/>
              YOU <span className="text-dp-red">CRAVE.</span>
            </h2>
            <p className="text-base md:text-lg text-gray-400 max-w-md leading-relaxed mb-10 md:mb-12">
              The bold, refreshing taste that has defined generations. Pepsi - <span className="text-white font-bold">the choice of a new generation.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-6 sm:space-y-0 sm:space-x-8">
              <Link to="/flavors" className="bg-white text-black p-6 rounded-full w-40 h-40 flex flex-col items-center justify-center text-center cursor-pointer hover:scale-105 transition-transform flex-shrink-0">
                <span className="text-xs font-bold uppercase tracking-tighter">Find Your</span>
                <span className="text-2xl font-black italic font-display leading-none mt-1">FLAVOR</span>
                <span className="text-[10px] mt-3 border-t border-black/20 pt-2 uppercase tracking-widest">Take the Quiz</span>
              </Link>
              <div className="flex flex-col justify-center">
                <div className="flex -space-x-2 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gray-600 border-2 border-dp-dark flex items-center justify-center overflow-hidden"><img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop" alt="User" /></div>
                  <div className="w-10 h-10 rounded-full bg-gray-500 border-2 border-dp-dark flex items-center justify-center overflow-hidden"><img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&auto=format&fit=crop" alt="User" /></div>
                  <div className="w-10 h-10 rounded-full bg-gray-400 border-2 border-dp-dark flex items-center justify-center overflow-hidden"><img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop" alt="User" /></div>
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-dp-red border-2 border-dp-dark text-[10px] font-bold text-white shadow-lg">+12k</div>
                </div>
                <p className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Cravings satisfied today</p>
              </div>
            </div>
          </motion.div>

          {/* Right part: Product Visualization */}
          <motion.div
            className="lg:col-span-5 relative mt-16 lg:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            style={{ y }}
          >
            <div className="w-full h-[400px] md:h-[500px] bg-gradient-to-b from-dp-red to-[#0A3A6B] rounded-[60px] relative shadow-2xl flex items-center justify-center overflow-hidden border border-white/10">
              {/* Pepsi Can Image */}
              <img 
                src="/images/pepsi-can.png" 
                alt="Pepsi Can" 
                className="h-[320px] md:h-[420px] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
              {/* Texture highlight */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.15)_0%,_transparent_70%)] pointer-events-none"></div>
            </div>
            
            {/* Floating Flavor Info */}
            <div className="absolute bottom-[-10px] md:bottom-[-20px] left-1/2 -translate-x-1/2 md:-translate-x-0 md:left-[-40px] w-[90%] md:w-72 bg-black/60 backdrop-blur-xl border border-white/10 p-5 rounded-3xl shadow-2xl z-20">
              <h4 className="text-[10px] font-bold uppercase tracking-widest mb-4 opacity-60 text-white">Select Variation</h4>
              <div className="grid grid-cols-4 gap-3 mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#278BF5] border-2 border-white flex items-center justify-center cursor-pointer shadow-lg shadow-black/50 hover:scale-110 transition-transform"></div>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#E9D700] border-2 border-transparent hover:border-white/50 flex items-center justify-center cursor-pointer transition-all"></div>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#111111] border-2 border-transparent hover:border-white/50 flex items-center justify-center cursor-pointer transition-all"></div>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#E5B6CE] border-2 border-transparent hover:border-white/50 flex items-center justify-center cursor-pointer transition-all"></div>
              </div>
              <div className="flex justify-between items-end">
                 <span className="text-lg md:text-xl font-bold uppercase tracking-tighter text-white">Original 23</span>
                 <span className="text-[10px] md:text-xs text-dp-red font-bold uppercase tracking-widest pb-1">Classic</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Culture Rail / Desktop Only */}
        <div className="hidden lg:flex absolute right-6 top-1/2 -translate-y-1/2 flex-col items-center space-y-10 opacity-40 hover:opacity-100 transition-opacity z-20">
          <span className="[writing-mode:vertical-rl] text-[10px] font-bold uppercase tracking-[0.5em] text-white hover:text-dp-red cursor-pointer transition-colors">Gamer Rewards</span>
          <span className="[writing-mode:vertical-rl] text-[10px] font-bold uppercase tracking-[0.5em] text-white hover:text-dp-red cursor-pointer transition-colors">Festival Tour</span>
          <span className="[writing-mode:vertical-rl] text-[10px] font-bold uppercase tracking-[0.5em] text-white hover:text-dp-red cursor-pointer transition-colors">Dr Pepper Store</span>
        </div>
      </section>

      {/* 2. FEATURED FLAVORS CAROUSEL */}
      <section className="py-32 bg-dp-black relative">
        <div className="container mx-auto px-4 md:px-8 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="text-5xl md:text-7xl font-display text-stroke hover:text-white transition-colors cursor-default">
              CHOOSE YOUR
            </h2>
            <h2 className="text-5xl md:text-7xl font-display text-dp-red">
              ADVENTURE
            </h2>
          </div>
          <Link to="/flavors" className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-dp-red transition-colors w-fit">
            View All Flavors <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Horizontal scroll container (simplified) */}
        <div className="w-full overflow-x-auto pb-12 snap-x snap-mandatory scrollbar-hide">
          <div className="flex gap-8 px-4 md:px-8 w-max">
            {[
              { name: "Diet", color: "#E8E8E8", desc: "Light and refreshing, zero guilt.", image: "/images/pepsi-diet.jpeg" },
              { name: "Max", color: "#0D0D0D", desc: "Maximum taste, no sugar.", image: "/images/pepsi-max.jpg" },
              { name: "Original", color: "#004B93", desc: "The bold, authentic Pepsi taste.", image: "/images/pepsi-original.png" },
            ].map((flavor, idx) => (
              <motion.div
                key={idx}
                className="w-[300px] md:w-[400px] h-[500px] rounded-2xl p-8 relative flex flex-col justify-end overflow-hidden group snap-center cursor-pointer"
                style={{ backgroundColor: flavor.color }}
                whileHover={{ y: -10 }}
              >
                {/* Product image */}
                {flavor.image ? (
                  <img 
                    src={flavor.image} 
                    alt={flavor.name} 
                    className="absolute inset-0 w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1556881286-fc6915169721?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay group-hover:opacity-40 transition-opacity duration-500"></div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                
                <div className="relative z-10 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-4xl font-display mb-2">{flavor.name}</h3>
                  <p className="text-white/80 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 h-12">
                    {flavor.desc}
                  </p>
                  <button className="bg-white text-black font-display uppercase tracking-widest px-6 py-3 w-full hover:bg-dp-red hover:text-white transition-colors">
                    Explore
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CULTURE HUB / PROMO */}
      <section className="py-24 bg-zinc-900 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Video block */}
            <div className="relative aspect-[4/5] rounded-tl-[100px] rounded-br-[100px] overflow-hidden border border-white/10 group">
              <video 
                src="/videos/pepsi-culture.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
            </div>

            <div>
              <p className="text-dp-red font-bold uppercase tracking-widest mb-4">The Culture Hub</p>
              <h2 className="text-5xl md:text-7xl font-display mb-6">FUEL YOUR <br/> <span className="text-stroke">PASSION.</span></h2>
              <p className="text-gray-400 text-lg mb-8 max-w-md">
                From gaming tournaments to exclusive music drops, we're everywhere you are. Tap into the culture and unlock exclusive rewards.
              </p>
              <ul className="space-y-6 mb-10">
                {[
                  "Exclusive Esports Events & Giveaways",
                  "Underground Music Showcases",
                  "Streetwear Collab Drops"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 border-b border-white/10 pb-4">
                    <span className="text-dp-red font-display text-2xl">0{i + 1}</span>
                    <span className="font-semibold uppercase tracking-wide">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/culture" className="inline-flex items-center gap-4 text-white font-display text-xl uppercase tracking-widest hover:text-dp-red transition-colors">
                Enter The Hub <ArrowRight className="w-6 h-6" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* 4. STORE LOCATOR CTA */}
      <section className="py-32 bg-dp-red relative flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555529902-60cc9b251ce7?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-dp-dark via-transparent to-transparent"></div>
        
        <div className="relative z-10 max-w-3xl px-4">
          <MapPin className="w-16 h-16 mx-auto mb-8 text-white animate-bounce" />
          <h2 className="text-6xl md:text-8xl font-display mb-6 text-white drop-shadow-xl">
            FIND IT FAST.
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-10 font-medium font-body max-w-xl mx-auto">
            Locate your favorite flavors at a store or restaurant near you.
          </p>
          <Link
            to="/locator"
            className="bg-dp-black text-white hover:bg-white hover:text-dp-black px-10 py-5 font-display text-2xl uppercase tracking-widest transition-colors inline-block"
          >
            Launch Map
          </Link>
        </div>
      </section>
    </div>
  );
}
