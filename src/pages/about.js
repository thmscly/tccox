import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Layout from '../components/layout/layout';
import utilStyles from '../styles/utils.module.css'
import LaunchIcon from '@mui/icons-material/Launch';


const techs = ['React', 'JavaScript', '.NET', 'Next.js', 'CSS/HTML', 'Tailwind CSS', 'SQL', 'MuleSoft']

export default function About() {
    return (
        <Layout pageName={"About"}>
            <Head>
                {/* <script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script> */}
                <title>About Me</title>
            </Head>
            <div className={utilStyles.subHead}>
                <iframe src="https://giphy.com/embed/xTiIzJSKB4l7xTouE8" width="240" height="108" frameBorder='0' ></iframe>
                {/* <script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script> */}
            </div>
            <span className={utilStyles.aboutPara}>
                <div>
                <p className={utilStyles.headingMd}>T.C.? That guy from Magnum PI?*</p>
                    <span className={utilStyles.aboutParaTop}>
                        <p>Hey there. I&apos;m T.C. I&apos;m a <em>Software Developer</em>, an Eagle Scout, a drummer, movie-lover, a dad, and all-around nerd. I&apos;ve been working as a Software Developer at CGI for the better part of a year, having started my journey in freelance Web Development after graduating from <em> Meta&apos;s <a href="https://www.coursera.org/professional-certificates/meta-front-end-developer?" target="_blank" rel="noopener noreferrer">Front-End Developer Professional Certification</a> program.</em>.</p>
                        {/* <p></p> */}
                        {/* <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="11932b7d-0a56-49e6-9961-86da1a1ce7a7" data-share-badge-host="https://www.credly.com"></div> */}
                        <a href="https://www.credly.com/badges/11932b7d-0a56-49e6-9961-86da1a1ce7a7/public_url" target='_blank' rel="noopener noreferrer">
                            <Image
                                priority
                                src="/images/meta-front-end-developer-certificate.png"
                                // className={utilStyles.borderCircle}
                                width={144}
                                height={144}
                                sizes="(max-width: 768px) 10vw,
              (max-width: 1200px) 15vw,
              10vw"
                                alt="Credly badge for Thomas Cox Meta Front-End Developer Certification"
                            /><LaunchIcon />
                        </a>
                    </span>

                    <p>I&apos;ve been working hard over the several years becoming a <em>Software Engineer</em>, and have learned a ton, but as anyone in dev will tell you, have an infinity left to master.</p>
                    <div>
                        <h3 className={utilStyles.headingLg}>My Stack:</h3>
                        <ul className={utilStyles.stackList}>
                            {techs.map((x, index) => {
                                return <li key={index} className={utilStyles.listItem}>{x}</li>
                            })}
                        </ul>
                    </div>
                    <div>
                        <h3 className={utilStyles.headingLg}>Other stuff you wanna know:</h3>
                        <p>I have a BS in Psychology from the University of Tennessee at Chattanooga.</p>
                        <p>I&apos;ve always had a deep interest in creative writing, writing and playing music, creative outlets, as well as how things work - including people. So, with wide eyes, a desire to help, and a healthy amount of naivete, I figured early on I would become a psychologist.</p>
                        <p>After 4 years of psychology, I decided I did not, in fact, want to be a psychologist.</p>
    
                        <p>The Meta course was React-heavy and taught me loads about not only React and state-management, but also client-side development, best practices, version control, and even computational theory, such as Time Complexity and circuitry.</p>
    
                        <p>I&apos;d love to talk to you about just about anything. Feel free to <em><Link href='/contact'>reach out!</Link></em> </p>
                            <p className={utilStyles.smallText}><em>*he is not, in fact, that guy from Magnum PI.</em></p>
                    </div>
                </div>
                {/* comfortable Techs */}

            </span>

        </Layout>
    );
}
