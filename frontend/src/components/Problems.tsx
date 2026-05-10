import { motion } from 'framer-motion';
import { AlertCircle, TrendingDown, Home, Code, Users, Search } from 'lucide-react';

export const Problems = () => {
  const problems = [
    { icon: AlertCircle, title: 'Fake Counseling', desc: 'Paid counselors often have secret tie-ups with low-tier colleges.' },
    { icon: TrendingDown, title: 'Misleading Marketing', desc: 'College brochures only show the best 1% of placements.' },
    { icon: Users, title: 'Placement Confusion', desc: 'Mass recruiters vs Dream companies? No one tells you the real ratio.' },
    { icon: Home, title: 'Hostel Concerns', desc: 'Food quality, curfew rules, and hidden costs are never disclosed.' },
    { icon: Code, title: 'Coding Culture', desc: 'Is there a competitive coding scene or just boring labs?' },
    { icon: Search, title: 'No Senior Access', desc: 'Hard to find honest students who aren\'t trying to sell you the college.' },
  ];

  return (
    <section id="features" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-8 text-primary tracking-tight"
          >
            Students Make Life-Changing Decisions <br />
            <span className="text-secondary italic">With Almost No Real Information</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="premium-card p-10 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#fcfaf7] border border-[#e8e1d5] flex items-center justify-center mb-8 group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                <problem.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-2xl font-bold mb-4 text-primary">{problem.title}</h4>
              <p className="text-accent-stone leading-relaxed font-medium">{problem.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
