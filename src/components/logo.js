import Image from "next/image";
import React from 'react'
import utilStyles from '../styles/utils.module.css';

function Logo({ dimension }) {
    return (
        <>
            <Image
                priority
                src="/images/tcLogoNoWords.png"
                className={utilStyles.logo}
                height={dimension}
                width={dimension}
                alt=""
            />
        </>
    )
}

export default Logo