import { motion } from 'framer-motion';

export const Stats = () => {
  const stats = [
    { label: 'Students Guided', value: '20+' },
    { label: 'Colleges Covered', value: '7+' },
    { label: 'Student Mentors', value: '15+' },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-5xl md:text-6xl font-extrabold mb-3 text-primary tracking-tighter">{stat.value}</h3>
              <p className="text-accent-stone text-xs font-bold tracking-[0.2em] uppercase">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
