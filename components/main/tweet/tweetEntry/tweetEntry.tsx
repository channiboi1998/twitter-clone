import React from 'react'
import Style from './tweetEntry.module.css'
import { Grid, Stack, Typography, IconButton } from '@mui/material'
import { MoreHoriz, FavoriteBorder, Loop, Share, ChatBubbleOutline } from '@mui/icons-material'

const tweetEntry = () => {
    return (
        <React.Fragment>
            <Grid className={`${Style.tweet} lightBorderBottom`} container>
                <Grid className={Style.user} item xs={1.5} md={1.3}>
                    <img className={Style.userImage} src="https://www.treasury.gov.ph/wp-content/uploads/2022/01/male-placeholder-image.jpeg" />
                </Grid>
                <Grid className={Style.tweetContent} item xs={10.5} md={10.7}>
                    <IconButton className={Style.options} color="secondary">
                        <MoreHoriz fontSize="inherit" />
                    </IconButton>
                    <Stack direction="row" className={Style.userDetails}>
                        <Typography variant="body2" className={Style.name}>James Q Quick</Typography>
                        <Typography variant="subtitle2" className={Style.handle}>@jamesqquick</Typography>
                        <Typography variant="subtitle2" className={Style.time}>4h</Typography>
                    </Stack>
                    <Typography variant="body2" className={Style.content}>
                        It’s amazing how bothered people get by the decisions others make — even when that choice doesn’t impact them at all.
                    </Typography>
                    <Grid container className={Style.actions}>
                        <Grid item xs={3} className={Style.action}>
                            <IconButton className={Style.icon} color="secondary">
                                <ChatBubbleOutline fontSize="inherit" />
                            </IconButton>
                            <Typography variant="subtitle2" className={Style.count}>22</Typography>
                        </Grid>
                        <Grid item xs={3} className={Style.action}>
                            <IconButton className={Style.icon} color="secondary">
                                <Loop fontSize="inherit" />
                            </IconButton>
                            <Typography variant="subtitle2" className={Style.count}>22</Typography>
                        </Grid>
                        <Grid item xs={3} className={Style.action}>
                            <IconButton className={Style.icon} color="secondary">
                                <FavoriteBorder fontSize="inherit" />
                            </IconButton>
                            <Typography variant="subtitle2" className={Style.count}>22</Typography>
                        </Grid>
                        <Grid item xs={3} className={Style.action}>
                            <IconButton className={Style.icon} color="secondary">
                                <Share fontSize="inherit" />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default tweetEntry