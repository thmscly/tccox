import React from 'react'
import layoutStyles from './layout.module.css';

function EmailButton() {
    return (
        <span className={layoutStyles.emailButton}>
            <a href='mailto:thmscly@gmail.com'> <button>Reach Out!</button></a>
        </span>
    )
}

export default EmailButton