import React from 'react'
import Head from 'next/head'
import { Box } from '@mui/material'
import Hero from '../../components/main/user/profile/hero/hero'

const Media = () => {
    return (
        <React.Fragment>
            <Box>
                <Head>
                    <title>Home / Twitter</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
                <Box className="headingContainer">
                    <h2>Christian Verzosa</h2>
                </Box>
                <Hero />
                MEDIA
            </Box>
        </React.Fragment>
    )
}

export default Media