//no se usa use stric proque da problemas con jquewry
$ = jQuery = require("jquery");

// var App = console.log("Browserify is working");
// import libs 
var React = require("react");
var ReactDOM = require("react-dom");
var CreateReactClass = require('create-react-class');

//also ref to the component page
var Header = require("./components/common/header.jsx");
var Home = require("./components/home/homepage.jsx");
var About = require("./components/about/about-page.jsx");


// module.exports = App;
//reder de components in the app elememt
// ReactDOM.render(<Home/>, document.getElementById("app"));
var App = CreateReactClass({
    render : function(){
        var Child;
        switch (this.props.route) {
            case 'about': Child = About;        
                break;
        
            default:  Child = Home;
        }
        return (
            <div>
                <Header />
                <Child />
            </div>
        )
    }
});

function _routeMe(){
    // 
    var route = window.location.hash.substr(1);
    // devuelve la url que viene luego del  #
    ReactDOM.render(<App route= {route}/>, document.getElementById("app"));
}
window.addEventListener('hashchange', _routeMe);
_routeMe();