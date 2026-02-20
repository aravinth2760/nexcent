import Frame from "../assets/images/Frame.png";

const Info1 = () => {
  return (
    <section className="max-w-7xl mx-auto py-16 px-6 flex flex-col md:flex-row items-center gap-12">
      <div className="md:w-1/2 flex justify-center">
        <div className="relative flex items-center justify-center">
          <img src={Frame} sizes="100" />
        </div>
      </div>
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#4D4D4D]">
          The unseen of spending three years at Pixelgrade
        </h2>
        <p className="text-slate-500 text-sm leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. Sed accumsan quam vitae est varius fringilla.
          Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
          tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
          Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
          elementum pulvinar odio.
        </p>
        <button className="bg-[#4CAF4F] text-white px-8 py-3 rounded-md font-medium hover:bg-[#3d8c3f] transition-all">
          Learn More
        </button>
      </div>
    </section>
  );
};
export default Info1;
