import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="py-2 navbar navbar-expand-lg navbar-dark-bg bg-dark">
            <Link to="/" className="ml-5 navbar-brand">
                React Redux Contact App
            </Link>
        </nav>
    )
}
