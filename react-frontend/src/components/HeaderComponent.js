import React, { Component } from 'react'

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="https://javaguides.net" className="navbar-brand">Students Management App</a></div>
                    <ul class="navbar-nav ml-auto">
                            <li><a class="nav-link" href="/etudiants">Etudiants</a></li>
                            <li><a class="nav-link" href="/matieres">Matieres</a></li>
                            <li><a class="nav-link" href="/notes">Notes</a></li>
                            <li><a class="nav-link" href="/presences">Presences</a></li>

                    </ul>
                    </nav>
                    
                    
                </header>
            </div>
        )
    }
}

export default HeaderComponent
