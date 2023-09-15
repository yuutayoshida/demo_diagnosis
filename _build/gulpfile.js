'use strict';

// Modules
const gulp = require('gulp');
const gutil = require('gulp-util');
const plumber = require('gulp-plumber');
const ejs = require("gulp-ejs");
const rename = require("gulp-rename");
const fs = require("fs");
const merge = require("merge-stream");
const sass = require('gulp-dart-sass');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const uglifyES = require('uglify-es');
const uglifyComposer = require('gulp-uglify/composer');
const browserSync = require('browser-sync');

// Configurations
let srcDir = '../_src/';
let deployDir = '../docs/';
let isRelease = (gutil.env.type === 'release');
const jsonData = JSON.parse(fs.readFileSync("result.json", "utf8"));

let config = {
    mapDir: '../_maps/',
    ejsSrc: [srcDir + 'ejs/pages/'],
    cssSrc: [srcDir + 'sass/**/*.scss'],
    jsSrc: [srcDir + 'js/**/*.js'],
    scriptName: 'script.js'
};

if (isRelease) {
    console.log('release!!');
}

// HTML Task
function html() {
    let tasks = [];

    // resultページ
    for (const key in jsonData) {
        const item = jsonData[key];
        item.totalResult = key;
        const routingTask = gulp
            .src([`${srcDir}ejs/pages/**/__slug.ejs`])
            .pipe(ejs(item))
            .pipe(rename({ basename: key, extname: ".html" }))
            .pipe(gulp.dest(deployDir));
        tasks.push(routingTask);
    }

    // その他ページ
    const otherPagesTask = gulp
        .src([`${srcDir}ejs/pages/**/index.ejs`])
        .pipe(ejs())
        .pipe(rename({ extname: ".html" }))
        .pipe(gulp.dest(deployDir));

    tasks.push(otherPagesTask);

    return merge(tasks);
}

// CSS Task
function css() {
    return gulp.src(config.cssSrc, {sourcemaps: !isRelease})
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions', 'ie 11', 'android 4.4'],
            cascade: false
        }))
        .pipe(gulp.dest(`${deployDir}css`, {sourcemaps: config.mapDir}));
}

// JavaScript Task
const minify = uglifyComposer(uglifyES, console);
function js() {
    return gulp.src(config.jsSrc, {sourcemaps: !isRelease})
        .pipe(concat(config.scriptName))
        .pipe(minify({ mangle: { safari10: true } }))
        .pipe(gulp.dest(`${deployDir}js`, {sourcemaps: config.mapDir}));
}

// Browser Sync
function serve(done) {
    browserSync({
        server: {
            baseDir: deployDir,
            index: 'index.html'
        },
        notify: false
    });
    done();
}

function bsReload(done) {
    browserSync.reload();
    done();
}

// Watch Task
function watch(done) {
    gulp.watch(`${srcDir}ejs/pages/**/*.ejs`, gulp.series(html, bsReload)); 
    gulp.watch(config.cssSrc, gulp.series(css, bsReload)); 
    gulp.watch(config.jsSrc, gulp.series(js, bsReload));
    done();
}

// Exported Tasks
exports.html = html;
exports.css = css;
exports.js = js;
exports.default = gulp.series(gulp.parallel(html, css, js), watch);
exports.sync = gulp.series(gulp.parallel(html, css, js), gulp.parallel(serve, watch));
