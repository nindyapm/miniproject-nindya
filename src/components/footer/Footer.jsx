import React from "react";

const Footer = () => {
    return (
        <footer className="text-black pt-5 pb-4">
            <div className="container text-md-left">
                <div className="row text-md-left">
                    <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-black">
                            ROTAN’s
                        </h5>
                        <p style= {{ textAlign: "justify"}}>
                            Cintailah produk dalam negeri. Tas Rotan’s dengan 
                            kualitas yang terjamin dan modern membuat penampilan 
                            semakin sempurna. Cocok untuk pria maupun wanita. 
                        </p>
                    </div>
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3" style= {{ textAlign: "left"}}>
                        <h5 className="text-uppercase mb-4 font-weight-bold text-black">
                            Useful Links
                        </h5>
                        <p>
                            <a
                            href="#"
                            className="text-black"
                            style={{ textDecoration: "none" }}
                            >
                            Your Account
                            </a>
                        </p>
                        <p>
                            <a
                            href="#"
                            className="text-black"
                            style={{ textDecoration: "none" }}
                            >
                            Reseller
                            </a>
                        </p>
                        <p>
                            <a
                            href="#"
                            className="text-black"
                            style={{ textDecoration: "none" }}
                            >
                            Help
                            </a>
                        </p>
                    </div> 
                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3" style= {{ textAlign: "left"}}>
                        <h5 className="text-uppercase mb-4 font-weight-bold text-black">
                            Contact
                        </h5>
                        <p>
                            <a
                            href="#"
                            className="text-black"
                            style={{ textDecoration: "none" }}
                            >
                                <i className="fas fa-home mr-3" /> Barito Timur, Kalimantan Tengah
                            </a>
                        </p>
                        <p>
                            <a
                            href="#"
                            className="text-black"
                            style={{ textDecoration: "none"}}
                            >
                                <i className="fas fa-phone mr-3" /> +62 85687965567
                            </a>
                        </p>
                        <p>
                            <a
                            href="#"
                            className="text-black"
                            style={{ textDecoration: "none"}}
                            >   
                                <i className="fas fa-envelope mr-3" /> rotanbartim@gmail.com
                            </a>
                        </p>
                    </div>
                </div>
                <hr className="mb-4" />
                <div className="row align-items-center">
                    <div className="col-md-7 col-lg-7">
                        <p style= {{ textAlign: "left"}}>
                            Copyright ©2023 eCommerce, Made by NindyaPM
                        </p>
                    </div>
                    <div className="col-md-5 col-lg-5">
                        <div className="text-md-right" style= {{ textAlign: "right"}}>
                            <ul>
                                <li className="list-inline-item">
                                    <a
                                    href="https://www.instagram.com/nindya.pm/"
                                    className="btn-floating btn-sm text-black"
                                    style={{ fontSize: 23 }}
                                    >
                                    <i className="fab fa-instagram" />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a
                                    href="https://www.facebook.com/nindya.putri.319?mibextid=ZbWKwL"
                                    className="btn-floating btn-sm text-primary"
                                    style={{ fontSize: 23 }}
                                    >
                                    <i className="fab fa-facebook" />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a
                                    href="https://www.linkedin.com/in/nindyapm/"
                                    className="btn-floating btn-sm text-primary"
                                    style={{ fontSize: 23 }}
                                    >
                                    <i className="fab fa-linkedin" />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a
                                    href="https://youtube.com/@nindyapm8361"
                                    className="btn-floating btn-sm text-danger"
                                    style={{ fontSize: 23 }}
                                    >
                                    <i className="fab fa-youtube" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
} 

export default Footer