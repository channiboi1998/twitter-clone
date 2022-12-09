import { Grid } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import Style from './profileNavigation.module.css'

const navigation = () => {

    const router = useRouter();

    return (
        <React.Fragment>
            <Grid container className={Style.navigation} component="nav">
                <Grid item xs={2.6} className={Style.item}>
                    <Link href="/chanverzosa98"
                        className={`${Style.link} ${router.pathname == "/[user]" ? Style.active : ""}`}
                    >
                        Tweet
                    </Link>
                </Grid>
                <Grid item xs={4} className={Style.item}>
                    <Link href="/chanverzosa98/with_replies"
                        className={`${Style.link} ${router.pathname == "/[user]/with_replies" ? Style.active : ""}`}
                    >
                        Tweet & Replies
                    </Link>
                </Grid>
                <Grid item xs={2.6} className={Style.item}>
                    <Link href="/chanverzosa98/media"
                        className={`${Style.link} ${router.pathname == "/[user]/media" ? Style.active : ""}`}
                    >
                        Media
                    </Link>
                </Grid>
                <Grid item xs={2.6} className={Style.item}>
                    <Link href="/chanverzosa98/likes"
                        className={`${Style.link} ${router.pathname == "/[user]/likes" ? Style.active : ""}`}
                    >
                        Likes
                    </Link>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default navigation