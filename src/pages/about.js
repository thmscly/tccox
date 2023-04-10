import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Layout from '../components/layout/layout';
import utilStyles from '../styles/utils.module.css'

export default function About() {
    return (
        <Layout>
            <Head>
                <title>About</title>
            </Head>
            <h2 className={utilStyles.headingXl}>
                About Me
            </h2>
            <div className={utilStyles.subHead}>
                <iframe src="https://giphy.com/embed/xTiIzJSKB4l7xTouE8" width="240" height="108" frameBorder="0" class="giphy-embed" allowfullscreen=""></iframe>
            </div>
            <p>I&apos;m a new dad who&apos;s just finished Meta&apos;s <a href="https://www.coursera.org/professional-certificates/meta-front-end-developer?" target="_blank" rel="noopener noreferrer">Front-End Developer Professional Certification</a>.</p>

            <p>The course was very React-heavy and taught me an indescribable amount about not only React and its innate relationship with state-management, but a ton about client-side development, best practices, version control, and even computational theory, such as Time Complexity and circuitry.</p>
        </Layout>
    );
}