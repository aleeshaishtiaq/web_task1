import React, { useEffect, useState } from "react";
import styles from "./Trends.module.css";
import trendsData from "../data/trends.json";

export default function Trends() {
    const [trends, setTrends] = useState([]);

    useEffect(() => {
        setTrends(trendsData);
    }, []);

    return (
        <section className={styles.trends}>
            <h1>Latest Fashion Trends</h1>
            <div className={styles.cards}>
                {trends.map((trend) => {
                    const img = require(`../assets/${trend.img}`);
                    return (
                        <div className={styles.card} key={trend.id}>
                            <img src={img} alt={trend.title} />
                            <h2>{trend.title}</h2>
                            <p>{trend.desc}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
