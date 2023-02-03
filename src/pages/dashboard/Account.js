import React, {Component} from "react";
import Brand from "../../components/Brand";
import Footer from "../../components/Footer";
import Dashboard from "../../components/dashboard/Dashboard";
import MyAuctions from "./MyAuctions";

export default class Account extends Component{
    previous;
    client;
    component;
    constructor(props) {
        super(props);
        this.state ={
            clicked: false,
            load : false
        }
        // this.handleClick = this.handleClick.bind(this)
        // this.dashboard = this.dashboard.bind(this)
        this.auction = this.auction.bind(this)
    }

    componentDidMount() {
        let client = sessionStorage.getItem("client")
        if (client == null){
            window.location.href ="/login"
        }else{
            this.client = client;
            this.setState({
                load: true
            })
        }
    }

    disconnect(){
        sessionStorage.clear();
        window.location.href = "/"
    }

    auction(){
        this.setState({})
        this.component = <MyAuctions></MyAuctions>
    }

    /*dashboard(){
        this.setState({});
        this.component = <Dashboard></Dashboard>
    }*/


    render() {
        if (!this.state.load){
            return (
                <div className="preloader">
                    <div className="loader">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            )
        }else {
            return(
                <>
                    <Brand></Brand>
                    <div className="dashboard-section pt-120 pb-120">
                        <img alt="image" src={require("../../assets/images/bg/section-bg.png")} className="img-fluid section-bg-top" />
                        <img alt="image" src={require('../../assets/images/bg/section-bg.png')} className="img-fluid section-bg-bottom" />
                        <div className="container">
                            <div className="row ">
                                <div className="col-lg-3">
                                    <div className="nav flex-column nav-pills gap-4 wow fadeInUp">
                                        <button className="nav-link nav-btn-style mx-auto mb-20"
                                                onClick={this.auction}>
                                            Mes encheres
                                        </button>
                                        <button className="nav-link nav-btn-style mx-auto" type="button" onClick={this.disconnect} role="tab">
                                            Logout
                                        </button>
                                    </div>
                                </div>
                                <div className="col-lg-9">
                                    {this.component}
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
    }
}