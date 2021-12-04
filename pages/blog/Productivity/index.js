import React from 'react'
import Head from 'next/head'
import styles from '../../../styles/Home.module.css'
import PostCard from '../../Components/PostCard'
import { getSortedPostsData } from '../../../lib/post'

export default function Productivity({ allPostsData }){
    
    return (
      <div>
          <Head>
              <title>Productivity</title>
          </Head>
          <section className={styles.postSection}>
              <div className={styles.post_section_header}>
                  <h1 className={styles.postSectionTitle}>Productivity</h1>
              </div>
              {allPostsData.filter(allPostsData => allPostsData.category === 'productivity').map((post, index) => (
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