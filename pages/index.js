import Link from 'next/link'
import React from 'react';
// import Layout, { siteTitle } from '../components/layout'
// import Date from '../components/date'
import Footer from './Components/Footer';
import styles from '../styles/Home.module.css'
import { BsArrowRightCircle } from 'react-icons/bs';
import { getSortedPostsData} from '../lib/post'

export default function Home({ allPostsData}) {
  // Delcare what category should be shown
  const [viewCategory, setCategory] = React.useState();

  // console.log(allPostsData.filter(allPostsData => allPostsData.category === 'design'));

  return (
   
    <div>

      <section className={styles.postSection}>
      <div className={styles.post_section_header}>
        <h1 className={styles.postSectionTitle}>Recent</h1>
       
      </div>
      {allPostsData.map(({ id, category,date,tags, description, title, readtime, coverimage }) => (
       
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


      <section className={styles.postSection}>
      <div className={styles.post_section_header}>
        <h1 className={styles.postSectionTitle}>Design</h1>
        <Link href="/blog/Design" passHref><a className={styles.seeall_btn}>See all <BsArrowRightCircle/></a></Link>
       
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


      <section className={styles.postSection}>
      <div className={styles.post_section_header}>
        <h1 className={styles.postSectionTitle}>Productivity</h1>
        <Link href="/blog/Productivity" passHref><a className={styles.seeall_btn}>See all <BsArrowRightCircle/></a></Link>
       
      </div>
      {allPostsData.filter(allPostsData => allPostsData.category === 'productivity').map(({ id, category,date,tags, description, title, readtime, coverimage }) => (
       
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




        <Footer/>
      </div>
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