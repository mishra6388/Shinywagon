import React from "react";

function HomeWashing() {
  return (
    <div>
      {/* ✅ Main Section */}
      <section className="mx-auto max-w-full px-6 py-10 sm:px-6 lg:px-8 bg-[#031831]">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-center md:gap-10">
          
          {/* ✅ Text Content */}
          <div>
            <div className="max-w-lg md:max-w-none">
              <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                Premium Home Car Washing & Detailing Services
              </h2>
              <p className="mt-4 text-[#fbd112]">
                Get a professional car wash at your doorstep with deep cleaning, interior detailing,
                and eco-friendly solutions. Experience a showroom finish for your car!
              </p>
            </div>
          </div>

          {/* ✅ Video with SEO Optimization */}
          <div className="relative">
            <iframe
              className="rounded w-full"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/cNnWoBhm1-Q"
              title="Home Car Washing & Detailing Video"
              aria-label="Watch how our professional car cleaning service works"
              style={{ border: "none" }} 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

        </div>
      </section>
    </div>
  );
}

export default HomeWashing;
