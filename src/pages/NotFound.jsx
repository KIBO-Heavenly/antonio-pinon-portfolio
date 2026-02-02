import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <h1 
            className="text-9xl font-bold text-glow mb-4 animate-pulse"
            style={{ fontFamily: 'Unbounded, sans-serif' }}
          >
            404
          </h1>
          <h2 
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: 'Unbounded, sans-serif' }}
          >
            Page Not Found
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-glow text-midnight font-semibold rounded-full hover:bg-glow/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-glow/25"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            Go Home
          </Link>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105"
          >
            View Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
