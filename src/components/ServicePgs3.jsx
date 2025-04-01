import React from 'react';

function ServicePgs3() {
  return (
    <div>
      {/* Hero Section with Background Image */}
      <div
        className="hero h-140"
        style={{
          backgroundImage: "url(https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=2448,h=1092,fit=crop,trim=0;0;224.15094339622644;0/AMq4XNxDqjS1GZ55/yellow-and-gray-monochrome-car-wash-presentation-1-A1aPe5RRBKh0w2lA.png)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold whitespace-nowrap text-blue-950 sm:ml-0">Shinywagon is</h1>
            <h2 className="mb-5 text-5xl font-bold whitespace-nowrap text-blue-950 sm:ml-0">Hassle-Free!</h2>
          </div>
        </div>
      </div>

      {/* Information Section (Boxes with text and images) */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Box 1: Power Source */}
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=678,h=500,fit=crop,trim=0;255.13513513513513;0;198.9189189189189/AMq4XNxDqjS1GZ55/yellow-and-gray-monochrome-car-wash-presentation-4-m7V32r4MX2TqbPXW.png" // Power icon
              alt="Power Source"
              className="w-30 h-30 "
            />
            <h3 className="font-bold text-lg text-[#031831] text-center">We Bring Our Own Power-Source</h3>
            <p className="text-center text-gray-600 mt-2">
              No need for external power; we bring everything for a seamless service.
            </p>
          </div>

          {/* Box 2: Water Buckets */}
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=678,h=500,fit=crop,trim=0;255.13513513513513;0;198.9189189189189/AMq4XNxDqjS1GZ55/yellow-and-gray-monochrome-car-wash-presentation-5-d951MR06JBUONog7.png" // Water bucket icon
              alt="Water Buckets"
              className="w-30 h-30 "
            />
            <h3 className="font-bold text-lg text-[#031831] text-center">We Use Only Two Buckets of Water</h3>
            <p className="text-center text-gray-600 mt-2">
              We conserve water while delivering top-notch cleaning services.
            </p>
          </div>

          {/* Box 3: Services */}
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=678,h=500,fit=crop,trim=0;255.13513513513513;0;198.9189189189189/AMq4XNxDqjS1GZ55/yellow-and-gray-monochrome-car-wash-presentation-7-AE0PEB6BMzHP9zqy.png" // Services icon
              alt="Services"
              className="w-30 h-30 "
            />
            <h3 className="font-bold text-lg text-[#031831] text-center">16+ Services at Your Door-Step</h3>
            <p className="text-center text-gray-600 mt-2">
              A wide variety of services tailored to your needs, right at your door.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicePgs3;
