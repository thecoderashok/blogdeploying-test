import Link from 'next/link'
import React from 'react';
// import Layout, { siteTitle } from '../components/layout'
// import Date from '../components/date'
import PostCard from '../Components/PostCard';
import Footer from '../Components/Footer';
import styles from '../../styles/Home.module.css'

import { getSortedPostsData} from '../../lib/post'

export default function Home({ allPostsData}) {

  return (
      <>
       <section className={styles.postSection}>
         <div className={styles.post_section_header}>
            <h1 className={styles.postSectionTitle}>Blog</h1>
         </div>
          {allPostsData.map((post, index) => (
              <PostCard post={post} key={index}/>
            ))}
       </section>
          <Footer/>
      </>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  
  return {
    props: {
      allPostsData,
      
    }
  }
}
