import React from 'react'
import Head from 'next/head'
import { Box } from '@mui/material'
import TweetEntry from '../components/main/tweet/tweetEntry/tweetEntry'
import Hero from '../components/main/user/profile/hero/hero'

const User = () => {
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
                <TweetEntry />
                <TweetEntry />
                <TweetEntry />
            </Box>
        </React.Fragment>
    )
}

export default User