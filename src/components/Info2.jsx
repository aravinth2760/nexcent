import Pana from "../assets/images/pana.png";

const Info2 = () => {
  return (
    <section className="max-w-7xl mx-auto py-16 px-6 flex flex-col md:flex-row-reverse items-center gap-12">
      <div className="md:w-1/2 flex justify-center">
        <div className="p-12">
          <img src={Pana} size={120} />
        </div>
      </div>
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#4D4D4D]">
          How to design your site footer like we did
        </h2>
        <p className="text-slate-500 text-sm leading-relaxed">
          Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula
          ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor.
          Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam
          tincidunt congue enim, ut porta lorem lacinia consectetur.
        </p>
        <button className="bg-[#4CAF4F] text-white px-8 py-3 rounded-md font-medium hover:bg-[#3d8c3f] transition-all">
          Learn More
        </button>
      </div>
    </section>
  );
};
export default Info2;
