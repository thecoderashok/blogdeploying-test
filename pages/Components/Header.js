import React from 'react'
import { useRouter } from "next/router";
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image'
import Link from 'next/link'
import Logo from "../../public/Logo.svg"
import style from "../../styles/Header.module.css"



const title = "Tasks";

export default function Header() {

    const router = useRouter();
   

        // const menuOpen = () => {
        //     console.log(nav)
        // }
    
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
           <nav className={style.navContainer} id="nav">
                  <li className={style.navItem}><Link href="/blog" passHref><a>Blog</a></Link></li>
                  <li className={style.navItem}><Link href="/" passHref><a>Website</a></Link></li>
                  <li className={style.navItem}><Link href="/About" passHref><a>About</a></Link></li>
                  <li className={style.navItem}><Link href="/Contact" passHref><a>Contact</a></Link></li>
           </nav>
                  <span className={style.MenuIcon} onClick={() => setNav}><MenuIcon/></span>
           </div>
        </header>
    )
}