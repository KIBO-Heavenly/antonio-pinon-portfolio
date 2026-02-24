import React from 'react';

const Dialog = ({ open, title, children, onClose, variant = 'info' }) => {
  if (!open) return null;

  const color = variant === 'error' ? 'text-red-400' : 'text-glow';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative max-w-lg w-full bg-midnight/95 border border-white/10 rounded-2xl p-6 mx-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className={`text-xl font-semibold ${color}`} style={{ fontFamily: 'Unbounded, sans-serif' }}>{title}</h3>
            <div className="mt-2 text-white/70">{children}</div>
          </div>
          <button onClick={onClose} aria-label="Close dialog" className="text-white/50 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
