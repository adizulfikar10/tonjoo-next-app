const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 text-white py-20 relative overflow-hidden min-h-[60vh]">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white opacity-10 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <p className="text-lg mb-2">mino. store premier</p>
          <p className="text-sm mb-8">presents</p>
          <h2 className="text-6xl font-bold mb-8 tracking-wider">
            UPDATED SERIES
          </h2>
          <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
            GET IT NOW!
          </button>
        </div>
      </div>

      {/* Dots indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <div className="w-3 h-3 bg-white rounded-full"></div>
        <div className="w-3 h-3 bg-white opacity-50 rounded-full"></div>
        <div className="w-3 h-3 bg-white opacity-50 rounded-full"></div>
      </div>
    </section>
  );
};

export default HeroSection;
