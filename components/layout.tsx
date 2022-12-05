import React from 'react'
import { Container, Grid, Box } from '@mui/material'
import Sidebar from './sidebar/sidebar'
import Style from '../styles/layout.module.css'
import Additional from './additional/additional'

type Props = {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <Container className={Style.layoutContainer}>
            <Box className={Style.sidebarContainer}>
                <Sidebar />
            </Box>
            <Box className={Style.mainContainer}>
                <Grid container>
                    <Grid item xs={8} sx={{ height: "2000px" }}>
                        {children}
                    </Grid>
                    <Grid item xs={4}>
                        <Additional />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}

export default Layout