import React, { Component } from 'react';
import '../index.css';


const navStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'center',
    justifyItems: 'end',
    height: '144px',
    margin: 'auto',
    width: '90%',
}
const navLinkStyle ={
    display: 'inline',
    margin: '10px',
}

const fNavStyle ={
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}
const sNavStyle = {
    display: 'flex',
    // justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: '7px'
}
const brand = {
    height: '42px',
    width: '182.46823120117188px',
    left: '0px',
    top: '0px'
}
const navLink = {
    textDecoration: 'none',
    fontFamily: 'var(--secondary-font)',
    color: 'var(--secondary-color)',
    letterSpacing: '1.25px',
    textTransform: 'uppercase'
}

const caption ={
    fontFamily: 'var(--secondary-font)',
    fontSize: '13px',
    lineHeight: '21px',
    letterSpacing: '0.4px'
}
const btn = {
    fontFamily: 'var(--primary-font)',
    fontSize: '14px',
    fontWeight: '500',
    lineHeight: '16px',
    letterSpacing: '1.25px',
    textAlign: 'left',
    textTransform: 'uppercase',
    margin: '10px',
    padding: '5px 10px',


}

 class NavBar extends Component {
    render() {
        return (
            <div className = "nav" style={navStyle}>
                <div className = "fNavSection" style={fNavStyle}>
                    <div className ="brand" >
                        <img src="../images/genesys logo.png" style={brand}/>
                    </div>

                    <div className="nav-links" style={navLinkStyle}>
                        <ul>
                            <li style={navLinkStyle}><a href="#" style={navLink}>Learnable</a></li>
                            <li style={navLinkStyle}><a href="#" style={navLink}>Agora</a></li>
                            <li style={navLinkStyle}><a href="#" style={navLink}>Startzone</a></li>
                            <li style={navLinkStyle}><a href="#" style={navLink}>About</a></li>
                            <li style={navLinkStyle}><a href="#" style={navLink}>Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className = "sNavSection" style={sNavStyle}>
                    <p style={caption}>build a product with</p>
                    <div><button className="btn" style={btn}><a>Devstudio</a></button></div>
                    
                </div>
                
            </div>

/* <div class="menu-wrap">
    <input type="checkbox" class="toggler"/>
        <div class="hamburger"><div></div></div>
            <div class="menu">
                <div>
                    <div>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
        </div>
  </div> */
    
        )
    }
}

export default NavBar