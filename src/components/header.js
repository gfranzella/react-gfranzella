import React, { useState } from "react"
import { MenuItems } from './MenuItems'
import { Button } from './Button'
import { Link } from 'react-router-dom'
import LogoImg from '../images/gfranzella_logo.png'
import './Header.css'


const Header = () => {

    const [isClicked, setIsClicked] = useState(false);

        
    return(
            <div className="header-container" >
                <nav className="NavBarItems">
                    <Link className="navTitle-link" to="/">
                        <div className="navBar-logo">
                            <h1 >
                                Gianfranco Franzella
                            </h1>
                            <img src={LogoImg} alt="GF" />
                        </div>
                        
                    </Link>
                    <div className="menu-icon" onClick={() => setIsClicked(!isClicked)}>
                        <i className={isClicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={isClicked ? 'nav-menu active' : 'nav-menu'}>
                        {MenuItems.map((item, index) => {
                            return(
                            <li key={index}>
                                <Link className={item.cName} to={item.url}>
                                    {item.title}
                                </Link>
                            </li>
                            )
                        })}
                    </ul>
                    <Button buttonCustomStyle={{width: '135px'}}>Sign Up</Button>
                </nav>
            </div>
)}

export default Header