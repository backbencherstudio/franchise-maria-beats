import StatBg from "../assets/stat.png";
import Stat1 from "../assets/stat-1.png";
import Stat2 from "../assets/stat-2.png";
import Stat3 from "../assets/stat-3.png";
import Stat4 from "../assets/stat-4.png";

const StatisticsSection = () => {
  return (
    <div
      className="bg-gray-900 text-white py-12 px-4 min-h-[600px]"
      style={{ background: `url(${StatBg})` }}
    >
      <p className="text-center">- Growing With Our Clients</p>
      <h2 className="text-center text-4xl font-bold my-6">
        We Have Over 23 Years Of Experience
      </h2>
      <p className="text-center text-gray-400">
        Gulf Franchise Hub credibility and track record are based on our
        extensive experience with successful franchises.
      </p>
      <div className="flex flex-wrap justify-center gap-6 mt-12">
        <img src={Stat1} />
        <img src={Stat2} />
        <img src={Stat3} />
        <img src={Stat4} />
      </div>
    </div>
  );
};

export default StatisticsSection;
