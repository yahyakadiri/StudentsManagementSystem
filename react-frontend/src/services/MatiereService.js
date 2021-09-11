import axios from 'axios';

const MATIERE_API_BASE_URL = "http://localhost:8080/api/v1/matieres";

class MatiereService {

    getMatieres(){
        return axios.get(MATIERE_API_BASE_URL);
    }

    createMatiere(matiere){
        return axios.post(MATIERE_API_BASE_URL, matiere);
    }

    getMatiereById(matiereId){
        return axios.get(MATIERE_API_BASE_URL + '/' + matiereId);
    }

    updateMatiere(matiere, matiereId){
        return axios.put(MATIERE_API_BASE_URL + '/' + matiereId, matiere);
    }

    deleteMatiere(matiereId){
        return axios.delete(MATIERE_API_BASE_URL + '/' + matiereId);
    }
}

export default new MatiereService()