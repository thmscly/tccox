import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Layout from '../components/layout/layout';

export default function About() {
    return (
        <Layout>
            <Head>
                <title>About</title>
            </Head>
            <h1>Thomas Cox:</h1>
            <h2>
                A short story.
            </h2>
            <h3>Hello, there.</h3>
            <iframe src="https://giphy.com/embed/xTiIzJSKB4l7xTouE8" width="240" height="108" frameborder="0" class="giphy-embed" allowfullscreen=""></iframe>
        </Layout>
    );
}