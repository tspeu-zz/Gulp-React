'use strict'

// import libs
var React = require('react');

//ojo hay que imnpoirtar para crear la clase
var ReactDOM = require('react-dom');
var CreateReactClass = require('create-react-class');

//create home component

var Home = CreateReactClass({
    render: function(){
        return (
            <div className ="jumbotron">
                <h1>Home pagina</h1>
                <h2>Hola World!</h2>
            </div>
        );
    }
});

module.exports = Home;