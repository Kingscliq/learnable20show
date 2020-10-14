import React from 'react'

const headerStyle = {
    textAlign: 'center',
    background: '#333',
    color: '#fff',
    marginTop: '0px',
    padding: '20px',
}
function Header() {
    return (
        <header style={headerStyle}>
            <h1>TodoList</h1>
        </header>
    )
}

export default Header
