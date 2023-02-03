import React, {Component} from "react";
import Brand from "../../components/Brand";
import {getAuctionAEncherir, getAuctionDisponible} from "../../services/EnchereService";
export default class Enchere extends Component{
    constructor(props) {
        super(props);
        this.state = {
            auctions: [],
            load: false
        }
    }

    async componentDidMount() {
        const client = JSON.parse(sessionStorage.getItem("client"));
        console.log(client)
        if (client == null) {
            const res = await getAuctionDisponible()
            console.log(res)
            this.setState({
                auctions: res.data,
                load: true
            })
        } else {
            const res = await getAuctionAEncherir(client.id)
                this.setState({
                    auctions: res.data,
                    load: true
                })
        }

    }


    detail(id){
        window.location.href = `/encherir/${id}`;
        // window.history.push("/detail-enchere", {auction: auction})
    }



    render() {
        console.log(this.state.load)
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
        }else{
            return(
                <div>
                    <Brand></Brand>
                    <div className="row mt-5" style={{ marginLeft: 60}}>
                        <div className="col-md-12">
                            <div className="live-auction-section pt-120 pb-120">
                                <img alt="image" src={require("../../assets/images/bg/section-bg.png")} className="img-fluid section-bg-top" />
                                <img alt="image" src={require("../../assets/images/bg/section-bg.png")} className="img-fluid section-bg-bottom" />
                                <div className="container">

                                    <div className="row gy-4 mb-60 d-flex">
                                        {this.state.auctions.map(auction =>
                                            <div className="col-lg-4 col-md-6 col-sm-10 " key={auction.id}>
                                                <div data-wow-duration="1.5s" data-wow-delay="0.2s" key={auction.id}
                                                     className="eg-card auction-card1 wow fadeInDown">
                                                    <div className="auction-content">
                                                        <h4><a>{auction.produit}</a></h4>
                                                        <p>Prix min : <span>{auction.prixMin}</span></p>
                                                        <div className="auction-card-bttm">
                                                            <button onClick={() => this.detail(auction.id)} className="btn btn--primary btn--sm">Enchérir</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*<Footer></Footer>*/}
                </div>
            )
        }

    }
}