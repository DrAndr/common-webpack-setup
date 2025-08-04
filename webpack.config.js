const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HTMLPlugin = require('html-webpack-plugin');

const indexFile = process.env.INDEX_FILE;

module.exports = {
	mode: process.env.NODE_ENV || 'development',
	entry: indexFile,
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[fullhash].js',
		clean: true,
	},
	plugins: [
		new HTMLPlugin({template: './public/index.html'}),
		new CleanWebpackPlugin()
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.s[ac]ss$/i,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(png|jpg|jpeg|gif|svg)$/i,
				type: 'asset/resource',
			},
		],
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
}