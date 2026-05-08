import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code, Brain } from 'lucide-react';

const About = () => {
  const education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'Nehru Institute of Information Technology and Management',
      period: '2023 – 2025'
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'TKS College of Arts and Science',
      period: '2020 – 2023'
    },
    {
      degree: 'HSC',
      institution: 'NS Boys Higher Secondary School',
      period: '2019 – 2020'
    }
  ];

  return (
    <section id="about" className="py-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-800/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4 inline-flex items-center gap-3">
          <span className="text-emerald-500">01.</span> About Me
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">
          
          <div className="space-y-6">
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              I am an MCA graduate and Full Stack Developer with strong front-end expertise and solid back-end fundamentals, including APIs and databases.
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              My journey in tech is driven by a passion to build responsive, performant web applications. I enjoy tackling complex challenges, optimizing code, and continuously learning new technologies to stay at the forefront of development.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50">
                <Code className="h-8 w-8 text-emerald-500 dark:text-emerald-400 mb-3" />
                <h3 className="text-slate-900 dark:text-slate-100 font-semibold mb-1">Clean Code</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">Writing maintainable and scalable solutions.</p>
              </div>
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50">
                <Brain className="h-8 w-8 text-emerald-500 dark:text-emerald-400 mb-3" />
                <h3 className="text-slate-900 dark:text-slate-100 font-semibold mb-1">Core Concepts</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">Strong basis in Data Structures & OOPS.</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-8 flex items-center gap-3">
              <GraduationCap className="h-6 w-6 text-emerald-500" />
              Education
            </h3>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-emerald-500 before:via-slate-300 dark:before:via-slate-700 before:to-transparent">
              {education.map((item, index) => (
                <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-50 dark:border-slate-900 bg-emerald-500 text-white dark:text-slate-900 absolute left-0 md:left-1/2 -translate-x-1/2 shrink-0">
                    <div className="w-3 h-3 bg-white dark:bg-slate-900 rounded-full" />
                  </div>
                  
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 ml-16 md:ml-0 hover:border-emerald-500/30 transition-colors shadow-sm dark:shadow-none">
                    <span className="text-emerald-600 dark:text-emerald-400 text-sm font-semibold tracking-wide uppercase">{item.period}</span>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 mt-2 mb-1">{item.degree}</h4>
                    <p className="text-slate-600 dark:text-slate-400">{item.institution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </motion.div>
    </section>
  );
};

export default About;
