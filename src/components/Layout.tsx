import React, { ReactNode } from 'react'
import Navbar from './Navbar'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="pt-8">
        <div className="container mx-auto max-w-7xl">{children}</div>
      </main>
    </>
  )
}

export default Layout
