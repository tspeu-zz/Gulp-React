"use strict"

//import modules

var gulp = require('gulp');
var conn = require('gulp-connect');
var open = require('gulp-open');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');
var lint = require('gulp-eslint');

//configuration values
var config = {
    port: 5500,
    baseUrl : 'http://localhost',
    paths: {
        html :  './src/*.html',
        js:     './src/**/*.js',
        indexJs:'./src/index.js',
        css:    [
            './node_modules/bootstrap/dist/css/bootstrap.min.css'
        ],
        dist :  './dist'      
    }
}

//launch a local server for dev
gulp.task('conn', function(){
    conn.server({
        root :  ['dist'],
        port:   config.port,
        base:   config.baseUrl,
        livereload: true    
    });
})

//open the url en el servidor
gulp.task('open', ['conn'], function(){
    gulp.src('dist/index.html')
    .pipe(open({
        uri: config.baseUrl + ':' + config.port + '/'
    }))
});


//copiar html a dist
gulp.task('html', function(){
    gulp.src(config.paths.html)
    .pipe(gulp.dest(config.paths.dist))
    .pipe(conn.reload());
});

//transform jsx to js
gulp.task('js',function(){
    browserify(config.paths.indexJs)
        .transform(reactify)
        .bundle()
        .on('error', console.error.bind(console))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(config.paths.dist + '/js'))
        .pipe(conn.reload());
});

//manage css
gulp.task('css', function(){
    gulp.src(config.paths.css)
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(config.paths.dist + '/css'));
});

//watch the files and reload
gulp.task('watch', function(){
    gulp.watch(config.paths.html, ['html']);
    gulp.watch(config.paths.js);
});


//defaul task
gulp.task('default', ['html','js', 'css', 'open', 'watch']);

