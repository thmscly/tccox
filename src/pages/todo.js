import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Layout from '../components/layout';
import TaskApp from '@/components/toDoList/main';

export default function Todo() {
    return (
        <Layout>
            <Head>
                <title>To-do App</title>
            </Head>
            <main>
                <h1>To-Do</h1>
                <h2>
                    This is built using React&apos;s <a href="https://react.dev/reference/react/useReducer" target="_blank">useReducer Hook.</a>

                </h2>
                <p> Everything&apos;s busy. All the time. Keep track of what you have to do.
                    I use it so I don&apos;t leave my baby in her playpen all day.
                    You use it for...you know...whatever.
                </p>
            </main>
            <TaskApp />
        </Layout>
    );
}