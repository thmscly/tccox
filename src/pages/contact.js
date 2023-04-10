import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Layout from '../components/layout/layout';
import styles from '@/styles/Home.module.css'
import utilStyles from '@/styles/utils.module.css'

const title = "Contact"

export default function Contact() {
    return (
        <Layout contact>
            <Head>
                <title>{title}</title>
            </Head>
            <section className={utilStyles.headingXl}>
                <h1>{title}</h1>
                {/* <div className={styles.cursor} /> */}
                <hr />
                <h6>I&apos;m always happy to talk code, job opportunities, or even Lord of the Rings (if you have a few hours...)</h6>
            </section>
            <section className={`${styles.homeGrid}`}>

                <Link href="https://github.com/thmscly" rel="noopener noreferrer" target="_blank" className={styles.homeCard}>
                    <h2>
                        GitHub <span>-&gt;</span>
                    </h2>

                </Link>

                <Link href="https://www.linkedin.com/in/thomas-tc-cox/" rel="noopener noreferrer" target="_blank" className={styles.homeCard}>
                    <h2>
                        LinkedIn <span>-&gt;</span>
                    </h2>

                </Link>

                <Link href="https://discord.com/channels/@T.C.#3573" rel="noopener noreferrer" target="_blank" className={styles.homeCard}>
                    <h2>
                        Discord <span>-&gt;</span>
                    </h2>

                </Link>
                {/* <h2 className={utilStyles.headingLg}>Blog</h2> */}
            </section>
        </Layout>
    );
}