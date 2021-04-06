import React from 'react';
import { Link } from 'react-router-dom';
import facebook from '../../assets/facebook.svg';
import happy_emoji from '../../assets/happy_emoji.svg';
import world from '../../assets/world.svg';
import coronavirus from '../../assets/coronavirus.svg';
import './Footer.scss'

export default function Footer(){
    return(
        <div className="footer-basic">
        <footer className="footer-basic">
            <div className="social"><Link to="/"><img src={facebook} alt="facebook"/> </Link><Link to="/"> <img src={happy_emoji} alt="smile"/> </Link><Link to="/"><img src= {world} alt="world"/> </Link><Link to="/"><img src={coronavirus} alt="coronavirus"/> </Link></div>
            <ul className="list-inline">
                <li className="list-inline-item"><Link to="/">Home</Link></li>
                <li className="list-inline-item"><Link to="/">Services</Link></li>
                <li className="list-inline-item"><Link to="/">About</Link></li>
                <li className="list-inline-item"><Link to="/">Terms</Link></li>
                <li className="list-inline-item"><Link to="/">Privacy Policy</Link></li>
            </ul>
            <p className="copyright">Sstore © 2021</p>
        </footer>
    </div>

    )

}