import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ListEtudiantComponent from './components/etudiants/ListEtudiantComponent';
import CreateEtudiantComponent from './components/etudiants/CreateEtudiantComponent';
import ViewEtudiantComponent from './components/etudiants/ViewEtudiantComponent';
import ListMatiereComponent from './components/matieres/ListMatiereComponent';
import CreateMatiereComponent from './components/matieres/CreateMatiereComponent';
import ViewMatiereComponent from './components/matieres/ViewMatiereComponent';
import ListNoteComponent from './components/notes/ListNoteComponent';
import CreateNoteComponent from './components/notes/CreateNoteComponent';
import ListPresenceComponent from './components/presences/ListPresenceComponent';
import CreatePresenceComponent from './components/presences/CreatePresenceComponent';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListEtudiantComponent}></Route>
                          <Route path = "/etudiants" exact component = {ListEtudiantComponent}></Route>
                          <Route path = "/add-etudiant/:id" exact component = {CreateEtudiantComponent}></Route>
                          <Route path = "/view-etudiant/:id" exact component = {ViewEtudiantComponent}></Route>

                          <Route path = "/matieres" exact component = {ListMatiereComponent}></Route>
                          <Route path = "/add-matiere/:id" exact component = {CreateMatiereComponent}></Route>
                          <Route path = "/view-matiere/:id" exact component = {ViewMatiereComponent}></Route>

                          <Route path = "/notes" exact component = {ListNoteComponent}></Route>
                          <Route path = "/notes/:id" exact component = {ListNoteComponent}></Route>
                          <Route path = "/add-note/:id" exact component = {CreateNoteComponent}></Route>

                          <Route path = "/presences" exact component = {ListPresenceComponent}></Route>
                          <Route path = "/presences/:id" exact component = {ListPresenceComponent}></Route>
                          <Route path = "/add-presence/:id" exact component = {CreatePresenceComponent}></Route>
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;
