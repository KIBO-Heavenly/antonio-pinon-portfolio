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
      {/* Media/Image Side */}
      <div className="flex-1 w-full">
        <div className="relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 aspect-video">
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
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-glow/20 to-purple-500/10">
              <span className="text-glow/50 text-lg">Feature Preview</span>
            </div>
          )}
        </div>
      </div>
      
      {/* Content Side */}
      <div className="flex-1 w-full">
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
