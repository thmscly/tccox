import React from "react";
import utilStyles from '../../styles/utils.module.css';

function Footer() {
    return (
        <footer className={utilStyles.footer}>
            <div>
                <p>©{new Date().getFullYear()} Thomas Cox. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;