import React from 'react'

import { IconButton, Box } from '@mui/material'
import TwitterIcon from '@mui/icons-material/Twitter'
import Navigation from './navigation'
import Button from '@mui/material/Button'
import UserInfo from './userInfo'
import Style from '../../styles/sidebar/sidebar.module.css'

const Sidebar = () => {
    return (
        <>
            <Box className={Style.sidebarContainer}>
                <IconButton className={Style.twitterIcon} aria-label="delete" color="primary">
                    <TwitterIcon className={Style.twitterIcon} />
                </IconButton>
                <Navigation />
                <Button
                    className={`${Style.tweetButton} button`}
                    variant="contained"
                    color="primary"
                >Tweet</Button>
                <Box className={Style.userInfoContainer}>
                    <UserInfo />
                </Box>
            </Box>
        </>
    )
}

export default Sidebar