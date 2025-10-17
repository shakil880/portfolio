export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="space-y-6 text-foreground/80">
          <div>
            <h3 className="text-xl mb-3 text-primary">My Programming Journey</h3>
            <p>
              My journey into programming began during my college years when I discovered the magic of turning 
              ideas into reality through code. What started as curiosity quickly evolved into a deep passion. 
              I spent countless hours learning, building projects, and pushing myself to understand not just 
              how things work, but why they work. From my first "Hello World" to building complex full-stack 
              applications, every step has been an exciting adventure filled with challenges and growth.
            </p>
          </div>

          <div>
            <h3 className="text-xl mb-3 text-primary">What I Love to Do</h3>
            <p>
              I absolutely love creating web applications that solve real-world problems. There's something 
              incredibly satisfying about transforming a concept into a beautiful, functional product that 
              people can use and enjoy. I specialize in building responsive, user-friendly interfaces and 
              robust backend systems. My favorite projects are those that challenge me to learn new technologies 
              and implement creative solutions. I particularly enjoy working on projects that have a meaningful 
              impact on users' lives, whether it's simplifying a complex process or creating an engaging 
              user experience.
            </p>
          </div>

          <div>
            <h3 className="text-xl mb-3 text-primary">Beyond the Code</h3>
            <p>
              When I'm not coding, I enjoy staying active and exploring creative outlets. I'm an avid sports 
              enthusiast and regularly play basketball and go for morning runs to keep myself energized. 
              I also have a passion for photography, capturing moments and exploring the world through a lens. 
              On weekends, you might find me experimenting with new recipes in the kitchen, reading tech blogs 
              and books about innovation, or contributing to open-source projects. I believe that maintaining 
              a balance between work and personal interests makes me a better developer and a more creative 
              problem solver.
            </p>
          </div>

          <div>
            <h3 className="text-xl mb-3 text-primary">My Approach</h3>
            <p>
              I believe in writing clean, maintainable code and staying updated with the latest industry trends. 
              Continuous learning is at the core of my development philosophy. I'm always exploring new 
              frameworks, tools, and best practices to improve my craft. Collaboration and communication are 
              equally important to me – I thrive in environments where ideas are shared freely and teamwork 
              drives innovation. My goal is not just to write code, but to create solutions that make a difference.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
