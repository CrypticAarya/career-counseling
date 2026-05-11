import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export const Hero = () => {
  const topmateUrl = 'https://topmate.io/yakshit_savaliya';

  const goToTopmate = () => {
    window.location.assign(topmateUrl);
  };

  return (
    <section className="relative pt-24 md:pt-32 pb-20 px-6 min-h-screen flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#e8e1d5] text-primary font-medium text-[10px] md:text-sm mb-6 md:8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            EMPOWERING THE NEXT GENERATION OF STUDENTS
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold leading-[1.1] mb-6 md:mb-8 text-primary tracking-tight">
            Talk To Real <br />
            <span className="text-[#1a472a]">College Students</span> <br />
            Before Admission
          </h1>
          
          <p className="text-base md:text-xl text-accent-stone mb-10 md:mb-12 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
            Get honest insights about placements, coding culture, hostel life, 
            internships, and campus reality directly from seniors studying there.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={goToTopmate}
              className="btn-primary-premium shadow-xl shadow-primary/30 w-full sm:w-auto text-center inline-flex items-center justify-center"
            >
              Book ₹99 Mentorship
            </button>
            <button
              onClick={goToTopmate}
              className="btn-secondary-premium w-full sm:w-auto text-center inline-flex items-center justify-center"
            >
              Book Webinar
            </button>
          </div>
        </motion.div>

        {/* Right Side Visuals */}
        <div className="relative mt-12 lg:mt-0 h-[400px] md:h-[500px] lg:h-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative flex flex-col gap-4 md:gap-6 items-center lg:items-end scale-75 sm:scale-90 md:scale-100"
          >
            {/* Student Mentor Card */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="premium-card p-6 md:p-8 w-full max-w-[400px] shadow-2xl shadow-primary/5"
            >
              <div className="flex items-center gap-4 mb-4 md:mb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-secondary overflow-hidden">
                   <div className="w-full h-full bg-gradient-to-br from-secondary to-secondary-dark" />
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-bold text-primary">Sarthak Ghoderao</h4>
                  <p className="text-xs md:text-sm text-accent-stone">Student • NST ADYPU</p>
                </div>
              </div>
              <div className="flex gap-1 mb-3 md:mb-4">
                {[1, 2, 3, 4, 5].map(i => (
                  <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-accent-gold text-accent-gold" />
                ))}
              </div>
              <p className="text-sm md:text-lg text-primary/80 leading-relaxed italic font-medium">
                "The coding culture here is insane! I'll tell you which clubs to join and which ones to skip."
              </p>
            </motion.div>

          </motion.div>
        </div>
      </div>

      {/* Decorative Circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-20 md:opacity-50">
        <div className="w-[300px] h-[300px] md:w-[600px] md:h-[600px] border border-[#e8e1d5] rounded-full" />
        <div className="w-[400px] h-[400px] md:w-[800px] md:h-[800px] border border-[#e8e1d5] rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>
    </section>
  );
};
