import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import payload from '../../utils/payload';
import logo from '../../assets/sstore_logo_ok.png';
import person from '../../assets/person.svg';
import search_icon from '../../assets/search_icon.svg';
import  { useState } from "react";
import './Navbar.scss'


export default function Navbar() {
    const user = payload();
    const history = useHistory()
    const [item, setItem] = useState('')
    return(
        <div>
    <nav className="navbar navbar-expand-lg whole-container" >
       
            <Link className="navbar-brand"  to="/">

            <img style={{ height: '60px', marginRight: '5px', display: 'flex',
            paddingTop:'10px' }} src={logo} alt="SSTORE Logo"/>
                </Link>
        <form className="mt-3 d-flex justify-content-start"
          >
        <input
        onChange={e => setItem(e.target.value)}
        value={item}
          id="navbar-search"
          style={{ width: "100%" }}
          type="text"
          placeholder="Products" />
        <button
        id="navbar-search-button"
        onClick={e => {
            e.preventDefault()
            history.push(`/search_results?name=${item}`)
        }}
          type="button">
           <img src={search_icon} alt="search icon"/>
        </button>
        </form>
        <div className="collapse navbar-collapse mt-2 justify-content-end">
                    {user ? (
                        <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/profile">Hi, welcome {user.first_name}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/logout">Logout</Link>
                        </li>
                    </ul>
                    ):
                    (
                        <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">
                                <img style={{ height: '30px' }} src={person} alt="login icon"/>
                                </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" id="register" to="/signup">Signup</Link>
                        </li>
                    </ul>
                    )}
                    
                </div>
    </nav>
    </div>
);
}