import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../../../styles/Home.module.css'
import { getEngineeringPosts } from '../../../lib/post'

export default function BlogPage({engineeringPosts}){
    
    return (
      <div>
          <Head>
              <title>Engineering</title>
          </Head>
        <section className={styles.postSection}>
        <h1 className={styles.postSectionTitle}>Engineering</h1>

        {engineeringPosts.map(({ id, category,date, tags, description, title, readtime }) => (
         <li key={id}>
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
      </li>
        ))}
      </section>
        </div>
    )
  }
  
  export async function getStaticProps() {
    const engineeringPosts = getEngineeringPosts()
    return {
      props: {
        engineeringPosts
      }
    }
  }