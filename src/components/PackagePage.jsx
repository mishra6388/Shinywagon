import React from 'react';

const packages = [
  {
    id: 1,
    title: "Car Wash + Tyre Polish + Dashboard Polish + Door Polish + Vacuum Cleaning",
    price: 399,
    original: 799,
    extra: "",
  },
  {
    id: 2,
    title: "Glass and Body Polish",
    price: 499,
    original: 999,
    extra: "+ Car Wash + Tyre Polish + Dashboard Polish + Door Polish + Vacuum Cleaning",
  },
  {
    id: 3,
    title: "Interior Full Deep Cleaning + Roof Cleaning + Dashboard",
    price: 999,
    original: 1499,
    extra: "+ Car Wash + Tyre Polish + Dashboard Polish + Door Polish + Vacuum Cleaning",
  },
  {
    id: 4,
    title: "Deep Cleaning + Interior with Coat and Rubbing",
    price: 1499,
    original: 1999,
    extra: "+ Car Wash + Tyre Polish + Dashboard Polish + Door Polish + Vacuum Cleaning",
  },
  {
    id: 5,
    title: "Hybrid Ceramic Coating",
    price: 1999,
    original: 2999,
    extra: "+ Car Wash + Tyre Polish + Dashboard Polish + Door Polish + Vacuum Cleaning",
  },
];

const PackagePage = () => {
  return (
    <div className="min-h-screen bg-[#031831] text-gray-300 py-10 px-4">
      <h1 className="text-4xl text-[#FBD112] font-bold text-center mb-8">ShinyWagon Car Wash Service Packages</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {packages.map((pkg) => (
          <div key={pkg.id} className="bg-[#02111e] rounded-2xl p-6 shadow-lg">
            <h2 className="text-2xl text-[#FBD112] font-semibold mb-3">
              {pkg.id}. {pkg.title}
            </h2>

            <p className="mb-3">
              <strong>Includes:</strong> Car Wash + Tyre Polish + Dashboard Polish + Door Polish + Vacuum Cleaning {pkg.extra}
            </p>

            <div className="flex justify-center items-center gap-4 my-4">
              <span className="line-through text-gray-500 text-lg font-medium">₹{pkg.original}</span>
              <span className="text-[#FBD112] text-3xl font-bold">₹{pkg.price}</span>
            </div>

            <div className="flex justify-center">
              
            </div>
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default PackagePage;
