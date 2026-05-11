import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { mentors } from '../data/mentors';

export const Mentors = () => {
  return (
    <div className="pt-32 px-6 max-w-7xl mx-auto min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="premium-card p-12"
      >
        <h1 className="text-4xl font-bold mb-6 text-primary">Connect with Mentors</h1>
        <p className="text-xl text-accent-stone mb-8">Book a session with mentors from different colleges.</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {mentors.map((mentor, i) => (
            <div key={`${mentor.name}-${i}`} className="p-8 bg-[#fcfaf7] border border-[#e8e1d5] rounded-2xl flex gap-6 items-center">
              <img
                src={`https://api.dicebear.com/9.x/adventurer/svg?seed=${encodeURIComponent(mentor.name)}`}
                alt={`${mentor.name} cartoon avatar`}
                className="w-20 h-20 rounded-full border border-[#e8e1d5] bg-white"
              />
              <div>
                <h3 className="font-bold text-xl">{mentor.name}</h3>
                <p className="text-accent-stone">{mentor.college}</p>
                <Link to={`/mentor/${mentor.id}#book-session`} className="mt-4 inline-block text-primary font-bold text-sm underline">
                  Book Session
                </Link>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
