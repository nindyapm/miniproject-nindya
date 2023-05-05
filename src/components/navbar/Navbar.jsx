import React from "react"

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
                        <a className="nav-link" href="/LandingPage">
                            Home
                        </a>
                        <a className="nav-link" href="/ProductPage">
                            Product
                        </a>
                        <a className="nav-link" href="#">
                            About Us
                        </a>
                    </div>
                </div>
                <div className="navbarNavAltMarkup collapse navbar-collapse justify-content-end">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/KeranjangPesanan">
                                <i className="fa fa-shopping-cart"/>
                            </a>
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