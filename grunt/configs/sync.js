module.exports = {
  dist: {
    files: [{
      cwd: '<%= app %>',
      src: ['**/*.!(coffee|scss)', '!js/**/*.js', '!vendor-repo/**/**.*'],
      dest: '<%= dist %>'
    }]
  }
};
