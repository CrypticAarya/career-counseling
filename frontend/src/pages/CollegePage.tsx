import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

export const CollegePage = () => {
  const { id } = useParams();
  
  return (
    <div className="pt-32 px-6 max-w-7xl mx-auto min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="premium-card p-12"
      >
        <h1 className="text-4xl font-bold mb-6 text-primary capitalize">{id?.replace('-', ' ')}</h1>
        <p className="text-xl text-accent-stone mb-8">Detailed insights, placement records, and campus culture.</p>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Key Statistics</h3>
            <ul className="space-y-4">
              <li className="flex justify-between border-b border-[#e8e1d5] pb-2">
                <span className="text-accent-stone">Avg Placement</span>
                <span className="font-bold">8.5 LPA</span>
              </li>
              <li className="flex justify-between border-b border-[#e8e1d5] pb-2">
                <span className="text-accent-stone">Highest Placement</span>
                <span className="font-bold">45 LPA</span>
              </li>
              <li className="flex justify-between border-b border-[#e8e1d5] pb-2">
                <span className="text-accent-stone">Fees (Annual)</span>
                <span className="font-bold">₹2.5 Lakhs</span>
              </li>
            </ul>
          </div>
          <div className="bg-[#fcfaf7] border border-[#e8e1d5] rounded-3xl p-8 flex items-center justify-center">
            <p className="text-accent-stone font-medium italic">Campus images coming soon...</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
