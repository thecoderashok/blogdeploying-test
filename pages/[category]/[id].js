import Head from 'next/head'
// import Layout from '../../components/layout'
// import Date from '../../components/date'
import styles from '../../styles/Home.module.css'
import { getAllPostIds, getPostData } from '../../lib/post'

export default function Post({ postData }) {
  return (
  <>
      <Head>
        <title>{postData.title}</title>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta property="og:type" content="article" />
      </Head>
      <div className={styles.PostContentWrapper}>
      <div className={styles.postheader}>
          <h1 className={styles.postContentTitle}>{postData.title}</h1>
          <p className={styles.postContentDescription}>{postData.description}</p>
          <div className={styles.postTag}>{postData.tags}</div>
          <div className={styles.postDateandTime}>
              <span className={styles.postdate}>{postData.date}</span>
              <span className={styles.postReadtime}>{postData.readtime}</span>
          </div>
          <hr/>
        </div>
        <article className={styles.postdiv} dangerouslySetInnerHTML={{ __html: postData.contentHtml }}/>
        <hr />

        {/* Author details  */}
        <div className={styles.author_Details_Container}>
          <h3 className={styles.author_container_title}>Author:</h3>
            <div className={styles.authorCard}>
            <img className={styles.author_image} src={postData.authorImage} alt="" />
              <div className={styles.author_card_texts}>
                <h3 className={styles.author_name}>{postData.author}</h3>
                <span className={styles.author_about}>{postData.authorBio}</span>

                <p className={styles.author_description}>{postData.authorDescription}</p>
              </div>
            </div>
        </div>
   </div>
   </>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.category, params.id)
  return {
    props: {
      postData
    }
  }
}