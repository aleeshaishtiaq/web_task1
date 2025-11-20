import React, { useState, useEffect } from "react";
import styles from "./Interactive.module.css";
import dressesData from "../data/dresses.json";

const DressesCollection = () => {
    const [search, setSearch] = useState("");
    const [favorites, setFavorites] = useState(
        JSON.parse(localStorage.getItem("favorites") || "[]")
    );
    const [myDresses, setMyDresses] = useState([]);

    useEffect(() => {
        const loaded = dressesData.map((d) => ({
            ...d,
            img: `/dresses/${d.image}`
        }));
        setMyDresses(loaded);
    }, []);

    const toggleFavorite = (id) => {
        setFavorites((prev) => {
            const updated = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
            localStorage.setItem("favorites", JSON.stringify(updated));
            return updated;
        });
    };

    const filtered = myDresses.filter((d) =>
        d.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <section className={styles.section}>
            <h2>My Collection</h2>
            <input
                type="text"
                placeholder="Search dresses..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className={styles.input}
            />
            <div className={styles.grid}>
                {filtered.map((dress) => (
                    <div key={dress.id} className={styles.card}>
                        <img src={dress.img} alt={dress.title} className={styles.img} />
                        <h3>{dress.title}</h3>
                        <p className={styles.price}>Rs. {dress.price.toLocaleString()}</p>
                        <button
                            onClick={() => toggleFavorite(dress.id)}
                            className={favorites.includes(dress.id) ? styles.liked : styles.btn}
                        >
                            {favorites.includes(dress.id) ? "Saved" : "Save"}
                        </button>
                    </div>
                ))}
            </div>
            <p className={styles.favCount}>
                You have {favorites.length} saved item{favorites.length !== 1 ? "s" : ""}
            </p>
        </section>
    );
};

export default DressesCollection;
