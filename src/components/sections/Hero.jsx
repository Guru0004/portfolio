import React from 'react';
import { motion } from 'framer-motion';
import Profile from '../../assets/Guruveeraprasath.png';
import Resume from '../../assets/Guruveeraprasath.pdf';
import { ArrowRight, Download, Github } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-emerald-600 dark:text-emerald-400 text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for opportunities
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 mb-4">
            Hi, I'm <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-500 to-cyan-500 dark:from-emerald-400 dark:to-cyan-400">Guru veera prasath</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-medium text-slate-600 dark:text-slate-400 mb-6">
            Full Stack Developer
          </h2>
          
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-xl leading-relaxed">
            I craft responsive, dynamic web applications with strong front-end expertise and solid back-end fundamentals. Passionate about transforming ideas into elegant, user-centric digital experiences.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#experience&projects" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-emerald-500 text-white dark:text-slate-900 font-semibold hover:bg-emerald-600 dark:hover:bg-emerald-400 transition-colors hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]">
              View Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a href={Resume} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 transition-colors">
              <Download className="mr-2 h-5 w-5 text-slate-500 dark:text-slate-400" />
              Resume
            </a>
            <a href="https://github.com/Guru0004/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-100 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 transition-colors" aria-label="Github Profile">
              <Github className="h-5 w-5" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative lg:ml-auto"
        >
          <div className="absolute -inset-1 bg-linear-to-r from-emerald-500 to-cyan-500 rounded-4xl blur opacity-30 animate-pulse"></div>
          <div className="relative aspect-square w-full mx-auto bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-4xl overflow-hidden flex items-center justify-center shadow-2xl hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-shadow">
            <div className="w-full h-full rounded-4xl overflow-hidden text-center">
              <img src={Profile} alt="Guru" className="object-cover  w-full h-full" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
