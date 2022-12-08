import React from 'react'
import { IconButton, Box } from '@mui/material'
import TwitterIcon from '@mui/icons-material/Twitter'
import Navigation from './navigation/navigation'
import Button from '@mui/material/Button'
import UserInfo from './userInfo/userInfo'
import Style from './sidebar.module.css'
import CreateIcon from '@mui/icons-material/Create'
import Fab from '@mui/material/Fab';

const Sidebar = () => {
    return (
        <React.Fragment>
            <Box className={Style.sidebarContainer}>
                <IconButton className={Style.twitterIcon} color="primary">
                    <TwitterIcon className={Style.twitterIcon} />
                </IconButton>
                <Navigation />
                <Fab size="medium" className={`${Style.mobileTweetButton} button`} color="primary" aria-label="add">
                    <CreateIcon />
                </Fab>
                <Button
                    className={`${Style.tweetButton} button`}
                    variant="contained"
                    color="primary"
                >Tweet</Button>
                <Box className={Style.userInfoContainer}>
                    <UserInfo />
                </Box>
            </Box>
        </React.Fragment>
    )
}

export default Sidebar