module.exports = {
  assets: {
    // Provide livereload
    options: {
      livereload: true
    },
    // Assets to watch:
    files: ['<%= app %>/**/*', '!**/node_modules/**'],

    // When assets are changed:
    tasks: ['syncAssets']
  }
};
