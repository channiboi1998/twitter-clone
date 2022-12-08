import Link from 'next/link'
import React from 'react'
import { IconButton, Fab } from '@mui/material'
import { Foundation, Create, Search, NotificationsNone, MailOutline } from '@mui/icons-material'
import Style from './mobileFooter.module.css'

const mobileFooter = () => {
    return (
        <React.Fragment>
            <nav className={Style.navigation}>
                <Link href="#" className={Style.link}>
                    <IconButton className={Style.icon}>
                        <Foundation color="secondary" fontSize="inherit" />
                    </IconButton>
                </Link>
                <Link href="#" className={Style.link}>
                    <IconButton className={Style.icon}>
                        <Search color="secondary" fontSize="inherit" />
                    </IconButton>
                </Link>
                <Link href="#" className={Style.link}>
                    <IconButton className={Style.icon}>
                        <NotificationsNone color="secondary" fontSize="inherit" />
                    </IconButton>
                </Link>
                <Link href="#" className={Style.link}>
                    <IconButton className={Style.icon}>
                        <MailOutline color="secondary" fontSize="inherit" />
                    </IconButton>
                </Link>
            </nav>
            <Fab size="medium" color="primary" aria-label="tweet" className={Style.floatingTweetButton}>
                <Create />
            </Fab>
        </React.Fragment>
    )
}

export default mobileFooter