import React, { Component } from 'react'
import MatiereService from '../../services/MatiereService';

class CreateMatiereComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            enseignant: '',
            matiere: '',
            niveau: ''
        }
        this.changeMatiereHandler = this.changeMatiereHandler.bind(this);
        this.changeEnseignantHandler = this.changeEnseignantHandler.bind(this);
        this.changeNiveauHandler = this.changeNiveauHandler.bind(this);
        this.saveOrUpdateMatiere = this.saveOrUpdateMatiere.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            MatiereService.getMatiereById(this.state.id).then( (res) =>{
                let matiere = res.data;
                this.setState({enseignant: matiere.enseignant,
                    matiere: matiere.matiere,
                    niveau : matiere.niveau,
                });
            });
        }        
    }
    saveOrUpdateMatiere = (e) => {
        e.preventDefault();
        let matiere = {enseignant: this.state.enseignant, name: this.state.matiere, niveau: this.state.niveau};
        console.log('matiere => ' + JSON.stringify(matiere));

        // step 5
        if(this.state.id === '_add'){
            MatiereService.createMatiere(matiere).then(res =>{
                this.props.history.push('/matieres');
            });
        }else{
            MatiereService.updateMatiere(matiere, this.state.id).then( res => {
                this.props.history.push('/matieres');
            });
        }
    }
    
    changeMatiereHandler= (event) => {
        this.setState({matiere: event.target.value});
    }

    changeEnseignantHandler= (event) => {
        this.setState({enseignant: event.target.value});
    }

    changeNiveauHandler= (event) => {
        this.setState({niveau: event.target.value});
    }

    cancel(){
        this.props.history.push('/matieres');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Matiere</h3>
        }else{
            return <h3 className="text-center">Update Matiere</h3>
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
                                            <label> matiere: </label>
                                            <input placeholder="Matiere" name="matiere" className="form-control" 
                                                value={this.state.matiere} onChange={this.changeMatiereHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> enseignant: </label>
                                            <input placeholder="Enseignant" name="enseignant" className="form-control" 
                                                value={this.state.enseignant} onChange={this.changeEnseignantHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> niveau: </label>
                                            <input placeholder="Niveau" name="niveau" className="form-control" 
                                                value={this.state.niveau} onChange={this.changeNiveauHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateMatiere}>Save</button>
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

export default CreateMatiereComponent
