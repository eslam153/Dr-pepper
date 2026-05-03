import { useEffect, useState } from "react";
import { Search, MapPin, Navigation, Map } from "lucide-react";
import { motion } from "motion/react";

const STORES = [
  { id: 1, name: "7-Eleven 24hr", address: "123 Main St, Austin, TX", type: "Convenience", distance: "0.4 mi", inStock: ["Original", "Zero Sugar", "Cherry"] },
  { id: 2, name: "H-E-B Supermarket", address: "4000 N Lamar Blvd, Austin, TX", type: "Supermarket", distance: "1.2 mi", inStock: ["Original", "Zero Sugar", "Cream Soda", "Strawberries & Cream"] },
  { id: 3, name: "Target", address: "500 W 5th St, Austin, TX", type: "Supermarket", distance: "1.8 mi", inStock: ["Original", "Zero Sugar"] },
  { id: 4, name: "Corner Market", address: "700 Congress Ave, Austin, TX", type: "Convenience", distance: "2.1 mi", inStock: ["Original"] },
];

export default function Locator() {
  const [activeStore, setActiveStore] = useState(STORES[0].id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 min-h-screen bg-dp-black flex flex-col">
      {/* Search Header */}
      <div className="bg-black border-b border-white/10 z-10 p-4 md:p-8 shrink-0 font-sans shadow-xl">
        <h1 className="text-4xl md:text-6xl font-display font-black italic tracking-tighter uppercase mb-6 text-white leading-none">Find Your <span className="text-[#BB1E2D]">Fix.</span></h1>
        <div className="flex flex-col md:flex-row gap-4 max-w-4xl">
          <div className="relative flex-1">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
            <input 
              type="text" 
              placeholder="ENTER ZIP, CITY, OR STATE..." 
              className="w-full bg-white/5 border border-white/20 rounded-full p-4 pl-16 text-white outline-none focus:border-[#BB1E2D] focus:bg-white/10 transition-all font-sans text-xs font-bold uppercase tracking-widest shadow-inner shadow-black/50"
              defaultValue="78701"
            />
          </div>
          <button className="bg-gradient-to-r from-[#BB1E2D] to-[#8B141E] hover:from-white hover:to-white hover:text-black transition-all px-8 rounded-full font-sans font-black text-[10px] uppercase tracking-widest py-4 flex items-center justify-center gap-3 shadow-lg shadow-[#BB1E2D]/20">
            <Navigation className="w-4 h-4" /> Use Current Location
          </button>
        </div>
        
        {/* Filters */}
        <div className="flex gap-4 mt-8 overflow-x-auto pb-2 scrollbar-hide font-sans">
          <button className="whitespace-nowrap px-6 py-2 bg-white text-black font-black text-[10px] uppercase tracking-widest rounded-full shadow-md">All Stores</button>
          <button className="whitespace-nowrap px-6 py-2 border border-white/20 hover:border-white text-white font-black text-[10px] uppercase tracking-widest rounded-full transition-colors">Supermarkets</button>
          <button className="whitespace-nowrap px-6 py-2 border border-white/20 hover:border-white text-white font-black text-[10px] uppercase tracking-widest rounded-full transition-colors">Convenience</button>
          <button className="whitespace-nowrap px-6 py-2 border border-white/20 hover:border-white text-white font-black text-[10px] uppercase tracking-widest rounded-full transition-colors">Restaurants</button>
        </div>
      </div>

      {/* Map & List Split */}
      <div className="flex flex-col md:flex-row flex-1 overflow-hidden relative">
        {/* Mobile Map Toggle */}
        <div className="md:hidden p-4 bg-zinc-900 border-b border-white/10 text-center text-sm font-bold uppercase tracking-widest text-dp-red flex justify-center items-center gap-2">
          <Map className="w-4 h-4" /> Toggle Map View
        </div>

        {/* List */}
        <div className="w-full md:w-[400px] lg:w-[500px] border-r border-white/10 overflow-y-auto bg-[#0F0506] shrink-0 h-[60vh] md:h-auto font-sans">
          {STORES.map((store) => (
            <div 
              key={store.id} 
              className={`p-8 border-b border-white/10 cursor-pointer transition-all ${activeStore === store.id ? 'bg-black border-l-[6px] border-l-[#BB1E2D] shadow-inner' : 'hover:bg-white/5 border-l-[6px] border-l-transparent'}`}
              onClick={() => setActiveStore(store.id)}
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-display font-black italic uppercase text-2xl tracking-tighter text-white">{store.name}</h3>
                <span className="text-[#BB1E2D] font-sans text-xs font-bold bg-white/5 px-3 py-1 rounded-full border border-[#BB1E2D]/30">{store.distance}</span>
              </div>
              <p className="text-gray-400 text-sm mb-6 font-light">{store.address}</p>
              
              <div className="flex gap-2 flex-wrap mb-8">
                {store.inStock.map(flavor => (
                  <span key={flavor} className="text-[9px] uppercase font-bold tracking-widest bg-white text-black px-3 py-1.5 rounded-full shadow-sm">
                    {flavor}
                  </span>
                ))}
              </div>

              <a href={`https://maps.google.com/?q=${store.address}`} target="_blank" rel="noreferrer" className="text-[10px] font-black uppercase tracking-widest text-[#BB1E2D] hover:text-white transition-colors flex items-center gap-2">
                <Navigation className="w-4 h-4" /> Get Directions
              </a>
            </div>
          ))}
        </div>

        {/* Map Placeholder */}
        <div className="flex-1 bg-zinc-900 relative hidden md:block">
          {/* Faux map style */}
          <div className="absolute inset-0 bg-[#1a1a1a] opacity-50 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CgkJPHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPgoJCTxwYXRoIGQ9Ik0wIDIwaDQwTTIwIDB2NDAiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIiAvPgoJPC9zdmc+')]"></div>
          
          {STORES.map((store, i) => (
            <motion.div 
              key={store.id}
              className="absolute group cursor-pointer"
              style={{
                top: `${30 + i * 15}%`,
                left: `${40 + (i % 2 === 0 ? 10 : -10)}%`,
                zIndex: activeStore === store.id ? 20 : 10
              }}
              onClick={() => setActiveStore(store.id)}
              animate={{
                scale: activeStore === store.id ? 1.2 : 1
              }}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center -ml-4 -mt-8 ${activeStore === store.id ? 'bg-dp-red text-white' : 'bg-white text-black'}`}>
                <MapPin className="w-5 h-5" />
              </div>
              <div className={`absolute left-1/2 -translate-x-1/2 top-4 w-1 h-4 ${activeStore === store.id ? 'bg-dp-red' : 'bg-white'}`}></div>
              
              {/* Tooltip */}
              {activeStore === store.id && (
                <div className="absolute top-10 left-1/2 -translate-x-1/2 bg-white text-black p-4 w-[200px] shadow-2xl rounded-sm">
                  <h4 className="font-display uppercase text-lg leading-tight">{store.name}</h4>
                  <p className="text-xs text-gray-600 mt-1">{store.address}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
