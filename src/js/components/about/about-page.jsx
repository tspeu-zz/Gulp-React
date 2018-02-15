'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var CreateReactClass = require('create-react-class');

var About = CreateReactClass({
    render: function(){
        return(
        <div className="card">
            <h1>About Page</h1>
            <p>Simple app para info de la app</p>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">React DOM</li>
                    <li className="list-group-item">React Router</li>
                    <li className="list-group-item">FLUX</li>
                    <li className="list-group-item">GULP</li>
                </ul>
        </div>
        )
    }
});

module.exports = About;
