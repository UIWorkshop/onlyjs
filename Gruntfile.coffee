module.exports = (grunt) ->
    grunt.initConfig
        pkg: grunt.file.readJSON 'package.json'
        jshint:
            all: 'generator/*.js'
        watch:
            hint:
                files: 'generator/*.js',
                tasks: 'jshint'
            html:
                files: 'generator/html.js',
                tasks: 'html'
        connect:
            dev:
                options:
                    port: 9000
                    hostname: 'localhost'
                    base: 'outcome'
                    open: 'http://localhost:9000'
                    keepalive: true
    grunt.loadNpmTasks 'grunt-contrib-jshint'
    grunt.loadNpmTasks 'grunt-contrib-watch'
    grunt.loadNpmTasks 'grunt-contrib-connect'

    grunt.registerTask 'html', 'generate html', ()->
        html = eval grunt.file.read('generator/html.js')
        grunt.file.write 'outcome/index.html', html
    grunt.registerTask 'server', ['connect:dev']
    grunt.registerTask 'default', ['watch', 'jshint']