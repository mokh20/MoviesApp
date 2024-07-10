import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const HeaderSlider = () => {
  const APIKEY = "1f2f3b72bcd4f4188e78337d30e9f193";
  const [trendingData, setTrendingData] = useState([]);
  useEffect(() => {
    getTrendingData();
  }, []);

  const getTrendingData = async () => {
    const {
      data: { results },
    } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${APIKEY}`
    );
    setTrendingData(results.splice(0, 8));
  };
  return (
    <header className="w-full">
      <RenderTrending trendingData={trendingData} />
    </header>
  );
};

export default HeaderSlider;

const RenderTrending = ({ trendingData }) => {
  return (
    <Swiper
      speed={1500}
      slidesPerView={1}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      lazy="true"
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Autoplay]}
    >
      {trendingData.map((item) => (
        <SwiperSlide key={item.id}>
          <Link
            to={
              item?.media_type === "movie"
                ? `/Movies/${item.id}`
                : `/TvShow/${item.id}`
            }
          >
            <div
              style={{
                backgroundImage: `url('https://image.tmdb.org/t/p/original${item.backdrop_path}')`,
              }}
              className="bg-cover bg-top h-screen flex flex-wrap content-end items-end shadow-homeSlider "
            >
              <div className="grid px-8 w-full md:w-2/5">
                <h2 className="text-white text-2xl md:text-3xl mb-2">
                  {item.title ? item.title : item.name}
                </h2>
                <span className="text-detailColor text-sm font-light mb-8 md:mb-0 md:text-base">
                  {item?.overview.length >= 120
                    ? `${item?.overview.slice(0, 120)}...`
                    : item?.overview}
                </span>
              </div>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
