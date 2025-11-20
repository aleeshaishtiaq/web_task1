import React from "react";
import styles from "./Hero.module.css";
import fashionImg from "../assets/fashion.jpg";

export default function Hero() {
    return (
        <section
            className={styles.hero}
            style={{
                backgroundImage: `linear-gradient(rgba(250,218,221,0.8), rgba(255,245,247,0.9)), url(${fashionImg})`,
            }}
        >
            <div className={styles.text}>
                <h1>S T Y L E &nbsp; H U B</h1>
                <p>Discover the cutest trends in fashion.</p>
                <a href="/trends" className={styles.cta}>
                    Explore Now
                </a>
            </div>
        </section>
    );
}
