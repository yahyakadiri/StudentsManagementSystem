import React, { Component } from 'react'
import EtudiantService from '../../services/EtudiantService';

class CreateEtudiantComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId: '',
            cne: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.saveOrUpdateEtudiant = this.saveOrUpdateEtudiant.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            EtudiantService.getEtudiantById(this.state.id).then( (res) =>{
                let etudiant = res.data;
                this.setState({firstName: etudiant.firstName,
                    lastName : etudiant.lastName,
                    emailId : etudiant.emailId,
                    cne : etudiant.cne
                });
            });
        }        
    }
    saveOrUpdateEtudiant = (e) => {
        e.preventDefault();
        let etudiant = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId, cne: this.state.cne};
        console.log('etudiant => ' + JSON.stringify(etudiant));

        // step 5
        if(this.state.id === '_add'){
            EtudiantService.createEtudiant(etudiant).then(res =>{
                this.props.history.push('/etudiants');
            });
        }else{
            EtudiantService.updateEtudiant(etudiant, this.state.id).then( res => {
                this.props.history.push('/etudiants');
            });
        }
    }
    
    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({emailId: event.target.value});
    }

    changeCneHandler= (event) => {
        this.setState({cne: event.target.value});
    }

    cancel(){
        this.props.history.push('/etudiants');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Etudiant</h3>
        }else{
            return <h3 className="text-center">Update Etudiant</h3>
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
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="firstName" className="form-control" 
                                                value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name="lastName" className="form-control" 
                                                value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder="Email Address" name="emailId" className="form-control" 
                                                value={this.state.emailId} onChange={this.changeEmailHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Cne: </label>
                                            <input placeholder="Cne" name="cne" className="form-control" 
                                                value={this.state.cne} onChange={this.changeCneHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateEtudiant}>Save</button>
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

export default CreateEtudiantComponent
