import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import api from '../lib/api';

type SignedUpUser = {
  _id: string;
  name: string;
  email: string;
  role: string;
  createdAt: string;
};

export const Dashboard = () => {
  const [signedUpUsers, setSignedUpUsers] = useState<SignedUpUser[]>([]);
  const [loadingUsers, setLoadingUsers] = useState(true);

  useEffect(() => {
    const fetchSignedUpUsers = async () => {
      try {
        const res = await api.get('/auth/signed-up-users');
        setSignedUpUsers(res.data.data || []);
      } catch (_err) {
        setSignedUpUsers([]);
      } finally {
        setLoadingUsers(false);
      }
    };

    fetchSignedUpUsers();
  }, []);

  return (
    <div className="pt-32 px-6 max-w-7xl mx-auto min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="premium-card p-12"
      >
        <h1 className="text-4xl font-bold mb-6 text-primary">Student Dashboard</h1>
        <p className="text-xl text-accent-stone mb-8">Welcome back! Here's an overview of your career journey.</p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-[#fcfaf7] border border-[#e8e1d5] rounded-2xl">
            <h3 className="font-bold mb-2">Saved Colleges</h3>
            <p className="text-3xl font-black text-primary">12</p>
          </div>
          <div className="p-6 bg-[#fcfaf7] border border-[#e8e1d5] rounded-2xl">
            <h3 className="font-bold mb-2">Mentor Sessions</h3>
            <p className="text-3xl font-black text-primary">02</p>
          </div>
          <div className="p-6 bg-[#fcfaf7] border border-[#e8e1d5] rounded-2xl">
            <h3 className="font-bold mb-2">Roadmap Progress</h3>
            <p className="text-3xl font-black text-primary">65%</p>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-primary mb-4">Signed Up Users</h2>
          {loadingUsers && <p className="text-accent-stone">Loading signed up users...</p>}
          {!loadingUsers && signedUpUsers.length === 0 && (
            <p className="text-accent-stone">No users found yet.</p>
          )}
          {!loadingUsers && signedUpUsers.length > 0 && (
            <div className="overflow-x-auto bg-[#fcfaf7] border border-[#e8e1d5] rounded-2xl">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-[#e8e1d5]">
                    <th className="px-4 py-3 text-xs font-black text-primary uppercase tracking-widest">Name</th>
                    <th className="px-4 py-3 text-xs font-black text-primary uppercase tracking-widest">Email</th>
                    <th className="px-4 py-3 text-xs font-black text-primary uppercase tracking-widest">Role</th>
                    <th className="px-4 py-3 text-xs font-black text-primary uppercase tracking-widest">Signed Up On</th>
                  </tr>
                </thead>
                <tbody>
                  {signedUpUsers.map((user) => (
                    <tr key={user._id} className="border-b border-[#e8e1d5] last:border-b-0">
                      <td className="px-4 py-3 font-semibold text-primary">{user.name}</td>
                      <td className="px-4 py-3 text-accent-stone">{user.email}</td>
                      <td className="px-4 py-3 text-accent-stone capitalize">{user.role}</td>
                      <td className="px-4 py-3 text-accent-stone">
                        {new Date(user.createdAt).toLocaleDateString('en-IN', {
                          day: '2-digit',
                          month: 'short',
                          year: 'numeric'
                        })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};
