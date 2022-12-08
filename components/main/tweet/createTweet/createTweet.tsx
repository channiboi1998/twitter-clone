import React from 'react'
import { TextField, Grid, Button, IconButton } from '@mui/material'
import Style from './createTweet.module.css'
import { BrokenImageOutlined, GifBoxOutlined, 
            PollOutlined, EmojiEmotionsOutlined, 
            CalendarMonthOutlined, LocationOnOutlined, 
            MoreHoriz } from '@mui/icons-material'

const createTweet = () => {
    return (
        <React.Fragment>
            <Grid className={`${Style.form} lightBorderBottom`} container component="form">
                <Grid className={Style.user} item xs={1.5} md={1.3}>
                    <img className={Style.userImage} src="https://www.treasury.gov.ph/wp-content/uploads/2022/01/male-placeholder-image.jpeg" />
                </Grid>
                <Grid className={Style.formContent} item xs={10.5} md={10.7}>
                    <TextField
                        className={`${Style.tweetInput} lightBorderBottom`}
                        placeholder="What’s happening?"
                        multiline
                        variant="standard"
                        fullWidth
                        InputProps={{
                            disableUnderline: true
                        }}
                    />
                    <Grid container className={Style.formActions}>
                        <Grid item xs={8}>
                            <IconButton className={Style.icon} color="primary">
                                <BrokenImageOutlined fontSize="inherit" />
                            </IconButton>
                            <IconButton className={Style.icon} color="primary">
                                <GifBoxOutlined fontSize="inherit" />
                            </IconButton>
                            <IconButton className={Style.icon} color="primary">
                                <PollOutlined fontSize="inherit" />
                            </IconButton>
                            <IconButton className={Style.icon} color="primary">
                                <EmojiEmotionsOutlined fontSize="inherit" />
                            </IconButton>
                            <IconButton className={Style.icon} color="primary">
                                <CalendarMonthOutlined fontSize="inherit" />
                            </IconButton>
                            <IconButton className={Style.icon} color="primary">
                                <LocationOnOutlined fontSize="inherit" />
                            </IconButton>
                            <IconButton className={Style.icon} color="primary">
                                <MoreHoriz fontSize="inherit" />
                            </IconButton>
                        </Grid>
                        <Grid item xs={4} textAlign="right">
                            <Button className={`button`} color="primary" variant="contained">Tweet</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default createTweet 