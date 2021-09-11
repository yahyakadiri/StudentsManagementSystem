import React, { Component } from 'react'
import PresenceService from '../../services/PresenceService'

class ListPresenceComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            presences: []
        }
        this.addPresence = this.addPresence.bind(this);
        this.editPresence = this.editPresence.bind(this);
        this.deletePresence = this.deletePresence.bind(this);
    }

    deletePresence(id){
        PresenceService.deletePresence(id).then( res => {
            this.setState({presences: this.state.presences.filter(presence => presence.id !== id)});
        });
    }
    viewPresence(id){
        this.props.history.push(`/view-presence/${id}`);
    }
    editPresence(id){
        this.props.history.push(`/add-presence/${id}`);
    }

    componentDidMount(){
        if(this.state.id)
        PresenceService.getPresencesEt(this.state.id).then((res) => {
            this.setState({ presences: res.data});
        });
        else
        PresenceService.getPresences().then((res) => {
            this.setState({ presences: res.data});
        });
    }

    addPresence(){
        this.props.history.push('/add-presence/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Presences List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addPresence}> Add Presence</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Etudiant</th>
                                    <th> Date</th>
                                    <th> Presence</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.presences.map(
                                        presence => 
                                        <tr key = {presence.id}>
                                             <td> { presence.etudiant} </td>   
                                             <td> {presence.date}</td>
                                             <td> {presence.presence}</td>
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

export default ListPresenceComponent
