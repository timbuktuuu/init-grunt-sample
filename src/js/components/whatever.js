// Just some example code
// Add more of such modules in this folder and call init() from app.js
'use strict';

var APP = window.APP || {};

APP.whatever = {

  someWhateverVar: false,

  init: function () {
    console.log('=> init whatever: ' + this.someWhateverVar);

    var test,
        test2;
  },

  someFunction: function (event) {
    console.log('=> someFunction in whatever');
  }

};
