import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getAuctionDetail} from "../../services/EnchereService";
import Brand from "../Brand";
import Footer from "../Footer";
import OffreEnchere from "./OffreEnchere";
import DetailEnchere from "./DetailEnchere";
import {useForm} from "react-hook-form";
import encherir from "../../services/ClientService";

export default function Encherir(){
    const params = useParams();
    const [load, isLoad] = useState(false);
    const [data, setDate] = useState(null);
    const [press, isPressed] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [message, setMessage] = useState(null);
    const {handleSubmit, register} = useForm()

    useEffect(()=>{
        getAuctionDetail(params.id).then(res => {
            setDate(res.data);
            isLoad(true)
            // console.log(data)
        })
    }, [])

    function offre(data){
        setMessage(null)
        const client = JSON.parse(sessionStorage.getItem("client"));
        isPressed(true);
        if (client == null){
            window.location.href = "/login"
        }

        data.idClient = client.id;
        data.idEnchere = params.id;

        encherir(data).then(res => {
            if (res.status === 200) {
                setMessage(res.data.message);
                isPressed(false)
            }
        }).catch(e => {
            isPressed(false);
        });
    }

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
                            <div className="col-xl-6 col-lg-5">

                                <div className="product-details-right  wow fadeInDown" data-wow-duration="1.5s"
                                     data-wow-delay=".2s">
                                    <h3>{data.produit}</h3>
                                    <h4>Prix de l'enchère: <span>Ar {data.prixMin}</span></h4>
                                    <div className="bid-form">
                                        <div className="form-title">
                                            <h5>Enchérir maintenant</h5>
                                            <p>Montant de l'enchère : Enchère minimum {data.prixMin} Ar</p>
                                        </div>
                                        {message ?
                                            <div className="alert alert-primary" role="alert">
                                                {message}
                                            </div>: ""
                                        }
                                        
                                        <form onSubmit={handleSubmit(offre)}>
                                            <div className="form-inner gap-2">
                                                <input type="text" placeholder="Ar 00.00" {...register("montant")} />

                                                <button className={!press ? "eg-btn btn--primary btn--sm" : "eg-btn btn--mise-disable btn--sm"} disabled={press}>
                                                    {press ? <div className="spinner-border spinner-border-sm me-1" role="status" >

                                                    </div> : "" }MISER</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer></Footer>
            </>

        )
    }
}