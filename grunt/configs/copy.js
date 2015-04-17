module.exports = {
  build: {
    files: [{
      expand: true,
      dot: true,
      cwd: '<%= app %>',
      dest: '<%= dist %>',
      src: [
        '*.{ico,png,txt,md}',
        '*.{html,htm}',
        //'views/{,*/}*.html',
        'img/**/*.*',
        'fonts/**/*.*'
      ]
    }]
  }
};
