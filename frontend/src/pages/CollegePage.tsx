import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { mentors, colleges } from '../data/mentors';

export const CollegePage = () => {
  const { id } = useParams();
  const selectedCollege = colleges.find((college) => college.id === id);
  const collegeMentors = mentors.filter((mentor) => mentor.college === selectedCollege?.name);
  
  return (
    <div className="pt-32 px-6 max-w-7xl mx-auto min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="premium-card p-12"
      >
        <h1 className="text-4xl font-bold mb-6 text-primary">{selectedCollege?.name ?? 'College Not Found'}</h1>
        <p className="text-xl text-accent-stone mb-8">Mentors from this college with raw details and direct booking.</p>
        
        {!selectedCollege && (
          <div className="bg-[#fcfaf7] border border-[#e8e1d5] rounded-3xl p-8">
            <p className="text-accent-stone font-medium">Please select a valid college from the home page.</p>
          </div>
        )}

        {selectedCollege && collegeMentors.length === 0 && (
          <div className="bg-[#fcfaf7] border border-[#e8e1d5] rounded-3xl p-8">
            <p className="text-accent-stone font-medium">No mentors added for this college yet.</p>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-8">
          {collegeMentors.map((mentor, index) => (
            <div key={`${mentor.name}-${index}`} className="p-8 bg-[#fcfaf7] border border-[#e8e1d5] rounded-2xl flex gap-6 items-start">
              <img
                src={`https://api.dicebear.com/9.x/adventurer/svg?seed=${encodeURIComponent(mentor.name)}`}
                alt={`${mentor.name} cartoon avatar`}
                className="w-20 h-20 rounded-full border border-[#e8e1d5] bg-white"
              />
              <div className="flex-1">
                <h3 className="font-bold text-xl text-primary">{mentor.name}</h3>
                <p className="text-accent-stone mt-2">{mentor.bio}</p>
                <p className="text-sm text-accent-stone mt-3">
                  <span className="font-bold text-primary">Raw Details:</span> {mentor.name} | {mentor.number ?? 'Not available'} | {mentor.college}
                </p>
                <div className="mt-4 flex gap-4">
                  {mentor.number && (
                    <a href={`tel:${mentor.number}`} className="text-primary font-bold text-sm underline">
                      Call Mentor
                    </a>
                  )}
                  <Link to={`/mentor/${mentor.id}#book-session`} className="text-primary font-bold text-sm underline">
                    Book Session
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
