import React, { Component } from 'react'
import MatiereService from '../../services/MatiereService'

class ViewMatiereComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            matiere: {}
        }
    }

    componentDidMount(){
        MatiereService.getMatiereById(this.state.id).then( res => {
            this.setState({matiere: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Matiere Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Matiere First Name: </label>
                            <div> { this.state.matiere.firstName }</div>
                        </div>
                        <div className = "row">
                            <label> Matiere Last Name: </label>
                            <div> { this.state.matiere.lastName }</div>
                        </div>
                        <div className = "row">
                            <label> Matiere Email ID: </label>
                            <div> { this.state.matiere.emailId }</div>
                        </div>
                        <div className = "row">
                            <label> Matiere Email ID: </label>
                            <div> { this.state.matiere.cne }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewMatiereComponent
