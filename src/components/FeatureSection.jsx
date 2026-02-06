import { useEffect, useRef, useState } from 'react';

const FeatureSection = ({ feature, index }) => {
  const isEven = index % 2 === 0;
  const iframeRef = useRef(null);
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    if (!feature.video) return;

    // Load YouTube IFrame API
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    // Initialize player when API is ready
    const initPlayer = () => {
      if (window.YT && window.YT.Player && iframeRef.current) {
        const newPlayer = new window.YT.Player(iframeRef.current, {
          events: {
            onReady: (event) => {
              // Force HD quality
              event.target.setPlaybackQualityRange('hd1080', 'hd1080');
              event.target.setPlaybackQuality('hd1080');
            }
          }
        });
        setPlayer(newPlayer);
      }
    };

    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      window.onYouTubeIframeAPIReady = initPlayer;
    }

    return () => {
      if (player) {
        player.destroy();
      }
    };
  }, [feature.video]);

  return (
    <div 
      className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16 py-16`}
    >
      {/* Media/Image Side - give media more width on md+ screens so videos can be larger */}
      <div className="w-full md:w-2/3">
        {/* Video container - control size with max-w-* classes (max-w-md, max-w-lg, max-w-xl, max-w-2xl) */}
        <div className="relative rounded-2xl overflow-hidden aspect-video max-w-2xl mx-auto">
          {feature.video ? (
            <div className="relative w-full h-full">
              <div className="absolute inset-0 overflow-hidden">
                <iframe
                  ref={iframeRef}
                  src={`https://www.youtube.com/embed/${feature.video}?autoplay=1&mute=1&loop=1&playlist=${feature.video}&controls=0&showinfo=0&modestbranding=1&rel=0&disablekb=1&enablejsapi=1&vq=hd1080`}
                  className="absolute"
                  style={{ top: '50%', left: '50%', width: '101%', height: '86%', transform: 'translate(-50%, -50%)', borderRadius: 14 }}
                  allow="autoplay; encrypted-media"
                  title={feature.title}
                  frameBorder="0"
                />

                {/* Border overlay matching the cropped iframe (hero-style) */}
                <div
                  aria-hidden="true"
                  className="absolute pointer-events-none rounded-2xl border border-glow/30"
                  style={{ top: '50%', left: '50%', width: '101%', height: '86%', transform: 'translate(-50%, -50%)' }}
                />
              </div>
              {/* Transparent overlay - blocks all YouTube controls */}
              <div className="absolute inset-0 cursor-default" />
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
