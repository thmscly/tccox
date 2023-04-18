import Head from 'next/head';
import Image from 'next/image';
import styles from '../layout.module.css';
import utilStyles from '../../styles/utils.module.css';
import Link from 'next/link';
import NavBar from './navBar';
import Logo from '../logo';

const name = 'T.C. Cox';
export const siteTitle = 'T.C. Cox: Front-End Engineer';

export default function Layout({ children, home, pageName }) {
    return (
        <div className={styles.container}>

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
                        <NavBar />
                        <Logo
                            dimension={144}
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
                        <NavBar />
                        {/* <Link href="/" className={styles.nameHeader}>
                            <Logo
                                dimension={96}
                            />
                        </Link> */}

                        <h1 className={utilStyles.headingXl}>{pageName}</h1>
                        <hr className={styles.rule} />
                    </>
                )}
            </header>
            <main className={utilStyles.main}>{children}</main>
            {!home}
        </div>
    );
}