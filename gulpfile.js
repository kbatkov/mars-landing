const {src, dest, series, watch} = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const csso = require('gulp-csso')
const include = require('gulp-file-include')
const htmlmin = require('gulp-htmlmin')
const del = require('del')
const concat = require('gulp-concat')
const autoprefixer = require('gulp-autoprefixer')
const imagemin = require('gulp-imagemin')
const webpack = require("webpack-stream")
const sync = require('browser-sync').create()

function html() {
	return src('src/**.html')
		.pipe(include({
			prefix: '@@'
		}))
		.pipe(htmlmin({
			collapseWhitespace: true
		}))
		.pipe(dest('dist'))
}

function scss() {
	return src('src/scss/index.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			cascade: false
		}))
		.pipe(csso())
		.pipe(concat('index.css'))
		.pipe(dest('dist/css'))
}

function fonts() {
	return src('src/fonts/*')
		.pipe(dest('dist/fonts'))
}

function img() {
	return src('src/img/*')
		.pipe(imagemin())
		.pipe(dest('dist/img'))
}

function clear() {
	return del('dist')
}

function buildJs () {
	return src("./src/js/main.js")
							.pipe(webpack({
									mode: 'development',
									output: {
											filename: 'script.js'
									},
									watch: false,
									devtool: "source-map",
									module: {
											rules: [
												{
													test: /\.m?js$/,
													exclude: /(node_modules|bower_components)/,
													use: {
														loader: 'babel-loader',
														options: {
															presets: [['@babel/preset-env', {
																	debug: true,
																	corejs: 3,
																	useBuiltIns: "usage"
															}]]
														}
													}
												}
											]
										}
							}))
							.pipe(dest('./dist/js'))
							.on("end", sync.reload);
}

function buildJsProd() {
	return src("./src/js/main.js")
							.pipe(webpack({
									mode: 'production',
									output: {
											filename: 'script.js'
									},
									module: {
											rules: [
												{
													test: /\.m?js$/,
													exclude: /(node_modules|bower_components)/,
													use: {
														loader: 'babel-loader',
														options: {
															presets: [['@babel/preset-env', {
																	corejs: 3,
																	useBuiltIns: "usage"
															}]]
														}
													}
												}
											]
										}
							}))
							.pipe(dest('./dist/js'));
}

function serv() {
	sync.init({
		server: './dist'
	})
	
	watch('src/**.html', series(html)).on('change', sync.reload)
	watch('src/parts/**.html', series(html)).on('change', sync.reload)
	watch('src/scss/**.scss', series(scss)).on('change', sync.reload)
	watch('src/img/*', series(img)).on('change', sync.reload)
	watch('src/js/*', series(buildJs)).on('change', sync.reload)
}


exports.build = series(clear, fonts, scss, img, html, buildJsProd)
exports.serv = series(clear, fonts, scss, img, html, buildJs, serv)
exports.clear = clear
