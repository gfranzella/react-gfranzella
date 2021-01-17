import React, { useState } from 'react'
import useIsInViewport from 'use-is-in-viewport'
import ApiSearch from '../components/ApiSearch'

import HeaderImg from '../images/header-icon.png'
import ProfilePic from '../images/profile-pic.jpeg'

function HomePage(){
    const [isInViewport, targetRef] = useIsInViewport();

    const [user, setUser] = useState("");
    const [clicked, setClicked] = useState(false); 

    const handleInput = (e) => e.target.value === "" ? setClicked(false) : setUser(e.target.value); 
    
    return(
        <>
            <section className="home-header">
                <div className="header-title">
                    <div className="header-img">
                    <img src={HeaderImg} alt="Header Icon"/>
                    </div>
                    <h1>Welcome to my Site!</h1>
                    <p className="header-text">
                    Hello, I'm Franco and I build websites 
                    </p>
                    <i className="fas fa-laptop-code"></i>
                </div>
            </section>
            <section className="about-me">
                <div className="about-container">

                    <div ref={targetRef} className={isInViewport ? 'animated fadeInUp' : 'animated'}>
                    <h2 className="section-title">
                        About me 
                    </h2>
                    </div>

                    <div className="about-profile">
                    <img src={ProfilePic} alt="Profile" />
                    <p>
                        Hello. My name is Gianfranco Franzella, I'm a System Engineer with several years working in technology. I'm currently working on my programming skills, I have knowledge in HTML, CSS and JavaScript and I have created this site using react.
                    </p>
                    </div>

                </div>

            </section>

            <section className="api-section">
                <div>
                    <input id="github-user" type="text" placeholder="Github Username" onChange={handleInput} />
                    <button onClick={() => setClicked(true)}>
                    Ver API de Github
                    </button>
                    {clicked ? <ApiSearch login= {user} /> : <p>no users found</p>}
                </div>
            </section>
        </>
    );
}

export default HomePage;