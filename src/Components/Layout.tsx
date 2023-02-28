import Head from 'next/head'
import React from 'react'
import Footer from './Footer'
import NavBar from './NavBar'

interface Props {
    children: JSX.Element
}

function Layout({children}: Props) {
  return (
    <>
        <Head>
            <link rel="shortcut icon" href="favicon.ico" />
            <title>PokeNext 2.0</title>
        </Head>
        <NavBar />
        <main className='main-container'>{children}</main>
        <Footer />
    </>
  )
}

export default Layout