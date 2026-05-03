import { useEffect } from "react";
import { Droplets } from "lucide-react";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 min-h-screen bg-black font-sans">
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555529902-60cc9b251ce7?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay grayscale"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/80 to-black"></div>
        
        <div className="relative z-10 text-center px-4">
          <Droplets className="w-12 h-12 text-[#BB1E2D] mx-auto mb-6" />
          <h1 className="text-6xl md:text-[140px] font-display font-black italic uppercase tracking-tighter text-white/90 leading-none">
            EST. <span className="text-[#BB1E2D] text-stroke not-italic font-sans">1885</span>
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 container mx-auto px-4 md:px-8 max-w-5xl relative">
        <div className="absolute left-8 md:left-1/2 top-24 bottom-24 w-px bg-white/10 -translate-x-1/2 hidden md:block"></div>
        
        <div className="space-y-32">
          {/* Item 1 */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
            <div className="md:text-right relative">
              <h2 className="text-4xl md:text-5xl font-display font-black italic uppercase tracking-tighter mb-6 text-[#BB1E2D]">The Origin Story</h2>
              <p className="text-gray-400 font-body font-light text-lg leading-relaxed">Created in Waco, Texas by pharmacist Charles Alderton, Dr Pepper is a vibrant blend of 23 fruit flavors. It's the oldest major soft drink in America, predating Coca-Cola by a full year.</p>
              
              <div className="hidden md:block absolute top-[10px] -right-12 w-3 h-3 bg-[#BB1E2D] rounded-full translate-x-1/2 z-10 ring-4 ring-black"></div>
            </div>
            <div className="aspect-[4/5] bg-zinc-900 rounded-[40px] overflow-hidden border border-white/10 p-2">
              <div className="w-full h-full rounded-[32px] overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1549423696-2fa942fce197?q=80&w=800&auto=format&fit=crop" alt="Vintage Pharmacy" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center md:flex-row-reverse">
            <div className="md:col-start-2 relative">
              <div className="hidden md:block absolute top-[10px] -left-12 w-3 h-3 bg-[#BB1E2D] rounded-full -translate-x-1/2 z-10 ring-4 ring-black"></div>
              <h2 className="text-4xl md:text-5xl font-display font-black italic uppercase tracking-tighter mb-6 text-[#BB1E2D]">The 23 Flavors</h2>
              <p className="text-gray-400 font-body font-light text-lg leading-relaxed">The 23 flavors are a closely guarded secret, held in a vault in Plano, Texas. It's a complex, unmistakable taste that defies categorization. It's not a cola, it's not a fruit-flavored drink. It's Dr Pepper.</p>
            </div>
            <div className="md:col-start-1 md:row-start-1 aspect-[4/5] bg-zinc-900 rounded-[40px] overflow-hidden border border-white/10 p-2">
              <div className="w-full h-full rounded-[32px] overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=800&auto=format&fit=crop" alt="The 23 Flavors" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="py-32 bg-gradient-to-b from-[#BB1E2D] to-[#8B141E] text-center px-4 mt-12 border-t border-white/20 shadow-[0_-20px_50px_rgba(187,30,45,0.3)]">
        <h2 className="text-4xl md:text-[80px] font-display font-black italic uppercase tracking-tighter text-white max-w-6xl mx-auto leading-[0.9]">
          We don't do subtle. We don't do boring. We are exactly who we are. 
          <span className="block mt-8 text-black not-italic font-sans text-stroke">Are you?</span>
        </h2>
      </section>
    </div>
  );
}
