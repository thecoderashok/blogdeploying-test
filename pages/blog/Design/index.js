import React from 'react'
import Head from 'next/head'
import styles from '../../../styles/Home.module.css'
import PostCard from '../../../Components/Postcard'
import { getSortedPostsData } from '../../../lib/post'

export default function Design({ allPostsData }){
    
    return (
      <div>
          <Head>
              <title>Design</title>
          </Head>
          <section className={styles.postSection}>
              <div className={styles.post_section_header}>
                  <h1 className={styles.postSectionTitle}>Design</h1>
              </div>
              {allPostsData.filter(allPostsData => allPostsData.category === 'design').map((post, index) => (
                    <PostCard post={post} key={index}/>
                  ))}
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