import { ArrowRight } from "lucide-react";
import b1 from "../assets/images/blog/1.png";
import b2 from "../assets/images/blog/2.png";
import b3 from "../assets/images/blog/3.png";

const Blog = () => {
  return (
    <section id="testimonial" className="max-w-7xl mx-auto py-20 px-6">
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-[#4D4D4D] mb-4">
          Caring is the new marketing
        </h2>
        <p className="text-slate-500">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lot's
          more​.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {[
          {
            title: "Creating Streamlined Safeguarding Processes with OneRen",
            img: b1,
          },
          {
            title:
              "What are your safeguarding responsibilities and how can you manage them?",
            img: b2,
          },
          {
            title: "Revamping the Membership Model with Triathlon Australia",
            img: b3,
          },
        ].map((blog, idx) => (
          <div key={idx} className="relative h-96 group cursor-pointer">
            <img
              src={blog.img}
              className="w-full rounded-xl transition-transform group-hover:scale-[1.02]"
            />
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center max-w-3xl mx-auto space-y-10 py-10">
        <h2 className="text-5xl font-bold text-[#263238] leading-tight">
          Pellentesque suscipit fringilla libero eu.
        </h2>
        <button className="bg-[#4CAF4F] text-white px-10 py-4 rounded-md font-medium text-lg hover:bg-[#3d8c3f] flex items-center gap-2 mx-auto transition-all">
          Get a Demo <ArrowRight size={22} />
        </button>
      </div>
    </section>
  );
};
export default Blog;
