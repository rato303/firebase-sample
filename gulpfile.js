const gulp = require('gulp');

const webpack = require('webpack');
const webpackStream = require('webpack-stream');

const webpackConfig = require('./webpack.config.js');

const webServer = require('gulp-webserver');

gulp.task('run', () => {
  gulp.src(webpackConfig.output.path)
    .pipe(webServer({
      host: '0.0.0.0',
      port: 9000,
      fallback: 'index.html'
    }));
});

gulp.task('build', () => {
  return gulp.src(webpackConfig.entry)
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(gulp.dest(webpackConfig.output.path));
});
