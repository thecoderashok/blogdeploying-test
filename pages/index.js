import Link from 'next/link'
// import Layout, { siteTitle } from '../components/layout'
// import Date from '../components/date'
import styles from '../styles/Home.module.css'
import { getSortedPostsData, getDesignPosts, getProductivityPosts} from '../lib/post'

export default function Home({ allPostsData, designPosts, productivityPosts}) {
  // Delcare what category should be shown
  // const [viewCategory, setCategory] = useState('all');

  return (
   
    <div>
      <section className={styles.postSection}>
      <div className={styles.post_section_header}>
        <h1 className={styles.postSectionTitle}>Recent</h1>
      </div>
      {allPostsData.map(({ id, category,date,tags, description, title, readtime, coverimage }) => (
       <li key={category}>
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
          {/* <div className={styles.post_coverImage}>
          </div> */}
        </div>
      </Link>
    </li>
      )).slice(0, 3)}
    </section>

      <section className={styles.postSection}>
      <div className={styles.post_section_header}>
        <h1 className={styles.postSectionTitle}>Design</h1>
        <Link href="/blog/Design" passHref><a className={styles.seeall_btn}>See all</a></Link>
      </div>
      {designPosts.map(({ id, category,date, tags, description, title, readtime, coverimage }) => (
       <li key={category}>
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
          {/* <div className={styles.post_coverImage}>
          </div> */}
        </div>
      </Link>
      
    </li>
      )).slice(0, 2)}

    </section>


      <section className={styles.postSection}>
      <div className={styles.post_section_header}>
        <h1 className={styles.postSectionTitle}>Productivity</h1>
        <Link href="/blog/Productivity" passHref><a className={styles.seeall_btn}>See all</a></Link>
      </div>

      {productivityPosts.map(({ id, category,date, tags, description, title, readtime, coverimage }) => (
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
          {/* <div className={styles.post_coverImage}>
          </div> */}
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
  const designPosts = getDesignPosts()
  const productivityPosts = getProductivityPosts()
  return {
    props: {
      allPostsData,
      designPosts,
      productivityPosts
    }
  }
}