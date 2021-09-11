import axios from 'axios';

const NOTE_API_BASE_URL = "http://localhost:8080/api/v1/notes";

class NoteService {

    getNotesEt(etudiant){
        return axios.get(NOTE_API_BASE_URL + '/etudiant/' + etudiant);
    }
    getNotes(){
        return axios.get(NOTE_API_BASE_URL);
    }

    createNote(note){
        return axios.post(NOTE_API_BASE_URL, note);
    }

    getNoteById(noteId){
        return axios.get(NOTE_API_BASE_URL + '/' + noteId);
    }

    updateNote(note, noteId){
        return axios.put(NOTE_API_BASE_URL + '/' + noteId, note);
    }

    deleteNote(noteId){
        return axios.delete(NOTE_API_BASE_URL + '/' + noteId);
    }
}

export default new NoteService()