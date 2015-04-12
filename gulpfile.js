'use strict';

var gulp = require('gulp');
var mocha = require('gulp-mocha');

gulp.task('test', function () {
    return gulp.src('package.json', {read: false})
               .pipe(mocha());
});
