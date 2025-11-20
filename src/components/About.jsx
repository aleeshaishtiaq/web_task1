import React from "react";
import styles from "./About.module.css";
import aboutImg from "../assets/OIP.webp";

export default function About() {
    return (
        <section className={styles.about}>
            <div className={styles.text}>
                <h2>About Us</h2>
                <p>
                    We bring you the most aesthetic and trendy looks, blending pastel vibes
                    with modern elegance. Fashion is not just clothing, it’s a lifestyle.
                </p>
                <p>
                    At <b>Style Hub</b>, we focus on quality fabrics, timeless designs, and the latest fashion inspirations.
                </p>
                <p>
                    Whether it’s casual wear, office outfits, or something chic for a special occasion,
                    we’ve got you covered with a perfect mix of comfort and elegance.
                </p>
            </div>
            <div className={styles.image}>
                <img src={aboutImg} alt="Fashion Model" />
            </div>
        </section>
    );
}
