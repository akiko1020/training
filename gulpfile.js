var gulp = require('gulp');
var cssmin = require('gulp-cssmin');
var clean = require('gulp-clean');
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('hoge', function() {
	console.log('Hoge World!');
});

gulp.task('clean', function() {
	gulp.src('public') // 処理するファイルの指定
		.pipe(clean());
});

gulp.task('watch', function() {
	gulp.watch('source/css/*', ['cssmin']);
	gulp.watch('source/js/*', ['jsmin']);
});

gulp.task('cssmin', function() {
	gulp.src('source/css/*.css')
		.pipe(plumber()) // cssmin()でコケても終了しないように
		.pipe(autoprefixer())
		.pipe(cssmin())
		.pipe(gulp.dest('public/css'));
});

gulp.task('jsmin', function() {
	gulp.src('source/js/*.js')
		.pipe(plumber()) // uglify()でコケても終了しないように
		.pipe(uglify())
		.pipe(gulp.dest('public/js'));
});

gulp.task('default', function() {
	gulp.run(['clean', 'watch']); // タスクは非同期に実行される

});