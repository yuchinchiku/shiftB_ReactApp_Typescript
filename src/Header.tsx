import React from "react";
import { Link } from "react-router-dom";
import nav from "./data/nav.ts";
import type { NavItem } from "./data/nav.ts";

import styles from './cssModule/header.module.css'

const Header = () => (
  <header className={styles.header}>
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        { nav.map((elem: NavItem) => {
          return (
            <li className={styles.navList__item} key={elem.id}>
              <Link className={styles.navList__link} to={`${elem.href}`}>{elem.name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  </header>
);


export default Header;