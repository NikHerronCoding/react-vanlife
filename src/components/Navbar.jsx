

import React from 'react'

import {Link} from 'react-router-dom'


export default function Navbar({logoText, children}) {
    return (
        <nav className="navbar">
            <h1 className="logo-text">{logoText}</h1>

            {/* All Links Go Here */}

            <div className="link-container">

                {children}

            </div>
        </nav>
    )
}  