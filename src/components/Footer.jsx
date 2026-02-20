import { Instagram, Twitter, Facebook, Globe, Send } from "lucide-react";
import Logo from "../assets/logo/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#263238] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-8">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded">
              <img src={Logo} className="w-5 h-5" />
            </div>
            <span className="text-2xl font-bold">Nexcent</span>
          </div>
          <div className="text-slate-300 space-y-2">
            <p>Copyright © 2020 Nexcent ltd.</p>
            <p>All rights reserved</p>
          </div>
          <div className="flex gap-4">
            {[Instagram, Globe, Twitter, Facebook].map((Icon, i) => (
              <div
                key={i}
                className="bg-white/10 p-2 rounded-full cursor-pointer hover:bg-[#4CAF4F] transition-colors"
              >
                <Icon size={20} />
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
          <div className="space-y-6">
            <h4 className="text-xl font-bold">Company</h4>
            <ul className="space-y-3 text-slate-300">
              {[
                "About us",
                "Blog",
                "Contact us",
                "Pricing",
                "Testimonials",
              ].map((item) => (
                <li key={item} className="hover:text-[#4CAF4F] cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-xl font-bold">Support</h4>
            <ul className="space-y-3 text-slate-300">
              {[
                "Help center",
                "Terms of service",
                "Legal",
                "Privacy policy",
                "Status",
              ].map((item) => (
                <li key={item} className="hover:text-[#4CAF4F] cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-xl font-bold">Stay up to date</h4>
            <div className="relative">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-white/10 border-none rounded-lg py-3 px-4 w-full focus:ring-1 focus:ring-[#4CAF4F] outline-none"
              />
              <Send
                size={18}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 cursor-pointer hover:text-white"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
