import React from 'react'
import Link from 'next/link'
import styles from '../styles/Footer.module.css'

export default function postFooter() {
    return (
        <div>
         <footer>
            <div className={styles.footer__div}>
                <div className={styles.footer_mobile_links_div}>
                    <li className={styles.footer_link}><Link href="/" passHref><a>Popular</a></Link></li>
                    <li className={styles.footer_link}><Link href="/" passHref><a>Recent</a></Link></li>
                    <li className={styles.footer_link}><Link href="/blog/Design" passHref><a>Design</a></Link></li>
                    <li className={styles.footer_link}><Link href="/blog/Productivity" passHref><a>Productivity</a></Link></li>
                    <li className={styles.footer_link}><Link href="/" passHref><a>Engineering</a></Link></li>
                </div>
            </div>
        </footer>
        </div>
    )
}
