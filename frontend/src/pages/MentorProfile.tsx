import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { mentors } from '../data/mentors';

export const MentorProfile = () => {
  const params = useParams();
  const wildcard = params['*'] ?? '';
  const rawId = (wildcard.split('/')[0] || params.id || '').split('#')[0];
  const mentor = mentors.find((item) => item.id === rawId) ?? mentors.find((item) => item.id.startsWith(rawId));
  const [isBooked, setIsBooked] = useState(false);

  if (!mentor) {
    return (
      <div className="pt-32 px-6 max-w-4xl mx-auto min-h-screen">
        <div className="premium-card p-10">
          <h1 className="text-3xl font-bold text-primary">Mentor not found</h1>
          <Link to="/mentors" className="text-primary font-bold underline mt-4 inline-block">
            Back to mentors
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 px-6 max-w-4xl mx-auto min-h-screen">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="premium-card p-10">
        <div className="flex items-center gap-6 mb-8">
          <img
            src={`https://api.dicebear.com/9.x/adventurer/svg?seed=${encodeURIComponent(mentor.name)}`}
            alt={`${mentor.name} cartoon avatar`}
            className="w-24 h-24 rounded-full border border-[#e8e1d5] bg-white"
          />
          <div>
            <h1 className="text-3xl font-bold text-primary">{mentor.name}</h1>
            <p className="text-accent-stone">{mentor.college}</p>
          </div>
        </div>

        <p className="text-accent-stone mb-3">{mentor.bio}</p>
        <p className="text-sm text-accent-stone mb-8">
          <span className="font-bold text-primary">Raw Details:</span> {mentor.name} | {mentor.number ?? 'Not available'} | {mentor.college}
        </p>

        <div id="book-session" className="scroll-mt-40">
          <button
            onClick={() => setIsBooked(true)}
            className="px-6 py-3 rounded-full bg-primary text-white font-bold text-sm hover:bg-primary-dark transition-all"
          >
            Confirm Booking
          </button>
          {isBooked && (
            <div className="mt-4 p-4 rounded-xl bg-[#ecfdf3] border border-[#b7e4c7]">
              <p className="text-sm font-semibold text-[#1a472a]">
                Booking request submitted for {mentor.name}. We will contact you shortly.
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};
