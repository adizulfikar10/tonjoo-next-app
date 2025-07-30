const CategoryGrid = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-200 rounded-lg p-8 text-white relative overflow-hidden">
              <h3 className="text-xl font-bold mb-2">Sepatu Anak</h3>
            </div>
            <div className="bg-yellow-400 rounded-lg p-8 text-white relative overflow-hidden">
              <h3 className="text-xl font-bold mb-2">Sandal</h3>
            </div>
            <div className="bg-blue-300 rounded-lg p-8 text-white relative overflow-hidden col-span-2">
              <h3 className="text-xl font-bold mb-2">Sepatu Wanita</h3>
            </div>
          </div>
          <div className="bg-yellow-600 rounded-lg p-8 text-white relative overflow-hidden">
            <h3 className="text-xl font-bold mb-2">Sepatu Pria</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
