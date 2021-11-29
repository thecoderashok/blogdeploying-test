// import Head from 'next/head'
import Link from 'next/link'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { getSortedPostsData } from '../lib/post'

export default function Home({ allPostsData}) {

  return (
    <div>
      {allPostsData.map(({ id, category,date, tags, description, title, readtime}) => (
    <section className={styles.postSection} key={id}>
      <h1 className={styles.postSectionTitle}>All Posts</h1>
      {/* <Link href="/Blog/Design"><a className={styles.seeAllButton}>See all</a></Link> */}
          <Link href="/[category]/[id]" as={`/${category}/${id}`} passHref>
               <div className={styles.postContainer}><div>
            <h2 className={styles.postTitle}>{title}</h2>
            <p className={styles.postDescription}>{description}</p>
            <div className={styles.postTag}>{tags}</div>
            <div className={styles.postBottomContainer}>
              <span className={styles.postdate}>{date}</span>
              <span className={styles.postReadtime}>{readtime}</span>
            </div>
            
          </div>
          
        </div>
      </Link>
    </section>
      ))}

  </div>
  )
}



export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}