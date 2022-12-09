import React from 'react'
import Link from 'next/link'
import ProfileNavigation from '../profileNavigation/profileNavigation'
import { Box, Typography } from '@mui/material'
import Style from './hero.module.css'

const hero = () => {
    return (
        <React.Fragment>
            <Box className={`${Style.hero} lightBorderBottom`}>
                <Box className={Style.banner}>
                    <img
                        className={Style.avatar}
                        src="https://www.treasury.gov.ph/wp-content/uploads/2022/01/male-placeholder-image.jpeg"
                    />
                </Box>
                <Box className={Style.userInfo}>
                    <Typography
                        variant="body2"
                        className={Style.name}
                    >Christian Verzosa</Typography>
                    <Typography
                        variant="subtitle2"
                        className={Style.handle}
                    >@chanverzosa98</Typography>
                    <Box className={Style.follow}>
                        <Link href="#" className={Style.link}>
                            <Typography
                                variant="subtitle2"
                            ><span className={Style.count}>15</span>Following</Typography>
                        </Link>
                        <Link href="#" className={Style.link}>
                            <Typography
                                variant="subtitle2"
                            ><span className={Style.count}>3</span>Followers</Typography>
                        </Link>
                    </Box>
                </Box>
                <ProfileNavigation />
            </Box>
        </React.Fragment>
    )
}

export default hero