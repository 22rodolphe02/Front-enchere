import React, {useEffect, useState} from "react";
import OffreEnchere from "./OffreEnchere";

export default function DetailEnchere(props){
    const [component, setComponent] = useState(null);

    useEffect(()=>{
        // console.log(props.data)
    }, [])

    function pageDescription(){
        return(
            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active wow fadeInUp" data-wow-duration="1.5s"
                     data-wow-delay=".2s" id="pills-home" role="tabpanel"
                     aria-labelledby="pills-home-tab">
                    <div className="describe-content">
                        <p className="para">
                            {props.data.description}
                        </p>
                    </div>
                </div>
            </div>
        )
    }

    function description(){
        setComponent(pageDescription)
    }

    function offre(e){
        e.target.classList.toggle("active")
        setComponent(()=> {
            return (
                <OffreEnchere></OffreEnchere>
            )
        })
    }
    return(
        <>
            <div className="col-xl-6 col-lg-7">
                <ul className="nav nav-pills d-flex flex-row justify-content-start gap-sm-4 gap-3 mb-45 wow fadeInDown"
                    data-wow-duration="1.5s" data-wow-delay=".2s" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link details-tab-btn " onClick={offre}  type="button">
                            History
                        </button>
                    </li>
                </ul>
                {component}
            </div>
        </>
    )
}