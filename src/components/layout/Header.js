import React from "react";
import PropTypes from 'prop-types';

export default function Header() {
    return (
        <header style={style}>
            <h1>TodoList</h1>
        </header>
    );
}

const style = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
};
