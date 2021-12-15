import { useState, useEffect } from "react";
import Image from 'next/image'
import Link from 'next/link'
import Logo from "../public/Logo.svg"
// import logopng from "../public/Logo.png"
import style from "../styles/Header.module.css"
import { FiMenu } from 'react-icons/fi';
import { CgClose } from 'react-icons/cg';

import dynamic from "next/dynamic";
import styled from "@emotion/styled";

const ThemeToggle = dynamic(() => import("../components/ThemeToggle"), {
  ssr: false,
});







const title = "Tasks";

export default function Header() {
    // const [activeTheme, setActiveTheme] = useState(document.body.dataset.theme);
    // const inactiveTheme = activeTheme === "light" ? "dark" : "light";
  
    // useEffect(() => {
    //   document.body.dataset.theme = activeTheme;
    //   window.localStorage.setItem("theme", activeTheme);
    // }, [activeTheme]);

    const [isOpen, setIsOpen] = useState(false);


    
    return (
        <header className={style.header}>
           <div className={style.navBar}>
           <Link href="/" passHref>
           <div className={style.logoContainer}>
              <div className={style.logodiv}><Image className={style.Logo} src={Logo}  alt={title}  layout="responsive"/></div>
               {/* <img src={logopng} alt="" /> */}
               <div className={style.logoName}>
                   <h1 className={style.logo_title}>Tasks</h1>
                   <span className={style.logo_subtitle}>To-Do Lists & Reminnders</span>
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
         
          

           {/* <button aria-label={`Change to ${inactiveTheme} mode`} title={`Change to ${inactiveTheme} mode`} type="button"
             onClick={() => setActiveTheme(inactiveTheme)} className={activeTheme === "dark" ? " ": "active"}
             >
      <span activeTheme={activeTheme} />
      <span>🌙</span>
      <span>☀️</span>
         </button> */}

           <ThemeToggle/>
  
        </header>
    )
}

