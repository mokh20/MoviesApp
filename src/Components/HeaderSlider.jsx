import axios from "axios";
import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../index.css";
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
    <header className="w-full relative h-auto flex sm:min-h-[360px] md:h-screen shadow-homeSlider">
      <RenderTrending trendingData={trendingData} />
    </header>
  );
};

export default HeaderSlider;

const RenderTrending = ({ trendingData }) => {
  return (
    <Swiper
      speed={600}
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
        dynamicBullets: false,
      }}
      modules={[Pagination, Autoplay, EffectCreative]}
    >
      {trendingData.map((trendData) => (
        <SwiperSlide key={trendData.id}>
          <div>
            <div
              style={{
                backgroundImage: `url('https://image.tmdb.org/t/p/original${trendData.backdrop_path}')`,
              }}
              className="bg-cover bg-center  min-h-[300px] flex flex-wrap content-end items-end shadow-homeSlider sm:min-h-[360px] md:h-screen"
            ></div>
            <span className="text-white">{trendData.title}</span>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
