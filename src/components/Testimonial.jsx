import { ArrowRight } from "lucide-react";
import Logo1 from "../assets/images/clients/Logo1.png";
import Logo2 from "../assets/images/clients/Logo2.png";
import Logo3 from "../assets/images/clients/Logo3.png";
import Logo4 from "../assets/images/clients/Logo4.png";
import TestimonialImg from "../assets/images/Testimonial.png";

const Testimonial = () => {
  return (
    <section className="bg-[#F5F7FA] py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/3">
          <img src={TestimonialImg} />
        </div>
        <div className="md:w-2/3 space-y-6">
          <p className="text-slate-600 font-medium leading-relaxed italic text-lg">
            "Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            erat metus. Vivamus sed libero ornare, finibus quam mb, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit."
          </p>
          <div>
            <h4 className="text-[#4CAF4F] font-bold text-xl">Tim Smith</h4>
            <p className="text-slate-500">
              British Dragon Boat Racing Association
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-8 pt-4">
            <div className="flex gap-6 grayscale opacity-40">
              <img src={Logo1} sizes="24" />
              <img src={Logo2} sizes="24" />
              <img src={Logo3} sizes="24" />
              <img src={Logo4} sizes="24" />
            </div>
            <button className="text-[#4CAF4F] font-bold flex items-center gap-2 hover:gap-4 transition-all">
              Meet all customers <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonial;
