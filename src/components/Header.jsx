// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {   // ✅ default export
    return (
        <header className={styles.header}>
            <div className={styles.logo}>Style Hub</div>
            <nav className={styles.nav}>
                <Link to="/">Home</Link>
                <Link to="/trends">Trends</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/interactive">Interactive</Link>
            </nav>
        </header>
    );
}
