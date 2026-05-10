import { Instagram, MessageCircle, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-20 px-6 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">F</span>
              </div>
              <span className="text-xl font-bold tracking-tight">Find Your Campus</span>
            </div>
            <p className="text-white/40 max-w-sm mb-6">
              Empowering students with honest, peer-to-peer college guidance to build a better career path.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-white/40">Platform</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
              <li><a href="#colleges" className="hover:text-primary transition-colors">Colleges</a></li>
              <li><a href="#mentorship" className="hover:text-primary transition-colors">Mentorship</a></li>
              <li><a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-white/40">Legal</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-white/20 text-xs">
          <p>© 2024 Find Your Campus. Built for the next generation.</p>
          <p>Made with ❤️ by students, for students.</p>
        </div>
      </div>
    </footer>
  );
};
