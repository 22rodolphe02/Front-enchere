import {api} from "../utils/api";

export async function getAuctionPerPage(numberPage){
    return await api.get("/api/projetEnchere/enchere", numberPage);
}

export async function getAuctionDisponible(){
    return await api.get("/api/projetEnchere/enchere/toutesLesEnchereEnCours");
}

export async function getAuctionAEncherir(idClient){
    return await api.get(`/api/projetEnchere/enchere/leursEnchereEnCours/${idClient}`);
}

export async function getAuctionDetail(id){
    return await api.get(`/api/projetEnchere/enchere/fiche/${id}`);
}

export async function getAuctionByClient(idClient){
    return await api.get(`/api/projetEnchere/enchere/mesEnchereTermine/${idClient}`)
}


// offre par enchères
export async function getOffre(idAuction){
    return await api.get(`/api/projetEnchere/offre/getOffreParEnchere/${idAuction}`)
}