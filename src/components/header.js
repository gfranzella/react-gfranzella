import React, { useState } from "react"
import { MenuItems } from './MenuItems'
import { Button } from './Button'
import './Header.css'


const Header = () => {

    const [isClicked, setIsClicked] = useState(false);

        
    return(
            <div className="header-container" >
                <nav className="NavBarItems">
                    <h1 className="navBar-logo">React Recipe <i className="fab fa-react"></i></h1>
                    <div className="menu-icon" onClick={() => setIsClicked(!isClicked)}>
                        <i className={isClicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={isClicked ? 'nav-menu active' : 'nav-menu'}>
                        {MenuItems.map((item, index) => {
                            return(
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                            )
                        })}
                    </ul>
                    <Button>Sign Up</Button>
                </nav>
            </div>
)}

export default Header