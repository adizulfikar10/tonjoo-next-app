type BlogCardProps = {
  category: string;
  title: string;
  excerpt: string;
  image: string;
};

const BlogCard: React.FC<BlogCardProps> = ({
  category,
  title,
  excerpt,
  image,
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="aspect-video bg-gray-200">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <span className="text-xs text-blue-600 font-semibold">{category}</span>
        <h3 className="font-bold mt-2 mb-3 text-gray-700">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{excerpt}</p>
        <button className="bg-blue-900 text-white px-4 py-2 rounded text-sm hover:bg-blue-800 transition-colors">
          BACA SELENGKAPNYA
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
