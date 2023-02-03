import React, {useEffect, useState} from "react";
import {getOffre} from "../../services/EnchereService";
import {useParams} from "react-router-dom";

export default function OffreEnchere(){
    const [data, setData] = useState(null);
    const [load, isLoad] = useState(false)
    const params = useParams();

    useEffect(()=>{
        getOffre(params.id).then(res=>{
            setData(res.data)
            isLoad(true)
        })
    })

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
                <div className="bid-list-area">
                    <ul className="bid-list">
                        {data.map(offre =>
                            <li>
                                <div className="row d-flex align-items-center">
                                    <div className="col-7">
                                        <div className="bidder-area">
                                            <div className="bidder-img">
                                            </div>
                                            <div className="bidder-content">
                                                <a href="src/components#"><h6>{offre.idClient}</h6></a>
                                                <p>{offre.montant} Ar</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-5 text-end">
                                        <div className="bid-time">
                                            <p>{offre.date}</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        )}
                    </ul>
                </div>
        )
    }
}