import React,{useContext} from 'react';
import { Link } from "react-router-dom";
import "../Style/Navbar.css";
import { languageContext } from '../context/languageContext';

function Navbar() {
    const {lang} = useContext(languageContext);
    return (
        <div className='container'>
            <nav className="navbar">
                <Link to="/">{lang.promotionsText}</Link>
                <Link to="/category/1">{lang.winterText}</Link>
                <Link to="/category/2">{lang.springText}</Link>
                <Link to="/category/3">{lang.autumnText}</Link>
            </nav>
        </div>
    );
}

export default Navbar;  