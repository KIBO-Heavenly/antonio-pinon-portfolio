import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group block bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-glow/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-glow/10"
    >
      <div className="flex items-center justify-center p-6">
        {project.logo ? (
          <img
            src={project.logo}
            alt={project.name}
            className="inline-block max-w-full h-auto object-contain"
            loading="lazy"
          />
        ) : (
          <div className="w-24 h-24 rounded-2xl bg-glow/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
            <span className="text-4xl font-bold text-glow" style={{ fontFamily: 'Unbounded, sans-serif' }}>
              {project.name.charAt(0)}
            </span>
          </div>
        )}
      </div>
      
      <div className="p-6 text-center">
        <h3 
          className="text-xl font-semibold text-white mb-2 group-hover:text-glow transition-colors duration-300"
          style={{ fontFamily: 'Unbounded, sans-serif' }}
        >
          {project.name}
        </h3>
        <p className="text-white/60 text-sm line-clamp-2">
          {project.tagline}
        </p>
        
        <div className="flex flex-wrap gap-2 justify-center mt-4">
          {project.tags.slice(0, 3).map((tag) => (
            <span 
              key={tag}
              className="px-3 py-1 text-xs rounded-full bg-glow/10 text-glow/80"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
