import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  return (
    <section className="min-h-screen py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 
          className="text-4xl md:text-5xl font-bold text-white mb-6 text-center animate-fade-in"
          style={{ fontFamily: 'Unbounded, sans-serif' }}
        >
          Projects
        </h1>
        
        <p className="text-white/60 text-center text-lg mb-16 max-w-2xl mx-auto animate-fade-in-delay">
          A collection of things I've built — from game engines to AI tools to mobile apps.
          Click on any project to learn more.
        </p>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
