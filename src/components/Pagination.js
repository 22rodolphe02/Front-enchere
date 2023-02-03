import React from "react";

export default class Pagination extends React.Component{
    render() {
        return(
            <div className="row">
                <nav className="pagination-wrap">
                    <ul className="pagination d-flex justify-content-center gap-md-3 gap-2">
                        <li className="page-item">
                            <a className="page-link" href="#" tabIndex="-1">Prev</a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">01</a></li>
                        <li className="page-item active" aria-current="page">
                            <a className="page-link" href="#">02</a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">03</a></li>
                        <li className="page-item">
                            <a className="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}