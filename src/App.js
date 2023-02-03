import React, { Component } from 'react';
import './App.css';

import "./assets/css/all.css"
import "./assets/css/bootstrap.min.css"
import "./assets/css/boxicons.min.css"
import "./assets/css/bootstrap-icons.css"
import "./assets/css/jquery-ui.css"
import "./assets/css/slick-theme.css"
import "./assets/css/slick.css"
import "./assets/css/nice-select.css"
import "./assets/css/magnific-popup.css"
import "./assets/css/odometer.css"
import "./assets/css/style.css"

import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Enchere from "./pages/enchere/Enchere";
import Account from "./pages/dashboard/Account";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Encherir from "./components/enchere/Encherir";
import ViewDetailEnchere from "./components/enchere/ViewDetailEnchere";

// import './assets/js/main'

class App extends React.Component {
  render() {
    return (
        <div>

            <Routes>
                <Route path={"/"} element={<Home/>} />
                <Route path={"/encheres"} element={<Enchere/>} />
                <Route path={"/dashboard"} element={<Account/>} />
                <Route path={"/register"} element={<Register/>} />
                <Route path={"/detail-enchere/:id"} element={<ViewDetailEnchere/>} />
                <Route path={"/encherir/:id"} element={<Encherir/>} />
                <Route path={"/login"} element={<Login/>} />
            </Routes>

            {/*<script src="./assets/js/jquery-3.6.0.min.js"></script>
            <script src="./assets/js/jquery-ui.js"></script>
            <script src="./assets/js/bootstrap.bundle.min.js"></script>
            <script src="./assets/js/wow.min.js"></script>
            <script src="./assets/js/swiper-bundle.min.js"></script>
            <script src="./assets/js/slick.js"></script>
            <script src="./assets/js/jquery.nice-select.js"></script>
            <script src="./assets/js/odometer.min.js"></script>
            <script src="./assets/js/viewport.jquery.js"></script>
            <script src="./assets/js/jquery.magnific-popup.min.js"></script>
            <script src="./assets/js/main.js"></script>*/}
        </div>
    );
  }
}

export default App;
