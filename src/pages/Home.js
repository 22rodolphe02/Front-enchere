import Brand from "../components/Brand";
import React ,{Component} from "react";
import Footer from "../components/Footer";

export default class Home extends Component{

    render() {
        return(
            <div>
                <Brand></Brand>
                <div className="hero-area hero-style-three">
                    <a href="/register" className="join-merchant">Nous Rejoindre ?</a>
                    <img alt="image" src={require("../assets/images/bg/home3-banner.png")} className="home3-banner img-fluid" />
                    <img alt="image" src={require("../assets/images/bg/home3-ellipse.png")} className="img-fluid banner-ellips" />
                    <div className="container-lg container-fluid">
                        <div className="row d-flex justify-content-start align-items-end">
                            <div className="col-xl-7 col-lg-7 px-0">
                                <div className="banner3-content">
                                    <span className="wow fadeInDown" data-wow-duration="1.5s" data-wow-delay="0.5s">Bienvenue à l'hôtel des ventes</span>
                                    <h1 className="wow fadeInDown" data-wow-duration="1.5s" data-wow-delay="1s">Meilleur endroit pour enchérir</h1>
                                    <p className="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1s">
                                        Decouvrez chez nous des offres à concourir, des articles auxquels vous ne pouvez pas résister.
                                        L'article est à vous, une fois que vous remportez l'enchère
                                    </p>
                                    <a href="/encheres" className="eg-btn btn--primary3 btn--lg wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.8s">Commencez à explorer</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}