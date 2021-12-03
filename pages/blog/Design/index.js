import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../../../styles/Home.module.css'
import { getSortedPostsData } from '../../../lib/post'


export default function BlogPage({allPostsData}){
    
    return (
      <div>
          <Head>
              <title>Design</title>
          </Head>
              <section className={styles.postSection}>
      <div className={styles.post_section_header}>
        <h1 className={styles.postSectionTitle}>Design</h1>
        
       
      </div>
      {allPostsData.filter(allPostsData => allPostsData.category === 'design').map(({ id, category,date,tags, description, title, readtime, coverimage }) => (
       
       <li key={id}>
            <Link href="/[category]/[id]" as={`/${category}/${id}`} passHref>
               <div className={styles.postContainer}>
            <div className={styles.postbox__postDetails}>
                <h2 className={styles.postTitle}>{title}</h2>
                <p className={styles.postDescription}>{description}</p>
                <div className={styles.postTag}>{tags}</div>
                
                <div className={styles.postBottomContainer}>
                  <span className={styles.postdate}>{date}</span>
                  <span className={styles.postReadtime}>{readtime}</span>
              </div>
            </div>
             <img className={styles.coverimage} src={coverimage} alt={title}/>
        </div>
      </Link>
    </li>


      )).slice(0, 3)}
    </section>
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