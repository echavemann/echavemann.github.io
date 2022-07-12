import React, {useState} from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className='gpt3__navbar'>
            <div className='gpt3__navbar-links'>
                <div className='gpt3__navbar-links_logo'>
                    <h1>Ethan Havemann</h1>
                </div>
                <div className = 'gpt3__navbar-links_container'>
                    <p><a href ="#home">Home</a></p>
                    <p><a href ="#AboutMe">About Me</a></p>
                    <p><a href ="#features">Experience</a></p>
                    <p><a href ="#Coursework">Coursework and Technologies</a></p>
                    <p><a href ="#blog">Projects</a></p>
                </div>
            </div>
            <div className = 'gpt3__navbar-menu'>
                {toggleMenu
                    ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)}/>
                    : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)}/>
                }
                {toggleMenu && (
                    <div className = 'gpt3__navbar-menu_container scale-up-center'>
                        <div className='gpt3__navbar-menu_container-links'>
                            <p><a href ="#home">Home</a></p>
                            <p><a href ="#AboutMe">About Me</a></p>
                            <p><a href ="#features">Work History</a></p>
                            <p><a href ="#possibility">Coursework and Technologies</a></p>
                            <p><a href ="#blog">Project</a></p>
                        </div>
                    <div/>
            </div>
                )}
        </div>
    </div>
    )
    }

export default Navbar