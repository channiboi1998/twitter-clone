import React from 'react'
import Link from 'next/link'
import Style from './footer.module.css'
import { Box } from '@mui/material'

const footer = () => {
    return (
        <React.Fragment>
            <nav className={Style.navigation}>
                <Link href="#" className={Style.link}>Terms of Service</Link>
                <Link href="#" className={Style.link}>Privacy Policy</Link>
                <Link href="#" className={Style.link}>Cookie Policy</Link>
                <Link href="#" className={Style.link}>Accessibility</Link>
                <Link href="#" className={Style.link}>Ads Info</Link>
                <Box>
                    <Link href="#" className={Style.link}>© 2022 Twitter, Inc.</Link>
                </Box>
            </nav>
        </React.Fragment>
    )
}

export default footer