
var path = require('path')
var webpack = require('webpack')

module.exports = {
	entry: "./dist/formBuilder.js",
	resolve: {
		moduleDirectories: [ './../node_modules', './../bower_components'],
	},

	output: {
		path: path.join(__dirname, 'dist'),
		filename: "add-formbuilder.min.js"
	},
	plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
    }),
    new webpack.optimize.OccurenceOrderPlugin()
	],
	module: {
		loaders: [
			{ test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
			{ test: /\.css$/, loaders: ['style', 'css'] }
			]
	}
};
