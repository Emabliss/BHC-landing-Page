import Image from "next/image";
import style from "./features.module.css";

const Features = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>We have cool offers for you</h1>
      <div className={style.wrapper}>
        <div className={style.featuredItem}>
          <Image
            src="/bg.jpg"
            alt=""
            className={style.image}
            layout="responsive"
            width={400}
            height={300}
          />
          <h2>Lorem, ipsum dolor.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            numquam voluptatem quisquam enim? Cupiditate beatae corporis
            necessitatibus ea. Exercitationem, laboriosam?
          </p>
        </div>
        <div className={style.featuredItem}>
          <Image
            src="/bg.jpg"
            alt=""
            className={style.image}
            layout="responsive"
            width={400}
            height={300}
          />
          <h2>Lorem, ipsum dolor.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            numquam voluptatem quisquam enim? Cupiditate beatae corporis
            necessitatibus ea. Exercitationem, laboriosam?
          </p>
        </div>
        <div className={style.featuredItem}>
          <Image
            src="/bg.jpg"
            alt=""
            className={style.image}
            layout="responsive"
            width={400}
            height={300}
          />
          <h2>Lorem, ipsum dolor.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            numquam voluptatem quisquam enim? Cupiditate beatae corporis
            necessitatibus ea. Exercitationem, laboriosam?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
