import { motion } from 'framer-motion';
import { Star, Zap, Home } from 'lucide-react';

export const Colleges = () => {
  const colleges = [
    {
      name: "VIT Pune",
      placement: 4.8,
      culture: "Intense Coding",
      vibe: "Academic",
      hostel: "Average",
      tags: ["High Packages", "Strict Attendance"]
    },
    {
      name: "COEP Pune",
      placement: 4.9,
      culture: "Peer-led",
      vibe: "Historic",
      hostel: "Standard",
      tags: ["Legacy", "Elite Networking"]
    },
    {
      name: "MIT-WPU",
      placement: 4.2,
      culture: "Startup-focused",
      vibe: "Lively",
      hostel: "Premium",
      tags: ["Great Events", "Expensive"]
    },
    {
      name: "PCCOE",
      placement: 4.5,
      culture: "Discipline",
      vibe: "Focused",
      hostel: "Good",
      tags: ["Mass Recruiters", "Placement Cell"]
    },
    {
      name: "DY Patil",
      placement: 4.0,
      culture: "Relaxed",
      vibe: "Social",
      hostel: "Modern",
      tags: ["Good Infrastructure", "Campus Life"]
    }
  ];

  return (
    <section id="colleges" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-primary tracking-tight">Featured Colleges</h2>
            <p className="text-xl text-accent-stone font-medium">Get specific insights for these top institutes.</p>
          </div>
          <button className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all duration-300 bg-white px-8 py-4 rounded-full border border-[#e8e1d5] shadow-sm hover:shadow-md">
            View All 50+ Colleges <Zap className="w-5 h-5 fill-primary" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {colleges.map((college, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="premium-card p-10 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Star className="w-32 h-32 fill-primary" />
              </div>

              <h3 className="text-3xl font-bold mb-8 text-primary">{college.name}</h3>
              
              <div className="space-y-6 mb-10">
                <div className="flex justify-between items-center">
                  <span className="text-accent-stone font-bold text-xs uppercase tracking-widest flex items-center gap-3">
                    <Zap className="w-5 h-5 text-primary" /> Placements
                  </span>
                  <span className="text-lg font-black text-primary">{college.placement}/5.0</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-accent-stone font-bold text-xs uppercase tracking-widest flex items-center gap-3">
                    <Star className="w-5 h-5 text-primary" /> Culture
                  </span>
                  <span className="text-lg font-black text-primary">{college.culture}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-accent-stone font-bold text-xs uppercase tracking-widest flex items-center gap-3">
                    <Home className="w-5 h-5 text-primary" /> Hostel
                  </span>
                  <span className="text-lg font-black text-primary">{college.hostel}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {college.tags.map(tag => (
                  <span key={tag} className="text-xs font-bold px-4 py-2 rounded-full bg-[#fcfaf7] border border-[#e8e1d5] text-accent-stone">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
