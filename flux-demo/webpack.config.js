var webpack = require('webpack');
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
	entry: './index.jsx',
	output: {
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx'],
	},
	module: {
		loaders: [
			{
				test: /\.js[x]?$/,
				exclude: /node_modules/,
				loaders: ['babel-loader?presets[]=es2015&presets[]=react'],
			},
		]
	},
	plugins: [
		new CommonsChunkPlugin('init.js'),
		new OpenBrowserPlugin({url: 'http://localhost:8080'})
	]
}