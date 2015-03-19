module.exports = {
  options: {
    sassDir: '<%= cssSrc %>',
    cssDir: '<%= cssDest %>',
    imagesDir: '<%= imgSrc %>',
    //generatedImagesDir: '<%= imgSrc %>/generated',
    javascriptsDir: '<%= jsSrc %>',
    fontsDir: '<%= fontSrc %>',
    importPath: '<%= app %>/vendor-repo',
    httpImagesPath: '/img',
    httpFontsPath: '/fonts',
    //httpGeneratedImagesPath: '/img/generated',
    relativeAssets: false,
    //assetCacheBuster: false,
    debugInfo: false
  },
  
  prod: {
    options: {
      environment: 'production',
      outputStyle: 'compressed',
      noLineComments: true,
      banner: '<%= banner %>'
    }
  },
  
  dev: {
    options: {
      environment: 'development',
      outputStyle: 'expanded',
      sourcemap: true
    }
  }
};