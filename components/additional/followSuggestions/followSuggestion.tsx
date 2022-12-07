import { Box, Stack } from '@mui/system'
import React from 'react'
import Style from '../../../styles/additional/followSuggestions/followSuggestion.module.css'
import { Button, Typography } from '@mui/material'

const followSuggestion = () => {
    return (
        <>
            <Box className={Style.suggestion}>
                <Stack direction="row" className={Style.row}>
                    <img
                        src="https://www.treasury.gov.ph/wp-content/uploads/2022/01/male-placeholder-image.jpeg"
                        className={Style.image}
                    />
                    <Stack direction="column">
                        <Typography
                            variant="body2"
                            className={Style.name}
                        >Built with Go</Typography>
                        <Typography
                            variant="subtitle2"
                            className={Style.handle}
                        >@RealGophersShip</Typography>
                    </Stack>
                </Stack>
                <Button className={`dark button small`} variant="contained">Follow</Button>
            </Box>
        </>
    )
}

export default followSuggestion