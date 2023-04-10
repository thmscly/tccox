import React from 'react'
import Link from 'next/link';
import utilStyles from '../../styles/utils.module.css';

function NavBar() {
    return (
        <>
            <nav className={utilStyles.navBar}>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/contact">Contact</Link>
            </nav>
        </>
    )
}

export default NavBar