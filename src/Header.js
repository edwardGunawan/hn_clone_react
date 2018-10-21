import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';
export const Header = () => {
return (
    <div>
        <Link to="/new"> new </Link>
        <Link to="/comment"> comment </Link>
        <Link to="/show"> show </Link>
        <Link to="/ask"> ask </Link>
        <Link to="/jobs"> jobs </Link>
    </div>
    )
}

export default Header;