import { CreditCard, MousePointer2, Users, UsersRound } from "lucide-react";

const Stats = () => {
  return (
    <section className="bg-[#F5F7FA] py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-[#4D4D4D] mb-2">
            Helping a local <br />
            <span className="text-[#4CAF4F]">business reinvent itself</span>
          </h2>
          <p className="text-[#18191F]">
            We reached here with our hard work and dedication
          </p>
        </div>
        <div className="md:w-1/2 grid grid-cols-2 gap-x-12 gap-y-10">
          {[
            {
              label: "Members",
              val: "2,245,341",
              icon: <Users className="text-[#4CAF4F]" />,
            },
            {
              label: "Clubs",
              val: "46,328",
              icon: <UsersRound className="text-[#4CAF4F]" />,
            },
            {
              label: "Event Bookings",
              val: "828,867",
              icon: <MousePointer2 className="text-[#4CAF4F]" />,
            },
            {
              label: "Payments",
              val: "1,926,436",
              icon: <CreditCard className="text-[#4CAF4F]" />,
            },
          ].map((stat, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="text-3xl">{stat.icon}</div>
              <div>
                <div className="text-2xl font-bold text-[#4D4D4D]">
                  {stat.val}
                </div>
                <div className="text-slate-500 text-sm">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Stats;
