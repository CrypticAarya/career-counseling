import { motion } from 'framer-motion';

export const CareerFlow = () => {
  return (
    <div className="pt-32 px-6 max-w-7xl mx-auto min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="premium-card p-12"
      >
        <h1 className="text-4xl font-bold mb-6 text-primary">Career Flow</h1>
        <p className="text-xl text-accent-stone mb-8">Visualise your path from education to your dream career.</p>
        
        <div className="h-64 flex items-center justify-center border-2 border-dashed border-[#e8e1d5] rounded-3xl">
          <p className="text-accent-stone font-medium italic">Career mapping tool coming soon...</p>
        </div>
      </motion.div>
    </div>
  );
};
