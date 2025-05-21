const LoadingSpinner = () => {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-accent"></div>
        <p className="ml-4 text-lg font-medium text-gray-700">Loading dashboard...</p>
      </div>
    );
  };
  
  export default LoadingSpinner;