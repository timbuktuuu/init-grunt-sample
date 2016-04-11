/**
 * grunt/pipeline.js
 *
 * The order in which your css, javascript, and template files should be
 * compiled and linked from your views and static HTML files.
 *
 * (Note that you can take advantage of Grunt-style wildcard/glob/splat expressions
 * for matching multiple files.)
 */

'use strict';

/**
 * CSS files to inject in order
 * (if you're using LESS with the built-in default config,
 * you'll want  to change `src/scss/importer.less` instead.)
 */
var cssFilesToInject = [
  'css/**/*.css'
];

/**
 * js vendor files like jquery, underscore, sliders...
 */
var jsVendorsToInject = [
  // Load jQuery before everything else
  'js/vendors/jquery/jquery-*.js',

  // Vendor scripts like bxSlider, or fancybox are brought in here
  // ATTENTION: check if jquery gets double injected
  'js/vendors/**/*.js'
];

/**
 * Client-side javascript files to inject in order
 * (uses Grunt-style wildcard/glob/splat expressions)
 */
var jsFilesToInject = [
  // All of the rest of your client-side js files
  // will be injected here in no particular order.
  'js/components/**/*.js',

  // Document Ready Starter
  'js/app.js'
];

/**
 * Prefix relative paths to source files so they point to the proper locations
 * (i.e. where the other Grunt tasks spit them out, or in some cases, where
 * they reside in the first place)
 */
module.exports.cssFilesToInject = cssFilesToInject.map(function (path) {
  return 'dist/' + path;
});
module.exports.jsVendorsToInject = jsVendorsToInject.map(function (path) {
  return 'src/' + path;
});
module.exports.jsFilesToInject = jsFilesToInject.map(function (path) {
  return 'src/' + path;
});
