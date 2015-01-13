module.exports = function(grunt) {
  
    require('load-grunt-tasks')(grunt);
  
    var globalConfig = {
      imgSrc: 'images',
      fontSrc: 'fonts',
      jsSrc: 'js',
      jsDest: 'js/dist',
      cssSrc: 'styles/scss',
      cssDest: 'styles/dist'
    };

	// Project configuration.
	grunt.initConfig({
    
		pkg: grunt.file.readJSON('package.json'),
    globalConfig: globalConfig,
		banner : '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' + '<%= pkg.author %> - <%= grunt.template.today("yyyy-mm-dd") %> */\n\n',

		clean: {
			build: ["<%= globalConfig.cssDest %>", "<%= globalConfig.jsDest %>"],
			styles: ["<%= globalConfig.cssDest %>"],
			js: ["<%= globalConfig.jsDest %>"]
		},

		concat: {
			options: {
				banner: '<%= banner %>',
				stripBanners: true
			},

			modernizr: {
				src: ['<%= globalConfig.jsSrc %>/libs/modernizr*.js'],
				dest: '<%= globalConfig.jsDest %>/modernizr.js'
			},

			base: {
				src:
					[
						'<%= globalConfig.jsSrc %>/libs/mdetect.js',
						'<%= globalConfig.jsSrc %>/libs/media.match.js',
						'<%= globalConfig.jsSrc %>/libs/jquery-1.11.1.min.js',

						/* scripts written by init + initialize */
						'<%= globalConfig.jsSrc %>/init/**/*.js',
						'<%= globalConfig.jsSrc %>/initialize.js'
					],
				dest: '<%= globalConfig.jsDest %>/base.js'
			}

		},

		compass: {
          options: {
            imagesPath: '<%= globalConfig.imgSrc %>',
            fontsPath: '<%= globalConfig.fontSrc %>',
            sassDir: '<%= globalConfig.cssSrc %>',
            cssDir: '<%= globalConfig.cssDest %>',
            relativeAssets: true,
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
		},

		watch : {
			js : {
				files : [ '<%= globalConfig.jsSrc %>/**/*.js' ],
				tasks : [ 'build-js' ]
			},

			scss : {
				files : [ '<%= globalConfig.cssSrc %>/**/*.scss' ],
				tasks : [ 'build-sass' ]
			}
		},
    
    notify: {
      sass: {
        options: {
          title: 'SASS Task Completed',
          message: 'SASS compiled without Errors',
        }
      },
      js: {
        options: {
          title: 'JS Task Completed',
          message: 'JS Files builded without Errors',
        }
      }
    },

		uglify: {
			options: {
				mangle: {
					except: ['jQuery']
				},
				banner: '<%= banner %>',
				report: 'min'
			},
			my_targets: {
				files: {
					'<%= globalConfig.jsDest %>/base.min.js': ['<%= globalConfig.jsDest %>/base.js'],
					'<%= globalConfig.jsDest %>/modernizr.min.js': ['<%= globalConfig.jsDest %>/modernizr.js']
				}
			}
		}

	});

	// Default task(s).
	//grunt.registerTask('default', ['uglify']);
	grunt.registerTask('default', ['clean:build', 'concat', 'compass:prod', 'uglify']);
    grunt.registerTask('watch-it', ['watch']);
	/* DEVELOPMENT */
	grunt.registerTask('build-sass', ['compass:dev', 'notify:sass']);
	/* PRODUCTION */
	//grunt.registerTask('build-sass', [ 'compass:prod' ]);

	grunt.registerTask('build-js', ['clean:js', 'concat', 'uglify', 'notify:js']);

};
