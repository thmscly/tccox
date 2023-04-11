import Head from 'next/head';
import Image from 'next/image';
import styles from '../layout.module.css';
import utilStyles from '../../styles/utils.module.css';
import Link from 'next/link';
import NavBar from './navBar';

const name = 'T.C. Cox';
export const siteTitle = 'T.C. Cox: Front-End Engineer';

export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <NavBar />
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle,
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <Image
                            priority
                            src="/images/profilepic.jpeg"
                            className={utilStyles.borderCircle}
                            height={144}
                            width={144}
                            alt=""
                        />
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                ) : (
                    <>
                        {/* <Link href="/">
                            <Image
                                priority
                                src="/images/profilepic.jpeg"
                                className={utilStyles.borderCircle}
                                height={108}
                                width={108}
                                alt=""
                            />
                        </Link> */}
                        <h2 className={styles.nameHeader}>
                            <Link href="/" className={utilStyles.colorInherit}>
                                {name}
                            </Link>
                        </h2>
                    </>
                )}
            </header>
            <main className={utilStyles.main}>{children}</main>
            {!home && (
                <div className={styles.emailButton}>
                    <a href='mailto:thmscly@gmail.com'> <button>Email</button></a>
                </div>
            )}
        </div>
    );
}