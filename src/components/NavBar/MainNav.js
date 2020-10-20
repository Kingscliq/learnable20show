import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom'
import '../../index.css';
import '../../navBar.css'

class MainNav extends Component {
    render() {
        return (
            <>
                
                <nav className="bg-light">
                    <div className="menu-container">
                    <div className="brand">
                        <img src="../images/genesys logo.png" className="brand"/>
                    </div>
                    <div className="main-menu">
                        <ul>
                            <li><Link to="/">Learnable</Link></li>
                            <li><Link to="/">Agora</Link></li>
                            <li><Link to="/">Startzone</Link></li>
                            <li><Link to="/">About</Link></li>
                            <li><Link to="/">Contact</Link></li>
                        </ul>
                    </div>
                    <div id="menu-cta">
                            <p className="nav-caption">build a product with</p>
                            <div><button className="btn">Devstudio</button></div>
                    </div>
                    <div class="menu-wrap">
                        <input type="checkbox" class="toggler"/>
                            <div class="hamburger"><div></div></div>
                                <div class="menu">
                                    <div>
                                        <div>
                                            <ul>
                                                <li><Link to="#">Learnable</Link></li>
                                                <li><Link to="#">Agora</Link></li>
                                                <li><Link to="#">Startzone</Link></li>
                                                <li><Link to="#">About</Link></li>
                                                <li><Link to="#">Contact</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    
                
                   
                </nav>
               
            </>

            

/*  */
    
        )
    }
}

export default MainNav