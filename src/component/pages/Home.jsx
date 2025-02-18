import React from 'react'
import { Link } from 'react-router-dom'
import { IoSearchOutline } from 'react-icons/io5'
import { GiNotebook } from 'react-icons/gi'
const Home = () => {
    return (
        <>
            <div className="home-image container-fluid">
                <div className="home-page container-fluid">
                    <nav className="navbar">
                        <div className="navbar-logo">
                            <h1>NoteShare</h1>
                        </div>
                        <ul className="navbar-links">
                        <li className="login-btn" ><Link to="/login">Login</Link></li>
                        </ul>
                    </nav>

                    <header className="hero-section">
                        <h2>Get Your Study Material Here!!</h2>
                        <p>Easy, Fast, and Secure</p>
                    <div className="home-btn">
                    <Link to="/user" className='cta-btn button'><p>{<IoSearchOutline />}</p> Search Notes</Link>
                    <Link to="/admin" className='cta-btn button'><p>{<GiNotebook />}</p> Add Notes</Link>
                    </div>
                    </header>
                </div>
            </div>
        </>
    )
}

export default Home