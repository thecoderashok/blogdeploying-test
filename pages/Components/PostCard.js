import Link from "next/link"
import styles from '../../styles/Home.module.css'

export default function Post({ post }) {
    return (
      <>
        <Link href="/blog/[category]/[id]" as={`/blog/${post.category}/${post.id}`} passHref>
         <div className={styles.postContainer}>
                <div className={styles.postbox__postDetails}>
                    <h2 className={styles.postTitle}>{post.title}</h2>
                    <p className={styles.postDescription}>{post.description}</p>
                    <div className={styles.postTag}>{post.tags}</div>
            
                <div className={styles.postBottomContainer}>
                    <span className={styles.postdate}>{post.date}</span>
                    <span className={styles.postReadtime}>{post.readtime}</span>
                </div>
            </div>
            <img className={styles.coverimage} src={post.coverimage} alt={post.title}/>
        </div>
      </Link>
      </>
    )
}
