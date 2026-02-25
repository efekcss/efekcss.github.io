import { motion } from "motion/react";
import { ArrowRight, Code, Database, LineChart } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="space-y-32">
      {/* Hero Section */}
      <section className="pt-20 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
            Data Scientist & <br className="hidden md:block" />
            <span className="text-neutral-500">Software Developer.</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-2xl mb-10">
            Hi, I'm Hasan Efe. I specialize in turning complex data into actionable insights 
            and building robust software solutions. Passionate about statistics, machine learning, 
            and modern web technologies.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-neutral-200 transition-colors"
            >
              View Projects
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-neutral-800 text-white font-medium hover:bg-neutral-900 transition-colors"
            >
              About Me
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Areas of Expertise */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="p-8 rounded-2xl bg-neutral-900/50 border border-neutral-800/50 hover:border-neutral-700 transition-colors">
            <Database className="w-8 h-8 text-neutral-400 mb-6" />
            <h3 className="text-xl font-semibold text-white mb-3">Data Science</h3>
            <p className="text-neutral-400 leading-relaxed text-sm">
              Applying machine learning algorithms and statistical models to extract meaning from complex datasets.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-neutral-900/50 border border-neutral-800/50 hover:border-neutral-700 transition-colors">
            <LineChart className="w-8 h-8 text-neutral-400 mb-6" />
            <h3 className="text-xl font-semibold text-white mb-3">Statistics</h3>
            <p className="text-neutral-400 leading-relaxed text-sm">
              Rigorous statistical analysis, hypothesis testing, and predictive modeling for data-driven decisions.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-neutral-900/50 border border-neutral-800/50 hover:border-neutral-700 transition-colors">
            <Code className="w-8 h-8 text-neutral-400 mb-6" />
            <h3 className="text-xl font-semibold text-white mb-3">Software Dev</h3>
            <p className="text-neutral-400 leading-relaxed text-sm">
              Building scalable applications and tools using modern frameworks and best practices.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Featured Work Teaser */}
      <section>
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-white">Selected Work</h2>
          <Link to="/projects" className="text-sm font-medium text-neutral-400 hover:text-white flex items-center transition-colors">
            See all <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Placeholder for featured projects */}
          <div className="group relative aspect-video rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800">
            <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent z-10">
              <span className="text-xs font-mono text-neutral-400 mb-2">Machine Learning</span>
              <h3 className="text-2xl font-semibold text-white mb-2">Predictive Analytics Model</h3>
              <p className="text-sm text-neutral-300 line-clamp-2">A comprehensive model for forecasting trends based on historical data patterns.</p>
            </div>
            <img 
              src="https://picsum.photos/seed/ds1/800/600" 
              alt="Project preview" 
              className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="group relative aspect-video rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800">
            <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent z-10">
              <span className="text-xs font-mono text-neutral-400 mb-2">Web Development</span>
              <h3 className="text-2xl font-semibold text-white mb-2">Interactive Dashboard</h3>
              <p className="text-sm text-neutral-300 line-clamp-2">A real-time data visualization dashboard built with React and D3.js.</p>
            </div>
            <img 
              src="https://picsum.photos/seed/web1/800/600" 
              alt="Project preview" 
              className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
