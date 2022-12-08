import React from 'react'
import { Container, Grid, Box } from '@mui/material'
import Sidebar from './sidebar/sidebar'
import Style from './layout.module.css'
import Additional from './additional/additional'

import MobileHeader from './mobile/mobileHeader/mobileHeader'
import MobileFooter from './mobile/mobileFooter/mobileFooter'

type Props = {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <Container className={Style.container}>
            <Box display={{
                xs: "block",
                sm: "none",
                md: "none",
                lg: "none",
            }}>
                <MobileHeader />
                <MobileFooter />
            </Box>
            <Box className={Style.sidebar}>
                <Sidebar />
            </Box>
            <Box className={Style.main}>
                <Grid container>
                    <Grid item className={Style.content} md={7.5} sm={12} xs={12}>
                        {children}
                    </Grid>
                    <Grid item
                        className={Style.additional}
                        md={4.5}
                        display={{
                            xs: "none",
                            sm: "none",
                            md: "block",
                        }}
                    >
                        <Additional />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}

export default Layout