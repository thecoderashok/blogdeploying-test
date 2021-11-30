import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from "../../public/Tasks-Logo.svg"
import style from "../../styles/Header.module.css"


export default function Header() {
    return (
        <header className={style.header}>
           <div className={style.navBar}>
           <Link href="/" passHref>
           <div className={style.logoContainer}>
               <Image className={style.Logo} src={Logo} width={65} height={1} />
               <div className={style.logoName}>
                   <h1>Tasks</h1>
                   <span>To-Do Lists & Reminnders</span>
               </div>
           </div>
           </Link>
           <nav className={style.navContainer}>
               
                  <li className={style.navItem}><Link href="/design" passHref><a>Blog</a></Link></li>
                  <li className={style.navItem}><Link href="/" passHref><a>Website</a></Link></li>
                  <li className={style.navItem}><Link href="/About" passHref><a>About</a></Link></li>
                  <li className={style.navItem}><Link href="/Contact" passHref><a>Contact</a></Link></li>
               
           </nav>
           </div>
        </header>
    )
}