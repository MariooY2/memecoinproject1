const FireLoader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400">
      <div className="relative w-40 h-40">
        {/* Main ember circle */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-full h-full"
              style={{
                transform: `rotate(${i * 30}deg)`,
              }}
            >
              <div
                className={`absolute w-3 h-3 bg-yellow-200 rounded-full blur-md top-0 left-1/2 -translate-x-1/2 emberFloat`}
                style={{
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            </div>
          ))}
        </div>

        {/* Inner fire ring */}
        <div className={`absolute inset-4 spinSlow`}>
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-full h-full"
              style={{
                transform: `rotate(${i * 45}deg)`,
              }}
            >
              <div
                className={`absolute w-2 h-2 bg-white rounded-full blur-sm top-0 left-1/2 -translate-x-1/2 firePulse`}
                style={{
                  animationDelay: `${i * 0.3}s`,
                }}
              />
            </div>
          ))}
        </div>

        {/* Center flame */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 relative">
            <div
              className={`absolute inset-0 bg-gradient-to-t from-yellow-300 via-orange-400 to-white rounded-full blur-md flamePulse`}
            />
            <div
              className={`absolute inset-1 bg-gradient-to-t from-yellow-200 via-orange-300 to-white rounded-full flamePulse`}
              style={{ animationDelay: "75ms" }}
            />
            <div
              className={`absolute inset-2 bg-gradient-to-t from-yellow-100 via-orange-200 to-white rounded-full flamePulse`}
              style={{ animationDelay: "150ms" }}
            />
          </div>
        </div>

        {/* Outer glow */}
        <div className="absolute -inset-4 bg-yellow-300/30 rounded-full blur-2xl animate-pulse" />
      </div>
    </div>
  );
};

export default FireLoader;
