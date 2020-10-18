import React from 'react'
import '../../index.css'

const nav = {
    height: '48px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'

}
function SecondaryNav() {
    return (
        <>
            <div className="bg-primary text-light nav" style={nav}>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Software Developers</a></li>
                    <li><a href="">Product Designers</a></li>
                    <li><a href="">Apply</a></li>
                    <li><a href="">Journal</a></li>
                    <li><a href="">FAQ</a></li>
                </ul>
            </div>
        </>
    )
}

export default SecondaryNav