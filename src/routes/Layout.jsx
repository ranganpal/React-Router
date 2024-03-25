import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Footer } from '../components'

export default function Root() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}