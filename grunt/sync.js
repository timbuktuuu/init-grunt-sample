module.exports = {
  dist: {
    files: [{
      cwd: '<%= app %>',
      src: ['**/*.!(coffee|scss)', '!js/**/*.js'],
      dest: '<%= dist %>'
    }],
    verbose: true
  }
};
