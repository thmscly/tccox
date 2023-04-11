import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Layout from '../components/layout/layout';
import TaskApp from '@/components/toDoList/taskApp';
import toDoStyles from '../styles/Todo.module.css';

export default function Todo() {
    return (
        <Layout>
            <Head>
                <title>To-do App</title>
            </Head>
            <main className={toDoStyles.main}>
                <h1>To-Do</h1>
                <TaskApp />
                <h3>
                    This is built using React&apos;s <a href="https://react.dev/reference/react/useReducer" target="_blank">useReducer Hook.</a>

                </h3>
                <p> Everything&apos;s busy. All the time. Keep track of what you have to do.
                    I use it so I don&apos;t leave my baby in her playpen all day.
                    You use it for...you know...whatever.
                </p>
            </main>
        </Layout>
    );
}