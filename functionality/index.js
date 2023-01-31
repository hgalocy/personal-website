const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const { document } = (new JSDOM('')).window;
global.document = document;
// const $ = require( "jquery" )( window );
var $ = jQuery = require('jquery')(window);

$(document).ready(function ($) {
    $("#header").load("header.html"); 
});
// $("#footer").load("footer.html"); 
