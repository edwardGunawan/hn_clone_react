import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';
export const Header = () => {
return (
    <div>
        <Link to="/new"> new </Link>
        <Link to="/comment"> comment </Link>
    </div>
    )
}

export default Header;