import React, { useState, useEffect } from "react";
import styles from "./Interactive.module.css";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import dressesData from "../data/dresses.json";

const firebaseConfig = {
    apiKey: "AIzaSyCoD-ZOutEZZrFeLjA7PVTrCJA9NUbJyIY",
    authDomain: "assignment2-63d8a.firebaseapp.com",
    projectId: "assignment2-63d8a",
    storageBucket: "assignment2-63d8a.firebasestorage.app",
    messagingSenderId: "512806771940",
    appId: "1:512806771940:web:a8897107ac8865c4a3e0f1",
    measurementId: "G-CGYETE0Z2J"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default function Interactive() {
    const [search, setSearch] = useState("");
    const [favorites, setFavorites] = useState(() =>
        JSON.parse(localStorage.getItem("favorites") || "[]")
    );

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");
    const [formLoading, setFormLoading] = useState(false);

    const [myDresses, setMyDresses] = useState([]);

    // ✅ FINAL WORKING IMAGE FIX — loads from public/dresses/
    useEffect(() => {
        const loaded = dressesData.map((d) => ({
            ...d,
            img: `/dresses/${d.image}` // <-- public folder path
        }));
        setMyDresses(loaded);
    }, []);

    const toggleFavorite = (id) => {
        setFavorites((prev) =>
            prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormLoading(true);

        try {
            await addDoc(collection(db, "contacts"), {
                name,
                email,
                message,
                time: new Date().toISOString(),
            });

            setStatus("success");
            setName("");
            setEmail("");
            setMessage("");
        } catch (err) {
            setStatus("error");
        } finally {
            setFormLoading(false);
            setTimeout(() => setStatus(""), 5000);
        }
    };

    const filtered = myDresses.filter((d) =>
        d.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>My Style Studio</h1>

            <div className={styles.videoWrapper}>
                <iframe
                    src="https://www.youtube.com/embed/m0IPlbYnLf8"
                    title="Fashion 2024"
                    allowFullScreen
                ></iframe>
            </div>

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
                                className={
                                    favorites.includes(dress.id)
                                        ? styles.liked
                                        : styles.btn
                                }
                            >
                                {favorites.includes(dress.id) ? "Saved" : "Save"}
                            </button>
                        </div>
                    ))}
                </div>

                <p className={styles.favCount}>
                    You have {favorites.length} saved item
                    {favorites.length !== 1 ? "s" : ""}
                </p>
            </section>

            <section className={styles.section}>
                <h2>Book an Appointment</h2>

                <form onSubmit={handleSubmit} className={styles.form}>
                    <input
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className={styles.input}
                    />

                    <input
                        placeholder="WhatsApp / Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className={styles.input}
                    />

                    <textarea
                        placeholder="Which dress do you like?"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        className={styles.textarea}
                        rows="4"
                    ></textarea>

                    <button type="submit" disabled={formLoading} className={styles.btn}>
                        {formLoading ? "Sending..." : "Send Message"}
                    </button>

                    {status === "success" && (
                        <p className={styles.success}>Thank you! Message saved!</p>
                    )}
                    {status === "error" && (
                        <p className={styles.error}>Error! Try again.</p>
                    )}
                </form>
            </section>
        </div>
    );
}
