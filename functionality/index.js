// const { JSDOM } = require( "jsdom" );
// const { window } = new JSDOM( "" );
// const { document } = (new JSDOM('')).window;
// global.document = document;
// // const $ = require( "jquery" )( window );
// var $ = jQuery = require('jquery')(window);

// const { JSDOM } = require( "jsdom" );
// const { window } = new JSDOM( "" );
// const $ = require( "jquery" )( window );

// import jsdom
const jsdom = require('jsdom')

// create a window with the document object
const dom = new jsdom.JSDOM("")

// import jquery and supply it with the new dom
const jQuery = require('jquery')(dom.window)

// use jQuery
// jQuery([selector]).[action]
jQuery(document).ready(function ($) {
    $("#header").load("header.html"); 
});
// $("#footer").load("footer.html"); 
