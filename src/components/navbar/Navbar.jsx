import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="fixed-top navbar navbar-expand-lg pb-2">
            <div className="container-fluid">
                    <span className="navbar-brand">Rotan's</span>  
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target=".navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div
                    className="navbarNavAltMarkup collapse navbar-collapse justify-content-end"
                >
                    <div className="navbar-nav">
                        <Link to={"/LandingPage"} className="nav-link">
                            Home
                        </Link>
                        <Link to={"/ProductPage"} className="nav-link">
                            Product
                        </Link>
                        <a className="nav-link" href="#">
                            About Us
                        </a>
                    </div>
                </div>
                <div className="navbarNavAltMarkup collapse navbar-collapse justify-content-end">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link to={"/KeranjangPesanan"} className="nav-link">
                                <i className="fa fa-shopping-cart"/>
                        </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i className="fa fa-user" />
                            </a>
                        </li>
                    </ul>   
                </div>
            </div>
        </nav>
    )
}

export default Navbar