import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router';
import { getSortedPostsData} from '../../lib/post';
import styles from '../../styles/Home.module.css'
// import { getAllPostIds } from '../../lib/post'
import PostCard from '../../Components/Postcard';

export default function Category({ allPostsData }) {
    const router = useRouter();
    const categoryname = router.query.category

  return (
    <>
          <Head>
              <title style={{textTransform: "capitalize"}}>{categoryname}</title>
          </Head>
          <section className={styles.postSection}>
              <div className={styles.post_section_header}>
                  <h1 className={styles.postSectionTitle}>All posts of {categoryname}.</h1>
              </div>
              {allPostsData.filter(allPostsData => allPostsData.category === `${categoryname}`).map((post, index) => (
                    <PostCard post={post} key={index}/>
                  ))}
         </section>

    </>
  )
}

export async function getStaticPaths() {
  const allPostsData = getSortedPostsData()
  const paths = allPostsData.map((element) => {
    return{
      params: {
        category: element.category
      }
    }
  })
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
      props: {
        allPostsData,
    
      }
    }
  }



