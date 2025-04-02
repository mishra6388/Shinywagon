import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const images = [
  "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp",
  "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp",
  "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp",
  "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp",
  "https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp",
  "https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp",
];

function ServicesHero() {
  return (
    <div
      className="w-full min-h-120 flex flex-col items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1080,h=757,fit=crop,trim=0;55.65217391304348;0;38.95652173913043/AMq4XNxDqjS1GZ55/black-minimalist-linktree-background-A3Q2B7NlQ3tlp7K7.png')",
      }}
    >
      {/* Title */}
      <h2 className="text-3xl font-bold text-white mb-6 bg-black bg-opacity-60 px-6 py-3 rounded-lg">
        Our Services
      </h2>

      {/* Swiper Slider Without Icons */}
      <div className="w-full max-w-5xl px-4">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          grabCursor={true} // Enables touch/mouse swiping
        >
          {images.map((src, i) => (
            <SwiperSlide key={i}>
              <div className="w-full p-2">
                <img
                  src={src}
                  alt={`Slide ${i + 1}`}
                  className="w-full h-56 rounded-lg object-cover shadow-lg"
                />
                <p className="text-center text-white text-sm font-semibold bg-black bg-opacity-60 px-3 py-1 rounded mt-2">
                  Item {i + 1}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default ServicesHero;
