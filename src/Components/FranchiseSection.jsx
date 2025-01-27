import F1 from "../assets/f1.png";
import F2 from "../assets/f2.png";

const FranchiseSection = () => {
  const franchiseData = [
    {
      id: 1,
      title: "Franchise Your Business",
      description:
        "Transform your business into a thriving franchise, reach new markets, and grow your brand with our expert strategies and support.",
      buttonText: "Get Free Consultation Now",
      backgroundImage: `url(${F1})`,
    },
    {
      id: 2,
      title: "Own A Franchise",
      description:
        "Transform your business into a thriving franchise, reach new markets, and grow your brand with our expert strategies and support.",
      buttonText: "Explore Your Opportunities",
      backgroundImage: `url(${F2})`,
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-6 my-12 text-center min-h-[600px]  max-w-[1600px] px-2 md:px-6 mx-auto">
      {franchiseData.map((item) => (
        <div
          key={item.id}
          className="flex-1 rounded-lg text-white p-12 bg-cover bg-center justify-center items-center flex flex-col"
          style={{ backgroundImage: item.backgroundImage }}
        >
          <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
          <p className="mb-6 text-gray-200 max-w-[400px]">{item.description}</p>
          <button
            className={`px-6 py-3 rounded-md font-semibold border hover:bg-red-600 hover:border-red-600 transition`}
          >
            {item.buttonText} <span className="ml-2">→</span>
          </button>
        </div>
      ))}
    </div>
  );
};

export default FranchiseSection;
