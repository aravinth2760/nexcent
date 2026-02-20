import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Logo from "../assets/logo/Logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll for the transparent-to-solid navbar effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Service", href: "#service" },
    { name: "Feature", href: "#feature" },
    { name: "Product", href: "#product" },
    { name: "Testimonial", href: "#testimonial" },
    { name: "FAQ", href: "#faq" },
  ];
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled || isMenuOpen
          ? "bg-white border-slate-200 py-3 shadow-sm"
          : "bg-transparent border-transparent py-5"
      }`}
    >
      <div className="flex items-center justify-between px-6 max-w-7xl mx-auto md:px-12">
        {/* Logo */}
        <div className="flex items-center gap-2 z-50">
          <div className="p-1.5 rounded">
            <img src={Logo} />
          </div>
          <span className="text-2xl font-bold text-[#263238]">Nexcent</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-[#18191F] font-medium hover:text-[#4CAF4F] transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Action Buttons & Mobile Toggle */}
        <div className="flex items-center gap-2 md:gap-4 z-50">
          <div className="hidden sm:flex items-center gap-2 md:gap-4">
            <button className="text-[#4CAF4F] font-medium px-4 py-2 hover:bg-[#4CAF4F]/5 rounded-md transition-colors">
              Login
            </button>
            <button className="bg-[#4CAF4F] text-white px-6 py-2 rounded-md font-medium hover:bg-[#3d8c3f] shadow-lg shadow-[#4CAF4F]/20 transition-all active:scale-95">
              Sign up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-[#263238] hover:bg-slate-100 rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen
            ? "max-h-[500px] opacity-100 shadow-xl"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col p-6 gap-4">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-medium text-[#18191F] hover:text-[#4CAF4F] py-2 border-b border-slate-50 last:border-none"
            >
              {item.name}
            </a>
          ))}
          <div className="flex flex-col gap-3 mt-4 sm:hidden">
            <button className="w-full text-[#4CAF4F] font-bold py-3 border border-[#4CAF4F] rounded-md">
              Login
            </button>
            <button className="w-full bg-[#4CAF4F] text-white font-bold py-3 rounded-md">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
