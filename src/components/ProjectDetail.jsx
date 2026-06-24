import { ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ProjectDetail({ projectId, onClose }) {
  const projectsData = {
    1: {
      title: 'E-Commerce Platform',
      image: 'https://images.unsplash.com/flagged/photo-1596559880461-bfbef645963f?auto=format&fit=crop&w=1200&q=80',
      mainTech: ['Next.js', 'React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      description:
        'Full-stack e-commerce platform with product browsing, cart system, authentication, and secure Stripe payments. Includes admin dashboard for product management, inventory control, and REST API backend.',
      liveLink: 'https://ecom-eq.vercel.app/',
      githubLink: 'https://github.com/shakil880/ecom_eq',
    },

    2: {
      title: 'Forum Application',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      mainTech: ['Next.js', 'React', 'Prisma', 'PostgreSQL', 'NextAuth', 'Tailwind CSS'],
      description:
        'Full-stack forum application with authentication using NextAuth and database management using Prisma with PostgreSQL (Neon). Supports post creation, browsing, and responsive UI.',
      liveLink: 'https://super-tech-forum-next-js.vercel.app/',
      githubLink: 'https://github.com/shakil880/super_tech_forum_next.js',
    },
  };

  const project = projectsData[projectId];

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm overflow-y-auto">
      <div className="min-h-screen py-8 px-4">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <h1 className="text-3xl sm:text-4xl">{project.title}</h1>
            <Button variant="ghost" size="icon" onClick={onClose}>
              ✕
            </Button>
          </div>

          {/* Image */}
          <div className="rounded-lg overflow-hidden mb-8">
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              className="w-full h-64 sm:h-96 object-cover"
            />
          </div>

          {/* Tech Stack */}
          <div className="mb-8">
            <h2 className="text-2xl mb-3">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.mainTech.map((tech, i) => (
                <Badge key={i}>{tech}</Badge>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h2 className="text-2xl mb-3">Description</h2>
            <p className="text-foreground/80 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-4 mb-8">
            <Button asChild>
              <a href={project.liveLink} target="_blank" rel="noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Live
              </a>
            </Button>

            <Button asChild variant="outline">
              <a href={project.githubLink} target="_blank" rel="noreferrer">
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </a>
            </Button>
          </div>

          {/* Back */}
          <div className="text-center">
            <Button variant="outline" onClick={onClose}>
              Back
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
}
