import React from "react";
import styles from "./Gallery.module.css";
import chic from "../assets/chic.jpg";
import baggy1 from "../assets/baggy1.webp";
import dress from "../assets/dress.jpg";
import cl from "../assets/cl.webp";

export default function Gallery() {
    const images = [chic, baggy1, dress, cl];

    return (
        <section className={styles.gallery}>
            <h1>Fashion Gallery</h1>
            <div className={styles.container}>
                {images.map((img, i) => (
                    <img src={img} alt={`Fashion ${i + 1}`} key={i} />
                ))}
            </div>
        </section>
    );
}
