import React from "react";
import styles from "./header.module.css";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.areaLogoHeader}>
          <Link className={styles.link} href="area">
            <Image
              src="https://via.placeholder.com/140x31/0cf/fff/?text=logo"
              alt="logo"
              width={150}
              height={50}
            />
          </Link>
        </div>
        <nav className={styles.areaNavHeader}>
          <ul className={styles.listNavHeader}>
            <li>
              <Link className={styles.link} href="#"></Link>
            </li>
            <li>
              <Link className={styles.link} href="#">
                Blogs
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="#">
                Testimonials
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="#">
                Careers
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="#">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
