import React from 'react'
import Head from 'next/head'
import { Box, Container } from '@mui/material'
import CreateTweet from '../components/main/tweet/createTweet/createTweet'
import TweetEntry from '../components/main/tweet/tweetEntry/tweetEntry'

export default function Home() {
    return (
        <React.Fragment>
            <Box>
                <Head>
                    <title>Home / Twitter</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
                <Box className="headingContainer">
                    <h2>Home</h2>
                </Box>
                <CreateTweet />
                <TweetEntry />
                <TweetEntry />
                <TweetEntry />
            </Box>
        </React.Fragment>
    )
}
