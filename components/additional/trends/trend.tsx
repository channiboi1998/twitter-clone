import React from 'react'
import IconButton from '@mui/material/IconButton'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Style from '../../../styles/additional/trends/trend.module.css'

const trend = () => {
    return (
        <>
            <Box className={`${Style.trend}`}>
                <Typography
                    variant="body2"
                    className={Style.location}
                >Trending in Philippines</Typography>
                <Typography
                    variant="subtitle2"
                    className={Style.label}
                >Bangkok</Typography>
                <Typography
                    variant="body2"
                    className={Style.tweetCount}
                >313k Tweets</Typography>
                <IconButton
                    aria-label="configure-trend"
                    className={Style.icon}
                >
                    <MoreHorizIcon />
                </IconButton>
            </Box>
        </>
    )
}

export default trend