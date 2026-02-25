import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-neutral-800/50 py-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start">
          <span className="text-xl font-semibold tracking-tight text-white mb-2">
            Hasan Efe<span className="text-neutral-500">.</span>
          </span>
          <p className="text-sm text-neutral-500">
            &copy; {new Date().getFullYear()} Hasan Efe. All rights reserved.
          </p>
        </div>
        
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/efekcss"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-white transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/efekcss"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-white transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:kocasuhasanefe@gmail.com"
            className="text-neutral-500 hover:text-white transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
