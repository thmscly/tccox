import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '@/lib/posts';
import styles from '@/styles/Home.module.css'
import Link from 'next/link';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingLg}>
        <p>Meta&reg;-Certified Front-End Engineer{' '}</p>
        <div className={styles.cursor} />
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>

        <div className={styles.grid}>
          <Link href="about" className={styles.card}>
            <h2>
              About <span>-&gt;</span>
            </h2>
            <p>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </Link>

          <Link href="projects" className={styles.card}>
            <h2>
              My Work <span>-&gt;</span>
            </h2>
            <p>
              Some of my projects and what I&apos;ve been enoying working on.
            </p>
          </Link>

          <Link href="contact" className={styles.card}>
            <h2>
              Contact <span>-&gt;</span>
            </h2>
            <p>
              Reach out and touch me...on social media.
            </p>
          </Link>

        </div>
        {/* <h2 className={utilStyles.headingLg}>Blog</h2> */}
      </section>
    </Layout>
  );
}