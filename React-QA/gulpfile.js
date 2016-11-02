var gulp = require('gulp'),
		browserify = require('browserify'),
		browserSync = require('browser-sync'),
		reactify = require('reactify'),
		source = require('vinyl-source-stream'),
		port = process.env.port || 5000;		
gulp.task('browserify', function(){
	return browserify({
					entries: ['./app/js/main.js'],
					transform: [reactify]
				 })
				 .bundle()
				 .pipe(source('main.js'))
				 .pipe(gulp.dest('./dist/js'))
})
gulp.task('html', function(){
	gulp.src('./app/index.html')
			.pipe(gulp.dest('./'))
})
gulp.task('serve',['browserify','html'], function(){
		browserSync.init({
			server: './',
			port: port
		})
		gulp.watch('./app/**/*',['browserify','reload'])
})
gulp.task('reload', function(){
		browserSync.reload()
})
gulp.task('default',['serve'])