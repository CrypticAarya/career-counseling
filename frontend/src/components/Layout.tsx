import type { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Toaster } from 'react-hot-toast';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-[#f5f0e6] text-primary selection:bg-secondary selection:text-white">
      <Toaster position="top-right" toastOptions={{
        style: {
          background: '#1a472a',
          color: '#fff',
          borderRadius: '12px',
          fontWeight: '600',
        }
      }} />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
