'use strict';
const gulp = require('gulp');
const gutil = require('gulp-util');
const plumber = require('gulp-plumber');

let srcDir = '../_src/';
let deployDir = '../docs/';

let config = {
    mapDir: '../_maps/',
    cssSrc: [
        srcDir + 'sass/**/*.scss'
    ],
    jsSrc: [
        srcDir + 'js/**/*.js'
    ],
    scriptName: 'script.js'
};

// リリース版？
let isRelease = (gutil.env.type === 'release');
if (isRelease) {
    console.log('release!!');
}

// CSSのタスク
const sass = require('gulp-dart-sass');
const autoprefixer = require('gulp-autoprefixer');

function css() {
    return gulp.src(config.cssSrc, {sourcemaps: !isRelease})
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions', 'ie 11', 'android 4.4'],
            cascade: false
        }))
        .pipe(gulp.dest(deployDir + 'css', {sourcemaps: config.mapDir}));
}

exports.css = css;

// JavaScript タスク
const concat = require('gulp-concat');
const uglifyES = require('uglify-es');
const uglifyComposer = require('gulp-uglify/composer');
const minify = uglifyComposer(uglifyES, console);

function js() {
    return gulp.src(config.jsSrc, {sourcemaps: !isRelease})
        .pipe(concat(config.scriptName))
        .pipe(minify({
            mangle: {
                // safariのES6バグ対策
                safari10: true
            }
        }))
        .pipe(gulp.dest(deployDir + 'js', {sourcemaps: config.mapDir}));
}

exports.js = js;

// Watch
function watch(done) {
    gulp.watch(config.cssSrc, gulp.task('css'));
    gulp.watch(config.jsSrc, gulp.task('js'));
    done();
}

// 監視
exports.default = gulp.series(gulp.parallel(css, js), watch);
