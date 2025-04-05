import React, { useState, useEffect, Suspense } from "react";

function HeroSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [ContactForm, setContactForm] = useState(null);
  const [animatedText, setAnimatedText] = useState("");
  const textArray = ["Waxing and Polishing", "Car Wash", "Vacuum Wash"];
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

  const handleOpenForm = () => {
    setIsOpen(true);
    if (!ContactForm) {
      import("./BookingForm").then((module) => {
        setContactForm(() => module.default);
      });
    }
  };

  return (
    <div className="hero bg-[#fbd112] lg:h-[600px] md:h-[800px] flex items-center px-5 p-10">
      <div className="hero-content flex flex-col-reverse lg:flex-row items-center w-full max-w-6xl mx-auto">
        <div className="text-left lg:text-left w-full lg:w-1/2 space-y-7 md:text-center">
          <h1 className="text-3xl lg:text-5xl font-bold">Premium</h1>
          <h2 className="text-3xl lg:text-5xl text-[#031831] font-bold">
            {animatedText}
            <span className="animate-blink">|</span>
          </h2>
          <h2 className="text-3xl lg:text-5xl font-bold">at your Door-Step</h2>
          <button
            onClick={handleOpenForm}
            className="bg-[#031831] text-white px-6 py-3 rounded-lg shadow-lg mt-4 hover:cursor-pointer"
          >
            Send Enquiry
          </button>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/001/624/156/original/carwash-staff-cleaning-a-car-free-video.jpg"
            alt="Car Wash Service"
            className="w-[400px] h-[300px] lg:h-[450px] lg:w-[550px] rounded-lg shadow-2xl"
          />
        </div>
      </div>

      {isOpen && ContactForm && (
        <Suspense fallback={<div className="text-white">Loading Form...</div>}>
          <ContactForm isOpen={isOpen} setIsOpen={setIsOpen} />
        </Suspense>
      )}
    </div>
  );
}

export default HeroSection;
