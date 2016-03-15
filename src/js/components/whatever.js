// Just some example code
// Add more of such modules in this folder and call init() from app.js
'use strict';

var APP = window.APP || {};

APP.whatever = {

  someWhateverVar: false,

  init: function() {
    var test,
    test2;

    console.log('=> init whatever: ' + this.someWhateverVar);
  },

  someFunction: function(event) {
    console.log('=> someFunction in whatever');
  }

};
