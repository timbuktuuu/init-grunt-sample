module.exports = {
  assets: {
    // Provide livereload
    options: {
      livereload: true
    },
    // Assets to watch:
    files: ['<%= app %>/**/*', '!**/vendor-repo/**'],

    // When assets are changed:
    tasks: ['syncAssets']
  }
};
