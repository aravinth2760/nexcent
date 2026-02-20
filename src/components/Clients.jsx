import Logo1 from "../assets/images/clients/Logo1.png";
import Logo2 from "../assets/images/clients/Logo2.png";
import Logo3 from "../assets/images/clients/Logo3.png";
import Logo4 from "../assets/images/clients/Logo4.png";
import Logo5 from "../assets/images/clients/Logo5.png";
import Logo6 from "../assets/images/clients/Logo6.png";
import Logo7 from "../assets/images/clients/Logo7.png";

const Clients = () => {
  return (
    <section className="max-w-7xl mx-auto py-16 px-6 text-center">
      <h2 className="text-3xl font-bold text-[#4D4D4D] mb-2">Our Clients</h2>
      <p className="text-slate-500 mb-10">
        We have been working with some Fortune 500+ clients
      </p>
      <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all">
        <img src={Logo1} sizes="40" />
        <img src={Logo2} sizes="40" />
        <img src={Logo3} sizes="40" />
        <img src={Logo4} sizes="40" />
        <img src={Logo5} sizes="40" />
        <img src={Logo6} sizes="40" />
        <img src={Logo7} sizes="40" />
      </div>
    </section>
  );
};
export default Clients;
