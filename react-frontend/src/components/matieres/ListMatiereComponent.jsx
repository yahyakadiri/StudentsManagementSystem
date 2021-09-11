import React, { Component } from 'react'
import MatiereService from '../../services/MatiereService'

class ListMatiereComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                matieres: []
        }
        this.addMatiere = this.addMatiere.bind(this);
        this.editMatiere = this.editMatiere.bind(this);
        this.deleteMatiere = this.deleteMatiere.bind(this);
    }

    deleteMatiere(id){
        MatiereService.deleteMatiere(id).then( res => {
            this.setState({matieres: this.state.matieres.filter(matiere => matiere.id !== id)});
        });
    }
    viewMatiere(id){
        this.props.history.push(`/view-matiere/${id}`);
    }
    editMatiere(id){
        this.props.history.push(`/add-matiere/${id}`);
    }

    componentDidMount(){
        MatiereService.getMatieres().then((res) => {
            this.setState({ matieres: res.data});
        });
    }

    addMatiere(){
        this.props.history.push('/add-matiere/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Matieres List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addMatiere}> Add Matiere</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Matiere</th>
                                    <th> Enseignant</th>
                                    <th> Niveau</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.matieres.map(
                                        matiere => 
                                        <tr key = {matiere.id}>
                                             <td> { matiere.name} </td>   
                                             <td> {matiere.enseignant}</td>
                                             <td> {matiere.niveau}</td>
                                             <td>
                                                 <button onClick={ () => this.editMatiere(matiere.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteMatiere(matiere.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewMatiere(matiere.id)} className="btn btn-info">View </button>
                                             </td>
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

export default ListMatiereComponent
