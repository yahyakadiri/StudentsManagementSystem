import axios from 'axios';

const ETUDIANT_API_BASE_URL = "http://localhost:8080/api/v1/etudiants";

class EtudiantService {

    getEtudiants(){
        return axios.get(ETUDIANT_API_BASE_URL);
    }

    createEtudiant(etudiant){
        return axios.post(ETUDIANT_API_BASE_URL, etudiant);
    }

    getEtudiantById(etudiantId){
        return axios.get(ETUDIANT_API_BASE_URL + '/' + etudiantId);
    }

    updateEtudiant(etudiant, etudiantId){
        return axios.put(ETUDIANT_API_BASE_URL + '/' + etudiantId, etudiant);
    }

    deleteEtudiant(etudiantId){
        return axios.delete(ETUDIANT_API_BASE_URL + '/' + etudiantId);
    }
}

export default new EtudiantService()