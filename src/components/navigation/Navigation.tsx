import { useState } from "react";
import Container from "../container";
import styles from "./Navigation.module.scss";
import web_logo from "/assets/web-logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import Button from "../button";
import { Link, useLocation } from "react-router-dom";
import { list } from "./constants";

export const Navigation = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle(!toggle);
  const { pathname } = useLocation();

  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.nav}>
          <div className={styles.logoContainer}>
            <img src={web_logo} alt="logo" className={styles.logo} />
          </div>
          <div className={styles.other}>
            <ul
              className={
                toggle ? `${styles.navLinksActive} ${styles.navLinks}` : styles.navLinks
              }
            >
              {list.map(({ id, path, text }) => (
                <Link key={id} to={path} onClick={handleToggle} className={styles.link}>
                  <li
                    className={
                      pathname === path
                        ? `${styles.navLink} ${styles.navLinkActive}`
                        : `${styles.navLink}`
                    }
                  >
                    {text}
                  </li>
                </Link>
              ))}
              <Button variant="secondary" label="Contact Us" className={styles.contact} />
            </ul>
            <div className={styles.toggle}>
              {toggle ? (
                <MdClose onClick={handleToggle} className={styles.menuIconAlt} />
              ) : (
                <GiHamburgerMenu onClick={handleToggle} className={styles.menuIcon} />
              )}
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
};
