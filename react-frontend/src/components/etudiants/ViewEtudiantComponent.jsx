import React, { Component } from 'react'
import EtudiantService from '../../services/EtudiantService'

class ViewEtudiantComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            etudiant: {}
        }
    }

    componentDidMount(){
        EtudiantService.getEtudiantById(this.state.id).then( res => {
            this.setState({etudiant: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Etudiant Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Etudiant First Name: </label>
                            <div> { this.state.etudiant.firstName }</div>
                        </div>
                        <div className = "row">
                            <label> Etudiant Last Name: </label>
                            <div> { this.state.etudiant.lastName }</div>
                        </div>
                        <div className = "row">
                            <label> Etudiant Email ID: </label>
                            <div> { this.state.etudiant.emailId }</div>
                        </div>
                        <div className = "row">
                            <label> Etudiant Email ID: </label>
                            <div> { this.state.etudiant.cne }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewEtudiantComponent
