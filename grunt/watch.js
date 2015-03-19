module.exports = {
  options: {
    livereload: true,
  },
  
  compass: {
    files: ['<%= cssSrc %>/{,*/}*.{scss,sass}'],
    tasks: ['compass:dev', 'notify:sass']
  },
  
  js: {
    files: ['<%= jsSrc %>/{,*/}*.{js}'],
    tasks: ['newer:concat', 'newer:uglify','notify:js']
  },

  html: {
    files: '<%= app %>/{,*/}*.{html,htm}'
  }
};
