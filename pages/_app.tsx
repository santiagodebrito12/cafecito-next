import '@/styles/globals.css'
import { ThemeProvider } from '@emotion/react'
import 'bootstrap/dist/css/bootstrap.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Link from 'next/link'
import { darkTheme } from '../themes/darkTheme';
import CssBaseline from '@mui/material/CssBaseline';
import { lightTheme } from '@/themes'

export default function App({ Component, pageProps }: AppProps) {
  return (
 <>
 <Head>
   <meta name="viewport" content="width=device-width, initial-scale=1" />
   <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <Link rel="preconnect" href="https://fonts.gstatic.com" />
      <Link href="https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap" rel="stylesheet"/>
      <Link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet"  />
  </Head>
  <ThemeProvider theme={darkTheme}>
  <CssBaseline />
  <Component {...pageProps} />
  </ThemeProvider>
  
 </>
 
  
  )
}
