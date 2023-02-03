import React, {Component} from "react";

export default class Footer extends Component{

    render() {
        return(
            <footer className="style-2 mt-4">
                <div className="footer-top">
                    <div className="container">
                        <div className="row gy-5">
                            <div className="col-xl-3 col-lg-8 col-md-12">
                                <div className="footer-item">
                                    <a href="/"><img alt="image" src={require("../assets/images/bg/footer3-logo.png")} /></a>
                                    <ul className="address-list">
                                        <li><a href="#"><i className='bi bi-person'></i> ETU001545</a></li>
                                        <li><a href="#"><i className='bi bi-person'></i> ETU001607</a></li>
                                        <li><a href="#"><i className='bi bi-person'></i> ETU001560</a></li>
                                        <li><a href="#"><i className='bi bi-person'></i> ETU001671</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 d-flex justify-content-xl-center">
                                <div className="footer-item">
                                    <h5>Importants links</h5>
                                    <ul className="footer-list">
                                        <li><a href="/encheres">All Product</a></li>
                                        <li><a href="/dashboard" >My Account</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row d-flex align-items-center g-4">
                            <div className="col-lg-6 d-flex justify-content-lg-start justify-content-center">
                                <p>Copyright 2022
                                    <a href="#">Bid Out</a> | Design By <a href="#" className="egns-lab">Itu students</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }


}