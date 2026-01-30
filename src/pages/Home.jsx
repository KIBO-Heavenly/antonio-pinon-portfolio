const Home = () => {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 animate-fade-in"
          style={{ fontFamily: 'Unbounded, sans-serif' }}
        >
          Hey, I'm{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-glow to-purple-400">
            Antonio Pinon
          </span>
          !
        </h1>
        
        <p 
          className="text-xl md:text-2xl lg:text-3xl text-white/80 leading-relaxed max-w-3xl mx-auto animate-fade-in-delay"
          style={{ fontFamily: 'Unbounded, sans-serif', fontWeight: 300 }}
        >
          I go by many other names, some call me a{' '}
          <span className="text-glow">full-stack web dev</span>,{' '}
          <span className="text-purple-400">gaming engineer</span>,{' '}
          <span className="text-glow">AI model tinkerer</span>,{' '}
          <span className="text-purple-400">desktop app builder</span>, or{' '}
          <span className="text-glow">mobile app maker</span>… but{' '}
          <span className="text-white font-medium">"Software Engineer"</span> works too.
        </p>
        
        <div className="mt-12 flex flex-wrap gap-4 justify-center animate-fade-in-delay-2">
          <a
            href="/projects"
            className="px-8 py-4 bg-glow text-midnight font-semibold rounded-full hover:bg-glow/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-glow/25"
          >
            View My Work
          </a>
          <a
            href="/contact"
            className="px-8 py-4 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
