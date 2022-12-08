import type { AppProps } from 'next/app'
import '../global.css'
import { createTheme, ThemeProvider } from '@mui/material'
import Layout from '../components/layout'

const customTheme = createTheme({
    palette: {
        primary: {
            light: '#0099FF',
            main: '#0099FF',
            dark: '#0099FF',
            contrastText: '#FFFFFF',
        },
        secondary: {
            light: '#000000',
            main: '#000000',
            dark: '#000000',
            contrastText: '#FFFFFF',
        }
    }
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={customTheme}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>

    )
}