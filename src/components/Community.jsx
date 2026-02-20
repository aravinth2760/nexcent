import { Users, Building2, UsersRound } from "lucide-react";

const Community = () => {
  return (
    <section className="max-w-7xl mx-auto py-16 px-6">
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-[#4D4D4D] mb-4">
          Manage your entire community in a single system
        </h2>
        <p className="text-slate-500">Who is Nexcent suitable for?</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Membership Organisations",
            desc: "Our membership management software provides full automation of membership renewals and payments",
            icon: <UsersRound className="text-[#4CAF4F] w-10 h-10" />,
          },
          {
            title: "National Associations",
            desc: "Our membership management software provides full automation of membership renewals and payments",
            icon: <Building2 className="text-[#4CAF4F] w-10 h-10" />,
          },
          {
            title: "Clubs And Groups",
            desc: "Our membership management software provides full automation of membership renewals and payments",
            icon: <Users className="text-[#4CAF4F] w-10 h-10" />,
          },
        ].map((card, idx) => (
          <div
            key={idx}
            className="bg-white p-8 rounded-lg shadow-sm border border-slate-50 text-center hover:shadow-md transition-shadow"
          >
            <div className="bg-[#E8F5E9] w-16 h-16 rounded-tl-2xl rounded-br-2xl flex items-center justify-center mx-auto mb-6">
              {card.icon}
            </div>
            <h3 className="text-2xl font-bold text-[#4D4D4D] mb-4">
              {card.title}
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Community;
