import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

// Custom services with titles and image URLs
const services = [
  {
    title: "Car Cleaning & Coating",
    src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=678,h=500,fit=crop,trim=0;0;283.53982300884957;0/AMq4XNxDqjS1GZ55/red-carpet-1080-x-1080-px-5-m5KMr7j94ou2jy4p.png",
  },
  {
    title: "Seat Deep Cleaning",
    src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=678,h=500,fit=crop,trim=0;0;283.53982300884957;0/AMq4XNxDqjS1GZ55/red-carpet-1080-x-1080-px-4-YleW5ZZb06tbrJxO.png",
  },
  {
    title: "Exterior & Interior Deep Wash",
    src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=678,h=500,fit=crop,trim=0;0;283.53982300884957;0/AMq4XNxDqjS1GZ55/red-carpet-1080-x-1080-px-3-AMq1pPPk20cQwWRJ.png",
  },
  {
    title: "Interior Deep Cleaning",
    src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=678,h=500,fit=crop,trim=0;0;283.53982300884957;0/AMq4XNxDqjS1GZ55/red-carpet-1080-x-1080-px-2-dJoZNqoOODhKpwDk.png",
  },
  {
    title: "Exterior Deep Wash",
    src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=678,h=500,fit=crop,trim=0;0;283.53982300884957;0/AMq4XNxDqjS1GZ55/red-carpet-1080-x-1080-px-1-dJoZNqo4VPhqKP2x.png",
  },
  {
    title: "Full Body Polishing",
    src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=678,h=500,fit=crop,trim=0;0;283.53982300884957;0/AMq4XNxDqjS1GZ55/red-carpet-1080-x-1080-px-AoPWNkPLZPFrqlyr.png",
  },
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
      <h2 className="text-3xl font-bold text-[#031831] mb-6 bg-[#fbd112] bg-opacity-60 px-6 py-3 rounded-lg">
        Our Services
      </h2>

      {/* Swiper Slider */}
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
          grabCursor={true}
        >
          {services.map((service, i) => (
            <SwiperSlide key={i}>
              <div className="w-full p-2">
                <img
                  src={service.src}
                  alt={service.title}
                  className="w-full h-56 rounded-lg object-cover shadow-lg"
                />
                <p className="text-center text-[#031831] text-sm font-bold bg-[#fbd112] bg-opacity-60 px-3 py-1 rounded mt-2 text-[18px]">
                  {service.title}
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
