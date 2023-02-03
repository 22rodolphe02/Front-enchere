import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getAuctionDetail} from "../../services/EnchereService";
import Brand from "../Brand";
import DetailEnchere from "./DetailEnchere";
import Footer from "../Footer";

export default function ViewDetailEnchere(){
    const params = useParams();
    const [load, isLoad] = useState(false);
    const [data, setDate] = useState(null);

    useEffect(()=>{
        getAuctionDetail(params.id).then(res => {
            setDate(res.data);
            isLoad(true)
            console.log(data)
        })
    }, [])

    if (!load){
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
            <>
                <Brand></Brand>
                <div className="auction-details-section pt-120">
                    <img alt="image" src={require("../../assets/images/bg/section-bg.png")} className="img-fluid section-bg-top" />
                    <img alt="image" src={require("../../assets/images/bg/section-bg.png")} className="img-fluid section-bg-bottom" />
                    <div className="container">
                        <div className="row g-4 mb-50">
                            <DetailEnchere data={data} />
                        </div>
                    </div>
                </div>

                <Footer></Footer>
            </>

        )
    }
}