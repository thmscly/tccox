import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import styles from '@/styles/Home.module.css'

export default function Projects() {
    return (
        <Layout>
            <Head>
                <title>Projects</title>
            </Head>
            <h1>Some of My Work</h1>
            <hr />
            <div className={styles.grid}>
                <Link href="about" className={styles.card}>
                    <h2>
                        Meta Certification Capstone <span>-&gt;</span>
                    </h2>
                    <p>
                        A stateful React App to manage booking for a fictional restaurant. Capstone project for Meta&apos;s Front-End Developer Professional Certificate.
                    </p>
                </Link>

                <Link href="https://github.com/thmscly/tccox" rel="noopener noreferrer" target="_blank" className={styles.card}>
                    <h2>
                        Source Code <span>-&gt;</span>
                    </h2>
                    <p>
                        The source code for the very web app you&apos;re looking at now.
                    </p>
                </Link>

                <Link href="todo" className={styles.card}>
                    <h2>
                        To-do App <span>-&gt;</span>
                    </h2>
                    <p>
                        A to-do CRUD app built with React&apos;s useReducer Hook
                    </p>
                </Link>

                <Link href="https://github.com/thmscly/katie-devault-website" rel="noopener noreferrer" target="_blank" className={styles.card}>
                    <h2>
                        Katie DeVault Consulting <span>-&gt;</span>
                    </h2>
                    <p>
                        A professional React site built for my sister and her consulting business.
                    </p>
                </Link>

                <Link href="contact" className={styles.card}>
                    <h2>
                        Spaceship <span>-&gt;</span>
                    </h2>
                    <p>
                        Click here to launch a hand-built game that uses React state to keep track of your progress.
                    </p>
                </Link>

            </div>
            <ul className={utilStyles.list}></ul>
        </Layout>
    );
}