import Link from 'next/link'
// import Layout, { siteTitle } from '../components/layout'
// import Date from '../components/date'
import styles from '../styles/Home.module.css'
import { getSortedPostsData, getDesignPosts, getEngineeringPosts} from '../lib/post'

export default function Home({ allPostsData, designPosts, engineeringPosts}) {
  // Delcare what category should be shown
  // const [viewCategory, setCategory] = useState('all');

  return (
   
    <div>
      <section className={styles.postSection}>
      <h1 className={styles.postSectionTitle}>All Posts</h1>
      {allPostsData.map(({ id, category,date, tags, description, title, readtime }) => (
       <li key={category}>
            <Link href="/[category]/[id]" as={`/${category}/${id}`} passHref>
               <div className={styles.postContainer}>
            <h2 className={styles.postTitle}>{title}</h2>
            <p className={styles.postDescription}>{description}</p>
            <div className={styles.postTag}>{tags}</div>
            <div className={styles.postBottomContainer}>
              <span className={styles.postdate}>{date}</span>
              <span className={styles.postReadtime}>{readtime}</span>

          </div>
          
        </div>
      </Link>
    </li>
      ))}
    </section>

      <section className={styles.postSection}>
      <h1 className={styles.postSectionTitle}>Design</h1>
      <Link href="/blog/Design" passHref><a className={styles.seeall_btn}>See all</a></Link>
      {designPosts.map(({ id, category,date, tags, description, title, readtime, coverimage }) => (
       <li key={category}>
            <Link href="/[category]/[id]" as={`/${category}/${id}`} passHref>
               <div className={styles.postContainer}>
            <h2 className={styles.postTitle}>{title}</h2>
            <p className={styles.postDescription}>{description}</p>
            <div className={styles.postTag}>{tags}</div>
            <div className={styles.postBottomContainer}>
              <span className={styles.postdate}>{date}</span>
              <span className={styles.postReadtime}>{readtime}</span>
            </div>
            <img className={styles.coverimage} src={coverimage} alt={title}/>
          
          
        </div>
      </Link>
      
    </li>
      ))}

    </section>


      <section className={styles.postSection}>
      <h1 className={styles.postSectionTitle}>Engineerign</h1>
      <Link href="/blog/Engineering" passHref><a className={styles.seeall_btn}>See all</a></Link>

      {engineeringPosts.map(({ id, category,date, tags, description, title, readtime }) => (
       <li key={id}>
            <Link href="/[category]/[id]" as={`/${category}/${id}`} passHref>
               <div className={styles.postContainer}>
            <h2 className={styles.postTitle}>{title}</h2>
            <p className={styles.postDescription}>{description}</p>
            <div className={styles.postTag}>{tags}</div>
            <div className={styles.postBottomContainer}>
              <span className={styles.postdate}>{date}</span>
              <span className={styles.postReadtime}>{readtime}</span>
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
  const allPostsData = getSortedPostsData()
  const designPosts = getDesignPosts()
  const engineeringPosts = getEngineeringPosts()
  return {
    props: {
      allPostsData,
      designPosts,
      engineeringPosts
    }
  }
}