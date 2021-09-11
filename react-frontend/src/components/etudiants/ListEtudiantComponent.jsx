import React, { Component } from 'react'
import EtudiantService from '../../services/EtudiantService'

class ListEtudiantComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                etudiants: []
        }
        this.addEtudiant = this.addEtudiant.bind(this);
        this.editEtudiant = this.editEtudiant.bind(this);
        this.deleteEtudiant = this.deleteEtudiant.bind(this);
    }

    deleteEtudiant(id){
        EtudiantService.deleteEtudiant(id).then( res => {
            this.setState({etudiants: this.state.etudiants.filter(etudiant => etudiant.id !== id)});
        });
    }
    viewEtudiant(id){
        this.props.history.push(`/view-etudiant/${id}`);
    }
    editEtudiant(id){
        this.props.history.push(`/add-etudiant/${id}`);
    }

    componentDidMount(){
        EtudiantService.getEtudiants().then((res) => {
            this.setState({ etudiants: res.data});
        });
    }

    addEtudiant(){
        this.props.history.push('/add-etudiant/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Etudiants List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addEtudiant}> Add Etudiant</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Etudiant First Name</th>
                                    <th> Etudiant Last Name</th>
                                    <th> Etudiant Email Id</th>
                                    <th> Etudiant Cne</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.etudiants.map(
                                        etudiant => 
                                        <tr key = {etudiant.id}>
                                             <td> {etudiant.firstName} </td>   
                                             <td> {etudiant.lastName}</td>
                                             <td> {etudiant.emailId}</td>
                                             <td> {etudiant.cne}</td>
                                             <td>
                                                 <button onClick={ () => this.editEtudiant(etudiant.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEtudiant(etudiant.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewEtudiant(etudiant.id)} className="btn btn-info">View </button>
                                             </td>
                                             <td>
                                             <a class="btn btn-info" href={"/notes/"+ etudiant.id}>Notes</a>
                                             </td>
                                             <td>
                                             <a class="btn btn-success" href={"/presences/"+ etudiant.id}>Presences</a>
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

export default ListEtudiantComponent
