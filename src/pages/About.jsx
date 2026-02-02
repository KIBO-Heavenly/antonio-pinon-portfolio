const About = () => {
  const skills = [
    { category: 'Languages', items: ['JavaScript', 'TypeScript', 'Python', 'C++', 'C#', 'Java'] },
    { category: 'Frontend', items: ['React', 'Next.js', 'Vue', 'Tailwind CSS', 'Three.js'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'FastAPI', 'PostgreSQL', 'MongoDB'] },
    { category: 'Tools & Platforms', items: ['Git', 'Docker', 'AWS', 'Unity', 'Unreal Engine'] },
    { category: 'AI/ML', items: ['PyTorch', 'TensorFlow', 'LangChain', 'OpenAI API', 'Hugging Face'] },
  ];

  return (
    <section className="min-h-screen py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 
          className="text-4xl md:text-5xl font-bold text-white mb-12 text-center animate-fade-in"
          style={{ fontFamily: 'Unbounded, sans-serif' }}
        >
          About Me
        </h1>
        
        <div className="space-y-8 text-white/80 text-lg leading-relaxed animate-fade-in-delay">
          <p>
            I'm a passionate software engineer with a love for building things that live on the internet 
            and beyond. My journey in tech started with tinkering on video game mods and eventually led 
            me to explore every corner of software development.
          </p>
          
          <p>
            From crafting responsive web applications to developing immersive game experiences, 
            training AI models, and building native mobile apps — I thrive on the challenge of 
            turning complex ideas into polished products.
          </p>
          
          <p>
            When I'm not coding, you'll find me exploring the latest AI developments, contributing 
            to open-source projects, or gaming with friends. I believe in continuous learning and 
            pushing the boundaries of what's possible with technology.
          </p>
        </div>
        
        <div className="mt-16">
          <h2 
            className="text-2xl md:text-3xl font-bold text-white mb-8 text-center"
            style={{ fontFamily: 'Unbounded, sans-serif' }}
          >
            Skills & Technologies
          </h2>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((skillGroup, index) => (
              <div 
                key={skillGroup.category}
                className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-glow/30 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-glow font-semibold mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 text-sm bg-white/10 rounded-full text-white/70 hover:text-white hover:bg-glow/20 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Resume Download Button */}
        <div className="mt-16 text-center">
          <a
            href="/images/Computer_Science_Resume.pdf"
            download="Antonio_Pinon_Resume.pdf"
            className="inline-flex items-center gap-3 px-8 py-4 bg-glow text-midnight font-semibold rounded-full hover:bg-glow/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-glow/25"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
