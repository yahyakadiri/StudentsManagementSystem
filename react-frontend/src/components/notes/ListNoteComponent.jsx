import React, { Component } from 'react'
import NoteService from '../../services/NoteService'

class ListNoteComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            notes: []
        }
        this.addNote = this.addNote.bind(this);
        this.editNote = this.editNote.bind(this);
        this.deleteNote = this.deleteNote.bind(this);
    }

    deleteNote(id){
        NoteService.deleteNote(id).then( res => {
            this.setState({notes: this.state.notes.filter(note => note.id !== id)});
        });
    }
    viewNote(id){
        this.props.history.push(`/view-note/${id}`);
    }
    editNote(id){
        this.props.history.push(`/add-note/${id}`);
    }

    componentDidMount(){
        if(this.state.id)
        NoteService.getNotesEt(this.state.id).then((res) => {
            this.setState({ notes: res.data});
        });
        else
        NoteService.getNotes().then((res) => {
            this.setState({ notes: res.data});
        });
    }

    addNote(){
        this.props.history.push('/add-note/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Notes List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addNote}> Add Note</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Etudiant</th>
                                    <th> Matiere</th>
                                    <th> Note</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.notes.map(
                                        note => 
                                        <tr key = {note.id}>
                                             <td> {note.etudiant} </td>   
                                             <td> {note.matiere}</td>
                                             <td> {note.note}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListNoteComponent
