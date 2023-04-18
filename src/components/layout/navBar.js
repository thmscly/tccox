import React from 'react'
import Link from 'next/link';
import utilStyles from '../../styles/utils.module.css';
import EmailButton from '../emailButton';
import Logo from '../logo';


function NavBar() {
    return (
        <>
            <nav className={utilStyles.navBar}>

                <Link href="/"><Logo dimension={72} /></Link>
                <Link href="/about">About</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/contact">Contact</Link>
                <EmailButton />
            </nav>
        </>
    )
}

export default NavBar