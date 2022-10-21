import { Menu } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <div style={{display: 'flex', justifyContent: "center", height: '50px', alignItems: "center", backgroundColor: "#C3C3C3"}}>
        <Link to='/'>
            <h4 style={{marginRight: '40px'}}>Accueil</h4>
        </Link>
        <Link to='/films'>
            <h4 style={{marginRight: '40px'}}>Films</h4>
        </Link>
        <Link to='/contact'>
            <h4 style={{marginRight: '40px'}}>Contact</h4>
        </Link>
    </div>
    )
}

export default Header