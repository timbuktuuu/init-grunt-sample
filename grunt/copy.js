module.exports = {
  dist: {
    files: [{
      expand: true,
      dot: true,
      cwd: '<%= app %>',
      dest: '<%= dist %>',
      src: [
        '*.{ico,png,txt,md}',
        '*.{html,htm}',
        //'views/{,*/}*.html',
        'img/{,*/}*.*',
        'fonts/{,*/}*.*',
      ]
    }, 
    /*{
      expand: true,
      cwd: '.',
      src: 'bower_components/bootstrap-sass-official/assets/fonts/bootstrap/*',
      dest: '<%= yeoman.dist %>'
    }*/]
  }
};
