import { useParams, Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { getProjectBySlug } from '../data/projects';
import FeatureSection from '../components/FeatureSection';

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);
  const iframeRef = useRef(null);

  useEffect(() => {
    if (!iframeRef.current) return;

    // Try to request HD playback via postMessage to the embedded player
    const setQuality = () => {
      try {
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify({ event: 'command', func: 'setPlaybackQuality', args: ['hd1080'] }),
          '*'
        );
      } catch (e) {
        // ignore
      }
    };

    // Run after load and again after a short delay
    const onLoad = () => {
      setTimeout(setQuality, 300);
      setQuality();
    };

    iframeRef.current.onload = onLoad;
    // fallback: also try once after mount (player may be ready quickly)
    setTimeout(setQuality, 800);

    return () => {
      if (iframeRef.current) iframeRef.current.onload = null;
    };
  }, [project.heroVideo]);

  if (!project) {
    return (
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Unbounded, sans-serif' }}>
            Project Not Found
          </h1>
          <Link to="/projects" className="text-glow hover:underline">
            ← Back to Projects
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Back Link */}
        <Link 
          to="/projects" 
          className="inline-flex items-center gap-2 text-white/60 hover:text-glow transition-colors duration-300 mb-12"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Back to Projects
        </Link>

        {/* Hero Section */}
        <div className="text-center mb-16">
          {/* Animated Logo / free-floating image when available */}
          {project.logo ? (
            <img
              src={project.logo}
              alt={project.name}
              className="mx-auto mb-8 block w-130 h-auto object-contain"
              loading="lazy"
            />
          ) : (
            <div className="w-32 h-32 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-glow/30 to-purple-500/20 flex items-center justify-center animate-bounce-slow border border-glow/30">
              <span 
                className="text-5xl font-bold text-glow"
                style={{ fontFamily: 'Unbounded, sans-serif' }}
              >
                {project.name.charAt(0)}
              </span>
            </div>
          )}

          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in"
            style={{ fontFamily: 'Unbounded, sans-serif' }}
          >
            {project.name}
          </h1>
          
          <p className="text-xl text-white/70 mb-6 animate-fade-in-delay">
            {project.tagline}
          </p>

          <div className="flex flex-wrap gap-2 justify-center mb-8 animate-fade-in-delay">
            {project.tags.map((tag) => (
              <span 
                key={tag}
                className="px-4 py-2 text-sm rounded-full bg-glow/10 text-glow border border-glow/20"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4 justify-center">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View Source
              </a>
            )}
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-glow text-midnight font-semibold rounded-full hover:bg-glow/90 transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                Live Demo
              </a>
            )}
          </div>
        </div>

        {/* Hero Video/Image */}
        {project.heroVideo && (
          <div className="relative mb-16 aspect-video">
            <div className="absolute inset-0 overflow-hidden">
              <iframe
                ref={iframeRef}
                src={`https://www.youtube.com/embed/${project.heroVideo}?autoplay=1&mute=1&loop=1&playlist=${project.heroVideo}&controls=0&playsinline=1&iv_load_policy=3&modestbranding=1&rel=0&disablekb=1&enablejsapi=1&vq=hd1080`}
                className="absolute"
                style={{ top: '50%', left: '50%', width: '101%', height: '86%', transform: 'translate(-50%, -50%)', borderRadius: 14 }}
                allow="autoplay; encrypted-media"
                title={project.name}
                frameBorder="0"
              />

              {/* Border overlay sized/positioned to match the cropped iframe */}
              <div
                aria-hidden="true"
                className="absolute pointer-events-none rounded-2xl border border-glow/30"
                style={{ top: '50%', left: '50%', width: '101%', height: '86%', transform: 'translate(-50%, -50%)' }}
              />

              {/* (removed top-cover overlay) */}
            </div>

            {/* Transparent overlay - blocks all YouTube controls */}
            <div className="absolute inset-0 cursor-default" />
          </div>
        )}
        
        {/* Old hero video code removed, keeping as reference:
        {project.heroVideo && (
          <div className="mb-16 rounded-2xl overflow-hidden border border-white/10">
            <video
              src={project.heroVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full"
              loading="lazy"
              preload="metadata"
            />
          </div>
        )}

        {/* Description */}
        <div className="prose prose-lg prose-invert max-w-none mb-16">
          <p className="text-white/80 text-lg leading-relaxed whitespace-pre-line">
            {project.description}
          </p>
        </div>

        {/* Features */}
        <div className="border-t border-white/10 pt-8">
          <h2 
            className="text-3xl font-bold text-white mb-8 text-center"
            style={{ fontFamily: 'Unbounded, sans-serif' }}
          >
            Key Features
          </h2>
          
          <div className="space-y-8">
            {project.features.map((feature, index) => (
              <FeatureSection key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>

        {/* Resume CTA */}
        <div className="mt-24 text-center border-t border-white/10 pt-16">
          <p className="text-white/60 mb-6">Interested in working together?</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/images/Computer_Science_Resume.pdf"
              download="Antonio_Pinon_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 bg-glow text-midnight font-semibold rounded-full hover:bg-glow/90 transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Resume
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white rounded-full hover:bg-white/10 transition-all duration-300"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
