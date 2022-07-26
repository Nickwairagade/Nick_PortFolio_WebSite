import React from 'react'
import { NavLink } from "react-router-dom";
import './NavLink.css'

const Navbar = () => {
  return (
    <>
        <div className='container'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">NickPortFolio</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <NavLink className="nav-item"  to="/">HOME</NavLink>
                            <NavLink className="nav-item"  to="/contact">CONTACT</NavLink>
                            <NavLink className="nav-item"  to="/profile">PROFILE</NavLink>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </>
  )
}

export default Navbar