import Image from "next/image";
import styles from "./singlePost.module.css";
const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src="https://images.pexels.com/photos/26087316/pexels-photo-26087316/free-photo-of-a-woman-in-a-wedding-dress-standing-on-a-rock.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            src="https://images.pexels.com/photos/26087316/pexels-photo-26087316/free-photo-of-a-woman-in-a-wedding-dress-standing-on-a-rock.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={50}
            height={50}
            className={styles.avatar}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Terry Jefferson</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae aut a cum rem. Dolore ut animi rerum obcaecati omnis, nihil tempora tenetur dolor tempore odio laboriosam voluptate modi ipsa. Aperiam.
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
