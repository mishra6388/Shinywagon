import React, { useState, useEffect, Suspense, lazy } from "react";

function HeroSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [ContactForm, setContactForm] = useState(null);
  const [animatedText, setAnimatedText] = useState("");
  const textArray = ["Box Office News!", "Car Wash", "Vacuum Wash"];
  const typingSpeed = 100;

  useEffect(() => {
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const typeEffect = () => {
      const currentText = textArray[textIndex];

      if (!isDeleting) {
        setAnimatedText(currentText.substring(0, charIndex + 1));
        charIndex++;
      } else {
        setAnimatedText(currentText.substring(0, charIndex - 1));
        charIndex--;
      }

      if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => (isDeleting = true), 1000);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % textArray.length;
      }

      setTimeout(typeEffect, isDeleting ? 50 : typingSpeed);
    };

    typeEffect();
  }, []);

  // ✅ Load form component only when button is clicked
  const handleOpenForm = () => {
    setIsOpen(true);
    if (!ContactForm) {
      import("./ContactForm").then((module) => {
        setContactForm(() => module.default);
      });
    }
  };

  return (
    <div className="hero bg-[#fbd112] lg:h-[600px] md:h-[800px] flex items-center px-5 p-10">
      <div className="hero-content flex flex-col-reverse lg:flex-row items-center w-full max-w-6xl mx-auto">
        
        {/* Text Section */}
        <div className="text-left lg:text-left w-full lg:w-1/2 space-y-7 md:text-center">
          <h1 className="text-3xl lg:text-5xl font-bold">Premium</h1>
          <h2 className="text-3xl lg:text-5xl text-[#031831] font-bold transition-all duration-500">
            {animatedText}
            <span className="animate-blink">|</span>
          </h2>
          <h2 className="text-3xl lg:text-5xl font-bold">at your Door-Step</h2>
          
          {/* Get Started Button */}
          <button 
            onClick={handleOpenForm}
            className="bg-[#031831] text-white px-6 py-3 rounded-lg shadow-lg mt-4"
          >
            Send Inquiry
          </button>
        </div>

        {/* Optimized Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/001/624/156/original/carwash-staff-cleaning-a-car-free-video.jpg" // Replace with actual image URL
            alt="Car Wash Service"
            className="w-[400px] h-[300px] lg:h-[450px] lg:w-[550px] rounded-lg shadow-2xl"
            loading="eager"
            width="550"
            height="450"
            decoding="async"
          />
        </div>
      </div>

      {/* Lazy-loaded Contact Form (Only when button is clicked) */}
      {isOpen && ContactForm && (
        <Suspense fallback={<div>Loading...</div>}>
          <ContactForm isOpen={isOpen} setIsOpen={setIsOpen} />
        </Suspense>
      )}
    </div>
  );
}

export default HeroSection;
