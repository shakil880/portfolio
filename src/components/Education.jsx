import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export function Education() {
  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of the People',
      location: 'Online, USA',
      period: 'Expecteed Graduation - Auguest 2026',
      description: 'Focused on software engineering, algorithms, and web development',
      achievements: [
        'GPA: 3.92/4.0',
        'President\'s List for 2 terms'
      ],
    },
    {
      degree: 'Bachelor of Business Administration',
      institution: 'National Universiy',
      location: 'Bangladesh',
      period: '2009 - 2014',
      description: 'Graduated with honors. Focused on Accounting.'
    },
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl mb-4">Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            My academic journey and educational qualifications
          </p>
        </div>

        <div className="space-y-6">
          {education.map((edu, idx) => (
            <Card key={idx} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-2">
                      <div className="p-2 bg-primary/10 rounded-lg mt-1">
                        <GraduationCap className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl mb-1">{edu.degree}</h3>
                        <p className="text-primary">{edu.institution}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2 text-sm text-muted-foreground md:text-right">
                    <div className="flex items-center gap-2 md:justify-end">
                      <Calendar className="h-4 w-4" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-2 md:justify-end">
                      <MapPin className="h-4 w-4" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-foreground/70 mb-4">{edu.description}</p>

                <div className="bg-secondary/30 rounded-lg p-4">
                  <h4 className="text-sm mb-2 text-primary">Key Achievements:</h4>
                  <ul className="space-y-1">
                     {(edu.achievements || []).map((achievement, achIdx) => (
                      <li key={achIdx} className="text-sm text-foreground/70 flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
