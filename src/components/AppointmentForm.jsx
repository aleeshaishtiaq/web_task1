import React, { useState } from "react";
import styles from "./Interactive.module.css";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

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

const AppointmentForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");
    const [formLoading, setFormLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormLoading(true);
        try {
            await addDoc(collection(db, "contacts"), { name, email, message, time: new Date().toISOString() });
            setStatus("success");
            setName(""); setEmail(""); setMessage("");
        } catch {
            setStatus("error");
        } finally {
            setFormLoading(false);
            setTimeout(() => setStatus(""), 5000);
        }
    };

    return (
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
                {status === "success" && <p className={styles.success}>Thank you! Message saved!</p>}
                {status === "error" && <p className={styles.error}>Error! Try again.</p>}
            </form>
        </section>
    );
};

export default AppointmentForm;
