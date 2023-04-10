import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Layout from '../components/layout/layout';
import utilStyles from '../styles/utils.module.css'

const techs = ['React', 'JavaScript', 'Object-Oriented Programming', 'Next.js', 'CSS/HTML', 'Tailwind CSS', 'UI/UX Design', 'Figma']
const tier2Techs = ['Laravel', 'PHP', 'Java',]

export default function About() {
    return (
        <Layout>
            <Head>
                <title>About</title>
            </Head>
            <h1 className={utilStyles.heading2Xl}>
                About Me
            </h1>
            <div className={utilStyles.subHead}>
                <iframe src="https://giphy.com/embed/xTiIzJSKB4l7xTouE8" width="240" height="108" frameBorder="0" class="giphy-embed" allowfullscreen=""></iframe>
            </div>
            <div className={utilStyles.aboutPara}>
                <p>Hi, I&apos;m T.C. Cox, a <em>Front-End Engineer</em>.</p>
                <p>I&apos;m a new dad who&apos;s just finished Meta&apos;s <a href="https://www.coursera.org/professional-certificates/meta-front-end-developer?" target="_blank" rel="noopener noreferrer">Front-End Developer Professional Certification</a>.</p>
                <p>I have a BS in Psychology from the University of Tennessee at Chattanooga. I&apos;m currently working in healthcare as a pediatric Certified Medical Assistant.</p>
                <p>I&apos;ve been working over the past year to become a <em>Software Engineer</em>, and have learned a ton, but as anyone will tell you, have an infiinity left to learn.</p>
                <p>The course was React-heavy and taught me loads about not only React and state-management, but also client-side development, best practices, version control, and even computational theory, such as Time Complexity and circuitry.</p>
            </div>
            {/* comfortable Techs */}
            <h3 className={utilStyles.headingXl}>Here are some of my preferred techs:</h3>
            <ul className={utilStyles.list}>
                {techs.map((x, index) => {
                    return <li key={index} className={utilStyles.listItem}>{x}</li>
                })}
            </ul>
            {/* uncomfortable Techs */}
            <p>My slightly-less-than-experienced Techs:</p>
            <ul className={utilStyles.list}>
                {tier2Techs.map((x, index) => {
                    return <li key={index} className={utilStyles.listItem}>{x}</li>
                })}
            </ul>

        </Layout>
    );
}