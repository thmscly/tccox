import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Layout from '../components/layout/layout';
import utilStyles from '../styles/utils.module.css';
import styles from '@/styles/Home.module.css'

export default function Projects() {
    return (
        <Layout pageName={"Projects"}>
            <Head>
                <title>Projects</title>

            </Head>
            <div className={styles.grid}>
                <Link href="https://github.com/thmscly/little-lemon.git" className={styles.card}>
                    <h2>
                        Meta Capstone
                    </h2>
                    <p>
                        A React App managing booking for a fictional restaurant. Capstone project for Meta&apos;s Front-End Developer Professional Certificate.
                    </p>
                </Link>

                <Link href="https://github.com/thmscly/tccox" rel="noopener noreferrer" target="_blank" className={styles.card}>
                    <h2>
                        Source Code
                    </h2>
                    <p>
                        The source code for the very web app you&apos;re looking at now.
                    </p>
                </Link>

                <Link href="todo" className={styles.card}>
                    <h2>
                        To-do App
                    </h2>
                    <p>
                        I got a baby. How else am I supposed to keep up? Built using React&apos;s useReducer hook.
                    </p>
                </Link >

                <Link href="https://github.com/thmscly/katie-devault-website" rel="noopener noreferrer" target="_blank" className={styles.card}>
                    <h2>
                        Katie DeVault
                    </h2>
                    <p>
                        A professional React template built for a Nashville-based consultant.
                    </p>
                </Link >

                {/* <Link href="contact" className={styles.card}>
                    <h2>
                        Spaceship </span>
                    </h2>
                    <p>
                        Click here to launch a hand-built game that uses React state to keep track of your progress.
                    </p>
                </Link> */}

            </div >
            <ul className={utilStyles.list}></ul>
        </Layout >
    );
}