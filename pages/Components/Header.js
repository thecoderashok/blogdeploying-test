import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from "../../public/Logo.svg"
import style from "../../styles/Header.module.css"
import { FiMenu } from 'react-icons/fi';
import { CgClose } from 'react-icons/cg';




const title = "Tasks";

export default function Header() {

    const [isOpen, setIsOpen] = useState(false);
   

    
    return (
        <header className={style.header}>
           <div className={style.navBar}>
           <Link href="/" passHref>
           <div className={style.logoContainer}>
               <Image className={style.Logo} src={Logo} width={61} height={1} alt={title} />
               <div className={style.logoName}>
                   <h1 className={style.logo_title}>Tasks</h1>
                   <span>To-Do Lists & Reminnders</span>
               </div>
           </div>
           </Link>
           <nav className={isOpen === false ? style.navContainer: style.navContainer + ' ' + style.active} >
               <span className={style.CloseMenuIcon} onClick={() => setIsOpen(!isOpen)}><CgClose size="2rem" color="black"/></span>

                  <li className={style.navItem}><Link href="/blog" passHref><a>Blog</a></Link></li>
                  <li className={style.navItem}><Link href="/" passHref><a>Website</a></Link></li>
                  <li className={style.navItem}><Link href="/About" passHref><a>About</a></Link></li>
                  <li className={style.navItem}><Link href="/Contact" passHref><a>Contact</a></Link></li>
           </nav>
                  <span className={style.MenuIcon} onClick={() => setIsOpen(!isOpen)}><FiMenu size="2rem" color="black"/></span>
           </div>
        </header>
    )
}