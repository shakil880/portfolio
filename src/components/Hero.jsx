import { Download, Github, Linkedin, Twitter, Facebook } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const handleDownloadResume = () => {
    // Download CV from public folder
    const link = document.createElement('a');
    link.href = '/cv_ehesan.doc';
    link.download = 'cv_ehesan.doc';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
              <span className="text-primary">Welcome to my portfolio</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-4">
              Hi, I'm <span className="text-primary">Ehesan Quraishi</span>
            </h1>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-muted-foreground mb-6">
              Frontend Developer
            </h2>
            
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto lg:mx-0">
              Passionate about creating beautiful, functional, and user-friendly web applications. 
              I specialize in modern web technologies and love bringing ideas to life through code.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button size="lg" onClick={handleDownloadResume} className="gap-2">
                <Download className="h-5 w-5" />
                Download Resume
              </Button>
              <Button size="lg" variant="outline" onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Contact Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="https://github.com/shakil880"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-accent hover:bg-primary hover:text-primary-foreground rounded-full transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/ehesan/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-accent hover:bg-primary hover:text-primary-foreground rounded-full transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"></div>
              <ImageWithFallback
                src="/pro-pic.jpg"
                alt="Professional Photo"
                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-primary/20 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}