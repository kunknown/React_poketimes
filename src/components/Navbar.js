import React from 'react'
import {Link, NavLink, withRouter} from 'react-router-dom' //NavLink adds 'active' to class

const Navbar = (props) => {
    // setTimeout(() => {
    //     props.history.push('/about');
    // }, 2000);
    return (
        <nav className="nav-warpper red darken-3">
            <div className="container">
                <a href='/home' className="brand-logo">Poke'Times</a>
                <ul className="right">
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar);