import React from 'react'
import { Box, Button } from '@mui/material'
import Style from './userInfo.module.css'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const UserInfo = () => {
    return (
        <React.Fragment>
            <Box>
                <Button
                    variant="text"
                    className={Style.userInfo}
                    endIcon={<MoreHorizIcon className={Style.actionIcon} />}
                    color="secondary">
                    <Box className={Style.userDetails}>
                        <img
                            src="https://www.treasury.gov.ph/wp-content/uploads/2022/01/male-placeholder-image.jpeg"
                            className={Style.userImage}
                        />
                        <Box className={Style.userText}>
                            <span className={Style.name}>Christian Verzosa</span>
                            <span className={Style.handle}>@chanverzosa98</span>
                        </Box>
                    </Box>
                </Button>
            </Box>
        </React.Fragment>
    )
}

export default UserInfo