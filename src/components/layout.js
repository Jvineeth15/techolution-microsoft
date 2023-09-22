import React from 'react'
import Footer from './footer'
import techolutionLogo from '../../static/TecholutionLogo.svg'
export default function Layout( { children } ) {
  return (
    <>
        <div className="top">
            <img src={techolutionLogo} alt="" />
        </div>
        <>
            {children}
        </>
        {/* <footer>
            <Footer />
        </footer> */}
    </>
  )
}
