import React, { Component } from 'react'
import NoteService from '../../services/NoteService';

class CreateNoteComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            etudiant: '',
            matiere: '',
            note: ''
        }
        this.changeNoteHandler = this.changeNoteHandler.bind(this);
        this.changeEtudiantHandler = this.changeEtudiantHandler.bind(this);
        this.changeMatiereHandler = this.changeMatiereHandler.bind(this);
        this.saveOrUpdateNote = this.saveOrUpdateNote.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            NoteService.getNoteById(this.state.id).then( (res) =>{
                let note = res.data;
                this.setState({
                    etudiant: note.etudiant,
                    matiere : note.matiere,
                    note : note.note
                });
            });
        }        
    }
    saveOrUpdateNote = (e) => {
        e.preventDefault();
        let note = {etudiant: this.state.etudiant, matiere: this.state.matiere, note: this.state.note};
        console.log('note => ' + JSON.stringify(note));

        // step 5
        if(this.state.id === '_add'){
            NoteService.createNote(note).then(res =>{
                this.props.history.push('/notes');
            });
        }else{
            NoteService.updateNote(note, this.state.id).then( res => {
                this.props.history.push('/notes');
            });
        }
    }
    
    changeEtudiantHandler= (event) => {
        this.setState({etudiant: event.target.value});
    }

    changeMatiereHandler= (event) => {
        this.setState({matiere: event.target.value});
    }

    changeNoteHandler= (event) => {
        this.setState({note: event.target.value});
    }


    cancel(){
        this.props.history.push('/notes');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Note</h3>
        }else{
            return <h3 className="text-center">Update Note</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> etudiant: </label>
                                            <input placeholder="etudiant" name="etudiant" className="form-control" 
                                                value={this.state.etudiant} onChange={this.changeEtudiantHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> matiere: </label>
                                            <input placeholder="matiere" name="matiere" className="form-control" 
                                                value={this.state.matiere} onChange={this.changeMatiereHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> note: </label>
                                            <input placeholder="note" name="note" className="form-control" 
                                                value={this.state.note} onChange={this.changeNoteHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateNote}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateNoteComponent
