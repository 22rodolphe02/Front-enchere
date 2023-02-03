import {api} from "../utils/api";

export default async function encherir(offre){
    return await api.post("/api/projetEnchere/enchere/encherir", offre)
}