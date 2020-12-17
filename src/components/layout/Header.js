import React from "react";
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <header style={style}>
            <h1>TodoList</h1>
            <Link style={style.links} to="/">Home</Link> | <Link style={style.links} to="/about">About</Link>
        </header>
    );
}

const style = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    links: {
        color: '#fff',
        textDecoration: 'none'
    }
};
