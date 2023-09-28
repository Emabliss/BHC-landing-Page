"use client";
import Image from "next/image";
import style from "./hero.module.css";
import { useEffect, useMemo, useState } from "react";

// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

const Hero = () => {
  const images = useMemo(() => ["skyline.jpg", "bg.jpg", "backG.jpg"], []);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment the current image index
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change images every 3 seconds (adjust as needed)

    return () => {
      // Clear the interval when the component unmounts
      clearInterval(intervalId);
    };
  }, [images]);

  return (
    <div className={style.container}>
      <div className={style.intro}>
        <div>
          <span className={style.titleHeader}>Bamatop</span>
          <h1 className={style.introTitle}>Ultimate in diversity.</h1>
        </div>
        <p className={style.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. repudiandae
          amet consectetur adipisicing elit. repudiandae!amet consectetur
          adipisicing elit. repudiandae!!
        </p>
        <button className={style.button}>Join Our Team</button>
      </div>
      <div className={style.imageContainer}>
        <Image
          src={`/${images[currentImageIndex]}`}
          alt=""
          layout="responsive"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};

export default Hero;
