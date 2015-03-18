module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.initConfig({
		uglify: {
			my_target: {
				files: {
					'prod/js/app.js': ['dev/js/*.js']
				}
			}
		},
		watch: {
			options: { 
				livereload: true
			},
			scripts: {
				files: ['dev/js/*.js'],
				tasks: ['uglify']
			},
			html: {
				files: ['*.html']
			},
			sass: {
				files: ['dev/sass/*.scss'],
				tasks: ['compass:dev']
			}
		},
		compass : {
			dev: {
				options: {
					config: 'config.rb'
				}
			}
		}
	})
	grunt.registerTask('default', 'watch');
}
