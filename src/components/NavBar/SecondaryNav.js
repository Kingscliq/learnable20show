import React from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom'
import '../../index.css'

const nav = {
    

}
function SecondaryNav() {
    return (
        <>
            <div className="bg-primary text-light nav" style={nav} id="secondary-nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/learnable-software-developer">Software Developers</Link></li>
                    <li><Link to="/learnable-product-designer">Product Designers</Link></li>
                    <li><Link to="/apply">Apply</Link></li>
                    <li><Link to="/journal">Journal</Link></li>
                    <li><Link to="/faq">FAQ</Link></li>
                </ul>
            </div>
        </>
    )
}

export default SecondaryNav