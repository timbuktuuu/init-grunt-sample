// Navigation Code
'use strict';

var APP = window.APP || {};

APP.whatever = {

  someWhateverVar: false,

  init: function() {
    console.log('=> init whatever: ' + this.someWhateverVar);
  },

  someFunction: function(event) {
    console.log('=> someFunction in whatever');
  }

};

