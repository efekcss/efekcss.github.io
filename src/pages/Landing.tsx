import React from "react";

export default function Landing() {
  return (
    <div className="relative">
      <div className="fixed inset-0 -z-20 h-full w-full overflow-hidden bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-slate-900 via-black to-black">
        <svg className="hidden">
          <defs>
            <filter id="blurMe">
              <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
              <feColorMatrix in="blur" mode="matrix" result="goo" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"></feColorMatrix>
              <feBlend in="SourceGraphic" in2="goo"></feBlend>
            </filter>
          </defs>
        </svg>
        <div className="gradients-container h-full w-full [filter:url(#blurMe)_blur(40px)]">
          <div className="absolute [background:radial-gradient(circle_at_center,_rgba(140,157,232,0.8)_0,_rgba(140,157,232,0)_50%)_no-repeat] [mix-blend-mode:hard-light] left-[calc(50%-40%)] top-[calc(50%-40%)] h-4/5 w-4/5 [transform-origin:center_center] animate-first opacity-100" />
          <div className="absolute [background:radial-gradient(circle_at_center,_rgba(100,116,139,0.8)_0,_rgba(100,116,139,0)_50%)_no-repeat] [mix-blend-mode:hard-light] left-[calc(50%-40%)] top-[calc(50%-40%)] h-4/5 w-4/5 [transform-origin:calc(50%-400px)] animate-second opacity-100" />
          <div className="absolute [background:radial-gradient(circle_at_center,_rgba(75,85,99,0.8)_0,_rgba(75,85,99,0)_50%)_no-repeat] [mix-blend-mode:hard-light] left-[calc(50%-40%)] top-[calc(50%-40%)] h-4/5 w-4/5 [transform-origin:calc(50%+400px)] animate-third opacity-100" />
          <div className="absolute [background:radial-gradient(circle_at_center,_rgba(140,157,232,0.8)_0,_rgba(140,157,232,0)_50%)_no-repeat] [mix-blend-mode:hard-light] left-[calc(50%-40%)] top-[calc(50%-40%)] h-4/5 w-4/5 [transform-origin:calc(50%-200px)] animate-fourth opacity-70" />
          <div className="absolute [background:radial-gradient(circle_at_center,_rgba(139,92,246,0.8)_0,_rgba(139,92,246,0)_50%)_no-repeat] [mix-blend-mode:hard-light] left-[calc(50%-40%)] top-[calc(50%-40%)] h-4/5 w-4/5 [transform-origin:calc(50%-800px)_calc(50%+200px)] animate-fifth opacity-100" />
        </div>
      </div>

      <main className="relative pt-24">
        <div className="pointer-events-none absolute top-0 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

        <section className="mx-auto max-w-7xl px-6 py-20 lg:py-32">
          <div className="frost relative overflow-hidden rounded-[2rem] p-8 md:p-16 lg:p-24">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
            <div className="relative z-10 flex flex-col items-center text-center">
              <span className="mb-6 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
                Available for new opportunities
              </span>
              <h1 className="max-w-4xl text-5xl font-black leading-[1.1] tracking-tight text-white md:text-7xl lg:text-8xl">
                Data Scientist &amp; <br />
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Software Developer</span>
              </h1>
              <p className="mt-8 max-w-2xl text-lg text-slate-400 md:text-xl">
                Building intelligent solutions through data and code with a high-end aesthetic. Bridging the gap between complex algorithms and seamless user experiences.
              </p>
              <div className="mt-12 flex flex-wrap justify-center gap-4">
                <button className="flex h-14 min-w-[180px] items-center justify-center rounded-xl bg-primary text-lg font-bold text-background-dark transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(140,157,232,0.4)]">
                  View Portfolio
                </button>
                <button className="glass flex h-14 min-w-[180px] items-center justify-center rounded-xl text-lg font-bold text-white transition-all hover:bg-white/5">
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20" id="services">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-white md:text-4xl">Expertise &amp; Services</h2>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-primary" />
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="glass glow-hover group flex flex-col items-center rounded-3xl p-10 text-center transition-all">
              <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                <span className="material-symbols-outlined text-4xl">analytics</span>
              </div>
              <h3 className="mb-4 text-2xl font-bold text-white">Data Science</h3>
              <p className="text-slate-400">Advanced predictive modeling, machine learning, and neural network architectures tailored for complex data sets.</p>
            </div>

            <div className="glass glow-hover group flex flex-col items-center rounded-3xl p-10 text-center transition-all">
              <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                <span className="material-symbols-outlined text-4xl">query_stats</span>
              </div>
              <h3 className="mb-4 text-2xl font-bold text-white">Statistics</h3>
              <p className="text-slate-400">Rigorous statistical analysis, A/B testing, and data-driven insights to power strategic business decisions.</p>
            </div>

            <div className="glass glow-hover group flex flex-col items-center rounded-3xl p-10 text-center transition-all">
              <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                <span className="material-symbols-outlined text-4xl">code_blocks</span>
              </div>
              <h3 className="mb-4 text-2xl font-bold text-white">Software Dev</h3>
              <p className="text-slate-400">Full-stack development specializing in scalable architectures, high-performance APIs, and modern UI/UX.</p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20" id="work">
          <div className="mb-16 flex flex-col items-center justify-between gap-6 md:flex-row md:items-end">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold text-white md:text-4xl">Selected Work</h2>
              <p className="mt-4 text-slate-400">A collection of projects bridging the gap between data and design.</p>
            </div>
            <a className="flex items-center gap-2 font-semibold text-primary hover:underline" href="#">
              View all projects
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
          <div className="grid gap-10 md:grid-cols-2">
            <div className="group relative aspect-[16/10] overflow-hidden rounded-[2.5rem]">
              <img className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Data visualization dashboard with complex charts" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTwNKSP7skB2oSoBTeaIfCtlo7IIOPmSGLbs6F7Iadu0nj-WpXliapIJODDbybRUbYeu33rwjnWn3XA8UL1C9hRpMGU24uyataJ5KdWu-o60NOID6gBFspR3FiRrRLJreXqu8dQEK3a43gG5B7PofNKnPodzhAeTmUxVmGy0gJVAQ9zueHNqxaSu07phrDIfg9PIQ_MXUI-JRqyT3L94AQ9p9UBAFbGS3Ohv0mNpx8QfYOrOxEFSPUf--jfr4N1G_LH63ro0NxzbU" />
              <div className="absolute inset-x-4 bottom-4">
                <div className="frost flex items-end justify-between rounded-3xl p-8 transition-all group-hover:bg-primary/10">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">Machine Learning</span>
                    <h4 className="mt-2 text-2xl font-bold text-white">NeuralInsight Platform</h4>
                    <p className="mt-2 hidden text-slate-300 sm:block">Real-time sentiment analysis and trend prediction for financial markets.</p>
                  </div>
                  <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-background-dark transition-transform hover:rotate-45">
                    <span className="material-symbols-outlined">north_east</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="group relative aspect-[16/10] overflow-hidden rounded-[2.5rem]">
              <img className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Modern web application interface mockup" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUfkq2vAJlMeOkCh8JwhXLZKkrVhwVwWXL53aT6n99dCM2N21jPCl_UTPdDd2j_6quyMTrxHSaj4VwGPgRNIqBGvmBqw6M8wyw7k7axsoGes1hN_R58Dmhb3hTpaNMf3Ivt2x3aE5xfO1jJ8CfXLMuzBmzqneBKNO_u_PoJvEVNgccYSFNVdzpL0YKe2JxrxJyIr6GNAlxsd_Mil_sl1tjO6fAt6kzIAsbACeaOmZIqYA2KJjur-O7RDHw_Jf9D3_P_azqGa-pzow" />
              <div className="absolute inset-x-4 bottom-4">
                <div className="frost flex items-end justify-between rounded-3xl p-8 transition-all group-hover:bg-primary/10">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">Full-Stack Dev</span>
                    <h4 className="mt-2 text-2xl font-bold text-white">Lumina Dashboard</h4>
                    <p className="mt-2 hidden text-slate-300 sm:block">A modern SaaS dashboard for monitoring cloud infrastructure metrics.</p>
                  </div>
                  <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-background-dark transition-transform hover:rotate-45">
                    <span className="material-symbols-outlined">north_east</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20" id="contact">
          <div className="glass relative flex flex-col items-center overflow-hidden rounded-[3rem] p-12 text-center md:p-24">
            <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
            <h2 className="relative z-10 text-4xl font-bold text-white md:text-6xl">Ready to build something <br /> remarkable?</h2>
            <p className="relative z-10 mt-8 max-w-xl text-lg text-slate-400">
              I'm currently open to freelance opportunities and full-time positions. Let's discuss how my expertise can help your next project.
            </p>
            <button className="relative z-10 mt-12 flex h-16 min-w-[240px] items-center justify-center rounded-full bg-primary text-xl font-bold text-background-dark transition-transform hover:scale-105 active:scale-95">
              Get In Touch
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

*** End Patch