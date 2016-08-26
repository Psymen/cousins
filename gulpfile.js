// not complete do this later

var gulp = require('gulp');

var pkg = require('./package.json');
var dev = ['cleanJS','javascript'];
var prod = ['javascript', 'jspConversion', 'archive'];

gulp.task('vendor', function () {
    gulp.src('node_modules/angular/*.min.*')
        .pipe(gulp.dest('vendor'))

    gulp.src('node_modules/jquery/dist/*.min.*')
        .pipe(gulp.dest('vendor'))

    console.log("vendor piping done");

});