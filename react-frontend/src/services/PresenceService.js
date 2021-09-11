import axios from 'axios';

const PRESENCE_API_BASE_URL = "http://localhost:8080/api/v1/presences";

class PresenceService {

    getPresencesEt(etudiant){
        return axios.get(PRESENCE_API_BASE_URL + '/etudiant/' + etudiant);
    }

    getPresences(){
        return axios.get(PRESENCE_API_BASE_URL);
    }

    createPresence(presence){
        return axios.post(PRESENCE_API_BASE_URL, presence);
    }

    getPresenceById(presenceId){
        return axios.get(PRESENCE_API_BASE_URL + '/' + presenceId);
    }

    updatePresence(presence, presenceId){
        return axios.put(PRESENCE_API_BASE_URL + '/' + presenceId, presence);
    }

    deletePresence(presenceId){
        return axios.delete(PRESENCE_API_BASE_URL + '/' + presenceId);
    }
}

export default new PresenceService()