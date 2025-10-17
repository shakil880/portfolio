import { Mail, Phone, MessageCircle, Send } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'shakil880@gmail.com',
      link: 'mailto:shakil880@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+8801723427818',
      link: 'tel:+8801723427818',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+8801723427818',
      // link: 'https://wa.me/01723427818',
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((contact, idx) => {
            const Icon = contact.icon;
            return (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2">{contact.label}</h3>
                  <a
                    href={contact.link}
                    className="text-foreground/70 hover:text-primary transition-colors break-words"
                  >
                    {contact.value}
                  </a>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Optional: Contact form or additional CTA */}
        <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl mb-4">Let's Work Together!</h3>
            <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
              Whether you have a project in mind, need a developer for your team, or just want to connect, 
              I'd love to hear from you. Feel free to reach out through any of the contact methods above.
            </p>
            <Button
              size="lg"
              className="gap-2"
              onClick={() => window.location.href = 'mailto:shakil880@gmail.com'}
            >
              <Send className="h-5 w-5" />
              Send me an email
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}