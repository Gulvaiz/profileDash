const LoadingSpinner = () => {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-background">
        <div className="relative">
          {/* Primary spinner */}
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary-dark"></div>
          
          {/* Secondary spinner (accent color, rotating in opposite direction) */}
          <div className="absolute top-0 left-0 animate-spin-slow rounded-full h-16 w-16 border-r-2 border-l-2 border-accent" style={{ animationDirection: 'reverse' }}></div>
          
          {/* Inner dot */}
          <div className="absolute top-6 left-6 h-4 w-4 rounded-full bg-primary-dark animate-pulse-gentle"></div>
        </div>
        
        <p className="mt-6 text-lg font-medium text-dark-text animate-pulse">Loading dashboard...</p>
        
        <div className="mt-4 w-32 h-1 bg-gray-200 rounded overflow-hidden">
          <div className="h-full bg-primary-light animate-pulse-gentle"></div>
        </div>
      </div>
    );
  };
  
  export default LoadingSpinner;