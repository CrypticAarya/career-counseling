import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export const Testimonials = () => {
  const testimonials = [
    {
      name: 'Aarav Patel',
      college: 'VIT Pune',
      branch: 'Computer Science',
      year: 'First Year',
      photo: 'AP',
      rating: 5,
      text: 'I was confused between VIT and MIT WPU. Talking to a senior from VIT cleared all my doubts about placements and hostel life. Best ₹99 I ever spent!',
    },
    {
      name: 'Sneha Sharma',
      college: 'COEP',
      branch: 'Electronics',
      year: 'Second Year',
      photo: 'SS',
      rating: 5,
      text: 'The mentorship session helped me understand the actual coding culture at COEP. My mentor even shared notes from her first year. Highly recommended!',
    },
    {
      name: 'Rohan Deshmukh',
      college: 'PICT',
      branch: 'IT',
      year: 'First Year',
      photo: 'RD',
      rating: 5,
      text: 'Got honest insights about PICT that no brochure tells you. The senior explained everything from mess food quality to internship opportunities.',
    },
    {
      name: 'Priya Iyer',
      college: 'MIT WPU',
      branch: 'Data Science',
      year: 'First Year',
      photo: 'PI',
      rating: 5,
      text: 'As a girl from Chennai, I had so many questions about Pune. My mentor from MIT WPU was incredibly helpful about accommodation and safety.',
    },
    {
      name: 'Karthik Reddy',
      college: 'VIT Pune',
      branch: 'AI & ML',
      year: 'Second Year',
      photo: 'KR',
      rating: 5,
      text: 'The session saved me from making a huge mistake. I was going to choose a college just because of its brand name, but the senior showed me better options for AI.',
    },
    {
      name: 'Neha Gupta',
      college: 'Walchand',
      branch: 'Computer Science',
      year: 'First Year',
      photo: 'NG',
      rating: 5,
      text: 'My brother used Find Your Campus last year and recommended it. The WhatsApp community is still super active and seniors genuinely help out.',
    },
  ];

  return (
    <section id="testimonials" className="py-20 md:py-32 px-6 bg-[#fcfaf7]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-primary tracking-tight">
              What Students Say
            </h2>
            <p className="text-xl text-accent-stone max-w-2xl mx-auto font-medium">
              Real feedback from students who found their perfect college through our mentorship.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              viewport={{ once: true }}
              className="premium-card p-6 md:p-8 relative group hover:shadow-xl transition-shadow duration-300"
            >
              <Quote className="w-8 h-8 text-primary/10 absolute top-6 right-6" />

              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent-gold text-accent-gold" />
                ))}
              </div>

              <p className="text-primary/80 leading-relaxed mb-6 font-medium text-sm md:text-base">
                "{t.text}"
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-[#e8e1d5]">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">
                  {t.photo}
                </div>
                <div>
                  <h4 className="font-bold text-primary text-sm">{t.name}</h4>
                  <p className="text-xs text-accent-stone font-medium">
                    {t.college} · {t.branch} · {t.year}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
