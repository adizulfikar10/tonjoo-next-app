type FeatureCardType = {
  title: string;
  description: string;
  bgColor: string;
  iconColor: string;
};

const FeatureCard: React.FC<FeatureCardType> = ({
  title,
  description,
  bgColor,
  iconColor,
}) => {
  return (
    <div className="text-center">
      <div
        className={`w-16 h-16 ${bgColor} rounded-lg mx-auto mb-4 flex items-center justify-center`}
      >
        <div className={`w-8 h-8 ${iconColor} rounded`}></div>
      </div>
      <h3 className="font-semibold mb-2 text-gray-700">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
