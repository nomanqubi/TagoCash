import React from 'react'
import { Navbars } from '../Navbar/Navbars'
import { Footer } from '../Footer/Footer'

export const Layout = (props) => {
    return (
        <div className={props.class}>
            <Navbars />
            {props.children}
            <Footer />
        </div>
    )
}
