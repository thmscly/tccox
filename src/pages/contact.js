import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Layout from '../components/layout/layout';
import styles from '@/styles/Home.module.css'
import utilStyles from '@/styles/utils.module.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ChatIcon from '@mui/icons-material/Chat';

const title = "Contact"

export default function Contact() {
    return (
        <Layout pageName={title}>
            <Head>
                <title>{title}</title>
            </Head>
            <section className={utilStyles.headingXl}>

                {/* <div className={styles.cursor} /> */}

                <h3>I&apos;m always happy to talk code, job opportunities, or even Lord of the Rings (if you have a few hours...)</h3>
            </section>
            <section className={`${styles.homeGrid}`}>

                <Link href="https://github.com/thmscly" rel="noopener noreferrer" target="_blank" className={styles.homeCard}>
                    <h2>
                        GitHub
                    </h2>
                    <GitHubIcon sx={{ fontSize: 80 }} />

                </Link>

                <Link href="https://www.linkedin.com/in/thomas-tc-cox/" rel="noopener noreferrer" target="_blank" className={styles.homeCard}>
                    <h2>
                        LinkedIn
                    </h2>
                    <LinkedInIcon sx={{ fontSize: 80 }} />

                </Link>

                <Link href="https://discord.com/channels/@T.C.#3573" rel="noopener noreferrer" target="_blank" className={styles.homeCard}>
                    <h2>
                        Discord
                    </h2>
                    <ChatIcon sx={{ fontSize: 80 }} />

                </Link >
                {/* <h2 className={utilStyles.headingLg}>Blog</h2> */}
            </section >
        </Layout >
    );
}