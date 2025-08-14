const SimpleTest = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="text-center p-8">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">
          🚀 App is Live!
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          Your React app is working perfectly
        </p>
        <div className="bg-white rounded-lg shadow-md p-6 max-w-md">
          <h2 className="text-lg font-semibold mb-2">Ready to build!</h2>
          <p className="text-gray-500">
            All systems operational. Start adding your features.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SimpleTest;