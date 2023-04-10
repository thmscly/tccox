import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Layout from '../components/layout/layout';
import utilStyles from '../styles/utils.module.css'

const techs = ['React', 'JavaScript', 'JSX', 'Next.js', 'CSS/HTML', 'Tailwind CSS', 'UI/UX Design', 'Figma']

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
                <iframe src="https://giphy.com/embed/xTiIzJSKB4l7xTouE8" width="240" height="108" ></iframe>
                <script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>
            </div>
            <span className={utilStyles.aboutPara}>
                <div>
                    <p>I&apos;m a <em>Front-End Engineer</em> ,an Eagle Scout, a drummer, movie-lover, and all-around nerd and <span className={utilStyles.bigText}>I just graduated from <em> Meta&apos;s <a href="https://www.coursera.org/professional-certificates/meta-front-end-developer?" target="_blank" rel="noopener noreferrer">Front-End Developer Professional Certification</a></em>.</span></p>
                    <p>I&apos;ve been working hard over the past year becoming <em>Software Engineer</em>, and have learned a ton, but as anyone in dev will tell you, have an infinity left to master.</p>
                    <div>
                        <h3 className={utilStyles.headingLg}>My Stack:</h3>
                        <ul className={utilStyles.list}>
                            {techs.map((x, index) => {
                                return <li key={index} className={utilStyles.listItem}>{x}</li>
                            })}
                        </ul>
                    </div>
                    <p>I have a BS in Psychology from the University of Tennessee at Chattanooga. I&apos;m currently working in healthcare as a pediatric Certified Medical Assistant.</p>
                    <p>I&apos;ve always had a deep interest in creative writing, writing and playing music, creative outlets, as well as how things work - including people. So, with wide eyes, a desire to help, and a healthy amount of naivete, I figured early on I would become a psychologist.</p>
                    <p>After 4 years of psychology, I decided I did not, in fact, want to be a psychologist.</p>

                    <p>The course was React-heavy and taught me loads about not only React and state-management, but also client-side development, best practices, version control, and even computational theory, such as Time Complexity and circuitry.</p>
                </div>
                {/* comfortable Techs */}

            </span>

        </Layout>
    );
}