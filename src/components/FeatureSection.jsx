import { useEffect, useRef, useState } from 'react';

const FeatureSection = ({ feature, index }) => {
  const isEven = index % 2 === 0;
  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    if (!feature.video || !videoRef.current) return;

    const node = videoRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVideoLoaded(true);
            observer.unobserve(node);
          }
        });
      },
      { rootMargin: '100px' }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [feature.video]);

  return (
    <div 
      className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16 py-16`}
    >
      {/* Media/Image Side - give media more width on md+ screens so videos can be larger */}
      <div className="w-full md:w-2/3">
        {/* Video container - control size with max-w-* classes (max-w-md, max-w-lg, max-w-xl, max-w-2xl) */}
            <div className="relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 aspect-video max-w-2xl mx-auto">
          {feature.video ? (
            <div ref={videoRef} className="w-full h-full">
              {isVideoLoaded ? (
                <video
                  src={feature.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  preload="metadata"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-glow/20 to-purple-500/10">
                  <span className="text-glow/50 text-lg">Loading preview…</span>
                </div>
              )}
            </div>
          ) : feature.image ? (
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-glow/20 to-purple-500/10">
              <span className="text-glow/50 text-lg">Feature Preview</span>
            </div>
          )}
        </div>
      </div>
      
      {/* Content Side - narrower on md+ screens to let media expand */}
      <div className="w-full md:w-1/3">
        <h3 
          className="text-2xl md:text-3xl font-bold text-white mb-4"
          style={{ fontFamily: 'Unbounded, sans-serif' }}
        >
          {feature.title}
        </h3>
        <p className="text-white/70 text-lg leading-relaxed">
          {feature.description}
        </p>
      </div>
    </div>
  );
};

export default FeatureSection;
