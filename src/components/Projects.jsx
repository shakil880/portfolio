import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects({ onProjectClick }) {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description:
        'Full-stack e-commerce system with product management, authentication, admin dashboard, and Stripe payment integration.',
      image: 'https://via.placeholder.com/600x400',
      technologies: ['Next.js', 'React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
      featured: true,
    },
    {
      id: 2,
      title: 'Forum Application',
      description:
        'Full-stack forum app with authentication, Prisma ORM, PostgreSQL database, and responsive UI.',
      image: 'https://via.placeholder.com/600x400',
      technologies: ['Next.js', 'React', 'Prisma', 'PostgreSQL', 'NextAuth'],
      featured: true,
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Projects showcasing my full-stack development skills
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden hover:shadow-xl transition-all group"
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden h-48">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <h3 className="text-xl mb-2">{project.title}</h3>

                <p className="text-foreground/70 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <Button
                  onClick={() => onProjectClick(project.id)}
                  className="w-full gap-2 group-hover:gap-3 transition-all"
                >
                  View Details
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
