import React from 'react'
import styles from './postUser.module.css'
import { getUser } from "@/lib/data";
import Image from 'next/image';
// FETCH DATA WITH AN API
// const getData = async (userId) => {
//     const res = await fetch(`http://localhost:3000/api/users/${userId}`, {cache:'no-store'});
//     if (!res.ok) {
//       throw new Error("Something went wrong", res.status);
//     }
//     return res.json();
//   };
const PostUser = async ({userId}) => {
    // FETCH DATA WITH AN API
    // const user =await getData(userId)
    const user = await getUser(userId )
    // const user = null

    console.log("the user", user)
  return (
    <div className={styles.container}>
    <Image
            src={user.img ? user.img : '/noavatar.png'}
            alt=""
            width={50}
            height={50}
            className={styles.avatar}
          />
          <div className={styles.texts}>

    <span className={styles.title}>Author</span>
    <span className={styles.username}>{user.username}</span>
          </div>
  </div>
  )
}

export default PostUser