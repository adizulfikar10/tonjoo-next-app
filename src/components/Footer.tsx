const Footer:React.FC = () => {
  const footerSections = [
    {
      title: "Mino Store",
      links: ["Voucher", "Artikel", "Bundatron", "Artikel", "Syafran"],
    },
    {
      title: "Belanja",
      links: [
        "Produk Kami",
        "Sepatu Wanita",
        "Sepatu Pria",
        "Parfum pemilik",
        "Apparel",
      ],
    },
    {
      title: "Layanan",
      links: [
        "Bantuan",
        "Cara Pengembalian",
        "Indeks Produk",
        "Promo & Diskon",
        "Kiat Premium",
        "Status Pesanan",
      ],
    },
    {
      title: "Tentang Kami",
      links: [
        "Newsroom",
        "Pers / Media",
        "Karir",
        "Pengembangan & Kemitraan",
        "Industri Drakat",
        "Hubungi Kami",
      ],
    },
  ];

  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-bold mb-4">{section.title}</h3>
              <ul className="space-y-2 text-sm">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="hover:text-blue-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2025 All - Mina/tive Management
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <div className="flex space-x-2">
                <div className="w-8 h-5 bg-gray-600 rounded"></div>
                <div className="w-8 h-5 bg-gray-600 rounded"></div>
                <div className="w-8 h-5 bg-gray-600 rounded"></div>
                <div className="w-8 h-5 bg-gray-600 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;