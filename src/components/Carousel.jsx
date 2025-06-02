import React, { useState, useEffect } from "react";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      title: "Track & Verify Credentials, Hassle-Free",
      description:
        "Easily manage issued certificates, track views, and allow recipients to verify credentials with one click.",
    },
    {
      title: "Digital Badge Management Made Simple",
      description:
        "Create, customize, and distribute professional digital badges with built-in verification and analytics.",
    },
    {
      title: "Secure Certificate Platform",
      description:
        "Issue tamper-proof certificates with blockchain verification and real-time tracking capabilities.",
    },
    {
      title: "Streamlined Credential Workflow",
      description:
        "Automate your certification process from creation to verification with our intuitive platform.",
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative overflow-hidden rounded-4xl border border-white/30 shadow-xl ">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0 relative">
              <div className="bg-white/30 px-8 py-10 min-h-[180px] flex flex-col justify-center ">
                <div className="relative z-10">
                  <h1 className="text-white text-2xl md:text-3xl font-bold mb-2 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-white/90 text-sm md:text-base max-w-xl leading-relaxed">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-6 left-8 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? "w-8 h-2 bg-white"
                  : "w-2 h-2 bg-white/50 "
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
