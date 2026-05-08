import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, FolderGit2, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      type: "Experience",
      title: "Full Stack Development (Training)",
      organization: "IBM",
      period: "February 2024 - May 2024",
      description: [
        "Developed responsive and user-friendly interfaces utilizing front-end technologies, enhancing user experience.",
        "Gained practical experience in back-end development principles, including API integration and database management.",
        "Applied version control and debugging practices to ensure code quality and project stability."
      ],
      link: "https://www.linkedin.com/in/guruveeraprasath/"
    },
    {
      type: "Project",
      title: "Personal Finance Dashboard",
      organization: "Personal Project",
      period: "2026",
      description: [
        "Developed a premium personal finance dashboard to track spending habits, income trends, and net worth in real-time.",
        "Implemented using React 19, Recharts for advanced data visualization, Framer Motion for sleek animations, and Tailwind CSS for a glassmorphism UI.",
        "Features zero-setup local persistence, centralized state management for seamless CRUD operations, and full JSON-based data portability."
      ],
      link: "https://zorvyn-pfd.vercel.app/"
    },
    {
      type: "Project",
      title: "AI-Based Employee Productivity Tracker",
      organization: "Personal Project",
      period: "2025",
      description: [
        "Developed a web application to track employee productivity in real-time using face detection, recognition, and activity monitoring.",
        "Implemented using React.js, TensorFlow.js, MediaPipe, and Python for Excel-based reporting.",
        "Automatically identifies breaks and logs productive working hours gracefully."
      ],
      link: "https://github.com/guruveeraprasath/Employee-Productivity-Tracker"
    },
    {
      type: "Project",
      title: "E-Commerce Website",
      organization: "Personal Project",
      period: "2023",
      description: [
        "Built a responsive shopping platform that allows users to browse products, add to cart, make purchases, and track orders.",
        "Implemented product listing, cart management, and user-friendly navigation using HTML, CSS, and JavaScript."
      ],
      link: "https://uniqecom.netlify.app/"
    }
  ];

  return (
    <section id="experience&projects" className="py-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-800/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-12 inline-flex items-center gap-3">
          <span className="text-emerald-500">03.</span> Experience & Projects
        </h2>
        
        <div className="space-y-12">
          {experiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-4 md:gap-8 items-start">
                
                <div className="md:col-span-1 mb-4 md:mb-0 relative md:text-right md:pr-8">
                  <div className="absolute -left-9 md:left-auto md:right-[-0.6rem] top-1 overflow-hidden">
                    <div className="w-5 h-5 bg-white dark:bg-slate-900 border-2 border-emerald-500 rounded-full flex items-center justify-center z-10 relative">
                      {item.type === 'Experience' ? <Briefcase className="w-3 h-3 text-emerald-500" /> : <FolderGit2 className="w-3 h-3 text-emerald-500" />}
                    </div>
                  </div>
                  <div className="hidden md:block absolute right-0 top-0 -bottom-12 w-px bg-slate-200 dark:bg-slate-800 z-0"></div>
                  
                  <h4 className="text-emerald-600 dark:text-emerald-400 font-semibold tracking-wide uppercase text-sm">{item.period}</h4>
                  <span className="inline-block mt-2 px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium rounded-full border border-slate-300 dark:border-slate-700">
                    {item.type}
                  </span>
                </div>

                <div className="md:col-span-3 bg-white dark:bg-slate-800/30 rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-slate-700/50 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors group shadow-sm dark:shadow-none">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {item.title}
                      </h3>
                      <h4 className="text-lg font-medium text-slate-600 dark:text-slate-400">{item.organization}</h4>
                    </div>
                    {item.type === 'Project' && (
                      <a href={item.link} target="_blank" className="p-2 bg-slate-50 dark:bg-slate-900 rounded-lg text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 border border-slate-200 dark:border-slate-700 hover:border-emerald-500/50 transition-all">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                  
                  <ul className="space-y-3">
                    {item.description.map((desc, i) => (
                      <li key={i} className="flex items-start text-slate-600 dark:text-slate-400 leading-relaxed">
                        <span className="text-emerald-500 mr-2 mt-1.5 min-w-3 opacity-70">▹</span>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
              
              {/* Mobile timeline line */}
              <div className="md:hidden absolute left-3.75 top-6 -bottom-12 w-px bg-slate-200 dark:bg-slate-800 z-0"></div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
