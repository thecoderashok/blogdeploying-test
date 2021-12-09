import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

function PostCard({ post }) {
 
  const tag = (post.tags);

  const tags = tag.map((item, index) => (
    <li key={index} className={`"row", ${styles.tagItem}`}>{item}</li>
  ))


  return (
    <div>
      <Link href="/blog/post/[id]" as={`/blog/post/${post.id}`} passHref>
         <div className={styles.postContainer}>
                <div className={styles.postbox__postDetails}>
                    <h2 className={styles.postTitle}>{post.title}</h2>
                    <p className={styles.postDescription}>{post.description}</p>
                    
                    <div className={styles.postTag}>{tags}</div>

                <div className={styles.postBottomContainer}>
                    <span className={`${styles.postdate}, ${styles.span_desktop}`}>{post.date}</span>
                    <span className={`${styles.postReadtime}, ${styles.span_desktop}`}>{post.readtime}</span>
                </div>
              
            </div>
            <img className={styles.coverimage} src={post.coverimage} alt={post.title}/>
        </div>
      </Link>
    </div>
  )
}

export default PostCard;

