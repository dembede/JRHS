"use strict";

// Add gulp plugins
var gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  cleanCSS = require('gulp-clean-css'),
  sass = require('gulp-sass'),
  rename = require("gulp-rename"),
  browsersync = require("browser-sync").create();



// BrowserSync
function browserSync(done) {
  browsersync.init({
    open: false,
    // injectChanges: true,
    // proxy: 'http://localhost:3000/mayfair/dist',
    server: {
      baseDir: "./dist"
    }
  });
  done();
}

// BrowserSync Reload
function browserSyncReload(done) {
  browsersync.reload();
  done();
}

// CSS task
function css() {
  return gulp
    .src("src/sass/style.scss")
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("dist/css"))
    .pipe(browsersync.stream());
}

// Copy HTML files
function html() {
  return gulp
    .src('src/*.html')
    .pipe(gulp.dest('dist'))
    .pipe(browsersync.stream());
}

// Copy images
function images() {
  return gulp
    .src('src/img/*')
    .pipe(gulp.dest('dist/img'))
    .pipe(browsersync.stream());
}

// Scripts
function scripts() {
  return gulp
    .src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
    .pipe(browsersync.stream());
}

// Watch files
function watchFiles() {
  gulp.watch("src/sass/*", css);
  gulp.watch("src/*.html", html);
  gulp.watch("src/img/*", images);
  gulp.watch("src/js/*.js", scripts);
}

// Tasks
gulp.task("css", css);
gulp.task("html", html);
gulp.task("images", images);
gulp.task("scripts", scripts);

// build
gulp.task("build", gulp.parallel(css));

// watch
gulp.task("watch", gulp.parallel(watchFiles, browserSync));

// default
gulp.task("default", gulp.parallel('watch'));