module.exports = function(grunt) {
    var banner = '/*!  <%= pkg.name %> v<%= pkg.version %> ' +
        '[<%= grunt.template.today("yyyy-mm") %>] | ' +
        'By: <%= pkg.author %> | (c) <%= grunt.template.today("yyyy") %>  */\n';

    var defaultTasks = ['uglify','jasmine'];
    var devTasks = defaultTasks.concat(['watch']);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: banner + ";",
                mangle: true
            },
            scripts: {
                files: {
                    'muteconsole.min.js': 'muteconsole.js'
                }
            }
        },
        jasmine: {
            src: [
                'muteconsole.js'
            ],
            options: {
                specs: 'tests/*.js'
            }
        },
        watch: {
            scripts: {
                files: [
                    'muteconsole.js',
                    'tests/*.js'
                ],
                tasks: defaultTasks
            },
        }
    });


    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    grunt.registerTask('default', defaultTasks);
    grunt.registerTask('dev', devTasks);

};