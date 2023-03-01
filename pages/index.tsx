import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

export default function Home() {
  const slides = [
    {
      url: "/images/Sans titre-1.png",
    },
    {
      url: "/images/Sans titre-2.png",
    },
    {
      url: "/images/Sans titre-3.png",
    },
    {
      url: "/images/Sans titre-4.png",
    },
    {
      url: "/images/Sans titre-5.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [show, setShow] = useState(true);

  const toggleShow = () => {
    setShow((show) => !show);
  };

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLast = currentIndex === slides.length - 1;
    const newIndex = isLast ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: any) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="bg-[#729EA8] w-screen h-screen">
      <Head>
        <title>Skifall</title>
      </Head>
      <div className="flex justify-between items-center bg-[#006378]">
        <Image alt="Logo" src="/images/Skifall.png" width="75" height="500" />
        <div className="flex-column">
          <h1 className="text-align-center font-RobotoMono font-semiold text-xl">
            {show && <p>This is Skifall !</p>}
          </h1>
          <h1 className="text-align-center font-RobotoMono font-semiold text-xl">
            {!show && <p>This is Ski-feur !</p>}
          </h1>
        </div>
        <Image
          alt="Logo"
          src="/images/Skifall.png"
          width="75"
          height="500"
          onClick={toggleShow}
        />
      </div>

      <div className="w-screen my-5">
        {/* <button onClick={toggleShow}>Show name</button> */}
        <div className="w-full flex items-center justify-center relative group">
          <Image
            alt="carroussel"
            src={`${slides[currentIndex].url}`}
            width="500"
            height="500"
          />
          <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
        </div>
        <div className="flex top-4 justify-center">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
