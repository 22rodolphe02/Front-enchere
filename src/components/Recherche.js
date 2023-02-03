import React, {Component, useCallback} from "react";
import {getAllCategories} from "../services/CategoriesService";
import debounce from 'lodash.debounce';
import Brand from "./Brand";
import Footer from "./Footer";

export default class Recherche extends Component{
    categories
    constructor(props) {
        super(props);
        this.state = {}

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentDidMount() {
        getAllCategories().then(res=>{
            this.categories = res.data
        })
    }

    async handleInputChange(event) {
        setTimeout(() =>{
            event.preventDefault();
            const target = event.target;
            this.setState({
                [target.name]: target.value,
            });

            console.log(this.state)
        }, 800)

    }

    async filter(){

    }

    render() {

        return(
            <div>
                <Brand></Brand>
                <div className="row mt-5">
                    <div className="col-md-4">
                        <div className="form-wrapper" >
                            <div className="form-title">
                                <h3>Recherche</h3>
                            </div>
                            <form className="w-100">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="form-inner">
                                            <label>Produit</label>
                                            <input
                                                onKeyUp={this.handleInputChange} name="produit" type="text" placeholder="Entrer le nom du produit" />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-inner">
                                            <label>Prix Min</label>
                                            <input type="number" name="prixMinMin" onKeyUp={this.handleInputChange} id="password" placeholder="prix min" />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-inner">
                                            <label>Prix Max</label>
                                            <input type="number" name="prixMinMax" id="password" placeholder="prix max" />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-inner">
                                            <label>Date debut Min</label>
                                            <input type="date" name="dateDebutMin" onKeyUp={this.handleInputChange} id="password" placeholder="date debut min" />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-inner">
                                            <label>Date debut max</label>
                                            <input type="date" name="dateDebutMax" onKeyUp={this.handleInputChange} id="dateDebutMax" placeholder="date debut max" />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-inner">
                                            <label>Duree min</label>
                                            <input type="time" name="dureeMin" onKeyUp={this.handleInputChange} id="dureeMin" placeholder="duree max" />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-inner">
                                            <label>Duree Max</label>
                                            <input type="time" name="dureeMax" onKeyUp={this.handleInputChange} id="dureeMax" placeholder="duree max" />
                                        </div>
                                    </div>
                                </div>
                                <button className="btn btn-outline-primary">Filtrer</button>
                            </form>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }


}