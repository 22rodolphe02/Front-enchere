import React, {Component} from "react";

export default class Brand extends Component{

    showMenu(){
        let main = document.getElementsByClassName("main-menu")
        main[0].classList.add('show-menu')

    }

    hideMenu(){
        let main = document.getElementsByClassName("main-menu")
        main[0].classList.remove('show-menu')
    }

    render() {
        return(
            <header className="header-area style-3">
                <div className="header-logo">
                    <a href="/"><img alt="image" src={require('../assets/images/bg/header3-logo.png')} /></a>
                </div>
                <div className="main-menu">
                    <div className="mobile-logo-area d-lg-none d-flex justify-content-between align-items-center">
                        <div className="mobile-logo-wrap ">
                            <a href="/"><img alt="image" src={require('../assets/images/bg/header3-logo.png')} /></a>
                        </div>
                        <div className="menu-close-btn">
                            <i className="bi bi-x-lg" onClick={this.hideMenu}></i>
                        </div>
                    </div>
                    <ul className="menu-list">
                        <li ><a href="/" >Home</a></li>
                        <li><a href="/encheres">Parcourir Enchère</a></li>
                        <li><a href="/login">Login</a></li>
                    </ul>
                </div>
                <div className="nav-right d-flex align-items-center">
                    <div className="eg-btn btn--primary3 header-btn">
                        <a href="/dashboard" >My Account</a>
                    </div>
                </div>
                <div className="nav-right d-flex align-items-center">
                    <div className="mobile-menu-btn d-lg-none d-block">
                        <i className='bx bx-menu' onClick={this.showMenu}></i>
                    </div>
                </div>
            </header>
        )
    }
}