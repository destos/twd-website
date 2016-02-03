'use strict'
var gulp = require('gulp')
var sass = require('gulp-sass')
var livereload = require('gulp-livereload')
var webserver = require('gulp-webserver')
var gulpCopy = require('gulp-copy')
var clean = require('gulp-clean')

gulp.task('scss', function () {
  gulp.src('scss/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./dist/css/'))
  .pipe(gulp.dest('./src/css/'))
  .pipe(livereload())
})

gulp.task('webserver', function () {
  gulp.src('src/')
    .pipe(webserver({
      open: true,
      port: 8080
    }))
})

gulp.task('html', function () {
  return gulp.src('./src/**/*.html')
  .pipe(gulpCopy('./dist', {prefix: 1}))
  .pipe(livereload())
})

gulp.task('assets', function () {
  return gulp.src(['./src/img/*'])
  .pipe(gulpCopy('./dist', {prefix: 1}))
  .pipe(livereload())
})

gulp.task('clean', function () {
	return gulp.src('./dist', {read: false})
		.pipe(clean());
})


gulp.task('watch', function () {
  livereload.listen()
  gulp.watch('src/*.html', ['html'])
  gulp.watch('scss/**/*.scss', ['scss'])
})

gulp.task('build', ['clean', 'scss', 'assets', 'html'])
gulp.task('default', ['webserver', 'watch'])
