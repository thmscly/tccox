import Head from 'next/head';
import Image from 'next/image';
import styles from '../layout.module.css';
import utilStyles from '../../styles/utils.module.css';
import Link from 'next/link';
import NavBar from './navBar';

const name = 'T.C. Cox';
export const siteTitle = 'T.C. Cox: Front-End Engineer';

export default function Layout({ children, home, pageName }) {
    return (
        <div className={styles.container}>
            <NavBar />
            <Head>
                <meta
                    name="description"
                    content="A React Portfolio Site for Front-End Engineer T.C. Cox"
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
                        <h1 className={styles.header}>{pageName}</h1>
                        <hr className={styles.rule} />
                    </>
                )}
            </header>
            <main className={utilStyles.main}>{children}</main>
            {!home}
        </div>
    );
}