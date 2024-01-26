import React from 'react'


function NavBar() {
    return (
        <div className="navbar-div">
            <ul className='navbar'>
                <li>
                    <p><a href='#home'>Home</a></p>
                </li>
                <li>
                    <p><a href='#rooms'>Rooms</a></p>
                </li>
                <li>
                    <p><a href="#services">Services</a></p>
                </li>
                <li>
                    <p><a href="#about">About</a></p>
                </li>
                <li>
                    <p><a href="#explore">Explore</a></p>
                </li>
            </ul>
        </div>
    )
}

export default NavBar
