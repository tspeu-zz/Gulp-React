"use strict"

var React = require("react");
var ReactDOM = require("react-dom");
var CreateReactClass = require('create-react-class');

var Header =CreateReactClass({
    render: function(){
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <a href="/" className="navbar-brand">
                        <img alt="CURSOREACT" src="./images/react.png"/>
                    </a>
                    <ul className="nav nav-tabs">
                        <li><a href="#">Home</a></li>
                        <li><a href="/#about">About</a></li>       
                    </ul>
                </div>
            </nav>
        );
    }
});

module.exports = Header;

