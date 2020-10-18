import React, { Component } from 'react';
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
                            <li><a href="#">Learnable</a></li>
                            <li><a href="#">Agora</a></li>
                            <li><a href="#">Startzone</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
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
                                                <li><a href="#">Learnable</a></li>
                                                <li><a href="#">Agora</a></li>
                                                <li><a href="#">Startzone</a></li>
                                                <li><a href="#">About</a></li>
                                                <li><a href="#">Contact</a></li>
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