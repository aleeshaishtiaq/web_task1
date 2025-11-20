import React from "react";
import styles from "./Footer.module.css";
import instaIcon from "../assets/insta.webp";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>
                Follow us on
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                    <img src={instaIcon} alt="Instagram" className={styles.insta} />
                </a>
            </p>
        </footer>
    );
}
