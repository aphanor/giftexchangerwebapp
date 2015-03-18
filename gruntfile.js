module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-sync');
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
				files: ['dev/*.html'],
				tasks: ['sync:main']
			},
			sass: {
				files: ['dev/sass/*.scss'],
				tasks: ['compass:dev']
			},
			all_files: {
				files: ['dev/**/**'],
				tasks: ['sync:dev']
			}
		},
		compass : {
			dev: {
				options: {
					config: 'config.rb'
				}
			}
		},
		sync: {
			main: {
			    files: [
					{cwd: 'dev/', src: ['*.html'], dest: 'prod/'}
				]
			},
			dev: {
				files: [
					{cwd: 'dev/', src: ['js/**', 'views/**'], dest: 'prod/'}
				]
				//updateAndDelete: true
			}
		}
	})
	
	grunt.registerTask('default', ['watch']);
}
