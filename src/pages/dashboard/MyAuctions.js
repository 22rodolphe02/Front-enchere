import React, {useEffect, useState} from "react";
import {getAuctionByClient} from "../../services/EnchereService";

export default function MyAuctions(){
    const [data, setData] = useState(null);
    const [load, isLoad] = useState(false)

    useEffect(()=>{
        let client = JSON.parse(sessionStorage.getItem("client"))

        getAuctionByClient(client.id).then(res=>{
            setData(res.data)
            isLoad(true)

        })
    }, [])

    function click(e){
        window.location.href = `/detail-enchere/${e.target.id}`

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
            <div className="table-wrapper">
                <table className="eg-table order-table table mb-0">
                    <thead>
                    <tr>
                        <th>Bidding ID</th>
                        <th>Date</th>
                        <th>Prix depart</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map(auction =>
                        <tr key={auction.id}>
                            <td>{auction.id}</td>
                            <td>{auction.dateDebut}</td>
                            <td>Ar{auction.prixMin}</td>
                            <td className="text-green">finish</td>
                            <td>
                                <button className="eg-btn action-btn green" id={auction.id} onClick={click}>Details</button>
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        )
    }
}