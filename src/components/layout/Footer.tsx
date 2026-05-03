import { Link } from "react-router-dom";
import { ArrowRight, Instagram, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0F0506] border-t border-white/10 font-sans">
      {/* Top Banner similar to the bottom bar in design */}
      <div className="w-full bg-white/5 backdrop-blur-md border-b border-white/10 flex flex-col md:flex-row items-center px-4 md:px-12 py-6 justify-between gap-6">
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-12">
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-dp-red uppercase tracking-widest">Store Locator</span>
            <div className="flex mt-1 border-b border-white/30 pb-1 w-full md:w-auto">
              <input type="text" placeholder="Enter Zip Code" className="bg-transparent text-sm focus:outline-none placeholder:text-gray-600 text-white min-w-[200px]" />
              <svg className="w-4 h-4 text-dp-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="hidden md:block w-px h-8 bg-white/20"></span>
            <div className="text-sm italic font-display text-white">
              "The best part of my day." <br/>
              <span className="text-[10px] text-gray-500 uppercase font-sans tracking-widest not-italic">— @joshua_vibe</span>
            </div>
          </div>
        </div>

        <div className="flex items-center bg-black/40 rounded-full px-2 py-2 border border-white/10 w-full md:w-auto">
          <input type="email" placeholder="Join the Pepper Pack" className="bg-transparent px-4 text-xs focus:outline-none text-white w-full md:w-auto" />
          <button className="bg-white text-black px-6 py-2 rounded-full text-[10px] font-black uppercase hover:bg-dp-red hover:text-white transition-colors whitespace-nowrap">Sign Up</button>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h2 className="text-4xl md:text-5xl font-display font-black tracking-tighter italic mb-6">
              <span className="text-dp-red">Dr</span><span className="mx-1 text-white">Pepper</span>
            </h2>
            <p className="text-gray-400 mb-8 max-w-sm text-sm leading-relaxed">
              Est. 1885. A unique blend of 23 signature flavors that defies explanation. It's not a cola, it's not a root beer, it's the vibe.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[10px] uppercase font-bold tracking-widest text-[#BB1E2D] mb-6">Explore</h3>
            <ul className="space-y-4 flex flex-col">
              <Link to="/flavors" className="text-gray-400 hover:text-white transition-colors uppercase text-xs tracking-widest font-semibold">Our Flavors</Link>
              <Link to="/culture" className="text-gray-400 hover:text-white transition-colors uppercase text-xs tracking-widest font-semibold">Culture Hub</Link>
              <Link to="/locator" className="text-gray-400 hover:text-white transition-colors uppercase text-xs tracking-widest font-semibold">Store Locator</Link>
              <Link to="/about" className="text-gray-400 hover:text-white transition-colors uppercase text-xs tracking-widest font-semibold">About Us</Link>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-[10px] uppercase font-bold tracking-widest text-[#BB1E2D] mb-6">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#BB1E2D] hover:scale-110 transition-all border border-white/10 text-white">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#BB1E2D] hover:scale-110 transition-all border border-white/10 text-white">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#BB1E2D] hover:scale-110 transition-all border border-white/10 text-white">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
            <div className="mt-8">
              <h3 className="text-[10px] uppercase font-bold tracking-widest text-white mb-2">Contact</h3>
              <a href="mailto:support@drpepper.com" className="text-gray-400 hover:text-[#BB1E2D] transition-colors text-xs font-semibold tracking-wider">
                SUPPORT@DRPEPPER.COM
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-[10px] font-bold tracking-widest uppercase">
            &copy; {new Date().getFullYear()} DR PEPPER. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-600 hover:text-white text-[10px] font-bold tracking-widest uppercase transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-white text-[10px] font-bold tracking-widest uppercase transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
