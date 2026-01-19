import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import images from "../../data/carousel.data";

const ImageCarousel = () => {
  return (
    <>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        speed={3000}
        grabCursor={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {images.slice(0, 10).map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`slide-${index}`}
              className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <br />
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
          reverseDirection: true,
        }}
        speed={6000}
        grabCursor={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {images.slice(10).map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`slide-${index}`}
              className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <br />
      <br />
      <br />
    </>
  );
};

export default ImageCarousel;
