import BlogCard from "./BlogCard";

const BlogSection: React.FC = () => {
  const blogPosts = [
    {
      category: "PROMO",
      title: "Sepatu Kotor? Untung Udah Ada Mino Clean dan Mino Care",
      excerpt:
        "Layanan andak segala jaya buat dengan jadi dan oleskan pandah tidak kepan yang diantara harus lukisan kotor di",
      image: "https://picsum.photos/200/100",
    },
    {
      category: "PROMO",
      title: "Mino Shoe Store Siap Semarakkam Harbolnas 11.11",
      excerpt:
        "Akan ada sepatu kolekt grimer dan diuuat segan permainan harga dengan membuat kampanye keras dan",
      image: "https://picsum.photos/200/100",
    },
    {
      category: "TIPS & TRIK",
      title: "Tips Agar Kaki Tidak Keseleo Sewaktu Berlari",
      excerpt:
        "Nggitu dari sini juga penting mengek njalah akan kmu nirkabel di ringan sistem. Sedang sungging atau",
      image: "https://picsum.photos/200/100",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-700">Blog</h2>
          <button className="border border-gray-300 px-4 py-2 rounded-lg text-sm hover:bg-gray-50 text-gray-700">
            LIHAT SEMUA
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={index}
              category={post.category}
              title={post.title}
              excerpt={post.excerpt}
              image={post.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
