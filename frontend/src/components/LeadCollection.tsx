import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Upload, QrCode, ArrowRight } from 'lucide-react';

export const LeadCollection = () => {
  const [step, setStep] = useState<'form' | 'payment' | 'success'>('form');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    percentile: '',
    colleges: '',
    branch: '',
    doubts: ''
  });

  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:5001/api';
      const response = await fetch(`${baseUrl}/leads/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitting(false);
        setStep('payment');
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again.');
      setIsSubmitting(false);
    }
  };

  const handlePaymentConfirm = async () => {
    try {
      const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:5001/api';
      const response = await fetch(`${baseUrl}/leads/payment-confirm`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          transactionId: 'manual_payment_' + Date.now(),
          email: formData.email 
        }),
      });

      if (response.ok) {
        setStep('success');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <section id="book" className="py-20 md:py-32 px-4 md:px-6 relative">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 text-primary tracking-tight">
            {step === 'form' && "Get Personalized College Guidance"}
            {step === 'payment' && "Confirm Your Mentorship"}
            {step === 'success' && "You're All Set!"}
          </h2>
          <p className="text-base md:text-xl text-accent-stone font-medium">
            {step === 'form' && "Fill your details to connect with seniors from your dream college."}
            {step === 'payment' && "Secure your session with a token payment of ₹99."}
            {step === 'success' && "Our team will contact you on WhatsApp shortly."}
          </p>
        </div>

        <motion.div 
          layout
          className="premium-card p-6 md:p-16 relative overflow-hidden"
        >
          <AnimatePresence mode="wait">
            {step === 'form' && (
              <motion.form
                key="form"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onSubmit={handleSubmitForm}
                className="space-y-8"
              >
                <div className="grid md:grid-cols-2 gap-4 md:gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-black text-primary tracking-widest uppercase">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="e.g. Rahul Gupta" 
                      className="input-premium"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black text-primary tracking-widest uppercase">Phone Number</label>
                    <input 
                      required
                      type="tel" 
                      placeholder="+91 98765 43210" 
                      className="input-premium"
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 md:gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-black text-primary tracking-widest uppercase">CET/JEE Percentile</label>
                    <input 
                      required
                      type="text" 
                      placeholder="e.g. 98.5" 
                      className="input-premium"
                      value={formData.percentile}
                      onChange={e => setFormData({...formData, percentile: e.target.value})}
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black text-primary tracking-widest uppercase">Target Colleges</label>
                    <input 
                      required
                      type="text" 
                      placeholder="e.g. VIT, COEP" 
                      className="input-premium"
                      value={formData.colleges}
                      onChange={e => setFormData({...formData, colleges: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-black text-primary tracking-widest uppercase">Any Specific Doubts?</label>
                  <textarea 
                    rows={3}
                    placeholder="Ask about placements, hostels, or coding culture..." 
                    className="input-premium resize-none"
                    value={formData.doubts}
                    onChange={e => setFormData({...formData, doubts: e.target.value})}
                  />
                </div>

                <button 
                  disabled={isSubmitting}
                  type="submit" 
                  className="w-full btn-primary-premium flex items-center justify-center gap-3 py-5 text-lg disabled:opacity-50"
                >
                  {isSubmitting ? "Processing..." : "Next: Secure Mentorship"}
                  {!isSubmitting && <ArrowRight className="w-6 h-6" />}
                </button>
              </motion.form>
            )}

            {step === 'payment' && (
              <motion.div
                key="payment"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-10 text-center"
              >
                <div className="flex flex-col items-center gap-6">
                   <div className="p-6 bg-white rounded-3xl border-2 border-[#e8e1d5] shadow-sm">
                      <QrCode className="w-56 h-56 text-primary" />
                   </div>
                   <div className="text-lg font-bold bg-[#fcfaf7] px-6 py-3 rounded-full border border-[#e8e1d5] text-primary">
                      campus@upi
                   </div>
                </div>

                <div className="space-y-4">
                   <div className="border-2 border-dashed border-[#e8e1d5] rounded-3xl p-12 hover:border-primary/50 transition-all cursor-pointer group bg-[#fcfaf7]">
                      <Upload className="w-10 h-10 mx-auto mb-3 text-accent-stone group-hover:text-primary transition-colors" />
                      <p className="text-sm font-bold text-accent-stone uppercase tracking-widest">Upload Payment Screenshot</p>
                   </div>
                </div>

                <button 
                  onClick={handlePaymentConfirm}
                  className="w-full btn-primary-premium py-5 text-lg"
                >
                  Confirm Payment
                </button>
              </motion.div>
            )}

            {step === 'success' && (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16"
              >
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-3xl font-black mb-6 text-primary">Registration Successful!</h3>
                <p className="text-xl text-accent-stone mb-12 font-medium">
                  We've received your details. A senior mentor will reach out to you on WhatsApp within 24 hours.
                </p>
                <button 
                  onClick={() => window.open('https://wa.me/91XXXXXXXXXX', '_blank')}
                  className="btn-primary-premium bg-[#25D366] hover:bg-[#128C7E] shadow-green-500/20 px-12 py-5"
                >
                  Join WhatsApp Community
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
