import Link from "next/link";
import { useState } from "react";
import { SidebarData } from "./SidebarData";
import styles from './Navbar.module.css';
import Image from 'next/image'
import sls from "../../../public/logo1.png"


export default function Navbar() {
    const [sidebar, setSidebar] = useState(true)


    const showSideBar = () => setSidebar(!sidebar)

    return (
        <div>
            <div className={styles.navbar}>
                <p className={styles.separationBar1}>|</p>
                <p className={styles.separationBar2}>|</p>
            </div>
            <nav className={styles["nav-menu"]}>
                <Image
                src="../../../public/logo1.png"
                alt="Logo"
                className={styles.logo}
                width={100}
                height={24}
                />
                <ul className={styles["nav-menu-itens"]}>
                    
                    {SidebarData.map((item, index) => {
                        return (
                            <div key={index} className={styles.lista}>
                                <div className={styles.aaa}>
                                <Link href={item.path}>
                                    <span >{item.title}</span>
                                </Link>
                                </div>
                            </div>
                        )
                    })}
                </ul>
            </nav>
        </div>
    )
}