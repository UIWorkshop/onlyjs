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
            css:
                files: 'generator/style.js',
                tasks: 'css'
            js:
                files: 'generator/javascript.js',
                tasks: 'js'
        copy:
            source:
                src: 'source/*',
                dest: 'app/'

        uglify:
            options: 
                beautify: true,
                banner: '(function (win, undefined) {\n\n',
                footer: '\n\n})(window);'
            dev:
                files:
                    'app/script.js': ['generator/javascript.js']
        connect:
            dev:
                options:
                    port: 9000
                    hostname: 'localhost'
                    base: 'app'
                    open: 'http://localhost:9000'
                    keepalive: true
        absurd:
            task:
                src: 'generator/style.js',
                dest: 'app/style.css'

    grunt.loadNpmTasks 'grunt-contrib-jshint'
    grunt.loadNpmTasks 'grunt-contrib-watch'
    grunt.loadNpmTasks 'grunt-contrib-connect'
    grunt.loadNpmTasks 'grunt-contrib-copy'
    grunt.loadNpmTasks 'grunt-contrib-uglify'
    grunt.loadNpmTasks 'grunt-absurd'

    grunt.registerTask 'html', 'generate html', ()->
        html = eval grunt.file.read('generator/html.js')
        grunt.file.write 'app/index.html', html

    grunt.registerTask 'js', ['uglify:dev']
    grunt.registerTask 'css', ['absurd:task']
    grunt.registerTask 'server', ['connect:dev']
    grunt.registerTask 'default', ['jshint', 'html', 'css', 'js', 'copy:source','watch']