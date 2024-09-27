const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      <div className="flex flex-col items-center">
        <div className="animate-spin h-10 w-10 border-4 border-t-transparent border-blue-600 rounded-full mb-4"></div>
        <p className="text-lg text-gray-600">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
