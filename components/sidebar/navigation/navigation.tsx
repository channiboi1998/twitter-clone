import React from 'react'
import Link from 'next/link'
import { Button } from '@mui/material'
import FoundationIcon from '@mui/icons-material/Foundation'
import TagIcon from '@mui/icons-material/Tag'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import IconButton from '@mui/material/IconButton'
import Style from '../../../styles/sidebar/navigation/navigation.module.css'

const Navigation = () => {
    return (
        <>
            <nav className={Style.navigation}>
                <Link href="#" className={`${Style.link} ${Style.active}`}>
                    <IconButton className={Style.mobileButton} >
                        <FoundationIcon className={Style.svg} color="secondary" />
                    </IconButton>
                    <Button
                        variant="text"
                        className={Style.button}
                        color="secondary"
                        startIcon={<FoundationIcon className={Style.icon} />}>
                        Home
                    </Button>
                </Link>
                <Link href="#" className={`${Style.link}`}>
                    <IconButton className={Style.mobileButton} >
                        <TagIcon className={Style.svg} color="secondary" />
                    </IconButton>
                    <Button
                        variant="text"
                        className={Style.button}
                        color="secondary"
                        startIcon={<TagIcon className={Style.icon} />}>
                        Explore
                    </Button>
                </Link>
                <Link href="#" className={`${Style.link}`}>
                    <IconButton className={Style.mobileButton} >
                        <FoundationIcon className={Style.svg} color="secondary" />
                    </IconButton>
                    <Button
                        variant="text"
                        className={Style.button}
                        color="secondary"
                        startIcon={<FoundationIcon className={Style.icon} />}>
                        Notifications
                    </Button>
                </Link>
                <Link href="#" className={`${Style.link}`}>
                    <IconButton className={Style.mobileButton} >
                        <MailOutlineIcon className={Style.svg} color="secondary" />
                    </IconButton>
                    <Button
                        variant="text"
                        className={Style.button}
                        color="secondary"
                        startIcon={<MailOutlineIcon className={Style.icon} />}>
                        Messages
                    </Button>
                </Link>
                <Link href="#" className={`${Style.link}`}>
                    <IconButton className={Style.mobileButton} >
                        <PersonOutlineIcon className={Style.svg} color="secondary" />
                    </IconButton>
                    <Button
                        variant="text"
                        className={Style.button}
                        color="secondary"
                        startIcon={<PersonOutlineIcon className={Style.icon} />}>
                        Profile
                    </Button>
                </Link>
                <Link href="#" className={`${Style.link}`}>
                    <IconButton className={Style.mobileButton} >
                        <MoreHorizIcon className={Style.svg} color="secondary" />
                    </IconButton>
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