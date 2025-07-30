import FeatureCard from "./FeatureCard";

const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: "Kualitas Terpercaya",
      description:
        "Produk kami di buat dari bahan berkualitas untuk kenya dan daya tahan sepatu kami terjamin untuk kemudian hari.",
      bgColor: "bg-blue-100",
      iconColor: "bg-blue-500",
    },
    {
      title: "Kirim sebagai Hadiah",
      description:
        "Ingin memberikan sesuatu yang istimewa? Dengan layanan hadiah, kamu bisa kirim langsung ke yang tersayang.",
      bgColor: "bg-teal-100",
      iconColor: "bg-teal-500",
    },
    {
      title: "Pengembalian Mudah",
      description:
        "Tidak cocok dengan pembelian yang mu? Buat kamu bisa langsung menukar di toko atau via kurir.",
      bgColor: "bg-gray-100",
      iconColor: "bg-gray-500",
    },
    {
      title: "Layanan Pelanggan",
      description:
        "Untuk semua informasi, dari segala tipe untuk mengurangi kesalahan pelayanan yang kacau.",
      bgColor: "bg-blue-100",
      iconColor: "bg-blue-500",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              bgColor={feature.bgColor}
              iconColor={feature.iconColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
