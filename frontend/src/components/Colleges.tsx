import { motion } from 'framer-motion';
import { Star, Zap, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { colleges } from '../data/mentors';

export const Colleges = () => {
  const navigate = useNavigate();

  return (
    <section id="colleges" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-primary tracking-tight">Featured Colleges</h2>
            <p className="text-xl text-accent-stone font-medium">Get specific insights for these top institutes.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {colleges.map((college, idx) => (
            <motion.div
              key={college.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="premium-card p-10 group relative overflow-hidden cursor-pointer"
              onClick={() => navigate(`/college/${college.id}`)}
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
                  <span className="text-lg font-black text-primary">Mentor Verified</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-accent-stone font-bold text-xs uppercase tracking-widest flex items-center gap-3">
                    <Star className="w-5 h-5 text-primary" /> Culture
                  </span>
                  <span className="text-lg font-black text-primary">Student Stories</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-accent-stone font-bold text-xs uppercase tracking-widest flex items-center gap-3">
                    <Home className="w-5 h-5 text-primary" /> Hostel
                  </span>
                  <span className="text-lg font-black text-primary">Raw Insights</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <span className="text-xs font-bold px-4 py-2 rounded-full bg-[#fcfaf7] border border-[#e8e1d5] text-accent-stone">
                  Click to view mentors
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
