import { motion } from 'framer-motion';

export const HowItWorks = () => {
  const steps = [
    { number: '01', title: 'Fill your details', desc: 'Tell us about your target colleges and branch preferences.' },
    { number: '02', title: 'Book ₹99 mentorship', desc: 'Secure your 1-on-1 session with a verified senior student.' },
    { number: '03', title: 'Get connected', desc: 'Join our WhatsApp community and get scheduled for a call.' },
    { number: '04', title: 'Talk to seniors', desc: 'Get all your doubts cleared and make an informed decision.' },
  ];

  return (
    <section id="mentorship" className="py-32 px-6 bg-[#fcfaf7]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-primary tracking-tight">How It Works</h2>
          <p className="text-xl text-accent-stone max-w-2xl mx-auto font-medium">
            A simple 4-step process to get you the clarity you need before taking admission.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-[#e8e1d5] -z-0" />

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <div className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-full bg-white border-2 border-[#e8e1d5] flex items-center justify-center mb-8 shadow-sm group-hover:border-primary group-hover:shadow-xl transition-all duration-500">
                  <span className="text-3xl font-black text-primary">{step.number}</span>
                </div>
                <h4 className="text-2xl font-bold mb-4 text-primary">{step.title}</h4>
                <p className="text-accent-stone leading-relaxed font-medium">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
