import React from 'react'
function HweworkCard() {
  const steps = [
    {
      id: 1,
      title: "Book Your Service ",
      description: "Choose your desired car cleaning package and book an appointment online.",
      image: "https://img.freepik.com/premium-photo/experience-convenience-mobile-car-wash-book-your-service-today_1112614-8726.jpg", // Replace with actual image URL
    },
    {
      id: 2,
      title: "We Come to You",
      description: "Our professional team arrives at your location with all necessary equipment.",
      image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=678,h=692,fit=crop,trim=0;12.485549132947977;0;9.364161849710982/AMq4XNxDqjS1GZ55/red-carpet-1080-x-1080-px-6-mxB48k6l2aTyRxQ1.png", // Replace with actual image URL
    },
    {
      id: 3,
      title: "Enjoy Your Clean Car",
      description: "Relax while we give your car a showroom finish. Drive away happy!",
      image: "https://img.freepik.com/free-photo/professional-washer-blue-uniform-washing-luxury-car-with-water-gun-open-air-car-wash_496169-333.jpg", // Replace with actual image URL
    },
  ];

  return (
    <div className="py-10 bg-gray-100 text-[#031831] text-center ">
      <h2 className="text-3xl font-bold text-[#031831] mb-6">How We Work</h2>
      <div className="max-w-6xl mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">


        {steps.map((step) => (
          <div key={step.id} className="bg-white p-5 rounded-lg shadow-md">
            <img
              src={step.image}
              alt={step.title}
              className="w-full h-70 md:50 sm:50 object-cover rounded"
            />
            <h3 className="text-xl font-semibold mt-4">{step.title}</h3>
            <p className="text-gray-600 mt-2">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HweworkCard;

 