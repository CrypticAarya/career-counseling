import { motion } from 'framer-motion';

export const Dashboard = () => {
  return (
    <div className="pt-32 px-6 max-w-7xl mx-auto min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="premium-card p-12"
      >
        <h1 className="text-4xl font-bold mb-6 text-primary">Student Dashboard</h1>
        <p className="text-xl text-accent-stone mb-8">Welcome back! Here's an overview of your career journey.</p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-[#fcfaf7] border border-[#e8e1d5] rounded-2xl">
            <h3 className="font-bold mb-2">Saved Colleges</h3>
            <p className="text-3xl font-black text-primary">12</p>
          </div>
          <div className="p-6 bg-[#fcfaf7] border border-[#e8e1d5] rounded-2xl">
            <h3 className="font-bold mb-2">Mentor Sessions</h3>
            <p className="text-3xl font-black text-primary">02</p>
          </div>
          <div className="p-6 bg-[#fcfaf7] border border-[#e8e1d5] rounded-2xl">
            <h3 className="font-bold mb-2">Roadmap Progress</h3>
            <p className="text-3xl font-black text-primary">65%</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
