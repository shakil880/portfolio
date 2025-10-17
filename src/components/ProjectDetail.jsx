import { ExternalLink, Github, X, AlertTriangle, Lightbulb, Code2 } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ProjectDetail({ projectId, onClose }) {
  const projectsData = {
    1: {
      title: 'E-Commerce Platform',
      image: 'https://images.unsplash.com/flagged/photo-1596559880461-bfbef645963f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZyUyMHdlYnNpdGV8ZW58MXx8fHwxNzYwNTk3Mjg1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      mainTech: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe API', 'Tailwind CSS'],
      description: 'A comprehensive e-commerce platform that provides a seamless shopping experience. Features include product browsing with advanced filtering, shopping cart management, secure payment processing via Stripe, user authentication and authorization, order tracking, and an admin dashboard for inventory and order management. The platform is fully responsive and optimized for performance.',
      liveLink: 'https://ecommerce-demo.example.com',
      githubLink: 'https://github.com/yourusername/ecommerce-platform',
      challenges: [
        'Implementing secure payment processing with Stripe while handling various edge cases',
        'Optimizing database queries for large product catalogs to maintain fast load times',
        'Managing complex state across multiple components in the shopping cart',
        'Ensuring data consistency between the client and server during checkout',
      ],
      improvements: [
        'Add support for multiple payment gateways (PayPal, Apple Pay)',
        'Implement advanced product recommendation system using AI',
        'Add real-time inventory updates using WebSocket connections',
        'Integrate email notifications for order confirmations and shipping updates',
        'Add support for digital products and downloadable content',
      ],
    },
    2: {
      title: 'Task Management Dashboard',
      image: 'https://images.unsplash.com/photo-1758876201729-e60eaf5f9194?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjB0YXNrJTIwbWFuYWdlbWVudCUyMGFwcHxlbnwxfHx8fDE3NjA2NTI0NzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      mainTech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Socket.io', 'React DnD'],
      description: 'A powerful task management application designed for team collaboration. Features include drag-and-drop task organization, real-time updates using WebSocket, team member management, task assignment and tracking, priority levels and due dates, file attachments, comments and discussions, and customizable project boards. Perfect for agile teams and project management.',
      liveLink: 'https://taskmanager-demo.example.com',
      githubLink: 'https://github.com/yourusername/task-manager',
      challenges: [
        'Implementing real-time collaboration features without conflicts when multiple users edit simultaneously',
        'Building a smooth drag-and-drop interface that works on both desktop and mobile devices',
        'Handling complex relational data models for tasks, projects, and team members',
        'Optimizing real-time updates to prevent excessive re-renders and maintain performance',
      ],
      improvements: [
        'Add Gantt chart view for project timeline visualization',
        'Implement time tracking and productivity analytics',
        'Add integration with popular tools like Slack and Google Calendar',
        'Create mobile apps for iOS and Android',
        'Add AI-powered task prioritization and scheduling suggestions',
      ],
    },
    3: {
      title: 'Analytics Dashboard',
      image: 'https://images.unsplash.com/photo-1665470909939-959569b20021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHBsaWNhdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjA2NTI0NzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      mainTech: ['React', 'Recharts', 'Express', 'Tailwind CSS', 'JWT', 'Chart.js'],
      description: 'A modern analytics dashboard for visualizing business data and metrics. Features include interactive charts and graphs, customizable widgets, date range filtering, data export capabilities, user role management, real-time data updates, responsive design for all devices, and dark mode support. Built to handle large datasets efficiently with smooth animations and transitions.',
      liveLink: 'https://analytics-demo.example.com',
      githubLink: 'https://github.com/yourusername/analytics-dashboard',
      challenges: [
        'Rendering large datasets efficiently without impacting performance',
        'Creating responsive charts that maintain readability across all screen sizes',
        'Implementing complex data aggregation and filtering on the frontend',
        'Ensuring consistent user experience while dealing with API delays',
      ],
      improvements: [
        'Add more advanced chart types (heatmaps, sankey diagrams, tree maps)',
        'Implement custom report builder with drag-and-drop interface',
        'Add scheduled report generation and email delivery',
        'Create collaborative features for sharing insights and annotations',
        'Integrate machine learning for predictive analytics and trend forecasting',
      ],
    },
  };

  const project = projectsData[projectId];

  if (!project) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm overflow-y-auto">
      <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header with close button */}
          <div className="flex justify-between items-start mb-6">
            <h1 className="text-3xl sm:text-4xl">{project.title}</h1>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-6 w-6" />
            </Button>
          </div>

          {/* Project Image */}
          <div className="rounded-lg overflow-hidden mb-8 shadow-xl">
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              className="w-full h-64 sm:h-96 object-cover"
            />
          </div>

          {/* Main Tech Stack */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="h-5 w-5 text-primary" />
              <h2 className="text-2xl">Technology Stack</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.mainTech.map((tech, idx) => (
                <Badge key={idx} variant="default" className="px-4 py-2">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h2 className="text-2xl mb-4">Project Description</h2>
            <p className="text-foreground/80 leading-relaxed">{project.description}</p>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button asChild className="gap-2">
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                View Live Project
              </a>
            </Button>
            <Button asChild variant="outline" className="gap-2">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                View GitHub Repository
              </a>
            </Button>
          </div>

          {/* Challenges */}
          <div className="mb-8 bg-card rounded-lg p-6 shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="h-5 w-5 text-primary" />
              <h2 className="text-2xl">Challenges Faced</h2>
            </div>
            <ul className="space-y-3">
              {project.challenges.map((challenge, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-primary mt-1 flex-shrink-0">•</span>
                  <span className="text-foreground/80">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Future Improvements */}
          <div className="mb-8 bg-card rounded-lg p-6 shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="h-5 w-5 text-primary" />
              <h2 className="text-2xl">Future Improvements</h2>
            </div>
            <ul className="space-y-3">
              {project.improvements.map((improvement, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-primary mt-1 flex-shrink-0">•</span>
                  <span className="text-foreground/80">{improvement}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Back Button */}
          <div className="text-center">
            <Button onClick={onClose} variant="outline" size="lg">
              Back to Projects
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
