'use strict';

var babel = require('gulp-babel');
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');
var runSequence = require('run-sequence');

gulp.task('jshint', function () {
    return gulp.src([
                    'src/**/*.es6',
                    'gulpfile.js',
                ])
               .pipe(jshint('.jshintrc'))
               .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('compile', function () {
    return gulp.src([
                    'src/**/*.es6',
                ], {base: 'src'})
               .pipe(babel())
               .pipe(gulp.dest('.'));
});

gulp.task('test:mocha', function () {
    return gulp.src('package.json', {read: false})
               .pipe(mocha());
});

gulp.task('test', function (cb) {
    runSequence('test:mocha', 'jshint', cb);
});

gulp.task('prepublish', ['compile']);
