import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../hooks/useAuth';
import { useNavigate, Link } from 'react-router-dom';
import toast from 'react-hot-toast';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      toast.success('Welcome back!');
      navigate('/dashboard');
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="premium-card p-8 md:p-12 w-full max-w-md"
      >
        <h2 className="text-3xl font-bold mb-8 text-primary">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-black text-primary tracking-widest uppercase">Email</label>
            <input 
              type="email" 
              className="input-premium" 
              value={email}
              onChange={e => setEmail(e.target.value)}
              required 
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-black text-primary tracking-widest uppercase">Password</label>
            <input 
              type="password" 
              className="input-premium" 
              value={password}
              onChange={e => setPassword(e.target.value)}
              required 
            />
          </div>
          <button type="submit" className="btn-primary-premium w-full">Sign In</button>
        </form>
        <p className="mt-8 text-center text-sm text-accent-stone">
          Don't have an account? <Link to="/signup" className="text-secondary font-bold">Sign up</Link>
        </p>
      </motion.div>
    </div>
  );
};
