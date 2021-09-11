import React, { Component } from 'react'
import PresenceService from '../../services/PresenceService';

class CreatePresenceComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            etudiant: '',
            date: '',
            presence: ''
        }
        this.changeEtudiantHandler = this.changeEtudiantHandler.bind(this);
        this.changeDateHandler = this.changeDateHandler.bind(this);
        this.changePresenceHandler = this.changePresenceHandler.bind(this);
        this.saveOrUpdatePresence = this.saveOrUpdatePresence.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            PresenceService.getPresenceById(this.state.id).then( (res) =>{
                let presence = res.data;
                this.setState({
                    etudiant: presence.etudiant,
                    date : presence.date,
                    presence : presence.presence
                });
            });
        }        
    }
    saveOrUpdatePresence = (e) => {
        e.preventDefault();
        let presence = { etudiant: this.state.etudiant, date: this.state.date, presence: this.state.presence};
        console.log('presence => ' + JSON.stringify(presence));

        // step 5
        if(this.state.id === '_add'){
            PresenceService.createPresence(presence).then(res =>{
                this.props.history.push('/presences');
            });
        }else{
            PresenceService.updatePresence(presence, this.state.id).then( res => {
                this.props.history.push('/presences');
            });
        }
    }
    
    changeEtudiantHandler= (event) => {
        this.setState({etudiant: event.target.value});
    }

    changeDateHandler= (event) => {
        this.setState({date: event.target.value});
    }
    changePresenceHandler= (event) => {
        this.setState({presence: event.target.value});
    }

    cancel(){
        this.props.history.push('/presences');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Presence</h3>
        }else{
            return <h3 className="text-center">Update Presence</h3>
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
                                            <label> Etudiant: </label>
                                            <input placeholder="etudiant" name="etudiant" className="form-control" 
                                                value={this.state.etudiant} onChange={this.changeEtudiantHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Date: </label>
                                            <input placeholder="Date" name="date" className="form-control" 
                                                value={this.state.date} onChange={this.changeDateHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Presence: </label>
                                            <input placeholder="Presence" name="presence" className="form-control" 
                                                value={this.state.presence} onChange={this.changePresenceHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdatePresence}>Save</button>
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

export default CreatePresenceComponent
