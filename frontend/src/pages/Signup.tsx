import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../hooks/useAuth';
import { useNavigate, Link } from 'react-router-dom';
import toast from 'react-hot-toast';

export const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'user'
  });
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(formData);
      toast.success('Account created successfully!');
      navigate('/dashboard');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="premium-card p-8 md:p-12 w-full max-w-md"
      >
        <h2 className="text-3xl font-bold mb-8 text-primary">Create Account</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-black text-primary tracking-widest uppercase">Full Name</label>
            <input 
              type="text" 
              className="input-premium" 
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
              required 
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-black text-primary tracking-widest uppercase">Email</label>
            <input 
              type="email" 
              className="input-premium" 
              value={formData.email}
              onChange={e => setFormData({...formData, email: e.target.value})}
              required 
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-black text-primary tracking-widest uppercase">Password</label>
            <input 
              type="password" 
              className="input-premium" 
              value={formData.password}
              onChange={e => setFormData({...formData, password: e.target.value})}
              required 
            />
          </div>
          <button type="submit" className="btn-primary-premium w-full">Sign Up</button>
        </form>
        <p className="mt-8 text-center text-sm text-accent-stone">
          Already have an account? <Link to="/login" className="text-secondary font-bold">Login</Link>
        </p>
      </motion.div>
    </div>
  );
};
