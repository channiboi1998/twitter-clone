import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Button, IconButton } from '@mui/material'
import Style from './navigation.module.css'
import {    Foundation, Tag, 
            MailOutline, PersonOutline, 
            MoreHoriz, NotificationsNone } from '@mui/icons-material'

const Navigation = () => {

    const router = useRouter();

    const userRoutes = ["/[user]", "/[user]/media", "/[user]/likes", "/[user]/with_replies"];

    return (
        <React.Fragment>
            <nav className={Style.navigation}>
                <Link href="/" 
                    className={`${Style.link} ${router.pathname == "/" ? Style.active : ""}`}>
                    <IconButton className={Style.mobileButton} >
                        <Foundation className={Style.svg} color="secondary" />
                    </IconButton>
                    <Button
                        variant="text"
                        className={Style.button}
                        color="secondary"
                        startIcon={<Foundation className={Style.icon} />}>
                        Home
                    </Button>
                </Link>
                <Link href="#" 
                    className={`${Style.link} ${router.pathname == "/explore" ? Style.active : ""}`}>
                    <IconButton className={Style.mobileButton} >
                        <Tag className={Style.svg} color="secondary" />
                    </IconButton>
                    <Button
                        variant="text"
                        className={Style.button}
                        color="secondary"
                        startIcon={<Tag className={Style.icon} />}>
                        Explore
                    </Button>
                </Link>
                <Link href="#" 
                    className={`${Style.link} ${router.pathname == "/notifications" ? Style.active : ""}`}>
                    <IconButton className={Style.mobileButton} >
                        <NotificationsNone className={Style.svg} color="secondary" />
                    </IconButton>
                    <Button
                        variant="text"
                        className={Style.button}
                        color="secondary"
                        startIcon={<NotificationsNone className={Style.icon} />}>
                        Notifications
                    </Button>
                </Link>
                <Link href="#" 
                    className={`${Style.link} ${router.pathname == "/messages" ? Style.active : ""}`}>
                    <IconButton className={Style.mobileButton} >
                        <MailOutline className={Style.svg} color="secondary" />
                    </IconButton>
                    <Button
                        variant="text"
                        className={Style.button}
                        color="secondary"
                        startIcon={<MailOutline className={Style.icon} />}>
                        Messages
                    </Button>
                </Link>
                <Link href="/chanverzosa98" 
                    className={`${Style.link} ${userRoutes.includes(router.pathname) == true ? Style.active : ""}`}>
                    <IconButton className={Style.mobileButton} >
                        <PersonOutline className={Style.svg} color="secondary" />
                    </IconButton>
                    <Button
                        variant="text"
                        className={Style.button}
                        color="secondary"
                        startIcon={<PersonOutline className={Style.icon} />}>
                        Profile
                    </Button>
                </Link>
                <Link href="#" 
                    className={`${Style.link}`}>
                    <IconButton className={Style.mobileButton} >
                        <MoreHoriz className={Style.svg} color="secondary" />
                    </IconButton>
                    <Button
                        variant="text"
                        className={Style.button}
                        color="secondary"
                        startIcon={<MoreHoriz className={Style.icon} />}>
                        More
                    </Button>
                </Link>
            </nav>
        </React.Fragment>
    )
}

export default Navigation