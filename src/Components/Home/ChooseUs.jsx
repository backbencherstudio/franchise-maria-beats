import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import {
  BsArrowRight,
  BsCurrencyDollar,
  BsFileEarmarkText,
  BsFillBuildingsFill,
} from "react-icons/bs";

const ChooseUs = () => {
  const slides = [
    {
      icon: <BsFillBuildingsFill className="text-2xl " />,
      title: "Franchise Your Business",
      description:
        "Transform business into a scalable franchise your business into a scalable, efficient, and successful franchise model.",
      link: "/franchise-business",
    },
    {
      icon: <BsFileEarmarkText className="text-2xl " />,
      title: "Licensing",
      description:
        "Monetize your intellectual property effectively by licensing it to maximize revenue opportunities.",
      link: "/licensing",
    },
    {
      icon: <BsCurrencyDollar className="text-2xl " />,
      title: "Sell Your Business",
      description:
        "Facilitate a highly profitable business exit by connecting with qualified, strategic buyers effectively.",
      link: "/sell-business",
    },
  ];

  // Slick slider settings
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    dotsClass: "slick-dots custom-dots",
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-24">
      <style>
        {`
          .custom-dots {
            bottom: -40px;
          }
          .custom-dots li {
            margin: 0 4px;
          }
          .custom-dots li button {
            width: 12px;
            height: 12px;
          }
          .custom-dots li button:before {
            font-size: 10px;
            color: #D1D5DB;
            opacity: 1;
            transition: all 0.3s ease;
          }
          .custom-dots li.slick-active button:before {
            color: #B2030A;
            opacity: 1;
          }
        `}
      </style>

      {/* Header Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center mb-8">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-[2px] w-4 bg-[#B2030A]"></div>{" "}
            <p className="text-[16px] text-[#B2030A] capitalize">
              {" "}
              WHY Choose Gulf Franchise Hub
            </p>
          </div>
          <h2 className="text-[32px] lg:text-[40px] font-bold text-[#1D1F2C] mt-2">
            Empower Your Gulf Expansion
          </h2>
          <p className="text-[#4A4C56] text-[17px] mt-2 max-w-2xl">
            Unlock your business potential and expand confidently in the Gulf
            with our franchise solutions.
          </p>
        </div>
        <Link
          to="/"
          className="text-[#B2030A] mt-5 lg:mt-0 text-[18px] font-medium flex items-center gap-1 hover:gap-3 transition-all"
        >
          View All
          <BsArrowRight />
        </Link>
      </div>

      {/* Carousel Section */}
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="p-6 group h-full">
            <div className="p-6 bg-gray-50 group-hover:bg-[#FBF6F7] rounded-lg shadow-md transition-all duration-300 border-t-4 border-t-transparent hover:border-t-[#B2030A] h-[320px] flex flex-col justify-between">
              <div>
                <div className="text-3xl mb-4 text-gray-700 group-hover:text-[#B2030A] bg-gray-100 border group-hover:border-[#B2030A] rounded-full p-4 w-fit">
                  {slide.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#B2030A]">
                  {slide.title}
                </h3>
                <p className="text-gray-600 mb-4">{slide.description}</p>
              </div>
              <Link
                to={slide.link}
                className="inline-flex items-center text-[#B2030A] transition-colors"
              >
                Read more
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ChooseUs;
