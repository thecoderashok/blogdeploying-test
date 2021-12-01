import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../../../styles/Home.module.css'
import { getProductivityPosts } from '../../../lib/post'

export default function BlogPage({ productivityPosts}){
    
    return (
      <div>
          <Head>
              <title>Engineering</title>
          </Head>
          <section className={styles.postSection}>
      <h1 className={styles.postSectionTitle}>Productivity</h1>
      {productivityPosts.map(({ id, category,date, tags, description, title, readtime, coverimage }) => (
       <li key={category}>
            <Link href="/[category]/[id]" as={`/${category}/${id}`} passHref>
            <div className={styles.postContainer}>
            <div className="postbox__postDetails">
                <h2 className={styles.postTitle}>{title}</h2>
                <p className={styles.postDescription}>{description}</p>
                <div className={styles.postTag}>{tags}</div>
                
                <div className={styles.postBottomContainer}>
                  <span className={styles.postdate}>{date}</span>
                  <span className={styles.postReadtime}>{readtime}</span>
              </div>
            </div>
             <img className={styles.coverimage} src={coverimage} alt={title}/>
          {/* <div className={styles.post_coverImage}>
          </div> */}
        </div>
      </Link>
      
    </li>
      )).slice(0, 2)}

    </section>
        </div>
    )
  }
  
  export async function getStaticProps() {
    const productivityPosts = getProductivityPosts()
    return {
      props: {
        productivityPosts
      }
    }
  }