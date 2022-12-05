import React from 'react'
import Link from 'next/link'

import { Button } from '@mui/material'

import TagIcon from '@mui/icons-material/Tag'
import ListIcon from '@mui/icons-material/List'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import FoundationIcon from '@mui/icons-material/Foundation'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'

import Style from '../../styles/sidebar/navigation.module.css'

const Navigation = () => {
    return (
        <>
            <nav className={Style.navigation}>
                <Link href="#" className={`${Style.link} ${Style.active}`}>
                    <Button 
                        variant="text" 
                        className={Style.button} 
                        color="secondary"
                        startIcon={<FoundationIcon className={Style.icon} />}>
                        Home
                    </Button>
                </Link>
                <Link href="#" className={Style.link}>
                    <Button 
                        variant="text" 
                        className={Style.button} 
                        color="secondary"
                        startIcon={<TagIcon className={Style.icon} />}>
                        Explore
                    </Button>
                </Link>
                <Link href="#" className={Style.link}>
                    <Button 
                        variant="text" 
                        className={Style.button} 
                        color="secondary"
                        startIcon={<NotificationsNoneIcon className={Style.icon} />}>
                        Notifications
                    </Button>
                </Link>
                <Link href="#" className={Style.link}>
                    <Button 
                        variant="text" 
                        className={Style.button} 
                        color="secondary"
                        startIcon={<MailOutlineIcon className={Style.icon} />}>
                        Messages
                    </Button>
                </Link>
                <Link href="#" className={Style.link}>
                    <Button 
                        variant="text" 
                        className={Style.button} 
                        color="secondary"
                        startIcon={<BookmarkBorderIcon className={Style.icon} />}>
                        Bookmarks
                    </Button>
                </Link>
                <Link href="#" className={Style.link}>
                    <Button 
                        variant="text" 
                        className={Style.button} 
                        color="secondary"
                        startIcon={<ListIcon className={Style.icon} />}>
                        Lists
                    </Button>
                </Link>
                <Link href="#" className={Style.link}>
                    <Button 
                        variant="text" 
                        className={Style.button} 
                        color="secondary"
                        startIcon={<PersonOutlineIcon className={Style.icon} />}>
                        Profile
                    </Button>
                </Link>
                <Link href="#" className={Style.link}>
                    <Button 
                        variant="text" 
                        className={Style.button} 
                        color="secondary"
                        startIcon={<MoreHorizIcon className={Style.icon} />}>
                        More
                    </Button>
                </Link>
            </nav>
        </>
    )
}

export default Navigation