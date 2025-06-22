

const Shimmer = () => {
  return (
    <div className="p-4 space-y-6 dark:bg-gray-800">

      {/* Header or Main Loading Block */}
      <div className="bg-gray-300 h-[00px] rounded-lg animate-pulse "></div>

      {/* Repeated Shimmer Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array(12)
          .fill(null)
          .map((_, index) => (
            <div
              key={index}
              className="bg-gray-300 h-48 rounded-lg animate-pulse"
            ></div>
          ))}
      </div>
    </div>
  );
};

export default Shimmer;

