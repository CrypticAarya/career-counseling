import { motion } from 'framer-motion';

export const Mentors = () => {
  return (
    <div className="pt-32 px-6 max-w-7xl mx-auto min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="premium-card p-12"
      >
        <h1 className="text-4xl font-bold mb-6 text-primary">Connect with Mentors</h1>
        <p className="text-xl text-accent-stone mb-8">Book a session with industry experts and college alumni.</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2].map((i) => (
            <div key={i} className="p-8 bg-[#fcfaf7] border border-[#e8e1d5] rounded-2xl flex gap-6 items-center">
              <div className="w-20 h-20 bg-[#e8e1d5] rounded-full" />
              <div>
                <h3 className="font-bold text-xl">Mentor Name</h3>
                <p className="text-accent-stone">Software Engineer @ Google</p>
                <button 
                  onClick={() => window.location.href = '/#book'}
                  className="mt-4 text-primary font-bold text-sm underline"
                >
                  Book Session
                </button>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
