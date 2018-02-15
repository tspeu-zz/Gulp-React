install react npm i react--> npm ls react
install react router--> npm i react-router --save
**a partir de la vr 014
instalar react-dom
npm i react-dom --save-->

REACT DOM->  se han separado en dos módulos
hay que llamar a las dos lib en las dependencias.


nstalar FLUX--A
npm i flux --save
 que pakectes hay instalados-->
 npm ls flux
   (ALL) 
 npm la flux--mas detalles
 npm la --depth=1 | grep flux

 *-*-*-
jsx 
js as XML
 jsx transpila en funciones plain de js
 no se puede usar ciertas claves como "for" y "class"
 se usa "htmlFor" y "className"

 jsx compila a js 
 es una abstraccion de js->

 jsx beneficios
 ejemplo-->
 var Greeting = React.createClass(
   render: function(){
     return (<div><h1>Hello Mundo</h1></div>);
   }
 );

se hace asi--><h1 color="blue">Heading</h1>
asi en react->
React.createElement("h1",{color : "blue"}, "heading")

virtual DOM->
un documento de estructura l´gica de los elementos de la web page
representada por nodos y pueden se accesibles desde js
 no está optimizado para uso de interfaces dinámicas


--para arreglar el error createClass
añadir "create-react-class": "^15.6.3
npm i create-react-class
y var CreateReactClass()<---


 #route basico #about
 -->
 #Crear header