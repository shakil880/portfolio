import { Heart, Github, Linkedin, Twitter, Facebook } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/shakil880', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/ehesan', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4">
          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social, idx) => {
              const Icon = social.icon;
              return (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2 hover:bg-primary-foreground/10 rounded-full transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center text-sm opacity-90">
            <p className="flex items-center justify-center gap-2 flex-wrap">
              <span>© {currentYear} Ehesan Quraishi. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1">
                Made with <Heart className="h-4 w-4 fill-current" /> and passion
              </span>
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-4 text-sm opacity-80">
            <a href="#home" className="hover:opacity-100 transition-opacity">
              Home
            </a>
            <span>•</span>
            <a href="#about" className="hover:opacity-100 transition-opacity">
              About
            </a>
            <span>•</span>
            <a href="#projects" className="hover:opacity-100 transition-opacity">
              Projects
            </a>
            <span>•</span>
            <a href="#contact" className="hover:opacity-100 transition-opacity">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
