import Illustration from "../assets/images/Illustration.png";

const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-[#F5F7FA] px-6 pt-32 pb-16 md:pt-48 md:pb-24 md:px-12"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-[#4D4D4D] leading-tight">
            Lessons and insights <br />
            <span className="text-[#4CAF4F]">from 8 years</span>
          </h1>
          <p className="text-slate-500 text-lg">
            Where to grow your business as a photographer: site or social media?
          </p>
          <button className="bg-[#4CAF4F] text-white px-8 py-3 rounded-md font-medium hover:bg-[#3d8c3f] transition-all hover:shadow-lg">
            Register
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src={Illustration} />
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-12">
        <div className="w-2.5 h-2.5 rounded-full bg-[#4CAF4F]"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-[#4CAF4F]/30"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-[#4CAF4F]/30"></div>
      </div>
    </section>
  );
};
export default Hero;
