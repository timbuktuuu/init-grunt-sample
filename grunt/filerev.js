module.exports = {
  dist: {
    src: [
      '<%= jsDest %>/{,*/}*.js',
      '<%= cssDest %>/{,*/}*.css',
      '<%= dist %>/img/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
      '<%= dist %>/fonts/{,*/}*.*'
    ]
  }
};