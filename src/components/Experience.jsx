import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

export function Experience() {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovations Inc.',
      location: 'San Francisco, CA',
      period: 'Jan 2023 - Present',
      type: 'Full-time',
      description: 'Leading the development of scalable web applications using modern tech stack. Collaborating with cross-functional teams to deliver high-quality products.',
      responsibilities: [
        'Architected and developed multiple full-stack applications using React, Node.js, and PostgreSQL',
        'Mentored junior developers and conducted code reviews',
        'Improved application performance by 40% through optimization techniques',
        'Implemented CI/CD pipelines and automated testing workflows',
      ],
      technologies: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Docker', 'AWS'],
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Solutions Ltd.',
      location: 'New York, NY',
      period: 'Jun 2022 - Dec 2022',
      type: 'Full-time',
      description: 'Focused on building responsive and accessible user interfaces for enterprise applications.',
      responsibilities: [
        'Developed and maintained multiple client-facing web applications',
        'Collaborated with UX designers to implement pixel-perfect designs',
        'Reduced page load time by 50% through code splitting and lazy loading',
        'Integrated RESTful APIs and managed application state',
      ],
      technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Redux', 'REST APIs'],
    },
    {
      title: 'Junior Web Developer (Internship)',
      company: 'StartUp Hub',
      location: 'Remote',
      period: 'Jan 2022 - May 2022',
      type: 'Internship',
      description: 'Gained hands-on experience in full-stack development and agile methodologies.',
      responsibilities: [
        'Assisted in developing features for the company\'s main product',
        'Fixed bugs and improved code quality',
        'Participated in daily standups and sprint planning',
        'Learned best practices for version control and team collaboration',
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Git'],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/10">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            My professional journey and career milestones
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <Card key={idx} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-2">
                      <div className="p-2 bg-primary/10 rounded-lg mt-1">
                        <Briefcase className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl mb-1">{exp.title}</h3>
                        <p className="text-primary">{exp.company}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2 text-sm text-muted-foreground md:text-right">
                    <Badge variant="secondary" className="w-fit md:ml-auto">
                      {exp.type}
                    </Badge>
                    <div className="flex items-center gap-2 md:justify-end">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 md:justify-end">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-foreground/70 mb-4">{exp.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm mb-2">Key Responsibilities:</h4>
                  <ul className="space-y-1">
                    {exp.responsibilities.map((resp, respIdx) => (
                      <li key={respIdx} className="text-sm text-foreground/70 flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIdx) => (
                      <Badge key={techIdx} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
