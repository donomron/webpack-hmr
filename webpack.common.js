const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// javascript rule
const javascript = {
	test: /\.js$/,
	exclude: /node_modules/,
	use: {
		loader: 'babel-loader',
		options: {
			presets: ['@babel/preset-env']
		}
	}
};

const config = {
	entry: './src/js/index.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
	},
	module: {
		rules: [javascript]
	},
	resolve: {
	  alias: {
	    'js': path.resolve(__dirname, './src/js'),
	    'css': path.resolve(__dirname, './src/css'),
	  },
	  extensions: ['.js', '.jsx']
	},
	stats: {
		colors: true,
	},
	watchOptions: {
		ignored: /node_modules/,
	},
	plugins: [
		new HtmlWebpackPlugin({
		  template: './index.html',
		  hash: true,
		}),
	]
};

module.exports = config;