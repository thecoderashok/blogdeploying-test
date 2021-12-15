import Link from 'next/link'
import React from 'react';
// import Layout, { siteTitle } from '../components/layout'
// import Date from '../components/date'
import PostCard from '../Components/Postcard';
import Footer from '../Components/Footer';
import styles from '../styles/Home.module.css';
import { BsArrowRightCircle } from 'react-icons/bs';
import { getSortedPostsData} from '../lib/post';


export default function Home({ allPostsData}) {

  // get all categories 
  const allcategory = (allPostsData.map(post => post.category));
  // console.log(postall)
  // Remove duplicate category - twice to show once
  const SingleCategory = new Set(allcategory);

  // Set() TO convert Array for maping all items
  const particularCategory = Array.from(SingleCategory);

  
  return (
      <>
      
       <section className={styles.postSection}>
         <div className={styles.post_section_header}>
            <h1 className={styles.postSectionTitle}>Recent</h1>
         </div>
          {allPostsData.map((post, index) => (
              <PostCard post={post} key={index}/>
              
            )).slice(0, 3)}
       </section>

       {particularCategory.map((categoryItem, index) => (
         
          <section key={index} className={styles.postSection}>
            <div className={styles.post_section_header} >
              <h1 className={styles.postSectionTitle} style={{textTransform:"capitalize"}}>{categoryItem}</h1>
              <Link href="/blog/[category]" as={`/blog/${categoryItem}`} passHref><a className={styles.seeall_btn}>See all <BsArrowRightCircle style={{ marginBottom:'-2'}}/></a></Link>
            </div>

            {allPostsData.filter(allPostsData => allPostsData.category === categoryItem).map((post, index) => (
              <PostCard post={post} key={index}/>
            )).slice(0, 3)}

          </section>

        ))}

           {/* {allPostsData.filter(allPostsData => allPostsData.category === allset).map((post, index) => (
              <PostCard post={post} key={index}/>
            )).slice(0, 1)} */}





        {/* <section className={styles.postSection}>
         <div className={styles.post_section_header}>
            <h1 className={styles.postSectionTitle}>Design</h1>
            <Link href="/blog/design" passHref><a className={styles.seeall_btn}>See all <BsArrowRightCircle style={{ marginBottom:'-2'}}/></a></Link>
        </div>
          {allPostsData.filter(allPostsData => allPostsData.category === 'design').map((post, index) => (
              <PostCard post={post} key={index}/>
            ))}
       </section>  */}

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