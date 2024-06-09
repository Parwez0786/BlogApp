import Link from "next/link";
import React from "react";
import styles from "./menuPosts.module.css";
import Image from "next/image";
const getData1 = async (category) => {
  const res = await fetch(
    `http://localhost:3000/api/allCategories?category=${category}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};
const userName = async (email) => {
  //console.log(email);
  const res = await fetch(
    `http://localhost:3000/api/getuniqueuser?email=${email}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }


  return res.json();
};


const MenuPosts = async ({ withImage }) => {
  let list1 = ["style", "coding", "fashion", "culture", "food", "travel"];
  const post0 = await getData1(list1[0]);
  const post1 = await getData1(list1[1]);
 // console.log(post1);
  let user0 = "";
  let user1 = "";
  let user2 = "";
  let user3 = "";
  let user4 = "";
  let user5 = "";
  if (post0.length) {
    const r0 = await userName(post0[0].userEmail);
    user0 = r0.name;
  }

  if (post1.length) {
    const r1 = await userName(post1[0].userEmail);
 //   console.log(r1);
    user1 = r1.name;
  }
  const post2 = await getData1(list1[2]);
  if (post2.length) {
    const r2 = await userName(post2[0].userEmail);
    user2 = r2.name;
  }
  const post3 = await getData1(list1[3]);
  if (post3.length) {
    const r3 = await userName(post3[0].userEmail);
    user3 = r3.name;
  }
  const post4 = await getData1(list1[4]);
  if (post4.length) {
    const r4 = await userName(post4[0].userEmail);
    user4 = r4.name;
  }
  const post5 = await getData1(list1[5]);
  if (post5.length) {
    const r5 = await userName(post5[0].userEmail);
    user5 = r5.name;
  }
  //console.log(post1);

  return (
    <div className={styles.items}>
      <>
        {post5.length ? (
          <Link href="/" className={styles.item}>
            {withImage && (
              <div className={styles.imageContainer}>
                <Image
                  src={post5[0]?.img}
                  alt="sorry"
                  fill
                  className={styles.image}
                />
              </div>
            )}
            <div className={styles.textContainer}>
              <span className={`${styles.category}  ${styles.travel}`}>
                Travel
              </span>
              <h3 className={styles.posTitle}>{post5[0]?.title}</h3>
              <div className={styles.details}>
                <span className={styles.username}>{user5}</span>
                <span className={styles.date}>
                  {post5[0]?.createdAt.substring(0, 10)}
                </span>
              </div>
            </div>
          </Link>
        ) : (
          <></>
        )}

        {post4.length ? (
          <Link href="/" className={styles.item}>
            {withImage && (
              <div className={styles.imageContainer}>
                <Image
                  src={post4[0]?.img}
                  alt=""
                  fill
                  className={styles.image}
                />
              </div>
            )}
            <div className={styles.textContainer}>
              <span className={`${styles.category}  ${styles.food}`}>Food</span>
              <h3 className={styles.posTitle}>{post4[0]?.title}</h3>
              <div className={styles.details}>
                <span className={styles.username}>{user4}</span>
                <span className={styles.date}>
                  {post4[0]?.createdAt.substring(0, 10)}{" "}
                </span>
              </div>
            </div>
          </Link>
        ) : (
          <></>
        )}

        {post2.length ? (
          <Link href="/" className={styles.item}>
            {withImage && (
              <div className={styles.imageContainer}>
                <Image
                  src={post2[0]?.img}
                  alt=""
                  fill
                  className={styles.image}
                />
              </div>
            )}
            <div className={styles.textContainer}>
              <span className={`${styles.category}  ${styles.fashion}`}>
                Fashion
              </span>
              <h3 className={styles.posTitle}>{post2[0]?.title}</h3>
              <div className={styles.details}>
                <span className={styles.username}>{user2}</span>
                <span className={styles.date}>
                  {post2[0]?.createdAt.substring(0, 10)}
                </span>
              </div>
            </div>
          </Link>
        ) : (
          <></>
        )}

        {post3.length ? (
          <Link href="/" className={styles.item}>
            {withImage && (
              <div className={styles.imageContainer}>
                <Image
                  src={post3[0]?.img}
                  alt=""
                  fill
                  className={styles.image}
                />
              </div>
            )}
            <div className={styles.textContainer}>
              <span className={`${styles.category}  ${styles.culture}`}>
                Culture
              </span>
              <h3 className={styles.posTitle}>{post3[0]?.title}</h3>
              <div className={styles.details}>
                <span className={styles.username}>{user3}</span>
                <span className={styles.date}>
                  {post3[0]?.createdAt.substring(0, 10)}
                </span>
              </div>
            </div>
          </Link>
        ) : (
          <></>
        )}

        {post1.length ? (
          <Link href="/" className={styles.item}>
            {withImage && (
              <div className={styles.imageContainer}>
                <Image
                  src={post1[0]?.img}
                  alt=""
                  fill
                  className={styles.image}
                />
              </div>
            )}
            <div className={styles.textContainer}>
              <span className={`${styles.category}  ${styles.coding}`}>
                Coding
              </span>
              <h3 className={styles.posTitle}>{post1[0]?.title}</h3>
              <div className={styles.details}>
                <span className={styles.username}>{user1}</span>
                <span className={styles.date}>
                  {" "}
                  {post1[0]?.createdAt.substring(0, 10)}
                </span>
              </div>
            </div>
          </Link>
        ) : (
          <></>
        )}
      </>
    </div>
  );
};

export default MenuPosts;
