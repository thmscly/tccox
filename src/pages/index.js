import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout/layout';
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
        {/* <div className={styles.cursor} /> */}

      </section>

      <section className={`${styles.homeGrid}`}>

        <Link href="about" className={styles.homeCard}>
          <h2>
            About
          </h2>
          <p>
            A little more about who I am and my journey into Tech.
          </p>
        </Link>

        <Link href="projects" className={styles.homeCard}>
          <h2>
            My Work
          </h2>
          <p>
            Some of my projects and what I&apos;ve been enoying working on.
          </p>
        </Link>

        <Link href="contact" className={styles.homeCard}>
          <h2>
            Contact
          </h2>
          <p>
            I&apos;d love to hear from you!.
          </p>
        </Link>
        {/* <h2 className={utilStyles.headingLg}>Blog</h2> */}
      </section>
    </Layout>
  );
}