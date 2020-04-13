import $ from 'jquery';
import 'what-input';

// Foundation JS relies on a global variable. In ES6, all imports are hoisted
// to the top of the file so if we used `import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();


let $imagenGato = document.getElementById('imagenGato');
let $botonGato = document.getElementById('botonGato');



function load(){
    fetch('https://api.thecatapi.com/v1/images/search?')
    .then(function(res){
        return res.json();
    })
    .then(function(res){
        var url = res[0].url;
        $imagenGato.innerHTML = `<img src="${url}"  alt="">`
    })
 
}

$botonGato.addEventListener('click', () => {
    load();
});

// function setAttr($element, attributes){
//     for(const attribute in attributes){
//       $element.setAttribute(attribute, attributes[attribute]);
//     }
// }

// setAttr($loader, {
//     src: 'assets/img/loader.gif',
//     height: 50,
//     width: 50,
//   });


// https://api.thecatapi.com/v1/images/search?

// https://aws.random.cat/meow