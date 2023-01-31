const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );

jQuery(document).ready(function ($) {
    $("#header").load("header.html"); 
});
// $("#footer").load("footer.html"); 
