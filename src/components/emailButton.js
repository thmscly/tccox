import React from 'react'
import layoutStyles from './layout.module.css';
import EmailIcon from '@mui/icons-material/Email';

function EmailButton() {
    return (
        <span className={layoutStyles.emailButton}>
            <a href='mailto:thmscly@gmail.com'> <button><EmailIcon sx={{ color: 'white' }} fontSize='large' /></button></a>
        </span>
    )
}

export default EmailButton