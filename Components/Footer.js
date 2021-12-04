import React from 'react'
import Link from 'next/link';
import styles from '../styles/Footer.module.css'
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { ImLinkedin2, ImFacebook } from 'react-icons/im';

export default function Footer() {
    return (
        <>
        <footer>
            <div className={styles.footer__div}>
                <div className={styles.footer_social_links_div}>
                    <span className={styles.footer_social_item}><BsInstagram/></span>
                    <span className={styles.footer_social_item}><BsTwitter /></span>
                    <span className={styles.footer_social_item}><ImLinkedin2 /></span>
                    <span className={styles.footer_social_item}><ImFacebook /></span>
                </div>

            </div>
        </footer>
            
        </>
    )
}
