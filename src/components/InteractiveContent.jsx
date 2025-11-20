import React, { useState, useEffect } from "react";
import DressesCollection from "./DressesCollection";
import AppointmentForm from "./AppointmentForm";
import styles from "./Interactive.module.css";

const InteractiveContent = () => {
    // API state
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch data from JSONPlaceholder
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
            .then((res) => res.json())
            .then((data) => {
                setPosts(data);
                setLoading(false);
            })
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>My Style Studio</h1>

            {/* Video Section */}
            <div className={styles.videoWrapper}>
                <iframe
                    src="https://www.youtube.com/embed/m0IPlbYnLf8"
                    title="Fashion 2024"
                    allowFullScreen
                ></iframe>
            </div>

            {/* Dresses Collection */}
            <DressesCollection />

            {/* Appointment Form */}
            <AppointmentForm />

            {/* ✅ Public API Section */}
            <section className={styles.section}>
                <h2>Latest Posts from Public API</h2>
                {loading ? (
                    <p>Loading posts...</p>
                ) : (
                    <ul>
                        {posts.map((post) => (
                            <li key={post.id}>
                                <strong>{post.title}</strong>
                                <p>{post.body}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </section>
        </div>
    );
};

export default InteractiveContent;
