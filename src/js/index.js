$ = jQuery = require("jquery");

// var App = console.log("Browserify is working");
// import libs 
var React = require('react');
var ReactDOM = require('react-dom');

//also ref to the component page
var Home = require('./js/components/home/homepage.jsx');

// module.exports = App;
//reder de components in the app elememt
ReactDOM.render(<Home/>, document.getElementById('app'));
