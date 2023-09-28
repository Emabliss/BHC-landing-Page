import Image from "next/image";
import style from "./hero.module.css";

const Hero = () => {
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
          src="/skyline.jpg"
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
