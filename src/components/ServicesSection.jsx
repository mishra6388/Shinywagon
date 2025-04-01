import React from "react";

function ServicesSection() {
  return (
    <section className="relative py-10 bg-gray-100">
      <div className="max-w-6xl mx-auto px-5 text-center">
        {/* Updated SEO-Friendly Heading */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-[#031831]">
          Premium Car Cleaning & Detailing Services 🚗
        </h2>
        <p className="text-gray-600 mb-8">
          Get professional car washing, deep interior cleaning, and polishing at your doorstep.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {/* Exterior Wash */}
          <div className="p-5 bg-white shadow-md rounded-lg relative text-[#031831]">
            <h3 className="text-xl font-semibold mb-2">🚗 Exterior Car Wash</h3>
            <p className="text-gray-600">Thorough cleaning with eco-friendly shampoo for a fresh look.</p>
            <div className="absolute top-0 right-5 animate-ping text-yellow-400 text-2xl">⭐</div>
          </div>

          {/* Interior Cleaning */}
          <div className="p-5 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-[#031831]">🧼 Deep Interior Cleaning</h3>
            <p className="text-gray-600">Vacuuming, dashboard polishing, and odor removal.</p>
          </div>

          {/* Detailing & Polishing */}
          <div className="p-5 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-[#031831]">✨ Car Detailing & Polishing</h3>
            <p className="text-gray-600">Waxing, polishing, and ceramic coating for a shiny finish.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
