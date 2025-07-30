const CtaSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-teal-500 to-green-500 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">
              Diskon Nggak Pake Tanggung.
            </h2>
            <p>Dua produk dengan ke selisihan indonesia</p>
          </div>
          <div className="flex items-center">
            <button className="bg-white text-teal-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              INFO SELENGKAPNYA
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
