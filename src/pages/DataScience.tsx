import { motion } from "motion/react";
import { BookOpen, FileText, BarChart2 } from "lucide-react";

export default function DataScience() {
  const research = [
    {
      id: 1,
      title: "Predictive Modeling of Urban Traffic Patterns",
      type: "Research Paper",
      date: "Fall 2023",
      description: "An in-depth analysis of traffic flow using historical sensor data. Applied time-series forecasting and machine learning models to predict congestion points.",
      icon: BarChart2,
      link: "#"
    },
    {
      id: 2,
      title: "Statistical Analysis of E-commerce Conversion Rates",
      type: "Case Study",
      date: "Spring 2023",
      description: "A comprehensive study on user behavior and its impact on conversion rates. Utilized A/B testing and logistic regression to identify key drivers of sales.",
      icon: FileText,
      link: "#"
    },
    {
      id: 3,
      title: "Machine Learning for Anomaly Detection in Financial Transactions",
      type: "Coursework",
      date: "Winter 2022",
      description: "Developed an anomaly detection system using Isolation Forests and Autoencoders to identify fraudulent activities in a large dataset of financial transactions.",
      icon: BookOpen,
      link: "#"
    }
  ];

  return (
    <div className="space-y-16">
      <header className="max-w-2xl">
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
        >
          Data Science & Statistics
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-neutral-400 leading-relaxed"
        >
          A collection of my research papers, case studies, and academic coursework focused on data analysis, statistical modeling, and machine learning.
        </motion.p>
      </header>

      <div className="space-y-8">
        {research.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.article 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="group relative p-8 bg-neutral-900/40 rounded-3xl border border-neutral-800/50 hover:border-neutral-700 transition-colors"
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="p-4 bg-neutral-800/50 rounded-2xl text-neutral-400 group-hover:text-white group-hover:bg-neutral-800 transition-colors">
                  <Icon className="w-8 h-8" />
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">{item.type}</span>
                    <span className="w-1 h-1 rounded-full bg-neutral-700"></span>
                    <span className="text-xs font-mono text-neutral-500">{item.date}</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    <a href={item.link} className="focus:outline-none">
                      <span className="absolute inset-0" aria-hidden="true"></span>
                      {item.title}
                    </a>
                  </h3>
                  <p className="text-neutral-400 leading-relaxed max-w-3xl">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </div>
  );
}
