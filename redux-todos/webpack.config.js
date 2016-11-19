module.exports = {
	entry: './src/index.jsx',
	output: {
		filename: 'bundle.js',
		publicPath: '/static/'
	},
	resolve: {
		extensions: ['','.js','.jsx']
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loaders: ['babel-loader?presets[]=es2015&presets[]=react']
		}]
	}
}