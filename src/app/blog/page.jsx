import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";
const BlogPage = () => {
  const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
  return (
    <div className={styles.container}>
      {arr.map((num)=>(
        <div key={num} className={styles.post}>
        <PostCard />
      </div>
      ))}
      
    </div>
  );
};

export default BlogPage;
