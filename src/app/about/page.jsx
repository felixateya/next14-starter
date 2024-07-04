import Image from "next/image";
import styles from './about.module.css'

const ABoutPage = () => {
  // console.log('Let\'s check where it works')
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Agency</h2>
        <h1 className={styles.title}>We create digital ideas that are bigger, bolder, braver and better</h1>
        <p className={styles.desc}>We create digital ideas that are bigger, bolder, braver and better. We believe in good ideas, flexibility and precision. We&apos;re World&apos;s best consulting & finance solution provider. Wide range of web and software development services.</p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Years of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Years of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Years of experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image className={styles.img} src='/about.png' alt='About Image' fill/>
      </div>
    </div>
  );
};

export default ABoutPage;
