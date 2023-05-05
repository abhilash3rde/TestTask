import { useEffect, useState } from "react";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useLocalStorage } from "@/components/Storage";

export default function Home() {


    const [favorites, setFavorites, pushFavorites, popFavorites] = useLocalStorage('favorites', []);

    return (
        <>
            <Head>
                <title>Favourites List</title>
                <meta name="description" content="An app for users" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
                    rel="stylesheet"
                    integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
                    crossorigin="anonymous"
                />
            </Head>

            <main className={styles.maindiv}>
                <div className={`  `}><h2 className={`${styles.list_heading}`}>Favourites List
                </h2>   </div>
                <Link href="/"><button className={styles.button}>Go Back</button></Link>
                <div className={styles.maincontainer}>
                    {favorites.map((item) => (
                        <div className={styles.card}>
                            <div className={styles.card_body}>
                                <h5 className={styles.card_heading}>{item.name}</h5>
                                <h5 className={styles.card_subhead}>
                                    {item.username}
                                </h5>
                                <h6 className={styles.card_subhead}>{item.email}</h6>
                                <h6 className={styles.card_subhead}>{item.phone}</h6>
                                <Link href={`/userDetail/${item.id}`} className={styles.button_link}>
                                    <button className={styles.button}>
                                        View
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}

                    {favorites.length === 0 && <h1 className={styles.button}>
                        No Data
                    </h1>}
                </div>
            </main>
        </>
    );
}

