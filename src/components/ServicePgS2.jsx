import React from 'react'

function ServicePgS2() {
  return (
    <div>
      <div className="hero bg-[#031831] min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=720,h=479,fit=crop,trim=0;0;361.38461538461536;0/AMq4XNxDqjS1GZ55/red-carpet-1080-x-1080-px-7-mk3v5ErbyXcwZ9EB.png"
            className="lg:w-[800px] lg:h-[500px] sm:w-[400px] sm:h-[300px] rounded-lg bg-[#031831] mx-auto" // Center image and make it responsive
          />
          <div className="text-center lg:text-left px-4 sm:px-8"> {/* Center text on small screens */}
            <h1 className="text-3xl lg:text-5xl font-bold text-[#fbd112] sm:text-center mb-4">Door-step car cleaning and care</h1>
            <p className="text-base lg:text-lg text-white py-6 mb-10 sm:text-center">
              Home car wash and care services offer the ultimate convenience for busy car owners by bringing professional cleaning and detailing directly to your doorstep.
              No need to waste time driving to a car wash; instead, you can relax at home or work while experts take care of your vehicle. These services include exterior hand washes, waxing, interior detailing, engine bay cleaning, headlight restoration, and more, all performed with high-quality, eco-friendly products.
              Not only do they save you time, but they also help protect your car’s value by maintaining its appearance and functionality. Regular care ensures your car stays looking new, improves safety, and extends its lifespan. With customizable packages tailored to your needs, home car wash services offer a hassle-free, efficient, and environmentally friendly solution to keeping your car in top condition.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicePgS2;
