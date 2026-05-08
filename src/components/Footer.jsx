import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          <div>
            <span className="text-2xl font-bold tracking-tighter text-slate-900 dark:text-slate-100 flex items-center gap-2 mb-4">
              <span className="text-emerald-500">&lt;</span>
              GURU.DEV
              <span className="text-emerald-500">/&gt;</span>
            </span>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-sm">
              Full Stack Developer passionate about building responsive web applications and eager to learn, grow, and contribute to development teams.
            </p>
          </div>

          <div>
            <h3 className="text-slate-900 dark:text-slate-100 font-semibold mb-4 text-lg">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-slate-600 dark:text-slate-400 text-sm hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">
                <Mail className="h-5 w-5 mr-3 text-emerald-500" />
                <a href="mailto:guruveeraprasath322@gmail.com">guruveeraprasath322@gmail.com</a>
              </li>
              <li className="flex items-center text-slate-600 dark:text-slate-400 text-sm hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">
                <Phone className="h-5 w-5 mr-3 text-emerald-500" />
                <a href="tel:+919791664128">+91 97916 64128</a>
              </li>
              <li className="flex items-center text-slate-600 dark:text-slate-400 text-sm">
                <MapPin className="h-5 w-5 mr-3 text-emerald-500" />
                <span>Theni,Tamil Nadu, India</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-slate-900 dark:text-slate-100 font-semibold mb-4 text-lg">Social Connect</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/Guru0004" target="_blank" className="h-10 w-10 bg-slate-200 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-emerald-500 hover:text-white dark:hover:text-slate-900 transition-all">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/guru-veera-prasath-m-51a911267/" target="_blank" className="h-10 w-10 bg-slate-200 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-emerald-500 hover:text-white dark:hover:text-slate-900 transition-all">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Guru veera prasath M. All rights reserved.</p>
          <p className="mt-2 md:mt-0 flex items-center">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
