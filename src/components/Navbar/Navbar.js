import React from 'react'
import { NavLink } from "react-router-dom";
import './NavLink.css'

const Navbar = () => {
  return (
    <>
        <div className='container'>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">NickPortFolio</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <NavLink className="nav-item" activeClassName="is-active" to="/">HOME</NavLink>
                            <NavLink className="nav-item" activeClassName="is-active" to="/contact">CONTACT</NavLink>
                            <NavLink className="nav-item" activeClassName="is-active" to="/profile">PROFILE</NavLink>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </>
  )
}

export default Navbar