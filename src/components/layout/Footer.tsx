import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-[#FAF9F6] py-20 px-6 md:px-12 mt-auto relative z-50">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <h2 className="font-serif text-4xl mb-6">Aurelia</h2>
          <p className="text-[#FAF9F6]/70 max-w-sm mb-8 font-light leading-relaxed">
            An awwwards-winning culinary experience located in the heart of the city. 
            Redefining fine dining through elegance and innovation.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-[#FAF9F6]/20 flex items-center justify-center hover:bg-[#FAF9F6] hover:text-[#1A1A1A] transition-colors text-xs font-semibold">
              IG
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-[#FAF9F6]/20 flex items-center justify-center hover:bg-[#FAF9F6] hover:text-[#1A1A1A] transition-colors text-xs font-semibold">
              X
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-[#FAF9F6]/20 flex items-center justify-center hover:bg-[#FAF9F6] hover:text-[#1A1A1A] transition-colors text-xs font-semibold">
              FB
            </a>
          </div>
        </div>

        <div>
          <h3 className="uppercase tracking-widest text-xs text-[#FAF9F6]/50 mb-6 font-semibold">Location</h3>
          <address className="not-italic text-[#FAF9F6]/80 font-light space-y-2">
            <p>123 Culinary Avenue</p>
            <p>New York, NY 10001</p>
            <p className="pt-4 hover:text-accent transition-colors">
              <a href="mailto:reservations@aurelia.com">reservations@aurelia.com</a>
            </p>
            <p>+1 (555) 123-4567</p>
          </address>
        </div>

        <div>
          <h3 className="uppercase tracking-widest text-xs text-[#FAF9F6]/50 mb-6 font-semibold">Hours</h3>
          <ul className="text-[#FAF9F6]/80 font-light space-y-2">
            <li>Mon - Thu: 5pm - 10pm</li>
            <li>Fri - Sat: 5pm - 11pm</li>
            <li>Sunday: 4pm - 9pm</li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto mt-20 pt-8 border-t border-[#FAF9F6]/10 flex flex-col md:flex-row justify-between items-center text-sm text-[#FAF9F6]/40 font-light">
        <p>&copy; {new Date().getFullYear()} Aurelia Restaurant. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="#" className="hover:text-[#FAF9F6] transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-[#FAF9F6] transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
