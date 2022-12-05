import { Box } from '@mui/system'
import React from 'react'
import Link from 'next/link'
import { Typography } from '@mui/material'
import Style from '../../styles/additional/greyBox.module.css'

const greyBox = (props: { children: any, title: string, url: string }) => {
    return (
        <>
            <Box className={`${Style.greyBoxContainer} greyBg`}>
                <Typography
                    className={Style.title}
                    variant="h6"
                    gutterBottom
                >
                    {props.title}
                </Typography>
                {props.children}
                <Link href={props.url}>
                    <Typography
                        className={Style.showMore}
                        variant="body2"
                    >
                        Show more
                    </Typography>
                </Link>
            </Box>
        </>
    )
}

export default greyBox