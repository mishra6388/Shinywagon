import React, { useEffect, useState } from "react";

const images = [
  "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp",
  "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp",
  "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp",
  "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp",
  "https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp",
  "https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp",
];

// Duplicate first images at the end to create an infinite effect
const extendedImages = [...images, ...images.slice(0, 3)];

function ServicesHero() {
  const [index, setIndex] = useState(0);
  const totalSlides = images.length; // Original slide count

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => prevIndex + 1); // Move forward 1 slide at a time
    }, 4000); // ⏳ 4s delay

    return () => clearInterval(interval);
  }, []);

  // Handle infinite loop transition
  useEffect(() => {
    if (index === totalSlides) {
      setTimeout(() => {
        setIndex(0); // Reset index instantly (without animation)
      }, 500); // Small delay to avoid flash effect
    }
  }, [index, totalSlides]);

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

      {/* Carousel Container */}
      <div className="w-full max-w-5xl overflow-hidden relative">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${(index * 100) / 3}%)`, // Moves in steps of 3
            transition: index === totalSlides ? "none" : "transform 1s ease-in-out",
          }}
        >
          {extendedImages.map((src, i) => (
            <div key={i} className="w-1/3 flex-shrink-0 p-2">
              <img
                src={src}
                alt={`Slide ${i + 1}`}
                className="w-full h-56 rounded-lg object-cover shadow-lg"
              />
              <p className="text-center text-white text-sm font-semibold bg-black bg-opacity-60 px-3 py-1 rounded mt-2">
                Item {i + 1}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesHero;
