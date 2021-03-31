import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import bgimage from '../images/header-img.gif'

const headerStyle = {
    fontSize: '40px',
    fontFamily: 'Raleway, arial, sans-serif',
    color: 'white'
}

export const Header = () => {
    return (
        <Jumbotron style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover' }}>
            <h3 style={headerStyle}>Restaurant Kuni</h3>
            <hr></hr>
            <p style={{color: "white"}}>Guest Check-in Form</p>
        </Jumbotron>
        
    )
}


export default Header