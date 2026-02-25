import { motion } from "motion/react";
import { Mail, MapPin, Briefcase, GraduationCap } from "lucide-react";

export default function About() {
  return (
    <div className="space-y-16">
      <header className="max-w-2xl">
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
        >
          About Me
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-neutral-400 leading-relaxed"
        >
          I'm a data scientist and software developer passionate about building data-driven applications and solving complex problems.
        </motion.p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-8">
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-invert max-w-none prose-p:text-neutral-400 prose-p:leading-relaxed prose-headings:text-white"
          >
            <h2 className="text-2xl font-semibold mb-4">Background</h2>
            <p>
              My journey started with a fascination for numbers and patterns. I pursued a degree in Statistics, which laid the foundation for my analytical thinking. Over time, I realized that to truly leverage data, I needed to build the tools to process and visualize it. This led me to software development.
            </p>
            <p>
              Today, I bridge the gap between data science and software engineering. I enjoy taking a project from the initial exploratory data analysis phase all the way to deploying a robust web application that makes those insights accessible.
            </p>

            <h2 className="text-2xl font-semibold mt-12 mb-4">Skills</h2>
            <div className="grid grid-cols-2 gap-4 text-neutral-300">
              <div>
                <h3 className="text-lg font-medium text-white mb-2">Data & ML</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Python (Pandas, NumPy)</li>
                  <li>Scikit-learn, TensorFlow</li>
                  <li>R & Shiny</li>
                  <li>SQL & NoSQL</li>
                  <li>Statistical Modeling</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-white mb-2">Development</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>JavaScript / TypeScript</li>
                  <li>React & Next.js</li>
                  <li>Node.js & Express</li>
                  <li>Tailwind CSS</li>
                  <li>Git & Docker</li>
                </ul>
              </div>
            </div>
          </motion.section>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-8"
        >
          <div className="p-6 bg-neutral-900/50 rounded-3xl border border-neutral-800/50">
            <img 
              src="https://avatars.githubusercontent.com/u/46496141?v=4" 
              alt="Hasan Efe Kocasu" 
              className="w-full aspect-square object-cover rounded-2xl mb-6"
              referrerPolicy="no-referrer"
            />
            <h3 className="text-xl font-semibold text-white mb-2">Hasan Efe</h3>
            <p className="text-neutral-400 text-sm mb-6">Data Scientist & Developer</p>
            
            <div className="space-y-4 text-sm text-neutral-300">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-neutral-500" />
                <span>Turkey</span>
              </div>
              <div className="flex items-center gap-3">
                <Briefcase className="w-4 h-4 text-neutral-500" />
                <span>Available for work</span>
              </div>
              <div className="flex items-center gap-3">
                <GraduationCap className="w-4 h-4 text-neutral-500" />
                <span>B.Sc. Statistics</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-neutral-500" />
                <a href="mailto:kocasuhasanefe@gmail.com" className="hover:text-white transition-colors">
                  kocasuhasanefe@gmail.com
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
